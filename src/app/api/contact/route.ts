import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, phone, projectType, message } = body;
    const leadId = `LEAD-${Date.now()}`;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transport.sendMail({
        from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
        to: process.env.CONTACT_RECEIVER ?? process.env.SMTP_USER,
        subject: "New Contact Inquiry - PRIME CONSTRUCT",
        html: `
          <h2>New Contact Message</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Company:</b> ${company ?? "-"}</p>
          <p><b>Phone:</b> ${phone ?? "-"}</p>
          <p><b>Project Type:</b> ${projectType ?? "-"}</p>
          <p><b>Message:</b> ${message}</p>
          <p><b>Lead ID:</b> ${leadId}</p>
        `,
      });
    }

    return NextResponse.json({ success: true, leadId });
  } catch {
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
