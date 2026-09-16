import { Button } from "@/components/Button";

export const metadata = {
  title: "Nuestra historia",
  description:
    "El origen de Ángel Joyas & Esmeraldas: orfebrería de taller en Medellín y esmeraldas colombianas con alma.",
};

const TIMELINE = [
  {
    year: "2016",
    title: "El primer taller",
    text: "Nace el oficio en un banco de orfebrería de Medellín. Oro, silencio y la idea de que el lujo debe tener propósito.",
  },
  {
    year: "2019",
    title: "La esmeralda como centro",
    text: "La casa se especializa en piedra colombiana certificada. El verde deja de ser acento y se vuelve lenguaje.",
  },
  {
    year: "2022",
    title: "Ángel toma nombre",
    text: "El monograma, las alas y el corazón se convierten en sello. Cada pieza sale firmada, envuelta, contada.",
  },
  {
    year: "2026",
    title: "Casa abierta",
    text: "Showroom en El Poblado y un círculo de clientes que heredan, regalan y vuelven. El brillo sigue siendo un oficio.",
  },
];

export default function HistoriaPage() {
  return (
    <div className="marble text-ink">
      <div className="mx-auto max-w-site px-5 pb-24 pt-32 md:px-10 lg:px-20">
        <p className="text-[11px] uppercase tracking-[0.28em] text-angel-700">La casa</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl tracking-wide2 md:text-6xl">
          Lujo con alma, brillo con propósito
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-ink/75">
          Ángel Joyas & Esmeraldas nace de la creencia de que el verdadero lujo está en el detalle, la emoción y la autenticidad. Cada pieza es diseñada y elaborada a mano para celebrar tu individualidad, tu fortaleza y una belleza que trasciende el tiempo.
        </p>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1456948927036-ad533e538fca?auto=format&fit=crop&w=1600&q=80"
            alt="Orfebre trabajando una pieza de oro en el taller"
            className="aspect-[4/5] w-full rounded-[4px] object-cover"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1573408301185-91476d153f1e?auto=format&fit=crop&w=1600&q=80"
            alt="Esmeraldas colombianas sobre superficie de piedra"
            className="aspect-[4/5] w-full rounded-[4px] object-cover lg:mt-16"
          />
        </div>

        <ol className="mt-24 space-y-12 border-l border-gold-500/50 pl-8">
          {TIMELINE.map((item) => (
            <li key={item.year} className="relative">
              <span className="absolute -left-[39px] top-1.5 h-3 w-3 rounded-full bg-gold-500" />
              <p className="text-[11px] uppercase tracking-nav text-gold-500">{item.year}</p>
              <h2 className="mt-2 font-serif text-3xl">{item.title}</h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-ink/75">{item.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16">
          <Button href="/coleccion">Explorar la colección</Button>
        </div>
      </div>
    </div>
  );
}
