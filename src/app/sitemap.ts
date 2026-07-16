import type { MetadataRoute } from "next";
import { dishes } from "@/data/dishes";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/specials", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/order", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/menu", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/gallery", priority: 0.5, changeFrequency: "weekly" as const },
    { path: "/reviews", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.5, changeFrequency: "monthly" as const },
  ].map(({ path, priority, changeFrequency }) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  const dishRoutes: MetadataRoute.Sitemap = dishes.map((dish) => ({
    url: `${site.url}/menu/${dish.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...dishRoutes];
}
