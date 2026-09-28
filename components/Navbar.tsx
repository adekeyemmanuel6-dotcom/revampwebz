"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/Button";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > lastY && y > 200);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 flex justify-center transition-transform duration-500 ${
          hidden ? "-translate-y-[120%]" : "translate-y-0"
        }`}
      >
        <nav
          className={`mt-4 flex w-[calc(100%-32px)] max-w-[1180px] items-center justify-between rounded-full border border-hairline bg-navy-deep/70 px-4 py-2.5 backdrop-blur-xl transition-all duration-300 md:px-5 ${
            scrolled ? "shadow-[0_8px_40px_rgba(0,0,0,0.4)]" : ""
          }`}
        >
          <Link href="/" data-cursor="HOME" className="font-display text-lg font-bold tracking-tight text-off">
            Revamp<span className="text-rust">.</span>Webz
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                data-cursor="GO"
                className="group relative px-4 py-2 text-sm font-medium text-off/80 transition-colors hover:text-off"
              >
                {l.label}
                <span className="absolute bottom-1 left-4 right-4 h-px scale-x-0 bg-rust transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button href="/start-project" variant="primary" className="!px-5 !py-2.5 !text-xs">
              Start a Project ↗
            </Button>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-hairline md:hidden"
          >
            <span className={`h-px w-4 bg-off transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`h-px w-4 bg-off transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-navy-deep px-8 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.08 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-display text-5xl font-semibold tracking-tight text-off"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="mt-10">
              <Button href="/start-project" variant="primary">
                Start a Project ↗
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
