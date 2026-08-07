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

  const { email } = body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { success: false, message: "A valid email is required" },
      { status: 400, headers: corsHeaders() }
    );
  }

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

    // ── Internal notification ──
    await transporter.sendMail({
      from: `"JRAMSYS Careers" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `🔔 New Career Notification Signup`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;border:1px solid #e0e0e0;border-radius:10px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#1B5B6F,#2D8BA3);padding:28px 24px;text-align:center;">
            <h2 style="color:white;margin:0;font-size:22px;">🔔 New Career Subscriber</h2>
            <p style="color:rgba(255,255,255,0.85);margin:6px 0 0;font-size:14px;">Someone signed up for job opening notifications</p>
          </div>
          <div style="padding:28px 24px;">
            <table style="width:100%;border-collapse:collapse;font-size:15px;">
              <tr style="background:#f0f9fb;"><td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;width:38%;">Email</td><td style="padding:12px 14px;border:1px solid #e0e0e0;color:#222;"><a href="mailto:${email}" style="color:#1B5B6F;">${email}</a></td></tr>
              <tr><td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;">Signed Up At</td><td style="padding:12px 14px;border:1px solid #e0e0e0;color:#222;">${new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })}</td></tr>
            </table>
            <div style="margin-top:20px;padding:14px 16px;background:#fff8e1;border-left:4px solid #f59e0b;border-radius:4px;">
              <p style="margin:0;color:#92400e;font-size:14px;">📋 Add this person to your careers mailing list.</p>
            </div>
          </div>
          <div style="background:#f5f5f5;padding:14px;text-align:center;color:#aaa;font-size:12px;">JRAMSYS Careers System — Internal Notification</div>
        </div>
      `,
    });

    // ── Confirmation to subscriber ──
    await transporter.sendMail({
      from: `"JRAMSYS Careers" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `You're on the list! 🔔`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;border:1px solid #e0e0e0;border-radius:10px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#1B5B6F,#2D8BA3);padding:32px 24px;text-align:center;">
            <h2 style="color:white;margin:0;font-size:24px;">You're on the list! 🎉</h2>
            <p style="color:rgba(255,255,255,0.9);margin:8px 0 0;font-size:15px;">Career notification subscription confirmed</p>
          </div>
          <div style="padding:28px 24px;">
            <p style="font-size:16px;color:#333;line-height:1.6;">Thank you for your interest in joining <strong>JRAMSYS</strong>! We'll notify you as soon as a new career opportunity becomes available.</p>
            <div style="margin-top:24px;padding:16px 18px;background:#f0f9fb;border-left:4px solid #1B5B6F;border-radius:6px;">
              <p style="margin:0;color:#1B5B6F;font-size:15px;">💼 Can't wait? Send your CV directly to:<br/><strong>officejram@gmail.com</strong></p>
            </div>
            <p style="margin-top:24px;color:#555;font-size:14px;line-height:1.6;">Best regards,<br/><strong style="color:#1B5B6F;">The JRAMSYS Team</strong></p>
          </div>
          <div style="background:#f5f5f5;padding:14px;text-align:center;color:#aaa;font-size:12px;">© JRAMSYS — You can unsubscribe by emailing us</div>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Subscribed successfully!" },
      { status: 200, headers: corsHeaders() }
    );
  } catch (error) {
    console.error("Gmail SMTP error:", error.message);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to subscribe. Please check your Gmail App Password in .env",
      },
      { status: 500, headers: corsHeaders() }
    );
  }
}