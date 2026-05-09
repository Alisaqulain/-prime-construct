"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/animated-counter";
import {
  applicationServices,
  caseStudies,
  faqs,
  heroServiceHighlights,
  heroStats,
  supplierSolutions,
  targetAudience,
  testimonials,
  trustLogos,
  valueStack,
} from "@/lib/data";
import { FaqAccordion } from "@/components/faq-accordion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const sectionReveal = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Home() {
  const previewSupplier = supplierSolutions.slice(0, 3);

  return (
    <div className="relative">
      <section className="relative flex min-h-[min(100dvh,900px)] items-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full scale-105 object-cover"
          src="https://cdn.coverr.co/videos/coverr-construction-site-1579/1080p.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/82 via-black/74 to-[#0A0A0A]" />
        <motion.div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(212,175,55,0.14),transparent_58%)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />

        <div className="section-shell relative z-10 py-28 md:py-32">
          <motion.div
            initial="hidden"
            animate="show"
            className="mb-6 flex items-center gap-4"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
          >
            <motion.div
              custom={0}
              variants={fadeUp}
              className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-white/15 bg-black/45 shadow-2xl backdrop-blur-sm md:h-[4.75rem] md:w-[4.75rem]"
            >
              <Image
                src="/logo.png"
                alt="PRIME CONSTRUCT logo"
                fill
                className="object-contain p-2"
                sizes="80px"
                priority
              />
            </motion.div>
            <motion.div custom={1} variants={fadeUp}>
              <p className="text-sm uppercase tracking-[0.38em] text-[#D4AF37]">Prime Construct</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.32em] text-white/52">
                Premium gypsum plastering · Supply &amp; execution
              </p>
            </motion.div>
          </motion.div>

          <motion.h1
            className="max-w-5xl font-[family-name:var(--font-montserrat)] text-[2rem] font-bold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            Premium gypsum plastering—for developers and contractors who need{" "}
            <span className="gold-gradient">speed without compromising finish.</span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/82 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
          >
            Engineer-grade supply through our Dropshore-aligned import network, paired with disciplined
            on-site application. One partner for specification, logistics, and a paint-ready outcome.
          </motion.p>

          <motion.ul
            className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-2"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
          >
            {heroServiceHighlights.map((line) => (
              <li
                key={line}
                className="flex items-start gap-2 rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-white/88 backdrop-blur-md"
              >
                <CheckCircle2 className="mt-0.5 shrink-0 text-[#D4AF37]" size={17} />
                <span>{line}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.42 }}
          >
            <Link
              href="/contact#lead-form"
              className="inline-flex justify-center rounded-full bg-[#D4AF37] px-8 py-3.5 text-sm font-semibold text-black shadow-lg shadow-[#D4AF37]/28 transition hover:-translate-y-0.5 hover:brightness-110"
            >
              Request a quote
            </Link>
            <Link
              href="/services"
              className="inline-flex justify-center rounded-full border border-white/35 bg-white/8 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#D4AF37]/55 hover:bg-white/14"
            >
              Get consultation
            </Link>
          </motion.div>

          <div className="mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/12 bg-black/48 p-4 backdrop-blur-md transition hover:border-white/18"
              >
                <p className="text-2xl font-bold text-[#D4AF37] md:text-3xl">
                  {stat.value === 0 ? "No" : <AnimatedCounter value={stat.value} />}
                  {stat.suffix}
                </p>
                <p className="mt-1 text-sm text-white/72">{stat.label}</p>
              </div>
            ))}
          </div>

          <motion.div
            className="mt-14 flex items-center gap-2 text-sm text-white/65"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={16} className="text-[#D4AF37]" />
            Scroll to explore
          </motion.div>
        </div>
      </section>

      <motion.section
        className="section-shell py-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionReveal}
      >
        <p className="text-center text-xs uppercase tracking-[0.35em] text-white/50">
          Trusted by practitioners across India
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-6">
          {trustLogos.map((logo) => (
            <div
              key={logo}
              className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-3 text-center text-xs text-white/75 transition hover:border-[#D4AF37]/25"
            >
              {logo}
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="section-shell py-16 md:py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionReveal}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">The challenge</p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">Construction programmes leak time in the finishing lane</h2>
        <p className="mt-4 max-w-3xl text-white/75 leading-relaxed">
          Cement plaster, curing cycles, and uneven substrates extend snagging—and erode margins. We replace
          that uncertainty with a governed gypsum route: dependable material backed by craftsmen who finish to
          spec.
        </p>
      </motion.section>

      <motion.section
        className="section-shell pb-16 md:pb-24"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionReveal}
      >
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">Solutions</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Application services · Supplier programmes</h2>
            <p className="mt-3 max-w-2xl text-white/72">
              A single roadmap: what we execute on your slab, and what we move through our import & logistics
              stack—with Dropshore-aligned reliability.
            </p>
          </div>
          <Link
            href="/solutions"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#D4AF37]/50 px-5 py-2.5 text-sm font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37]/12"
          >
            Full solutions overview <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="text-xl font-semibold text-white md:text-2xl">Application Services</h3>
            <p className="mt-2 text-sm text-white/60">Gypsum plaster, ceilings, and feature-wall execution.</p>
            <ul className="mt-6 space-y-3">
              {applicationServices.slice(0, 4).map((item) => (
                <li
                  key={item.title}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-[#D4AF37]/35"
                >
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#D4AF37]" size={18} />
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="mt-1 text-sm text-white/70">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white md:text-2xl">Supplier Solutions</h3>
            <p className="mt-2 text-sm text-white/60">Names on programme cards—premium by design.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {previewSupplier.map((item) => (
                <motion.article
                  key={item.name}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/35 shadow-lg transition hover:border-[#D4AF37]/40 xl:aspect-[4/5]"
                >
                  <div className="relative aspect-[4/5] xl:absolute xl:inset-0 xl:aspect-auto">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width:768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4 pt-16">
                      <p className="text-sm font-semibold leading-snug text-white sm:text-[15px]">{item.name}</p>
                      <p className="mt-2 line-clamp-3 text-[11px] leading-relaxed text-white/78">{item.description}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section-shell py-14 md:py-18"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionReveal}
      >
        <h2 className="text-3xl font-bold md:text-4xl">Value proposition</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {valueStack.map((point, i) => (
            <motion.div
              key={point.title}
              className="glass-card flex items-start gap-3 p-5 transition hover:border-[#D4AF37]/35"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 * i }}
              whileHover={{ y: -4 }}
            >
              <CheckCircle2 className="mt-0.5 shrink-0 text-[#D4AF37]" size={18} />
              <div>
                <p className="font-semibold text-white">{point.title}</p>
                <p className="text-sm text-white/75 leading-relaxed">{point.copy}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="section-shell py-14"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionReveal}
      >
        <h2 className="text-3xl font-bold md:text-4xl">Built for decision makers</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {targetAudience.map((segment) => (
            <div
              key={segment}
              className="glass-card p-6 text-center text-base font-semibold text-white/90 transition hover:border-[#D4AF37]/35"
            >
              {segment}
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="section-shell py-14"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionReveal}
      >
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="text-3xl font-bold md:text-4xl">Case study snapshots</h2>
          <Link href="/portfolio" className="text-sm font-semibold text-[#D4AF37] hover:underline">
            View portfolio
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {caseStudies.map((item, i) => (
            <motion.article
              key={item.project}
              className="glass-card overflow-hidden p-0 transition hover:border-[#D4AF37]/25"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 * i }}
            >
              <div className="relative h-40 w-full">
                <Image src={item.image} alt="" fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <p className="absolute bottom-3 left-4 text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
                  {item.project}
                </p>
              </div>
              <div className="p-6">
                <p className="text-sm text-white/75">
                  <span className="font-semibold text-white">Challenge:</span> {item.problem}
                </p>
                <p className="mt-2 text-sm text-white/75">
                  <span className="font-semibold text-white">Response:</span> {item.solution}
                </p>
                <p className="mt-2 text-sm text-[#D4AF37]">{item.result}</p>
              </div>
            </motion.article>
          ))}
        </div>
        <Link href="/case-studies" className="mt-6 inline-flex items-center gap-2 text-[#D4AF37]">
          All case studies <ArrowRight size={14} />
        </Link>
      </motion.section>

      <motion.section
        className="section-shell py-14"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionReveal}
      >
        <h2 className="text-3xl font-bold md:text-4xl">Testimonials</h2>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {testimonials.map((client, i) => (
            <motion.div
              key={client.name}
              className="rounded-lg border border-white/10 px-5 py-5 text-sm transition hover:border-[#D4AF37]/40 hover:bg-white/[0.03]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.04 * i }}
            >
              <p className="text-white/80 leading-relaxed">&ldquo;{client.quote}&rdquo;</p>
              <p className="mt-3 font-semibold text-[#D4AF37]">{client.name}</p>
              <p className="text-xs text-white/60">{client.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="section-shell py-14"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionReveal}
      >
        <div className="mx-auto max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">FAQ</p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">Questions before you switch to gypsum</h2>
          <p className="mt-3 text-white/75">
            Quick answers on speed, specifications, sustainability, and how we engage on live sites.
          </p>
          <div className="mt-7">
            <FaqAccordion items={faqs.slice(0, 5)} />
          </div>
          <Link href="/faqs" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37]">
            View all FAQs <ArrowRight size={14} />
          </Link>
        </div>
      </motion.section>

      <motion.section
        className="section-shell pb-12 md:pb-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={sectionReveal}
      >
        <motion.div
          className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#D4AF37] via-[#e8c85c] to-[#b8941f] px-8 py-12 text-black shadow-2xl shadow-[#D4AF37]/20"
          whileHover={{ scale: 1.008 }}
          transition={{ duration: 0.35 }}
        >
          <h2 className="text-3xl font-bold md:text-4xl">Ready to mobilise?</h2>
          <p className="mt-3 max-w-2xl text-base text-black/82">
            Request a scoped quote—or book a consultation to align material lanes and application crews with your master programme.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact#lead-form"
              className="inline-flex justify-center rounded-full bg-black px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#151515]"
            >
              Request a quote
            </Link>
            <Link
              href="/calculator"
              className="inline-flex justify-center rounded-full border-2 border-black/35 bg-transparent px-7 py-3 text-sm font-semibold text-black transition hover:bg-black/10"
            >
              Run cost calculator
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
