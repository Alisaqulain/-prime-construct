import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://primeconstruct.example.com";
  const routes = [
    "",
    "/about",
    "/products",
    "/calculator",
    "/case-studies",
    "/gallery",
    "/sustainability",
    "/careers",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
