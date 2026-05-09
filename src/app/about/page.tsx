import { coreValues, operationalCapabilities, timeline } from "@/lib/data";

export default function AboutPage() {
  return (
    <section className="section-shell py-20 md:py-28">
      <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">About us</p>
      <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
        Trusted partner for premium gypsum plastering—<span className="gold-gradient">execution and supply</span>
      </h1>
      <p className="mt-6 max-w-3xl text-lg text-white/75">
        Prime Construct helps developers and contractors deliver interiors with confidence:
        disciplined application, dependable material flows, and the professionalism construction
        stakeholders expect at handover.
      </p>

      <div className="mt-14 grid gap-8 lg:grid-cols-3">
        <div className="glass-card lg:col-span-2 lg:p-8 p-7">
          <h2 className="text-xl font-semibold text-white md:text-2xl">Mission</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-[15px]">
            Elevate gypsum plastering from a commodity trade into a governed programme—with clear QA,
            trained crews, and material integrity that matches specification. We exist to shorten
            critical paths without compromising finish quality or site safety.
          </p>
        </div>
        <div className="glass-card p-7">
          <h2 className="text-xl font-semibold text-white">What we optimize</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/72">
            <li>Trust through transparent milestones</li>
            <li>Quality through repeatable site methods</li>
            <li>Timely delivery through logistics discipline</li>
            <li>Professionalism through single-threaded communication</li>
          </ul>
        </div>
      </div>

      <h2 className="mt-20 text-2xl font-bold md:text-3xl">Core values</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {coreValues.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#D4AF37]/30"
          >
            <h3 className="text-lg font-semibold text-[#D4AF37]">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/75">{item.copy}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="glass-card p-7 md:p-8">
          <h2 className="text-xl font-semibold text-white md:text-2xl">Operational capabilities</h2>
          <ul className="mt-5 space-y-3 text-sm text-white/76">
            {operationalCapabilities.map((line) => (
              <li key={line} className="flex gap-2 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="glass-card bg-gradient-to-br from-[#D4AF37]/14 via-transparent to-transparent p-7 md:p-8">
          <h2 className="text-xl font-semibold text-white md:text-2xl">Supply chain &amp; reliability</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/78">
            We highlight a deliberate advantage through our alignment with{" "}
            <strong className="text-white">Dropshore Import and Export</strong>: structured import
            channels, disciplined stocking, and dispatch cadences that absorb volatility before it
            reaches your tower cranes and laydown areas.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            That means fewer emergency orders, clearer ETAs for your site engineer, and a partner who
            treats material availability as a programme risk—not a purchasing afterthought.
          </p>
        </div>
      </div>

      <h2 className="mt-20 text-2xl font-bold md:text-3xl">Our journey</h2>
      <div className="mt-8 space-y-3">
        {timeline.map((entry) => (
          <div key={entry.year} className="glass-card flex flex-col gap-2 p-5 sm:flex-row sm:gap-8">
            <p className="shrink-0 text-lg font-bold text-[#D4AF37] sm:w-24">{entry.year}</p>
            <p className="text-sm text-white/78">{entry.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
