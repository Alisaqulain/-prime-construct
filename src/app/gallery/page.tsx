"use client";

import { useMemo, useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { galleryItems } from "@/lib/data";

const categories = ["All", "Before", "After", "Application"] as const;

export default function GalleryPage() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const items = useMemo(
    () => galleryItems.filter((item) => category === "All" || item.category === category),
    [category]
  );

  return (
    <section className="section-shell py-24">
      <h1 className="text-4xl font-bold">Project Gallery</h1>
      <p className="mt-3 text-white/75">Before/after transformations and live gypsum application snapshots.</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`rounded-full border px-4 py-2 text-sm ${
              category === cat ? "border-[#D4AF37] bg-[#D4AF37] text-black" : "border-white/20"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 columns-1 gap-4 space-y-4 md:columns-3">
        {items.map((item) => (
          <button key={item.title} onClick={() => setActiveImage(item.image)} className="w-full overflow-hidden rounded-xl border border-white/10">
            <Image src={item.image} alt={item.title} width={600} height={420} className="w-full object-cover" />
          </button>
        ))}
      </div>

      {activeImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4">
          <button className="absolute right-6 top-6 text-white" onClick={() => setActiveImage(null)}>
            <X />
          </button>
          <Image src={activeImage} alt="Gallery preview" width={1200} height={800} className="max-h-[90vh] w-auto rounded-xl object-contain" />
        </div>
      )}
    </section>
  );
}
