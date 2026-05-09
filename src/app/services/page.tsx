import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    href: "/services/material-supply",
    title: "Material Supply",
    subtitle: "Premium gypsum, sourcing, and logistics",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c0866?auto=format&fit=crop&w=1200&q=80",
  },
  {
    href: "/services/professional-application",
    title: "Professional Application",
    subtitle: "Skilled crews, timelines, and finish QA",
    image:
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ServicesHubPage() {
  return (
    <section className="section-shell py-20 md:py-28">
      <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Services</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">How we deliver value on site</h1>
      <p className="mt-5 max-w-2xl text-lg text-white/70">
        Choose material-only programs or full professional application—both supported by import and
        distribution strength through our Dropshore Import and Export alignment.
      </p>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition hover:border-[#D4AF37]/40"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={card.image}
                alt=""
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>
            <div className="relative p-8 pt-0 md:absolute md:inset-x-0 md:bottom-0 md:p-8">
              <h2 className="text-2xl font-bold text-white drop-shadow-md">{card.title}</h2>
              <p className="mt-2 text-sm text-white/80">{card.subtitle}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37]">
                View details <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
