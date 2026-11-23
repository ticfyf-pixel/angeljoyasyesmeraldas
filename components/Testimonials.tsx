"use client";

import { useState } from "react";
import { TESTIMONIALS } from "@/data/products";

export function Testimonials() {
  const [i, setI] = useState(0);
  const quote = TESTIMONIALS[i % TESTIMONIALS.length];

  return (
    <section className="bg-cream text-ink">
      <div className="mx-auto max-w-site px-5 py-24 md:px-10 lg:px-20">
        <p className="text-[11px] uppercase tracking-[0.32em] text-angel-700">Voces</p>
        <blockquote className="mt-10 max-w-4xl">
          <p className="font-serif text-3xl leading-[1.25] md:text-5xl">“{quote.quote}”</p>
          <footer className="mt-8 text-[11px] uppercase tracking-[0.24em] text-ink/50">
            {quote.name}
            <span className="text-gold-500"> · </span>
            {quote.city}
          </footer>
        </blockquote>
        <div className="mt-12 flex gap-3">
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => setI((v) => (v + TESTIMONIALS.length - 1) % TESTIMONIALS.length)}
            className="min-h-11 border border-ink/15 px-5 text-[10px] uppercase tracking-[0.2em] transition hover:border-gold-500"
          >
            Anterior
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            onClick={() => setI((v) => (v + 1) % TESTIMONIALS.length)}
            className="min-h-11 border border-ink/15 px-5 text-[10px] uppercase tracking-[0.2em] transition hover:border-gold-500"
          >
            Siguiente
          </button>
        </div>
      </div>
    </section>
  );
}
