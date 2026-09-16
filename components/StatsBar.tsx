"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { end: 10, suffix: "+", label: "Años de orfebrería" },
  { end: 250, suffix: "K+", label: "Clientes felices" },
  { end: 98, suffix: "%", label: "Satisfacción" },
  { end: 100, suffix: "%", label: "Esmeraldas certificadas" },
];

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-ink">
      <div className="mx-auto grid max-w-site grid-cols-2 gap-10 px-5 py-20 md:grid-cols-4 md:px-10 lg:px-20">
        {STATS.map((s) => (
          <article key={s.label} className="text-center">
            <p className="font-serif text-5xl text-gold-500 md:text-6xl">
              <Count to={s.end} run={on} />
              {s.suffix}
            </p>
            <p className="mt-3 text-xs uppercase tracking-nav text-cream/70">{s.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Count({ to, run }: { to: number; run: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(to);
      return;
    }
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, to]);
  return <>{n}</>;
}
