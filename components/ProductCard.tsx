"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";
import { openWhatsApp, productQuoteMessage } from "@/lib/format";

function detalle(product: Product) {
  if (product.carats) {
    return product.emerald ? `Esmeralda ${product.carats}` : product.carats;
  }
  const sentence = product.description.split(".")[0]?.trim() || product.material;
  if (sentence.length <= 48) return sentence;
  return `${sentence.slice(0, 46).replace(/\s+\S*$/, "")}…`;
}

export function ProductCard({ product }: { product: Product }) {
  const { items, addItem, openCart } = useCart();
  const enCarrito = items
    .filter((item) => item.id === product.id)
    .reduce((sum, item) => sum + item.quantity, 0);
  const segunda = product.images[1];

  function comprar() {
    openWhatsApp(productQuoteMessage(product, { size: product.sizes[0] }));
  }

  function llevar() {
    addItem(product, product.sizes[0]);
    openCart();
  }

  return (
    <article className="group">
      <Link href={`/producto/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#120e0c]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.images[0]}
            alt={`${product.name} en ${product.material}${product.emerald ? " con esmeralda colombiana" : ""}`}
            className={`h-full w-full object-contain p-5 transition duration-700 ease-out group-hover:scale-[1.06] ${segunda ? "group-hover:opacity-0" : ""}`}
            loading="lazy"
          />
          {segunda && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={segunda}
              alt=""
              className="absolute inset-0 h-full w-full object-contain p-5 opacity-0 transition duration-700 ease-out group-hover:scale-[1.04] group-hover:opacity-100"
              loading="lazy"
            />
          )}
          {product.new && (
            <span className="pointer-events-none absolute left-4 top-4 text-[12px] uppercase tracking-[0.16em] text-gold-300">
              Nueva
            </span>
          )}
          <span className="pointer-events-none absolute inset-3 border border-gold-500/25" />
        </div>
      </Link>
      <div className="mt-5">
        <Link href={`/producto/${product.slug}`}>
          <h3 className="font-serif text-[1.7rem] leading-none tracking-wide text-ink">{product.name}</h3>
          <p className="mt-2 text-[13px] leading-5 text-ink/60">{detalle(product)}</p>
        </Link>
      </div>
      <button
        type="button"
        onClick={comprar}
        className="btn mt-5 flex min-h-11 w-full items-center justify-center gap-2 border border-gold-500 bg-transparent px-4 font-serif text-[15px] tracking-wide text-angel-900 transition hover:bg-angel-950 hover:text-gold-300"
      >
        <WhatsAppIcon />
        Apartar esta pieza
      </button>
      <button
        type="button"
        onClick={llevar}
        className="mt-3 block w-full text-center text-[13px] text-ink/60 underline-offset-4 transition hover:text-angel-900 hover:underline"
      >
        {enCarrito > 0 ? `En el carrito · ${enCarrito}` : "Armar mi juego"}
      </button>
    </article>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.4-1.41a10 10 0 0 0 4.64 1.18h.01c5.46 0 9.89-4.4 9.89-9.84C21.94 6.4 17.5 2 12.04 2Zm5.76 14.17c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.12.1-1.81-.11-.42-.13-.95-.31-1.64-.6-2.89-1.25-4.77-4.16-4.92-4.35-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36h.56c.18 0 .42-.07.66.5.24.58.82 2 .89 2.15.07.15.12.32.02.52-.1.2-.15.32-.3.5-.14.17-.3.39-.43.52-.14.14-.29.3-.12.58.16.29.73 1.2 1.56 1.95 1.08.96 1.98 1.26 2.26 1.4.28.14.44.12.6-.07.17-.2.7-.81.88-1.09.19-.27.37-.23.63-.14.26.1 1.64.77 1.92.91.28.14.47.21.54.32.07.12.07.68-.17 1.36Z" />
    </svg>
  );
}
