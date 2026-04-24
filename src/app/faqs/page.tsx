export default function FaqPage() {
  const faqs = [
    {
      question: "Is gypsum plaster suitable for high-volume projects?",
      answer: "Yes. It is widely used for large residential and commercial developments.",
    },
    {
      question: "Can gypsum eliminate putty costs?",
      answer: "In many projects, smoother finish quality significantly reduces or removes putty usage.",
    },
    {
      question: "Do you provide on-site application guidance?",
      answer: "Yes. PRIME CONSTRUCT teams support implementation and quality checks during rollout.",
    },
  ];

  return (
    <section className="section-shell py-24">
      <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
      <div className="mt-8 space-y-4">
        {faqs.map((item) => (
          <details key={item.question} className="glass-card p-5">
            <summary className="cursor-pointer font-semibold">{item.question}</summary>
            <p className="mt-3 text-sm text-white/75">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
