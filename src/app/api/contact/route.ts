import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  guardSubmission,
  escapeHtml,
  isValidEmail,
  clamp,
} from "@/lib/anti-spam";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function POST(req: NextRequest) {
  let body: {
    name?: string;
    email?: string;
    phone?: string;
    companyName?: string;
    insuranceType?: string;
    message?: string;
    honeypot?: string;
    renderedAt?: number;
    turnstileToken?: string;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { honeypot, renderedAt, turnstileToken } = body;

  // Anti-spam gate
  const guard = await guardSubmission({ req, honeypot, renderedAt, turnstileToken });
  if (!guard.ok) {
    if (guard.silent) return NextResponse.json({ success: true });
    return NextResponse.json({ error: guard.error }, { status: guard.status });
  }

  // Server-side validation
  const name = clamp(body.name, 100).trim();
  const email = clamp(body.email, 254).trim();
  const phone = clamp(body.phone, 40).trim();
  const companyName = clamp(body.companyName, 150).trim();
  const insuranceType = clamp(body.insuranceType, 60).trim();
  const message = clamp(body.message, 5000).trim();

  if (!name || !message) {
    return NextResponse.json({ error: "Name and message are required" }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "A valid email is required" }, { status: 400 });
  }

  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    phone: escapeHtml(phone),
    companyName: escapeHtml(companyName),
    insuranceType: escapeHtml(insuranceType),
    message: escapeHtml(message).replace(/\n/g, "<br>"),
  };

  try {
    await transporter.sendMail({
      from: `"GreatLink Insurance" <${process.env.SMTP_USER}>`,
      to: "contact@greatlinkinsurance.com",
      subject: `New Contact Form Submission from ${safe.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4;">Name</td><td style="padding:8px;">${safe.name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4;">Email</td><td style="padding:8px;"><a href="mailto:${safe.email}">${safe.email}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4;">Phone</td><td style="padding:8px;">${safe.phone || "Not provided"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4;">Company</td><td style="padding:8px;">${safe.companyName || "Not provided"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4;">Insurance Type</td><td style="padding:8px;">${safe.insuranceType || "Not specified"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4;">Message</td><td style="padding:8px;">${safe.message}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
