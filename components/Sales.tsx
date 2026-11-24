import { whatsappLink } from "@/lib/format";

const MOMENTS = [
  {
    kicker: "Regalo",
    title: "Para alguien especial",
    text: "Cuéntanos la ocasión. Te proponemos la pieza y la enviamos empacada, lista para entregar.",
    href: whatsappLink("Hola! Quiero una joya de Ángel para regalar. ¿Me asesoras?"),
    label: "Pedir recomendación",
  },
  {
    kicker: "Para ti",
    title: "Una joya de todos los días",
    text: "Oro 18K y esmeralda colombiana, hecha en Medellín para usarse y heredarse.",
    href: "/coleccion",
    label: "Ver la colección",
  },
  {
    kicker: "Fecha",
    title: "Aniversario o compromiso",
    text: "Dinos la fecha. Apartamos la pieza y coordinamos talla, empaque y envío por WhatsApp.",
    href: whatsappLink("Hola! Busco una joya de Ángel para una fecha especial. ¿Me asesoras?"),
    label: "Apartar con tiempo",
  },
];

export function Moments() {
  return (
    <section className="bg-angel-950 text-cream">
      <div className="mx-auto max-w-site px-5 py-20 md:px-10 lg:px-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-gold-300">Para qué momento</p>
        <h2 className="mt-3 max-w-[16ch] font-serif text-4xl md:text-5xl">Elija según la ocasión</h2>
        <ul className="mt-12 grid gap-10 md:grid-cols-3">
          {MOMENTS.map((item) => (
            <li key={item.title} className="border-t border-gold-500/30 pt-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-500">{item.kicker}</p>
              <h3 className="mt-3 font-serif text-3xl">{item.title}</h3>
              <p className="mt-3 max-w-[34ch] text-sm leading-6 text-cream/75">{item.text}</p>
              <a
                href={item.href}
                {...(item.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                className="mt-5 inline-block text-[11px] uppercase tracking-[0.16em] text-gold-300 underline underline-offset-4"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const STEPS = [
  { n: "01", title: "Elija la pieza", text: "Mire la colección y quédese con la que le representa." },
  { n: "02", title: "Escríbanos", text: "Por WhatsApp confirmamos talla, empaque y envío." },
  { n: "03", title: "La apartamos", text: "El pago se cierra en el chat y sale con certificado." },
];

export function HowToBuy() {
  return (
    <section className="border-y border-gold-500/20 bg-cream text-ink">
      <div className="mx-auto grid max-w-site items-end gap-10 px-5 py-16 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-20">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-angel-700">Cómo se compra</p>
          <h2 className="mt-3 font-serif text-4xl">Tres pasos. Un chat.</h2>
          <a
            href={whatsappLink("Hola! Quiero comprar una joya de Ángel. ¿Me asesoras?")}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex min-h-11 items-center border border-angel-950 bg-angel-950 px-6 text-[11px] uppercase tracking-[0.16em] text-gold-300 transition hover:bg-gold-500 hover:text-ink"
          >
            Empezar por WhatsApp
          </a>
        </div>
        <ol className="grid gap-6 sm:grid-cols-3">
          {STEPS.map((step) => (
            <li key={step.n}>
              <p className="font-serif text-3xl text-gold-500">{step.n}</p>
              <h3 className="mt-2 font-serif text-2xl">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/70">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
