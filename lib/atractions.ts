export interface Attraction {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  category: string;
  location: {
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  contact: {
    phone?: string;
    email?: string;
    website?: string;
  };
  visitorInfo: {
    hours: string;
    fees: string;
    accessibility: string;
    bestTimeToVisit: string;
    tips: string[];
  };
  amenities: string[];
  tags: string[];
  featured: boolean;
  rating: number;
}

// Sample data for attractions in Maunabo
const attractions: Attraction[] = [
  {
    id: "1",
    slug: "faro-punta-tuna",
    name: "Faro de Punta Tuna",
    shortDescription:
      "Histórico faro construido en 1892 que ofrece vistas panorámicas del Mar Caribe.",
    fullDescription: `El Faro de Punta Tuna es uno de los tesoros históricos de Maunabo. Construido en 1892 durante la época española, este faro ha guiado a los navegantes por más de un siglo.

Ubicado en lo alto de un acantilado, el faro ofrece vistas espectaculares del Mar Caribe y la costa sureste de Puerto Rico. Su arquitectura colonial española se mantiene bien preservada, con su característica torre blanca y cúpula roja.

El faro forma parte del Registro Nacional de Lugares Históricos y es administrado por el Departamento de Recursos Naturales y Ambientales de Puerto Rico. Los visitantes pueden explorar los alrededores del faro y disfrutar de la brisa marina mientras contemplan la belleza natural de la costa.`,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    category: "Histórico",
    location: {
      address: "Carr. PR-7758, Maunabo, PR 00707",
      coordinates: {
        lat: 18.0097,
        lng: -65.8858,
      },
    },
    contact: {
      phone: "(787) 861-1868",
      email: "turismo@maunabo.pr.gov",
      website: "https://www.maunabo.pr.gov/turismo/faro",
    },
    visitorInfo: {
      hours: "Miércoles a Domingo: 9:00 AM - 5:00 PM",
      fees: "Entrada gratuita",
      accessibility: "Acceso limitado para personas con movilidad reducida",
      bestTimeToVisit:
        "Temprano en la mañana o al atardecer para mejores vistas",
      tips: [
        "Lleve agua y protector solar",
        "Use calzado cómodo para caminar",
        "Lleve su cámara para capturar las vistas panorámicas",
      ],
    },
    amenities: ["Estacionamiento", "Área de picnic", "Miradores", "Senderos"],
    tags: ["faro", "histórico", "vistas", "mar caribe", "arquitectura"],
    featured: true,
    rating: 4.8,
  },
  {
    id: "2",
    slug: "playa-los-bohios",
    name: "Playa Los Bohíos",
    shortDescription:
      "Hermosa playa de arena dorada ideal para nadar, practicar surf y disfrutar del sol.",
    fullDescription: `Playa Los Bohíos es una de las joyas naturales de Maunabo. Con su extensa franja de arena dorada y aguas cristalinas de color turquesa, esta playa ofrece un escape perfecto para los amantes del sol y el mar.

La playa es conocida por sus olas moderadas que la hacen ideal tanto para nadadores como para surfistas principiantes. Su ubicación en una bahía protegida crea condiciones perfectas para diversas actividades acuáticas.

Los visitantes pueden disfrutar de áreas sombreadas por palmeras donde relajarse, así como zonas designadas para picnic. La playa cuenta con servicios básicos y es vigilada por salvavidas durante los fines de semana y temporada alta.

La belleza natural de Playa Los Bohíos la convierte en un destino popular tanto para locales como para turistas que buscan experimentar la auténtica costa caribeña de Puerto Rico.`,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    category: "Playa",
    location: {
      address: "Carr. PR-901, Maunabo, PR 00707",
      coordinates: {
        lat: 18.0072,
        lng: -65.9011,
      },
    },
    contact: {
      phone: "(787) 861-0825",
      email: "playas@maunabo.pr.gov",
    },
    visitorInfo: {
      hours: "Abierto todos los días: 6:00 AM - 6:00 PM",
      fees: "Entrada gratuita",
      accessibility: "Acceso a la playa con pasarelas",
      bestTimeToVisit: "Temprano en la mañana para evitar multitudes",
      tips: [
        "Lleve protector solar y sombrilla",
        "Traiga suficiente agua y refrigerios",
        "Respete las banderas de advertencia de los salvavidas",
      ],
    },
    amenities: [
      "Estacionamiento",
      "Baños",
      "Duchas",
      "Áreas de picnic",
      "Salvavidas (fines de semana)",
    ],
    tags: ["playa", "natación", "surf", "sol", "arena", "mar caribe"],
    featured: true,
    rating: 4.7,
  },
  {
    id: "3",
    slug: "reserva-natural-punta-tuna",
    name: "Reserva Natural Punta Tuna",
    shortDescription:
      "Área protegida con ecosistemas diversos, senderos naturales y oportunidades para observar aves.",
    fullDescription: `La Reserva Natural Punta Tuna es un tesoro ecológico que abarca aproximadamente 1,275 acres de diversos ecosistemas, incluyendo bosques costeros, manglares, humedales y áreas marinas protegidas.

Esta reserva es administrada por el Departamento de Recursos Naturales y Ambientales de Puerto Rico y representa uno de los esfuerzos de conservación más importantes en la costa sureste de la isla.

Los visitantes pueden explorar varios senderos interpretativos que atraviesan diferentes hábitats, ofreciendo oportunidades excepcionales para la observación de aves y la fotografía de naturaleza. La reserva alberga numerosas especies de aves, tanto residentes como migratorias, así como una variada flora nativa.

Además de su importancia ecológica, la reserva incluye áreas de playa donde, durante ciertas temporadas del año, las tortugas marinas llegan a anidar, convirtiendo este lugar en un sitio crucial para la conservación de estas especies amenazadas.

Los programas educativos y tours guiados están disponibles con reservación previa, permitiendo a los visitantes aprender sobre los esfuerzos de conservación y la biodiversidad única de esta área protegida.`,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    category: "Natural",
    location: {
      address: "Carr. PR-7757, Maunabo, PR 00707",
      coordinates: {
        lat: 18.0058,
        lng: -65.8875,
      },
    },
    contact: {
      phone: "(787) 861-1868",
      email: "reservas@drna.pr.gov",
      website: "https://www.drna.pr.gov/reservas/punta-tuna",
    },
    visitorInfo: {
      hours: "Martes a Domingo: 8:00 AM - 4:00 PM",
      fees: "Entrada: $3 adultos, $1 niños y personas mayores",
      accessibility: "Senderos principales accesibles para sillas de ruedas",
      bestTimeToVisit: "Temprano en la mañana para observación de aves",
      tips: [
        "Use repelente de insectos",
        "Lleve binoculares para observación de aves",
        "Manténgase en los senderos marcados",
        "No deje rastro - llévese su basura",
      ],
    },
    amenities: [
      "Centro de visitantes",
      "Senderos interpretativos",
      "Áreas de descanso",
      "Baños",
    ],
    tags: [
      "reserva natural",
      "ecoturismo",
      "observación de aves",
      "conservación",
      "senderismo",
    ],
    featured: true,
    rating: 4.6,
  },
  {
    id: "4",
    slug: "casa-cautiño",
    name: "Casa Cautiño",
    shortDescription:
      "Mansión histórica del siglo XIX que muestra la arquitectura y estilo de vida de la época colonial.",
    fullDescription: `La Casa Cautiño es una joya arquitectónica del siglo XIX ubicada en el centro histórico de Maunabo. Construida en 1887 para la acaudalada familia Cautiño, esta mansión representa uno de los mejores ejemplos de arquitectura colonial española en Puerto Rico.

La casa ha sido meticulosamente restaurada y convertida en un museo que permite a los visitantes experimentar el estilo de vida de la élite puertorriqueña durante la época colonial tardía. Sus habitaciones están decoradas con muebles originales de la época, obras de arte y artefactos históricos.

Los visitantes pueden admirar los detalles arquitectónicos como los techos altos con vigas de madera, los suelos de mosaico hidráulico importado, y los balcones de hierro forjado. El patio interior con su fuente central y vegetación tropical ofrece un remanso de paz en el corazón del edificio.

El museo ofrece visitas guiadas que explican la historia de la familia Cautiño, su importancia en el desarrollo económico de Maunabo, y las características arquitectónicas y artísticas de la mansión. También se realizan eventos culturales y exposiciones temporales que complementan la experiencia.`,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    category: "Histórico",
    location: {
      address: "Calle Principal #10, Maunabo, PR 00707",
      coordinates: {
        lat: 18.0072,
        lng: -65.8997,
      },
    },
    contact: {
      phone: "(787) 861-1225",
      email: "casacautiño@icpr.pr.gov",
      website: "https://www.icp.pr.gov/museos/casa-cautiño",
    },
    visitorInfo: {
      hours: "Martes a Sábado: 9:00 AM - 4:00 PM, Domingo: 10:00 AM - 3:00 PM",
      fees: "Entrada: $5 adultos, $3 estudiantes y personas mayores, Niños menores de 12 años: gratis",
      accessibility: "Primer piso accesible para sillas de ruedas",
      bestTimeToVisit: "Martes o miércoles para evitar grupos grandes",
      tips: [
        "Reserve un tour guiado con anticipación",
        "Pregunte por el folleto informativo en español o inglés",
        "Visite la tienda de regalos para souvenirs locales",
      ],
    },
    amenities: [
      "Visitas guiadas",
      "Tienda de regalos",
      "Baños",
      "Área de descanso",
    ],
    tags: ["museo", "histórico", "arquitectura", "colonial", "cultural"],
    featured: false,
    rating: 4.5,
  },
  {
    id: "5",
    slug: "mirador-punta-tuna",
    name: "Mirador de Punta Tuna",
    shortDescription:
      "Punto panorámico con vistas espectaculares del Mar Caribe y la costa sureste de Puerto Rico.",
    fullDescription: `El Mirador de Punta Tuna ofrece uno de los paisajes más impresionantes de la costa sureste de Puerto Rico. Ubicado en un punto elevado cerca del Faro de Punta Tuna, este mirador natural permite contemplar vistas panorámicas de 360 grados del Mar Caribe y las montañas circundantes.

Desde este privilegiado punto de observación, los visitantes pueden disfrutar de la inmensidad del océano, observar la línea costera de Maunabo y, en días claros, incluso divisar la isla de Vieques en el horizonte.

El mirador cuenta con una plataforma de observación acondicionada con bancas y paneles informativos que explican los puntos de interés visibles desde allí, así como información sobre la flora y fauna local.

Este lugar es particularmente popular durante el amanecer y el atardecer, cuando los colores del cielo se reflejan en el mar creando espectáculos visuales únicos. Los fotógrafos, tanto aficionados como profesionales, encuentran en este mirador un lugar ideal para capturar imágenes memorables.

El área alrededor del mirador también ofrece pequeños senderos que permiten explorar la vegetación costera y disfrutar de diferentes perspectivas del paisaje.`,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    category: "Natural",
    location: {
      address: "Carr. PR-7758 Km 2.5, Maunabo, PR 00707",
      coordinates: {
        lat: 18.0089,
        lng: -65.8867,
      },
    },
    contact: {
      phone: "(787) 861-0825",
      email: "turismo@maunabo.pr.gov",
    },
    visitorInfo: {
      hours: "Abierto todos los días: 6:00 AM - 6:00 PM",
      fees: "Entrada gratuita",
      accessibility: "Accesible para personas con movilidad reducida",
      bestTimeToVisit: "Amanecer o atardecer para mejores vistas y fotografías",
      tips: [
        "Lleve una cámara con buen zoom",
        "Use protector solar y sombrero",
        "Traiga binoculares para observar la costa y posibles avistamientos de vida marina",
      ],
    },
    amenities: [
      "Estacionamiento",
      "Bancas",
      "Paneles informativos",
      "Área de picnic",
    ],
    tags: ["mirador", "vistas", "fotografía", "paisaje", "atardecer"],
    featured: false,
    rating: 4.9,
  },
];

// Get all attractions
export function getAllAttractions() {
  return attractions;
}

// Get featured attractions
export function getFeaturedAttractions() {
  return attractions.filter((attraction) => attraction.featured);
}

// Get attraction by slug
export function getAttraction(lugar: string) {
  return attractions.find((attraction) => attraction.slug === lugar);
}

// Get all attraction slugs
export function getAllAttractionSlugs() {
  return attractions.map((attraction) => attraction.slug);
}

// Get related attractions (same category, excluding current)
export async function getRelatedAttractions(slug: string, limit = 3) {
  const current = getAttraction(slug);
  if (!current) return [];

  return attractions
    .filter(
      (attraction) =>
        attraction.slug !== slug && attraction.category === current.category
    )
    .slice(0, limit);
}

// Get attractions by category
export function getAttractionsByCategory(category: string) {
  return attractions.filter((attraction) => attraction.category === category);
}

// Get all categories
export function getAllCategories() {
  return [...new Set(attractions.map((attraction) => attraction.category))];
}

// Search attractions
export function searchAttractions(query: string) {
  const lowerQuery = query.toLowerCase();
  return attractions.filter(
    (attraction) =>
      attraction.name.toLowerCase().includes(lowerQuery) ||
      attraction.shortDescription.toLowerCase().includes(lowerQuery) ||
      attraction.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}
