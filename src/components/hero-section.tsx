"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { heroVisualStories } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function HeroSection() {
  const [activeStory, setActiveStory] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveStory((prev) => (prev + 1) % heroVisualStories.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, []);

  const story = heroVisualStories[activeStory];

  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0A0A]" />

      <AnimatePresence mode="wait">
        <motion.div
          key={story.image}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={story.image}
            alt={story.caption}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-black/88 via-black/80 to-[#0A0A0A] md:bg-gradient-to-r md:from-black/92 md:via-black/78 md:to-black/45" />
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_50%,rgba(212,175,55,0.12),transparent_60%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
      />

      <div className="section-shell relative z-10 flex min-h-[100dvh] flex-col justify-center pb-28 pt-24 sm:pb-32 md:py-28 lg:pb-28">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <motion.p
              custom={0}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="premium-label"
            >
              Premium Gypsum Plaster
            </motion.p>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-3 max-w-2xl font-[family-name:var(--font-montserrat)] text-[1.65rem] font-bold leading-[1.16] tracking-tight sm:text-[1.85rem] md:text-4xl lg:text-[2.75rem] xl:text-5xl"
            >
              Premium Gypsum Solutions For{" "}
              <span className="gold-gradient">Stronger, Smoother Walls</span>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/82 sm:text-base md:mt-5 md:text-lg"
            >
              Advanced gypsum plaster solutions for builders, contractors and modern homes.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3"
            >
              <Link
                href="/solutions"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3.5 text-sm font-semibold text-black shadow-lg shadow-[#D4AF37]/25 active:scale-[0.98] sm:w-auto"
              >
                Explore Solutions
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact#lead-form"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-white/35 bg-white/8 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm active:scale-[0.98] sm:w-auto"
              >
                Contact Expert
              </Link>
            </motion.div>

            {/* Mobile visual card */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-6 overflow-hidden rounded-2xl border border-white/12 lg:hidden"
            >
              <div className="relative aspect-[16/10]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={story.image}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image src={story.image} alt="" fill className="object-cover" sizes="100vw" />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">{story.label}</p>
                  <p className="mt-1 text-sm font-medium leading-snug text-white">{story.caption}</p>
                </div>
              </div>
              <div className="flex gap-1.5 overflow-x-auto bg-black/70 p-2 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {heroVisualStories.map((item, i) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setActiveStory(i)}
                    className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-lg transition ${
                      i === activeStory ? "ring-2 ring-[#D4AF37]" : "opacity-55"
                    }`}
                  >
                    <Image src={item.image} alt="" fill className="object-cover" sizes="48px" />
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              custom={5}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="story-pill-strip mt-6 hidden md:flex"
            >
              {heroVisualStories.map((item, i) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setActiveStory(i)}
                  className={`rounded-full px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-wider transition ${
                    i === activeStory
                      ? "bg-[#D4AF37] text-black"
                      : "border border-white/20 bg-black/40 text-white/70 hover:border-white/35"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Desktop visual panel */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/12 shadow-2xl shadow-black/50">
              <div className="relative aspect-[4/5]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={story.image}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Image src={story.image} alt="" fill className="object-cover" sizes="45vw" />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">{story.label}</p>
                  <p className="mt-2 text-lg font-medium leading-snug text-white">{story.caption}</p>
                </div>
              </div>

              <div className="grid grid-cols-5 gap-1 border-t border-white/10 bg-black/60 p-2 backdrop-blur-md">
                {heroVisualStories.map((item, i) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setActiveStory(i)}
                    className={`relative aspect-square overflow-hidden rounded-lg transition ${
                      i === activeStory ? "ring-2 ring-[#D4AF37]" : "opacity-60 hover:opacity-90"
                    }`}
                  >
                    <Image src={item.image} alt="" fill className="object-cover" sizes="80px" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 hidden items-center gap-2 text-sm text-white/55 sm:flex lg:mt-16"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-[#D4AF37]" />
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}
