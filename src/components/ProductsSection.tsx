import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CATEGORIES, PRODUCTS } from "../data";
import { Product } from "../types";
import { 
  Search, SlidersHorizontal, ArrowUpRight, X, ShieldCheck
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

  const handleProductConsultation = (product: Product) => {
    const phoneNumber = "5491134567890"; // Reemplazar por número del distribuidor
    const message = `Hola! Estoy interesado en el producto del catálogo PEAK:\n\n*Producto:* ${product.name}\n*ID:* ${product.id}\n*Categoría:* ${CATEGORIES.find(c => c.id === product.categoryId)?.name || 'General'}\n\nPor favor, confirmame stock, plazos de entrega en Zona Sur y precio. ¡Gracias!`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section id="productos" className="py-24 bg-white text-neutral-800 relative border-b border-neutral-100">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-50/10 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="text-[11px] font-sans tracking-[0.25em] text-blue-600 uppercase block mb-3 font-extrabold">
            CATÁLOGO DE DISTRIBUCIÓN
          </span>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-neutral-900 mb-4 font-medium">
            Buscador comercial de repuestos y lubricantes
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-500 text-sm leading-relaxed font-sans">
            Explore el porfolio de productos especiales, refrigerantes y grasas PEAK®. Acceda a fichas técnicas oficiales y realice consultas directas de cotización.
          </p>
        </div>

        {/* Search Bar - Sophisticated Rounded Layout */}
        <div className="mb-12 bg-slate-50 p-4 rounded-3xl border border-neutral-150 shadow-sm max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            
            {/* Quick Search Input */}
            <div className="relative w-full sm:flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por nombre, viscosidad o normativa..."
                className="w-full bg-white border border-neutral-200 hover:border-neutral-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-full py-3.5 pl-11 pr-11 text-xs font-sans text-neutral-800 placeholder-neutral-450 outline-none transition-all"
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

            {/* Quick Status / Total Indicator */}
            <div className="flex items-center gap-2 text-[10px] font-sans tracking-widest uppercase text-neutral-600 bg-white px-5 py-3.5 border border-neutral-200 w-full sm:w-auto justify-center font-bold rounded-full">
              <SlidersHorizontal className="w-3.5 h-3.5 text-blue-600" />
              <span>Resultados: <strong className="text-blue-600 font-extrabold">{filteredProducts.length}</strong></span>
            </div>
          </div>
        </div>

        {/* Ultra-sleek, clean categories bar (No emojis, highly elegant, white/blue details, fully rounded) */}
        <div className="mb-14 relative">
          <h4 className="text-[10px] font-sans tracking-[0.25em] font-bold uppercase text-neutral-400 mb-5 px-1 text-center">
            FILTRAR POR CATEGORÍA COMERCIAL
          </h4>
          
          <div className="flex gap-2 overflow-x-auto pb-4 pt-1 px-1 -mx-6 md:mx-0 px-6 md:px-0 scrollbar-none flex-nowrap md:flex-wrap md:justify-center">
            
            {/* "All" Capsule */}
            <button
              onClick={() => setSelectedCategory("all")}
              className="relative px-6 py-3 text-[10px] font-sans tracking-widest uppercase transition-all duration-300 focus:outline-none flex-shrink-0 border border-neutral-200 bg-white hover:border-neutral-300 text-neutral-600 font-extrabold rounded-full overflow-hidden"
            >
              {selectedCategory === "all" && (
                <motion.span
                  layoutId="activeCategoryIndicator"
                  className="absolute inset-0 bg-blue-600 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}
              <span className={`relative z-10 transition-colors duration-300 ${selectedCategory === "all" ? "text-white" : ""}`}>
                Todo el catálogo
              </span>
            </button>

            {/* Dynamic Category Capsules without emojis */}
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className="relative px-6 py-3 text-[10px] font-sans tracking-widest uppercase transition-all duration-300 focus:outline-none flex-shrink-0 border border-neutral-200 bg-white hover:border-neutral-300 text-neutral-600 font-extrabold rounded-full overflow-hidden"
                >
                  {isSelected && (
                    <motion.span
                      layoutId="activeCategoryIndicator"
                      className="absolute inset-0 bg-blue-600 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    />
                  )}
                  <span className={`relative z-10 transition-colors duration-300 ${isSelected ? "text-white" : ""}`}>
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Innovative Design Grid - Beautiful, Organic, White Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white border border-neutral-100 hover:border-blue-100 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-500/5 p-6 rounded-[2.5rem]"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[9px] font-sans tracking-[0.15em] text-blue-600 uppercase font-extrabold flex items-center gap-1 bg-blue-50/50 px-2.5 py-1 rounded-full">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-500" /> ORIGINAL PEAK
                    </span>
                    <span className="text-[9px] font-mono font-bold text-neutral-400 bg-slate-100 px-2.5 py-1 rounded-full tracking-wider">
                      #{product.id}
                    </span>
                  </div>
                  
                  {/* Floating-feel Image Container - Curved and sleek */}
                  <div className="relative aspect-[4/3] bg-blue-50/20 rounded-[2rem] flex items-center justify-center p-6 mb-6 overflow-hidden transition-all duration-500 group-hover:bg-blue-50/40">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="object-contain w-full h-full opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out z-10 filter drop-shadow-md"
                    />
                    
                    {product.highlighted && (
                      <div className="absolute top-4 right-4 bg-blue-600 text-white text-[8px] font-sans font-bold tracking-widest px-3 py-1 rounded-full z-20 shadow-sm">
                        DESTACADO
                      </div>
                    )}
                  </div>

                  {/* Content Details */}
                  <div className="mb-6">
                    <span className="text-[9px] font-sans tracking-[0.15em] text-blue-500 uppercase font-bold block mb-1">
                      {CATEGORIES.find((c) => c.id === product.categoryId)?.name || "LUBRICANTE"}
                    </span>
                    <h3 className="text-lg font-serif text-neutral-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors font-semibold">
                      {product.name}
                    </h3>
                    <p className="text-neutral-500 text-xs leading-relaxed font-sans line-clamp-3">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Rounded CTAs side-by-side - No tech spec matrix grid on the card */}
                <div className="flex gap-2.5 mt-auto pt-2">
                  <button
                    onClick={() => setActiveProductModal(product)}
                    className="flex-1 py-3 px-4 bg-slate-50 border border-neutral-200 hover:border-neutral-300 text-neutral-600 hover:text-neutral-900 text-[10px] font-sans font-bold uppercase tracking-widest transition-all duration-300 rounded-full flex items-center justify-center"
                  >
                    Ficha Técnica
                  </button>
                  <button
                    onClick={() => handleProductConsultation(product)}
                    title="Consultar disponibilidad en Zona Sur"
                    className="flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-sans font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-1 rounded-full shadow-md shadow-blue-500/10 hover:shadow-blue-500/20"
                  >
                    <span>Consultar</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Fallback */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white border border-neutral-150 shadow-sm rounded-3xl">
            <SlidersHorizontal className="w-8 h-8 text-neutral-300 mx-auto mb-4" />
            <h3 className="text-base font-serif text-neutral-700 mb-1 font-semibold">No se encontraron productos</h3>
            <p className="text-neutral-500 text-xs max-w-sm mx-auto leading-relaxed font-sans">
              Pruebe quitando filtros de búsqueda o seleccionando "Todo" en el panel de categorías superior.
            </p>
            <button
              onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
              className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-sans font-bold tracking-widest uppercase transition-all duration-300 rounded-full"
            >
              Reestablecer Filtros
            </button>
          </div>
        )}

      </div>

      {/* DETAILED SPEC SHEET MODAL - Clean, Elegant Light Mode Detail Dashboard with Premium rounded shapes */}
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

