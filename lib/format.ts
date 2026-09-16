import { SITE } from "@/data/products";

export function formatCOP(value: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}

export function whatsappLink(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function categoryLabel(slug: string) {
  const map: Record<string, string> = {
    anillos: "Anillos",
    aretes: "Aretes",
    collares: "Collares",
    pulseras: "Pulseras",
  };
  return map[slug] ?? slug;
}
