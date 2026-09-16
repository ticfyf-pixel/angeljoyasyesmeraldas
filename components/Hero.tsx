import { Button } from "./Button";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=2200&q=80"
          alt="Joyas de oro y esmeraldas sobre terciopelo, colección Ángel"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-angel-950/92 via-angel-900/72 to-angel-900/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-site px-5 pb-24 pt-36 md:px-10 lg:px-20">
        <p className="animate-rise text-[11px] uppercase tracking-[0.32em] text-gold-300">
          Joyas & Esmeraldas · Medellín
        </p>
        <h1 className="mt-6 max-w-3xl font-serif text-[36px] font-medium uppercase leading-[1.12] tracking-[0.12em] text-white md:text-[56px] md:leading-[1.14]">
          Audaces.
          <br />
          Atemporales.
          <br />
          Angelicales.
        </h1>
        <p className="mt-6 max-w-md text-base leading-7 text-gold-300">
          Joyas en oro y esmeraldas colombianas certificadas, creadas para brillar con propósito.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/coleccion">Explorar colección</Button>
          <Button href="/nuestra-historia" variant="secondary">
            Nuestra historia
          </Button>
        </div>
      </div>

      <div className="scroll-indicator absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 text-center md:block">
        <span className="text-[9px] uppercase tracking-[0.28em] text-gold-500">Descubrir</span>
      </div>
    </section>
  );
}
