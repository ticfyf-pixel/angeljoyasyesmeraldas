"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Logo } from "./Logo";

const LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/coleccion", label: "Colección" },
  { href: "/esmeraldas", label: "Esmeraldas" },
  { href: "/nuestra-historia", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[65] bg-angel-900 transition-opacity duration-300 ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Menú de navegación"
      aria-hidden={!open}
    >
      <div className="flex h-full flex-col items-center justify-center gap-8 px-6 text-center">
        <Logo variant="full" />
        {LINKS.map((l, i) => {
          const current = l.href === "/" ? pathname === "/" : (pathname ?? "").startsWith(l.href);
          return (
            <Link
              key={l.href}
              href={l.href}
              onClick={onClose}
              aria-current={current ? "page" : undefined}
              className={`font-serif text-3xl tracking-[0.18em] transition hover:text-gold-300 ${
                current ? "text-gold-300" : "text-cream"
              }`}
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
            >
              {l.label}
            </Link>
          );
        })}
        <button
          type="button"
          onClick={onClose}
          className="mt-4 text-[11px] uppercase tracking-nav text-gold-500"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
