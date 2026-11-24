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
  metadataBase: new URL(SITE.url),
  alternates: { canonical: "./" },
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
    url: "./",
    title: SITE.name,
    description: SITE.slogan,
    locale: "es_CO",
    type: "website",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: "Ángel Joyas y Esmeraldas" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.slogan,
    images: ["/images/og.jpg"],
  },
  icons: {
    icon: [
      { url: "/images/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-180.png", sizes: "180x180", type: "image/png" },
    ],
    apple: "/images/favicon-180.png",
  },
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
