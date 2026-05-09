"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { applicationServices, gypsumVsCement, supplierSolutions } from "@/lib/data";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function SolutionsPage() {
  return (
    <div className="relative">
      <section className="section-shell border-b border-white/10 py-20 md:py-28">
        <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Solutions</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
          Premium gypsum systems for <span className="gold-gradient">application & supply</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-white/70">
          Two integrated lines of business: execution-grade application services and import-backed
          supplier solutions—structured for developers, contractors, and consultants who need
          predictable outcomes.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-[#D4AF37]/20 transition hover:-translate-y-0.5 hover:brightness-110"
          >
            Request a quote
          </Link>
          <Link
            href="/services"
            className="inline-flex rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#D4AF37]/50 hover:bg-white/10"
          >
            Explore services <ArrowRight className="ml-2 inline" size={16} />
          </Link>
        </div>
      </section>

      <section className="section-shell py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-white/45">Execution</p>
              <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-white md:text-3xl">
                Application Services
              </h2>
              <p className="max-w-xl text-sm text-white/65">
                On-site workmanship, supervision, and finish discipline—matched to drawings and QA
                expectations.
              </p>
            </motion.div>

            <ul className="mt-8 space-y-4">
              {applicationServices.map((item, i) => (
                <motion.li
                  key={item.title}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={reveal}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#D4AF37]/35 hover:bg-white/[0.05]"
                >
                  <div className="flex gap-4">
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-[#D4AF37] opacity-90 transition group-hover:scale-110"
                      size={22}
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-white/45">Supply chain</p>
              <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-white md:text-3xl">
                Supplier Solutions
              </h2>
              <p className="max-w-xl text-sm text-white/65">
                Solution names displayed on imagery—paired with Dropshore-aligned logistics for
                material certainty at scale.
              </p>
            </motion.div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {supplierSolutions.map((item, i) => (
                <motion.article
                  key={item.name}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={reveal}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-xl transition hover:border-[#D4AF37]/40"
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4 pt-14">
                      <p className="text-base font-semibold leading-snug text-white drop-shadow-lg md:text-lg">
                        {item.name}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-white/80">{item.description}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-24">
        <h2 className="text-2xl font-bold md:text-3xl">Gypsum vs. conventional plaster</h2>
        <p className="mt-2 max-w-2xl text-sm text-white/65">
          A concise comparison for technical and commercial reviewers.
        </p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
          <div className="overflow-x-auto">
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
        </div>
      </section>
    </div>
  );
}
