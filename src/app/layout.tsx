import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CursorGlow } from "@/components/cursor-glow";
import { SiteBackground } from "@/components/site-background";
import { StickyQuote } from "@/components/sticky-quote";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://primeconstruct.example.com"),
  title: {
    default: "PRIME CONSTRUCT | Finish Faster. Build Smarter.",
    template: "%s | PRIME CONSTRUCT",
  },
  description:
    "PRIME CONSTRUCT is the practitioner's choice for gypsum solutions in India. Build faster, save water, and deliver superior finish quality.",
  keywords: [
    "gypsum plaster India",
    "gypsum vs cement plaster",
    "plastering services",
    "construction gypsum solutions",
  ],
  openGraph: {
    title: "PRIME CONSTRUCT",
    description:
      "Building dreams, supplying solutions with high-performance gypsum systems for modern construction.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "PRIME CONSTRUCT",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${montserrat.variable} h-full scroll-smooth antialiased`}
    >
      <body className="relative min-h-full overflow-x-hidden bg-[#0A0A0A] text-white">
        <SiteBackground />
        <CursorGlow />
        <SiteHeader />
        <main className="relative z-10 pt-18">{children}</main>
        <div className="relative z-10">
          <SiteFooter />
        </div>
        <StickyQuote />
      </body>
    </html>
  );
}
