import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

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
  const { name, email, phone, companyName, insuranceType, message } = await req.json();

  try {
    await transporter.sendMail({
      from: `"GreatLink Insurance" <${process.env.SMTP_USER}>`,
      to: "contact@greatlinkinsurance.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4;">Name</td><td style="padding:8px;">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4;">Email</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4;">Phone</td><td style="padding:8px;">${phone || "Not provided"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4;">Company</td><td style="padding:8px;">${companyName || "Not provided"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4;">Insurance Type</td><td style="padding:8px;">${insuranceType || "Not specified"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f4f4f4;">Message</td><td style="padding:8px;">${message}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
