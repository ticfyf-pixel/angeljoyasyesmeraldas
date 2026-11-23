"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";
import { openWhatsApp, productQuoteMessage } from "@/lib/format";

export function ProductCard({ product }: { product: Product }) {
  const { items, addItem, openCart } = useCart();
  const enCarrito = items
    .filter((item) => item.id === product.id)
    .reduce((sum, item) => sum + item.quantity, 0);

  function comprar() {
    openWhatsApp(productQuoteMessage(product, { size: product.sizes[0] }));
  }

  function llevar() {
    addItem(product, product.sizes[0]);
    openCart();
  }

  return (
    <article className="group relative">
      <Link href={`/producto/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] bg-angel-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.images[0]}
            alt={`${product.name} en ${product.material}${product.emerald ? " con esmeralda colombiana" : ""}`}
            className="h-full w-full object-cover transition duration-[400ms] ease-out group-hover:scale-105"
            loading="lazy"
          />
          {product.new && (
            <span className="absolute left-3 top-3 bg-angel-950/80 px-2 py-1 text-[9px] uppercase tracking-[0.16em] text-gold-300">
              Nuevo
            </span>
          )}
        </div>
        <div className="mt-4 flex items-start justify-between gap-3">
          <div>
            <h3 className="font-serif text-xl text-ink">{product.name}</h3>
            <p className="mt-1 text-xs uppercase tracking-[0.12em] text-ink/60">
              {product.material}
              {product.emerald ? " · Esmeralda" : ""}
            </p>
          </div>
        </div>
      </Link>
      <button
        type="button"
        onClick={comprar}
        className="btn mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-[2px] bg-gold-500 px-4 text-[11px] font-medium uppercase tracking-[0.14em] text-ink transition hover:bg-gold-300"
      >
        <WhatsAppIcon />
        Lo quiero por WhatsApp
      </button>
      <button
        type="button"
        onClick={llevar}
        className="mt-3 block w-full text-center text-[12px] text-gold-500 underline underline-offset-4"
      >
        {enCarrito > 0 ? `En el carrito · ${enCarrito}` : "Llevarla con otras piezas"}
      </button>
    </article>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.4-1.41a10 10 0 0 0 4.64 1.18h.01c5.46 0 9.89-4.4 9.89-9.84C21.94 6.4 17.5 2 12.04 2Zm5.76 14.17c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.12.1-1.81-.11-.42-.13-.95-.31-1.64-.6-2.89-1.25-4.77-4.16-4.92-4.35-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36h.56c.18 0 .42-.07.66.5.24.58.82 2 .89 2.15.07.15.12.32.02.52-.1.2-.15.32-.3.5-.14.17-.3.39-.43.52-.14.14-.29.3-.12.58.16.29.73 1.2 1.56 1.95 1.08.96 1.98 1.26 2.26 1.4.28.14.44.12.6-.07.17-.2.7-.81.88-1.09.19-.27.37-.23.63-.14.26.1 1.64.77 1.92.91.28.14.47.21.54.32.07.12.07.68-.17 1.36Z" />
    </svg>
  );
}
