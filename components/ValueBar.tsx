const ITEMS = [
  {
    title: "Esmeraldas certificadas",
    text: "Colombianas, elegidas por color, origen y carácter.",
  },
  {
    title: "Hechas a mano",
    text: "Cada pieza nace en el taller, no en serie.",
  },
  {
    title: "Con certificado",
    text: "Autenticidad firmada en cada joya que sale de Ángel.",
  },
  {
    title: "Empaque de la casa",
    text: "Caja, estuche y el sello de alas cerca del corazón.",
  },
];

export function ValueBar() {
  return (
    <section className="border-y border-gold-500/20 bg-angel-950 text-cream">
      <div className="mx-auto grid max-w-site md:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((item) => (
          <article key={item.title} className="border-b border-gold-500/20 px-6 py-12 last:border-b-0 md:px-8 lg:border-b-0 lg:border-l lg:first:border-l-0">
            <h3 className="font-serif text-2xl">{item.title}</h3>
            <p className="mt-3 max-w-[28ch] text-sm leading-6 text-cream/70">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
