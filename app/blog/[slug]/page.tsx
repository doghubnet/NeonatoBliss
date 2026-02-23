import { notFound } from "next/navigation";
import { disclaimer } from "@/lib/data";
import { blogPosts } from "@/lib/blog-posts";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) return notFound();

  return (
    <main className="section-wrap max-w-3xl py-16">
      <h1 className="font-heading text-4xl text-navy">{post.title}</h1>
      <p className="mt-3 text-navy/80">{post.excerpt}</p>
      <article className="mt-8 space-y-6">
        {post.sections.map((section, idx) => (
          <section key={`${post.slug}-${idx}`}>
            {section.heading ? <h2 className="font-heading text-2xl text-navy">{section.heading}</h2> : null}
            {section.body ? <p className="mt-3 leading-7 text-navy/90">{section.body}</p> : null}
            {section.bullets ? (
              <ul className="mt-3 list-disc space-y-2 pl-5 text-navy/90">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </article>
      <p className="disclaimer mt-8">{disclaimer}</p>
    </main>
  );
}
