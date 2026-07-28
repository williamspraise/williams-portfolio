import type { MetadataRoute } from "next";

const baseUrl = "https://williamspraise.com";
const lastModified = new Date("2026-07-28");

const routes = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  { path: "/essays", priority: 0.8, changeFrequency: "weekly" },
  {
    path: "/essays/why-america-became-rich",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  { path: "/frameworks", priority: 0.8, changeFrequency: "monthly" },
  { path: "/frameworks/iree", priority: 0.7, changeFrequency: "monthly" },
  {
    path: "/frameworks/systems-of-love",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/frameworks/systems-of-resolve",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/investment-philosophy",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  { path: "/portfolio", priority: 0.8, changeFrequency: "monthly" },
  { path: "/ventures", priority: 0.8, changeFrequency: "monthly" },
  { path: "/why-williams", priority: 0.7, changeFrequency: "monthly" },
  { path: "/work/shoppergetit", priority: 0.8, changeFrequency: "monthly" },
  { path: "/work/pam-ai", priority: 0.7, changeFrequency: "monthly" },
  { path: "/work/pendulum-school", priority: 0.7, changeFrequency: "monthly" },
  {
    path: "/work/springboard-mentorship",
    priority: 0.7,
    changeFrequency: "monthly",
  },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
