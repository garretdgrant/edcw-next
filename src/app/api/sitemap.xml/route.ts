import { type NextRequest } from "next/server";

export const runtime = "edge";

const baseUrl = "https://www.edcwebdesign.com";

const staticPages = [
  "",
  "/services",
  "/pricing",
  "/portfolio",
  "/about",
  "/contact",
  "/blog",
];

const blogs = [
  "/folsom-business-website",
  "/best-website-builder-small-business",
  "/responsive-web-design",
  "/how-to-make-free-website",
];

const cities = [
  "placerville",
  "el-dorado-hills",
  "folsom",
  "auburn",
  "napa-valley",
  "sacramento",
];

const lastModDate = new Date().toISOString().split("T")[0];

export async function GET(_req: NextRequest) {
  const urls = staticPages
    .map(
      (path) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${lastModDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${path === "" ? "1.0" : "0.7"}</priority>
  </url>`,
    )
    .join("");

  const locationPages = cities
    .map(
      (city) => `
      <url>
      <loc>${baseUrl}/locations/california/${city}</loc>
      <lastmod>${lastModDate}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
      </url>`,
    )
    .join("");

  const blogPages = blogs
    .map(
      (path) => `
  <url>
    <loc>${baseUrl}/blog${path}</loc>
    <lastmod>${lastModDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${path === "" ? "1.0" : "0.7"}</priority>
  </url>`,
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
    ${locationPages}
    ${blogPages}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
