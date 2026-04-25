"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { MessageCircleMore } from "lucide-react";
import { useAlerts } from "@/components/modern-alerts";

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
      alerts.success("Message sent", "Our team will contact you shortly.");
      event.currentTarget.reset();
    } catch {
      alerts.error("Network issue", "Please check your internet and retry.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="section-shell py-24">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <p className="mt-3 max-w-2xl text-white/75">
        Let&apos;s talk about your next project. Our team responds quickly with tailored solutions.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <form onSubmit={onSubmit} className="glass-card space-y-4 p-6">
          <input required name="name" placeholder="Your Name" className="input-modern" />
          <input required name="email" type="email" placeholder="Email" className="input-modern" />
          <input name="company" placeholder="Company" className="input-modern" />
          <input name="phone" placeholder="Phone" className="input-modern" />
          <input name="projectType" placeholder="Project Type (Residential/Commercial)" className="input-modern" />
          <textarea required name="message" placeholder="Tell us about your requirement" className="input-modern h-32 resize-none" />
          <button disabled={sending} className="button-modern disabled:cursor-not-allowed disabled:opacity-70">
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="space-y-5">
          <div className="glass-card p-6">
            <h2 className="text-xl font-semibold">Office</h2>
            <p className="mt-2 text-white/75">12 Skyline Industrial Avenue, Victoria Island, Lagos</p>
            <p className="mt-2 text-white/75">+91 98765 43210</p>
            <p className="mt-2 text-white/75">hello@primeconstruct.com</p>
          </div>
          <iframe
            title="Prime Construct Location"
            src="https://www.google.com/maps?q=Victoria+Island+Lagos&output=embed"
            className="h-64 w-full rounded-2xl border border-white/10"
            loading="lazy"
          />
          <div className="glass-card flex gap-4 p-6 text-sm text-white/80">
            <Link href="https://linkedin.com" target="_blank">LinkedIn</Link>
            <Link href="https://instagram.com" target="_blank">Instagram</Link>
            <Link href="https://x.com" target="_blank">X</Link>
          </div>
        </div>
      </div>

      <Link
        href="https://wa.me/919876543210"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-black shadow-lg"
      >
        <MessageCircleMore size={16} />
        WhatsApp
      </Link>
    </section>
  );
}
