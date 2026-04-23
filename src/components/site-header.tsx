"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { navLinks } from "@/lib/data";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-white/10 bg-black/70 shadow-xl backdrop-blur-xl"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-lg transition group-hover:border-[#D4AF37]/40 group-hover:shadow-[#D4AF37]/10">
            <Image
              src="/logo.png"
              alt="PRIME CONSTRUCT"
              fill
              className="object-contain p-1"
              sizes="44px"
              priority
            />
          </span>
          <div className="hidden min-[380px]:block">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/90">
              <span className="text-white">PRIME</span>{" "}
              <span className="text-[#D4AF37]">CONSTRUCT</span>
            </p>
            <p className="mt-0.5 text-[9px] uppercase tracking-[0.28em] text-white/45">
              Building dreams
            </p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
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
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex rounded border border-white/20 p-2 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-black/95 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "rounded px-2 py-2 text-sm",
                  pathname === link.href ? "bg-white/10 text-[#D4AF37]" : "text-white/80"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
