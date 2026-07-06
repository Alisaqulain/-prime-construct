"use client";

import Link from "next/link";
import { MessageCircleMore } from "lucide-react";
import { contactInfo } from "@/lib/data";

export function WhatsAppFloat() {
  return (
    <Link
      href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(
        "Hi, I'd like to speak with a gypsum expert about my project."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-black shadow-xl shadow-black/40 transition hover:scale-105 hover:brightness-110 md:bottom-6 md:right-6"
    >
      <MessageCircleMore size={18} />
      <span className="hidden sm:inline">WhatsApp</span>
    </Link>
  );
}
