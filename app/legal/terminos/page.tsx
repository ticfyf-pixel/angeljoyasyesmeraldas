import { LegalPage } from "@/components/LegalPage";

export const metadata = { title: "Términos y condiciones" };

export default function TerminosPage() {
  return (
    <LegalPage
      title="Términos y condiciones"
      body={[
        "Este sitio presenta la colección de Ángel Joyas & Esmeraldas. Al realizar un pedido aceptas estas condiciones de uso, compraventa y privacidad.",
        "Los precios están expresados en pesos colombianos (COP) e incluyen la información visible en ficha. El envío se calcula en el checkout.",
        "Las piezas de esmeralda se entregan con certificado de autenticidad. Las fotografías buscan fidelidad de color; cada piedra natural tiene un jardín único.",
        "Ángel se reserva el derecho de corregir errores evidentes de precio o inventario antes de despachar, con aviso al comprador.",
      ]}
    />
  );
}
