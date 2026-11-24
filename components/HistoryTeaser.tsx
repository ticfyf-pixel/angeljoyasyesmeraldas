import { Button } from "./Button";

export function HistoryTeaser() {
  return (
    <section className="bg-cream text-ink">
      <div className="mx-auto grid max-w-site items-center gap-14 px-5 py-24 md:px-10 lg:grid-cols-2 lg:px-20">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#120e0c]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/productos/juego-esmeralda.jpg"
            alt="Juego de oro 18K con esmeralda colombiana, hecho en el taller de Ángel"
            className="h-full w-full object-contain p-8 md:p-12"
            loading="lazy"
          />
          <span className="pointer-events-none absolute inset-4 border border-gold-500/25 md:inset-6" />
        </div>
        <div className="lg:pl-6">
          <p className="text-[11px] uppercase tracking-[0.32em] text-angel-700">La casa</p>
          <h2 className="mt-3 font-serif text-4xl tracking-wide2 md:text-5xl">Nuestra historia</h2>
          <div className="gold-line mt-6 w-16" />
          <p className="mt-8 max-w-lg text-base leading-7 text-ink/80">
            Ángel Joyas & Esmeraldas nace de la creencia de que el verdadero lujo está en el detalle, la emoción y la autenticidad. Cada pieza es diseñada y elaborada a mano para celebrar su individualidad, su fortaleza y una belleza que trasciende el tiempo.
          </p>
          <p className="mt-4 max-w-lg text-base leading-7 text-ink/80">
            Desde Medellín, trabajamos el oro y la esmeralda colombiana con oficio de taller: silencio, precisión y un brillo que no se improvisa.
          </p>
          <div className="mt-10">
            <Button href="/nuestra-historia">Conocer más</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
