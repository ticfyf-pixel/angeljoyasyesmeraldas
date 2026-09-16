"use client";

import { FormEvent, useState } from "react";
import { Button } from "./Button";
import { WingsHeart } from "./Logo";

export function Newsletter() {
  const [ok, setOk] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") || "");
    const consent = fd.get("consent");
    if (!email.includes("@")) {
      setError("Ingresa un correo válido.");
      return;
    }
    if (!consent) {
      setError("El consentimiento de datos es obligatorio (Ley 1581 de Colombia).");
      return;
    }
    setError("");
    setOk(true);
  }

  return (
    <section className="texture-dark bg-angel-900">
      <div className="mx-auto max-w-2xl px-5 py-24 text-center md:px-10">
        <WingsHeart className="mx-auto h-7 w-24" />
        <h2 className="mt-6 font-serif text-4xl tracking-[0.18em] text-cream md:text-5xl">
          ÚNETE AL CLUB ÁNGEL
        </h2>
        <p className="mt-4 text-sm leading-7 text-gold-300">
          Acceso anticipado a colecciones, asesoría VIP y un regalo de bienvenida para quienes brillan con propósito.
        </p>
        {ok ? (
          <p className="mt-10 font-serif text-2xl text-gold-300">
            Bienvenida al círculo. Revisa tu correo para confirmar (doble opt-in).
          </p>
        ) : (
          <form onSubmit={onSubmit} className="mt-10 text-left">
            <label htmlFor="club-email" className="text-[10px] uppercase tracking-nav text-gold-500">
              Correo electrónico
            </label>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <input
                id="club-email"
                name="email"
                type="email"
                required
                placeholder="tu@correo.com"
                className="flex-1 border-0 border-b border-gold-500 bg-transparent py-3 text-cream outline-none placeholder:text-cream/35"
              />
              <Button type="submit">Unirme</Button>
            </div>
            <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-cream/75">
              <input type="checkbox" name="consent" className="mt-1 accent-gold-500" />
              Autorizo el tratamiento de mis datos personales conforme a la Ley 1581 de 2012 (Habeas Data) para enviarme novedades del Club Ángel.
            </label>
            {error && <p className="mt-3 text-sm text-coral">{error}</p>}
          </form>
        )}
      </div>
    </section>
  );
}
