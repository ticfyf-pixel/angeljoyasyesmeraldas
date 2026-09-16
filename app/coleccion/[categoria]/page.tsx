import { notFound } from "next/navigation";
import { CatalogClient } from "@/components/CatalogClient";
import { CATEGORIES, type Category } from "@/data/products";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ categoria: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria } = await params;
  const found = CATEGORIES.find((c) => c.slug === categoria);
  return {
    title: found?.label ?? "Colección",
    description: `${found?.label ?? "Joyas"} en oro 18K y esmeraldas colombianas certificadas.`,
  };
}

export default async function CategoriaPage({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria } = await params;
  const found = CATEGORIES.find((c) => c.slug === categoria);
  if (!found) notFound();
  return <CatalogClient initialCategory={found.slug as Category} />;
}
