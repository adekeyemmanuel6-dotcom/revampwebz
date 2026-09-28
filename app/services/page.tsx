import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "Website strategy, UX/UI design, Webflow development, Framer development and conversion optimization from Revamp Webz.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-off px-4 pb-section-sm pt-40 md:pt-48">
        <div className="container-content">
          <SectionLabel light>Services</SectionLabel>
          <h1 className="mt-6 max-w-2xl text-balance font-display text-5xl font-semibold tracking-tight text-dark md:text-7xl">
            Not just prettier websites. <span className="font-accent italic text-rust">Better digital businesses.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-dark">
            Every engagement moves through the same connected system — strategy, design, development and refinement — regardless of which service starts the conversation.
          </p>
        </div>
      </section>

      <section className="bg-off px-4 pb-section-sm md:pb-section">
        <div className="container-content grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              data-cursor="VIEW"
              className="group relative bg-navy p-10 transition-colors hover:bg-navy-surface"
            >
              <span className="font-display text-sm font-bold text-rust">{s.number}</span>
              <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-off">{s.title}</h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">{s.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-off/70 transition-colors group-hover:text-rust">
                Learn more ↗
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
