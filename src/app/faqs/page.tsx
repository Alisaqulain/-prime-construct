import { faqs } from "@/lib/data";

export default function FaqPage() {
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
