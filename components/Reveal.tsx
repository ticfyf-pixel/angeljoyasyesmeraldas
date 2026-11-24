"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in");
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { threshold: 0.16 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`angel-reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
      <style>{`
        .angel-reveal { opacity: 0; transform: translateY(18px); transition: opacity 0.9s ease, transform 0.9s ease; }
        .angel-reveal.is-in { opacity: 1; transform: none; }
        @media (prefers-reduced-motion: reduce) {
          .angel-reveal { opacity: 1; transform: none; transition: none; }
        }
      `}</style>
    </div>
  );
}
