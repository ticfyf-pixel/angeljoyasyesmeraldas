import { Hero } from "@/components/Hero";
import { ValueBar } from "@/components/ValueBar";
import { ProductCard } from "@/components/ProductCard";
import { HistoryTeaser } from "@/components/HistoryTeaser";
import { StatsBar } from "@/components/StatsBar";
import { Guarantees } from "@/components/Guarantees";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";
import { Button } from "@/components/Button";
import { getFeatured } from "@/data/products";

export default function HomePage() {
  const featured = getFeatured();

  return (
    <>
      <Hero />
      <ValueBar />
      <section className="bg-cream text-ink">
        <div className="mx-auto max-w-site px-5 py-24 md:px-10 lg:px-20">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-angel-700">Selección</p>
              <h2 className="mt-3 font-serif text-4xl tracking-wide2 md:text-5xl">
                Colección destacada
              </h2>
            </div>
            <Button href="/coleccion" variant="dark">
              Ver todo
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
      <HistoryTeaser />
      <StatsBar />
      <Guarantees />
      <Testimonials />
      <Newsletter />
    </>
  );
}
