"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/hero-section";
import { VideoTestimonialsSection } from "@/components/video-testimonials-section";
import { FaqAccordion } from "@/components/faq-accordion";
import {
  caseStudyLayoutPreview,
  faqs,
  gypsumProducts,
  gypsumVsCement,
  mainSolutions,
  targetAudience,
  valueStack,
} from "@/lib/data";

const sectionReveal = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Home() {
  const preview = caseStudyLayoutPreview;

  return (
    <div className="relative">
      <HeroSection />

      {/* What is gypsum — instant clarity */}
      <motion.section
        className="section-shell mobile-section"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionReveal}
      >
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=1200&q=80"
              alt="Premium gypsum plaster material"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <p className="absolute bottom-5 left-5 text-sm font-medium text-white/90">
              Premium gypsum plaster — material + application
            </p>
          </div>
          <div>
            <p className="premium-label">What we do</p>
            <h2 className="section-title mt-3">
              Gypsum plaster that solves your wall finishing problems
            </h2>
            <p className="mt-5 text-white/75 leading-relaxed">
              Cement plaster slows programmes with curing cycles and uneven finishes. Prime Construction
              delivers premium gypsum plaster — smoother walls, faster dry times, and professional
              application teams ready for your site.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {targetAudience.map((segment) => (
                <div
                  key={segment}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 text-center text-sm font-semibold text-white/90 transition hover:border-[#D4AF37]/35"
                >
                  {segment}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Solutions preview */}
      <motion.section
        className="section-shell mobile-section"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionReveal}
      >
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="premium-label">Solutions</p>
            <h2 className="section-title mt-2">Three ways we work with you</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Application service, material supply, or complete project delivery — choose what fits your
              programme.
            </p>
          </div>
          <Link
            href="/solutions"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#D4AF37]/50 px-5 py-2.5 text-sm font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37]/12"
          >
            All solutions <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {mainSolutions.map((solution, i) => (
            <motion.article
              key={solution.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-black/30 shadow-xl transition hover:border-[#D4AF37]/40"
            >
              <div className="relative aspect-[16/11]">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width:1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                {solution.audience && (
                  <p className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[10px] uppercase tracking-wider text-white/80 backdrop-blur-sm">
                    {solution.audience}
                  </p>
                )}
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">{solution.subtitle}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{solution.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{solution.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {solution.highlights.map((h) => (
                    <li key={h} className="text-xs text-white/55 before:mr-2 before:text-[#D4AF37] before:content-['·']">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Products teaser */}
      <motion.section
        className="section-shell mobile-section"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionReveal}
      >
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">Products</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Premium gypsum plaster range</h2>
          </div>
          <Link href="/products" className="text-sm font-semibold text-[#D4AF37] hover:underline">
            View all products →
          </Link>
        </div>
        <div className="mt-10 mobile-scroll-row md:mt-12 md:grid md:grid-cols-3 md:gap-6">
          {gypsumProducts.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 * i }}
              className="mobile-scroll-item glass-card overflow-hidden p-0 transition hover:border-[#D4AF37]/35 md:w-auto"
            >
              <div className="relative h-44">
                <Image src={product.image} alt={product.name} fill className="object-cover" sizes="33vw" />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-[#D4AF37]">{product.tagline}</p>
                <p className="mt-1 font-semibold text-white">{product.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Value + comparison */}
      <motion.section
        className="section-shell mobile-section"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionReveal}
      >
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Why gypsum wins</h2>
            <div className="mt-8 space-y-4">
              {valueStack.map((point, i) => (
                <motion.div
                  key={point.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#D4AF37]/30"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.06 * i }}
                >
                  <p className="font-semibold text-white">{point.title}</p>
                  <p className="mt-1 text-sm text-white/70 leading-relaxed">{point.copy}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold sm:text-xl">Gypsum vs cement plaster</h3>
            {/* Mobile: card layout */}
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
            {/* Desktop: table */}
            <div className="compare-table-wrap mt-6 overflow-hidden rounded-2xl border border-white/10">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-white/[0.06] text-[#D4AF37]">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Metric</th>
                    <th className="px-4 py-3 font-semibold">Gypsum</th>
                    <th className="px-4 py-3 font-semibold">Cement</th>
                  </tr>
                </thead>
                <tbody>
                  {gypsumVsCement.map((row) => (
                    <tr key={row.metric} className="border-t border-white/10">
                      <td className="px-4 py-3 text-white/90">{row.metric}</td>
                      <td className="px-4 py-3 text-emerald-300">{row.gypsum}</td>
                      <td className="px-4 py-3 text-white/55">{row.cement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Case studies preview — empty state */}
      <motion.section
        className="section-shell mobile-section"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionReveal}
      >
        <div className="text-center">
          <p className="premium-label">Case studies</p>
          <h2 className="section-title mt-3">Real Project Stories Coming Soon</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/65">
            Documented before, process, and after stories from live gypsum projects — with video proof.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-dashed border-[#D4AF37]/30 bg-[#D4AF37]/[0.04] p-5 sm:mt-12 sm:p-8 md:p-12">
          <div className="grid gap-4 md:grid-cols-3">
            {preview.phases.map((phase) => (
              <div
                key={phase.phase}
                className="rounded-2xl border border-white/10 bg-black/40 p-5 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10">
                  <span className="text-xs font-bold uppercase text-[#D4AF37]">
                    {phase.phase === "before" ? "1" : phase.phase === "process" ? "2" : "3"}
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold text-white">{phase.label}</p>
                <p className="mt-2 text-xs text-white/55">{phase.description}</p>
                <div className="mt-4 aspect-video rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center">
                  <span className="text-[10px] uppercase tracking-wider text-white/35">Video slot</span>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/case-studies"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37] hover:underline"
          >
            View case studies page <ArrowRight size={14} />
          </Link>
        </div>
      </motion.section>

      <VideoTestimonialsSection />

      {/* FAQ */}
      <motion.section
        className="section-shell mobile-section"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionReveal}
      >
        <div className="mx-auto max-w-4xl">
          <p className="premium-label">FAQ</p>
          <h2 className="section-title mt-2">Common questions about gypsum</h2>
          <div className="mt-8">
            <FaqAccordion items={faqs} />
          </div>
          <Link href="/faqs" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37]">
            Full FAQ page <ArrowRight size={14} />
          </Link>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        className="section-shell pb-20 sm:pb-24 md:pb-28"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={sectionReveal}
      >
        <motion.div
          className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#D4AF37] via-[#e8c85c] to-[#b8941f] px-5 py-10 text-black shadow-2xl shadow-[#D4AF37]/20 sm:px-8 sm:py-12 md:px-12 md:py-16"
          whileHover={{ scale: 1.005 }}
          transition={{ duration: 0.35 }}
        >
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">Ready for smoother walls?</h2>
          <p className="mt-3 max-w-2xl text-base text-black/82">
            Speak with a gypsum expert about material supply, application crews, or a complete project
            solution for your site.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact#lead-form"
              className="inline-flex justify-center rounded-full bg-black px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#151515]"
            >
              Talk to Gypsum Expert
            </Link>
            <Link
              href="/solutions"
              className="inline-flex justify-center rounded-full border-2 border-black/35 bg-transparent px-8 py-3.5 text-sm font-semibold text-black transition hover:bg-black/10"
            >
              Explore Solutions
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
