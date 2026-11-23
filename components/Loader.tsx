"use client";

import { useEffect, useRef, useState } from "react";
import { WingsHeart } from "./Logo";

export function Loader() {
  const [show, setShow] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const tilt = useRef<HTMLButtonElement>(null);

  function enter() {
    setLeaving(true);
    sessionStorage.setItem("angel-loader-v9", "1");
    window.setTimeout(() => setShow(false), 420);
  }

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShow(false);
      return;
    }
    if (sessionStorage.getItem("angel-loader-v9")) {
      setShow(false);
      return;
    }
    const t = window.setTimeout(enter, 2400);
    return () => window.clearTimeout(t);
  }, []);

  function onMove(e: React.MouseEvent<HTMLButtonElement>) {
    const el = tilt.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 6}deg)`;
  }

  function onLeave() {
    if (tilt.current) tilt.current.style.transform = "";
  }

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[90] flex items-center justify-center bg-angel-950 transition-opacity duration-500 ${
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
        className="relative transition-transform duration-200 ease-out"
      >
        <span className="seal-glow" aria-hidden="true" />
        <span className="seal-live relative block">
          <WingsHeart onDark className="w-[min(92vw,34rem)]" />
        </span>
      </button>
      <style>{`
        @keyframes seal-in {
          0% { opacity: 0; transform: scale(0.82) translateY(16px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes seal-float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-12px) scale(1.035); }
        }
        @keyframes seal-glow {
          0%, 100% { opacity: 0.28; transform: translate(-50%, -58%) scale(0.92); }
          50% { opacity: 0.7; transform: translate(-50%, -58%) scale(1.08); }
        }
        .seal-live { animation: seal-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) both, seal-float 2.2s ease-in-out 0.8s infinite; }
        .seal-glow {
          position: absolute;
          left: 50%;
          top: 42%;
          width: 38%;
          height: 34%;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(232, 201, 137, 0.55), transparent 68%);
          filter: blur(18px);
          animation: seal-glow 2.2s ease-in-out infinite;
          pointer-events: none;
        }
        @media (prefers-reduced-motion: reduce) {
          .seal-live, .seal-glow { animation: none; }
        }
      `}</style>
    </div>
  );
}
