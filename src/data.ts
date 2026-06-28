import { Product, Category, FAQItem, ServiceItem } from "./types";

export const CATEGORIES: Category[] = [
  { id: "aceite-vehiculos", name: "Aceite de Vehículos", iconName: "Car" },
  { id: "aceites-pesados", name: "Aceites Pesados", iconName: "Truck" },
  { id: "fluido-transmision", name: "Fluido de Transmisión", iconName: "Activity" },
  { id: "aceite-moto", name: "Aceite de Moto", iconName: "Bike" },
  { id: "grasa", name: "Grasa", iconName: "Database" },
  { id: "aceite-industrial", name: "Aceite Industrial", iconName: "Cpu" },
  { id: "antifriz-anticongelante", name: "Antifriz / Anticongelante", iconName: "Droplet" },
  { id: "urea", name: "Urea", iconName: "ShieldAlert" },
  { id: "auxiliares", name: "Auxiliares", iconName: "Wrench" }
];

export const PRODUCTS: Product[] = [
  // Category: Aceite de vehículos
  {
    id: "PK-AV-101",
    name: "PEAK Full Synthetic 5W-30",
    categoryId: "aceite-vehiculos",
    description: "Lubricante 100% sintético diseñado para ofrecer el máximo rendimiento en motores nafteros y diésel modernos, optimizando el consumo de combustible.",
    highlighted: true,
    specs: [
      { label: "Viscosidad", value: "5W-30" },
      { label: "Base", value: "100% Sintético" },
      { label: "Normativa", value: "API SP / ACEA A3/B4" },
      { label: "Presentación", value: "1 Litro / 4 Litros" }
    ],
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "PK-AV-102",
    name: "PEAK High Mileage 10W-40",
    categoryId: "aceite-vehiculos",
    description: "Fórmula avanzada con acondicionadores de sellos que reducen el consumo de aceite y previenen fugas en vehículos con más de 100,000 km.",
    highlighted: false,
    specs: [
      { label: "Viscosidad", value: "10W-40" },
      { label: "Base", value: "Semi-Sintético" },
      { label: "Normativa", value: "API SN" },
      { label: "Presentación", value: "4 Litros" }
    ],
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=400"
  },
  // Category: Aceites pesados
  {
    id: "PK-AP-201",
    name: "PEAK Commercial Fleet 15W-40",
    categoryId: "aceites-pesados",
    description: "Aceite premium de alto rendimiento para motores diésel de servicio pesado de flotas de transporte, maquinaria agrícola y vial.",
    highlighted: true,
    specs: [
      { label: "Viscosidad", value: "15W-40" },
      { label: "Base", value: "Mineral Premium" },
      { label: "Normativa", value: "API CK-4 / CJ-4" },
      { label: "Presentación", value: "20 Litros / Tambor" }
    ],
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=400"
  },
  // Category: Fluido de transmisión
  {
    id: "PK-FT-301",
    name: "PEAK Full Synthetic Multi-Vehicle ATF",
    categoryId: "fluido-transmision",
    description: "Fluido universal sintético de transmisión automática de máxima estabilidad térmica para un cambio de marchas suave y sin fricción.",
    highlighted: true,
    specs: [
      { label: "Tipo", value: "Automática (ATF)" },
      { label: "Base", value: "Sintético" },
      { label: "Normativa", value: "Dexron VI / Mercon LV" },
      { label: "Presentación", value: "1 Litro" }
    ],
    image: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "PK-FT-302",
    name: "PEAK Gear Oil SAE 80W-90",
    categoryId: "fluido-transmision",
    description: "Lubricante de extrema presión para engranajes hipoidales y transmisiones manuales sometidas a cargas severas.",
    highlighted: false,
    specs: [
      { label: "Viscosidad", value: "80W-90" },
      { label: "Base", value: "Mineral EP" },
      { label: "Normativa", value: "API GL-5" },
      { label: "Presentación", value: "1 Litro" }
    ],
    image: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=400"
  },
  // Category: Aceite de moto
  {
    id: "PK-AM-401",
    name: "PEAK Moto 4T 10W-40 Synthetic",
    categoryId: "aceite-moto",
    description: "Lubricante sintético de alto desempeño para motocicletas de 4 tiempos. Ofrece excelente fricción para un acople perfecto de embrague húmedo.",
    highlighted: true,
    specs: [
      { label: "Viscosidad", value: "10W-40" },
      { label: "Motores", value: "4 Tiempos" },
      { label: "Normativa", value: "JASO MA2 / API SL" },
      { label: "Presentación", value: "1 Litro" }
    ],
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=400"
  },
  // Category: Grasa
  {
    id: "PK-GR-501",
    name: "PEAK Blue Tac EP-2 Grease",
    categoryId: "grasa",
    description: "Grasa de complejo de litio premium, color azul, de altísima adherencia, ideal para rodamientos en condiciones de alta humedad y carga pesada.",
    highlighted: true,
    specs: [
      { label: "Grado NLGI", value: "Grado 2" },
      { label: "Base Jabón", value: "Complejo de Litio" },
      { label: "Color", value: "Azul Cobalto" },
      { label: "Presentación", value: "Cartucho / Pote 1Kg" }
    ],
    image: "https://images.unsplash.com/photo-1530047625168-4b29bf846e45?auto=format&fit=crop&q=80&w=400"
  },
  // Category: Aceite industrial
  {
    id: "PK-AI-601",
    name: "PEAK AW Hydraulic Fluid 68",
    categoryId: "aceite-industrial",
    description: "Aceite hidráulico mineral con aditivos anti-desgaste Premium para transmisiones hidrostáticas, bombas de engranajes y paletas.",
    highlighted: false,
    specs: [
      { label: "Grado ISO", value: "ISO VG 68" },
      { label: "Propiedad", value: "Anti-desgaste (AW)" },
      { label: "Estabilidad", value: "Excelente frente al agua" },
      { label: "Presentación", value: "Tambor 208L" }
    ],
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400"
  },
  // Category: Antifriz / Anticongelante
  {
    id: "PK-AA-701",
    name: "PEAK Global Life Lifetime 50/50",
    categoryId: "antifriz-anticongelante",
    description: "Anticongelante y refrigerante de por vida, formulado con tecnología de ácidos orgánicos (OAT) compatible con todos los vehículos del mercado.",
    highlighted: true,
    specs: [
      { label: "Fórmula", value: "Listo para usar 50/50" },
      { label: "Tecnología", value: "OAT (Vida Extendida)" },
      { label: "Compatibilidad", value: "Universal" },
      { label: "Presentación", value: "1 Galón (3.78L)" }
    ],
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400"
  },
  // Category: Urea
  {
    id: "PK-UR-801",
    name: "PEAK BlueDEF Diesel Exhaust Fluid",
    categoryId: "urea",
    description: "Urea automotriz de máxima pureza para sistemas SCR diésel. Reduce las emisiones de gases nocivos cumpliendo los estándares ambientales Euro 5 y 6.",
    highlighted: false,
    specs: [
      { label: "Pureza", value: "32.5% Urea de alta calidad" },
      { label: "Normativa", value: "ISO 22241 / API Certified" },
      { label: "Uso", value: "Sistemas de escape SCR" },
      { label: "Presentación", value: "9.5 Litros / Granel" }
    ],
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=400"
  },
  // Category: Auxiliares
  {
    id: "PK-AX-901",
    name: "PEAK Brake Fluid DOT 4",
    categoryId: "auxiliares",
    description: "Fluido de frenos sintético de alto punto de ebullición para sistemas de frenos de disco y tambor de vehículos ligeros y pesados.",
    highlighted: false,
    specs: [
      { label: "Grado", value: "DOT 4" },
      { label: "Punto Ebullición", value: "260 °C (Mínimo)" },
      { label: "Estabilidad", value: "Excelente contra la corrosión" },
      { label: "Presentación", value: "500 ml" }
    ],
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=400"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Distribución y Logística Propia",
    description: "Despachamos de forma inmediata en toda Zona Sur y alrededores. Entregas programadas y de urgencia con flota climatizada para resguardo de la integridad química.",
    iconName: "Truck"
  },
  {
    title: "Asesoramiento Técnico Oficial",
    description: "Te guiamos en la selección óptima del producto según normativas de fabricantes internacionales (API, ACEA, JASO, ISO), protegiendo tus motores e instalaciones.",
    iconName: "FileSpreadsheet"
  },
  {
    title: "Stock Permanente Garantizado",
    description: "Mantenemos volumen constante de las 9 categorías críticas para abastecer a lubricentros, talleres, flotas comerciales, industrias y revendedores sin quiebres.",
    iconName: "Layers"
  },
  {
    title: "Comercialización Flexible",
    description: "Planes corporativos adaptados al tamaño de tu flota, opciones de financiación sin interés y ofertas personalizadas por volumen de compra.",
    iconName: "Coins"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "¿Son distribuidores oficiales certificados de PEAK?",
    answer: "Sí, todos nuestros lubricantes, grasas, anticongelantes y fluidos son importados y distribuidos de manera oficial, garantizando la autenticidad y los más altos estándares de calidad de fábrica."
  },
  {
    question: "¿Cuál es el área de cobertura para las entregas?",
    answer: "Nuestra base operativa se encuentra en Zona Sur, con cobertura de entrega directa en Avellaneda, Lanús, Lomas de Zamora, Quilmes, Berazategui, Almirante Brown, Esteban Echeverría y Ezeiza. Para otras zonas, coordinamos envíos especiales."
  },
  {
    question: "¿Existe una compra mínima para despachos a domicilio?",
    answer: "Para comercios, lubricentros y talleres en nuestra zona de influencia habitual, realizamos envíos programados sin costo. Consultá con tu asesor los montos mínimos vigentes para despachos rápidos."
  },
  {
    question: "¿Qué formas de pago aceptan?",
    answer: "Aceptamos transferencias bancarias, efectivo, tarjetas de débito/crédito con promociones bancarias y cheques electrónicos bajo acuerdo comercial previo."
  },
  {
    question: "¿Cómo puedo solicitar cotizaciones por tambor o volumen industrial?",
    answer: "Podés utilizar nuestro formulario de contacto rápido o escribirnos directo al botón de WhatsApp. Uno de nuestros asesores comerciales corporativos te enviará una propuesta personalizada en minutos."
  }
];

export const COVERAGE_ZONES = [
  { name: "Avellaneda", status: "Entrega Diaria" },
  { name: "Lanús", status: "Entrega Diaria" },
  { name: "Lomas de Zamora", status: "Entrega Diaria" },
  { name: "Adrogué / Alte. Brown", status: "Frecuencia Semanal" },
  { name: "Quilmes / Bernal", status: "Entrega Diaria" },
  { name: "Ezeiza / Canning", status: "Frecuencia Semanal" }
];
