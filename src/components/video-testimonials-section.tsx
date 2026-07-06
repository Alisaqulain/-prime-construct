"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { videoInterviewPrompts, videoTestimonialSlots } from "@/lib/data";

const sectionReveal = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export function VideoTestimonialsSection() {
  return (
    <motion.section
      className="section-shell py-14 md:py-24"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={sectionReveal}
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="premium-label">Customer voices</p>
        <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">Hear from our customers</h2>
        <p className="mt-4 text-sm text-white/70 sm:text-base">
          Real video stories from builders, contractors, and homeowners — coming soon.
        </p>
      </div>

      <div className="mobile-scroll-row mt-10 md:mt-12 md:grid md:grid-cols-3 md:gap-6">
        {videoTestimonialSlots.map((slot, i) => (
          <motion.article
            key={slot.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
            className="mobile-scroll-item group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition hover:border-[#D4AF37]/35 md:w-auto"
          >
            <div className="relative aspect-[3/4] bg-gradient-to-br from-[#1a1510] via-[#0f0f0f] to-black sm:aspect-[9/14]">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-5 text-center sm:gap-4 sm:p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 sm:h-16 sm:w-16">
                  <Play size={22} className="ml-1 text-[#D4AF37]" fill="currentColor" />
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] sm:tracking-[0.25em]">
                  {slot.audience}
                </p>
                <p className="text-sm text-white/55">Video interview coming soon</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:mt-10 sm:p-6">
        <p className="text-center text-xs uppercase tracking-[0.18em] text-white/45 sm:tracking-[0.2em]">
          Interview structure preview
        </p>
        <ul className="mt-4 space-y-2.5">
          {videoInterviewPrompts.map((prompt) => (
            <li key={prompt} className="flex items-start gap-2.5 text-sm text-white/65">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#D4AF37]" />
              {prompt}
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
