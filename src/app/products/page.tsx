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
      <section className="section-shell border-b border-white/10 py-14 sm:py-16 md:py-28">
        <p className="premium-label">Products</p>
        <h1 className="page-title mt-4 max-w-4xl">
          Premium <span className="gold-gradient">gypsum plaster</span> range
        </h1>
        <p className="page-lead mt-4 max-w-2xl sm:mt-5">
          Import-backed gypsum plaster grades for interior wall and ceiling finishing — tested, traceable,
          and ready for your site.
        </p>
      </section>

      <section className="section-shell mobile-section">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {gypsumProducts.map((product, i) => (
            <motion.article
              key={product.name}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={reveal}
              whileHover={{ y: -4 }}
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
                <p className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/50 px-2.5 py-1 text-[10px] uppercase tracking-wider text-[#D4AF37] backdrop-blur-sm sm:left-4 sm:px-3">
                  {product.tagline}
                </p>
              </div>
              <div className="p-5 sm:p-6">
                <h2 className="text-lg font-bold text-white sm:text-xl">{product.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/65 sm:mt-3">{product.description}</p>
                <ul className="mt-4 space-y-2 border-t border-white/10 pt-4 sm:mt-5">
                  {product.specs.map((spec) => (
                    <li
                      key={spec}
                      className="text-xs text-white/55 before:mr-2 before:text-[#D4AF37] before:content-['✓']"
                    >
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-[#D4AF37]/25 bg-gradient-to-br from-[#D4AF37]/15 via-[#1a1510] to-[#0A0A0A] px-5 py-8 sm:mt-16 sm:px-8 sm:py-10 md:px-12">
          <h3 className="text-xl font-bold text-white sm:text-2xl">Need bulk supply or specification support?</h3>
          <p className="mt-3 max-w-xl text-sm text-white/70 sm:text-base">
            Our team helps builders, dealers, and contractors select the right gypsum grade and delivery
            schedule for your programme.
          </p>
          <Link href="/contact#lead-form" className="btn-primary mt-6 w-full sm:w-auto">
            Talk to Gypsum Expert
          </Link>
        </div>
      </section>
    </div>
  );
}
