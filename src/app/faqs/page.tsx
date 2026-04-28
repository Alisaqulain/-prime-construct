import Link from "next/link";
import { faqs } from "@/lib/data";
import { FaqAccordion } from "@/components/faq-accordion";

export default function FaqPage() {
  return (
    <section className="section-shell py-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">Need clarity before you decide?</p>
        <h1 className="mt-2 text-4xl font-bold">Frequently Asked Questions</h1>
        <p className="mt-3 text-white/75">
          Important answers about execution speed, finish quality, cost savings, and on-site implementation.
        </p>

        <div className="mt-8">
          <FaqAccordion items={faqs} />
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-sm text-white/75">
          Still need help for your project?{" "}
          <Link href="/contact" className="font-semibold text-[#D4AF37]">
            Talk to our expert team.
          </Link>
        </div>
      </div>
    </section>
  );
}
