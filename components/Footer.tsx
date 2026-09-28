import Link from "next/link";
import Button from "@/components/Button";

const columns = [
  {
    title: "Site",
    links: [
      { href: "/work", label: "Work" },
      { href: "/services", label: "Services" },
      { href: "/about", label: "About" },
      { href: "/insights", label: "Insights" },
      { href: "/start-project", label: "Start Project" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/services/webflow-development", label: "Webflow" },
      { href: "/services/framer-development", label: "Framer" },
      { href: "/services/web-design", label: "Web Design" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-hairline-dark bg-cream pt-24 text-dark">
      <div className="container-content">
        <div className="grid grid-cols-1 gap-16 pb-20 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl font-semibold leading-tight tracking-tight text-dark">
              WE REVAMP
              <br />
              <span className="font-accent text-rust">the web.</span>
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-dark">
              A boutique Webflow &amp; Framer studio for ambitious brands that have outgrown ordinary websites.
            </p>
            <div className="mt-8">
              <Button href="/start-project" variant="primary">Start a Project ↗</Button>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-dark">{col.title}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} data-cursor="GO" className="text-sm text-dark/80 transition-colors hover:text-rust">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-dark">Connect</p>
            <ul className="mt-5 space-y-3 text-sm text-dark/80">
              <li>
                <a href="mailto:hello@revampwebz.com" className="transition-colors hover:text-rust">
                  hello@revampwebz.com
                </a>
              </li>
              <li className="text-muted-dark">Available Worldwide</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-hairline-dark py-6 text-xs text-muted-dark md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Revamp Webz. All rights reserved.</span>
          <span>Webflow &amp; Framer Digital Studio</span>
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none select-none pb-4">
        <p className="translate-y-[0.14em] text-center font-display text-[19vw] font-bold leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(7,17,31,0.08)] md:text-[16vw]">
          REVAMP WEBZ
        </p>
      </div>
    </footer>
  );
}
