import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { Providers } from "@/components/Providers";
import { SITE } from "@/data/products";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://angeljoyas.com"),
  title: {
    default: `${SITE.name} | Joyería de lujo en Medellín`,
    template: `%s | ${SITE.shortName}`,
  },
  description:
    "Joyas de esmeraldas Colombia. Esmeraldas certificadas y oro 18K, hechas a mano en Medellín. Lujo con alma, brillo con propósito.",
  keywords: [
    "joyas de esmeraldas Colombia",
    "esmeraldas certificadas",
    "joyería de lujo Medellín",
    "anillos de oro con esmeralda colombiana",
  ],
  openGraph: {
    title: SITE.name,
    description: SITE.slogan,
    locale: "es_CO",
    type: "website",
    images: ["/images/logo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.slogan,
  },
  icons: { icon: "/images/logo.jpg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJson = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    slogan: SITE.slogan,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Medellín",
      addressCountry: "CO",
    },
    email: SITE.email,
    telephone: SITE.phone,
  };

  return (
    <html lang="es-CO">
      <body className={`${cormorant.variable} ${montserrat.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJson) }}
        />
        <Providers>
          <main id="contenido">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
