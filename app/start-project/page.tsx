import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import StartProjectForm from "@/components/StartProjectForm";

export const metadata: Metadata = {
  title: "Start a Project",
  description: "Tell us what you're building and we'll show you how Revamp Webz would approach it.",
};

export default function StartProjectPage() {
  return (
    <section className="bg-off px-4 pb-section-sm pt-40 md:pt-48">
      <div className="container-content grid gap-16 md:grid-cols-[1fr_1.2fr] md:gap-20">
        <div>
          <SectionLabel light>Start a Project</SectionLabel>
          <h1 className="mt-6 text-balance font-display text-5xl font-semibold leading-[1.05] tracking-tight text-dark md:text-6xl">
            Let&apos;s build something <span className="font-accent italic text-rust">worth remembering</span>.
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-dark">
            Five short steps. No sales call required to get started — just tell us what you&apos;re building.
          </p>
          <div className="mt-12 space-y-5 border-t border-hairline-dark pt-8 text-sm text-muted-dark">
            <p>hello@revampwebz.com</p>
            <p>Available Worldwide</p>
            <p>Typical response time: within one business day</p>
          </div>
        </div>
        <StartProjectForm />
      </div>
    </section>
  );
}
