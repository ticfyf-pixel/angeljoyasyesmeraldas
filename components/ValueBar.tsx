const ITEMS = [
  {
    title: "Esmeraldas certificadas",
    text: "100% colombianas, seleccionadas por color, origen y carácter.",
    icon: GemIcon,
  },
  {
    title: "Artesanía hecha a mano",
    text: "Orfebres expertos. Cada pieza nace en el taller, no en serie.",
    icon: HandIcon,
  },
  {
    title: "Calidad garantizada",
    text: "Certificado de autenticidad con cada joya que sale de Ángel.",
    icon: ShieldIcon,
  },
  {
    title: "Empaque de lujo",
    text: "Caja, estuche firmado y el sello de alas cerca del corazón.",
    icon: GiftIcon,
  },
];

export function ValueBar() {
  return (
    <section className="bg-angel-700">
      <div className="mx-auto grid max-w-site gap-10 px-5 py-16 md:grid-cols-2 md:px-10 lg:grid-cols-4 lg:px-20">
        {ITEMS.map((item) => (
          <article key={item.title} className="text-center lg:text-left">
            <item.icon />
            <h3 className="mt-4 font-serif text-2xl text-cream">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-gold-300">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function GemIcon() {
  return (
    <svg className="mx-auto h-8 w-8 text-gold-500 lg:mx-0" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 4 L26 12 L16 28 L6 12 Z" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 12h20M11 12 16 28 21 12" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}
function HandIcon() {
  return (
    <svg className="mx-auto h-8 w-8 text-gold-500 lg:mx-0" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M10 18 V9.5a1.5 1.5 0 0 1 3 0V16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M13 16 V8.5a1.5 1.5 0 0 1 3 0V16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M16 16 V9a1.5 1.5 0 0 1 3 0v9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M19 18 V12a1.5 1.5 0 0 1 3 0v10c0 4-3 7-8 7h-1c-4 0-7-2.2-7-6.2V18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg className="mx-auto h-8 w-8 text-gold-500 lg:mx-0" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 4 26 8v8c0 6.5-4.2 11-10 13C10.2 27 6 22.5 6 16V8Z" stroke="currentColor" strokeWidth="1.3" />
      <path d="M12 16.5 15 19.5 21 13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
function GiftIcon() {
  return (
    <svg className="mx-auto h-8 w-8 text-gold-500 lg:mx-0" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="6" y="14" width="20" height="14" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 14h20V10H6zM16 10v18" stroke="currentColor" strokeWidth="1.3" />
      <path d="M16 10c-3-5-8-2-5 2M16 10c3-5 8-2 5 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
