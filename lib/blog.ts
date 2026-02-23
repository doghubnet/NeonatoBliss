import fs from "node:fs";
import path from "node:path";

const postsDir = path.join(process.cwd(), "content/blog");

export function getPosts() {
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(postsDir, file), "utf-8");
      const title = raw.match(/title: "(.+)"/)?.[1] ?? slug;
      const excerpt = raw.match(/excerpt: "(.+)"/)?.[1] ?? "";
      return { slug, title, excerpt };
    });
}

export function getPostContent(slug: string) {
  const raw = fs.readFileSync(path.join(postsDir, `${slug}.mdx`), "utf-8");
  const body = raw.replace(/^---[\s\S]*?---\n/, "");
  const title = raw.match(/title: "(.+)"/)?.[1] ?? slug;
  return { title, body };
}
