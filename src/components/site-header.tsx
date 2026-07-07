"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { navLinks } from "@/lib/data";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled || open
          ? "border-white/10 bg-black/85 shadow-xl backdrop-blur-xl"
          : "border-transparent bg-black/30 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none"
      )}
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-5 md:h-18 md:px-8">
        <Link href="/" className="group flex min-w-0 items-center gap-2.5 sm:gap-3" onClick={() => setOpen(false)}>
          <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-lg sm:h-11 sm:w-11">
            <Image
              src="/logo.png"
              alt="PRIME CONSTRUCT"
              fill
              className="object-contain p-1"
              sizes="44px"
              priority
            />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[9px] font-semibold uppercase leading-tight tracking-[0.22em] text-white/90 sm:text-[10px] sm:tracking-[0.32em]">
              <span className="text-white">PRIME</span>{" "}
              <span className="text-[#D4AF37]">CONSTRUCT</span>
            </p>
            <p className="mt-0.5 hidden text-[9px] uppercase tracking-[0.2em] text-white/45 min-[380px]:block">
              Premium Gypsum
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "text-sm transition-colors",
                pathname === link.href ? "text-[#D4AF37]" : "text-white/80 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact#lead-form"
            className="rounded-full bg-[#D4AF37] px-4 py-2 text-xs font-semibold text-black transition hover:brightness-110"
          >
            Talk to Expert
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-white/20 text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-black/98 lg:hidden"
            style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
          >
            <nav className="flex max-h-[min(70dvh,420px)] flex-col gap-1 overflow-y-auto px-4 py-4 sm:px-5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.25 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={clsx(
                      "flex min-h-[48px] items-center rounded-xl px-4 text-base font-medium transition active:scale-[0.99]",
                      pathname === link.href
                        ? "bg-[#D4AF37]/15 text-[#D4AF37]"
                        : "text-white/85 active:bg-white/5"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.3 }}
                className="mt-3 border-t border-white/10 pt-4"
              >
                <Link
                  href="/contact#lead-form"
                  onClick={() => setOpen(false)}
                  className="flex min-h-[52px] items-center justify-center rounded-2xl bg-[#D4AF37] text-sm font-semibold text-black active:scale-[0.98]"
                >
                  Talk to Gypsum Expert
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
