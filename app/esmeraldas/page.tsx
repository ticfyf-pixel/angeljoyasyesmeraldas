import { Button } from "@/components/Button";

export const metadata = {
  title: "Esmeraldas",
  description:
    "Origen, selección y certificación de esmeraldas colombianas en Ángel Joyas. Oficio, no promesa vacía.",
};

const STEPS = [
  {
    n: "01",
    title: "Origen",
    text: "Trabajamos piedra colombiana. Boyacá y el cinturón esmeraldífero —incluida la tradición de Muzo— son referencia de color. No afirmamos una mina puntual si el lote no lo documenta.",
  },
  {
    n: "02",
    title: "Selección",
    text: "Color, transparencia y carácter. El jardín interno no se esconde: se lee. Cada esmeralda pasa por el ojo del taller antes de tocar el oro.",
  },
  {
    n: "03",
    title: "Certificación",
    text: "Toda esmeralda de Ángel viaja con certificado de autenticidad. Materiales, peso y código de pieza quedan registrados para ti y para quien herede la joya.",
  },
];

export default function EsmeraldasPage() {
  return (
    <div className="bg-cream text-ink">
      <section className="relative isolate min-h-[60vh]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1678245687839-231ed039a18b?auto=format&fit=crop&w=2000&q=80"
          alt="Detalle de esmeraldas talladas"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-angel-950/70" />
        <div className="relative mx-auto max-w-site px-5 pb-20 pt-40 md:px-10 lg:px-20">
          <p className="text-[11px] uppercase tracking-[0.28em] text-gold-300">La piedra</p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl tracking-wide2 text-white md:text-6xl">
            Esmeraldas colombianas, con oficio
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-site px-5 py-24 md:px-10 lg:px-20">
        <p className="max-w-2xl text-base leading-7 text-ink/75">
          El verde de Colombia no es un eslogan. Es un material con historia geológica y un mercado que exige trazabilidad. En Ángel elegimos con calma: menos piezas, más verdad.
        </p>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {STEPS.map((s) => (
            <article key={s.n} className="border-t border-gold-500/50 pt-6">
              <p className="font-serif text-3xl text-gold-500">{s.n}</p>
              <h2 className="mt-4 font-serif text-3xl">{s.title}</h2>
              <p className="mt-4 text-sm leading-7 text-ink/75">{s.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-20 overflow-hidden rounded-[4px] border border-gold-500/30">
          <iframe
            title="Mapa de referencia: Boyacá, Colombia"
            src="https://www.google.com/maps?q=Boyac%C3%A1%2C%20Colombia&output=embed"
            className="h-80 w-full"
            loading="lazy"
          />
        </div>
        <p className="mt-3 text-xs text-ink/50">
          Referencia geográfica del cinturón esmeraldífero de Boyacá. El origen exacto de cada lote se consigna en el certificado de la pieza.
        </p>

        <div className="mt-12">
          <Button href="/coleccion">Ver piezas con esmeralda</Button>
        </div>
      </div>
    </div>
  );
}
