const ITEMS = [
  {
    title: "Calidad premium",
    text: "Oro y esmeraldas genuinas, seleccionadas con criterio de taller.",
  },
  {
    title: "Envío seguro",
    text: "Asegurado a todo el país, con seguimiento y empaque firmado.",
  },
  {
    title: "Asesoría experta",
    text: "Acompañamiento personalizado por WhatsApp o en el showroom.",
  },
  {
    title: "Devoluciones",
    text: "Fáciles dentro de 30 días, con la pieza en su estado original.",
  },
];

export function Guarantees() {
  return (
    <section className="bg-angel-700">
      <div className="mx-auto grid max-w-site gap-10 px-5 py-16 md:grid-cols-2 md:px-10 lg:grid-cols-4 lg:px-20">
        {ITEMS.map((item) => (
          <article key={item.title}>
            <div className="h-px w-10 bg-gold-500" />
            <h3 className="mt-4 font-serif text-2xl text-cream">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-gold-300">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
