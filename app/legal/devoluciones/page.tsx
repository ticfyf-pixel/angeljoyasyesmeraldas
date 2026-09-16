import { LegalPage } from "@/components/LegalPage";

export const metadata = { title: "Devoluciones y envíos" };

export default function DevolucionesPage() {
  return (
    <LegalPage
      title="Envíos y devoluciones"
      body={[
        "Despachamos a todo Colombia con envío asegurado. Medellín puede tener entrega el mismo día en horarios de taller.",
        "Tienes 30 días para devolver una pieza en su estado original, con empaque y certificado. El reembolso se procesa al verificar el taller.",
        "Las piezas personalizadas o grabadas por encargo no aplican a devolución, salvo defecto de fabricación.",
        "Si la joya llega con novedad de transporte, repórtalo en las primeras 48 horas con registro fotográfico a hola@angeljoyas.com.",
      ]}
    />
  );
}
