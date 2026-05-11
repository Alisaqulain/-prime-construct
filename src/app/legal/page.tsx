import Link from "next/link";
import { Shield, ScrollText, Cookie, AlertTriangle } from "lucide-react";

const legalLinks = [
  {
    href: "/terms",
    title: "Terms & Conditions",
    description: "Rules for using this website, enquiries, quotes, and engagement terms.",
    icon: ScrollText,
  },
  {
    href: "/privacy-policy",
    title: "Privacy Policy",
    description: "How we collect, use, and protect personal data submitted via this site.",
    icon: Shield,
  },
  {
    href: "/cookie-policy",
    title: "Cookie Policy",
    description: "How cookies and similar technologies may be used on this website.",
    icon: Cookie,
  },
  {
    href: "/disclaimer",
    title: "Disclaimer",
    description: "Important notes about information accuracy and technical recommendations.",
    icon: AlertTriangle,
  },
];

export default function LegalPage() {
  return (
    <section className="section-shell py-20 md:py-28">
      <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">Legal</p>
      <h1 className="mt-4 text-4xl font-bold md:text-5xl">Legal information</h1>
      <p className="mt-5 max-w-2xl text-lg text-white/75">
        The documents below explain how this website is used, how we handle personal information, and
        important service-related notices. If you have questions, contact us.
      </p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {legalLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-[#D4AF37]/35 hover:bg-white/[0.05]"
          >
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-black/40 text-[#D4AF37]">
                <item.icon size={18} />
              </span>
              <div>
                <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

