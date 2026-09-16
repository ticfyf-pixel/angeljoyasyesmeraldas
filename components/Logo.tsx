import Link from "next/link";

type Variant = "mark" | "word" | "full" | "lockup";

export function Monogram({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 140"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <defs>
        <linearGradient id="goldA" x1="10" y1="130" x2="110" y2="10">
          <stop offset="0%" stopColor="#C9A66B" />
          <stop offset="55%" stopColor="#F3E0B0" />
          <stop offset="100%" stopColor="#E8C989" />
        </linearGradient>
      </defs>
      <path
        d="M22 118 C18 92 20 64 42 38 C58 18 72 14 78 28 C82 38 74 48 62 58 C86 42 104 38 108 52 C112 68 88 78 70 84 C92 86 104 98 96 112 C86 128 58 118 48 104 C40 114 32 122 22 118 Z"
        fill="url(#goldA)"
      />
      <path
        d="M54 20 L92 118"
        stroke="url(#goldA)"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WingsHeart({ className = "w-16 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 28" className={className} aria-hidden="true" fill="none">
      <path
        d="M60 18 C58 14 54 12 52 15 C50 18 54 22 60 26 C66 22 70 18 68 15 C66 12 62 14 60 18 Z"
        stroke="#C9A66B"
        strokeWidth="1.2"
      />
      <path
        d="M48 16 C36 8 18 10 12 16 C22 14 34 18 48 22"
        stroke="#C9A66B"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M72 16 C84 8 102 10 108 16 C98 14 86 18 72 22"
        stroke="#C9A66B"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({
  variant = "lockup",
  href = "/",
  className = "",
}: {
  variant?: Variant;
  href?: string;
  className?: string;
}) {
  const content = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {variant !== "word" && (
        <span className="relative h-12 w-12 overflow-hidden rounded-sm md:h-14 md:w-14">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.jpg"
            alt=""
            className="h-full w-full scale-150 object-cover object-[center_38%]"
          />
        </span>
      )}
      {variant !== "mark" && (
        <span className="flex flex-col">
          <span className="font-serif text-lg tracking-[0.32em] text-gold-300 md:text-xl">
            ÁNGEL
          </span>
          {(variant === "full" || variant === "lockup") && (
            <span className="mt-0.5 text-[9px] uppercase tracking-[0.22em] text-gold-500/80">
              Joyas & Esmeraldas
            </span>
          )}
        </span>
      )}
    </span>
  );

  if (!href) return content;
  return (
    <Link href={href} aria-label="Ángel Joyas & Esmeraldas — Inicio" className="shrink-0">
      {content}
    </Link>
  );
}
