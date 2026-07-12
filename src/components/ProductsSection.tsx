import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CATEGORIES, PRODUCTS } from "../data";
import { Product, GroupedProduct } from "../types";
import ProductCard from "./ProductCard";
import { 
  Search, SlidersHorizontal, ArrowUpRight, X, ShieldCheck, ArrowLeft,
  ChevronRight, Bike, Cpu, Activity, Database, Droplet, ShieldAlert, Wrench, Package
} from "lucide-react";

interface ProductsSectionProps {
  selectedCategory: string;
  setSelectedCategory: (catId: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function ProductsSection({
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery
}: ProductsSectionProps) {
  const [activeProductModal, setActiveProductModal] = useState<Product | null>(null);

  // Category visual custom cover images
  const CATEGORY_IMAGES: { [key: string]: string } = {
    "fluido-transmision": "https://images.unsplash.com/photo-1518384401463-d387de163ece?auto=format&fit=crop&q=80&w=600",
    "aceite-moto": "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=600",
    "grasa": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600",
    "aceite-industrial": "/logo_industriales.png",
    "antifriz-anticongelante": "/logo_antifreeze.png",
    "urea": "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600",
    "auxiliares": "/logo_auxiliares.png"
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Activity": return <Activity className="w-5 h-5" />;
      case "Bike": return <Bike className="w-5 h-5" />;
      case "Database": return <Database className="w-5 h-5" />;
      case "Cpu": return <Cpu className="w-5 h-5" />;
      case "Droplet": return <Droplet className="w-5 h-5" />;
      case "ShieldAlert": return <ShieldAlert className="w-5 h-5" />;
      case "Wrench": return <Wrench className="w-5 h-5" />;
      default: return <Package className="w-5 h-5" />;
    }
  };

  // Helper to extract base name by removing anything inside parenthesis at the end
  const getBaseName = (name: string) => {
    const index = name.indexOf(" (");
    return index !== -1 ? name.substring(0, index).trim() : name;
  };

  // Filter products based on active category and search query
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === "all" || product.categoryId === selectedCategory;
      const cleanQuery = searchQuery.trim().toLowerCase();
      
      const matchesSearch = !cleanQuery || 
        product.name.toLowerCase().includes(cleanQuery) ||
        product.id.toLowerCase().includes(cleanQuery) ||
        product.description.toLowerCase().includes(cleanQuery) ||
        product.specs.some(spec => spec.value.toLowerCase().includes(cleanQuery) || spec.label.toLowerCase().includes(cleanQuery));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Group filtered products dynamically to avoid duplicate cards for different presentations
  const groupedProducts = useMemo(() => {
    const groups: { [baseName: string]: GroupedProduct } = {};
    
    filteredProducts.forEach((product) => {
      const base = getBaseName(product.name);
      if (!groups[base]) {
        groups[base] = {
          baseName: base,
          categoryId: product.categoryId,
          description: product.description,
          highlighted: product.highlighted,
          image: product.image,
          varieties: []
        };
      }
      if (product.highlighted) {
        groups[base].highlighted = true;
      }
      groups[base].varieties.push(product);
    });
    
    return Object.values(groups);
  }, [filteredProducts]);

  // Count metrics for category dashboard
  const categoryStats = useMemo(() => {
    const stats: { [catId: string]: { total: number; unique: number } } = {};
    CATEGORIES.forEach(cat => {
      const catProducts = PRODUCTS.filter(p => p.categoryId === cat.id);
      const uniqueBases = new Set(catProducts.map(p => getBaseName(p.name)));
      stats[cat.id] = {
        total: catProducts.length,
        unique: uniqueBases.size
      };
    });
    return stats;
  }, []);

  const handleProductConsultation = (product: Product) => {
    const phoneNumber = "5491172528552"; // Reemplazar por número del distribuidor
    const message = `Hola! Estoy interesado en el producto del catálogo PEAK:\n\n*Producto:* ${product.name}\n*ID:* ${product.id}\n*Categoría:* ${CATEGORIES.find(c => c.id === product.categoryId)?.name || 'General'}\n\nPor favor, confirmame stock, plazos de entrega en Zona Sur y precio. ¡Gracias!`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  const isBrowsingCategory = selectedCategory !== "all";
  const hasGlobalSearchActive = searchQuery.trim().length > 0;

  // Selected category object
  const currentCategoryObj = CATEGORIES.find(c => c.id === selectedCategory);

  return (
    <section id="productos" className="py-24 bg-white text-neutral-800 relative border-b border-neutral-100">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-50/10 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Dynamic Transition Header */}
        <AnimatePresence mode="wait">
          {!isBrowsingCategory && !hasGlobalSearchActive ? (
            <motion.div
              key="dashboard-header"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center mb-16"
            >
              <span className="text-[11px] font-sans tracking-[0.25em] text-blue-600 uppercase block mb-3 font-extrabold">
                CATÁLOGO EXCLUSIVO PEAK®
              </span>
              <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-neutral-900 mb-4 font-medium">
                Explore por Categoría Comercial
              </h2>
              <p className="max-w-2xl mx-auto text-neutral-500 text-sm leading-relaxed font-sans">
                Acceda a líneas de lubricación especializada, refrigerantes premium, urea y grasas de alta operatividad. Seleccione una categoría para ver productos y códigos.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="category-header"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mb-12"
            >
              {/* Sleek Breadcrumb Back Nav */}
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-50 border border-neutral-200 hover:border-blue-200 hover:bg-blue-50/20 text-neutral-600 hover:text-blue-600 text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 rounded-full mb-8 shadow-sm group"
              >
                <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
                <span>Volver a Categorías</span>
              </button>

              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-neutral-100 pb-8">
                <div>
                  <span className="text-[10px] font-sans tracking-[0.2em] text-blue-600 uppercase font-extrabold block mb-2">
                    {hasGlobalSearchActive && !isBrowsingCategory ? "BÚSQUEDA GENERAL" : "LÍNEA DE PRODUCTO"}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-neutral-900 font-medium">
                    {hasGlobalSearchActive && !isBrowsingCategory 
                      ? "Resultados de Búsqueda" 
                      : currentCategoryObj?.name || "Catálogo"}
                  </h2>
                  <p className="text-neutral-500 text-xs max-w-xl mt-2 font-sans leading-relaxed">
                    {hasGlobalSearchActive && !isBrowsingCategory 
                      ? `Mostrando coincidencias para "${searchQuery}" en todo el porfolio PEAK®. ` 
                      : `Usted está explorando las variedades certificadas de ${currentCategoryObj?.name}. Utilice el buscador para agilizar su consulta.`}
                  </p>
                </div>

                {/* Counter Pill */}
                <div className="bg-blue-50/50 border border-blue-100 px-5 py-3 rounded-2xl flex items-center gap-3 w-fit">
                  <SlidersHorizontal className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-sans text-neutral-600 font-bold uppercase tracking-wider">
                    Variedades: <strong className="text-blue-600 font-extrabold">{groupedProducts.length}</strong>
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Global Dashboard Search Bar - Displayed when on Dashboard */}
        {!isBrowsingCategory && (
          <div className="mb-14 bg-slate-50 p-4 rounded-3xl border border-neutral-150 shadow-sm max-w-3xl mx-auto">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar repuesto, viscosidad, norma o código en todo el catálogo..."
                className="w-full bg-white border border-neutral-200 hover:border-neutral-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-full py-3.5 pl-11 pr-11 text-xs font-sans text-neutral-800 placeholder-neutral-400 outline-none transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-500 rounded-full transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Inside-Category Search Bar - Displayed contextually inside a category */}
        {isBrowsingCategory && (
          <div className="mb-10 bg-slate-50 p-4 rounded-3xl border border-neutral-100 max-w-2xl">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Filtrar en ${currentCategoryObj?.name}...`}
                className="w-full bg-white border border-neutral-200 hover:border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 rounded-full py-3 pl-11 pr-11 text-xs font-sans text-neutral-800 placeholder-neutral-400 outline-none transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 bg-slate-100 hover:bg-slate-200 text-neutral-500 rounded-full transition-colors"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* MAIN TRANSITION STAGE */}
        <AnimatePresence mode="wait">
          {!isBrowsingCategory && !hasGlobalSearchActive ? (
            
            // 1. GORGEOUS INSPIRATIONAL CATEGORY BOARD
            <motion.div
              key="category-dashboard"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {CATEGORIES.map((cat, idx) => {
                const stats = categoryStats[cat.id] || { total: 0, unique: 0 };
                const bgImage = CATEGORY_IMAGES[cat.id] || "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400";
                const isLogo = bgImage.includes("logo_") || bgImage.endsWith(".png");
                
                return (
                  <motion.div
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      window.scrollTo({
                        top: document.getElementById("productos")?.offsetTop ? (document.getElementById("productos")!.offsetTop - 40) : 400,
                        behavior: "smooth"
                      });
                    }}
                    className="group relative h-[270px] rounded-[2rem] bg-neutral-950 overflow-hidden cursor-pointer shadow-[0_12px_30px_-12px_rgba(0,0,0,0.12)] hover:shadow-[0_25px_50px_rgba(59,130,246,0.15)] transition-all duration-500 border border-neutral-100 hover:border-blue-300/60"
                    whileHover={{ y: -6 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.5, ease: "easeOut" }}
                  >
                    {/* Cover Background Photo */}
                    <img
                      src={bgImage}
                      alt={cat.name}
                      referrerPolicy="no-referrer"
                      className={`absolute inset-0 w-full h-full transition-all duration-700 ease-out ${
                        isLogo 
                          ? "object-contain p-10 pb-24 opacity-80 group-hover:opacity-100 group-hover:scale-105" 
                          : "object-cover opacity-50 group-hover:opacity-35 group-hover:scale-110"
                      }`}
                    />

                    {/* Highly Crafted Gradient Scenery Veil */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-95 group-hover:via-neutral-950/30 transition-all duration-500" />
                    
                    {/* Glowing highlight point on hover */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.15),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Upper decorative index tag */}
                    <div className="absolute top-5 right-5 bg-white/10 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full z-10">
                      <span className="text-[8px] font-mono text-white/80 font-bold uppercase tracking-widest">
                        LINE {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                      </span>
                    </div>

                    {/* Content Assembly (Bottom-Weighted) */}
                    <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end z-10">
                      
                      {/* Floating Circle Icon */}
                      <div className="w-10 h-10 bg-white border border-neutral-200/20 text-blue-600 rounded-full flex items-center justify-center mb-3 shadow-md group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                        {getCategoryIcon(cat.iconName)}
                      </div>

                      {/* Display Typography */}
                      <h3 className="text-lg md:text-xl font-serif text-white mb-2 leading-tight tracking-tight font-semibold group-hover:text-blue-100 transition-colors">
                        {cat.name}
                      </h3>

                      {/* Descriptive Summary Footer */}
                      <div className="flex items-center justify-between border-t border-white/10 pt-3 mt-1">
                        <span className="text-[9px] font-sans text-neutral-300 uppercase tracking-widest font-extrabold">
                          {stats.unique} {stats.unique === 1 ? "Línea" : "Líneas"} • {stats.total} {stats.total === 1 ? "Envase" : "Envases"}
                        </span>
                        
                        {/* Dynamic Enter Arrow Button */}
                        <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:border-blue-400 group-hover:bg-blue-600 transition-all duration-300">
                          <ChevronRight className="w-3.5 h-3.5" />
                        </div>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

          ) : (
            
            // 2. CONTEXTUAL PRODUCTS VIEW (INSIDE A SELECTED CATEGORY OR SEARCH SCREEN)
            <motion.div
              key="category-catalog"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-12"
            >
              {/* Product Card Grid */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                layout
              >
                <AnimatePresence mode="popLayout">
                  {groupedProducts.map((group) => (
                    <ProductCard
                      key={group.baseName}
                      group={group}
                      onViewDetails={setActiveProductModal}
                      onConsult={handleProductConsultation}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>

              {/* Empty Results State */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-20 bg-slate-50 border border-neutral-150 rounded-[2rem] max-w-2xl mx-auto">
                  <SlidersHorizontal className="w-8 h-8 text-neutral-300 mx-auto mb-4" />
                  <h3 className="text-base font-serif text-neutral-700 mb-1 font-semibold">
                    No se encontraron coincidencias
                  </h3>
                  <p className="text-neutral-500 text-xs max-w-sm mx-auto leading-relaxed font-sans px-4">
                    No encontramos productos que coincidan con la búsqueda "{searchQuery}". Pruebe utilizando palabras clave más genéricas.
                  </p>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-sans font-bold tracking-widest uppercase transition-all duration-300 rounded-full shadow-md shadow-blue-500/10"
                  >
                    Limpiar Buscador
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* DETAILED SPEC SHEET MODAL */}
      <AnimatePresence>
        {activeProductModal && (
          <div className="fixed inset-0 bg-neutral-900/40 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 15 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-neutral-100 rounded-[2rem] max-w-lg w-full overflow-hidden shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProductModal(null)}
                className="absolute top-5 right-5 p-2 bg-white hover:bg-slate-50 text-neutral-400 hover:text-blue-600 rounded-full transition-colors border border-neutral-200 z-20 shadow-sm"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header Image Chamber with subtle ambient details */}
              <div className="h-52 w-full relative bg-blue-50/20 flex items-center justify-center p-6 border-b border-neutral-100">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:16px_16px] opacity-40 pointer-events-none" />
                <img
                  src={activeProductModal.image}
                  alt={activeProductModal.name}
                  referrerPolicy="no-referrer"
                  className="object-contain w-full h-full z-10 filter drop-shadow-md max-h-36"
                />
                
                {/* ID Tag */}
                <div className="absolute bottom-4 left-6 bg-white border border-neutral-200 px-3 py-1 rounded-full text-[9px] font-mono text-neutral-500 tracking-wider z-10 shadow-sm">
                  ID: {activeProductModal.id}
                </div>
              </div>

              {/* Body */}
              <div className="p-8">
                <span className="text-[9px] font-sans tracking-[0.2em] text-blue-500 uppercase font-bold block mb-2">
                  {CATEGORIES.find((c) => c.id === activeProductModal.categoryId)?.name || "LUBRICANTE"}
                </span>
                <h3 className="text-2xl font-serif text-neutral-900 mb-3 font-semibold">
                  {activeProductModal.name}
                </h3>
                <p className="text-neutral-500 text-xs leading-relaxed mb-6 font-sans">
                  {activeProductModal.description}
                </p>

                {/* Tech Specs */}
                <h4 className="text-[10px] font-sans tracking-widest font-extrabold text-neutral-400 uppercase mb-4 pb-2 border-b border-neutral-100 flex items-center gap-1.5">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-blue-500" /> Especificaciones de fábrica
                </h4>
                <div className="space-y-2.5 mb-8 bg-slate-50/50 p-5 border border-neutral-150 rounded-2xl">
                  {activeProductModal.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex justify-between items-center text-xs font-sans py-1.5 border-b border-dashed border-neutral-200/60 last:border-none">
                      <span className="text-neutral-500 font-semibold">{spec.label}</span>
                      <span className="text-neutral-800 font-extrabold text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setActiveProductModal(null)}
                    className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-neutral-600 hover:text-neutral-950 text-xs font-sans font-bold uppercase tracking-widest transition-all rounded-full border border-neutral-200"
                  >
                    Cerrar
                  </button>
                  <button
                    onClick={() => {
                      handleProductConsultation(activeProductModal!);
                      setActiveProductModal(null);
                    }}
                    className="flex-1 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-sans font-bold uppercase tracking-widest transition-all rounded-full flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20"
                  >
                    Solicitar Cotización <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

