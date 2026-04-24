import Link from "next/link";
import { sustainabilityHighlights } from "@/lib/data";

export default function SustainabilityPage() {
  return (
    <section className="section-shell py-24">
      <h1 className="text-4xl font-bold">Sustainability</h1>
      <p className="mt-3 max-w-3xl text-white/75">
        PRIME CONSTRUCT gypsum systems help projects align with green building outcomes without
        compromising speed or finish quality.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {sustainabilityHighlights.map((point) => (
          <div key={point} className="glass-card p-6 text-sm text-white/80">
            {point}
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="glass-card p-6">
          <h2 className="text-2xl font-semibold">Green Building Advantage</h2>
          <p className="mt-3 text-sm text-white/75">
            Gypsum plaster can contribute to LEED and IGBC pathways through lower water use,
            reduced site waste, and improved indoor environmental quality.
          </p>
        </div>
        <div className="glass-card p-6">
          <h2 className="text-2xl font-semibold">Download Green Guide</h2>
          <p className="mt-3 text-sm text-white/75">
            Get our concise guide on eco-benefits, lifecycle impact, and implementation best
            practices.
          </p>
          <Link href="/green-guide.pdf" target="_blank" className="mt-5 inline-flex rounded-full bg-[#D4AF37] px-5 py-2 text-sm font-semibold text-black">
            Download PDF
          </Link>
        </div>
      </div>
    </section>
  );
}
