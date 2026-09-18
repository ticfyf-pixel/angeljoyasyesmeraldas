"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { getActiveProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatCOP } from "@/lib/format";

export function SearchModal() {
  const { searchOpen, closeSearch } = useCart();
  const [q, setQ] = useState("");

  useEffect(() => {
    if (!searchOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSearch();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [searchOpen, closeSearch]);

  useEffect(() => {
    if (!searchOpen) setQ("");
  }, [searchOpen]);

  const results = useMemo(() => {
    const active = getActiveProducts();
    const term = q.trim().toLowerCase();
    if (!term) return active.slice(0, 6);
    return active.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.material.toLowerCase().includes(term) ||
        p.category.includes(term) ||
        (p.emerald && "esmeralda".includes(term))
    ).slice(0, 8);
  }, [q]);

  if (!searchOpen) return null;

  return (
    <div className="fixed inset-0 z-[75]" role="dialog" aria-modal="true" aria-label="Buscar joyas">
      <button
        type="button"
        className="absolute inset-0 bg-ink/60"
        aria-label="Cerrar búsqueda"
        onClick={closeSearch}
      />
      <div className="relative mx-auto mt-24 w-[min(92vw,640px)] rounded-[4px] bg-cream p-6 text-ink shadow-card">
        <label htmlFor="search-q" className="text-[10px] uppercase tracking-nav text-ink/60">
          Buscar
        </label>
        <input
          id="search-q"
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Anillo, esmeralda, oro 18K…"
          className="mt-2 w-full border-0 border-b border-gold-500 bg-transparent pb-3 text-lg outline-none placeholder:text-ink/40"
        />
        <ul className="mt-5 space-y-3">
          {results.map((p) => (
            <li key={p.id}>
              <Link
                href={`/producto/${p.slug}`}
                onClick={closeSearch}
                className="flex items-center gap-3 py-2"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.images[0]} alt="" className="h-14 w-12 object-cover" />
                <span className="flex-1">
                  <span className="block font-serif text-lg">{p.name}</span>
                  <span className="text-xs text-ink/60">{p.material}</span>
                </span>
                <span className="text-sm">{formatCOP(p.price)}</span>
              </Link>
            </li>
          ))}
          {results.length === 0 && (
            <li className="py-6 text-sm text-ink/60">No encontramos piezas con esa búsqueda.</li>
          )}
        </ul>
      </div>
    </div>
  );
}
