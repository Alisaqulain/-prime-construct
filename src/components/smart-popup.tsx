"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

export function SmartPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const key = "prime_popup_seen";
    if (sessionStorage.getItem(key)) return;

    const timer = window.setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(key, "1");
    }, 2200);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[75] grid place-items-end bg-black/55 p-3 backdrop-blur-sm sm:place-items-center sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.22 }}
            className="relative mb-[calc(var(--mobile-dock-h)+env(safe-area-inset-bottom,0px))] w-full max-w-md overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-[#0f0f0f] via-[#151515] to-[#090909] p-5 shadow-2xl sm:mb-0 sm:p-6"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 rounded-full border border-white/15 p-1.5 text-white/70 transition hover:border-white/30 hover:text-white"
              aria-label="Close popup"
            >
              <X size={14} />
            </button>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f0d77d]">
              <Sparkles size={12} />
              Premium Gypsum
            </p>
            <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl">Need smoother walls on your project?</h3>
            <p className="mt-2 text-sm text-white/70">
              Speak with a gypsum expert about material supply, application crews, or a complete project
              solution.
            </p>
            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
              <Link
                href="/contact#lead-form"
                onClick={() => setOpen(false)}
                className="button-modern w-full text-center sm:w-auto"
              >
                Talk to Gypsum Expert
              </Link>
              <Link
                href="/solutions"
                onClick={() => setOpen(false)}
                className="flex min-h-[48px] w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/10 sm:w-auto"
              >
                Explore Solutions
              </Link>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
