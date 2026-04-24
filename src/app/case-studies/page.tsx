import Image from "next/image";
import { caseStudies } from "@/lib/data";

export default function CaseStudiesPage() {
  return (
    <section className="section-shell py-24">
      <h1 className="text-4xl font-bold">Case Studies</h1>
      <p className="mt-3 max-w-3xl text-white/75">
        Real projects where PRIME CONSTRUCT improved speed, finish quality, and profitability.
      </p>

      <div className="mt-10 grid gap-8">
        {caseStudies.map((study) => (
          <article key={study.slug} className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-64">
                <Image src={study.image} alt={study.project} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
              </div>
              <div className="p-7">
                <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">{study.project}</p>
                <p className="mt-4 text-sm text-white/80">
                  <span className="font-semibold text-white">Problem:</span> {study.problem}
                </p>
                <p className="mt-3 text-sm text-white/80">
                  <span className="font-semibold text-white">Solution:</span> {study.solution}
                </p>
                <p className="mt-3 text-sm text-emerald-300">
                  <span className="font-semibold text-white">Result:</span> {study.result}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
