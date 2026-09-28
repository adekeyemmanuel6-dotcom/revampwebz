"use client";

import { motion } from "framer-motion";

export default function RevealText({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "h1" | "h2" | "h3" | "p";
}) {
  const shared = {
    initial: { y: "110%", opacity: 0 },
    whileInView: { y: "0%", opacity: 1 },
    viewport: { once: true, margin: "-10% 0px" },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
    className,
  };

  return (
    <div className="overflow-hidden">
      {as === "h1" && <motion.h1 {...shared}>{children}</motion.h1>}
      {as === "h2" && <motion.h2 {...shared}>{children}</motion.h2>}
      {as === "h3" && <motion.h3 {...shared}>{children}</motion.h3>}
      {as === "p" && <motion.p {...shared}>{children}</motion.p>}
      {as === "div" && <motion.div {...shared}>{children}</motion.div>}
    </div>
  );
}
