import Link from "next/link";
import type { Project } from "@/lib/data";

export default function ProjectTextCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      data-cursor="VIEW"
      className="group flex aspect-[4/5] flex-col justify-between rounded-2xl border border-hairline-dark bg-cream p-7 transition-colors duration-300 hover:border-rust/50"
    >
      <div>
        <p className="text-[10px] uppercase tracking-widest text-rust">{project.platform} · {project.year}</p>
        <p className="mt-4 font-accent text-3xl italic text-dark">{project.name}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted-dark">{project.summary}</p>
      </div>
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-dark transition-colors group-hover:text-rust">
        View Case Study →
      </span>
    </Link>
  );
}
