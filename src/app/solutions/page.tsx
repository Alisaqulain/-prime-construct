"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { gypsumVsCement, mainSolutions } from "@/lib/data";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function SolutionsPage() {
  return (
    <div className="relative">
      <section className="section-shell border-b border-white/10 py-14 sm:py-16 md:py-28">
        <p className="premium-label">Solutions</p>
        <h1 className="page-title mt-4 max-w-4xl">
          Premium gypsum solutions for{" "}
          <span className="gold-gradient block sm:inline">material, application &amp; complete projects</span>
        </h1>
        <p className="page-lead mt-4 max-w-2xl sm:mt-5">
          Whether you need skilled labour, bulk material supply, or an end-to-end gypsum programme — we
          deliver with the same premium standard.
        </p>
        <Link href="/contact#lead-form" className="btn-primary mt-6 w-full sm:mt-8 sm:w-auto">
          Talk to Gypsum Expert
        </Link>
      </section>

      <section className="section-shell mobile-section">
        <div className="grid gap-10 lg:gap-14">
          {mainSolutions.map((solution, i) => (
            <motion.article
              key={solution.id}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={reveal}
              className={`grid items-center gap-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className={`relative aspect-[16/11] lg:aspect-auto lg:min-h-[380px] ${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/40" />
              </div>
              <div className={`p-5 sm:p-8 md:p-10 ${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                <p className="premium-label">{solution.subtitle}</p>
                <h2 className="mt-2 text-xl font-bold text-white sm:mt-3 sm:text-2xl md:text-3xl">
                  {solution.title}
                </h2>
                {solution.audience && (
                  <p className="mt-2 text-sm text-white/50">For {solution.audience}</p>
                )}
                <p className="mt-4 leading-relaxed text-white/70">{solution.description}</p>
                <ul className="mt-6 space-y-3">
                  {solution.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-3 text-sm text-white/85 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-[#D4AF37]"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact#lead-form"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37] transition hover:gap-3"
                >
                  Enquire about this solution <ArrowRight size={15} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-shell mobile-section pb-8 sm:pb-12 md:pb-24">
        <h2 className="section-title">Gypsum vs. conventional plaster</h2>
        <p className="mt-2 max-w-2xl text-sm text-white/65">
          Why builders and contractors are switching to gypsum for interior wall finishing.
        </p>
        <div className="compare-cards mt-6">
          {gypsumVsCement.map((row) => (
            <div key={row.metric} className="compare-card">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">{row.metric}</p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div>
                  <p className="text-[10px] uppercase text-white/45">Gypsum</p>
                  <p className="mt-0.5 text-sm text-emerald-300">{row.gypsum}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase text-white/45">Cement</p>
                  <p className="mt-0.5 text-sm text-white/55">{row.cement}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="compare-table-wrap mt-6 overflow-hidden rounded-2xl border border-white/10">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-white/[0.06] text-[#D4AF37]">
              <tr>
                <th className="whitespace-nowrap px-4 py-3 font-semibold">Metric</th>
                <th className="whitespace-nowrap px-4 py-3 font-semibold">Gypsum</th>
                <th className="whitespace-nowrap px-4 py-3 font-semibold">Cement</th>
              </tr>
            </thead>
            <tbody>
              {gypsumVsCement.map((row) => (
                <tr key={row.metric} className="border-t border-white/10">
                  <td className="px-4 py-3 text-white/90">{row.metric}</td>
                  <td className="px-4 py-3 text-emerald-300">{row.gypsum}</td>
                  <td className="px-4 py-3 text-white/60">{row.cement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
