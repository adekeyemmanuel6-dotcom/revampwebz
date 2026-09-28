import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import CTASection from "@/components/CTASection";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Insights",
  description: "Notes on Webflow, Framer, website strategy, UX and conversion optimization from Revamp Webz.",
};

export default function InsightsPage() {
  return (
    <>
      <section className="px-4 pb-section-sm pt-40 md:pt-48">
        <div className="container-content">
          <SectionLabel>Insights</SectionLabel>
          <h1 className="mt-6 max-w-2xl text-balance font-display text-5xl font-semibold tracking-tight text-off md:text-7xl">
            Notes on building better websites.
          </h1>
        </div>
      </section>

      <section className="px-4 pb-section-sm md:pb-section">
        <div className="container-content grid grid-cols-1 gap-6 md:grid-cols-3">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/insights/${a.slug}`}
              data-cursor="READ"
              className="group flex flex-col justify-between rounded-2xl border border-hairline p-8 transition-colors hover:border-yellow-electric/40"
            >
              <div>
                <p className="text-[10px] uppercase tracking-widest text-yellow-electric">{a.category}</p>
                <h2 className="mt-4 font-display text-xl font-semibold leading-snug text-off">{a.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{a.excerpt}</p>
              </div>
              <p className="mt-8 text-xs uppercase tracking-widest text-muted">
                {new Date(a.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
