import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import LogoMarquee from "@/components/LogoMarquee";
import MethodTimeline from "@/components/MethodTimeline";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description: "Revamp Webz is a boutique Webflow and Framer studio built on clarity, purpose and senior-level craft.",
};

const principles = [
  { title: "Clarity Over Clutter", body: "Every element earns its place, or it doesn't ship." },
  { title: "Purpose Over Decoration", body: "Motion and visual flourish exist to communicate, never to impress for its own sake." },
  { title: "Systems Over Patchwork", body: "Design tokens and components, not one-off pages held together with hope." },
  { title: "Motion With Meaning", body: "If an animation doesn't reinforce hierarchy or feedback, it doesn't belong." },
  { title: "Performance Is Design", body: "A beautiful site that loads slowly isn't a beautiful site." },
];

const tools = ["Webflow", "Framer", "Figma", "GSAP", "Notion", "Linear"];

export default function AboutPage() {
  return (
    <>
      <section className="bg-off px-4 pb-section-sm pt-40 md:pt-48">
        <div className="container-content">
          <SectionLabel light>About Revamp Webz</SectionLabel>
          <h1 className="mt-6 max-w-3xl text-balance font-display text-5xl font-semibold tracking-tight text-dark md:text-7xl">
            We revamp the web, <span className="font-accent italic text-rust">one ambitious brand</span> at a time.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-dark">
            Revamp Webz started with a simple observation: most business websites are technically fine and strategically invisible. We build the opposite.
          </p>
        </div>
      </section>

      <section className="bg-off px-4 py-section-sm">
        <div className="container-content grid gap-10 md:grid-cols-2 md:gap-20">
          <div>
            <SectionLabel light>Our Story</SectionLabel>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-dark md:text-4xl">
              A studio built around one discipline.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-dark">
            <p>
              Too many businesses inherit a website that was designed once, for a different version of the company, and never
              revisited. It quietly undersells everything happening inside the business.
            </p>
            <p>
              Revamp Webz exists to close that gap — combining strategy, design and Webflow/Framer development into a single,
              senior-led process, rather than handing a brief between departments and hoping the result still makes sense.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy-deep px-4 py-section-sm">
        <div className="container-content">
          <SectionLabel>Our Philosophy</SectionLabel>
          <h2 className="mt-6 max-w-xl text-balance font-display text-4xl font-semibold tracking-tight text-off md:text-5xl">
            Five principles behind every decision.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title} className="bg-navy-deep p-8">
                <p className="font-display text-lg font-semibold text-off">{p.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy px-4 py-section-sm md:py-section">
        <div className="container-content">
          <SectionLabel>The Revamp Method™</SectionLabel>
          <h2 className="mt-6 max-w-xl text-balance font-display text-4xl font-semibold tracking-tight text-off md:text-6xl">
            A system, not a series of guesses.
          </h2>
          <div className="mt-16">
            <MethodTimeline />
          </div>
        </div>
      </section>

      <section className="bg-off px-4 py-section-sm">
        <div className="container-content grid gap-10 md:grid-cols-2 md:gap-20">
          <div>
            <SectionLabel light>Why Webflow & Framer</SectionLabel>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-dark md:text-4xl">
              The right platform, not the familiar one.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-dark">
            We specialize in Webflow and Framer because they let us move at the speed modern businesses need — visual
            development, built-in CMS, and no dependency on a custom backend for a marketing site. We choose between them
            based on your content complexity and growth stage, not habit.
          </p>
        </div>
      </section>

      <section className="bg-navy-deep px-4 py-section-sm">
        <div className="container-content">
          <SectionLabel>Tools</SectionLabel>
          <h2 className="mt-6 max-w-xl text-balance font-display text-4xl font-semibold tracking-tight text-off md:text-5xl">
            How we work.
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {tools.map((t) => (
              <span key={t} className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-off/80">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-deep py-section-sm">
        <div className="container-content mb-10">
          <SectionLabel>Selected Clients</SectionLabel>
        </div>
        <LogoMarquee />
      </section>

      <section className="bg-off px-4 py-section-sm">
        <div className="container-content">
          <SectionLabel light>Client Voices</SectionLabel>
          <div className="mt-10">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
