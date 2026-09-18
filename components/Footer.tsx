import Link from "next/link";
import { SITE } from "@/data/products";
import { WingsHeart } from "./Logo";

export function Footer() {
  return (
    <footer className="texture-dark bg-ink text-cream">
      <div className="gold-line" />
      <div className="mx-auto grid max-w-site gap-12 px-5 py-16 md:grid-cols-2 md:px-10 lg:grid-cols-5 lg:px-20">
        <div className="lg:col-span-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.jpg"
            alt="Ángel Joyas & Esmeraldas"
            className="h-28 w-28 rounded-sm object-cover"
          />
          <p className="mt-5 font-serif text-2xl tracking-[0.2em]">ÁNGEL</p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-gold-500">
            Joyas & Esmeraldas
          </p>
          <p className="mt-4 max-w-sm font-serif text-lg italic text-gold-300">
            “{SITE.slogan}”
          </p>
          <WingsHeart className="mt-6 h-6 w-20" />
        </div>

        <div>
          <h3 className="text-[11px] uppercase tracking-nav text-gold-500">Colección</h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li><Link href="/coleccion/anillos">Anillos</Link></li>
            <li><Link href="/coleccion/aretes">Aretes</Link></li>
            <li><Link href="/coleccion/collares">Collares</Link></li>
            <li><Link href="/coleccion/pulseras">Pulseras</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-[11px] uppercase tracking-nav text-gold-500">Nosotros</h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li><Link href="/nuestra-historia">Historia</Link></li>
            <li><Link href="/esmeraldas">Esmeraldas</Link></li>
            <li><Link href="/certificado/ANG-EM-001">Certificado de autenticidad</Link></li>
            <li><Link href="/club-angel">Club Ángel</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-[11px] uppercase tracking-nav text-gold-500">Ayuda</h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li><Link href="/contacto">Contacto</Link></li>
            <li><Link href="/legal/devoluciones">Envíos y devoluciones</Link></li>
            <li><Link href="/legal/terminos">Términos</Link></li>
            <li>
              <p className="mt-6 text-[11px] uppercase tracking-nav text-gold-500">Síguenos</p>
              <div className="mt-3 flex flex-col gap-2">
                <a href={SITE.instagram} target="_blank" rel="noreferrer">Instagram</a>
                <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="gold-line" />
      <div className="mx-auto flex max-w-site flex-col gap-3 px-5 py-6 text-[11px] uppercase tracking-[0.12em] text-cream/60 md:flex-row md:items-center md:justify-between md:px-10 lg:px-20">
        <p>© 2026 Ángel Joyas & Esmeraldas — Todos los derechos reservados</p>
        <p className="flex gap-4">
          <Link href="/legal/terminos">Términos</Link>
          <Link href="/legal/privacidad">Privacidad</Link>
          <Link href="/legal/devoluciones">Devoluciones</Link>
        </p>
      </div>
    </footer>
  );
}
