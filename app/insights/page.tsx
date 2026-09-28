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
      <section className="bg-off px-4 pb-section-sm pt-40 md:pt-48">
        <div className="container-content">
          <SectionLabel light>Insights</SectionLabel>
          <h1 className="mt-6 max-w-2xl text-balance font-display text-5xl font-semibold tracking-tight text-dark md:text-7xl">
            Notes on building <span className="font-accent italic text-rust">better websites</span>.
          </h1>
        </div>
      </section>

      <section className="bg-off px-4 pb-section-sm md:pb-section">
        <div className="container-content grid grid-cols-1 gap-6 md:grid-cols-3">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/insights/${a.slug}`}
              data-cursor="READ"
              className="group flex flex-col justify-between rounded-2xl border border-hairline-dark p-8 transition-colors hover:border-rust/40"
            >
              <div>
                <p className="text-[10px] uppercase tracking-widest text-rust">{a.category}</p>
                <h2 className="mt-4 font-display text-xl font-semibold leading-snug text-dark">{a.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-dark">{a.excerpt}</p>
              </div>
              <p className="mt-8 text-xs uppercase tracking-widest text-muted-dark">
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
