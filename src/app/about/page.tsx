import { timeline, whyChoose } from "@/lib/data";

export default function AboutPage() {
  return (
    <section className="section-shell py-24">
      <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">About PRIME CONSTRUCT</p>
      <h1 className="mt-3 text-4xl font-bold">The Practitioner&apos;s Choice for Modern Construction</h1>
      <p className="mt-5 max-w-3xl text-white/75">
        We are a gypsum-focused construction solutions company helping teams finish projects
        faster, cleaner, and more cost-efficiently.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="glass-card p-6">
          <h2 className="text-2xl font-semibold">Vision</h2>
          <p className="mt-3 text-white/75">
            To set the benchmark for fast, sustainable, and premium-quality wall finishing in
            modern construction.
          </p>
        </div>
        <div className="glass-card p-6">
          <h2 className="text-2xl font-semibold">Mission</h2>
          <p className="mt-3 text-white/75">
            Help contractors, architects, and developers reduce cost and timelines through
            high-performance gypsum systems and practical site support.
          </p>
        </div>
      </div>

      <div className="mt-10 glass-card p-7">
        <h2 className="text-2xl font-semibold">Sustainability Commitment</h2>
        <p className="mt-3 text-white/75">
          Every project we support aims to reduce water usage, site waste, and rework. Our systems
          are designed to align with green building priorities and long-term operational efficiency.
        </p>
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

      <h2 className="mt-16 text-3xl font-bold">Why Choose Us</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {whyChoose.map((item) => (
          <div key={item} className="glass-card p-5 text-sm text-white/85">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
