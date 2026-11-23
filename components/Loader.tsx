"use client";

import { useEffect, useState } from "react";
import { WingsHeart } from "./Logo";

export function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShow(false);
      return;
    }
    const seen = sessionStorage.getItem("angel-loader-v2");
    if (seen) {
      setShow(false);
      return;
    }
    const t = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("angel-loader-v2", "1");
    }, 1800);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-angel-950">
      <WingsHeart className="w-64 sm:w-80" />
    </div>
  );
}
