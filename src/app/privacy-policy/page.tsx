export default function PrivacyPolicyPage() {
  return (
    <section className="section-shell py-20 md:py-28">
      <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Legal</p>
      <h1 className="mt-4 text-4xl font-bold md:text-5xl">Privacy Policy</h1>
      <p className="mt-4 max-w-3xl text-sm text-white/60">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="mt-10 space-y-8 text-white/75">
        <section className="glass-card p-7 md:p-8">
          <h2 className="text-xl font-semibold text-white">Overview</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            Prime Construct (“we”, “us”, “our”) respects your privacy. This policy explains what
            information we collect when you use our website, contact forms, or communication channels,
            and how we use and protect it.
          </p>
        </section>

        <section className="glass-card p-7 md:p-8">
          <h2 className="text-xl font-semibold text-white">Information we collect</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li>
              <span className="font-semibold text-white">Contact details</span>: name, company name,
              phone number, email address.
            </li>
            <li>
              <span className="font-semibold text-white">Project details</span>: service required,
              project location, scope notes and messages you provide.
            </li>
            <li>
              <span className="font-semibold text-white">Technical / usage data</span>: standard web
              logs (e.g., device, browser, IP, pages visited) that may be collected by hosting or
              analytics tools.
            </li>
          </ul>
        </section>

        <section className="glass-card p-7 md:p-8">
          <h2 className="text-xl font-semibold text-white">How we use your information</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li>To respond to enquiries, provide quotations, and schedule consultations.</li>
            <li>To understand requirements and propose suitable supply and/or application scope.</li>
            <li>To improve website performance, content quality, and user experience.</li>
            <li>To maintain internal records of leads and communications.</li>
          </ul>
        </section>

        <section className="glass-card p-7 md:p-8">
          <h2 className="text-xl font-semibold text-white">Sharing of information</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            We do not sell personal data. We may share information with trusted service providers
            strictly for business operations (e.g., email delivery services, website hosting) and only
            to the extent necessary to provide the service.
          </p>
        </section>

        <section className="glass-card p-7 md:p-8">
          <h2 className="text-xl font-semibold text-white">Data retention</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            We retain enquiry information for as long as needed to respond, provide services, comply
            with legal obligations, and maintain business records. Retention periods may vary based on
            the nature of your enquiry and engagement.
          </p>
        </section>

        <section className="glass-card p-7 md:p-8">
          <h2 className="text-xl font-semibold text-white">Security</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            We use reasonable administrative and technical safeguards to protect information. No
            internet transmission is completely secure, so we cannot guarantee absolute security.
          </p>
        </section>

        <section className="glass-card p-7 md:p-8">
          <h2 className="text-xl font-semibold text-white">Your choices</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li>You can request correction of inaccurate information.</li>
            <li>You can request deletion where legally permissible.</li>
            <li>You may opt out of non-essential communications at any time.</li>
          </ul>
        </section>

        <section className="glass-card p-7 md:p-8">
          <h2 className="text-xl font-semibold text-white">Contact</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            For privacy questions or requests, use the contact form on our website.
          </p>
        </section>
      </div>
    </section>
  );
}
