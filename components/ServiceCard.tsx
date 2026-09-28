"use client";

import { useRef, useState } from "react";

export default function ServiceCard({
  number,
  title,
  items,
}: {
  number: string;
  title: string;
  items: string[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({});

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setStyle({
      background: `radial-gradient(320px circle at ${px * 100}% ${py * 100}%, rgba(255,214,0,0.12), transparent 70%)`,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setStyle({})}
      className="group relative overflow-hidden rounded-2xl border border-hairline p-8 transition-colors duration-300 hover:border-yellow-electric/40"
    >
      <div className="pointer-events-none absolute inset-0 transition-opacity duration-300" style={style} />
      <div className="relative">
        <span className="font-display text-sm font-semibold text-yellow-electric">{number}</span>
        <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-off">{title}</h3>
        <ul className="mt-6 space-y-2.5">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-muted">
              <span className="h-1 w-1 rounded-full bg-muted" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
