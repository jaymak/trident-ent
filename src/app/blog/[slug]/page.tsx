import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { blogPosts, getPost } from "@/content/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <article className="section">
        <div className="container max-w-3xl">
          <p className="section-kicker">
            <Link href="/blog" className="hover:text-teal-900">
              Blog
            </Link>
          </p>
          <h1 className="section-title font-display">{post.title}</h1>
          <p className="text-sm text-ink-muted">{post.date}</p>
          <div className="prose-clinic mt-8">
            {post.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
      <CtaBand />
    </>
  );
}
