import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "ENT Blog",
  description:
    "Plain-language guides on vertigo, sinusitis, foreign bodies, and when to see an ENT in Vadodara.",
};

export default function BlogPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <p className="section-kicker">Blog</p>
          <h1 className="section-title font-display">Patient education</h1>
          <p className="section-lead">
            Short articles to help you decide when to seek care — not a
            substitute for a consultation.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="border border-brand-900/10 bg-white p-5 transition hover:border-brand-700/40"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">
                  {post.date}
                </p>
                <h2 className="mt-2 font-display text-2xl text-brand-950">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-ink-muted">{post.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
