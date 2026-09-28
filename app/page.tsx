import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import LogoMarquee from "@/components/LogoMarquee";
import ProjectCard from "@/components/ProjectCard";
import ProjectTextCard from "@/components/ProjectTextCard";
import Accordion from "@/components/Accordion";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CTASection from "@/components/CTASection";
import { photoUrl, avatarUrl } from "@/lib/images";
import { projects, industries, faqs, testimonials, services } from "@/lib/data";

const featured = projects.filter((p) => p.featured).slice(0, 3);

const servicePills = [
  "Website Strategy",
  "UX/UI Design",
  "Webflow Development",
  "Framer Development",
  "Motion & Interaction",
  "CRO & Optimization",
];

const stats = [
  { value: `${projects.length}+`, label: "Case Studies Delivered" },
  { value: "2", label: "Platforms Mastered" },
  { value: `${services.length}`, label: "Connected Services" },
];

export default function Home() {
  const whyChoosePair = testimonials.slice(0, 2);

  return (
    <>
      {/* 01 HERO — image collage + dark overlay */}
      <section className="relative overflow-hidden bg-navy-deep pt-24">
        <div className="relative grid h-[62vh] min-h-[420px] grid-cols-3 gap-1 md:h-[72vh]">
          {["hero-strategy", "hero-design", "hero-development"].map((seed, i) => (
            <div key={seed} className="relative overflow-hidden">
              <Image
                src={photoUrl(seed, 700, 1000)}
                alt=""
                fill
                priority={i === 0}
                sizes="34vw"
                className="object-cover"
              />
            </div>
          ))}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-deep/50 via-transparent to-transparent" />

          <div className="absolute left-0 right-0 top-6 flex justify-center gap-2 px-4 md:top-8">
            {["Webflow", "Framer", "UX/UI", "Development"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] uppercase tracking-widest text-white backdrop-blur md:px-4 md:text-xs"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="container-content relative -mt-24 pb-16 md:-mt-28 md:pb-20">
          <div className="max-w-3xl">
            <h1 className="text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">
              Award-winning <span className="font-accent italic text-rust-light">Webflow &amp; Framer</span> digital studio
            </h1>
          </div>
          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-base leading-relaxed text-white/70">
              Strategy, design and Webflow/Framer development for ambitious brands ready to turn their website into their strongest digital asset.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/start-project">Start a Project →</Button>
              <Button href="/work" variant="secondary" cursor="WORK">
                Explore Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 02 TRUST */}
      <section className="bg-navy-deep pb-section-sm md:pb-section">
        <div className="container-content mb-10 text-center">
          <p className="mx-auto max-w-xl text-balance font-display text-xl text-white/80 md:text-2xl">
            Trusted by ambitious teams that care about how they show up online.
          </p>
        </div>
        <LogoMarquee />
      </section>

      {/* 03 SERVICES INTRO */}
      <section className="bg-off px-4 py-section-sm md:py-section">
        <div className="container-content">
          <SectionLabel light>Our Services</SectionLabel>
          <h2 className="mt-6 max-w-2xl text-balance font-display text-4xl font-semibold tracking-tight text-dark md:text-6xl">
            Revamp Webz&apos;s <span className="font-accent italic text-rust">Webflow</span> &amp;{" "}
            <span className="font-accent italic text-rust">Framer</span> services
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-dark">
            One connected process — strategy, design and development — rather than a website built in disconnected pieces.
          </p>

          <div className="relative mt-14 aspect-[16/9] overflow-hidden rounded-3xl md:aspect-[21/9]">
            <Image src={photoUrl("services-feature", 1600, 900)} alt="" fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/40 to-transparent" />
            <div className="relative flex h-full max-w-md flex-col justify-center gap-4 p-8 md:p-14">
              <p className="font-accent text-3xl italic text-rust-light md:text-4xl">Strategy-led</p>
              <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">Websites built to perform, not just look good.</h3>
              <p className="text-sm leading-relaxed text-white/70">
                Every engagement runs through The Revamp Method™ — Reveal, Rethink, Reimagine, Rebuild, Refine, Release.
              </p>
              <Button href="/services" cursor="EXPLORE" className="mt-2 w-fit">
                Explore Services →
              </Button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {servicePills.map((s) => (
              <span key={s} className="rounded-full border border-hairline-dark px-4 py-2 text-sm text-dark/80">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 04 WORK GRID */}
      <section className="bg-off px-4 pb-section-sm md:pb-section">
        <div className="container-content">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel light>Selected Work</SectionLabel>
              <h2 className="mt-6 max-w-xl text-balance font-display text-4xl font-semibold tracking-tight text-dark md:text-6xl">
                Webflow &amp; <span className="font-accent italic text-rust">Framer</span> work
              </h2>
            </div>
            <Button href="/work" variant="secondary" cursor="WORK" className="!border-hairline-dark !text-dark hover:!border-rust hover:!text-rust shrink-0">
              View All Work ↗
            </Button>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (i === 1 ? <ProjectTextCard key={p.slug} project={p} /> : <ProjectCard key={p.slug} project={p} />))}
          </div>
        </div>
      </section>

      {/* 05 INDUSTRIES */}
      <section className="bg-navy-deep px-4 py-section-sm md:py-section">
        <div className="container-content grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <SectionLabel>Who We Work With</SectionLabel>
            <h2 className="mt-6 max-w-md text-balance font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
              <span className="font-accent italic text-rust-light">Industries</span> we collaborate with
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/60">
              We specialize in a small number of industries where conversion-focused UX and platform choice genuinely change outcomes.
            </p>
            <div className="mt-10">
              <Accordion items={industries} theme="dark" />
            </div>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-3xl md:min-h-full">
            <Image src={photoUrl("industries-device", 900, 1100)} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* 06 WHY CHOOSE */}
      <section className="bg-navy px-4 py-section-sm md:py-section">
        <div className="container-content">
          <SectionLabel>Why Revamp Webz</SectionLabel>
          <h2 className="mt-6 max-w-xl text-balance font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Why choose <span className="font-accent italic text-rust-light">Revamp Webz</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="bg-navy-deep p-8 text-center">
                <p className="font-accent text-5xl italic text-rust-light">{s.value}</p>
                <p className="mt-2 text-sm text-white/60">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {whyChoosePair.map((t) => (
              <div key={t.name} className="flex gap-5 rounded-2xl border border-white/10 bg-navy-deep p-7">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-white/20">
                  <Image src={avatarUrl(t.name)} alt={t.name} fill sizes="56px" className="object-cover" />
                </div>
                <div>
                  <p className="text-sm leading-relaxed text-white/80">&ldquo;{t.quote}&rdquo;</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-rust-light">
                    {t.name} · {t.company}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/10 pt-8 text-sm uppercase tracking-widest text-white/50">
            <span>Webflow</span>
            <span>Framer</span>
            <span>Figma</span>
            <span>GSAP</span>
            <span>Next.js</span>
          </div>
        </div>
      </section>

      {/* 07 TESTIMONIALS */}
      <section className="bg-off px-4 py-section-sm md:py-section">
        <div className="container-content">
          <SectionLabel light>Client Voices</SectionLabel>
          <h2 className="mt-6 max-w-xl text-balance font-display text-4xl font-semibold tracking-tight text-dark md:text-6xl">
            Don&apos;t take our word for it.
          </h2>
          <div className="mt-14">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* 08 FAQ */}
      <section className="bg-off px-4 pb-section-sm md:pb-section">
        <div className="container-content">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel light>FAQ</SectionLabel>
              <h2 className="mt-6 max-w-xl text-balance font-display text-4xl font-semibold tracking-tight text-dark md:text-6xl">
                Frequently asked <span className="font-accent italic text-rust">questions</span>
              </h2>
            </div>
            <div className="max-w-xs shrink-0 md:text-right">
              <p className="text-sm text-muted-dark">Still have unanswered questions? We&apos;re happy to talk it through.</p>
              <Link href="/start-project" data-cursor="GO" className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-rust">
                Contact Us →
              </Link>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-12 md:grid-cols-2">
            <Accordion items={faqs.slice(0, 4)} theme="light" defaultOpen={0} />
            <Accordion items={faqs.slice(4)} theme="light" defaultOpen={null} />
          </div>
        </div>
      </section>

      {/* 09 FINAL CTA */}
      <CTASection />
    </>
  );
}
