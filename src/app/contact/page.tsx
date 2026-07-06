"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Clock, Mail, Phone } from "lucide-react";
import { useAlerts } from "@/components/modern-alerts";
import { contactInfo, projectTypeOptionsForForm } from "@/lib/data";

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
      alerts.success("Inquiry received", "Our gypsum expert will contact you shortly.");
      event.currentTarget.reset();
    } catch {
      alerts.error("Network issue", "Please check your internet and retry.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="section-shell py-16 sm:py-20 md:py-28">
      <p className="premium-label">Contact</p>
      <h1 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">Talk to a gypsum expert</h1>
      <p className="mt-4 max-w-2xl text-base text-white/75 sm:mt-5 sm:text-lg">
        Share your project type and location — we will respond with material options, application
        availability, and indicative timelines.
      </p>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_minmax(0,0.95fr)]">
        <form id="lead-form" onSubmit={onSubmit} className="glass-card space-y-4 p-5 sm:p-6 md:p-8 scroll-mt-[5.5rem]">
          <h2 className="text-lg font-semibold text-white">Quick enquiry</h2>
          <p className="text-xs text-white/50">Fields marked * are required.</p>

          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/55">
              Name *
            </label>
            <input required name="name" placeholder="Full name" className="input-modern" autoComplete="name" />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/55">
              Phone *
            </label>
            <input required name="phone" type="tel" placeholder="+91 …" className="input-modern" autoComplete="tel" />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/55">
              Project type *
            </label>
            <select name="projectType" required className="input-modern bg-black/40">
              <option value="">Select project type…</option>
              {projectTypeOptionsForForm.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/55">
              Location *
            </label>
            <input
              required
              name="location"
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
              placeholder="Rough area (sq ft), timeline, and any specific requirements"
              className="input-modern h-36 resize-y"
              rows={5}
            />
          </div>

          <button
            disabled={sending}
            className="button-modern w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-70"
          >
            {sending ? "Submitting…" : "Talk to Gypsum Expert"}
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

          <div className="overflow-hidden rounded-3xl border border-[#D4AF37]/25 bg-gradient-to-br from-[#D4AF37]/25 via-[#1a1510] to-[#0A0A0A] px-7 py-8">
            <h3 className="text-xl font-bold text-white">Prefer WhatsApp?</h3>
            <p className="mt-2 max-w-md text-sm text-white/70">
              Message us directly for quick answers on gypsum material, application crews, or project
              timelines.
            </p>
            <Link
              href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(
                "Hi, I'd like to speak with a gypsum expert about my project."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
            >
              Chat on WhatsApp
            </Link>
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
    </section>
  );
}
