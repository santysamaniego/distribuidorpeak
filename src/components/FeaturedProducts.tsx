import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PRODUCTS, CATEGORIES } from "../data";
import { Product, GroupedProduct } from "../types";
import ProductCard from "./ProductCard";
import { ArrowUpRight, ShieldCheck, X, SlidersHorizontal } from "lucide-react";

export default function FeaturedProducts() {
  const [activeProductModal, setActiveProductModal] = useState<Product | null>(null);

  // Helper to extract base name by removing anything inside parenthesis at the end
  const getBaseName = (name: string) => {
    const index = name.indexOf(" (");
    return index !== -1 ? name.substring(0, index).trim() : name;
  };

  // Group products dynamically and select the highlighted ones
  const featuredGroups = useMemo(() => {
    const groups: { [baseName: string]: GroupedProduct } = {};
    
    PRODUCTS.forEach((product) => {
      const base = getBaseName(product.name);
      if (!groups[base]) {
        groups[base] = {
          baseName: base,
          categoryId: product.categoryId,
          description: product.description,
          highlighted: false,
          image: product.image,
          varieties: []
        };
      }
      if (product.highlighted) {
        groups[base].highlighted = true;
      }
      groups[base].varieties.push(product);
    });
    
    return Object.values(groups).filter(group => group.highlighted).slice(0, 6);
  }, []);

  const handleProductConsultation = (product: Product) => {
    const phoneNumber = "5491172528552"; // Reemplazar por número del distribuidor
    const message = `Hola! Vi en la sección de Destacados de la web el producto:\n\n*Producto:* ${product.name}\n*ID:* ${product.id}\n*Categoría:* ${CATEGORIES.find(c => c.id === product.categoryId)?.name || 'General'}\n\nMe interesaría conocer precio, stock y plazos de entrega en Zona Sur. ¡Gracias!`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section id="destacados" className="py-24 bg-white text-neutral-800 relative border-b border-neutral-100 overflow-hidden">
      {/* Decorative clean radial background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Title Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="text-[11px] font-sans tracking-[0.25em] text-blue-600 uppercase block mb-3 font-extrabold">
              RENDIMIENTO MÁXIMO CERTIFICADO
            </span>
            <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-neutral-900 font-medium">
              Línea de productos destacados
            </h2>
          </div>
          <p className="text-neutral-500 text-sm max-w-sm leading-relaxed font-sans">
            Las soluciones más solicitadas por lubricentros, talleres y flotas en Zona Sur debido a su excelente rendimiento bajo especificaciones de equipo original.
          </p>
        </div>

        {/* Featured Products Showcase - Fully rounded organic card style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredGroups.map((group) => (
            <ProductCard
              key={group.baseName}
              group={group}
              onViewDetails={setActiveProductModal}
              onConsult={handleProductConsultation}
              isFeatured={true}
            />
          ))}
        </div>
      </div>

      {/* DETAILED SPEC SHEET MODAL - Elegant Light Mode Detail Dashboard */}
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

              {/* Header Image Chamber */}
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

