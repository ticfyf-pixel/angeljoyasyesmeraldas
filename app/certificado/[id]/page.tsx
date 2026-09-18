import { PRODUCTS, SITE } from "@/data/products";
import { WingsHeart } from "@/components/Logo";
import { Button } from "@/components/Button";
import { PrintButton } from "@/components/PrintButton";

export function generateStaticParams() {
  const ids = Array.from(new Set(PRODUCTS.map((p) => p.certificateId)));
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return { title: `Certificado ${id}` };
}

export default async function CertificadoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.certificateId === id) ?? PRODUCTS[0];

  return (
    <div className="bg-cream text-ink">
      <div className="mx-auto max-w-3xl px-5 pb-24 pt-32 md:px-10">
        <div className="no-print mb-8 flex gap-3">
          <PrintButton>Descargar / imprimir PDF</PrintButton>
          <Button href={`/producto/${product.slug}`} variant="secondary">
            Volver a la pieza
          </Button>
        </div>

        <article className="border border-gold-500 bg-white p-8 md:p-14 print:border-gold-500">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.jpg" alt={SITE.name} className="mx-auto h-28 w-28 object-cover" />
          <p className="mt-6 text-center font-serif text-3xl tracking-[0.28em]">ÁNGEL</p>
          <p className="text-center text-[10px] uppercase tracking-[0.22em] text-gold-500">
            Joyas & Esmeraldas
          </p>
          <WingsHeart className="mx-auto mt-4 h-6 w-20" />
          <h1 className="mt-10 text-center font-serif text-3xl">Certificado de autenticidad</h1>
          <div className="gold-line mx-auto mt-6 w-32" />
          <dl className="mx-auto mt-10 max-w-md space-y-3 text-sm">
            <Row k="Número" v={id} />
            <Row k="Pieza" v={product.name} />
            <Row k="Referencia" v={product.id} />
            <Row k="Material" v={product.material} />
            <Row k="Esmeralda" v={product.emerald ? product.carats ?? "Certificada" : "No aplica"} />
            <Row k="Casa" v={SITE.name} />
            <Row k="Ciudad" v={SITE.city} />
          </dl>
          <p className="mx-auto mt-10 max-w-md text-center font-serif text-lg italic text-ink/70">
            “{SITE.slogan}”
          </p>
          <p className="mt-10 text-center text-[11px] uppercase tracking-nav text-ink/50">
            Documento emitido por el taller · 2026
          </p>
        </article>
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between border-b border-gold-500/25 py-2">
      <dt className="uppercase tracking-nav text-[10px] text-ink/50">{k}</dt>
      <dd>{v}</dd>
    </div>
  );
}
