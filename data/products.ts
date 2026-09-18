export const SITE = {
  name: "Ángel Joyas & Esmeraldas",
  shortName: "ÁNGEL",
  slogan: "Lujo con alma, brillo con propósito",
  city: "Medellín, Colombia",
  address: "El Poblado, Medellín, Colombia",
  email: "hola@angeljoyas.com",
  phone: "+57 304 555 0188",
  whatsapp: "573045550188",
  hours: "Lunes a sábado · 10:00 a. m. – 7:00 p. m.",
};

export type Category = "anillos" | "aretes" | "collares" | "pulseras";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: Category;
  material: string;
  emerald: boolean;
  carats?: string;
  price: number;
  description: string;
  story: string;
  sizes: string[];
  images: string[];
  certificateId: string;
  related: string[];
  featured?: boolean;
  new?: boolean;
  /** false = sin foto real todavia; se oculta de Coleccion, destacados y relacionados */
  active?: boolean;
};

export const CATEGORIES: { slug: Category; label: string }[] = [
  { slug: "anillos", label: "Anillos" },
  { slug: "aretes", label: "Aretes" },
  { slug: "collares", label: "Collares" },
  { slug: "pulseras", label: "Pulseras" },
];

export const PRODUCTS: Product[] = [
  {
    id: "AJ-001",
    slug: "anillo-angel",
    name: "Anillo Ángel",
    category: "anillos",
    material: "Oro 18K",
    emerald: true,
    carats: "1.20 ct",
    price: 4890000,
    featured: true,
    new: true,
    sizes: ["5", "6", "7", "8", "9"],
    certificateId: "ANG-EM-001",
    related: ["anillo-legado", "collar-eterno", "aretes-ala"],
    images: ["/images/productos/anillo-esmeralda-halo-2.jpg"],
    description:
      "Una esmeralda colombiana de talla octogonal, abrazada por un halo de oro 18K. Pieza firma de la casa: serena, luminosa y hecha para durar generaciones.",
    story:
      "Nace del trazo del monograma Ángel. El engaste invisible deja que la piedra respire, como si el verde hubiera encontrado su propio cielo.",
  },
  {
    id: "AJ-002",
    slug: "anillo-legado",
    name: "Anillo Legado",
    category: "anillos",
    material: "Oro 18K",
    emerald: true,
    carats: "0.85 ct",
    price: 5450000,
    featured: true,
    sizes: ["5", "6", "7", "8", "9", "10"],
    certificateId: "ANG-EM-002",
    related: ["anillo-angel", "anillo-eterno", "pulsera-origen"],
    images: ["/images/productos/anillo-esmeralda-halo-1.jpg"],
    description:
      "Solitario de esmeralda con garras finas en oro amarillo. Un clásico de compromiso con el alma de la orfebrería medellinense.",
    story:
      "Pensado para heredar. Cada garras se pule a mano para que la piedra se sostenga con firmeza y sin ruido.",
  },
  {
    id: "AJ-003",
    slug: "anillo-serafin",
    name: "Anillo Serafín",
    category: "anillos",
    material: "Oro 18K",
    emerald: false,
    price: 3920000,
    active: false,
    sizes: ["5", "6", "7", "8", "9"],
    certificateId: "ANG-OR-003",
    related: ["anillo-angel", "aretes-luz", "collar-angel"],
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "Banda esculpida con alas estilizadas en oro 18K. Un homenaje silencioso al sello de la marca.",
    story:
      "El relieve de las alas se trabaja a cincel. No hay dos anillos idénticos: el pulido final lo decide la mano del orfebre.",
  },
  {
    id: "AJ-004",
    slug: "anillo-eterno",
    name: "Anillo Eterno",
    category: "anillos",
    material: "Oro 18K",
    emerald: true,
    carats: "2.00 ct",
    price: 8750000,
    new: true,
    active: false,
    sizes: ["6", "7", "8", "9"],
    certificateId: "ANG-EM-004",
    related: ["collar-muzo", "anillo-legado", "aretes-muse"],
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1573408301185-91476d153f1e?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "Esmeralda de 2 quilates en talla cojín, con pavé de diamantes champagne. Una pieza de alta joyería para ocasiones que marcan un antes y un después.",
    story:
      "La piedra se eligió por su jardín interno: inclusiones que cuentan el origen, no un defecto. Así entendemos la autenticidad.",
  },
  {
    id: "AJ-005",
    slug: "aretes-ala",
    name: "Aretes Ala",
    category: "aretes",
    material: "Oro 18K",
    emerald: true,
    carats: "0.60 ct c/u",
    price: 3250000,
    featured: true,
    sizes: ["Única"],
    certificateId: "ANG-EM-005",
    related: ["aretes-muse", "collar-eterno", "anillo-angel"],
    images: [
      "/images/productos/aretes-esmeralda-seda.jpg",
      "/images/productos/aretes-esmeralda-caja.jpg",
      "/images/productos/aretes-esmeralda-puesto.jpg",
    ],
    description:
      "Gotas de esmeralda suspendidas en un trazo de oro que recuerda las alas del sello Ángel.",
    story:
      "Ligeros al oído, intensos a la luz. Diseñados para el movimiento de quien los lleva.",
  },
  {
    id: "AJ-006",
    slug: "aretes-luz",
    name: "Aretes Luz",
    category: "aretes",
    material: "Oro 18K",
    emerald: false,
    price: 2180000,
    active: false,
    sizes: ["Única"],
    certificateId: "ANG-OR-006",
    related: ["aretes-ala", "collar-halo", "pulsera-fe"],
    images: [
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "Botones de oro pulido con un corazón miniatura en relieve. El detalle que solo se ve de cerca.",
    story:
      "Una pieza cotidiana con alma de reliquia. El brillo del oro champán cambia con la hora del día.",
  },
  {
    id: "AJ-007",
    slug: "aretes-muse",
    name: "Aretes Muse",
    category: "aretes",
    material: "Oro 18K",
    emerald: true,
    carats: "1.10 ct c/u",
    price: 4120000,
    new: true,
    active: false,
    sizes: ["Única"],
    certificateId: "ANG-EM-007",
    related: ["aretes-ala", "collar-muzo", "anillo-eterno"],
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1573408301185-91476d153f1e?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "Esmeraldas en talla pera, engastadas en oro satinado. Presencia serena, proporcional al rostro.",
    story:
      "Cada par se equilibra a mano. El peso, el color y el corte se eligen para que dialoguen entre sí.",
  },
  {
    id: "AJ-008",
    slug: "collar-eterno",
    name: "Collar Eterno",
    category: "collares",
    material: "Oro 18K",
    emerald: true,
    carats: "3.00 ct",
    price: 6780000,
    featured: true,
    sizes: ["40 cm", "45 cm", "50 cm"],
    certificateId: "ANG-EM-008",
    related: ["collar-muzo", "anillo-angel", "aretes-ala"],
    images: ["/images/productos/colgante-esmeralda-pera.jpg"],
    description:
      "Cadena veneciana en oro 18K y un colgante de esmeralda colombiana de tres quilates. El centro de una colección.",
    story:
      "El cierre invisible guarda un corazón alado grabado: el sello que acompaña cada pieza que sale del taller.",
  },
  {
    id: "AJ-009",
    slug: "collar-angel",
    name: "Collar Ángel",
    category: "collares",
    material: "Oro 18K",
    emerald: false,
    price: 2890000,
    active: false,
    sizes: ["40 cm", "45 cm"],
    certificateId: "ANG-OR-009",
    related: ["collar-halo", "aretes-luz", "pulsera-alada"],
    images: [
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "Colgante del monograma Ángel en oro champán, sobre cadena fina. La firma de la casa, cerca del corazón.",
    story:
      "Un talismán cotidiano. El trazo de la A se funde a cera perdida y se pule hasta el silencio.",
  },
  {
    id: "AJ-010",
    slug: "collar-muzo",
    name: "Collar Muzo",
    category: "collares",
    material: "Oro 18K",
    emerald: true,
    carats: "4.20 ct",
    price: 9200000,
    active: false,
    sizes: ["42 cm", "45 cm"],
    certificateId: "ANG-EM-010",
    related: ["collar-eterno", "anillo-eterno", "pulsera-tennis"],
    images: [
      "https://images.unsplash.com/photo-1573408301185-91476d153f1e?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "Homenaje al origen. Una esmeralda de jardín profundo, seleccionada por color y transparencia, montada como un relicario moderno.",
    story:
      "No afirmamos minas que no podamos documentar. Sí afirmamos el proceso: cada piedra pasa por certificación y por el ojo del taller.",
  },
  {
    id: "AJ-011",
    slug: "collar-halo",
    name: "Collar Halo",
    category: "collares",
    material: "Oro 18K",
    emerald: false,
    price: 1950000,
    active: false,
    sizes: ["40 cm", "45 cm", "50 cm"],
    certificateId: "ANG-OR-011",
    related: ["collar-angel", "pulsera-fe", "aretes-luz"],
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "Cadena de oro 18K de eslabón redondo, peso generoso y caída precisa. El fundamento de un guardarropa de lujo.",
    story:
      "A veces el brillo no necesita piedra. Solo oro bien templado y una proporción que se siente en el cuello.",
  },
  {
    id: "AJ-012",
    slug: "pulsera-alada",
    name: "Pulsera Alada",
    category: "pulseras",
    material: "Oro 18K",
    emerald: false,
    price: 2990000,
    featured: true,
    active: false,
    sizes: ["16 cm", "17 cm", "18 cm", "19 cm"],
    certificateId: "ANG-OR-012",
    related: ["pulsera-fe", "collar-angel", "anillo-serafin"],
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "Brazalete rígido con el motivo de alas abierto sobre la muñeca. Un gesto de oro que no pide permiso.",
    story:
      "El interior está grabado con el slogan de la casa. Un secreto entre la piel y el metal.",
  },
  {
    id: "AJ-013",
    slug: "pulsera-tennis",
    name: "Pulsera Tennis",
    category: "pulseras",
    material: "Oro 18K",
    emerald: true,
    carats: "5.80 ct total",
    price: 7500000,
    active: false,
    sizes: ["16.5 cm", "17.5 cm", "18.5 cm"],
    certificateId: "ANG-EM-013",
    related: ["pulsera-origen", "collar-muzo", "aretes-muse"],
    images: [
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1573408301185-91476d153f1e?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "Línea continua de esmeraldas calibradas. Un río de verde sobre la muñeca, con cierre de seguridad doble.",
    story:
      "Calibrar el color de decenas de piedras es un oficio paciente. Esta pulsera es ese oficio, hecho visible.",
  },
  {
    id: "AJ-014",
    slug: "pulsera-fe",
    name: "Pulsera Fe",
    category: "pulseras",
    material: "Oro 18K",
    emerald: false,
    price: 1680000,
    active: false,
    sizes: ["16 cm", "17 cm", "18 cm"],
    certificateId: "ANG-OR-014",
    related: ["pulsera-alada", "collar-halo", "aretes-luz"],
    images: [
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "Cadena de oro con charms de corazón alado. Delicada, íntima, hecha para llevar todos los días.",
    story:
      "Cada charm se suelda a mano. El corazón no es un adorno: es el sello que viaja con quien lo elige.",
  },
  {
    id: "AJ-015",
    slug: "pulsera-origen",
    name: "Pulsera Origen",
    category: "pulseras",
    material: "Oro 18K",
    emerald: true,
    carats: "1.40 ct",
    price: 4350000,
    active: false,
    sizes: ["16 cm", "17 cm", "18 cm", "19 cm"],
    certificateId: "ANG-EM-015",
    related: ["pulsera-tennis", "anillo-legado", "collar-eterno"],
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1573408301185-91476d153f1e?auto=format&fit=crop&w=1400&q=80",
    ],
    description:
      "Eslabones de oro y una esmeralda central en bisel. Equilibrio entre fuerza y ternura.",
    story:
      "Inspirada en las primeras piezas del taller: oro que se siente, piedra que se mira de frente.",
  },
  {
    id: "AJ-016",
    slug: "anillo-jardin",
    name: "Anillo Jardín",
    category: "anillos",
    material: "Oro 18K",
    emerald: true,
    carats: "1.55 ct",
    price: 6120000,
    sizes: ["5", "6", "7", "8", "9"],
    certificateId: "ANG-EM-016",
    related: ["anillo-angel", "aretes-muse", "collar-muzo"],
    images: ["/images/productos/anillo-esmeralda-banda.jpg"],
    description:
      "Esmeralda con jardín visible, celebrado y no oculto. Un anillo para quien entiende que la autenticidad tiene textura.",
    story:
      "En Ángel no escondemos el origen de la piedra. El jardín es memoria de la tierra colombiana.",
  },
  {
    id: "AJ-017",
    slug: "colgante-hamsa",
    name: "Colgante Hamsa",
    category: "collares",
    material: "Oro 18K",
    emerald: true,
    carats: "0.15 ct",
    price: 3450000,
    new: true,
    sizes: ["Única"],
    certificateId: "ANG-EM-017",
    related: ["collar-eterno", "collar-muzo", "pulsera-origen"],
    images: [
      "/images/productos/colgante-estrella-david-hamsa.jpg",
    ],
    description:
      "Estrella de David en oro 18K que enmarca una mano de Hamsa con una esmeralda colombiana en el centro. Un talismán de protección y buena fortuna, hecho pieza.",
    story:
      "Dos símbolos milenarios se cruzan en un solo trazo de oro: la estrella que multiplica la luz y la mano que la guarda. En el centro, la esmeralda que le da alma verde a la promesa.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Mariana Restrepo",
    city: "Medellín",
    initials: "MR",
    quote: "El anillo llegó como una carta: envuelto, firmado y con un brillo que se siente propio.",
    rating: 5,
  },
  {
    name: "Camila Duarte",
    city: "Bogotá",
    initials: "CD",
    quote: "Me asesoraron con calma. La esmeralda tiene alma, no parece una piedra de catálogo.",
    rating: 5,
  },
  {
    name: "Andrés Molina",
    city: "Cali",
    initials: "AM",
    quote: "Pedí el collar para un aniversario. El certificado y el empaque dijeron tanto como la joya.",
    rating: 5,
  },
  {
    name: "Elena Vargas",
    city: "Cartagena",
    initials: "EV",
    quote: "Lujo sereno. Cada detalle —desde la caja hasta el grabado— tiene propósito.",
    rating: 5,
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getActiveProducts() {
  return PRODUCTS.filter((p) => p.active !== false);
}

export function getFeatured() {
  return getActiveProducts()
    .filter((p) => p.featured)
    .slice(0, 5);
}

export function getRelated(product: Product) {
  return product.related
    .map((slug) => getProduct(slug))
    .filter((p): p is Product => p != null && p.active !== false);
}
