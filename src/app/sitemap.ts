import { MetadataRoute } from "next";
import { servicesData } from "@/data/services";
import { blogPosts } from "@/data/posts";
import { SITE_CONFIG } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const staticRoutes = [
    "",
    "/sobre",
    "/servicos",
    "/cases",
    "/blog",
    "/diagnostico",
    "/contato",
    "/politica-de-privacidade",
    "/termos-de-uso",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/servicos/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const postRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...postRoutes];
}

