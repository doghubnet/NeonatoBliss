import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { products } from "@/lib/data";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return notFound();

  return (
    <main className="section-wrap py-16">
      <div className="grid gap-10 lg:grid-cols-2">
        <Image src={product.image} alt={product.title} width={900} height={620} className="rounded-3xl object-cover" />
        <div>
          <h1 className="font-heading text-4xl">{product.title}</h1>
          <p className="mt-4 text-navy/80">{product.description}</p>
          <p className="mt-4 text-2xl font-bold">{product.price}</p>
          <Button className="mt-5 w-full sm:w-auto">Buy with Stripe / Lemon Squeezy</Button>
          <p className="mt-3 text-sm text-navy/70">Instant delivery. Multiple currencies including USD, EUR, ETB.</p>
          <p className="disclaimer mt-5">Not medical advice – always consult your healthcare provider. Backed by WHO, UNICEF, AAP, and pediatric insights.</p>
        </div>
      </div>
      <section className="mt-12">
        <h2 className="font-heading text-2xl">Related products</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">{products.filter((p) => p.slug !== slug).slice(0, 3).map((p) => <Card key={p.slug}><h3 className="font-semibold">{p.title}</h3><p className="text-sm mt-2">{p.price}</p><Button asChild variant="outline" className="mt-3 w-full"><Link href={`/product/${p.slug}`}>Learn More</Link></Button></Card>)}</div>
      </section>
    </main>
  );
}
