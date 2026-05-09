import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Skilled labor pools trained on machine and hand application methods",
  "Professional plaster application with substrate checks, mix control, and open-time discipline",
  "Project timelines managed with daily production targets and trade coordination",
  "Smooth finish quality aligned to paint and cladding vendor tolerances",
  "On-site management and quality control with snag-prevention walkthroughs",
];

export default function ProfessionalApplicationPage() {
  return (
    <article className="section-shell py-20 md:py-28">
      <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Services</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">Professional Application</h1>
      <p className="mt-5 max-w-3xl text-lg text-white/75">
        Execution is where specifications become reality. Our application teams work with your main
        contractor to protect programme, reduce rework, and deliver a corporate-grade finish.
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
          <h2 className="text-xl font-semibold text-white">Disciplined site delivery</h2>
          <p className="text-sm leading-relaxed text-white/70">
            Supervisors issue clear method statements, monitor environmental conditions, and
            coordinate with MEP and ceiling contractors so the finished plane is right the first
            time.
          </p>
          <p className="text-sm leading-relaxed text-white/70">
            Combine this service with our material supply lane for a single point of accountability
            across bag and blade.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <Link
              href="/contact"
              className="rounded-full bg-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-black hover:brightness-110"
            >
              Book a consultation
            </Link>
            <Link href="/portfolio" className="rounded-full border border-white/20 px-5 py-2.5 text-sm text-white/90 hover:border-[#D4AF37]/50">
              See portfolio work
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
