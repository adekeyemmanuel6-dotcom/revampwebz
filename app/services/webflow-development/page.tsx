import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import CTASection from "@/components/CTASection";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Webflow Development Agency",
  description: "Scalable, fast and conversion-focused Webflow development for marketing teams and ambitious businesses.",
};

const capabilities = [
  "Component-based Webflow builds",
  "CMS architecture for content at scale",
  "Custom interactions and micro-animation",
  "Custom code where Webflow needs an assist",
  "Migration from legacy CMS or template builders",
  "Technical SEO baked in from structure up",
];

const standards = [
  { title: "Clean class architecture", body: "A Client-First-inspired naming system so your team — or the next developer — can actually navigate the project." },
  { title: "CMS-first thinking", body: "Collections modeled around how your team actually creates content, not around what's easiest to build." },
  { title: "Performance by default", body: "Optimized assets, lazy loading and lean interactions so Webflow's flexibility never costs you speed." },
  { title: "SEO foundations", body: "Semantic structure, metadata and schema considered from the first wireframe, not bolted on after launch." },
];

const faqs = [
  { q: "Why Webflow instead of a custom-coded site?", a: "Webflow gives your team a visual CMS and the ability to make content and design changes without touching code — while still allowing custom code where it's genuinely needed." },
  { q: "Can you migrate our existing site into Webflow?", a: "Yes. We plan content migration carefully to preserve SEO equity, redirect structure and URL patterns during the move." },
  { q: "Do you build the CMS structure too?", a: "Every Webflow project includes a CMS architecture designed around your content, not a generic template." },
  { q: "Will our team be able to update the site after launch?", a: "That's the point of Webflow. We design every build so your team can manage content independently, with clear documentation." },
];

export default function WebflowPage() {
  const webflowProjects = projects.filter((p) => p.platform === "Webflow").slice(0, 3);
  return (
    <>
      <section className="bg-off px-4 pb-section-sm pt-40 md:pt-48">
        <div className="container-content">
          <SectionLabel light>Webflow Development</SectionLabel>
          <h1 className="mt-6 max-w-3xl text-balance font-display text-5xl font-semibold tracking-tight text-dark md:text-7xl">
            Webflow websites built <span className="font-accent italic text-rust">beyond the template</span>.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-dark">
            Scalable, fast and conversion-focused Webflow development for marketing teams and ambitious businesses.
          </p>
        </div>
      </section>

      <section className="bg-off px-4 py-section-sm">
        <div className="container-content grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <SectionLabel light>Why Webflow</SectionLabel>
            <h2 className="mt-6 max-w-md text-balance font-display text-4xl font-semibold tracking-tight text-dark md:text-5xl">
              Design freedom, without losing engineering discipline.
            </h2>
          </div>
          <ul className="space-y-4">
            {capabilities.map((c) => (
              <li key={c} className="flex items-start gap-4 border-b border-hairline-dark pb-4 text-base text-dark/85">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rust" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy-deep px-4 py-section-sm">
        <div className="container-content">
          <SectionLabel>Development Standards</SectionLabel>
          <h2 className="mt-6 max-w-xl text-balance font-display text-4xl font-semibold tracking-tight text-off md:text-5xl">
            Built the way we&apos;d want to inherit it.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {standards.map((s) => (
              <div key={s.title} className="rounded-2xl border border-hairline p-8">
                <p className="font-display text-xl font-semibold text-off">{s.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {webflowProjects.length > 0 && (
        <section className="bg-off px-4 py-section-sm">
          <div className="container-content">
            <SectionLabel light>Featured Webflow Projects</SectionLabel>
            <h2 className="mt-6 max-w-xl text-balance font-display text-4xl font-semibold tracking-tight text-dark md:text-5xl">
              Recent work built on Webflow.
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {webflowProjects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-navy-deep px-4 py-section-sm">
        <div className="container-content">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-6 max-w-xl text-balance font-display text-4xl font-semibold tracking-tight text-off md:text-5xl">
            Common questions.
          </h2>
          <div className="mt-10 divide-y divide-hairline border-y border-hairline">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-medium text-off">
                  {f.q}
                  <span className="text-rust transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
