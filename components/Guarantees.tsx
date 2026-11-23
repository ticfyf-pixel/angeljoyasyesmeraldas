const ITEMS = [
  {
    title: "Calidad de taller",
    text: "Oro y esmeraldas genuinas, elegidas una a una.",
  },
  {
    title: "Envío asegurado",
    text: "A todo el país, con seguimiento y empaque firmado.",
  },
  {
    title: "Asesoría",
    text: "Por WhatsApp o en el showroom, con calma.",
  },
  {
    title: "Devoluciones",
    text: "Dentro de 30 días, con la pieza en su estado original.",
  },
];

export function Guarantees() {
  return (
    <section className="bg-cream text-ink">
      <div className="mx-auto grid max-w-site gap-12 px-5 py-20 md:grid-cols-4 md:px-10 lg:px-20">
        {ITEMS.map((item, i) => (
          <article key={item.title}>
            <p className="text-[10px] tracking-[0.28em] text-gold-500">0{i + 1}</p>
            <h3 className="mt-3 font-serif text-2xl">{item.title}</h3>
            <p className="mt-2 max-w-[28ch] text-sm leading-6 text-ink/70">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
