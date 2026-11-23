"use client";

import { useMemo, useState } from "react";
import { CATEGORIES, getActiveProducts, type Category } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/Button";

type Sort = "relevancia" | "novedades";

export function CatalogClient({ initialCategory }: { initialCategory?: Category }) {
  const [category, setCategory] = useState<Category | "todas">(initialCategory ?? "todas");
  const [material, setMaterial] = useState<"todos" | "oro">("todos");
  const [emerald, setEmerald] = useState<"todas" | "si" | "no">("todas");
  const [sort, setSort] = useState<Sort>("relevancia");

  const items = useMemo(() => {
    let list = getActiveProducts().filter((p) => {
      if (category !== "todas" && p.category !== category) return false;
      if (material === "oro" && !p.material.toLowerCase().includes("oro")) return false;
      if (emerald === "si" && !p.emerald) return false;
      if (emerald === "no" && p.emerald) return false;
      return true;
    });
    if (sort === "novedades") list = [...list].sort((a, b) => Number(b.new) - Number(a.new));
    return list;
  }, [category, material, emerald, sort]);

  function clear() {
    setCategory(initialCategory ?? "todas");
    setMaterial("todos");
    setEmerald("todas");
    setSort("relevancia");
  }

  return (
    <div className="bg-cream text-ink">
      <div className="mx-auto max-w-site px-5 pb-24 pt-32 md:px-10 lg:px-20">
        <p className="text-[11px] uppercase tracking-[0.28em] text-angel-700">La casa</p>
        <h1 className="mt-3 font-serif text-4xl tracking-wide2 md:text-5xl">Colección</h1>
        <p className="mt-4 max-w-xl text-sm leading-7 text-ink/70">
          Oro 18K y esmeraldas colombianas, hechas en Medellín. Cada pieza se aparta por WhatsApp, con certificado y empaque firmado.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[260px_1fr]">
          <aside className="h-fit border border-gold-500/25 bg-white/40 p-7">
            <h2 className="font-serif text-2xl">Filtros</h2>

            <fieldset className="mt-6">
              <legend className="text-[10px] uppercase tracking-nav text-ink/60">Tipo de joya</legend>
              <div className="mt-3 flex flex-col gap-2 text-sm">
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="radio" className="maison-radio"
                    name="cat"
                    checked={category === "todas"}
                    onChange={() => setCategory("todas")}
                  />
                  Todas
                </label>
                {CATEGORIES.map((c) => (
                  <label key={c.slug} className="flex cursor-pointer items-center gap-3">
                    <input
                      type="radio" className="maison-radio"
                      name="cat"
                      checked={category === c.slug}
                      onChange={() => setCategory(c.slug)}
                    />
                    {c.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="mt-6">
              <legend className="text-[10px] uppercase tracking-nav text-ink/60">Material</legend>
              <div className="mt-3 flex flex-col gap-2 text-sm">
                <label className="flex cursor-pointer items-center gap-3">
                  <input type="radio" className="maison-radio" checked={material === "todos"} onChange={() => setMaterial("todos")} />
                  Todos
                </label>
                <label className="flex cursor-pointer items-center gap-3">
                  <input type="radio" className="maison-radio" checked={material === "oro"} onChange={() => setMaterial("oro")} />
                  Oro 18K
                </label>
              </div>
            </fieldset>

            <fieldset className="mt-6">
              <legend className="text-[10px] uppercase tracking-nav text-ink/60">Esmeralda</legend>
              <div className="mt-3 flex flex-col gap-2 text-sm">
                <label className="flex cursor-pointer items-center gap-3">
                  <input type="radio" className="maison-radio" checked={emerald === "todas"} onChange={() => setEmerald("todas")} />
                  Todas
                </label>
                <label className="flex cursor-pointer items-center gap-3">
                  <input type="radio" className="maison-radio" checked={emerald === "si"} onChange={() => setEmerald("si")} />
                  Con esmeralda
                </label>
                <label className="flex cursor-pointer items-center gap-3">
                  <input type="radio" className="maison-radio" checked={emerald === "no"} onChange={() => setEmerald("no")} />
                  Solo oro
                </label>
              </div>
            </fieldset>

            <button
              type="button"
              onClick={clear}
              className="mt-6 text-[11px] uppercase tracking-nav text-gold-500"
            >
              Limpiar filtros
            </button>
          </aside>

          <div>
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-ink/60">{items.length} piezas</p>
              <label className="text-sm">
                Ordenar
                <select
                  className="ml-3 border-0 border-b border-gold-500 bg-transparent pb-1 outline-none"
                  value={sort}
                  onChange={(e) => setSort(e.target.value as Sort)}
                >
                  <option value="relevancia">Relevancia</option>
                  <option value="novedades">Novedades</option>
                </select>
              </label>
            </div>

            {items.length === 0 ? (
              <div className="rounded-[4px] border border-gold-500/30 p-12 text-center">
                <p className="font-serif text-2xl">Sin resultados</p>
                <p className="mt-3 text-sm text-ink/70">
                  No hay piezas con esos filtros. Prueba otra combinación o limpia la selección.
                </p>
                <div className="mt-6">
                  <Button type="button" onClick={clear}>
                    Limpiar filtros
                  </Button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 xl:grid-cols-3">
                {items.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
