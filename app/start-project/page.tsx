import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import StartProjectForm from "@/components/StartProjectForm";

export const metadata: Metadata = {
  title: "Start a Project",
  description: "Tell us what you're building and we'll show you how Revamp Webz would approach it.",
};

export default function StartProjectPage() {
  return (
    <section className="px-4 pb-section-sm pt-40 md:pt-48">
      <div className="container-content grid gap-16 md:grid-cols-[1fr_1.2fr] md:gap-20">
        <div>
          <SectionLabel>Start a Project</SectionLabel>
          <h1 className="mt-6 text-balance font-display text-5xl font-semibold leading-[1.05] tracking-tight text-off md:text-6xl">
            Let&apos;s build something worth remembering.
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
            Five short steps. No sales call required to get started — just tell us what you&apos;re building.
          </p>
          <div className="mt-12 space-y-5 border-t border-hairline pt-8 text-sm text-muted">
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
