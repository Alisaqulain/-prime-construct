import Link from "next/link";
import { faqs } from "@/lib/data";
import { FaqAccordion } from "@/components/faq-accordion";

export default function FaqPage() {
  return (
    <section className="page-shell">
      <div className="mx-auto max-w-4xl">
        <p className="premium-label">Need clarity before you decide?</p>
        <h1 className="page-title mt-3">Frequently Asked Questions</h1>
        <p className="page-lead mt-3">
          Important answers about execution speed, finish quality, and on-site implementation.
        </p>

        <div className="mt-6 sm:mt-8">
          <FaqAccordion items={faqs} />
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-sm text-white/75 sm:mt-8 sm:p-5">
          Still need help for your project?{" "}
          <Link href="/contact" className="font-semibold text-[#D4AF37]">
            Talk to our expert team.
          </Link>
        </div>
      </div>
    </section>
  );
}
