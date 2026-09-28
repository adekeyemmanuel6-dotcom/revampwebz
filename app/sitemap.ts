import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";
import { articles } from "@/lib/articles";

const base = "https://revampwebz.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/work",
    "/services",
    "/services/webflow-development",
    "/services/framer-development",
    "/services/web-design",
    "/about",
    "/start-project",
    "/insights",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${base}/work/${p.slug}`,
    lastModified: new Date(),
  }));

  const articleRoutes = articles.map((a) => ({
    url: `${base}/insights/${a.slug}`,
    lastModified: new Date(a.date),
  }));

  return [...staticRoutes, ...projectRoutes, ...articleRoutes];
}
