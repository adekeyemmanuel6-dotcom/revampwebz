import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionLabel from "@/components/SectionLabel";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import MockBrowser from "@/components/MockBrowser";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const next = projects.find((p) => p.slug === project.nextSlug) ?? projects[0];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Work", item: "https://revampwebz.com/work" },
      { "@type": "ListItem", position: 2, name: project.name },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="px-4 pb-section-sm pt-40 md:pt-48">
        <div className="container-content">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            <Link href="/work" className="hover:text-yellow-electric">Work</Link> / {project.name}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.services.map((s) => (
              <span key={s} className="rounded-full border border-hairline px-3 py-1 text-[10px] uppercase tracking-widest text-muted">
                {s}
              </span>
            ))}
          </div>

          <h1 className="mt-8 max-w-4xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-off md:text-6xl">
            {project.heroHeadline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{project.summary}</p>

          <div className="mt-10 grid grid-cols-2 gap-6 border-y border-hairline py-8 sm:grid-cols-3 md:grid-cols-6">
            {[
              ["Client", project.client],
              ["Industry", project.industry],
              ["Platform", project.platform],
              ["Year", project.year],
              ["Timeline", project.timeline],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-[10px] uppercase tracking-widest text-muted">{label}</p>
                <p className="mt-1 text-sm font-medium text-off">{value}</p>
              </div>
            ))}
            {project.liveUrl && (
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted">Live Site</p>
                <a href={project.liveUrl} data-cursor="VISIT" className="mt-1 inline-block text-sm font-medium text-yellow-electric">
                  Visit ↗
                </a>
              </div>
            )}
          </div>

          <div className="mt-14 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-hairline">
            <MockBrowser variant="after" title={project.name} seed={project.slug} />
          </div>
        </div>
      </section>

      {/* CLIENT CONTEXT */}
      <section className="px-4 py-section-sm">
        <div className="container-content grid gap-10 md:grid-cols-[1fr_2fr] md:gap-20">
          <div>
            <SectionLabel>The Client</SectionLabel>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-off md:text-4xl">Where they were.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">{project.clientContext}</p>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="bg-navy-deep px-4 py-section-sm">
        <div className="container-content">
          <SectionLabel>The Challenge</SectionLabel>
          <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl font-semibold tracking-tight text-off md:text-5xl">
            The real problems behind the redesign.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {project.challenge.map((c, i) => (
              <div key={c.title} className="rounded-2xl border border-hairline p-7">
                <span className="font-display text-sm font-bold text-yellow-electric">0{i + 1}</span>
                <p className="mt-4 font-display text-lg font-semibold text-off">{c.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="px-4 py-section-sm">
        <div className="container-content">
          <SectionLabel>Before / After</SectionLabel>
          <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl font-semibold tracking-tight text-off md:text-5xl">
            Drag to see the transformation.
          </h2>
          <div className="mt-10">
            <BeforeAfterSlider
              beforeContent={<MockBrowser variant="before" title={`${project.client} — Before`} seed={project.slug} />}
              afterContent={<MockBrowser variant="after" title={`${project.client} — After`} seed={project.slug} />}
            />
          </div>
        </div>
      </section>

      {/* STRATEGY */}
      <section className="bg-navy-deep px-4 py-section-sm">
        <div className="container-content grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <SectionLabel>Strategy</SectionLabel>
            <h2 className="mt-6 max-w-md text-balance font-display text-4xl font-semibold tracking-tight text-off md:text-5xl">
              We didn&apos;t start with pixels. We started with the problem.
            </h2>
          </div>
          <ol className="space-y-5">
            {project.strategy.map((s, i) => (
              <li key={s} className="flex items-start gap-4 border-b border-hairline pb-5 text-base text-off/85">
                <span className="font-display text-sm font-bold text-yellow-electric">0{i + 1}</span>
                {s}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="px-4 py-section-sm">
        <div className="container-content">
          <SectionLabel>The Experience</SectionLabel>
          <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl font-semibold tracking-tight text-off md:text-5xl">
            Built with {project.platform}, designed for {project.industry.toLowerCase()}.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="md:col-span-2 aspect-[16/9] overflow-hidden rounded-2xl border border-hairline">
              <MockBrowser variant="after" title="Desktop" seed={`${project.slug}-desktop`} />
            </div>
            <div className="aspect-[9/16] overflow-hidden rounded-2xl border border-hairline">
              <MockBrowser variant="after" title="Mobile" seed={`${project.slug}-mobile`} />
            </div>
          </div>
        </div>
      </section>

      {/* RESULT */}
      <section className="bg-navy-deep px-4 py-section-sm">
        <div className="container-content">
          <SectionLabel>Result</SectionLabel>
          <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl font-semibold tracking-tight text-off md:text-5xl">
            What changed.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {project.qualitativeOutcomes.map((o) => (
              <div key={o} className="rounded-2xl border border-hairline p-7">
                <p className="text-base leading-relaxed text-off/90">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="px-4 py-section-sm">
        <div className="container-content">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-balance text-3xl font-medium leading-snug text-off md:text-4xl">
              &ldquo;{project.quote.text}&rdquo;
            </p>
            <p className="mt-6 text-sm font-semibold text-off">{project.quote.name}</p>
            <p className="text-sm text-muted">{project.quote.role}</p>
          </div>
        </div>
      </section>

      {/* NEXT PROJECT */}
      <section className="px-4 py-section-sm">
        <div className="container-content">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Next Case Study</p>
          <div className="mt-6">
            <ProjectCard project={next} size="large" />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
