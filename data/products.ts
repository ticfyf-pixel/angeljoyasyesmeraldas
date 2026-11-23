export const SITE = {
  url: "https://angeljoyasyesmeraldas.com",
  name: "Ángel Joyas & Esmeraldas",
  shortName: "ÁNGEL",
  slogan: "Lujo con alma, brillo con propósito",
  city: "Medellín, Colombia",
  address: "El Poblado, Medellín, Colombia",
  email: "angeljoyasyesmeraldas@gmail.com",
  phone: "+57 322 980 9754",
  whatsapp: "573229809754",
  hours: "Lunes a sábado · 10:00 a. m. – 7:00 p. m.",
  instagram: "https://www.instagram.com/angel_joyasyesmeraldas",
  facebook: "https://www.facebook.com/share/1JofX396xj/",
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
  video?: string;
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
      "https://images.unsplash.com/photo-1678245687839-231ed039a18b?auto=format&fit=crop&w=1400&q=80",
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
      "https://images.unsplash.com/photo-1678245687839-231ed039a18b?auto=format&fit=crop&w=1400&q=80",
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
      "https://images.unsplash.com/photo-1678245687839-231ed039a18b?auto=format&fit=crop&w=1400&q=80",
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
      "https://images.unsplash.com/photo-1678245687839-231ed039a18b?auto=format&fit=crop&w=1400&q=80",
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
      "https://images.unsplash.com/photo-1678245687839-231ed039a18b?auto=format&fit=crop&w=1400&q=80",
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
      "/images/productos/colgante-hamsa-detalle.jpg",
      "/images/productos/colgante-estrella-david-hamsa.jpg",
    ],
    description:
      "Estrella de David en oro 18K que enmarca una mano de Hamsa con una esmeralda colombiana en el centro. Un talismán de protección y buena fortuna, hecho pieza.",
    story:
      "Dos símbolos milenarios se cruzan en un solo trazo de oro: la estrella que multiplica la luz y la mano que la guarda. En el centro, la esmeralda que le da alma verde a la promesa.",
  },
  {
    id: "AJ-018",
    slug: "juego-esmeralda",
    name: "Juego Esmeralda",
    category: "collares",
    material: "Oro 18K",
    emerald: true,
    price: 0,
    featured: true,
    new: true,
    sizes: ["Única"],
    certificateId: "ANG-EM-018",
    related: ["anillo-sol", "collar-corazon", "anillo-halo"],
    images: ["/images/productos/juego-esmeralda.jpg"],
    video: "/videos/juego-esmeralda.mp4",
    description:
      "Conjunto en oro 18K: collar, aretes y anillo con esmeralda redonda y halo de brillantes. Se pide completo o por pieza.",
    story:
      "Tres piezas que nacen juntas. El halo repite la misma luz en el cuello, la oreja y la mano.",
  },
  {
    id: "AJ-019",
    slug: "anillo-sol",
    name: "Anillo Sol",
    category: "anillos",
    material: "Oro 18K",
    emerald: true,
    price: 0,
    featured: true,
    new: true,
    sizes: ["5", "6", "7", "8", "9"],
    certificateId: "ANG-EM-019",
    related: ["juego-esmeralda", "anillo-halo", "anillo-gota"],
    images: ["/images/productos/anillo-sol.jpg", "/images/productos/juego-esmeralda.jpg"],
    description:
      "Esmeralda redonda en oro 18K, rodeada por un halo de brillantes. También forma parte del Juego Esmeralda.",
    story:
      "Una pieza de todos los días: la piedra al centro y la luz alrededor, sin ocupar más de lo necesario.",
  },
  {
    id: "AJ-020",
    slug: "anillo-halo",
    name: "Anillo Halo",
    category: "anillos",
    material: "Oro 18K",
    emerald: true,
    price: 0,
    new: true,
    sizes: ["5", "6", "7", "8", "9"],
    certificateId: "ANG-EM-020",
    related: ["anillo-sol", "anillo-solitario", "collar-esmeralda"],
    images: ["/images/productos/anillo-halo.jpg"],
    description:
      "Esmeralda de talla esmeralda con halo de brillantes sobre una banda delgada de oro 18K.",
    story:
      "El corte recto deja ver el verde de frente. El halo lo enciende sin taparlo.",
  },
  {
    id: "AJ-021",
    slug: "anillo-gota",
    name: "Anillo Gota",
    category: "anillos",
    material: "Oro 18K",
    emerald: true,
    price: 0,
    new: true,
    sizes: ["5", "6", "7", "8", "9"],
    certificateId: "ANG-EM-021",
    related: ["collar-gota", "collar-doble-gota", "anillo-sol"],
    images: ["/images/productos/anillo-gota.jpg"],
    description:
      "Esmeralda en forma de gota, abrazada por brillantes, en una banda fina de oro 18K.",
    story:
      "La gota cae hacia la mano. Es una pieza para quien quiere el verde en movimiento.",
  },
  {
    id: "AJ-022",
    slug: "anillo-linea",
    name: "Anillo Línea",
    category: "anillos",
    material: "Oro 18K",
    emerald: true,
    price: 0,
    new: true,
    sizes: ["5", "6", "7", "8", "9"],
    certificateId: "ANG-EM-022",
    related: ["anillo-solitario", "collar-esmeralda", "collar-cruz"],
    images: ["/images/productos/anillo-linea.jpg"],
    description:
      "Esmeralda rectangular, montada en horizontal sobre una banda lisa de oro 18K.",
    story:
      "Casi nada entre la piedra y el dedo. El oro solo sostiene.",
  },
  {
    id: "AJ-023",
    slug: "anillo-solitario",
    name: "Anillo Solitario",
    category: "anillos",
    material: "Oro 18K",
    emerald: true,
    price: 0,
    new: true,
    sizes: ["5", "6", "7", "8", "9"],
    certificateId: "ANG-EM-023",
    related: ["anillo-linea", "anillo-halo", "collar-esmeralda"],
    images: ["/images/productos/anillo-solitario.jpg"],
    description:
      "Solitario de esmeralda de talla esmeralda, con cuatro garras en oro 18K.",
    story:
      "La piedra se mira sola. El resto de la banda se queda en silencio.",
  },
  {
    id: "AJ-024",
    slug: "collar-gota",
    name: "Collar Gota",
    category: "collares",
    material: "Oro 18K",
    emerald: true,
    price: 0,
    new: true,
    sizes: ["Única"],
    certificateId: "ANG-EM-024",
    related: ["collar-doble-gota", "anillo-gota", "collar-corazon"],
    images: ["/images/productos/collar-gota.jpg"],
    description:
      "Cadena de oro 18K con una esmeralda en gota y un brillante pequeño sobre el engaste.",
    story:
      "Una sola gota verde, sostenida para que la luz entre por arriba.",
  },
  {
    id: "AJ-025",
    slug: "collar-doble-esmeralda",
    name: "Collar Doble Esmeralda",
    category: "collares",
    material: "Oro 18K",
    emerald: true,
    price: 0,
    new: true,
    sizes: ["Única"],
    certificateId: "ANG-EM-025",
    related: ["collar-rombo", "collar-esmeralda", "collar-cruz"],
    images: ["/images/productos/collar-doble-esmeralda.jpg"],
    description:
      "Dos esmeraldas cuadradas en oro 18K, unidas por un aro. La de abajo es la pieza principal.",
    story:
      "El aro deja que la piedra grande se mueva. Arriba, una esmeralda más pequeña marca el inicio.",
  },
  {
    id: "AJ-026",
    slug: "collar-rombo",
    name: "Collar Rombo",
    category: "collares",
    material: "Oro 18K",
    emerald: true,
    price: 0,
    new: true,
    sizes: ["Única"],
    certificateId: "ANG-EM-026",
    related: ["collar-doble-esmeralda", "collar-corazon", "collar-cruz"],
    images: ["/images/productos/collar-rombo.jpg"],
    description:
      "Esmeralda redonda sobre una esmeralda en rombo, en cadena de oro 18K.",
    story:
      "Dos cortes, un solo verde. El rombo cuelga y la piedra de arriba lo presenta.",
  },
  {
    id: "AJ-027",
    slug: "collar-corazon",
    name: "Collar Corazón",
    category: "collares",
    material: "Oro 18K",
    emerald: true,
    price: 0,
    featured: true,
    new: true,
    sizes: ["Única"],
    certificateId: "ANG-EM-027",
    related: ["juego-esmeralda", "anillo-sol", "collar-gota"],
    images: ["/images/productos/collar-corazon.jpg"],
    description:
      "Esmeralda en forma de corazón con halo de brillantes, en cadena de oro 18K.",
    story:
      "Hecho para regalar. El corazón verde queda al centro y los brillantes lo enmarcan.",
  },
  {
    id: "AJ-028",
    slug: "collar-esmeralda",
    name: "Collar Esmeralda",
    category: "collares",
    material: "Oro 18K",
    emerald: true,
    price: 0,
    new: true,
    sizes: ["Única"],
    certificateId: "ANG-EM-028",
    related: ["anillo-solitario", "anillo-linea", "collar-hexagono"],
    images: ["/images/productos/collar-esmeralda.jpg"],
    description:
      "Esmeralda rectangular pequeña, en bisel de oro 18K, sobre cadena torcida.",
    story:
      "La pieza mínima de la casa: un verde solo, para usar cerca del cuello.",
  },
  {
    id: "AJ-029",
    slug: "collar-doble-gota",
    name: "Collar Doble Gota",
    category: "collares",
    material: "Oro 18K",
    emerald: true,
    price: 0,
    new: true,
    sizes: ["Única"],
    certificateId: "ANG-EM-029",
    related: ["collar-gota", "anillo-gota", "collar-corazon"],
    images: ["/images/productos/collar-doble-gota.jpg"],
    description:
      "Dos esmeraldas en gota, una sobre la otra, en oro 18K. La inferior es la más grande.",
    story:
      "La gota de arriba presenta. La de abajo sostiene el verde.",
  },
  {
    id: "AJ-030",
    slug: "collar-cruz",
    name: "Collar Cruz",
    category: "collares",
    material: "Oro 18K",
    emerald: true,
    price: 0,
    featured: true,
    new: true,
    sizes: ["Única"],
    certificateId: "ANG-EM-030",
    related: ["collar-esmeralda", "collar-rombo", "anillo-linea"],
    images: ["/images/productos/collar-cruz.jpg"],
    description:
      "Cruz de esmeraldas baguette en oro 18K, con cadena torcida.",
    story:
      "Cinco esmeraldas forman la cruz. El oro solo las une.",
  },
  {
    id: "AJ-031",
    slug: "collar-hexagono",
    name: "Collar Hexágono",
    category: "collares",
    material: "Oro 18K",
    emerald: true,
    price: 0,
    new: true,
    sizes: ["Única"],
    certificateId: "ANG-EM-031",
    related: ["collar-esmeralda", "colgante-hamsa", "collar-gota"],
    images: [
      "/images/productos/collar-hexagono-1.jpg",
      "/images/productos/collar-hexagono-2.jpg",
    ],
    description:
      "Esmeralda hexagonal en bisel de oro 18K. Se ve el jardín natural de la piedra.",
    story:
      "No es un verde parejo: es la piedra como salió. El hexágono la deja completa.",
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
