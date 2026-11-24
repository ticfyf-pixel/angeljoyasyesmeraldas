import { Hero } from "@/components/Hero";
import { ValueBar } from "@/components/ValueBar";
import { ProductCard } from "@/components/ProductCard";
import { HistoryTeaser } from "@/components/HistoryTeaser";
import { StatsBar } from "@/components/StatsBar";
import { Guarantees } from "@/components/Guarantees";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";
import { Button } from "@/components/Button";
import { HowToBuy, Moments } from "@/components/Sales";
import { Reveal } from "@/components/Reveal";
import { getFeatured } from "@/data/products";

export default function HomePage() {
  const featured = getFeatured().slice(0, 4);

  return (
    <>
      <Hero />
      <ValueBar />
      <Moments />
      <Reveal>
      <section className="bg-cream text-ink">
        <div className="mx-auto max-w-site px-5 py-24 md:px-10 lg:px-20">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-angel-700">Selección</p>
              <h2 className="mt-3 font-serif text-4xl tracking-wide2 md:text-5xl">
                Piezas de la casa
              </h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-ink/70">
                Cuatro para empezar. El resto de la colección espera, cada una con certificado.
              </p>
            </div>
            <Button href="/coleccion" variant="dark">
              Ver la colección
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
      </Reveal>
      <Reveal><HowToBuy /></Reveal>
      <Reveal><HistoryTeaser /></Reveal>
      <Reveal><StatsBar /></Reveal>
      <Reveal><Guarantees /></Reveal>
      <Reveal><Testimonials /></Reveal>
      <Newsletter />
    </>
  );
}
