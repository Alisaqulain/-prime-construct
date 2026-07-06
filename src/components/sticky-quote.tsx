"use client";

import Link from "next/link";

export function StickyQuote() {
  return (
    <Link
      href="/contact#lead-form"
      className="fixed bottom-5 left-1/2 z-40 -translate-x-1/2 rounded-full border border-[#D4AF37]/40 bg-black/85 px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#D4AF37] shadow-xl backdrop-blur-xl transition hover:border-[#D4AF37] hover:bg-black md:left-auto md:right-6 md:translate-x-0"
    >
      Talk to Gypsum Expert
    </Link>
  );
}
