"use client";

import { useEffect, useRef, useState } from "react";
import { WingsHeart } from "./Logo";

export function Loader() {
  const [show, setShow] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const tilt = useRef<HTMLButtonElement>(null);

  function enter() {
    setLeaving(true);
    sessionStorage.setItem("angel-loader-v3", "1");
    window.setTimeout(() => setShow(false), 480);
  }

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShow(false);
      return;
    }
    if (sessionStorage.getItem("angel-loader-v3")) {
      setShow(false);
      return;
    }
    const t = window.setTimeout(enter, 5600);
    return () => window.clearTimeout(t);
  }, []);

  function onMove(e: React.MouseEvent<HTMLButtonElement>) {
    const el = tilt.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 16}deg) rotateX(${-y * 12}deg)`;
  }

  function onLeave() {
    if (tilt.current) tilt.current.style.transform = "";
  }

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[90] flex flex-col items-center justify-center bg-angel-950 transition-opacity duration-500 ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <button
        ref={tilt}
        type="button"
        onClick={enter}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        aria-label="Entrar a Ángel"
        className="transition-transform duration-150 ease-out"
      >
        <span className="seal-live relative block">
          <span className="seal-glow" aria-hidden="true" />
          <WingsHeart className="relative w-64 sm:w-80" />
        </span>
      </button>
      <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.28em] text-gold-300/80">
        Toca el corazón
      </p>
      <style>{`
        @keyframes seal-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes seal-glow {
          0%, 100% { opacity: 0.28; transform: translate(-50%, -50%) scale(0.9); }
          50% { opacity: 0.75; transform: translate(-50%, -50%) scale(1.08); }
        }
        .seal-live { animation: seal-float 3.2s ease-in-out infinite; }
        .seal-glow {
          position: absolute;
          left: 50%;
          top: 38%;
          width: 42%;
          height: 46%;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(232, 201, 137, 0.7), transparent 68%);
          filter: blur(14px);
          animation: seal-glow 2.4s ease-in-out infinite;
          pointer-events: none;
        }
        @media (prefers-reduced-motion: reduce) {
          .seal-live, .seal-glow { animation: none; }
        }
      `}</style>
    </div>
  );
}
