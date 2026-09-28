"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(canHover);
    if (!canHover) return;

    let x = 0;
    let y = 0;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }
      if (labelRef.current) {
        labelRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }
    };

    const setState = (target: EventTarget | null) => {
      if (!(target instanceof Element)) return;
      const el = target.closest("[data-cursor]");
      const dot = dotRef.current;
      const label = labelRef.current;
      if (!dot || !label) return;
      if (el) {
        const type = el.getAttribute("data-cursor");
        dot.style.width = "64px";
        dot.style.height = "64px";
        dot.style.backgroundColor = "#C1502E";
        label.textContent = type || "";
        label.style.opacity = "1";
      } else {
        dot.style.width = "16px";
        dot.style.height = "16px";
        label.style.opacity = "0";
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", (e) => setState(e.target));

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="rw-cursor" aria-hidden="true" />
      <div ref={labelRef} className="rw-cursor-label" aria-hidden="true" />
    </>
  );
}
