"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  title: string;
  body: string;
};

export default function Accordion({
  items,
  theme = "light",
  defaultOpen = 0,
}: {
  items: AccordionItem[];
  theme?: "light" | "dark";
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const isDark = theme === "dark";

  return (
    <div className={cn("divide-y border-y", isDark ? "divide-white/10 border-white/10" : "divide-hairline-dark border-hairline-dark")}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className={cn(
                "flex w-full items-center justify-between gap-4 py-5 text-left font-display text-lg font-medium",
                isDark ? "text-off" : "text-dark"
              )}
            >
              {item.title}
              <span className={cn("shrink-0 text-2xl font-light transition-transform duration-300", isOpen && "rotate-45", "text-rust")}>
                +
              </span>
            </button>
            <div
              className="grid overflow-hidden transition-all duration-300"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className={cn("max-w-xl pb-5 text-sm leading-relaxed", isDark ? "text-muted" : "text-muted-dark")}>
                  {item.body}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
