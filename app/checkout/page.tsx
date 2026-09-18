"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { formatCOP } from "@/lib/format";
import { Button } from "@/components/Button";

const SHIPPING = [
  { id: "nacional", name: "Envío nacional asegurado", days: "3–5 días hábiles", price: 35000 },
  { id: "medellin", name: "Medellín · mismo día", days: "Pedidos antes de 12 m.", price: 18000 },
  { id: "express", name: "Express 24 horas", days: "Ciudades principales", price: 59000 },
];

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const router = useRouter();
  const [ship, setShip] = useState(SHIPPING[0].id);
  const [pay, setPay] = useState("tarjeta");
  const [error, setError] = useState("");
  const [open, setOpen] = useState<"envio" | "metodo" | "pago">("envio");

  const shippingCost = SHIPPING.find((s) => s.id === ship)?.price ?? 0;
  const total = subtotal + shippingCost;
  const ids = useMemo(
    () => items.map((i) => i.slug).join(","),
    [items]
  );

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (!fd.get("nombre") || !fd.get("email") || !fd.get("direccion")) {
      setError("Completa los datos de envío.");
      return;
    }
    if (items.length === 0) {
      setError("Tu carrito está vacío.");
      return;
    }
    const order = `ANG-${Date.now().toString().slice(-8)}`;
    clear();
    router.push(`/checkout/confirmacion?orden=${order}&total=${total}&ids=${ids}`);
  }

  return (
    <div className="bg-cream text-ink">
      <div className="mx-auto max-w-site px-5 pb-24 pt-32 md:px-10 lg:px-20">
        <h1 className="font-serif text-4xl tracking-wide2 md:text-5xl">Checkout</h1>
        <p className="mt-3 text-sm text-ink/60">Una sola página. Calma, claridad, confirmación.</p>

        <form onSubmit={onSubmit} className="mt-12 grid gap-12 lg:grid-cols-[1fr_340px]">
          <div className="space-y-4">
            <Accordion title="1. Datos de envío" open={open === "envio"} onToggle={() => setOpen("envio")}>
              <Field id="nombre" label="Nombre completo" required />
              <Field id="email" label="Correo" type="email" required />
              <Field id="telefono" label="Teléfono" type="tel" required />
              <Field id="direccion" label="Dirección" required />
              <Field id="ciudad" label="Ciudad" required />
            </Accordion>

            <Accordion title="2. Método de envío" open={open === "metodo"} onToggle={() => setOpen("metodo")}>
              {SHIPPING.map((s) => (
                <label key={s.id} className="mb-3 flex cursor-pointer items-start gap-3 border-b border-gold-500/20 py-3">
                  <input type="radio" name="ship" checked={ship === s.id} onChange={() => setShip(s.id)} />
                  <span className="flex-1">
                    <span className="block font-medium">{s.name}</span>
                    <span className="text-xs text-ink/60">{s.days}</span>
                  </span>
                  <span>{formatCOP(s.price)}</span>
                </label>
              ))}
            </Accordion>

            <Accordion title="3. Método de pago" open={open === "pago"} onToggle={() => setOpen("pago")}>
              <p className="mb-4 text-xs leading-5 text-ink/60">
                Pasarela de demostración inspirada en Wompi (Colombia). En producción se conecta la llave pública de Wompi, PayU o Mercado Pago.
              </p>
              {[
                { id: "tarjeta", label: "Tarjeta débito / crédito" },
                { id: "pse", label: "PSE" },
                { id: "nequi", label: "Nequi" },
              ].map((m) => (
                <label key={m.id} className="mb-2 flex gap-3">
                  <input type="radio" name="pay" checked={pay === m.id} onChange={() => setPay(m.id)} />
                  {m.label}
                </label>
              ))}
              {pay === "tarjeta" && (
                <div className="mt-6 space-y-6">
                  <Field id="card" label="Número de tarjeta (demo)" placeholder="4242 4242 4242 4242" />
                  <div className="grid grid-cols-2 gap-6">
                    <Field id="exp" label="Vence" placeholder="12/28" />
                    <Field id="cvv" label="CVV" placeholder="123" />
                  </div>
                </div>
              )}
            </Accordion>

            {error && <p className="text-sm text-coral">{error}</p>}
            <Button type="submit" className="mt-4">
              Confirmar pedido
            </Button>
          </div>

          <aside className="h-fit border border-gold-500/30 p-6">
            <h2 className="font-serif text-2xl">Resumen</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {items.map((i) => (
                <li key={`${i.id}-${i.size}`} className="flex justify-between gap-3">
                  <span>
                    {i.name} × {i.quantity}
                  </span>
                  <span>{formatCOP(i.price * i.quantity)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-between text-sm">
              <span>Envío</span>
              <span>{formatCOP(shippingCost)}</span>
            </div>
            <div className="mt-4 flex justify-between border-t border-gold-500/30 pt-4 font-serif text-2xl">
              <span>Total</span>
              <span>{formatCOP(total)}</span>
            </div>
          </aside>
        </form>
      </div>
    </div>
  );
}

function Accordion({
  title,
  open,
  onToggle,
  children,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-gold-500/30">
      <button type="button" onClick={onToggle} className="flex w-full justify-between px-5 py-4 font-serif text-xl">
        {title}
        <span className="text-gold-500">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="space-y-6 px-5 pb-6">{children}</div>}
    </div>
  );
}

function Field({
  id,
  label,
  type = "text",
  required,
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-[10px] uppercase tracking-nav text-ink/60">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border-0 border-b border-gold-500 bg-transparent py-2 outline-none placeholder:text-ink/30"
      />
    </div>
  );
}
