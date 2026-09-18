"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { PRODUCTS } from "@/data/products";
import { Button } from "@/components/Button";
import { formatCOP } from "@/lib/format";
import { WingsHeart } from "@/components/Logo";

function ConfirmInner() {
  const sp = useSearchParams();
  const orden = sp.get("orden") ?? "ANG-00000000";
  const total = Number(sp.get("total") ?? 0);
  const first = (sp.get("ids") ?? "").split(",")[0];
  const product = PRODUCTS.find((p) => p.slug === first) ?? PRODUCTS[0];

  return (
    <div className="bg-cream text-ink">
      <div className="mx-auto max-w-xl px-5 pb-24 pt-36 text-center">
        <WingsHeart className="mx-auto h-7 w-24" />
        <h1 className="mt-6 font-serif text-4xl tracking-wide2">Pedido confirmado</h1>
        <p className="mt-4 text-sm leading-7 text-ink/70">
          Gracias por confiar en Ángel. Tu número de orden es{" "}
          <strong className="text-angel-900">{orden}</strong>.
        </p>
        <p className="mt-2 font-serif text-2xl">{formatCOP(total)}</p>
        <p className="mt-6 text-sm text-ink/70">
          Recibirás un correo de confirmación con identidad de marca. El certificado de autenticidad queda adjunto a tu pieza.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href={`/certificado/${product.certificateId}`}>Ver certificado</Button>
          <Button href="/coleccion" variant="secondary">
            Seguir explorando
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function ConfirmacionPage() {
  return (
    <Suspense fallback={<div className="bg-cream px-5 py-40 text-ink">Cargando…</div>}>
      <ConfirmInner />
    </Suspense>
  );
}
