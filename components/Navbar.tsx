"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

const LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/coleccion", label: "Colección" },
  { href: "/esmeraldas", label: "Esmeraldas" },
  { href: "/nuestra-historia", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

// Paginas cuya seccion superior es una imagen/fondo oscuro: solo ahi el header
// puede empezar transparente sin perder contraste con el texto claro del menu.
const DARK_HERO_ROUTES = ["/", "/esmeraldas", "/club-angel"];

export function Navbar() {
  const { count, openCart, openSearch } = useCart();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = !scrolled && DARK_HERO_ROUTES.includes(pathname ?? "");

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-ink"
      >
        Saltar al contenido
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition duration-500 ${
          transparent
            ? "bg-transparent"
            : "bg-angel-900/90 shadow-[0_10px_30px_rgba(8,40,29,0.35)] backdrop-blur-[10px]"
        }`}
      >
        <nav className="mx-auto flex max-w-site items-center justify-between px-5 py-3 md:px-10 lg:px-20">
          <button
            type="button"
            className="lg:hidden text-[11px] uppercase tracking-nav text-gold-300"
            aria-expanded={menu}
            aria-controls="mobile-menu"
            onClick={() => setMenu(true)}
          >
            Menú
          </button>

          <Logo variant="lockup" className="text-cream" />

          <ul className="hidden items-center gap-8 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[11px] font-medium uppercase tracking-nav text-cream/90 transition hover:text-gold-300"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1 text-gold-300">
            <button
              type="button"
              aria-label="Buscar"
              onClick={openSearch}
              className="flex h-11 w-11 items-center justify-center transition hover:text-gold-500"
            >
              <SearchIcon />
            </button>
            <Link
              href="/club-angel"
              aria-label="Club Ángel"
              className="hidden h-11 w-11 items-center justify-center hover:text-gold-500 sm:flex"
            >
              <UserIcon />
            </Link>
            <button
              type="button"
              aria-label={`Abrir carrito, ${count} artículos`}
              onClick={openCart}
              className="relative flex h-11 w-11 items-center justify-center hover:text-gold-500"
            >
              <BagIcon />
              {count > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold-500 px-1 text-[9px] text-ink">
                  {count}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>
      <MobileMenu open={menu} onClose={() => setMenu(false)} />
    </>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M16 16.5 L20.5 21" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5 19c1.5-3.2 4-4.8 7-4.8S17.5 15.8 19 19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 8h10l-.7 11.2a1 1 0 0 1-1 .8H8.7a1 1 0 0 1-1-.8L7 8Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M9 8V7a3 3 0 0 1 6 0v1" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
