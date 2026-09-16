import { LegalPage } from "@/components/LegalPage";

export const metadata = { title: "Política de privacidad" };

export default function PrivacidadPage() {
  return (
    <LegalPage
      title="Política de privacidad"
      body={[
        "Ángel Joyas & Esmeraldas trata datos personales conforme a la Ley 1581 de 2012 (Habeas Data) y sus decretos reglamentarios.",
        "Recopilamos nombre, correo, teléfono y dirección para procesar pedidos, asesoría y, si lo autorizas, el Club Ángel. No vendemos bases de datos.",
        "Puedes conocer, actualizar o suprimir tus datos escribiendo a hola@angeljoyas.com. El consentimiento del newsletter es independiente de la compra.",
        "El sitio usa almacenamiento local del navegador para recordar tu carrito. No se almacenan números de tarjeta en nuestros servidores en esta demostración.",
      ]}
    />
  );
}
