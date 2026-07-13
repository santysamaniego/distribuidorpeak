import { useState, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Product, GroupedProduct } from "../types";
import { CATEGORIES } from "../data";
import { 
  ShieldCheck, 
  ArrowUpRight, 
  Info, 
  Sparkles
} from "lucide-react";

interface ProductCardProps {
  key?: string;
  group: GroupedProduct;
  onViewDetails: (product: Product) => void;
  onConsult: (product: Product) => void;
  isFeatured?: boolean;
}

export default function ProductCard({ group, onViewDetails, onConsult, isFeatured = false }: ProductCardProps) {
  // Safe variety selection state
  const [selectedId, setSelectedId] = useState<string>(
    group.varieties.find(v => v.highlighted)?.id || group.varieties[0]?.id || ""
  );

  // Spotlight Coordinates
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Fallback to first variety if selectedId is not active or present in the current list
  const activeProduct = group.varieties.find(v => v.id === selectedId) || group.varieties[0];

  if (!activeProduct) return null;

  // Find specs safely
  const getSpecValue = (product: Product, labelName: string) => {
    return product.specs.find(s => s.label.toLowerCase() === labelName.toLowerCase())?.value || "";
  };

  const code = getSpecValue(activeProduct, "Código") || activeProduct.id;
  const envase = getSpecValue(activeProduct, "Envase") || "Estándar";
  const capacity = getSpecValue(activeProduct, "Gal/Lt") || getSpecValue(activeProduct, "Presentación") || "";
  const palletQty = getSpecValue(activeProduct, "Unidades x Pallet") || "";

  // Get clean category name
  const categoryName = CATEGORIES.find((c) => c.id === activeProduct.categoryId)?.name || "LUBRICANTE";

  // Clean compact name for the packaging toggle pills
  const getCompactName = (v: Product) => {
    const cap = getSpecValue(v, "Gal/Lt") || getSpecValue(v, "Presentación") || "";
    const env = getSpecValue(v, "Envase") || "";
    
    if (env.toLowerCase().includes("tambor")) return "Tambor";
    if (env.toLowerCase().includes("balde")) return "Balde";
    if (env.toLowerCase().includes("caja 4") || cap.includes("4x4")) return "Caja 4L";
    if (env.toLowerCase().includes("caja 1") || cap.includes("12x1")) return "Caja 1L";
    
    return cap || env.replace("Caja ", "").replace("Tambor ", "").replace("Balde ", "") || "Estándar";
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      layout
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative bg-white border border-neutral-100 transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-default select-none ${
        isFeatured
          ? "shadow-[0_4px_24px_rgba(0,0,0,0.01)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.045)] p-6 rounded-[24px] max-w-sm mx-auto w-full"
          : "shadow-[0_4px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_40px_80px_rgba(59,130,246,0.06)] p-7 rounded-[30px]"
      }`}
      style={{
        background: isHovered
          ? `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(59, 130, 246, 0.035), transparent 80%)`
          : "white"
      }}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Suttle Glow Aura behind image (Apple / Linear style) */}
      <div 
        className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-blue-400/5 blur-[45px] pointer-events-none transition-all duration-700 ease-out group-hover:scale-125 group-hover:bg-blue-400/8" 
      />

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          {/* Top category label & Minimalist code */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono tracking-[0.2em] text-neutral-400 uppercase font-semibold">
                {categoryName}
              </span>
              {activeProduct.highlighted && (
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span className="text-[8px] font-mono text-blue-500 tracking-wider uppercase font-bold">
                    EDICIÓN PREMIUM
                  </span>
                </div>
              )}
            </div>
            
            <span className="text-[10px] font-mono text-neutral-400 font-medium tracking-wide">
              {code.split('-')[0]}
            </span>
          </div>

          {/* Protagonist Product Stage - Airy, Floating, Spacious */}
          <div className={`relative w-full overflow-visible flex items-center justify-center transition-all duration-500 ${
            isFeatured 
              ? "h-[160px] mb-6" 
              : "h-[220px] mb-7"
          }`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, scale: 0.92, y: 12, rotate: -1 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -12, rotate: 1 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full flex items-center justify-center"
              >
                <motion.img
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  referrerPolicy="no-referrer"
                  className="object-contain w-full h-full max-h-[90%] transition-transform duration-700 ease-out filter drop-shadow-[0_16px_28px_rgba(0,0,0,0.06)] group-hover:scale-105 group-hover:-translate-y-2 group-hover:rotate-1"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Typography Header Block */}
          <div className="mb-5">
            <h3 className="font-sans text-neutral-900 font-bold leading-tight tracking-tight text-xl mb-1.5 transition-colors duration-300 group-hover:text-blue-600">
              {group.baseName}
            </h3>
            
            <p className="text-neutral-500 text-xs font-normal line-clamp-1">
              {activeProduct.description}
            </p>
          </div>

          {/* Compact Minimal Packaging Switcher - Linear Style */}
          {!isFeatured && group.varieties.length > 1 && (
            <div className="mb-6 pt-4 border-t border-neutral-100">
              <div className="flex bg-neutral-100/50 p-1 rounded-full w-fit">
                {group.varieties.map((v) => {
                  const isSelected = v.id === selectedId;
                  const compactName = getCompactName(v);
                  
                  return (
                    <button
                      key={v.id}
                      onClick={() => setSelectedId(v.id)}
                      className={`relative px-4 py-1.5 text-xs font-mono tracking-tight rounded-full transition-all duration-300 cursor-pointer overflow-hidden ${
                        isSelected
                          ? "bg-white text-neutral-900 font-semibold shadow-sm border border-neutral-200/20"
                          : "text-neutral-500 hover:text-neutral-900"
                      }`}
                    >
                      <span className="relative z-10">{compactName}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Minimal High-End Integrated Action CTAs */}
        {isFeatured ? (
          <div className="mt-2">
            <button
              onClick={() => onViewDetails(activeProduct)}
              className="w-full py-3 px-5 bg-neutral-900 hover:bg-blue-600 text-white text-xs font-sans font-semibold tracking-wide transition-all duration-300 rounded-full flex items-center justify-center gap-1.5 group/btn shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_20px_rgba(59,130,246,0.15)]"
            >
              <span>Ver ficha técnica</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>
        ) : (
          <div className="flex gap-3 mt-2">
            <button
              onClick={() => onViewDetails(activeProduct)}
              className="flex-1 py-3 px-5 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200/50 hover:border-neutral-300 text-neutral-800 text-xs font-sans font-medium transition-all duration-300 rounded-full flex items-center justify-center gap-1.5"
            >
              <Info className="w-4 h-4 text-neutral-400" />
              <span>Ficha técnica</span>
            </button>
            
            <button
              onClick={() => onConsult(activeProduct)}
              title={`Consultar disponibilidad de ${activeProduct.name}`}
              className="flex-1 py-3 px-5 bg-blue-600 hover:bg-neutral-900 text-white text-xs font-sans font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 rounded-full shadow-[0_4px_12px_rgba(59,130,246,0.1)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)]"
            >
              <span>Consultar</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
