import { clientLogos } from "@/lib/data";

export default function LogoMarquee() {
  const logos = [...clientLogos, ...clientLogos];
  return (
    <div className="relative overflow-hidden border-y border-hairline py-10">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy to-transparent" />
      <div className="flex w-max animate-marquee gap-16">
        {logos.map((logo, i) => (
          <span
            key={i}
            className="font-display text-2xl font-semibold tracking-tight text-muted/50 transition-colors duration-300 hover:text-yellow-electric"
          >
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
}
