import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/data";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  const related = products.filter((item) => item.category === product.category && item.slug !== slug);

  return (
    <section className="section-shell py-24">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <img src={product.image} alt={product.title} className="h-80 w-full rounded-2xl object-cover" />
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((item) => (
              <img
                key={item}
                src={product.image}
                alt={`${product.title} gallery ${item}`}
                className="h-24 w-full rounded-xl object-cover"
              />
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">{product.category}</p>
          <h1 className="mt-2 text-4xl font-bold">{product.title}</h1>
          <p className="mt-4 text-white/80">{product.description}</p>
          <h2 className="mt-6 text-xl font-semibold">Specifications</h2>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            {product.specs.map((spec) => (
              <li key={spec} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                {spec}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-black"
          >
            Send Inquiry
          </Link>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold">Related Products</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/products/${item.slug}`}
                className="rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <p className="text-[#D4AF37]">{item.category}</p>
                <h3 className="mt-1 font-semibold">{item.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
