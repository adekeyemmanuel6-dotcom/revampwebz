import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionLabel from "@/components/SectionLabel";
import CTASection from "@/components/CTASection";
import { articles } from "@/lib/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    datePublished: article.date,
    description: article.excerpt,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="px-4 pb-section-sm pt-40 md:pt-48">
        <div className="container-content mx-auto max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            <Link href="/insights" className="hover:text-yellow-electric">Insights</Link> / {article.category}
          </p>
          <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.1] tracking-tight text-off md:text-5xl">
            {article.title}
          </h1>
          <p className="mt-6 text-sm text-muted">
            {new Date(article.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
          <div className="mt-12 space-y-6 border-t border-hairline pt-10 text-lg leading-relaxed text-off/85">
            {article.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </article>
      <CTASection />
    </>
  );
}
