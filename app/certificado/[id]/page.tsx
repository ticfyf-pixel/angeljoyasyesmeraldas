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

        <article
          className="border border-gold-500/50 bg-[#f4efe4] p-3 shadow-[0_24px_60px_rgba(22,17,12,0.08)] print:shadow-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(90,70,40,0.08) 0.6px, transparent 0.7px)",
            backgroundSize: "5px 5px",
          }}
        >
          <div className="border border-gold-500/70 bg-[#f7f2e8]/90 px-6 py-10 md:px-14 md:py-14">
            <div className="grid items-center gap-8 md:grid-cols-[180px_1fr]">
              <div className="mx-auto w-40 bg-[#120e0c] p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="aspect-[4/5] w-full object-contain"
                />
              </div>
              <div className="text-center md:text-left">
                <p className="font-serif text-3xl tracking-[0.22em]">ÁNGEL</p>
                <p className="mt-1 text-[13px] uppercase tracking-[0.16em] text-gold-500">
                  Joyas & Esmeraldas
                </p>
                <h1 className="mt-6 font-serif text-3xl leading-tight">Certificado de autenticidad</h1>
                <p className="mt-3 font-serif text-xl text-ink/70">{product.name}</p>
              </div>
            </div>

            <div className="gold-line mx-auto my-8 w-full" />

            <dl className="mx-auto max-w-lg space-y-1 text-sm">
              <Row k="Número" v={id} />
              <Row k="Referencia" v={product.id} />
              <Row k="Material" v={product.material} />
              <Row k="Esmeralda" v={product.emerald ? product.carats ?? "Colombiana" : "No aplica"} />
              <Row k="Casa" v={SITE.name} />
              <Row k="Ciudad" v={SITE.city} />
            </dl>

            <div className="mt-10 flex flex-col items-center justify-between gap-8 md:flex-row">
              <div className="text-center">
                <WingsHeart className="w-36" />
                <p className="mt-2 text-[13px] text-ink/60">Sello de la casa · Medellín, 2026</p>
              </div>
              <div className="text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/qr/${id}.svg`}
                  alt={`Código para verificar ${id}`}
                  width={108}
                  height={108}
                  className="mx-auto border border-gold-500/40 bg-[#f4efe4] p-1"
                />
                <p className="mt-2 text-[13px] text-ink/55">Verificar en línea</p>
              </div>
            </div>

            <p className="mx-auto mt-10 max-w-md text-center font-serif text-lg italic text-ink/70">
              “{SITE.slogan}”
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-gold-500/30 py-2.5">
      <dt className="text-[13px] uppercase tracking-[0.12em] text-ink/50">{k}</dt>
      <dd className="text-right font-serif text-lg">{v}</dd>
    </div>
  );
}
