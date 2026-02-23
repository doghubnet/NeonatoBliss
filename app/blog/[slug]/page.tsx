import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostContent, getPosts } from "@/lib/blog";

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPosts().find((p) => p.slug === slug);
  if (!post) return notFound();
  const { title, body } = getPostContent(slug);

  return (
    <main className="section-wrap prose prose-slate py-16 max-w-3xl">
      <h1 className="font-heading text-4xl !text-navy">{title}</h1>
      <MDXRemote source={body} />
      <p className="disclaimer not-prose mt-8">Not medical advice – always consult your healthcare provider. Backed by WHO, UNICEF, AAP, and pediatric insights.</p>
    </main>
  );
}
