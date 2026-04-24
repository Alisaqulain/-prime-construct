export default function BlogPage() {
  const posts = [
    {
      title: "Gypsum vs Cement Plaster: A Practical ROI View",
      date: "April 18, 2026",
      excerpt: "How practitioners calculate schedule compression and cost impact.",
    },
    {
      title: "Reducing Snag Lists With Better Wall Finish Systems",
      date: "March 12, 2026",
      excerpt: "Why finish quality upstream protects handover timelines downstream.",
    },
  ];

  return (
    <section className="section-shell py-24">
      <h1 className="text-4xl font-bold">Blog & News</h1>
      <p className="mt-3 max-w-2xl text-white/75">
        Insights, strategy, and updates from construction supply and infrastructure delivery.
      </p>
      <div className="mt-8 grid gap-5">
        {posts.map((post) => (
          <article key={post.title} className="glass-card p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">{post.date}</p>
            <h2 className="mt-2 text-2xl font-semibold">{post.title}</h2>
            <p className="mt-3 text-white/75">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
