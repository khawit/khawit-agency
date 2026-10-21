import type { MetadataRoute } from "next";
import { servicesData } from "@/data/servicesData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.khawitsolutions.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: new URL("/", siteUrl).toString(),
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: new URL("/about", siteUrl).toString(),
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: new URL("/services", siteUrl).toString(),
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: new URL("/start-project", siteUrl).toString(),
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map((service) => ({
    url: new URL(`/services/${service.id}`, siteUrl).toString(),
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...serviceRoutes];
}