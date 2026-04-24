"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/animated-counter";
import {
  caseStudies,
  heroStats,
  products,
  targetAudience,
  testimonials,
  trustLogos,
  valueStack,
} from "@/lib/data";

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
  return (
    <div className="relative">
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full scale-105 object-cover"
          src="https://cdn.coverr.co/videos/coverr-construction-site-1579/1080p.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#0A0A0A]" />
        <motion.div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(212,175,55,0.12),transparent_55%)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />

        <div className="section-shell relative z-10 py-24 md:py-28">
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
              className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-white/15 bg-black/40 shadow-2xl backdrop-blur-sm md:h-20 md:w-20"
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
              <p className="text-sm uppercase tracking-[0.4em] text-[#D4AF37]">Prime Construct</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-white/50">
                Building dreams, supplying solutions
              </p>
            </motion.div>
          </motion.div>

          <motion.h1
            className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            Finish Faster. <span className="gold-gradient">Build Smarter.</span>
          </motion.h1>
          <motion.p
            className="mt-5 max-w-2xl text-lg text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
          >
            High-performance gypsum solutions for modern construction.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-[#D4AF37]/25 transition hover:scale-[1.02] hover:shadow-xl hover:shadow-[#D4AF37]/30"
            >
              Get Quote
            </Link>
            <Link
              href="/products"
              className="rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#D4AF37]/50 hover:bg-white/10"
            >
              Explore Products
            </Link>
          </motion.div>
          <div className="mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/15 bg-black/45 p-4 backdrop-blur-md">
                <p className="text-2xl font-bold text-[#D4AF37]">
                  {stat.value === 0 ? "No" : <AnimatedCounter value={stat.value} />}
                  {stat.suffix}
                </p>
                <p className="text-sm text-white/75">{stat.label}</p>
              </div>
            ))}
          </div>
          <motion.div
            className="mt-16 flex items-center gap-2 text-sm text-white/70"
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
        <p className="text-center text-xs uppercase tracking-[0.35em] text-white/50">Trusted by practitioners across India</p>
        <div className="mt-5 grid gap-3 md:grid-cols-6">
          {trustLogos.map((logo) => (
            <div key={logo} className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-3 text-center text-xs text-white/75">
              {logo}
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="section-shell py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionReveal}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">The Problem</p>
        <h2 className="mt-2 text-3xl font-bold">Construction is slow, costly, inefficient.</h2>
        <p className="mt-3 max-w-3xl text-white/75">
          Cement plaster introduces long dry cycles, water curing overhead, and uneven finishes
          that increase rework. That means delayed handovers and reduced margins.
        </p>
      </motion.section>

      <motion.section className="section-shell py-16" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={sectionReveal}>
        <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">The Solution</p>
        <h2 className="mt-2 text-3xl font-bold">Gypsum systems outperform conventional plaster.</h2>
        <p className="mt-3 max-w-3xl text-white/75">
          PRIME CONSTRUCT gypsum products help teams deliver superior finish quality faster while
          reducing labor and water dependency.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {products.slice(0, 3).map((item, i) => (
            <motion.article
              key={item.slug}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm transition hover:-translate-y-1 hover:border-[#D4AF37]/60 hover:shadow-lg hover:shadow-[#D4AF37]/10"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-widest text-[#D4AF37]">{item.category}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/75">{item.description}</p>
                <Link
                  href={`/products/${item.slug}`}
                  className="mt-4 inline-flex text-sm font-medium text-[#D4AF37]"
                >
                  View details
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="section-shell py-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionReveal}
      >
        <h2 className="text-3xl font-bold">Value Stack</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {valueStack.map((point, i) => (
            <motion.div
              key={point.title}
              className="glass-card flex items-start gap-3 p-5 transition hover:border-[#D4AF37]/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 * i }}
              whileHover={{ x: 4 }}
            >
              <CheckCircle2 className="mt-0.5 shrink-0 text-[#D4AF37]" size={18} />
              <div>
                <p className="font-semibold text-white">{point.title}</p>
                <p className="text-sm text-white/75">{point.copy}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="section-shell py-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionReveal}
      >
        <h2 className="text-3xl font-bold">Built For Decision Makers</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {targetAudience.map((segment) => (
            <div key={segment} className="glass-card p-6 text-center text-lg font-semibold text-white/90">
              {segment}
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="section-shell py-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionReveal}
      >
        <h2 className="text-3xl font-bold">Case Study Highlight</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {caseStudies.map((item, i) => (
            <motion.article
              key={item.project}
              className="glass-card p-6 transition hover:border-[#D4AF37]/25"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 * i }}
            >
              <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">{item.project}</p>
              <p className="mt-3 text-sm text-white/75">
                <span className="font-semibold text-white">Problem:</span> {item.problem}
              </p>
              <p className="mt-2 text-sm text-white/75">
                <span className="font-semibold text-white">Solution:</span> {item.solution}
              </p>
              <p className="mt-2 text-sm text-[#D4AF37]">{item.result}</p>
            </motion.article>
          ))}
        </div>
        <Link href="/case-studies" className="mt-6 inline-flex items-center gap-2 text-[#D4AF37]">
          Explore all case studies <ArrowRight size={14} />
        </Link>
      </motion.section>

      <motion.section
        className="section-shell py-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={sectionReveal}
      >
        <h2 className="text-3xl font-bold">Testimonials</h2>
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
              <p className="text-white/80">&ldquo;{client.quote}&rdquo;</p>
              <p className="mt-3 font-semibold text-[#D4AF37]">{client.name}</p>
              <p className="text-xs text-white/60">{client.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="section-shell pb-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={sectionReveal}
      >
        <motion.div
          className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#D4AF37] via-[#e8c85c] to-[#b8941f] px-8 py-12 text-black shadow-2xl shadow-[#D4AF37]/20"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.35 }}
        >
          <h2 className="text-3xl font-bold">Ready to Build with Confidence?</h2>
          <p className="mt-3 max-w-2xl text-black/80">
            Get a project-specific savings estimate and implementation roadmap in one call.
          </p>
          <Link
            href="/calculator"
            className="mt-6 inline-flex rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0A0A0A]"
          >
            Run Cost Calculator
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
}
