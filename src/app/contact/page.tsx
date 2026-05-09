"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Clock, Mail, MessageCircleMore, Phone } from "lucide-react";
import { useAlerts } from "@/components/modern-alerts";
import { contactInfo, serviceOptionsForForm } from "@/lib/data";

export default function ContactPage() {
  const [sending, setSending] = useState(false);
  const alerts = useAlerts();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        alerts.error("Message not sent", "Please try again in a moment.");
        return;
      }
      alerts.success("Inquiry received", "Our team will contact you shortly.");
      event.currentTarget.reset();
    } catch {
      alerts.error("Network issue", "Please check your internet and retry.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="section-shell py-20 md:py-28">
      <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Contact</p>
      <h1 className="mt-4 text-4xl font-bold md:text-5xl">Start a confidential project conversation</h1>
      <p className="mt-5 max-w-2xl text-lg text-white/75">
        Share your scope and location—we will respond with availability, indicative timelines, and the
        right technical lead from our side.
      </p>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_minmax(0,0.95fr)]">
        <form id="lead-form" onSubmit={onSubmit} className="glass-card space-y-4 p-6 md:p-8 scroll-mt-28">
          <h2 className="text-lg font-semibold text-white">Lead form</h2>
          <p className="text-xs text-white/50">Fields marked * are required.</p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/55">
                Name *
              </label>
              <input required name="name" placeholder="Full name" className="input-modern" autoComplete="name" />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/55">
                Company name *
              </label>
              <input required name="company" placeholder="Company / firm" className="input-modern" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/55">
                Phone *
              </label>
              <input required name="phone" type="tel" placeholder="+91 …" className="input-modern" />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/55">
                Email *
              </label>
              <input required name="email" type="email" placeholder="you@company.com" className="input-modern" />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/55">
              Service required *
            </label>
            <select name="serviceRequired" required className="input-modern bg-black/40">
              <option value="">Select a service…</option>
              {serviceOptionsForForm.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/55">
              Project location *
            </label>
            <input
              required
              name="projectLocation"
              placeholder="City, site name, or region"
              className="input-modern"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/55">
              Message *
            </label>
            <textarea
              required
              name="message"
              placeholder="Rough area (sq ft), timeline, towers / floors, and any specification references"
              className="input-modern h-36 resize-y"
              rows={5}
            />
          </div>

          <button
            disabled={sending}
            className="button-modern w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-70"
          >
            {sending ? "Submitting…" : "Submit inquiry"}
          </button>
        </form>

        <div className="flex flex-col gap-6">
          <div className="glass-card p-7">
            <h2 className="text-lg font-semibold text-white">Direct contact</h2>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex gap-3 text-white/85">
                <Phone className="mt-0.5 shrink-0 text-[#D4AF37]" size={18} />
                <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex gap-3 text-white/85">
                <Mail className="mt-0.5 shrink-0 text-[#D4AF37]" size={18} />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex gap-3 text-white/80">
                <Clock className="mt-0.5 shrink-0 text-[#D4AF37]" size={18} />
                <span>{contactInfo.hours}</span>
              </li>
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-white/55">{contactInfo.address}</p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#D4AF37]/25 bg-gradient-to-br from-[#D4AF37]/25 via-[#1a1510] to-[#0A0A0A] px-7 py-8 text-black">
            <h3 className="text-xl font-bold">Need urgency on tender or site start?</h3>
            <p className="mt-2 max-w-md text-sm text-black/85">
              We route commercial and technical enquiries to the same desk so you receive a cohesive
              response—material lane, application lane, or both.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/calculator"
                className="inline-flex justify-center rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white hover:bg-black/90"
              >
                Run calculator
              </Link>
              <Link
                href={`https://wa.me/${contactInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-full border-2 border-black/30 bg-transparent px-5 py-2.5 text-sm font-semibold text-black hover:bg-black/10"
              >
                WhatsApp line
              </Link>
            </div>
          </div>

          <iframe
            title="Office map"
            src="https://www.google.com/maps?q=India+Mumbai+Bandra&output=embed"
            className="min-h-[220px] flex-1 w-full rounded-2xl border border-white/10"
            loading="lazy"
          />

          <div className="flex flex-wrap gap-4 px-1 text-xs text-white/55">
            <Link href="https://linkedin.com" target="_blank" className="hover:text-white">
              LinkedIn
            </Link>
            <Link href="https://instagram.com" target="_blank" className="hover:text-white">
              Instagram
            </Link>
            <Link href="https://x.com" target="_blank" className="hover:text-white">
              X
            </Link>
          </div>
        </div>
      </div>

      <Link
        href={`https://wa.me/${contactInfo.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-black shadow-lg transition hover:brightness-110"
      >
        <MessageCircleMore size={16} />
        WhatsApp
      </Link>
    </section>
  );
}
