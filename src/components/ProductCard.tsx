import { useState } from "react";
import { motion } from "motion/react";
import { Product, GroupedProduct } from "../types";
import { CATEGORIES } from "../data";
import { ShieldCheck, ArrowUpRight, Package, Grid, Hash, Info } from "lucide-react";

interface ProductCardProps {
  key?: string;
  group: GroupedProduct;
  onViewDetails: (product: Product) => void;
  onConsult: (product: Product) => void;
}

export default function ProductCard({ group, onViewDetails, onConsult }: ProductCardProps) {
  // Safe variety selection state
  const [selectedId, setSelectedId] = useState<string>(
    group.varieties.find(v => v.highlighted)?.id || group.varieties[0]?.id || ""
  );

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

  return (
    <motion.div
      layout
      className="group relative bg-white border border-neutral-100 hover:border-blue-100 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.06)] p-6 rounded-[2.5rem]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div>
        {/* Top Badges */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-[9px] font-sans tracking-[0.15em] text-blue-600 uppercase font-extrabold flex items-center gap-1.5 bg-blue-50/50 px-3 py-1 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-500" /> ORIGINAL PEAK
          </span>
          <span className="text-[9px] font-mono font-bold text-neutral-400 bg-slate-100/80 px-2.5 py-1 rounded-full tracking-wider">
            #{code}
          </span>
        </div>

        {/* Ambient Display Image Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-b from-blue-50/10 to-blue-50/30 rounded-[2rem] flex items-center justify-center p-6 mb-5 transition-all duration-500 group-hover:from-blue-50/20 group-hover:to-blue-50/40">
          <img
            src={activeProduct.image}
            alt={activeProduct.name}
            referrerPolicy="no-referrer"
            className="object-contain w-full h-full opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out z-10 filter drop-shadow-md"
          />

          {activeProduct.highlighted && (
            <div className="absolute top-4 right-4 bg-blue-600 text-white text-[8px] font-sans font-extrabold tracking-widest px-3 py-1.5 rounded-full z-20 shadow-sm shadow-blue-500/10">
              DESTACADO
            </div>
          )}
        </div>

        {/* Header content details */}
        <div className="mb-4">
          <span className="text-[9px] font-sans tracking-[0.15em] text-blue-500 uppercase font-extrabold block mb-1">
            {CATEGORIES.find((c) => c.id === activeProduct.categoryId)?.name || "LUBRICANTE"}
          </span>
          <h3 className="text-lg font-serif text-neutral-900 mb-1.5 leading-tight group-hover:text-blue-600 transition-colors font-semibold">
            {group.baseName}
          </h3>
          <p className="text-neutral-500 text-xs leading-relaxed font-sans line-clamp-3">
            {activeProduct.description}
          </p>
        </div>

        {/* Varieties Selector - Rendered only if there are multiple packaging sizes */}
        {group.varieties.length > 1 && (
          <div className="mb-5 bg-slate-50/50 border border-slate-100/80 p-3 rounded-2xl">
            <span className="block text-[8px] font-sans text-neutral-400 uppercase tracking-widest font-extrabold mb-2 px-1">
              Seleccionar Presentación
            </span>
            <div className="flex flex-wrap gap-1.5">
              {group.varieties.map((v) => {
                const varEnvase = getSpecValue(v, "Envase") || "Genérico";
                const isSelected = v.id === selectedId;
                return (
                  <button
                    key={v.id}
                    onClick={() => setSelectedId(v.id)}
                    className={`px-3.5 py-1.5 text-[9px] font-sans font-bold uppercase tracking-wider transition-all rounded-full border ${
                      isSelected
                        ? "bg-blue-600 border-blue-600 text-white shadow-sm shadow-blue-500/10"
                        : "bg-white border-neutral-200 text-neutral-600 hover:border-neutral-300 hover:text-neutral-900"
                    }`}
                  >
                    {varEnvase}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Technical Specification Matrix Shelf */}
        <div className="mb-6 bg-slate-50/30 border border-neutral-100 rounded-2xl p-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col">
              <span className="text-[8px] font-sans text-neutral-400 uppercase tracking-widest font-bold mb-1 flex items-center gap-1">
                <Hash className="w-2.5 h-2.5 text-blue-500" /> CÓDIGO
              </span>
              <span className="text-[10px] font-mono text-neutral-800 font-extrabold truncate" title={code}>
                {code}
              </span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-[8px] font-sans text-neutral-400 uppercase tracking-widest font-bold mb-1 flex items-center gap-1">
                <Package className="w-2.5 h-2.5 text-blue-500" /> {capacity ? "GAL/LT" : "ENVASE"}
              </span>
              <span className="text-[10px] font-sans text-neutral-800 font-extrabold truncate" title={capacity || envase}>
                {capacity || envase}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[8px] font-sans text-neutral-400 uppercase tracking-widest font-bold mb-1 flex items-center gap-1">
                <Grid className="w-2.5 h-2.5 text-blue-500" /> U. PALLET
              </span>
              <span className="text-[10px] font-sans text-neutral-800 font-extrabold truncate">
                {palletQty || "—"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Fully Rounded Action CTAs */}
      <div className="flex gap-2.5 mt-auto pt-2">
        <button
          onClick={() => onViewDetails(activeProduct)}
          className="flex-1 py-3 px-4 bg-slate-50 border border-neutral-200 hover:border-neutral-300 text-neutral-600 hover:text-neutral-900 text-[10px] font-sans font-bold uppercase tracking-widest transition-all duration-300 rounded-full flex items-center justify-center gap-1"
        >
          <Info className="w-3 h-3 text-neutral-400 group-hover:text-neutral-600" />
          <span>Ficha Técnica</span>
        </button>
        <button
          onClick={() => onConsult(activeProduct)}
          title={`Consultar disponibilidad de ${activeProduct.name}`}
          className="flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-sans font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-1 rounded-full shadow-md shadow-blue-500/10 hover:shadow-blue-500/20"
        >
          <span>Consultar</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
}
