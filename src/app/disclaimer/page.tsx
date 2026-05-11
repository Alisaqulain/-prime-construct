export default function DisclaimerPage() {
  return (
    <section className="section-shell py-20 md:py-28">
      <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Legal</p>
      <h1 className="mt-4 text-4xl font-bold md:text-5xl">Disclaimer</h1>
      <p className="mt-4 max-w-3xl text-sm text-white/60">Last updated: {new Date().toLocaleDateString()}</p>

      <div className="mt-10 space-y-8 text-white/75">
        <section className="glass-card p-7 md:p-8">
          <h2 className="text-xl font-semibold text-white">General information</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            This website provides general information about Prime Construct’s services, solutions, and
            project capabilities. It does not constitute professional advice or a binding offer.
          </p>
        </section>

        <section className="glass-card p-7 md:p-8">
          <h2 className="text-xl font-semibold text-white">Technical recommendations</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            Any technical content is indicative and must be validated for the specific site conditions
            (substrate, moisture, environment, trade sequencing, and project constraints). Final
            selection and execution remain the responsibility of the project team.
          </p>
        </section>

        <section className="glass-card p-7 md:p-8">
          <h2 className="text-xl font-semibold text-white">No guarantees</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            While we aim to keep information accurate and current, we make no warranties regarding
            completeness, reliability, or availability. Actual results vary by site conditions and
            project management.
          </p>
        </section>

        <section className="glass-card p-7 md:p-8">
          <h2 className="text-xl font-semibold text-white">External links</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            This website may contain links to third-party sites. We do not control and are not
            responsible for their content or privacy practices.
          </p>
        </section>
      </div>
    </section>
  );
}

