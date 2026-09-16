"use client";

import { useState } from "react";
import { TESTIMONIALS } from "@/data/products";

export function Testimonials() {
  const [i, setI] = useState(0);
  const visible = [
    TESTIMONIALS[i % TESTIMONIALS.length],
    TESTIMONIALS[(i + 1) % TESTIMONIALS.length],
    TESTIMONIALS[(i + 2) % TESTIMONIALS.length],
  ];

  return (
    <section className="bg-cream text-ink">
      <div className="mx-auto max-w-site px-5 py-24 md:px-10 lg:px-20">
        <p className="text-center text-[11px] uppercase tracking-[0.28em] text-angel-700">Voces</p>
        <h2 className="mt-3 text-center font-serif text-4xl tracking-wide2 md:text-5xl">
          Testimonios
        </h2>
        <div className="gold-line mx-auto mt-8 w-40" />

        <div className="mt-14 grid gap-8 md:hidden">
          <Card t={TESTIMONIALS[i % TESTIMONIALS.length]} />
        </div>
        <div className="mt-14 hidden gap-8 md:grid md:grid-cols-3">
          {visible.map((t) => (
            <Card key={t.name} t={t} />
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => setI((v) => v + TESTIMONIALS.length - 1)}
            className="border border-gold-500 px-4 py-2 text-xs uppercase tracking-nav text-gold-500"
          >
            Prev
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            onClick={() => setI((v) => v + 1)}
            className="border border-gold-500 px-4 py-2 text-xs uppercase tracking-nav text-gold-500"
          >
            Next
          </button>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-sm tracking-[0.2em] text-ink/40">
          {["VOGUE", "EL TIEMPO", "DINERS", "SEMANA"].map((n) => (
            <span key={n} className="font-serif text-xl opacity-60 transition hover:opacity-100">
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({
  t,
}: {
  t: (typeof TESTIMONIALS)[number];
}) {
  return (
    <blockquote className="rounded-[4px] border border-gold-500/25 bg-white/40 p-8">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-angel-900 font-serif text-gold-300">
          {t.initials}
        </span>
        <div>
          <cite className="not-italic font-medium">{t.name}</cite>
          <p className="text-xs uppercase tracking-nav text-ink/50">{t.city}</p>
        </div>
      </div>
      <p className="mt-5 font-serif text-lg leading-8">“{t.quote}”</p>
      <p className="mt-4 tracking-[0.2em] text-gold-500" aria-label={`${t.rating} de 5`}>
        {"◆".repeat(t.rating)}
      </p>
    </blockquote>
  );
}
