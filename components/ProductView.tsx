"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";
import { getRelated } from "@/data/products";
import { categoryLabel, formatCOP, whatsappLink } from "@/lib/format";
import { Button } from "./Button";
import { ProductCard } from "./ProductCard";

export function ProductView({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [size, setSize] = useState(product.sizes[0]);
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");
  const related = useMemo(() => getRelated(product), [product]);

  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoom(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [zoom]);

  const wa = whatsappLink(
    `Hola, quiero asesoría sobre ${product.name} (${product.id}), talla ${size}.`
  );

  return (
    <div className="bg-cream text-ink">
      <div className="mx-auto max-w-site px-5 pb-24 pt-32 md:px-10 lg:px-20">
        <nav className="text-[11px] uppercase tracking-nav text-ink/50" aria-label="Miga de pan">
          <Link href="/">Inicio</Link>
          <span> / </span>
          <Link href="/coleccion">Colección</Link>
          <span> / </span>
          <Link href={`/coleccion/${product.category}`}>{categoryLabel(product.category)}</Link>
          <span> / </span>
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          <div className="flex gap-4">
            <div className="hidden w-20 flex-col gap-3 md:flex">
              {product.images.map((src, idx) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActive(idx)}
                  className={`overflow-hidden rounded-[4px] border ${
                    active === idx ? "border-gold-500" : "border-transparent"
                  }`}
                  aria-label={`Ver imagen ${idx + 1} de ${product.name}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="" className="h-20 w-20 object-cover" />
                </button>
              ))}
            </div>
            <button
              type="button"
              className="relative aspect-[4/5] flex-1 overflow-hidden rounded-[4px] bg-angel-900"
              onClick={() => setZoom(true)}
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - r.left) / r.width) * 100;
                const y = ((e.clientY - r.top) / r.height) * 100;
                setOrigin(`${x}% ${y}%`);
              }}
              aria-label="Ampliar imagen del producto"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.images[active]}
                alt={`${product.name} en ${product.material}${product.emerald ? ", esmeralda colombiana certificada" : ""}`}
                className="h-full w-full object-cover transition duration-300 hover:scale-150"
                style={{ transformOrigin: origin }}
              />
            </button>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-angel-700">
              {product.material}
              {product.carats ? ` · ${product.carats}` : ""}
            </p>
            <h1 className="mt-3 font-serif text-4xl md:text-5xl">{product.name}</h1>
            <p className="mt-4 font-serif text-3xl text-angel-900">{formatCOP(product.price)}</p>
            <p className="mt-6 max-w-md text-sm leading-7 text-ink/75">{product.description}</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-ink/75">{product.story}</p>

            <fieldset className="mt-8">
              <legend className="text-[10px] uppercase tracking-nav">Talla / medida</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    className={`min-w-12 border px-3 py-2 text-sm ${
                      size === s
                        ? "border-gold-500 bg-gold-500 text-ink"
                        : "border-gold-500/40 text-ink"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button type="button" onClick={() => addItem(product, size)}>
                Agregar al carrito
              </Button>
              <Button href={wa} variant="secondary">
                Consultar por WhatsApp
              </Button>
            </div>

            <Link
              href={`/certificado/${product.certificateId}`}
              className="mt-6 inline-block text-[11px] uppercase tracking-nav text-gold-500"
            >
              Descargar certificado de autenticidad
            </Link>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-24">
            <h2 className="font-serif text-3xl">También te puede interesar</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>

      {zoom && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/80 p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Imagen ampliada"
        >
          <button
            type="button"
            className="absolute right-6 top-6 text-xs uppercase tracking-nav text-gold-300"
            onClick={() => setZoom(false)}
          >
            Cerrar
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.images[active]}
            alt={`${product.name} ampliada`}
            className="max-h-[90vh] max-w-full object-contain"
          />
        </div>
      )}
    </div>
  );
}
