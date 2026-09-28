"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import ProjectTextCard from "@/components/ProjectTextCard";

const FILTERS = ["All", "Webflow", "Framer", "SaaS", "Healthcare", "Hospitality"];

export default function WorkFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter(
      (p) => p.platform === active || p.industry === active || p.tags.includes(active)
    );
  }, [active, projects]);

  return (
    <div>
      <div className="scrollbar-none flex gap-2 overflow-x-auto pb-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`shrink-0 rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
              active === f
                ? "border-rust bg-rust text-off"
                : "border-hairline-dark text-dark/70 hover:border-dark/40 hover:text-dark"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) =>
          i === 2 ? <ProjectTextCard key={p.slug} project={p} /> : <ProjectCard key={p.slug} project={p} />
        )}
        {filtered.length === 0 && (
          <p className="col-span-full py-20 text-center text-muted-dark">No projects match this filter yet.</p>
        )}
      </div>
    </div>
  );
}
