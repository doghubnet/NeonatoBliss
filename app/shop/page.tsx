import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { products } from "@/lib/data";

export default function ShopPage() {
  return (
    <main className="section-wrap py-16">
      <h1 className="font-heading text-4xl">Shop</h1>
      <p className="mt-2 text-navy/80">Digital resources with instant delivery and global-friendly checkout.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <Card key={p.slug} className="p-0 overflow-hidden">
            <Image src={p.image} alt={p.title} width={500} height={320} className="h-44 w-full object-cover" />
            <div className="p-5"><h2 className="font-semibold">{p.title}</h2><p className="mt-2 text-sm">{p.description}</p><div className="mt-4 flex justify-between"><span className="font-bold">{p.price}</span><Badge>Instant Download</Badge></div><Button asChild className="mt-4 w-full"><Link href={`/product/${p.slug}`}>View Product</Link></Button></div>
          </Card>
        ))}
      </div>
      <p className="disclaimer mt-8">Not medical advice – consult your healthcare provider. Backed by WHO, UNICEF, AAP, and pediatric insights.</p>
    </main>
  );
}
