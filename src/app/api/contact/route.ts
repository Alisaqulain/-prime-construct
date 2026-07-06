import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/** Lead shape prepared for future Notion CRM sync */
type LeadPayload = {
  name: string;
  phone: string;
  projectType: string;
  location: string;
  message: string;
  email?: string;
  company?: string;
  serviceRequired?: string;
  projectLocation?: string;
};

function normalizeLead(body: Record<string, unknown>): LeadPayload | null {
  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const message = String(body.message ?? "").trim();
  const projectType = String(body.projectType ?? body.serviceRequired ?? "").trim();
  const location = String(body.location ?? body.projectLocation ?? "").trim();

  if (!name || !phone || !message || !projectType || !location) {
    return null;
  }

  return {
    name,
    phone,
    projectType,
    location,
    message,
    email: body.email ? String(body.email) : undefined,
    company: body.company ? String(body.company) : undefined,
    serviceRequired: body.serviceRequired ? String(body.serviceRequired) : undefined,
    projectLocation: body.projectLocation ? String(body.projectLocation) : undefined,
  };
}

/** Structured for Notion CRM — set NOTION_WEBHOOK_URL when ready */
async function syncToNotionCrm(lead: LeadPayload, leadId: string) {
  const webhookUrl = process.env.NOTION_WEBHOOK_URL;
  if (!webhookUrl) return;

  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      source: "primeconstruct.com",
      leadId,
      createdAt: new Date().toISOString(),
      status: "New",
      ...lead,
    }),
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const lead = normalizeLead(body);

    if (!lead) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const leadId = `LEAD-${Date.now()}`;

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
        subject: `New gypsum lead — ${lead.name} — ${lead.projectType}`,
        html: `
          <h2>New gypsum enquiry</h2>
          <p><b>Lead ID:</b> ${leadId}</p>
          <p><b>Name:</b> ${lead.name}</p>
          <p><b>Phone:</b> ${lead.phone}</p>
          <p><b>Project type:</b> ${lead.projectType}</p>
          <p><b>Location:</b> ${lead.location}</p>
          <p><b>Message:</b></p><p>${lead.message}</p>
          ${lead.email ? `<p><b>Email:</b> ${lead.email}</p>` : ""}
          ${lead.company ? `<p><b>Company:</b> ${lead.company}</p>` : ""}
        `,
      });
    }

    try {
      await syncToNotionCrm(lead, leadId);
    } catch {
      /* Notion sync is optional — do not fail the lead submission */
    }

    return NextResponse.json({
      success: true,
      leadId,
      crm: { ready: true, synced: Boolean(process.env.NOTION_WEBHOOK_URL) },
    });
  } catch {
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
