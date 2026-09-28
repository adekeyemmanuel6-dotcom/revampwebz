import Link from "next/link";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import RevealText from "@/components/RevealText";
import HeroSculpture from "@/components/HeroSculpture";
import LogoMarquee from "@/components/LogoMarquee";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import MethodTimeline from "@/components/MethodTimeline";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import MockBrowser from "@/components/MockBrowser";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CTASection from "@/components/CTASection";
import { capabilities, projects } from "@/lib/data";

const featured = projects.filter((p) => p.featured);

const values = [
  { title: "Faster", body: "Optimized development and performance from the first commit." },
  { title: "Clearer", body: "Sharper messaging and user journeys built around real decisions." },
  { title: "Easier", body: "CMS systems your team can actually manage without a developer." },
  { title: "Stronger", body: "A digital presence aligned with the quality of your business." },
  { title: "Better", body: "Conversion paths intentionally designed around action." },
];

const whyUs = [
  "Senior-level involvement on every project, start to finish",
  "Strategy, design and development under one roof",
  "Webflow & Framer specialization, not a generalist stack",
  "Conversion-focused thinking baked into every decision",
  "Responsive communication with no account-manager layer",
  "Scalable systems your team can extend after launch",
];

export default function Home() {
  return (
    <>
      {/* 01 HERO */}
      <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28">
        <div className="noise-overlay" />
        <div className="container-content grid items-center gap-10 md:grid-cols-2 md:gap-6">
          <div>
            <SectionLabel>Webflow + Framer Digital Studio</SectionLabel>
            <h1 className="mt-6 text-balance font-display text-hero-sm font-bold tracking-tight text-off md:text-hero">
              We build websites <span className="text-yellow-electric">impossible</span> to ignore.
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
              Strategy, design and Webflow/Framer development for ambitious brands ready to turn their website into their strongest digital asset.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/start-project">Start a Project →</Button>
              <Button href="/work" variant="secondary" cursor="WORK">
                Explore Our Work
              </Button>
            </div>
            <p className="mt-12 text-xs uppercase tracking-[0.2em] text-muted">
              Webflow • Framer • UX/UI • Development • Motion
            </p>
          </div>
          <HeroSculpture />
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted">Scroll</span>
          <span className="h-10 w-px animate-pulse bg-gradient-to-b from-yellow-electric to-transparent" />
        </div>
      </section>

      {/* 02 TRUST */}
      <section className="py-section-sm md:py-24">
        <div className="container-content mb-10 text-center">
          <p className="mx-auto max-w-xl text-balance font-display text-xl text-off/80 md:text-2xl">
            Trusted by ambitious teams that care about how they show up online.
          </p>
        </div>
        <LogoMarquee />
      </section>

      {/* 03 POSITIONING */}
      <section className="px-4 py-section-sm md:py-section">
        <div className="container-content">
          <SectionLabel className="justify-center">The internet doesn&apos;t need another ordinary website.</SectionLabel>
          <RevealText as="h2" className="mx-auto mt-8 max-w-4xl text-balance text-center font-display text-4xl font-semibold leading-[1.05] tracking-tight text-off md:text-display-lg">
            Your website shouldn&apos;t just exist. It should perform.
          </RevealText>
          <RevealText delay={0.15} className="mx-auto mt-8 max-w-2xl text-balance text-center text-lg leading-relaxed text-muted">
            We combine conversion strategy, sharp visual design and no-code development to build websites that attract attention, communicate value and turn visitors into opportunities.
          </RevealText>
        </div>
      </section>

      {/* 04 FEATURED WORK */}
      <section className="px-4 py-section-sm md:py-section">
        <div className="container-content">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel>Selected Work</SectionLabel>
              <h2 className="mt-6 max-w-xl text-balance font-display text-4xl font-semibold tracking-tight text-off md:text-6xl">
                Work designed to move businesses forward.
              </h2>
            </div>
            <Button href="/work" variant="secondary" cursor="WORK" className="shrink-0">
              View All Work ↗
            </Button>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {featured.map((p, i) => (
              <div key={p.slug} className={i === 0 ? "md:col-span-2" : ""}>
                <ProjectCard project={p} size={i === 0 ? "large" : "default"} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 CAPABILITIES */}
      <section className="bg-navy-deep px-4 py-section-sm md:py-section">
        <div className="container-content">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="mt-6 max-w-xl text-balance font-display text-4xl font-semibold tracking-tight text-off md:text-6xl">
            Strategy to launch. Everything connected.
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c) => (
              <ServiceCard key={c.number} number={c.number} title={c.title} items={c.items} />
            ))}
          </div>
        </div>
      </section>

      {/* 06 WEBFLOW VS FRAMER */}
      <section className="px-4 py-section-sm md:py-section">
        <div className="container-content">
          <SectionLabel className="justify-center">Platform Expertise</SectionLabel>
          <h2 className="mx-auto mt-6 max-w-2xl text-balance text-center font-display text-4xl font-semibold tracking-tight text-off md:text-6xl">
            Two powerful platforms. One obsession with craft.
          </h2>

          <div className="mt-14 grid grid-cols-1 divide-y divide-hairline overflow-hidden rounded-2xl border border-hairline md:grid-cols-2 md:divide-x md:divide-y-0">
            <div className="group relative p-10 transition-colors hover:bg-navy-surface md:p-14">
              <p className="font-display text-3xl font-bold tracking-tight text-off">Webflow</p>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Ideal for scalable marketing sites, CMS-heavy websites, sophisticated business websites and larger content systems.
              </p>
              <Link href="/services/webflow-development" data-cursor="GO" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-yellow-electric">
                Webflow Development ↗
              </Link>
            </div>
            <div className="group relative p-10 transition-colors hover:bg-navy-surface md:p-14">
              <p className="font-display text-3xl font-bold tracking-tight text-off">Framer</p>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
                Ideal for visually ambitious startups, launch sites, portfolios, landing pages and motion-led digital experiences.
              </p>
              <Link href="/services/framer-development" data-cursor="GO" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-yellow-electric">
                Framer Development ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 07 REVAMP METHOD */}
      <section className="bg-navy-deep px-4 py-section-sm md:py-section">
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

      {/* 08 BEFORE / AFTER */}
      <section className="px-4 py-section-sm md:py-section">
        <div className="container-content">
          <SectionLabel className="justify-center">Transformation</SectionLabel>
          <h2 className="mx-auto mt-6 max-w-2xl text-balance text-center font-display text-4xl font-semibold tracking-tight text-off md:text-6xl">
            See what happens when &ldquo;good enough&rdquo; gets revamped.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-balance text-center text-base text-muted">
            Drag the divider. Every project starts as a &ldquo;before.&rdquo; Our job is to build the &ldquo;after.&rdquo;
          </p>
          <div className="mx-auto mt-12 max-w-4xl">
            <BeforeAfterSlider
              beforeContent={<MockBrowser variant="before" title="Before" seed="homepage-transform" />}
              afterContent={<MockBrowser variant="after" title="After" seed="homepage-transform" />}
            />
          </div>
        </div>
      </section>

      {/* 13 RESULTS / VALUE */}
      <section className="bg-navy-deep px-4 py-section-sm md:py-section">
        <div className="container-content">
          <SectionLabel>Where Your Brand Becomes</SectionLabel>
          <h2 className="mt-6 max-w-xl text-balance font-display text-4xl font-semibold tracking-tight text-off md:text-6xl">
            Built for more than compliments.
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v) => (
              <div key={v.title} className="bg-navy p-8">
                <p className="font-display text-xl font-semibold text-yellow-electric">{v.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14 TESTIMONIALS */}
      <section className="px-4 py-section-sm md:py-section">
        <div className="container-content">
          <SectionLabel>Client Voices</SectionLabel>
          <h2 className="mt-6 max-w-xl text-balance font-display text-4xl font-semibold tracking-tight text-off md:text-6xl">
            Don&apos;t take our word for it.
          </h2>
          <div className="mt-14">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* 15 WHY REVAMP WEBZ */}
      <section className="bg-navy-deep px-4 py-section-sm md:py-section">
        <div className="container-content grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <SectionLabel>Why Revamp Webz</SectionLabel>
            <h2 className="mt-6 text-balance font-display text-4xl font-semibold tracking-tight text-off md:text-5xl">
              Small team. Serious execution.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              Less agency overhead. More senior attention. Every project is led by the people who actually design and build it.
            </p>
          </div>
          <ul className="space-y-5">
            {whyUs.map((item) => (
              <li key={item} className="flex items-start gap-4 border-b border-hairline pb-5 text-base text-off/85">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-electric" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 16 FINAL CTA */}
      <CTASection />
    </>
  );
}
