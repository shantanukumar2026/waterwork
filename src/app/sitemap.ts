import { MetadataRoute } from "next";
import { SITE_URL } from "@/data/seoConfig";
import { industriesData } from "@/data/industriesDetails";
import homeData from "@/data/home.json";
import { slugify } from "@/utils/slug";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/company",
    "/waterworks-castings",
    "/products",
    "/capabilities",
    "/quality",
    "/industries",
    "/calculator",
    "/blog",
    "/homepage-two",
  ];

  const staticPages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const industryPages: MetadataRoute.Sitemap = Object.keys(industriesData).map((slug) => ({
    url: `${SITE_URL}/industries/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const productPages: MetadataRoute.Sitemap = homeData.products.items.map((product) => ({
    url: `${SITE_URL}/products/${slugify(product.name)}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticPages, ...industryPages, ...productPages];
}
