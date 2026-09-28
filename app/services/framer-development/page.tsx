import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import CTASection from "@/components/CTASection";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Framer Development Agency",
  description: "Framer websites for startups, launches and visually ambitious brands — fast to ship, built to move.",
};

const focus = [
  { title: "Premium startup sites", body: "Sites that punch above a pre-seed or seed-stage budget without looking like a template." },
  { title: "Motion-led storytelling", body: "Interaction used to explain a product, not decorate a page." },
  { title: "Rapid launch cadence", body: "Framer's iteration speed matched to a founder's timeline, not an agency's." },
  { title: "CMS for landing pages", body: "Structured content so your team can ship new pages without a developer." },
];

export default function FramerPage() {
  const framerProjects = projects.filter((p) => p.platform === "Framer").slice(0, 3);
  return (
    <>
      <section className="px-4 pb-section-sm pt-40 md:pt-48">
        <div className="container-content">
          <SectionLabel>Framer Development</SectionLabel>
          <h1 className="mt-6 max-w-3xl text-balance font-display text-5xl font-semibold tracking-tight text-off md:text-7xl">
            Framer websites that move like the brands behind them.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            Interactive, motion-led websites for startups and ambitious brands that need to launch fast without looking like they rushed.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-section-sm">
        <div className="container-content">
          <div className="relative overflow-hidden rounded-2xl border border-hairline bg-navy-surface p-10 md:p-16">
            <div className="pointer-events-none absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            <div className="relative grid grid-cols-2 gap-6 md:grid-cols-4">
              {["Canvas", "Interactions", "Components", "CMS"].map((label) => (
                <div key={label} className="rounded-xl border border-hairline bg-navy-deep/60 p-6 text-center backdrop-blur">
                  <p className="font-display text-sm font-semibold text-yellow-electric">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-deep px-4 py-section-sm">
        <div className="container-content grid grid-cols-1 gap-6 md:grid-cols-2">
          {focus.map((f) => (
            <div key={f.title} className="rounded-2xl border border-hairline p-8">
              <p className="font-display text-xl font-semibold text-off">{f.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {framerProjects.length > 0 && (
        <section className="px-4 py-section-sm">
          <div className="container-content">
            <SectionLabel>Featured Framer Projects</SectionLabel>
            <h2 className="mt-6 max-w-xl text-balance font-display text-4xl font-semibold tracking-tight text-off md:text-5xl">
              Recent work built on Framer.
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {framerProjects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
