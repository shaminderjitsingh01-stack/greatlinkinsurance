import { NextRequest } from "next/server";

/* ------------------------------------------------------------------ *
 * HTML escaping — prevents spammers injecting links/markup into the
 * emails the client receives.
 * ------------------------------------------------------------------ */
export function escapeHtml(input: unknown): string {
  return String(input ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* ------------------------------------------------------------------ *
 * Input helpers
 * ------------------------------------------------------------------ */
export function isValidEmail(email: unknown): boolean {
  return (
    typeof email === "string" &&
    email.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  );
}

export function clamp(value: unknown, max: number): string {
  return String(value ?? "").slice(0, max);
}

/* ------------------------------------------------------------------ *
 * Client IP
 * ------------------------------------------------------------------ */
export function getClientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

/* ------------------------------------------------------------------ *
 * In-memory rate limiter (per function instance). Fluid Compute reuses
 * instances, so this catches the common case of a single bot looping.
 * For multi-region hard limits, move to Upstash/Redis later.
 * ------------------------------------------------------------------ */
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 3; // submissions per window per IP
const hits = new Map<string, number[]>();

export function rateLimit(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );

  if (recent.length >= RATE_LIMIT_MAX) {
    hits.set(ip, recent);
    return false; // blocked
  }

  recent.push(now);
  hits.set(ip, recent);

  // Opportunistic cleanup so the map doesn't grow unbounded.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      const fresh = times.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
      if (fresh.length === 0) hits.delete(key);
      else hits.set(key, fresh);
    }
  }

  return true; // allowed
}

/* ------------------------------------------------------------------ *
 * Origin check — only accept POSTs that came from our own site.
 * Blocks the "curl the endpoint directly in a loop" attack.
 * ------------------------------------------------------------------ */
const ALLOWED_HOSTS = [
  "greatlinkinsurance.com",
  "www.greatlinkinsurance.com",
];

export function checkOrigin(req: NextRequest): boolean {
  const source = req.headers.get("origin") || req.headers.get("referer");
  if (!source) return false; // browsers always send Origin on cross-site POST; absence = script

  try {
    const host = new URL(source).host.toLowerCase();
    if (ALLOWED_HOSTS.includes(host)) return true;
    if (host.endsWith(".vercel.app")) return true; // preview + prod vercel domains
    if (host.startsWith("localhost") || host.startsWith("127.0.0.1")) return true;
    return false;
  } catch {
    return false;
  }
}

/* ------------------------------------------------------------------ *
 * Honeypot + timing — both invisible to real users.
 * ------------------------------------------------------------------ */
export function isHoneypotTripped(value: unknown): boolean {
  return typeof value === "string" && value.trim().length > 0;
}

const MIN_SUBMIT_MS = 3000; // a real human can't fill a form in under 3s
export function isTooFast(renderedAt: unknown): boolean {
  const t = Number(renderedAt);
  if (!Number.isFinite(t) || t <= 0) return false; // missing -> don't block on this alone
  return Date.now() - t < MIN_SUBMIT_MS;
}

/* ------------------------------------------------------------------ *
 * Cloudflare Turnstile verification.
 * If TURNSTILE_SECRET_KEY is not set, verification is skipped (so the
 * site keeps working before keys are configured). All other layers
 * still apply.
 * ------------------------------------------------------------------ */
export async function verifyTurnstile(
  token: unknown,
  ip: string
): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.warn("TURNSTILE_SECRET_KEY not set — skipping Turnstile check");
    return true;
  }
  if (typeof token !== "string" || token.length === 0) return false;

  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret, response: token, remoteip: ip }),
      }
    );
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch (err) {
    console.error("Turnstile verify error:", err);
    return false;
  }
}

/* ------------------------------------------------------------------ *
 * Single guard used by both API routes. Runs cheap checks first.
 * `silent: true` means "pretend success" so bots don't learn they were
 * caught (used for honeypot + timing traps).
 * ------------------------------------------------------------------ */
export type GuardResult =
  | { ok: true; ip: string }
  | { ok: false; status: number; error: string; silent?: boolean };

export async function guardSubmission(opts: {
  req: NextRequest;
  honeypot?: unknown;
  renderedAt?: unknown;
  turnstileToken?: unknown;
}): Promise<GuardResult> {
  const { req, honeypot, renderedAt, turnstileToken } = opts;
  const ip = getClientIp(req);

  if (isHoneypotTripped(honeypot)) {
    return { ok: false, status: 200, error: "honeypot", silent: true };
  }

  if (isTooFast(renderedAt)) {
    return { ok: false, status: 200, error: "too_fast", silent: true };
  }

  if (!checkOrigin(req)) {
    return { ok: false, status: 403, error: "Forbidden" };
  }

  if (!rateLimit(ip)) {
    return {
      ok: false,
      status: 429,
      error: "Too many requests. Please try again in a minute.",
    };
  }

  const human = await verifyTurnstile(turnstileToken, ip);
  if (!human) {
    return {
      ok: false,
      status: 403,
      error: "Verification failed. Please refresh and try again.",
    };
  }

  return { ok: true, ip };
}
