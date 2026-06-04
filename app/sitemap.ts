import type { MetadataRoute } from "next";
import { site, articleList } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;

  const staticPages = [
    { url: base, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${base}/glossary`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/contact`, priority: 0.5, changeFrequency: "monthly" as const },
    { url: `${base}/affiliate-disclosure`, priority: 0.4, changeFrequency: "yearly" as const },
    { url: `${base}/privacy-policy`, priority: 0.4, changeFrequency: "yearly" as const },
    { url: `${base}/terms`, priority: 0.4, changeFrequency: "yearly" as const },
  ];

  const articlePages = articleList.map((a) => ({
    url: `${base}/best/${a.slug}`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...articlePages];
}
