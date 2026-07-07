"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, PhoneCall } from "lucide-react";
import { contactInfo } from "@/lib/data";

const SCROLL_THRESHOLD = 280;

export function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const sync = () => {
      document.body.classList.toggle("has-mobile-dock", visible && mq.matches);
    };
    sync();
    mq.addEventListener("change", sync);
    return () => {
      document.body.classList.remove("has-mobile-dock");
      mq.removeEventListener("change", sync);
    };
  }, [visible]);

  const whatsappHref = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(
    "Hi, I'd like to speak with a gypsum expert about my project."
  )}`;

  return (
    <>
      {/* Mobile: full-width bottom dock */}
      <AnimatePresence>
        {visible && (
          <motion.div
            key="mobile-dock"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 32 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/92 backdrop-blur-xl md:hidden"
            style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
          >
            <div className="grid grid-cols-2 gap-2 p-2">
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl bg-[#25D366] text-[13px] font-semibold text-black active:scale-[0.98]"
              >
                <MessageCircle size={17} />
                WhatsApp
              </Link>
              <Link
                href="/contact#lead-form"
                className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl border border-[#D4AF37]/55 bg-[#D4AF37]/10 text-[13px] font-semibold text-[#D4AF37] active:scale-[0.98]"
              >
                <PhoneCall size={15} />
                Expert
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop: stacked pills bottom-right */}
      <AnimatePresence>
        {visible && (
          <motion.div
            key="desktop-stack"
            initial={{ opacity: 0, y: 28, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.94 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-8 right-6 z-50 hidden flex-col items-end gap-2.5 md:flex"
          >
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#25D366] py-2.5 pl-3 pr-4 text-sm font-semibold text-black shadow-lg shadow-[#25D366]/25 transition hover:shadow-[#25D366]/40"
              >
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition duration-500 group-hover:translate-x-full" />
                <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-black/10">
                  <MessageCircle size={17} />
                </span>
                <span className="relative">WhatsApp</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.16, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href="/contact#lead-form"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[#D4AF37]/50 bg-black/90 py-2.5 pl-3 pr-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#D4AF37] shadow-xl shadow-black/50 backdrop-blur-xl transition hover:border-[#D4AF37] hover:bg-black"
              >
                <motion.span
                  className="pointer-events-none absolute inset-0 rounded-full border border-[#D4AF37]/30"
                  animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#D4AF37]/15">
                  <PhoneCall size={15} className="text-[#D4AF37]" />
                </span>
                <span className="relative whitespace-nowrap">Talk to Expert</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
