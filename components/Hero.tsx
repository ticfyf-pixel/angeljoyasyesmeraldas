import { whatsappLink } from "@/lib/format";
import { Button } from "./Button";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden md:items-center">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero/lifestyle-manos-entrelazadas.jpg"
          alt="Anillo de esmeralda colombiana en oro 18K, colección Ángel"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-angel-950/90 via-angel-950/55 to-angel-950/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-angel-950 via-transparent to-angel-950/35" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-site px-5 pb-28 pt-36 md:px-10 lg:px-20">
        <p className="animate-rise text-[11px] uppercase tracking-[0.42em] text-gold-300">
          Joyas & Esmeraldas · Medellín
        </p>
        <div className="gold-line mt-6 w-16" />
        <h1 className="mt-6 max-w-[14ch] font-serif text-[40px] font-medium uppercase leading-[1.05] tracking-[0.08em] text-cream md:text-[68px]">
          Audaces.
          <br />
          Atemporales.
          <br />
          Angelicales.
        </h1>
        <p className="mt-8 max-w-md text-base leading-7 text-cream/80">
          Elige tu joya en oro y esmeralda. Te confirmamos talla y envío por WhatsApp, y la dejamos apartada.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/coleccion">Ver las piezas</Button>
          <Button
            href={whatsappLink("Hola! Quiero comprar una joya de Ángel. ¿Me asesoras?")}
            variant="secondary"
          >
            Pedir asesoría
          </Button>
        </div>
        <p className="mt-8 text-[10px] uppercase tracking-[0.24em] text-gold-300/80">
          Respuesta en el día · Hecho en Medellín · Certificado incluido
        </p>
      </div>

      <div className="scroll-indicator absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 text-center md:block">
        <span className="text-[9px] uppercase tracking-[0.32em] text-gold-500">Descubrir</span>
      </div>
    </section>
  );
}
