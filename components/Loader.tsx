"use client";

import { useEffect, useState } from "react";

export function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShow(false);
      return;
    }
    const seen = sessionStorage.getItem("angel-loader");
    if (seen) {
      setShow(false);
      return;
    }
    const t = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("angel-loader", "1");
    }, 1600);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-angel-950">
      <svg viewBox="0 0 120 140" className="h-24 w-24" aria-hidden="true" fill="none">
        <path
          className="animate-draw"
          d="M22 118 C18 92 20 64 42 38 C58 18 72 14 78 28 C82 38 74 48 62 58 C86 42 104 38 108 52 C112 68 88 78 70 84 C92 86 104 98 96 112 C86 128 58 118 48 104 C40 114 32 122 22 118 Z"
          stroke="#E8C989"
          strokeWidth="1.6"
        />
        <path className="animate-draw" d="M54 20 L92 118" stroke="#C9A66B" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
      <p className="mt-6 font-serif text-xl tracking-[0.4em] text-gold-300">ÁNGEL</p>
    </div>
  );
}
