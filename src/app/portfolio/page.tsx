"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { portfolioProjects, galleryItems } from "@/lib/data";

export default function PortfolioPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section className="section-shell py-20 md:py-28">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Projects / Portfolio</p>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">Work that earns trust</h1>
        <p className="mt-5 text-lg text-white/72">
          Selected gypsum plastering, ceiling, and feature-wall programmes—with scope and outcomes
          summarised so you can evaluate quality before we step on site.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {portfolioProjects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 * i, duration: 0.45 }}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition hover:border-[#D4AF37]/35"
          >
            <button
              type="button"
              onClick={() => setActiveImage(project.image)}
              className="relative block w-full overflow-hidden text-left"
            >
              <div className="relative aspect-[16/11]">
                <Image
                  src={project.image}
                  alt=""
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 transition group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]/90">Case study</p>
                  <h2 className="mt-1 text-xl font-bold text-white md:text-2xl">{project.title}</h2>
                  <p className="mt-1 text-sm text-white/75">{project.location}</p>
                </div>
              </div>
            </button>
            <div className="space-y-3 p-6 pt-4">
              <p className="text-sm text-white/80">
                <span className="font-semibold text-white">Scope — </span>
                {project.scope}
              </p>
              <p className="text-sm text-[#D4AF37]/95">
                <span className="font-semibold text-[#D4AF37]">Outcome — </span>
                {project.outcome}
              </p>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-20 border-t border-white/10 pt-16">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Process & site gallery</h2>
            <p className="mt-2 text-sm text-white/65">
              Before / after and application moments from live programmes.
            </p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37]">
            Discuss a similar scope <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mt-8 columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
          {galleryItems.map((item) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveImage(item.image)}
              className="break-inside-avoid overflow-hidden rounded-2xl border border-white/10 transition hover:border-[#D4AF37]/40"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={560}
                className="w-full object-cover"
              />
              <span className="sr-only">{item.title}</span>
            </button>
          ))}
        </div>
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/92 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute right-6 top-6 rounded-full border border-white/20 p-2 text-white hover:bg-white/10"
            onClick={() => setActiveImage(null)}
            aria-label="Close"
          >
            <X size={22} />
          </button>
          <Image
            src={activeImage}
            alt=""
            width={1400}
            height={900}
            className="max-h-[88vh] w-auto rounded-xl object-contain"
          />
        </div>
      )}
    </section>
  );
}
