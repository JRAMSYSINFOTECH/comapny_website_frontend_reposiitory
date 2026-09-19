import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

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

// Keep this comfortably under Vercel's request body limit (4.5MB on most plans).
const MAX_RESUME_BYTES = 4 * 1024 * 1024; // 4MB

export async function POST(request) {
  let formData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid form submission" },
      { status: 400, headers: corsHeaders() }
    );
  }

  const title = (formData.get("title") || "").toString().trim();
  const firstName = (formData.get("firstName") || "").toString().trim();
  const lastName = (formData.get("lastName") || "").toString().trim();
  const email = (formData.get("email") || "").toString().trim();
  const mobile = (formData.get("mobile") || "").toString().trim();
  const address = (formData.get("address") || "").toString().trim();
  const qualification = (formData.get("qualification") || "").toString().trim();
  const yearOfPassing = (formData.get("yearOfPassing") || "").toString().trim();
  const experience = (formData.get("experience") || "").toString().trim();
  const jobTitle = (formData.get("jobTitle") || "").toString().trim();
  const resume = formData.get("resume");

  const name = `${title ? title + " " : ""}${firstName} ${lastName}`.trim();

  // ── Validation ──
  if (!title) {
    return NextResponse.json(
      { success: false, message: "Please select a title" },
      { status: 400, headers: corsHeaders() }
    );
  }
  if (!firstName || firstName.length < 2) {
    return NextResponse.json(
      { success: false, message: "A valid first name is required" },
      { status: 400, headers: corsHeaders() }
    );
  }
  if (!lastName) {
    return NextResponse.json(
      { success: false, message: "A valid last name is required" },
      { status: 400, headers: corsHeaders() }
    );
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { success: false, message: "A valid email is required" },
      { status: 400, headers: corsHeaders() }
    );
  }
  if (!mobile || mobile.replace(/\D/g, "").length < 7) {
    return NextResponse.json(
      { success: false, message: "A valid mobile number is required" },
      { status: 400, headers: corsHeaders() }
    );
  }
  if (!address || address.length < 5) {
    return NextResponse.json(
      { success: false, message: "A valid address is required" },
      { status: 400, headers: corsHeaders() }
    );
  }
  if (!qualification) {
    return NextResponse.json(
      { success: false, message: "Please select a qualification" },
      { status: 400, headers: corsHeaders() }
    );
  }
  if (!yearOfPassing) {
    return NextResponse.json(
      { success: false, message: "Year of passing is required" },
      { status: 400, headers: corsHeaders() }
    );
  }
  if (!jobTitle) {
    return NextResponse.json(
      { success: false, message: "Missing job reference" },
      { status: 400, headers: corsHeaders() }
    );
  }
  if (!resume || typeof resume === "string") {
    return NextResponse.json(
      { success: false, message: "Please attach your resume" },
      { status: 400, headers: corsHeaders() }
    );
  }

  const allowedTypes = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  if (resume.type && !allowedTypes.includes(resume.type)) {
    return NextResponse.json(
      { success: false, message: "Resume must be a PDF or Word document" },
      { status: 400, headers: corsHeaders() }
    );
  }
  if (resume.size > MAX_RESUME_BYTES) {
    return NextResponse.json(
      { success: false, message: "Resume must be under 4MB" },
      { status: 400, headers: corsHeaders() }
    );
  }

  const resumeBuffer = Buffer.from(await resume.arrayBuffer());

  // ── Zoho Mail transporter ──
  const transporter = nodemailer.createTransport({
    host: process.env.ZOHO_SMTP_HOST || "smtp.zoho.eu",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.verify();

    // ── Internal notification to HR, with resume attached ──
    await transporter.sendMail({
      from: `"JRAMSYS Careers" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📄 New Application: ${jobTitle} — ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;border:1px solid #e0e0e0;border-radius:10px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#1B5B6F,#2D8BA3);padding:28px 24px;text-align:center;">
            <h2 style="color:white;margin:0;font-size:22px;">📄 New Job Application</h2>
            <p style="color:rgba(255,255,255,0.85);margin:6px 0 0;font-size:14px;">${jobTitle}</p>
          </div>
          <div style="padding:28px 24px;">
            <table style="width:100%;border-collapse:collapse;font-size:15px;">
              <tr style="background:#f0f9fb;"><td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;width:38%;">Name</td><td style="padding:12px 14px;border:1px solid #e0e0e0;color:#222;">${name}</td></tr>
              <tr><td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;">Email</td><td style="padding:12px 14px;border:1px solid #e0e0e0;color:#222;"><a href="mailto:${email}" style="color:#1B5B6F;">${email}</a></td></tr>
              <tr style="background:#f0f9fb;"><td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;">Mobile</td><td style="padding:12px 14px;border:1px solid #e0e0e0;color:#222;">${mobile}</td></tr>
              <tr><td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;">Address</td><td style="padding:12px 14px;border:1px solid #e0e0e0;color:#222;">${address}</td></tr>
              <tr style="background:#f0f9fb;"><td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;">Qualification</td><td style="padding:12px 14px;border:1px solid #e0e0e0;color:#222;">${qualification}</td></tr>
              <tr><td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;">Year of Passing</td><td style="padding:12px 14px;border:1px solid #e0e0e0;color:#222;">${yearOfPassing}</td></tr>
              <tr style="background:#f0f9fb;"><td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;">Experience</td><td style="padding:12px 14px;border:1px solid #e0e0e0;color:#222;">${experience || "N/A"} years</td></tr>
              <tr><td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;">Applied For</td><td style="padding:12px 14px;border:1px solid #e0e0e0;color:#222;">${jobTitle}</td></tr>
            </table>
            <div style="margin-top:20px;padding:14px 16px;background:#fff8e1;border-left:4px solid #f59e0b;border-radius:4px;">
              <p style="margin:0;color:#92400e;font-size:14px;">📎 Resume attached to this email.</p>
            </div>
          </div>
          <div style="background:#f5f5f5;padding:14px;text-align:center;color:#aaa;font-size:12px;">JRAMSYS Careers System — Internal Notification</div>
        </div>
      `,
      attachments: [
        {
          filename: resume.name || "resume",
          content: resumeBuffer,
        },
      ],
    });

    // ── Confirmation to applicant ──
    await transporter.sendMail({
      from: `"JRAMSYS Careers" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `We've received your application, ${firstName}! ✅`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;border:1px solid #e0e0e0;border-radius:10px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#1B5B6F,#2D8BA3);padding:32px 24px;text-align:center;">
            <h2 style="color:white;margin:0;font-size:24px;">Thank you, ${firstName}! 🎉</h2>
            <p style="color:rgba(255,255,255,0.9);margin:8px 0 0;font-size:15px;">Your application has been received</p>
          </div>
          <div style="padding:28px 24px;">
            <p style="font-size:16px;color:#333;line-height:1.6;">Thank you for applying for the <strong>${jobTitle}</strong> position at <strong>JRAMSYS</strong>. Our team will review your application and get back to you if there's a match.</p>
            <p style="margin-top:24px;color:#555;font-size:14px;line-height:1.6;">Best regards,<br/><strong style="color:#1B5B6F;">JRAMSYS Team</strong></p>
          </div>
          <div style="background:#f5f5f5;padding:14px;text-align:center;color:#aaa;font-size:12px;">© JRAMSYS</div>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Application submitted successfully!" },
      { status: 200, headers: corsHeaders() }
    );
  } catch (error) {
    console.error("Zoho SMTP error:", error.message);
    return NextResponse.json(
      { success: false, message: "Failed to submit application. Please try again shortly." },
      { status: 500, headers: corsHeaders() }
    );
  }
}