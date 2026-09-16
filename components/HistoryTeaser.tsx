import { Button } from "./Button";

export function HistoryTeaser() {
  return (
    <section className="marble text-ink">
      <div className="mx-auto grid max-w-site items-center gap-12 px-5 py-24 md:px-10 lg:grid-cols-2 lg:px-20">
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1573408301185-91476d153f1e?auto=format&fit=crop&w=1400&q=80"
            alt="Esmeraldas en bruto y talladas sobre piedra natural"
            className="aspect-[4/5] w-full rounded-[4px] object-cover"
          />
          <div className="absolute -bottom-6 -right-0 hidden w-40 border border-gold-500 bg-angel-900 p-4 md:block lg:-right-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.jpg" alt="" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="lg:pl-8">
          <p className="text-[11px] uppercase tracking-[0.28em] text-angel-700">La casa</p>
          <h2 className="mt-3 font-serif text-4xl tracking-wide2 md:text-5xl">Nuestra historia</h2>
          <div className="gold-line mt-6 w-24" />
          <p className="mt-8 max-w-lg text-base leading-7 text-ink/80">
            Ángel Joyas & Esmeraldas nace de la creencia de que el verdadero lujo está en el detalle, la emoción y la autenticidad. Cada pieza es diseñada y elaborada a mano para celebrar tu individualidad, tu fortaleza y una belleza que trasciende el tiempo.
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
