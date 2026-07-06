"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Film, MapPin, Play, Ruler } from "lucide-react";
import {
  caseStudyLayoutPreview,
  publishedCaseStudies,
} from "@/lib/data";

function CaseStudyCard({ study }: { study: typeof caseStudyLayoutPreview }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
      <div className="border-b border-white/10 p-6 md:p-8">
        <div className="flex flex-wrap gap-4 text-sm text-white/65">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} className="text-[#D4AF37]" />
            {study.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Film size={14} className="text-[#D4AF37]" />
            {study.projectType}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Ruler size={14} className="text-[#D4AF37]" />
            {study.areaCovered}
          </span>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-white">{study.clientStoryPrompt}</h2>
      </div>

      <div className="grid gap-px bg-white/10 md:grid-cols-3">
        {study.phases.map((phase) => (
          <div key={phase.phase} className="bg-[#0A0A0A] p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">{phase.label}</p>
            <p className="mt-2 text-sm text-white/60">{phase.description}</p>
            <div className="relative mt-4 aspect-video overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#1a1510] to-black">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10">
                  <Play size={16} className="ml-0.5 text-[#D4AF37]" fill="currentColor" />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-white/40">Video</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function CaseStudiesPage() {
  const hasPublished = publishedCaseStudies.length > 0;

  return (
    <div className="relative">
      <section className="section-shell border-b border-white/10 py-16 sm:py-20 md:py-28">
        <p className="premium-label">Case Studies</p>
        <h1 className="mt-4 max-w-3xl text-3xl font-bold sm:text-4xl md:text-5xl">
          {hasPublished ? "Real project stories" : "Real Project Stories Coming Soon"}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-white/70">
          {hasPublished
            ? "Documented gypsum projects with before, application process, and finished results."
            : "We are documenting live gypsum plaster projects — with video proof at every stage so you can see it is not cement."}
        </p>
      </section>

      <section className="section-shell py-16 md:py-24">
        {!hasPublished && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-2xl rounded-3xl border border-dashed border-[#D4AF37]/35 bg-[#D4AF37]/[0.05] px-8 py-14 text-center"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10">
              <span className="text-lg font-bold text-[#D4AF37]">PC</span>
            </div>
            <h2 className="mt-6 text-2xl font-bold text-white">Real Project Stories Coming Soon</h2>
            <p className="mt-4 text-white/65">
              Our team is capturing before, gypsum application, and finished interior videos from active
              sites. Check back soon.
            </p>
            <Link
              href="/contact#lead-form"
              className="button-modern mt-8 inline-flex items-center gap-2"
            >
              Share your project for a case study <ArrowRight size={15} />
            </Link>
          </motion.div>
        )}

        {hasPublished &&
          publishedCaseStudies.map((study) => <CaseStudyCard key={study.slug} study={study} />)}

        {!hasPublished && (
          <div className="mt-16">
            <p className="text-sm uppercase tracking-[0.25em] text-white/45">Future layout preview</p>
            <h3 className="mt-2 text-xl font-bold text-white/80">How each case study will appear</h3>
            <div className="mt-8 opacity-60">
              <CaseStudyCard study={caseStudyLayoutPreview} />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
