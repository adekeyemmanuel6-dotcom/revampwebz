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
      <section className="bg-off px-4 pb-section-sm pt-40 md:pt-48">
        <div className="container-content">
          <SectionLabel light>Selected Work</SectionLabel>
          <h1 className="mt-6 max-w-3xl text-balance font-display text-5xl font-semibold tracking-tight text-dark md:text-7xl">
            Websites built to <span className="font-accent italic text-rust">make businesses move</span>.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-dark">
            A selection of Webflow and Framer projects across healthcare, SaaS, hospitality and professional services.
          </p>
        </div>
      </section>

      <section className="bg-off px-4 pb-section-sm md:pb-section">
        <div className="container-content">
          <WorkFilter projects={projects} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
