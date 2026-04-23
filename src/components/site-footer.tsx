import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3 md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative inline-block h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white/5">
              <Image src="/logo.png" alt="PRIME CONSTRUCT" fill className="object-contain p-1" sizes="48px" />
            </span>
            <h3 className="text-xl font-semibold text-white">PRIME CONSTRUCT</h3>
          </div>
          <p className="mt-3 text-sm text-white/65">
            Premium construction supply and infrastructure solutions for future-ready projects.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#D4AF37]">Quick Links</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-white/80">
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#D4AF37]">Legal</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-white/80">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/faqs">FAQs</Link>
          </div>
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        {new Date().getFullYear()} PRIME CONSTRUCT. All rights reserved.
      </p>
    </footer>
  );
}
