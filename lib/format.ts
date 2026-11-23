import { SITE, type Product } from "@/data/products";

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

function publicOrigin() {
  if (typeof window !== "undefined") {
    const host = window.location.hostname;
    if (host !== "localhost" && host !== "127.0.0.1") {
      return window.location.origin;
    }
  }
  return SITE.url;
}

function absoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const origin = publicOrigin().replace(/\/$/, "");
  return `${origin}${path.startsWith("/") ? path : `/${path}`}`;
}

export function productQuoteMessage(product: Product, extras?: { size?: string }) {
  const photo = absoluteUrl(product.images[0] ?? "");
  const page = absoluteUrl(`/producto/${product.slug}/`);
  const details = [
    product.material,
    product.emerald ? "Esmeralda colombiana" : null,
    product.carats ?? null,
    extras?.size ? `Talla ${extras.size}` : null,
  ]
    .filter(Boolean)
    .join(" · ");

  return [
    "Hola! Quiero comprar esta joya.",
    "",
    `*${product.name}*`,
    details,
    "",
    "Me confirmas y la dejo apartada.",
    `Foto: ${photo}`,
    page,
  ]
    .filter(Boolean)
    .join("\n");
}

export type OrderLine = {
  name: string;
  material: string;
  size: string;
  quantity: number;
  price: number;
  slug: string;
};

export function orderPurchaseMessage(lines: OrderLine[], note?: string) {
  const pieces = lines
    .map((line, index) =>
      [
        `*${index + 1}. ${line.name}*`,
        `${line.material} · Talla ${line.size}`,
        `Cantidad: ${line.quantity}`,
        absoluteUrl(`/producto/${line.slug}/`),
      ].join("\n"),
    )
    .join("\n\n");

  return [
    "*ÁNGEL JOYAS & ESMERALDAS*",
    "Quiero comprar estas piezas",
    "",
    pieces,
    "",
    "El envío y el pago se confirman por este chat.",
    note?.trim() ? `\n${note.trim()}` : null,
  ]
    .filter((line) => line !== null)
    .join("\n");
}

export function openWhatsApp(message: string) {
  const enlace = document.createElement("a");
  enlace.href = whatsappLink(message);
  enlace.target = "_blank";
  enlace.rel = "noopener noreferrer";
  document.body.appendChild(enlace);
  enlace.click();
  enlace.remove();
}

export function productQuoteLink(product: Product, extras?: { size?: string }) {
  return whatsappLink(productQuoteMessage(product, extras));
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
