import Button from "@/components/Button";

export default function CTASection() {
  return (
    <section className="px-4 py-section-sm md:py-section">
      <div className="container-content">
        <div className="relative overflow-hidden rounded-[32px] border border-hairline bg-navy-deep px-8 py-20 text-center md:px-16 md:py-28">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial-glow blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-electric">Start a Project</p>
            <h2 className="mt-6 text-balance font-display text-4xl font-semibold tracking-tight text-off md:text-6xl">
              Your next website should feel like your next chapter.
            </h2>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted">
              Tell us what you&apos;re building and we&apos;ll show you how we&apos;d approach it.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="/start-project">Start a Project →</Button>
              <a
                href="mailto:hello@revampwebz.com"
                data-cursor="EMAIL"
                className="text-sm text-off/70 underline decoration-hairline underline-offset-4 transition-colors hover:text-yellow-electric"
              >
                hello@revampwebz.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
