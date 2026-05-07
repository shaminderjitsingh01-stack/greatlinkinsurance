import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const labelMap: Record<string, string> = {
  business: "Business Owner",
  individual: "Individual",
  "hr-manager": "HR Manager",
  sme: "SME / Startup",
  "mid-size": "Mid-size Company",
  enterprise: "Large Enterprise",
  logistics: "Logistics / Transport",
  motor: "Motor Insurance",
  employee: "Employee Benefits",
  property: "Property Insurance",
  travel: "Travel Insurance",
  engineering: "Engineering / CAR",
  surety: "Surety Bonds",
  cost: "Best Price",
  coverage: "Comprehensive Coverage",
  speed: "Quick Processing",
  claims: "Easy Claims",
  urgent: "Within 1 week",
  soon: "1-4 weeks",
  exploring: "Just exploring",
};

function toLabel(val: string | string[]): string {
  if (Array.isArray(val)) return val.map((v) => labelMap[v] || v).join(", ");
  return labelMap[val] || val;
}

export async function POST(req: NextRequest) {
  const { contactInfo, answers } = await req.json();

  try {
    await resend.emails.send({
      from: "GreatLink Insurance <no-reply@greatlinkinsurance.com>",
      to: "contact@greatlinkinsurance.com",
      subject: `New Quote Request from ${contactInfo.name}`,
      html: `
        <h2>New Quote Request</h2>

        <h3>Contact Details</h3>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4;">Name</td><td style="padding:8px;">${contactInfo.name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4;">Email</td><td style="padding:8px;"><a href="mailto:${contactInfo.email}">${contactInfo.email}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4;">Phone</td><td style="padding:8px;">${contactInfo.phone}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4;">Company</td><td style="padding:8px;">${contactInfo.company || "Not provided"}</td></tr>
        </table>

        <h3>Insurance Needs</h3>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4;">Customer Type</td><td style="padding:8px;">${toLabel(answers["customer-type"] || "")}</td></tr>
          ${answers["business-type"] ? `<tr><td style="padding:8px;font-weight:bold;background:#f4f4f4;">Business Type</td><td style="padding:8px;">${toLabel(answers["business-type"])}</td></tr>` : ""}
          <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4;">Insurance Needed</td><td style="padding:8px;">${toLabel(answers["insurance-needs"] || [])}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4;">Priority</td><td style="padding:8px;">${toLabel(answers["priority"] || "")}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4;">Timeline</td><td style="padding:8px;">${toLabel(answers["timeline"] || "")}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quote email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
