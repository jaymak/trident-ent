import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { getService, servicePages } from "@/content/services";
import { services } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getService(slug);
  if (!page) return {};
  return { title: page.title, description: page.description };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const page = getService(slug);
  if (!page) notFound();

  const related = services.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="section">
        <div className="container max-w-3xl">
          <p className="section-kicker">
            <Link href="/services" className="hover:text-brand-900">
              Services
            </Link>
          </p>
          <h1 className="section-title font-display">{page.title}</h1>
          <p className="section-lead">{page.intro}</p>
        </div>
      </section>

      <section className="section bg-paper-warm/40">
        <div className="container prose-clinic max-w-3xl">
          {page.sections.map((section) => (
            <div key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
              {section.bullets?.length ? (
                <ul>
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {related.length ? (
        <section className="section">
          <div className="container">
            <h2 className="font-display text-2xl text-brand-950">
              Related care
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="border border-brand-900/10 bg-white p-4 text-sm"
                >
                  <p className="font-display text-lg text-brand-950">
                    {item.title}
                  </p>
                  <p className="mt-1 text-ink-muted">{item.short}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaBand />
    </>
  );
}
