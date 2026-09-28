"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { methodSteps } from "@/lib/data";

export default function MethodTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.4"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative">
      <div className="absolute left-[15px] top-0 hidden h-full w-px bg-white/10 md:block">
        <motion.div style={{ height }} className="w-full bg-yellow-electric" />
      </div>

      <div className="space-y-12 md:space-y-16">
        {methodSteps.map((step) => (
          <div key={step.number} className="relative grid gap-4 md:grid-cols-[32px_1fr] md:gap-10">
            <div className="hidden h-8 w-8 items-center justify-center rounded-full border border-hairline bg-navy-deep font-display text-xs font-bold text-yellow-electric md:flex">
              {step.number}
            </div>
            <div className="grid gap-3 border-b border-hairline pb-10 md:grid-cols-[1fr_2fr] md:gap-10 md:border-none md:pb-0">
              <div className="flex items-center gap-3 md:block">
                <span className="font-display text-sm font-bold text-yellow-electric md:hidden">{step.number}</span>
                <h3 className="font-display text-3xl font-semibold tracking-tight text-off md:text-4xl">{step.title}</h3>
              </div>
              <p className="max-w-md text-base leading-relaxed text-muted">{step.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
