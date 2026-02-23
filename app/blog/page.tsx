import Link from "next/link";
import { Card } from "@/components/ui/card";
import { getPosts } from "@/lib/blog";
import { disclaimer } from "@/lib/data";

export default function BlogPage() {
  const posts = getPosts();
  return (
    <main className="section-wrap py-16">
      <h1 className="font-heading text-4xl">Blog</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.slug}>
            <h2 className="font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm text-navy/80">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="mt-4 inline-block text-sm font-semibold text-terracotta">Read article →</Link>
          </Card>
        ))}
      </div>
      <p className="disclaimer mt-8">{disclaimer}</p>
    </main>
  );
}
