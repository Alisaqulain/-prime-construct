"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { products } from "@/lib/data";

const categories = ["All", "Steel", "Cement", "Aggregates", "Equipment"] as const;

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
        Browse our curated catalog of high-performance construction materials and equipment.
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
            <img src={item.image} alt={item.title} className="h-52 w-full object-cover" />
            <div className="p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">{item.category}</p>
              <h2 className="mt-2 text-xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-white/75">{item.description}</p>
              <Link href={`/products/${item.slug}`} className="mt-4 inline-block text-sm text-[#D4AF37]">
                View Details
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
