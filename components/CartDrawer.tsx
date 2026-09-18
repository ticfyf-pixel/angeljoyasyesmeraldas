"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { formatCOP } from "@/lib/format";
import { Button } from "./Button";

export function CartDrawer() {
  const { items, isOpen, closeCart, subtotal, updateQty, removeItem, count } = useCart();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeCart]);

  return (
    <div
      className={`fixed inset-0 z-[70] ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      role="dialog"
      aria-modal="true"
      aria-label="Carrito de compras"
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        aria-label="Cerrar carrito"
        onClick={closeCart}
        className={`absolute inset-0 bg-ink/50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream text-ink shadow-card transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <header className="flex items-center justify-between border-b border-gold-500/30 px-6 py-5">
          <h2 className="font-serif text-2xl tracking-wide2">Carrito ({count})</h2>
          <button
            type="button"
            onClick={closeCart}
            className="text-xs uppercase tracking-nav text-ink/70"
          >
            Cerrar
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <p className="text-sm leading-7 text-ink/70">
              Tu bandeja está en silencio. Explora la colección y elige una pieza con alma.
            </p>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.size}`} className="flex gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt=""
                    className="h-24 w-20 rounded-[4px] object-cover"
                    loading="lazy"
                  />
                  <div className="flex-1">
                    <Link
                      href={`/producto/${item.slug}`}
                      onClick={closeCart}
                      className="font-serif text-lg"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs uppercase tracking-[0.1em] text-ink/60">
                      {item.material} · Talla {item.size}
                    </p>
                    <p className="mt-1 text-sm">{formatCOP(item.price)}</p>
                    <div className="mt-2 flex items-center gap-3">
                      <div className="flex items-center border border-gold-500/50">
                        <button
                          type="button"
                          aria-label="Disminuir cantidad"
                          className="px-2 py-1"
                          onClick={() => updateQty(item.id, item.size, item.quantity - 1)}
                        >
                          −
                        </button>
                        <span className="min-w-6 text-center text-sm">{item.quantity}</span>
                        <button
                          type="button"
                          aria-label="Aumentar cantidad"
                          className="px-2 py-1"
                          onClick={() => updateQty(item.id, item.size, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id, item.size)}
                        className="text-[10px] uppercase tracking-nav text-coral"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <footer className="border-t border-gold-500/30 px-6 py-6">
          <div className="mb-1 flex justify-between font-serif text-xl">
            <span>Subtotal</span>
            <span>{formatCOP(subtotal)}</span>
          </div>
          <p className="mb-5 text-xs text-ink/60">Envío calculado en el checkout</p>
          <Button href="/checkout" className="w-full" onClick={closeCart}>
            Ir a pagar
          </Button>
          <Link
            href="/carrito"
            onClick={closeCart}
            className="mt-3 block text-center text-[11px] uppercase tracking-nav text-ink/70"
          >
            Ver carrito
          </Link>
        </footer>
      </aside>
    </div>
  );
}
