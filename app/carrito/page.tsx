"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatCOP } from "@/lib/format";
import { Button } from "@/components/Button";

export default function CarritoPage() {
  const { items, subtotal, updateQty, removeItem } = useCart();

  return (
    <div className="bg-cream text-ink">
      <div className="mx-auto max-w-site px-5 pb-24 pt-32 md:px-10 lg:px-20">
        <h1 className="font-serif text-4xl tracking-wide2 md:text-5xl">Carrito</h1>
        {items.length === 0 ? (
          <div className="mt-12">
            <p className="text-sm text-ink/70">Aún no hay piezas en tu bandeja.</p>
            <div className="mt-6">
              <Button href="/coleccion">Explorar colección</Button>
            </div>
          </div>
        ) : (
          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_320px]">
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.size}`} className="flex gap-4 border-b border-gold-500/25 pb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt="" className="h-28 w-24 object-cover" />
                  <div className="flex-1">
                    <Link href={`/producto/${item.slug}`} className="font-serif text-2xl">
                      {item.name}
                    </Link>
                    <p className="text-xs uppercase tracking-nav text-ink/60">
                      {item.material} · Talla {item.size}
                    </p>
                    <p className="mt-2">{formatCOP(item.price)}</p>
                    <div className="mt-3 flex items-center gap-4">
                      <div className="flex border border-gold-500/40">
                        <button type="button" className="px-3" onClick={() => updateQty(item.id, item.size, item.quantity - 1)}>
                          −
                        </button>
                        <span className="px-2 py-1">{item.quantity}</span>
                        <button type="button" className="px-3" onClick={() => updateQty(item.id, item.size, item.quantity + 1)}>
                          +
                        </button>
                      </div>
                      <button type="button" className="text-[10px] uppercase tracking-nav text-coral" onClick={() => removeItem(item.id, item.size)}>
                        Eliminar
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <aside className="h-fit border border-gold-500/30 p-6">
              <div className="flex justify-between font-serif text-2xl">
                <span>Subtotal</span>
                <span>{formatCOP(subtotal)}</span>
              </div>
              <p className="mt-2 text-xs text-ink/60">Envío calculado en el checkout</p>
              <Button href="/checkout" className="mt-6 w-full">
                Ir a pagar
              </Button>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
