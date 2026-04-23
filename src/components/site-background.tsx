"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function SiteBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Construction imagery — low contrast so content stays readable */}
      <Image
        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80"
        alt=""
        fill
        priority={false}
        sizes="100vw"
        className="object-cover opacity-[0.12]"
      />
      <div className="absolute inset-0 bg-[#0A0A0A]/90" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-[#0A0A0A]" />

      {/* Gold / depth orbs */}
      <motion.div
        className="absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/15 blur-[100px]"
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-24 bottom-1/4 h-[380px] w-[380px] rounded-full bg-[#D4AF37]/10 blur-[90px]"
        animate={{ x: [0, -35, 0], y: [0, 25, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-0 h-[280px] w-[600px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[80px]"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid + diagonal accent (echoes logo geometry) */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(115deg, transparent 48%, rgba(212,175,55,0.06) 49%, rgba(212,175,55,0.06) 51%, transparent 52%),
            radial-gradient(circle at 1px 1px, rgba(212,175,55,0.12) 1px, transparent 0)
          `,
          backgroundSize: "100% 100%, 28px 28px",
        }}
      />
      <div className="noise-overlay absolute inset-0 opacity-[0.04]" />
    </div>
  );
}
