"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

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
                ? "border-yellow-electric bg-yellow-electric text-dark"
                : "border-hairline text-off/70 hover:border-off/40 hover:text-off"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {filtered.map((p, i) => (
          <div key={p.slug} className={i % 3 === 0 ? "md:col-span-2" : ""}>
            <ProjectCard project={p} size={i % 3 === 0 ? "large" : "default"} />
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full py-20 text-center text-muted">No projects match this filter yet.</p>
        )}
      </div>
    </div>
  );
}
