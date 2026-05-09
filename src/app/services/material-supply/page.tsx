import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Premium gypsum plaster grades sourced for consistent setting, workability, and finish",
  "Structured product sourcing with batch documentation for specification-driven tenders",
  "Import and export capabilities aligned with Dropshore Import and Export for reliable inbound flow",
  "Multi-point logistics, warehouse discipline, and dispatch planning for large programmes",
  "On-time material delivery coordinated with tower / floor readiness and site consumption",
];

export default function MaterialSupplyPage() {
  return (
    <article className="section-shell py-20 md:py-28">
      <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Services</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">Material Supply</h1>
      <p className="mt-5 max-w-3xl text-lg text-white/75">
        We position ourselves as a premium supply partner for gypsum plaster programmes—where
        material integrity, documentation, and delivery cadence directly impact your construction
        schedule.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          {points.map((text) => (
            <div key={text} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <CheckCircle2 className="mt-0.5 shrink-0 text-[#D4AF37]" size={20} />
              <p className="text-sm leading-relaxed text-white/80">{text}</p>
            </div>
          ))}
        </div>
        <div className="glass-card space-y-4 p-8">
          <h2 className="text-xl font-semibold text-white">Supply chain advantage</h2>
          <p className="text-sm leading-relaxed text-white/70">
            Through <strong className="text-white">Dropshore Import and Export</strong>, we strengthen
            upstream availability and customs-aware movement of bulk gypsum—so your site teams spend
            less time chasing bags and more time executing.
          </p>
          <p className="text-sm leading-relaxed text-white/70">
            Whether you are running a phased township, a commercial podium, or a fast-track interiors
            rollout, our operations team aligns dispatch to your lookahead—not the other way around.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <Link
              href="/contact"
              className="rounded-full bg-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-black hover:brightness-110"
            >
              Request supply schedule
            </Link>
            <Link href="/solutions" className="rounded-full border border-white/20 px-5 py-2.5 text-sm text-white/90 hover:border-[#D4AF37]/50">
              View supplier solutions
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
