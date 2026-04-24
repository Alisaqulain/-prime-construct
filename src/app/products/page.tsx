"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { gypsumVsCement, products } from "@/lib/data";

const categories = ["All", "Base Coat", "Finish Coat", "Ceiling", "Additives"] as const;

export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const categoryOk = category === "All" || product.category === category;
      const queryOk = `${product.title} ${product.description}`
        .toLowerCase()
        .includes(query.toLowerCase());
      return categoryOk && queryOk;
    });
  }, [query, category]);

  return (
    <section className="section-shell py-24">
      <h1 className="text-4xl font-bold">Products</h1>
      <p className="mt-3 max-w-2xl text-white/75">
        High-performance gypsum products designed for speed, superior finish, and consistent site output.
      </p>

      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search products..."
          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm outline-none md:max-w-md"
        />
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`rounded-full border px-4 py-2 text-sm ${
                category === cat
                  ? "border-[#D4AF37] bg-[#D4AF37] text-black"
                  : "border-white/15 text-white/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {filtered.map((item) => (
          <article key={item.slug} className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
            <div className="relative h-52 w-full">
              <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
            </div>
            <div className="p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">{item.category}</p>
              <h2 className="mt-2 text-xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-white/75">{item.description}</p>
              <ul className="mt-3 space-y-1 text-xs text-white/70">
                {item.benefits.map((benefit) => (
                  <li key={benefit}>- {benefit}</li>
                ))}
              </ul>
              <Link href={`/products/${item.slug}`} className="mt-4 inline-block text-sm text-[#D4AF37]">
                View Details
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14">
        <h2 className="text-3xl font-bold">Gypsum vs Cement Plaster</h2>
        <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/5 text-[#D4AF37]">
              <tr>
                <th className="px-4 py-3">Metric</th>
                <th className="px-4 py-3">Gypsum</th>
                <th className="px-4 py-3">Cement</th>
              </tr>
            </thead>
            <tbody>
              {gypsumVsCement.map((row) => (
                <tr key={row.metric} className="border-t border-white/10">
                  <td className="px-4 py-3">{row.metric}</td>
                  <td className="px-4 py-3 text-emerald-300">{row.gypsum}</td>
                  <td className="px-4 py-3 text-white/70">{row.cement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
