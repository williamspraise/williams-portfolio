import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://williamspraise.com/sitemap.xml",
    host: "https://williamspraise.com",
  };
}
