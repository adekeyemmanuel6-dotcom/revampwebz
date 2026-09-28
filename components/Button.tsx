"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  cursor?: string;
};

export default function Button({ href, children, variant = "primary", className, cursor = "VIEW" }: ButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
    setPos({ x, y });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const base =
    "btn-magnetic group relative inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300 whitespace-nowrap";

  const styles = {
    primary: "bg-rust text-off hover:bg-rust-light",
    secondary: "border border-hairline text-off hover:border-rust hover:text-rust-light",
    ghost: "text-off hover:text-rust-light",
  };

  return (
    <Link
      href={href}
      ref={ref}
      data-cursor={cursor}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)`, transition: "transform 0.2s ease-out" }}
      className={cn(base, styles[variant], className)}
    >
      <span>{children}</span>
    </Link>
  );
}
