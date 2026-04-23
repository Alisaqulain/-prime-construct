import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-shell flex min-h-[70vh] items-center justify-center py-24">
      <div className="glass-card max-w-xl p-10 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-[#D4AF37]">404</p>
        <h1 className="mt-3 text-4xl font-bold">Blueprint Not Found</h1>
        <p className="mt-4 text-white/75">
          The page you are looking for has moved or no longer exists.
        </p>
        <Link href="/" className="mt-6 inline-block rounded-full bg-[#D4AF37] px-6 py-2 text-black">
          Return Home
        </Link>
      </div>
    </section>
  );
}
