import type { MetadataRoute } from "next";
import { CATEGORIES, PRODUCTS } from "@/data/products";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://angeljoyas.com";
  const statics = [
    "",
    "/coleccion",
    "/nuestra-historia",
    "/esmeraldas",
    "/club-angel",
    "/contacto",
    "/carrito",
    "/checkout",
    "/legal/terminos",
    "/legal/privacidad",
    "/legal/devoluciones",
  ].map((p) => ({ url: `${base}${p}`, lastModified: new Date() }));

  const cats = CATEGORIES.map((c) => ({
    url: `${base}/coleccion/${c.slug}`,
    lastModified: new Date(),
  }));
  const products = PRODUCTS.map((p) => ({
    url: `${base}/producto/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...statics, ...cats, ...products];
}
