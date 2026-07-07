import Link from "next/link";
import Image from "next/image";
import { footerPrimaryLinks } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="footer-safe mt-12 border-t border-white/10 bg-black/80 backdrop-blur-md sm:mt-16 md:mt-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:gap-10 sm:px-5 sm:py-12 md:grid-cols-3 md:px-8">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <span className="relative inline-block h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white/5 sm:h-12 sm:w-12">
              <Image src="/logo.png" alt="PRIME CONSTRUCT" fill className="object-contain p-1" sizes="48px" />
            </span>
            <h3 className="text-lg font-semibold text-white sm:text-xl">PRIME CONSTRUCT</h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-white/65">
            Premium gypsum plaster solutions — material supply and professional application for modern
            construction.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:col-span-2 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-[#D4AF37]">Explore</p>
            <div className="mt-3 flex flex-col gap-2.5 text-sm text-white/80">
              {footerPrimaryLinks.map((item) => (
                <Link key={item.href} href={item.href} className="py-0.5 hover:text-white active:text-[#D4AF37]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#D4AF37]">Resources</p>
            <div className="mt-3 flex flex-col gap-2.5 text-sm text-white/80">
              <Link href="/green-guide.pdf" target="_blank" className="py-0.5 hover:text-white">
                Download Green Guide (PDF)
              </Link>
              <Link href="/faqs" className="py-0.5 hover:text-white">
                FAQs
              </Link>
              <Link href="/blog" className="py-0.5 hover:text-white">
                Insights
              </Link>
              <Link href="/legal" className="py-0.5 hover:text-white">
                Legal
              </Link>
              <Link href="/privacy-policy" className="py-0.5 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="py-0.5 hover:text-white">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-[11px] text-white/50 sm:text-xs">
        {new Date().getFullYear()} PRIME CONSTRUCT. All rights reserved.
      </p>
    </footer>
  );
}
