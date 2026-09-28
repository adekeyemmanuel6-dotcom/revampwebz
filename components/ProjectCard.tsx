import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/data";
import { photoUrl } from "@/lib/images";
import { cn } from "@/lib/utils";

export default function ProjectCard({ project, size = "default" }: { project: Project; size?: "default" | "large" }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      data-cursor="VIEW"
      className={cn(
        "group relative block overflow-hidden rounded-2xl border border-hairline-dark bg-white transition-all duration-500 hover:border-rust/50 hover:shadow-xl",
        size === "large" ? "aspect-[16/10]" : "aspect-[4/5]"
      )}
    >
      <div className="absolute inset-0 scale-100 transition-transform duration-700 ease-out group-hover:scale-[1.05]">
        <Image
          src={photoUrl(`${project.slug}-work`, 900, 1100)}
          alt={project.name}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="pointer-events-none absolute inset-0 opacity-0 ring-1 ring-inset ring-rust transition-opacity duration-500 group-hover:opacity-100" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight text-white">{project.name}</p>
          <p className="mt-1 text-xs uppercase tracking-widest text-white/70">{project.industry}</p>
        </div>
        <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-white backdrop-blur">
          {project.platform}
        </span>
      </div>
    </Link>
  );
}
