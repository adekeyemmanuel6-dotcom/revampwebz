import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SectionLabel from "@/components/SectionLabel";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/data";

const reserved = ["webflow-development", "framer-development", "web-design"];

export function generateStaticParams() {
  return services.filter((s) => !reserved.includes(s.slug)).map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return { title: service.title, description: service.description };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  if (reserved.includes(params.slug)) notFound();
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <>
      <section className="bg-off px-4 pb-section-sm pt-40 md:pt-48">
        <div className="container-content">
          <SectionLabel light>{service.number} / Services</SectionLabel>
          <h1 className="mt-6 max-w-3xl text-balance font-display text-5xl font-semibold tracking-tight text-dark md:text-7xl">
            {service.title}
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-dark">{service.description}</p>
        </div>
      </section>

      <section className="bg-off px-4 py-section-sm">
        <div className="container-content grid gap-10 md:grid-cols-[1fr_2fr] md:gap-20">
          <div>
            <SectionLabel light>How We Approach It</SectionLabel>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-dark md:text-4xl">
              Part of one connected system.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-dark">
            {service.title} is never delivered in isolation. It runs through The Revamp Method™ — from Reveal through Release — so
            the work connects to your broader strategy, design system and Webflow or Framer build rather than existing as a
            disconnected deliverable.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
