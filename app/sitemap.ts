import type { MetadataRoute } from "next";

// Required for `output: export` — emit a static sitemap.xml at build time.
export const dynamic = "force-static";

// URLs use trailing slashes to match `trailingSlash: true` in next.config.ts.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://koding.cz";
  return [
    {
      url: `${base}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/standardy/`,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${base}/gdpr/`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
