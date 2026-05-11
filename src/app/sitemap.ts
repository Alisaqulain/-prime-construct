import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://primeconstruct.example.com";
  const routes = [
    "",
    "/about",
    "/solutions",
    "/services",
    "/services/material-supply",
    "/services/professional-application",
    "/calculator",
    "/case-studies",
    "/portfolio",
    "/sustainability",
    "/careers",
    "/contact",
    "/faqs",
    "/blog",
    "/legal",
    "/privacy-policy",
    "/cookie-policy",
    "/disclaimer",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
