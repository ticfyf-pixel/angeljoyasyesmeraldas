"use client";

import { CartProvider } from "@/context/CartContext";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CartDrawer } from "./CartDrawer";
import { SearchModal } from "./SearchModal";
import { Loader } from "./Loader";
import { SITE } from "@/data/products";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <Loader />
      <Navbar />
      <CartDrawer />
      <SearchModal />
      {children}
      <Footer />
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3">
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noreferrer"
          aria-label="Seguir en Instagram"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500 text-ink shadow-gold transition hover:bg-gold-300"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
          </svg>
        </a>
        <a
          href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hola, me gustaría una asesoría de Ángel Joyas & Esmeraldas.")}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Escribir por WhatsApp"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 text-ink shadow-gold transition hover:bg-gold-300"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.4-1.41a10 10 0 0 0 4.64 1.18h.01c5.46 0 9.89-4.4 9.89-9.84C21.94 6.4 17.5 2 12.04 2Zm5.76 14.17c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.12.1-1.81-.11-.42-.13-.95-.31-1.64-.6-2.89-1.25-4.77-4.16-4.92-4.35-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36h.56c.18 0 .42-.07.66.5.24.58.82 2 .89 2.15.07.15.12.32.02.52-.1.2-.15.32-.3.5-.14.17-.3.39-.43.52-.14.14-.29.3-.12.58.16.29.73 1.2 1.56 1.95 1.08.96 1.98 1.26 2.26 1.4.28.14.44.12.6-.07.17-.2.7-.81.88-1.09.19-.27.37-.23.63-.14.26.1 1.64.77 1.92.91.28.14.47.21.54.32.07.12.07.68-.17 1.36Z" />
          </svg>
        </a>
      </div>
    </CartProvider>
  );
}
