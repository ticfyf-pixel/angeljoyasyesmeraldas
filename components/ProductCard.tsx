"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";
import { formatCOP } from "@/lib/format";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

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
            <p className="mt-2 text-sm text-ink">{formatCOP(product.price)}</p>
          </div>
          <button
            type="button"
            aria-label={`Agregar ${product.name} al carrito`}
            onClick={(e) => {
              e.preventDefault();
              addItem(product, product.sizes[0]);
            }}
            className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-[2px] border border-gold-500 text-lg text-gold-500 transition hover:bg-gold-500 hover:text-ink"
          >
            +
          </button>
        </div>
      </Link>
    </article>
  );
}
