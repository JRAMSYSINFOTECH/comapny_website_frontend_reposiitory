import nodemailer from "nodemailer";

function getTransport() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error(
      "Email service is not configured. Add SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and SMTP_FROM in Vercel Environment Variables."
    );
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
    requireTLS: true,
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000,
  });
}

export async function sendMail({ to, subject, text, html }) {
  const transport = getTransport();

  return transport.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER || "no-reply@jramsys.com",
    to,
    subject,
    text,
    html,
  });
}

export async function sendContactEmail({ name, email, message, country }) {
  const companyEmail = process.env.COMPANY_EMAIL || "officejram@gmail.com";
  const subject = `New contact inquiry from ${name} (${country})`;
  const text = `Name: ${name}\nEmail: ${email}\nCountry: ${country}\n\nMessage:\n${message}`;
  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>New contact inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    </div>
  `;

  await sendMail({
    to: companyEmail,
    subject,
    text,
    html,
  });

  await sendMail({
    to: email,
    subject: "We received your message - JRAMSYS",
    text: `Hi ${name},\n\nThank you for reaching out to JRAMSYS. We have received your message and will get back to you shortly.\n\nYour message:\n${message}`,
    html: `<div style="font-family: Arial, sans-serif; line-height: 1.6;"><h2>We received your message</h2><p>Hi ${name},</p><p>Thank you for reaching out to JRAMSYS. We have received your message and will get back to you shortly.</p><p><strong>Your message:</strong></p><p>${message.replace(/\n/g, "<br />")}</p></div>`,
  });
}

export async function sendCareerAlertEmail({ email }) {
  const companyEmail = process.env.COMPANY_EMAIL || "officejram@gmail.com";
  const subject = `Career notification request from ${email}`;
  const text = `A user requested career updates. Email: ${email}`;
  const html = `<div style="font-family: Arial, sans-serif; line-height: 1.6;"><h2>Career notification request</h2><p>A user requested career updates.</p><p><strong>Email:</strong> ${email}</p></div>`;

  await sendMail({
    to: companyEmail,
    subject,
    text,
    html,
  });

  await sendMail({
    to: email,
    subject: "You’re subscribed to JRAMSYS career updates",
    text: `Hi there,\n\nYou have subscribed to career updates from JRAMSYS. We will notify you when new opportunities open up.`,
    html: `<div style="font-family: Arial, sans-serif; line-height: 1.6;"><h2>You’re subscribed to career updates</h2><p>Hi there,</p><p>You have subscribed to career updates from JRAMSYS. We will notify you when new opportunities open up.</p></div>`,
  });
}
