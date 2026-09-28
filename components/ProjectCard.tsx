import Link from "next/link";
import type { Project } from "@/lib/data";
import MockBrowser from "@/components/MockBrowser";

export default function ProjectCard({ project, size = "default" }: { project: Project; size?: "default" | "large" }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      data-cursor="VIEW"
      className="group relative block overflow-hidden rounded-2xl border border-hairline bg-navy-surface transition-all duration-500 hover:border-yellow-electric/50"
    >
      <div className={`relative overflow-hidden ${size === "large" ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
        <div className="h-full w-full scale-100 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
          <MockBrowser variant="after" title={project.name} />
        </div>
        <div className="pointer-events-none absolute inset-0 opacity-0 ring-1 ring-inset ring-yellow-electric/60 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="flex flex-wrap items-start justify-between gap-4 p-6">
        <div>
          <p className="font-display text-xl font-semibold tracking-tight text-off">{project.name}</p>
          <p className="mt-1 text-sm text-muted">{project.industry}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {project.services.slice(0, 2).map((s) => (
            <span key={s} className="rounded-full border border-hairline px-2.5 py-1 text-[10px] uppercase tracking-widest text-muted">
              {s}
            </span>
          ))}
          <span className="rounded-full border border-hairline px-2.5 py-1 text-[10px] uppercase tracking-widest text-muted">
            {project.year}
          </span>
        </div>
      </div>
      <p className="px-6 pb-6 text-sm leading-relaxed text-muted">{project.summary}</p>
    </Link>
  );
}
