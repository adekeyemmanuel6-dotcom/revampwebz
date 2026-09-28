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
    <footer className="relative overflow-hidden border-t border-hairline bg-navy-deep pt-24">
      <div className="container-content">
        <div className="grid grid-cols-1 gap-16 pb-20 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl font-semibold leading-tight tracking-tight text-off">
              WE REVAMP
              <br />
              THE WEB.
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              A boutique Webflow &amp; Framer studio for ambitious brands that have outgrown ordinary websites.
            </p>
            <div className="mt-8">
              <Button href="/start-project">Start a Project ↗</Button>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">{col.title}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} data-cursor="GO" className="text-sm text-off/80 transition-colors hover:text-yellow-electric">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Connect</p>
            <ul className="mt-5 space-y-3 text-sm text-off/80">
              <li>
                <a href="mailto:hello@revampwebz.com" className="transition-colors hover:text-yellow-electric">
                  hello@revampwebz.com
                </a>
              </li>
              <li className="text-muted">Available Worldwide</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-hairline py-6 text-xs text-muted md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Revamp Webz. All rights reserved.</span>
          <span>Webflow &amp; Framer Digital Studio</span>
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none select-none pb-4">
        <p className="translate-y-[0.14em] text-center font-display text-[19vw] font-bold leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.08)] md:text-[16vw]">
          REVAMP WEBZ
        </p>
      </div>
    </footer>
  );
}
