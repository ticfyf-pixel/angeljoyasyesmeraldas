"use client";

import { useEffect, useRef, useState } from "react";
import { WingsHeart } from "./Logo";

export function Loader() {
  const [show, setShow] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const tilt = useRef<HTMLButtonElement>(null);

  function enter() {
    setLeaving(true);
    sessionStorage.setItem("angel-loader-v7", "1");
    window.setTimeout(() => setShow(false), 280);
  }

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShow(false);
      return;
    }
    if (sessionStorage.getItem("angel-loader-v7")) {
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
      className={`fixed inset-0 z-[90] flex items-center justify-center bg-white transition-opacity duration-300 ${
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
        className="transition-transform duration-300 ease-out"
      >
        <WingsHeart className="w-[min(92vw,34rem)]" />
      </button>
    </div>
  );
}
