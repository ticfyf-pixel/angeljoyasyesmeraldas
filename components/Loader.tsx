"use client";

import { useEffect, useRef, useState } from "react";
import { WingsHeart } from "./Logo";

export function Loader() {
  const [show, setShow] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const tilt = useRef<HTMLButtonElement>(null);

  function enter() {
    setLeaving(true);
    sessionStorage.setItem("angel-loader-v6", "1");
    window.setTimeout(() => setShow(false), 280);
  }

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShow(false);
      return;
    }
    if (sessionStorage.getItem("angel-loader-v6")) {
      setShow(false);
      return;
    }
    const t = window.setTimeout(enter, 1400);
    return () => window.clearTimeout(t);
  }, []);

  function onMove(e: React.MouseEvent<HTMLButtonElement>) {
    const el = tilt.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 5}deg)`;
  }

  function onLeave() {
    if (tilt.current) tilt.current.style.transform = "";
  }

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[90] flex items-center justify-center bg-angel-950 transition-opacity duration-300 ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <span className="pointer-events-none absolute left-5 top-5 h-12 w-12 border-l border-t border-gold-500/70 sm:left-10 sm:top-10" />
      <span className="pointer-events-none absolute right-5 top-5 h-12 w-12 border-r border-t border-gold-500/70 sm:right-10 sm:top-10" />
      <span className="pointer-events-none absolute bottom-5 left-5 h-12 w-12 border-b border-l border-gold-500/70 sm:bottom-10 sm:left-10" />
      <span className="pointer-events-none absolute bottom-5 right-5 h-12 w-12 border-b border-r border-gold-500/70 sm:bottom-10 sm:right-10" />

      <div className="flex flex-col items-center px-8 text-center">
        <p className="text-[10px] uppercase tracking-[0.48em] text-gold-300/80">Ángel · Medellín</p>
        <button
          ref={tilt}
          type="button"
          onClick={enter}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          aria-label="Entrar a Ángel"
          className="mt-8 transition-transform duration-300 ease-out"
        >
          <span className="seal-live relative block">
            <WingsHeart className="relative w-72 sm:w-[28rem]" />
          </span>
        </button>
        <span className="seal-rule" aria-hidden="true" />
      </div>
      <style>{`
        @keyframes seal-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes seal-rule {
          from { transform: scaleX(0); opacity: 0; }
          to { transform: scaleX(1); opacity: 1; }
        }
        .seal-live { animation: seal-float 4.8s ease-in-out infinite; }
        .seal-rule {
          display: block;
          width: 4.5rem;
          height: 1px;
          margin-top: 1.75rem;
          background: rgba(201, 166, 107, 0.85);
          transform-origin: center;
          animation: seal-rule 1.1s ease 0.35s both;
        }
        @media (prefers-reduced-motion: reduce) {
          .seal-live, .seal-rule { animation: none; }
        }
      `}</style>
    </div>
  );
}
