import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Website Design & UX/UI",
  description: "Discovery, UX, UI and design systems built for clarity, hierarchy and conversion.",
};

const process = [
  { title: "Discovery", body: "Understanding the business, the audience and what the site needs to accomplish." },
  { title: "Wireframing", body: "Structuring content and flow before any visual decisions are made." },
  { title: "UX", body: "Mapping the journey a visitor takes from arrival to decision." },
  { title: "UI", body: "Applying a visual system that reflects the quality of the business behind it." },
  { title: "Prototyping", body: "Testing key interactions before development begins." },
  { title: "Motion Direction", body: "Defining how the interface should feel in motion, not just at rest." },
];

const tokens = [
  { label: "Color", swatch: "#FFD600" },
  { label: "Color", swatch: "#06142E" },
  { label: "Color", swatch: "#F6F7F2" },
  { label: "Color", swatch: "#9BA6B5" },
];

export default function WebDesignPage() {
  return (
    <>
      <section className="px-4 pb-section-sm pt-40 md:pt-48">
        <div className="container-content">
          <SectionLabel>UX/UI & Web Design</SectionLabel>
          <h1 className="mt-6 max-w-3xl text-balance font-display text-5xl font-semibold tracking-tight text-off md:text-7xl">
            Design people remember. Journeys people understand.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            Discovery, wireframing, UX, UI, design systems, prototyping and motion direction — built to work as one connected system.
          </p>
        </div>
      </section>

      <section className="px-4 py-section-sm">
        <div className="container-content grid grid-cols-1 gap-6 md:grid-cols-3">
          {process.map((p, i) => (
            <div key={p.title} className="rounded-2xl border border-hairline p-8">
              <span className="font-display text-sm font-bold text-yellow-electric">0{i + 1}</span>
              <p className="mt-4 font-display text-xl font-semibold text-off">{p.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy-deep px-4 py-section-sm">
        <div className="container-content">
          <SectionLabel>Design Systems</SectionLabel>
          <h2 className="mt-6 max-w-xl text-balance font-display text-4xl font-semibold tracking-tight text-off md:text-5xl">
            Every project ships with a system, not a one-off.
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {tokens.map((t, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-hairline">
                <div className="h-24" style={{ backgroundColor: t.swatch }} />
                <p className="p-4 text-xs uppercase tracking-widest text-muted">{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
