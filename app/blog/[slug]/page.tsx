import { notFound } from "next/navigation";
import { getPostContent, getPosts } from "@/lib/blog";
import { disclaimer } from "@/lib/data";

export const dynamic = "force-dynamic";
export const revalidate = 0;

function renderMarkdown(markdown: string) {
  return markdown.split("\n\n").map((block, idx) => {
    const trimmed = block.trim();
    if (!trimmed) return null;

    if (trimmed.startsWith("## ")) {
      return (
        <h2 key={idx} className="mt-8 font-heading text-2xl text-navy">
          {trimmed.replace(/^##\s+/, "")}
        </h2>
      );
    }

    if (trimmed.startsWith("- ")) {
      const items = trimmed.split("\n").map((line) => line.replace(/^-\s+/, "").trim());
      return (
        <ul key={idx} className="mt-4 list-disc space-y-2 pl-5 text-navy/90">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    }

    const emphasized = trimmed.replace(/\*\*(.*?)\*\*/g, "$1").replace(/\*(.*?)\*/g, "$1");
    return (
      <p key={idx} className="mt-4 leading-7 text-navy/90">
        {emphasized}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPosts().find((p) => p.slug === slug);
  if (!post) return notFound();

  const { title, body } = getPostContent(slug);

  return (
    <main className="section-wrap max-w-3xl py-16">
      <h1 className="font-heading text-4xl text-navy">{title}</h1>
      <article className="mt-6">{renderMarkdown(body)}</article>
      <p className="disclaimer mt-8">{disclaimer}</p>
    </main>
  );
}
