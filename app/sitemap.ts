import type { MetadataRoute } from "next";
import { CATEGORIES, SITE, getActiveProducts } from "@/data/products";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  // trailingSlash: true en next.config → las URLs reales terminan en "/"
  const statics = [
    "",
    "/coleccion",
    "/nuestra-historia",
    "/esmeraldas",
    "/club-angel",
    "/contacto",
    "/legal/terminos",
    "/legal/privacidad",
    "/legal/devoluciones",
  ].map((p) => ({ url: `${base}${p}/`, lastModified: new Date() }));

  const cats = CATEGORIES.map((c) => ({
    url: `${base}/coleccion/${c.slug}/`,
    lastModified: new Date(),
  }));
  const products = getActiveProducts().map((p) => ({
    url: `${base}/producto/${p.slug}/`,
    lastModified: new Date(),
  }));

  return [...statics, ...cats, ...products];
}
