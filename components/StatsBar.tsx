export function StatsBar() {
  return (
    <section className="relative overflow-hidden bg-angel-950">
      <p
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-serif text-[30vw] leading-none text-gold-500/[0.05]"
      >
        Á
      </p>
      <div className="relative mx-auto max-w-3xl px-5 py-24 text-center md:px-10">
        <p className="text-[10px] uppercase tracking-[0.46em] text-gold-300/80">El taller</p>
        <p className="mt-6 font-serif text-4xl leading-tight text-cream md:text-6xl">Hecho a mano, en Medellín.</p>
        <p className="mt-8 text-[10px] uppercase tracking-[0.32em] text-cream/60">
          Oro 18K · Certificado · Envío asegurado
        </p>
      </div>
    </section>
  );
}
