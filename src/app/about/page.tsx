import { certifications, team, timeline } from "@/lib/data";

export default function AboutPage() {
  return (
    <section className="section-shell py-24">
      <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">About Us</p>
      <h1 className="mt-3 text-4xl font-bold">Built on Precision. Driven by Trust.</h1>
      <p className="mt-5 max-w-3xl text-white/75">
        PRIME CONSTRUCT is a premium construction partner combining high-grade supply, intelligent
        procurement, and reliable project support for high-impact builds.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="glass-card p-6">
          <h2 className="text-2xl font-semibold">Vision</h2>
          <p className="mt-3 text-white/75">
            To become the global benchmark for dependable, sustainable, and future-ready
            construction supply solutions.
          </p>
        </div>
        <div className="glass-card p-6">
          <h2 className="text-2xl font-semibold">Mission</h2>
          <p className="mt-3 text-white/75">
            Empower builders with premium materials, efficient logistics, and technical guidance
            that accelerates quality project delivery.
          </p>
        </div>
      </div>

      <h2 className="mt-16 text-3xl font-bold">Our Journey</h2>
      <div className="mt-6 space-y-4">
        {timeline.map((entry) => (
          <div key={entry.year} className="glass-card flex gap-5 p-5">
            <p className="min-w-16 text-xl font-bold text-[#D4AF37]">{entry.year}</p>
            <p className="text-white/80">{entry.detail}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-16 text-3xl font-bold">Leadership Team</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-4">
        {team.map((member) => (
          <article
            key={member.name}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-[#D4AF37]/50"
          >
            <div className="mb-4 h-40 rounded-xl bg-gradient-to-b from-[#D4AF37]/40 to-transparent" />
            <h3 className="font-semibold">{member.name}</h3>
            <p className="text-sm text-white/70">{member.role}</p>
          </article>
        ))}
      </div>

      <h2 className="mt-16 text-3xl font-bold">Certifications</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {certifications.map((item) => (
          <div key={item} className="glass-card p-5 text-sm text-white/85">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
