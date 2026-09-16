import { Newsletter } from "@/components/Newsletter";
import { Button } from "@/components/Button";

export const metadata = {
  title: "Club Ángel",
  description:
    "Programa VIP de Ángel Joyas: acceso anticipado, asesoría personal y regalo de bienvenida.",
};

export default function ClubPage() {
  return (
    <div className="bg-angel-950">
      <div className="mx-auto max-w-site px-5 pb-8 pt-36 text-center md:px-10">
        <p className="text-[11px] uppercase tracking-[0.32em] text-gold-300">Círculo privado</p>
        <h1 className="mt-4 font-serif text-4xl tracking-[0.18em] text-cream md:text-6xl">
          CLUB ÁNGEL
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gold-300">
          Un espacio para quienes coleccionan con calma. Acceso anticipado a ediciones, citas de asesoría y un obsequio de bienvenida cuando tu primera pieza llega a casa.
        </p>
        <div className="mt-10 flex justify-center">
          <Button href="/coleccion" variant="secondary">
            Ver colección
          </Button>
        </div>
      </div>
      <Newsletter />
    </div>
  );
}
