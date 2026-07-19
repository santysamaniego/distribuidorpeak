import { Product, Category, FAQItem, ServiceItem } from "./types";

export const CATEGORIES: Category[] = [
  { id: "aceite-vehiculos", name: "Aceite de Vehículos", iconName: "Car" },
  { id: "aceites-pesados", name: "Aceites Pesados", iconName: "Truck" },
  { id: "fluido-transmision", name: "Fluido de Transmisión", iconName: "Activity" },
  { id: "aceite-moto", name: "Aceite de Moto", iconName: "Bike" },
  { id: "grasa", name: "Grasa", iconName: "Database" },
  { id: "aceite-industrial", name: "Aceites Industriales", iconName: "Cpu" },
  { id: "antifriz-anticongelante", name: "Antifriz / Anticongelante", iconName: "Droplet" },
  { id: "urea", name: "Urea", iconName: "ShieldAlert" },
  { id: "auxiliares", name: "Auxiliares", iconName: "Wrench" },
  { id: "agro", name: "Agro", iconName: "Tractor" }
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
    id: "LA0343-JN023-002",
    name: "PEAK 4T MOTORCYCLE OIL SAE 20W-50 (JASO MA/MA2 - API SM) (Caja 12 x 1/4 Gal)",
    categoryId: "aceite-moto",
    description: "Lubricante multigrado premium de alto rendimiento formulado especialmente para motores de motocicletas de cuatro tiempos. Su avanzada tecnología protege contra el desgaste, mantiene la limpieza del motor y asegura un excelente acople del embrague húmedo bajo las condiciones de manejo más exigentes.",
    highlighted: true,
    specs: [
      { label: "Código", value: "LA0343-JN023-002" },
      { label: "Envase", value: "Caja 12 x 1/4 Gal" },
      { label: "Gal/Lt", value: "3" },
      { label: "Unidades x Pallet", value: "80" }
    ],
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "LA0220-JN023-002",
    name: "PEAK 2T MOTORCYCLE OIL (API TC - JASO FB/FC) (Caja 12 x 1/4 Gal)",
    categoryId: "aceite-moto",
    description: "Aceite de alto rendimiento formulado para motores de dos tiempos enfriados por aire. Su mezcla avanzada minimiza la formación de depósitos, previene el desgaste del motor y reduce la emisión de humos, cumpliendo con los exigentes estándares de JASO y API.",
    highlighted: true,
    specs: [
      { label: "Código", value: "LA0220-JN023-002" },
      { label: "Envase", value: "Caja 12 x 1/4 Gal" },
      { label: "Gal/Lt", value: "3" },
      { label: "Unidades x Pallet", value: "80" }
    ],
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "LA0211-JN023-002",
    name: "PEAK TC-W3 PREMIUM OUTBOARD (TC-W3) (Caja 12 x 1/4 Gal)",
    categoryId: "aceite-moto",
    description: "Aceite de calidad premium para motores fuera de borda de dos tiempos de alto rendimiento. Proporciona una lubricación superior y una excelente protección contra la herrumbre y la corrosión en ambientes marinos severos, minimizando los depósitos en las bujías y el pistón.",
    highlighted: true,
    specs: [
      { label: "Código", value: "LA0211-JN023-002" },
      { label: "Envase", value: "Caja 12 x 1/4 Gal" },
      { label: "Gal/Lt", value: "3" },
      { label: "Unidades x Pallet", value: "80" }
    ],
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=400"
  },
  // Category: Grasa
  {
    id: "GR1138-DP400-002",
    name: "PEAK RED HIGH TEMP GREASE EP NLGI2 (LITHIUM COMPLEX / NLGI GC-LB) (Tambor 400 LBS)",
    categoryId: "grasa",
    description: "Grasa de complejo de litio de extrema presión de calidad superior para altas temperaturas. Satisface los exigentes requisitos NLGI GC-LB de lubricación para rodamientos de ruedas y chasis. Excelente resistencia al lavado por agua y alta estabilidad frente a la cizalladura.",
    highlighted: true,
    specs: [
      { label: "Código", value: "GR1138-DP400-002" },
      { label: "Envase", value: "Tambor 400 LBS" },
      { label: "Medida", value: "400 LBS" },
      { label: "Unidades x Pallet", value: "4" }
    ],
    image: "https://images.unsplash.com/photo-1530047625168-4b29bf846e45?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "GR1138-DP045-002",
    name: "PEAK RED HIGH TEMP GREASE EP NLGI2 (LITHIUM COMPLEX / NLGI GC-LB) (Balde 35 LbS)",
    categoryId: "grasa",
    description: "Grasa de complejo de litio de extrema presión de calidad superior para altas temperaturas. Satisface los exigentes requisitos NLGI GC-LB de lubricación para rodamientos de ruedas y chasis. Excelente resistencia al lavado por agua y alta estabilidad frente a la cizalladura.",
    highlighted: false,
    specs: [
      { label: "Código", value: "GR1138-DP045-002" },
      { label: "Envase", value: "Balde 35 LbS" },
      { label: "Medida", value: "35 LbS" },
      { label: "Unidades x Pallet", value: "27" }
    ],
    image: "https://images.unsplash.com/photo-1530047625168-4b29bf846e45?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "GR1138-DP001-002",
    name: "PEAK RED HIGH TEMP GREASE EP NLGI2 (LITHIUM COMPLEX / NLGI GC-LB) (Caja 12/1 LbS)",
    categoryId: "grasa",
    description: "Grasa de complejo de litio de extrema presión de calidad superior para altas temperaturas. Satisface los exigentes requisitos NLGI GC-LB de lubricación para rodamientos de ruedas y chasis. Excelente resistencia al lavado por agua y alta estabilidad frente a la cizalladura.",
    highlighted: false,
    specs: [
      { label: "Código", value: "GR1138-DP001-002" },
      { label: "Envase", value: "Caja 12/1 LbS" },
      { label: "Medida", value: "12 LbS" },
      { label: "Unidades x Pallet", value: "80" }
    ],
    image: "https://images.unsplash.com/photo-1530047625168-4b29bf846e45?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "GR1137-DP400-002",
    name: "PEAK MULTI PURP GREASE NLGI2 (LITHIUM) (Tambor 400 LbS)",
    categoryId: "grasa",
    description: "Grasa lubricante multiuso a base de jabón de litio de excelente estabilidad mecánica y resistencia a la corrosión. Formulada para la protección eficaz del chasis y puntos de engrase en camiones, maquinaria agrícola e industrial.",
    highlighted: true,
    specs: [
      { label: "Código", value: "GR1137-DP400-002" },
      { label: "Envase", value: "Tambor 400 LbS" },
      { label: "Medida", value: "400 LbS" },
      { label: "Unidades x Pallet", value: "4" }
    ],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "GR1137-DP035-002",
    name: "PEAK MULTI PURP GREASE NLGI2 (LITHIUM) (Balde 35 LbS)",
    categoryId: "grasa",
    description: "Grasa lubricante multiuso a base de jabón de litio de excelente estabilidad mecánica y resistencia a la corrosión. Formulada para la protección eficaz del chasis y puntos de engrase en camiones, maquinaria agrícola e industrial.",
    highlighted: false,
    specs: [
      { label: "Código", value: "GR1137-DP035-002" },
      { label: "Envase", value: "Balde 35 LbS" },
      { label: "Medida", value: "35 LbS" },
      { label: "Unidades x Pallet", value: "27" }
    ],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=400"
  },
  // Category: Aceites industriales
  {
    id: "HD0190-TM205-003",
    name: "Peak Hydraulic Oil MVI ISO 46 - Local (Tambor 205 LTS)",
    categoryId: "aceite-industrial",
    description: "Lubricante hidráulico de viscosidad media (ISO 46), formulado para sistemas industriales de alta presión con sobresaliente estabilidad térmica y control de fricción.",
    highlighted: true,
    specs: [
      { label: "Código", value: "HD0190-TM205-003" },
      { label: "Envase", value: "Tambor 205 LTS" },
      { label: "Gal/Lt", value: "205" },
      { label: "Unidades x Pallet", value: "4" }
    ],
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "HD0190-DP020-003",
    name: "Peak Hydraulic Oil MVI ISO 46 - Local (Balde 20 LTS)",
    categoryId: "aceite-industrial",
    description: "Lubricante hidráulico de viscosidad media (ISO 46), formulado para sistemas industriales de alta presión con sobresaliente estabilidad térmica y control de fricción.",
    highlighted: false,
    specs: [
      { label: "Código", value: "HD0190-DP020-003" },
      { label: "Envase", value: "Balde 20 LTS" },
      { label: "Gal/Lt", value: "20" },
      { label: "Unidades x Pallet", value: "48" }
    ],
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "HD0154-TM205-005",
    name: "Peak Hydraulic Oil MVI ISO 68 - Local (Tambor 205 LTS)",
    categoryId: "aceite-industrial",
    description: "Lubricante hidráulico de alta viscosidad (ISO 68), diseñado para operaciones severas con máxima protección antidesgaste y durabilidad extendida.",
    highlighted: true,
    specs: [
      { label: "Código", value: "HD0154-TM205-005" },
      { label: "Envase", value: "Tambor 205 LTS" },
      { label: "Gal/Lt", value: "205" },
      { label: "Unidades x Pallet", value: "4" }
    ],
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "HD0154-DP020-004",
    name: "Peak Hydraulic Oil MVI ISO 68 - Local (Balde 20 LTS)",
    categoryId: "aceite-industrial",
    description: "Lubricante hidráulico de alta viscosidad (ISO 68), diseñado para operaciones severas con máxima protección antidesgaste y durabilidad extendida.",
    highlighted: false,
    specs: [
      { label: "Código", value: "HD0154-DP020-004" },
      { label: "Envase", value: "Balde 20 LTS" },
      { label: "Gal/Lt", value: "20" },
      { label: "Unidades x Pallet", value: "20" }
    ],
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400"
  },
  // Category: Antifriz / Anticongelante
  {
    id: "AF0434-TM205-000",
    name: "PEAK FINAL CHARGE GLOBAL CONCENTRADO (Heavy Duty Fully Formulated SPA Precharged) (Tambor 205 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Anticongelante y refrigerante de servicio pesado con formulación completa precomprimida (SPA). Brinda protección insuperable para sistemas de enfriamiento industriales y comerciales.",
    highlighted: true,
    specs: [
      { label: "Código", value: "AF0434-TM205-000" },
      { label: "Envase", value: "Tambor 205 LTS" },
      { label: "Medida", value: "205 LTS" },
      { label: "Unidades x Pallet", value: "4" }
    ],
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "AF0434-DP020-001",
    name: "PEAK FINAL CHARGE GLOBAL CONCENTRADO (Heavy Duty Fully Formulated SPA Precharged) (Balde 20 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Anticongelante y refrigerante de servicio pesado con formulación completa precomprimida (SPA). Brinda protección insuperable para sistemas de enfriamiento industriales y comerciales.",
    highlighted: false,
    specs: [
      { label: "Código", value: "AF0434-DP020-001" },
      { label: "Envase", value: "Balde 20 LTS" },
      { label: "Medida", value: "20 LTS" },
      { label: "Unidades x Pallet", value: "48" }
    ],
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "AF0435-TM205-002",
    name: "PEAK FINAL CHARGE GLOBAL DILUIDO 50% (Heavy Duty Fully Formulated SCA Precharged) (Tambor 205 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Refrigerante diluido listo para usar al 50%. Formulación completa SCA precomprimida para servicio pesado, previene la cavitación y herrumbre en camiones y equipos industriales.",
    highlighted: true,
    specs: [
      { label: "Código", value: "AF0435-TM205-002" },
      { label: "Envase", value: "Tambor 205 LTS" },
      { label: "Medida", value: "205 LTS" },
      { label: "Unidades x Pallet", value: "4" }
    ],
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "AF0435-DP020-001",
    name: "PEAK FINAL CHARGE GLOBAL DILUIDO 50% (Heavy Duty Fully Formulated SCA Precharged) (Balde 20 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Refrigerante diluido listo para usar al 50%. Formulación completa SCA precomprimida para servicio pesado, previene la cavitación y herrumbre en camiones y equipos industriales.",
    highlighted: false,
    specs: [
      { label: "Código", value: "AF0435-DP020-001" },
      { label: "Envase", value: "Balde 20 LTS" },
      { label: "Medida", value: "20 LTS" },
      { label: "Unidades x Pallet", value: "48" }
    ],
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "AF0712-TM205-001",
    name: "PEAK FINAL CHARGE NOAT CONCENTRADO (Hybrid Technology) (Tambor 205 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Anticongelante y refrigerante de tecnología híbrida orgánica (NOAT). Fórmula de vida útil extendida libre de fosfatos y silicatos para alta resistencia térmica.",
    highlighted: true,
    specs: [
      { label: "Código", value: "AF0712-TM205-001" },
      { label: "Envase", value: "Tambor 205 LTS" },
      { label: "Medida", value: "205 LTS" },
      { label: "Unidades x Pallet", value: "4" }
    ],
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "AF0712-DP020-001",
    name: "PEAK FINAL CHARGE NOAT CONCENTRADO (Hybrid Technology) (Balde 20 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Anticongelante y refrigerante de tecnología híbrida orgánica (NOAT). Fórmula de vida útil extendida libre de fosfatos y silicatos para alta resistencia térmica.",
    highlighted: false,
    specs: [
      { label: "Código", value: "AF0712-DP020-001" },
      { label: "Envase", value: "Balde 20 LTS" },
      { label: "Medida", value: "20 LTS" },
      { label: "Unidades x Pallet", value: "48" }
    ],
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "AF0713-CB000-002",
    name: "PEAK FINAL CHARGED NOAT DILUIDO 50% (Hybrid Technology) (IBC 1000 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Refrigerante diluido al 50% con tecnología híbrida (NOAT). Ofrece protección superior contra la corrosión y cavitación para motores de servicio pesado.",
    highlighted: true,
    specs: [
      { label: "Código", value: "AF0713-CB000-002" },
      { label: "Envase", value: "IBC 1000 LTS" },
      { label: "Medida", value: "1000 LTS" },
      { label: "Unidades x Pallet", value: "1" }
    ],
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "AF0713-TM205-004",
    name: "PEAK FINAL CHARGED NOAT DILUIDO 50% (Hybrid Technology) (Tambor 205 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Refrigerante diluido al 50% con tecnología híbrida (NOAT). Ofrece protección superior contra la corrosión y cavitación para motores de servicio pesado.",
    highlighted: false,
    specs: [
      { label: "Código", value: "AF0713-TM205-004" },
      { label: "Envase", value: "Tambor 205 LTS" },
      { label: "Medida", value: "205 LTS" },
      { label: "Unidades x Pallet", value: "4" }
    ],
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "AF013-DP020-001",
    name: "PEAK FINAL CHARGED NOAT DILUIDO 50% (Hybrid Technology) (Balde 20 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Refrigerante diluido al 50% con tecnología híbrida (NOAT). Ofrece protección superior contra la corrosión y cavitación para motores de servicio pesado.",
    highlighted: false,
    specs: [
      { label: "Código", value: "AF013-DP020-001" },
      { label: "Envase", value: "Balde 20 LTS" },
      { label: "Medida", value: "20 LTS" },
      { label: "Unidades x Pallet", value: "48" }
    ],
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "AF0714-CB000-002",
    name: "PEAK FINAL CHARGED NOAT DILUIDO 30% (Hybrid Technology) (IBC 1000 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Refrigerante diluido al 30% con tecnología híbrida (NOAT). Ideal para zonas de clima templado que requieren óptimo balance de transferencia térmica.",
    highlighted: true,
    specs: [
      { label: "Código", value: "AF0714-CB000-002" },
      { label: "Envase", value: "IBC 1000 LTS" },
      { label: "Medida", value: "1000 LTS" },
      { label: "Unidades x Pallet", value: "1" }
    ],
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "AF0580-TM205-000",
    name: "PEAK FLEET CHARGE CONCENTRADO (Heavy Duty Fully Formulated SCA Precharged) (Tambor 205 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Anticongelante convencional de servicio pesado completamente formulado con aditivos químicos suplementarios (SCA). Protección robusta para flotas comerciales.",
    highlighted: true,
    specs: [
      { label: "Código", value: "AF0580-TM205-000" },
      { label: "Envase", value: "Tambor 205 LTS" },
      { label: "Medida", value: "205 LTS" },
      { label: "Unidades x Pallet", value: "4" }
    ],
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "AF0580-DP020-000",
    name: "PEAK FLEET CHARGE CONCENTRADO (Heavy Duty Fully Formulated SCA Precharged) (Balde 20 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Anticongelante convencional de servicio pesado completamente formulado con aditivos químicos suplementarios (SCA). Protección robusta para flotas comerciales.",
    highlighted: false,
    specs: [
      { label: "Código", value: "AF0580-DP020-000" },
      { label: "Envase", value: "Balde 20 LTS" },
      { label: "Medida", value: "20 LTS" },
      { label: "Unidades x Pallet", value: "48" }
    ],
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "AF0581-CB000-000",
    name: "PEAK FLEET CHARGE DILUIDO 50% (Heavy Duty Fully Formulated SCA Precharged) (IBC 1000 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Refrigerante premezclado al 50% listo para usar. Formulación SCA completa para flotas de servicio pesado, minimizando costos de mantenimiento por cavitación.",
    highlighted: true,
    specs: [
      { label: "Código", value: "AF0581-CB000-000" },
      { label: "Envase", value: "IBC 1000 LTS" },
      { label: "Medida", value: "1000 LTS" },
      { label: "Unidades x Pallet", value: "1" }
    ],
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "AF0581-TM205-000",
    name: "PEAK FLEET CHARGE DILUIDO 50% (Heavy Duty Fully Formulated SCA Precharged) (Tambor 205 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Refrigerante premezclado al 50% listo para usar. Formulación SCA completa para flotas de servicio pesado, minimizando costos de mantenimiento por cavitación.",
    highlighted: false,
    specs: [
      { label: "Código", value: "AF0581-TM205-000" },
      { label: "Envase", value: "Tambor 205 LTS" },
      { label: "Medida", value: "205 LTS" },
      { label: "Unidades x Pallet", value: "4" }
    ],
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "AF0581-DP020-001",
    name: "PEAK FLEET CHARGE DILUIDO 50% (Heavy Duty Fully Formulated SCA Precharged) (Balde 20 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Refrigerante premezclado al 50% listo para usar. Formulación SCA completa para flotas de servicio pesado, minimizando costos de mantenimiento por cavitación.",
    highlighted: false,
    specs: [
      { label: "Código", value: "AF0581-DP020-001" },
      { label: "Envase", value: "Balde 20 LTS" },
      { label: "Medida", value: "20 LTS" },
      { label: "Unidades x Pallet", value: "48" }
    ],
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "AF0275-CB111-001",
    name: "PEAK LONG LIFE CONCENTRADO ROJO (Automotive OAT) (IBC 1000 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Anticongelante y refrigerante de vida extendida de color rojo formulado con tecnología de ácidos orgánicos (Automotive OAT) para vehículos de pasajeros y comerciales ligeros.",
    highlighted: true,
    specs: [
      { label: "Código", value: "AF0275-CB111-001" },
      { label: "Envase", value: "IBC 1000 LTS" },
      { label: "Medida", value: "1000 LTS" },
      { label: "Unidades x Pallet", value: "1" }
    ],
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "AF0275-TM205-000",
    name: "PEAK LONG LIFE CONCENTRADO ROJO (Automotive OAT) (Tambor 205 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Anticongelante y refrigerante de vida extendida de color rojo formulado con tecnología de ácidos orgánicos (Automotive OAT) para vehículos de pasajeros y comerciales ligeros.",
    highlighted: false,
    specs: [
      { label: "Código", value: "AF0275-TM205-000" },
      { label: "Envase", value: "Tambor 205 LTS" },
      { label: "Medida", value: "205 LTS" },
      { label: "Unidades x Pallet", value: "4" }
    ],
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "AF0275-JN006-000",
    name: "PEAK LONG LIFE CONCENTRADO ROJO (Automotive OAT) (Caja 6 x 4 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Anticongelante y refrigerante de vida extendida de color rojo formulado con tecnología de ácidos orgánicos (Automotive OAT) para vehículos de pasajeros y comerciales ligeros.",
    highlighted: false,
    specs: [
      { label: "Código", value: "AF0275-JN006-000" },
      { label: "Envase", value: "Caja 6 x 4 LTS" },
      { label: "Medida", value: "24 LTS" },
      { label: "Unidades x Pallet", value: "18" }
    ],
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "AF0275-JN012-010",
    name: "PEAK LONG LIFE CONCENTRADO ROJO (Automotive OAT) (Caja 12 x 1 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Anticongelante y refrigerante de vida extendida de color rojo formulado con tecnología de ácidos orgánicos (Automotive OAT) para vehículos de pasajeros y comerciales ligeros.",
    highlighted: false,
    specs: [
      { label: "Código", value: "AF0275-JN012-010" },
      { label: "Envase", value: "Caja 12 x 1 LTS" },
      { label: "Medida", value: "12 LTS" },
      { label: "Unidades x Pallet", value: "52" }
    ],
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "AF0588-JN006-001",
    name: "PEAK LONG LIFE DILUIDO 50% ROJO (Automotive OAT) (Caja 6 x 4 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Refrigerante diluido al 50% de por vida, color rojo. Tecnología OAT avanzada compatible con aluminio y todas las aleaciones metálicas del motor.",
    highlighted: true,
    specs: [
      { label: "Código", value: "AF0588-JN006-001" },
      { label: "Envase", value: "Caja 6 x 4 LTS" },
      { label: "Medida", value: "24 LTS" },
      { label: "Unidades x Pallet", value: "18" }
    ],
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "AF0588-JN012-005",
    name: "PEAK LONG LIFE DILUIDO 50% ROJO (Automotive OAT) (Caja 12 x 1 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Refrigerante diluido al 50% de por vida, color rojo. Tecnología OAT avanzada compatible con aluminio y todas las aleaciones metálicas del motor.",
    highlighted: false,
    specs: [
      { label: "Código", value: "AF0588-JN012-005" },
      { label: "Envase", value: "Caja 12 x 1 LTS" },
      { label: "Medida", value: "12 LTS" },
      { label: "Unidades x Pallet", value: "52" }
    ],
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "AF0721-TM200-001",
    name: "PEAK LONG LIFE CONCENTRADO AMARILLO (Automotive OAT) (Tambor 205 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Anticongelante de vida extendida de color amarillo formulado con tecnología de ácidos orgánicos (Automotive OAT). Cobertura universal de última generación.",
    highlighted: true,
    specs: [
      { label: "Código", value: "AF0721-TM200-001" },
      { label: "Envase", value: "Tambor 205 LTS" },
      { label: "Medida", value: "205 LTS" },
      { label: "Unidades x Pallet", value: "4" }
    ],
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "AF0721-JN006-001",
    name: "PEAK LONG LIFE CONCENTRADO AMARILLO (Automotive OAT) (Caja 6 x 4 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Anticongelante de vida extendida de color amarillo formulado con tecnología de ácidos orgánicos (Automotive OAT). Cobertura universal de última generación.",
    highlighted: false,
    specs: [
      { label: "Código", value: "AF0721-JN006-001" },
      { label: "Envase", value: "Caja 6 x 4 LTS" },
      { label: "Medida", value: "24 LTS" },
      { label: "Unidades x Pallet", value: "18" }
    ],
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "AF0721-JN012-003",
    name: "PEAK LONG LIFE CONCENTRADO AMARILLO (Automotive OAT) (Caja 12 x 1 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Anticongelante de vida extendida de color amarillo formulado con tecnología de ácidos orgánicos (Automotive OAT). Cobertura universal de última generación.",
    highlighted: false,
    specs: [
      { label: "Código", value: "AF0721-JN012-003" },
      { label: "Envase", value: "Caja 12 x 1 LTS" },
      { label: "Medida", value: "12 LTS" },
      { label: "Unidades x Pallet", value: "52" }
    ],
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "AF0748-JN006-001",
    name: "PEAK LONG LIFE DILUIDO 50% AMARILLO (Automotive OAT) (Caja 6 x 4 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Refrigerante premezclado de color amarillo al 50%. Ofrece compatibilidad multivehículo total y protección superior contra temperaturas extremas.",
    highlighted: true,
    specs: [
      { label: "Código", value: "AF0748-JN006-001" },
      { label: "Envase", value: "Caja 6 x 4 LTS" },
      { label: "Medida", value: "24 LTS" },
      { label: "Unidades x Pallet", value: "18" }
    ],
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "AF0748-JN012-003",
    name: "PEAK LONG LIFE DILUIDO 50% AMARILLO (Automotive OAT) (Caja 12 x 1 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Refrigerante premezclado de color amarillo al 50%. Ofrece compatibilidad multivehículo total y protección superior contra temperaturas extremas.",
    highlighted: false,
    specs: [
      { label: "Código", value: "AF0748-JN012-003" },
      { label: "Envase", value: "Caja 12 x 1 LTS" },
      { label: "Medida", value: "12 LTS" },
      { label: "Unidades x Pallet", value: "52" }
    ],
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "AF0032-CB000-000",
    name: "PEAK CONVENTIONAL CONCENTRADO VERDE (Automotive Conventional) (IBC 1000 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Anticongelante y refrigerante clásico de color verde. Formulación automotriz convencional de alta confiabilidad con silicatos de bajo contenido de fósforo.",
    highlighted: true,
    specs: [
      { label: "Código", value: "AF0032-CB000-000" },
      { label: "Envase", value: "IBC 1000 LTS" },
      { label: "Medida", value: "1000 LTS" },
      { label: "Unidades x Pallet", value: "1" }
    ],
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "AF0032-TM205-009",
    name: "PEAK CONVENTIONAL CONCENTRADO VERDE (Automotive Conventional) (Tambor 205 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Anticongelante y refrigerante clásico de color verde. Formulación automotriz convencional de alta confiabilidad con silicatos de bajo contenido de fósforo.",
    highlighted: false,
    specs: [
      { label: "Código", value: "AF0032-TM205-009" },
      { label: "Envase", value: "Tambor 205 LTS" },
      { label: "Medida", value: "205 LTS" },
      { label: "Unidades x Pallet", value: "4" }
    ],
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "AF0032-BP020-001",
    name: "PEAK CONVENTIONAL CONCENTRADO VERDE (Automotive Conventional) (Balde 20 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Anticongelante y refrigerante clásico de color verde. Formulación automotriz convencional de alta confiabilidad con silicatos de bajo contenido de fósforo.",
    highlighted: false,
    specs: [
      { label: "Código", value: "AF0032-BP020-001" },
      { label: "Envase", value: "Balde 20 LTS" },
      { label: "Medida", value: "20 LTS" },
      { label: "Unidades x Pallet", value: "48" }
    ],
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "AF0032-JN006-001",
    name: "PEAK CONVENTIONAL CONCENTRADO VERDE (Automotive Conventional) (Caja 6 x 4 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Anticongelante y refrigerante clásico de color verde. Formulación automotriz convencional de alta confiabilidad con silicatos de bajo contenido de fósforo.",
    highlighted: false,
    specs: [
      { label: "Código", value: "AF0032-JN006-001" },
      { label: "Envase", value: "Caja 6 x 4 LTS" },
      { label: "Medida", value: "24 LTS" },
      { label: "Unidades x Pallet", value: "18" }
    ],
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "AF0032-JN012-003",
    name: "PEAK CONVENTIONAL CONCENTRADO VERDE (Automotive Conventional) (Caja 12 x 1 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Anticongelante y refrigerante clásico de color verde. Formulación automotriz convencional de alta confiabilidad con silicatos de bajo contenido de fósforo.",
    highlighted: false,
    specs: [
      { label: "Código", value: "AF0032-JN012-003" },
      { label: "Envase", value: "Caja 12 x 1 LTS" },
      { label: "Medida", value: "12 LTS" },
      { label: "Unidades x Pallet", value: "52" }
    ],
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "AF0422-TM205-008",
    name: "PEAK CONVENTIONAL DILUIDO 50% VERDE (Automotive Conventional) (Tambor 205 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Refrigerante clásico diluido al 50% color verde listo para usar. Excelente protección convencional contra congelamiento y ebullición.",
    highlighted: true,
    specs: [
      { label: "Código", value: "AF0422-TM205-008" },
      { label: "Envase", value: "Tambor 205 LTS" },
      { label: "Medida", value: "205 LTS" },
      { label: "Unidades x Pallet", value: "4" }
    ],
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "AF0422-DP020-008",
    name: "PEAK CONVENTIONAL DILUIDO 50% VERDE (Automotive Conventional) (Balde 20 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Refrigerante clásico diluido al 50% color verde listo para usar. Excelente protección convencional contra congelamiento y ebullición.",
    highlighted: false,
    specs: [
      { label: "Código", value: "AF0422-DP020-008" },
      { label: "Envase", value: "Balde 20 LTS" },
      { label: "Medida", value: "20 LTS" },
      { label: "Unidades x Pallet", value: "48" }
    ],
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "AF0422-JN006-001",
    name: "PEAK CONVENTIONAL DILUIDO 50% VERDE (Automotive Conventional) (Caja 6 x 4 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Refrigerante clásico diluido al 50% color verde listo para usar. Excelente protección convencional contra congelamiento y ebullición.",
    highlighted: false,
    specs: [
      { label: "Código", value: "AF0422-JN006-001" },
      { label: "Envase", value: "Caja 6 x 4 LTS" },
      { label: "Medida", value: "24 LTS" },
      { label: "Unidades x Pallet", value: "18" }
    ],
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "AF0422-JN012-002",
    name: "PEAK CONVENTIONAL DILUIDO 50% VERDE (Automotive Conventional) (Caja 12 x 1 LTS)",
    categoryId: "antifriz-anticongelante",
    description: "Refrigerante clásico diluido al 50% color verde listo para usar. Excelente protección convencional contra congelamiento y ebullición.",
    highlighted: false,
    specs: [
      { label: "Código", value: "AF0422-JN012-002" },
      { label: "Envase", value: "Caja 12 x 1 LTS" },
      { label: "Medida", value: "12 LTS" },
      { label: "Unidades x Pallet", value: "52" }
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
    id: "LP0001-JN003-001",
    name: "LAVAPARABRISAS PEAK LISTO PARA USAR (Caja 3 x 5 Ltr)",
    categoryId: "auxiliares",
    description: "Líquido limpiaparabrisas listo para usar de PEAK. Remueve de forma efectiva insectos, barro, hollín y suciedad del asfalto sin dejar vetas ni marcas, garantizando la máxima visibilidad y cuidando la vida útil de las escobillas.",
    highlighted: true,
    specs: [
      { label: "Código", value: "LP0001-JN003-001" },
      { label: "Envase", value: "Caja 3 x 5 Ltr" },
      { label: "Gal/Lt", value: "15" },
      { label: "Unidades x Pallet", value: "30" }
    ],
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "LP0004-JN012-007",
    name: "LAVAPARABRISAS PEAK CONCENTRADO (Caja 12 x 1 Ltr)",
    categoryId: "auxiliares",
    description: "Líquido limpiaparabrisas concentrado de alto rendimiento. Su potente fórmula desengrasante remueve la suciedad más rebelde adherida al cristal, mejorando la seguridad y nitidez visual bajo cualquier condición climática.",
    highlighted: false,
    specs: [
      { label: "Código", value: "LP0004-JN012-007" },
      { label: "Envase", value: "Caja 12 x 1 Ltr" },
      { label: "Gal/Lt", value: "12" },
      { label: "Unidades x Pallet", value: "52" }
    ],
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "SL0275-JN064-005",
    name: "LAVAPARABRISAS PEAK ULTRA CONCENTRADO (Caja 64 x 50cc)",
    categoryId: "auxiliares",
    description: "Fórmula de última generación ultra concentrada en prácticas monodosis de 50cc. Brinda el máximo poder desengrasante y limpiador en un formato sumamente compacto, fácil de dosificar directamente en el depósito de agua.",
    highlighted: true,
    specs: [
      { label: "Código", value: "SL0275-JN064-005" },
      { label: "Envase", value: "Caja 64 x 50cc" },
      { label: "Gal/Lt", value: "3.2" },
      { label: "Unidades x Pallet", value: "96" }
    ],
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "SL0275-JN128-006",
    name: "LAVAPARABRISAS PEAK ULTRA CONCENTRADO (Caja 128 x 50cc)",
    categoryId: "auxiliares",
    description: "Fórmula de última generación ultra concentrada en prácticas monodosis de 50cc. Brinda el máximo poder desengrasante y limpiador en un formato sumamente compacto, fácil de dosificar directamente en el depósito de agua.",
    highlighted: false,
    specs: [
      { label: "Código", value: "SL0275-JN128-006" },
      { label: "Envase", value: "Caja 128 x 50cc" },
      { label: "Gal/Lt", value: "6.4" },
      { label: "Unidades x Pallet", value: "60" }
    ],
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "PE0586-JN012-000",
    name: "LIMPIA INYECTORES PEAK NAFTA (Caja 12 x 250 cc)",
    categoryId: "auxiliares",
    description: "Aditivo limpiador de alta concentración diseñado específicamente para motores nafteros. Elimina con eficacia los depósitos de carbón en inyectores y válvulas, restaurando la potencia original y optimizando el consumo de combustible.",
    highlighted: true,
    specs: [
      { label: "Código", value: "PE0586-JN012-000" },
      { label: "Envase", value: "Caja 12 x 250 cc" },
      { label: "Gal/Lt", value: "3" },
      { label: "Unidades x Pallet", value: "112" }
    ],
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "PE0590-JN012-000",
    name: "LIMPIA INYECTORES PEAK DIESEL (Caja 12 x 250 cc)",
    categoryId: "auxiliares",
    description: "Aditivo de limpieza profunda y lubricación formulado para sistemas de inyección diésel, incluyendo sistemas Common Rail de alta presión. Remueve depósitos del inyector y la bomba de combustible, reduciendo emisiones nocivas.",
    highlighted: true,
    specs: [
      { label: "Código", value: "PE0590-JN012-000" },
      { label: "Envase", value: "Caja 12 x 250 cc" },
      { label: "Gal/Lt", value: "3" },
      { label: "Unidades x Pallet", value: "112" }
    ],
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "ZA0160-JN003-001",
    name: "PEAK AGUA DESMINERALIZADA (Caja 3 x 5 Lts)",
    categoryId: "auxiliares",
    description: "Agua desmineralizada de alta pureza obtenida mediante un riguroso proceso de ósmosis y filtración. Perfecta para rellenar radiadores, acumuladores de baterías y otros sistemas industriales, evitando la formación de sarro y herrumbre.",
    highlighted: true,
    specs: [
      { label: "Código", value: "ZA0160-JN003-001" },
      { label: "Envase", value: "Caja 3 x 5 Lts" },
      { label: "Gal/Lt", value: "15" },
      { label: "Unidades x Pallet", value: "42" }
    ],
    image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "ZA0160-JN012-000",
    name: "PEAK AGUA DESMINERALIZADA (Caja 12 x 1 Lts)",
    categoryId: "auxiliares",
    description: "Agua desmineralizada de alta pureza obtenida mediante un riguroso proceso de ósmosis y filtración. Perfecta para rellenar radiadores, acumuladores de baterías y otros sistemas industriales, evitando la formación de sarro y herrumbre.",
    highlighted: false,
    specs: [
      { label: "Código", value: "ZA0160-JN012-000" },
      { label: "Envase", value: "Caja 12 x 1 Lts" },
      { label: "Gal/Lt", value: "12" },
      { label: "Unidades x Pallet", value: "44" }
    ],
    image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "LF0015-JN006-002",
    name: "LIQUIDO PARA FRENO PEAK TIPO 4 - DOT 4 (Caja 6 x 254 cc)",
    categoryId: "auxiliares",
    description: "Fluido de frenos sintético de alta resistencia térmica que supera con creces las exigencias DOT 4. Asegura una excelente respuesta de frenado bajo condiciones extremas y una óptima protección de los sellos hidráulicos.",
    highlighted: true,
    specs: [
      { label: "Código", value: "LF0015-JN006-002" },
      { label: "Envase", value: "Caja 6 x 254 cc" },
      { label: "Gal/Lt", value: "2" },
      { label: "Unidades x Pallet", value: "148" }
    ],
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "LF0051-JN006-002",
    name: "LIQUIDO PARA FRENO PEAK TIPO 3 - DOT 3 (Caja 6 x 254 cc)",
    categoryId: "auxiliares",
    description: "Fluido de frenos de base sintética de alta calidad para sistemas hidráulicos DOT 3. Ofrece gran estabilidad física y química a elevadas temperaturas, previniendo eficazmente la corrosión en las tuberías y cilindros metálicos.",
    highlighted: true,
    specs: [
      { label: "Código", value: "LF0051-JN006-002" },
      { label: "Envase", value: "Caja 6 x 254 cc" },
      { label: "Gal/Lt", value: "2" },
      { label: "Unidades x Pallet", value: "148" }
    ],
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "LF0015-JN012-010",
    name: "LIQUIDO PARA FRENO PEAK TIPO 4 - DOT 4 (Caja 12 x 1 Ltr)",
    categoryId: "auxiliares",
    description: "Fluido de frenos sintético de alta resistencia térmica que supera con creces las exigencias DOT 4. Asegura una excelente respuesta de frenado bajo condiciones extremas y una óptima protección de los sellos hidráulicos.",
    highlighted: false,
    specs: [
      { label: "Código", value: "LF0015-JN012-010" },
      { label: "Envase", value: "Caja 12 x 1 Ltr" },
      { label: "Gal/Lt", value: "12" },
      { label: "Unidades x Pallet", value: "52" }
    ],
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "LF0051-JN012-010",
    name: "LIQUIDO PARA FRENO PEAK TIPO 3 - DOT 3 (Caja 12 x 1 Ltr)",
    categoryId: "auxiliares",
    description: "Fluido de frenos de base sintética de alta calidad para sistemas hidráulicos DOT 3. Ofrece gran estabilidad física y química a elevadas temperaturas, previniendo eficazmente la corrosión en las tuberías y cilindros metálicos.",
    highlighted: false,
    specs: [
      { label: "Código", value: "LF0051-JN012-010" },
      { label: "Envase", value: "Caja 12 x 1 Ltr" },
      { label: "Gal/Lt", value: "12" },
      { label: "Unidades x Pallet", value: "52" }
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
