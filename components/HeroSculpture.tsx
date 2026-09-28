"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";

export default function HeroSculpture() {
  const ref = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 60, damping: 20 });
  const springY = useSpring(my, { stiffness: 60, damping: 20 });

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const spread = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0.15]);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <div ref={ref} className="relative mx-auto flex h-[420px] w-full max-w-[560px] items-center justify-center md:h-[560px]">
      <div className="absolute h-[420px] w-[420px] rounded-full bg-radial-glow blur-2xl md:h-[560px] md:w-[560px]" />

      <motion.div
        style={{ x: reduced ? 0 : springX, y: reduced ? 0 : springY, opacity: fade }}
        className={reduced ? "" : "animate-float"}
      >
        <motion.svg
          style={{ rotate: reduced ? 0 : rotate }}
          width="380"
          height="380"
          viewBox="0 0 380 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_40px_80px_rgba(0,0,0,0.55)]"
        >
          <defs>
            <linearGradient id="chrome" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0B1D3A" />
              <stop offset="45%" stopColor="#F6F7F2" stopOpacity="0.5" />
              <stop offset="60%" stopColor="#06142E" />
              <stop offset="100%" stopColor="#0B1D3A" />
            </linearGradient>
            <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFD600" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FFD600" stopOpacity="0" />
            </linearGradient>
          </defs>

          <motion.g style={{ x: useTransform(spread, (v) => -v * 0.4) }}>
            <path
              d="M120 40 L120 340 L165 340 L165 210 L215 210 C270 210 300 180 300 130 C300 78 268 40 210 40 Z M165 82 L205 82 C230 82 250 98 250 128 C250 156 232 170 205 170 L165 170 Z"
              fill="url(#chrome)"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="1.5"
            />
          </motion.g>
          <motion.g style={{ x: useTransform(spread, (v) => v * 0.5), y: useTransform(spread, (v) => v * 0.2) }}>
            <path
              d="M205 210 L262 340 L312 340 L248 200 Z"
              fill="url(#chrome)"
              stroke="rgba(255,214,0,0.5)"
              strokeWidth="1.5"
            />
          </motion.g>
          <motion.circle
            style={{ opacity: useTransform(fade, (v) => v) }}
            cx="230"
            cy="130"
            r="26"
            fill="url(#glow)"
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
