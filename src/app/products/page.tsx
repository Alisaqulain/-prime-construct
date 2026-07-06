"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { gypsumProducts } from "@/lib/data";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.07 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function ProductsPage() {
  return (
    <div className="relative">
      <section className="section-shell border-b border-white/10 py-16 sm:py-20 md:py-28">
        <p className="premium-label">Products</p>
        <h1 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Premium <span className="gold-gradient">gypsum plaster</span> range
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-white/70">
          Import-backed gypsum plaster grades for interior wall and ceiling finishing — tested, traceable,
          and ready for your site.
        </p>
      </section>

      <section className="section-shell py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {gypsumProducts.map((product, i) => (
            <motion.article
              key={product.name}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={reveal}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-black/30 shadow-xl transition hover:border-[#D4AF37]/40"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <p className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[10px] uppercase tracking-wider text-[#D4AF37] backdrop-blur-sm">
                  {product.tagline}
                </p>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-white">{product.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/65">{product.description}</p>
                <ul className="mt-5 space-y-2 border-t border-white/10 pt-5">
                  {product.specs.map((spec) => (
                    <li key={spec} className="text-xs text-white/55 before:mr-2 before:text-[#D4AF37] before:content-['✓']">
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl border border-[#D4AF37]/25 bg-gradient-to-br from-[#D4AF37]/15 via-[#1a1510] to-[#0A0A0A] px-8 py-10 md:px-12">
          <h3 className="text-2xl font-bold text-white">Need bulk supply or specification support?</h3>
          <p className="mt-3 max-w-xl text-white/70">
            Our team helps builders, dealers, and contractors select the right gypsum grade and delivery
            schedule for your programme.
          </p>
          <Link
            href="/contact#lead-form"
            className="button-modern mt-6 inline-flex"
          >
            Talk to Gypsum Expert
          </Link>
        </div>
      </section>
    </div>
  );
}
