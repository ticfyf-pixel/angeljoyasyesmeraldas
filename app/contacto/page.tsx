"use client";

import { FormEvent, useState } from "react";
import { SITE } from "@/data/products";
import { Button } from "@/components/Button";
import { whatsappLink } from "@/lib/format";

export default function ContactoPage() {
  const [ok, setOk] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setOk(true);
  }

  return (
    <div className="bg-cream text-ink">
      <div className="mx-auto max-w-site px-5 pb-24 pt-32 md:px-10 lg:px-20">
        <p className="text-[11px] uppercase tracking-[0.28em] text-angel-700">Showroom</p>
        <h1 className="mt-3 font-serif text-4xl tracking-wide2 md:text-5xl">Contacto</h1>
        <p className="mt-4 max-w-xl text-sm leading-7 text-ink/70">
          Escríbenos, agenda una asesoría o visítanos en El Poblado. El taller responde con la misma calma con la que trabaja el oro.
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <form onSubmit={onSubmit} className="space-y-8">
            <Field id="nombre" label="Nombre" required />
            <Field id="email" label="Correo" type="email" required />
            <Field id="telefono" label="Teléfono" type="tel" />
            <div>
              <label htmlFor="mensaje" className="text-[10px] uppercase tracking-nav text-ink/55">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                required
                rows={4}
                className="mt-2 w-full border-0 border-b border-gold-500 bg-transparent py-2 outline-none"
              />
            </div>
            {ok ? (
              <p className="font-serif text-2xl">Recibimos tu mensaje. Te escribiremos muy pronto.</p>
            ) : (
              <Button type="submit">Enviar</Button>
            )}
          </form>

          <div>
            <p className="font-serif text-2xl">{SITE.address}</p>
            <p className="mt-2 text-sm">{SITE.hours}</p>
            <p className="mt-2 text-sm">{SITE.email}</p>
            <p className="mt-2 text-sm">{SITE.phone}</p>
            <div className="mt-6">
              <Button href={whatsappLink("Hola, quiero agendar una asesoría en el showroom.")}>
                Agendar asesoría
              </Button>
            </div>
            <div className="mt-8 overflow-hidden rounded-[4px] border border-gold-500/30">
              <iframe
                title="Mapa del showroom en El Poblado, Medellín"
                src="https://www.google.com/maps?q=El%20Poblado%2C%20Medell%C3%ADn&output=embed"
                className="h-72 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-[10px] uppercase tracking-nav text-ink/55">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="mt-2 w-full border-0 border-b border-gold-500 bg-transparent py-2 outline-none"
      />
    </div>
  );
}
