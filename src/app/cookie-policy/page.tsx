export default function CookiePolicyPage() {
  return (
    <section className="section-shell py-20 md:py-28">
      <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Legal</p>
      <h1 className="mt-4 text-4xl font-bold md:text-5xl">Cookie Policy</h1>
      <p className="mt-4 max-w-3xl text-sm text-white/60">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="mt-10 space-y-8 text-white/75">
        <section className="glass-card p-7 md:p-8">
          <h2 className="text-xl font-semibold text-white">What are cookies?</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            Cookies are small files stored on your device when you visit a website. They help a site
            function properly, improve performance, and remember preferences.
          </p>
        </section>

        <section className="glass-card p-7 md:p-8">
          <h2 className="text-xl font-semibold text-white">How we use cookies</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li>
              <span className="font-semibold text-white">Essential</span>: required for basic website
              functionality.
            </li>
            <li>
              <span className="font-semibold text-white">Performance</span>: helps us understand how
              the website is used so we can improve content and navigation.
            </li>
            <li>
              <span className="font-semibold text-white">Preferences</span>: remembers choices where
              applicable.
            </li>
          </ul>
        </section>

        <section className="glass-card p-7 md:p-8">
          <h2 className="text-xl font-semibold text-white">Managing cookies</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            You can control and delete cookies using your browser settings. Disabling some cookies may
            affect website functionality.
          </p>
        </section>
      </div>
    </section>
  );
}

