export default function TermsPage() {
  return (
    <section className="section-shell py-20 md:py-28">
      <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Legal</p>
      <h1 className="mt-4 text-4xl font-bold md:text-5xl">Terms &amp; Conditions</h1>
      <p className="mt-4 max-w-3xl text-sm text-white/60">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="mt-10 space-y-8 text-white/75">
        <section className="glass-card p-7 md:p-8">
          <h2 className="text-xl font-semibold text-white">1. Acceptance of terms</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            By accessing or using this website, you agree to these Terms. If you do not agree, do not
            use the website.
          </p>
        </section>

        <section className="glass-card p-7 md:p-8">
          <h2 className="text-xl font-semibold text-white">2. Website information</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            Content is provided for general information only. While we aim to keep information
            accurate and current, specifications, availability, pricing, and timelines may change and
            are subject to written confirmation.
          </p>
        </section>

        <section className="glass-card p-7 md:p-8">
          <h2 className="text-xl font-semibold text-white">3. Enquiries, quotations, and delivery</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li>
              Quotations are indicative unless explicitly stated otherwise and are valid for a limited
              period.
            </li>
            <li>
              Product availability, dispatch dates, and delivery timelines depend on written order
              confirmation and logistics conditions.
            </li>
            <li>
              Project outputs are influenced by site conditions, substrate, workforce, environmental
              conditions, and trade coordination.
            </li>
          </ul>
        </section>

        <section className="glass-card p-7 md:p-8">
          <h2 className="text-xl font-semibold text-white">4. Technical guidance</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            Technical recommendations are advisory and must be validated for specific site conditions.
            The user remains responsible for final selection, installation, and compliance with
            applicable codes and safety requirements.
          </p>
        </section>

        <section className="glass-card p-7 md:p-8">
          <h2 className="text-xl font-semibold text-white">5. Intellectual property</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            All content on this website (text, graphics, brand assets, and layout) is owned by or
            licensed to Prime Construct and is protected by applicable laws. You may not reproduce or
            distribute content without prior written permission.
          </p>
        </section>

        <section className="glass-card p-7 md:p-8">
          <h2 className="text-xl font-semibold text-white">6. Prohibited use</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li>Using the website for unlawful purposes.</li>
            <li>Attempting to gain unauthorized access to systems or data.</li>
            <li>Uploading malicious code or interfering with site performance.</li>
          </ul>
        </section>

        <section className="glass-card p-7 md:p-8">
          <h2 className="text-xl font-semibold text-white">7. Limitation of liability</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            To the maximum extent permitted by law, we are not liable for any indirect, incidental,
            special, consequential, or punitive damages arising from your use of this website or
            reliance on its content.
          </p>
        </section>

        <section className="glass-card p-7 md:p-8">
          <h2 className="text-xl font-semibold text-white">8. Changes to these terms</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            We may update these Terms from time to time. Continued use of the website indicates
            acceptance of the updated terms.
          </p>
        </section>
      </div>
    </section>
  );
}
