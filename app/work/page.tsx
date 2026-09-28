import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import WorkFilter from "@/components/WorkFilter";
import CTASection from "@/components/CTASection";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Webflow and Framer websites designed and built by Revamp Webz for ambitious B2B, SaaS, healthcare and hospitality brands.",
};

export default function WorkPage() {
  return (
    <>
      <section className="px-4 pb-section-sm pt-40 md:pt-48">
        <div className="container-content">
          <SectionLabel>Selected Work</SectionLabel>
          <h1 className="mt-6 max-w-3xl text-balance font-display text-5xl font-semibold tracking-tight text-off md:text-7xl">
            Websites built to make businesses move.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            A selection of Webflow and Framer projects across healthcare, SaaS, hospitality and professional services.
          </p>
        </div>
      </section>

      <section className="px-4 pb-section-sm md:pb-section">
        <div className="container-content">
          <WorkFilter projects={projects} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
