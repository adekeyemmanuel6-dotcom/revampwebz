"use client";

import Image from "next/image";
import { useRef } from "react";
import { testimonials } from "@/lib/data";
import { avatarUrl } from "@/lib/images";

export default function TestimonialCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 420, behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={trackRef}
        data-cursor="DRAG"
        className="scrollbar-none flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
      >
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="relative flex w-[85%] shrink-0 snap-start flex-col justify-between rounded-2xl border border-hairline bg-navy-surface p-8 sm:w-[420px]"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-radial-glow blur-xl" />
            <p className="relative font-display text-xl leading-snug text-off">“{t.quote}”</p>
            <div className="relative mt-8 flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full border border-hairline">
                <Image src={avatarUrl(t.name)} alt={t.name} fill sizes="44px" className="object-cover" />
              </div>
              <div>
                <p className="text-sm font-semibold text-off">{t.name}</p>
                <p className="text-xs text-muted">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex gap-3">
        <button
          aria-label="Previous testimonial"
          onClick={() => scrollBy(-1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline-dark text-dark transition-colors hover:border-rust hover:text-rust"
        >
          ←
        </button>
        <button
          aria-label="Next testimonial"
          onClick={() => scrollBy(1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline-dark text-dark transition-colors hover:border-rust hover:text-rust"
        >
          →
        </button>
      </div>
    </div>
  );
}
