import { coreValues, operationalCapabilities, timeline } from "@/lib/data";

export default function AboutPage() {
  return (
    <section className="page-shell">
      <p className="premium-label">About us</p>
      <h1 className="page-title mt-4 max-w-4xl">
        Trusted partner for premium gypsum plastering —{" "}
        <span className="gold-gradient">execution and supply</span>
      </h1>
      <p className="page-lead mt-4 max-w-3xl sm:mt-6">
        Prime Construct helps developers and contractors deliver interiors with confidence:
        disciplined application, dependable material flows, and the professionalism construction
        stakeholders expect at handover.
      </p>

      <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 lg:grid-cols-3">
        <div className="glass-card p-6 sm:p-7 lg:col-span-2 lg:p-8">
          <h2 className="text-lg font-semibold text-white sm:text-xl md:text-2xl">Mission</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-[15px]">
            Elevate gypsum plastering from a commodity trade into a governed programme—with clear QA,
            trained crews, and material integrity that matches specification. We exist to shorten
            critical paths without compromising finish quality or site safety.
          </p>
        </div>
        <div className="glass-card p-6 sm:p-7">
          <h2 className="text-lg font-semibold text-white sm:text-xl">What we optimize</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/72">
            <li>Trust through transparent milestones</li>
            <li>Quality through repeatable site methods</li>
            <li>Timely delivery through logistics discipline</li>
            <li>Professionalism through single-threaded communication</li>
          </ul>
        </div>
      </div>

      <h2 className="section-title mt-14 sm:mt-20">Core values</h2>
      <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5">
        {coreValues.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
          >
            <h3 className="text-base font-semibold text-[#D4AF37] sm:text-lg">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/75 sm:mt-3">{item.copy}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:mt-16 sm:gap-8 lg:grid-cols-2">
        <div className="glass-card p-6 sm:p-7 md:p-8">
          <h2 className="text-lg font-semibold text-white sm:text-xl md:text-2xl">Operational capabilities</h2>
          <ul className="mt-5 space-y-3 text-sm text-white/76">
            {operationalCapabilities.map((line) => (
              <li key={line} className="flex gap-2 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="glass-card bg-gradient-to-br from-[#D4AF37]/14 via-transparent to-transparent p-6 sm:p-7 md:p-8">
          <h2 className="text-lg font-semibold text-white sm:text-xl md:text-2xl">Supply chain &amp; reliability</h2>
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

      <h2 className="section-title mt-14 sm:mt-20">Our journey</h2>
      <div className="mt-6 space-y-3 sm:mt-8">
        {timeline.map((entry) => (
          <div key={entry.year} className="glass-card flex flex-col gap-2 p-4 sm:flex-row sm:gap-8 sm:p-5">
            <p className="shrink-0 text-base font-bold text-[#D4AF37] sm:w-24 sm:text-lg">{entry.year}</p>
            <p className="text-sm leading-relaxed text-white/75">{entry.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
