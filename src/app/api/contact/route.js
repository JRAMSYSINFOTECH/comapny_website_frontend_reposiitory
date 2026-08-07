import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 200, headers: corsHeaders() });
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON body" },
      { status: 400, headers: corsHeaders() }
    );
  }

  const { name, email, message, country } = body;

  // ── Validation (mirrors the client-side validateForm rules) ──
  if (!name || name.trim().length < 2) {
    return NextResponse.json(
      { success: false, message: "A valid name is required" },
      { status: 400, headers: corsHeaders() }
    );
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { success: false, message: "A valid email is required" },
      { status: 400, headers: corsHeaders() }
    );
  }
  if (!message || message.trim().length < 10) {
    return NextResponse.json(
      { success: false, message: "Message must be at least 10 characters" },
      { status: 400, headers: corsHeaders() }
    );
  }

  const countryLabel =
    { in: "India", us: "United States", uk: "United Kingdom" }[country] || country || "N/A";

  // ── Gmail transporter ──
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // e.g. officejram@gmail.com
      pass: process.env.EMAIL_PASS, // Gmail App Password (16 chars, no spaces)
    },
  });

  try {
    await transporter.verify();

    // ── Internal notification email ──
    await transporter.sendMail({
      from: `"JRAMSYS Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📩 New Contact Form Message from ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;border:1px solid #e0e0e0;border-radius:10px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#1B5B6F,#2D8BA3);padding:28px 24px;text-align:center;">
            <h2 style="color:white;margin:0;font-size:22px;">📩 New Contact Form Message</h2>
            <p style="color:rgba(255,255,255,0.85);margin:6px 0 0;font-size:14px;">Someone reached out via the Contact Us page</p>
          </div>
          <div style="padding:28px 24px;">
            <table style="width:100%;border-collapse:collapse;font-size:15px;">
              <tr style="background:#f0f9fb;"><td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;width:38%;">Name</td><td style="padding:12px 14px;border:1px solid #e0e0e0;color:#222;">${name}</td></tr>
              <tr><td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;">Email</td><td style="padding:12px 14px;border:1px solid #e0e0e0;color:#222;"><a href="mailto:${email}" style="color:#1B5B6F;">${email}</a></td></tr>
              <tr style="background:#f0f9fb;"><td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;">Office / Region</td><td style="padding:12px 14px;border:1px solid #e0e0e0;color:#222;">${countryLabel}</td></tr>
            </table>
            <div style="margin-top:20px;padding:18px;background:#f8faff;border:1px solid #e0e0e0;border-radius:8px;">
              <p style="margin:0 0 8px;font-weight:bold;color:#555;font-size:14px;">Message:</p>
              <p style="margin:0;color:#222;font-size:15px;line-height:1.7;white-space:pre-line;">${message}</p>
            </div>
            <div style="margin-top:20px;padding:14px 16px;background:#fff8e1;border-left:4px solid #f59e0b;border-radius:4px;">
              <p style="margin:0;color:#92400e;font-size:14px;">⚡ Please reply to this person as soon as possible.</p>
            </div>
          </div>
          <div style="background:#f5f5f5;padding:14px;text-align:center;color:#aaa;font-size:12px;">JRAMSYS Contact System — Internal Notification</div>
        </div>
      `,
    });

    // ── Auto-reply to sender ──
    await transporter.sendMail({
      from: `"JRAMSYS" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `We received your message, ${name}! ✅`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;border:1px solid #e0e0e0;border-radius:10px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#1B5B6F,#2D8BA3);padding:32px 24px;text-align:center;">
            <h2 style="color:white;margin:0;font-size:24px;">Thank you for reaching out, ${name}! 🙏</h2>
            <p style="color:rgba(255,255,255,0.9);margin:8px 0 0;font-size:15px;">We've received your message</p>
          </div>
          <div style="padding:28px 24px;">
            <p style="font-size:16px;color:#333;line-height:1.6;">Thank you for contacting <strong>JRAMSYS</strong>. Our team will get back to you within <strong>24 hours</strong>.</p>
            <div style="margin-top:20px;padding:18px;background:#f8faff;border:1px solid #e0e0e0;border-radius:8px;">
              <p style="margin:0 0 8px;font-weight:bold;color:#555;font-size:14px;">Your message:</p>
              <p style="margin:0;color:#222;font-size:15px;line-height:1.7;white-space:pre-line;">${message}</p>
            </div>
            <p style="margin-top:24px;color:#555;font-size:14px;line-height:1.6;">Best regards,<br/><strong style="color:#1B5B6F;">The JRAMSYS Team</strong></p>
          </div>
          <div style="background:#f5f5f5;padding:14px;text-align:center;color:#aaa;font-size:12px;">© JRAMSYS</div>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200, headers: corsHeaders() }
    );
  } catch (error) {
    console.error("Gmail SMTP error:", error.message);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message. Please check your Gmail App Password in .env",
      },
      { status: 500, headers: corsHeaders() }
    );
  }
}