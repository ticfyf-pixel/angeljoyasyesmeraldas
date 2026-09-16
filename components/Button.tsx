"use client";

import Link from "next/link";
import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

const base =
  "inline-flex items-center justify-center rounded-[2px] px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.14em] transition duration-300 disabled:cursor-not-allowed disabled:opacity-50";

const variants = {
  primary:
    "bg-gold-500 text-ink shadow-none hover:-translate-y-0.5 hover:bg-gold-300 hover:shadow-gold",
  secondary:
    "border border-gold-500 bg-transparent text-gold-500 hover:bg-gold-500/10",
  dark: "bg-ink text-cream hover:bg-angel-950",
};

type Props = {
  variant?: keyof typeof variants;
  href?: string;
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  href,
  className = "",
  children,
  onClick,
  ...rest
}: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const click = onClick as MouseEventHandler<HTMLElement> | undefined;
  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a href={href} className={cls} onClick={click} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} onClick={click}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
