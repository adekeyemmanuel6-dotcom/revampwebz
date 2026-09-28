"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export default function BeforeAfterSlider({
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
  beforeContent,
  afterContent,
}: {
  beforeLabel?: string;
  afterLabel?: string;
  beforeContent: React.ReactNode;
  afterContent: React.ReactNode;
}) {
  const [pos, setPos] = useState(50);
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <div
      ref={containerRef}
      data-cursor="DRAG"
      className="group relative aspect-[16/10] w-full select-none overflow-hidden rounded-2xl border border-hairline bg-navy-surface"
      onMouseDown={(e) => {
        dragging.current = true;
        updateFromClientX(e.clientX);
      }}
      onMouseMove={(e) => dragging.current && updateFromClientX(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => updateFromClientX(e.touches[0].clientX)}
      onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
    >
      <div className="absolute inset-0">{afterContent}</div>
      <div className="absolute right-4 top-4 rounded-full bg-rust px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-off">
        {afterLabel}
      </div>

      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <div className="absolute inset-y-0 left-0" style={{ width: width || "100%" }}>
          {beforeContent}
        </div>
        <div className="absolute left-4 top-4 rounded-full bg-navy-deep/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-off">
          {beforeLabel}
        </div>
      </div>

      <div
        className="absolute inset-y-0 z-10 flex w-0.5 -translate-x-1/2 items-center justify-center bg-rust"
        style={{ left: `${pos}%` }}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rust text-off shadow-lg">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4L2 8L6 12M10 4L14 8L10 12" stroke="#F6F7F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
