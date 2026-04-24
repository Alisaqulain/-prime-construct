"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { MessageCircleMore } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setStatus(response.ok ? "Message sent successfully." : "Unable to send message right now.");
    event.currentTarget.reset();
  }

  return (
    <section className="section-shell py-24">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <p className="mt-3 max-w-2xl text-white/75">
        Let&apos;s talk about your next project. Our team responds quickly with tailored solutions.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <form onSubmit={onSubmit} className="glass-card space-y-4 p-6">
          <input required name="name" placeholder="Your Name" className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2" />
          <input required name="email" type="email" placeholder="Email" className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2" />
          <input name="company" placeholder="Company" className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2" />
          <input name="phone" placeholder="Phone" className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2" />
          <input name="projectType" placeholder="Project Type (Residential/Commercial)" className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2" />
          <textarea required name="message" placeholder="Tell us about your requirement" className="h-32 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2" />
          <button className="rounded-full bg-[#D4AF37] px-6 py-2 font-semibold text-black">Send Message</button>
          {status ? <p className="text-sm text-white/80">{status}</p> : null}
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
