"use client";

import Link from "next/link";
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
        {LINKS.map((l, i) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={onClose}
            className="font-serif text-3xl tracking-[0.18em] text-cream transition hover:text-gold-300"
            style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
          >
            {l.label}
          </Link>
        ))}
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
