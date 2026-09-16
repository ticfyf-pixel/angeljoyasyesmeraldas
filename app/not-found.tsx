import Link from "next/link";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-angel-950 px-5 text-center">
      <p className="font-serif text-6xl text-gold-500">404</p>
      <h1 className="mt-4 font-serif text-3xl text-cream">Esta pieza no está aquí</h1>
      <p className="mt-3 max-w-md text-sm text-gold-300">
        El brillo se movió de lugar. Vuelve al inicio o recorre la colección.
      </p>
      <div className="mt-8 flex gap-3">
        <Button href="/">Inicio</Button>
        <Button href="/coleccion" variant="secondary">
          Colección
        </Button>
      </div>
      <Link href="/contacto" className="mt-6 text-[11px] uppercase tracking-nav text-gold-500">
        Contacto
      </Link>
    </div>
  );
}
