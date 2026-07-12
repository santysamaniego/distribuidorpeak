import { motion } from "motion/react";

const BRANDS = [
  { name: "PEAK", logo: "/logo_peakblanco.png" },
  { name: "BlueDEF", logo: "/logo_bluedef.png" },
  { name: "Final Charge", logo: "/logo_finalcharge.png" },
  { name: "Fleet Charge", logo: "/logo_fleetcharge.png" },
  { name: "Química True", logo: "/logo_quimicatrue.png" }
];

export default function AssociatedBrands() {
  return (
    <section className="py-16 bg-neutral-950 border-b border-neutral-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-10">
          <span className="text-[10px] font-sans tracking-[0.3em] text-blue-500 uppercase block mb-2 font-bold">
            TECNOLOGÍA Y CALIDAD GLOBAL
          </span>
          <h2 className="text-xl md:text-2xl font-serif tracking-tight text-white font-medium">
            Nuestras Marcas Asociadas
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center">
          {BRANDS.map((brand, idx) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="w-full h-24 bg-neutral-900/50 hover:bg-neutral-900/90 border border-white/5 hover:border-blue-500/30 px-6 py-4 rounded-2xl flex items-center justify-center transition-all duration-300 group shadow-md"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                referrerPolicy="no-referrer"
                className="max-h-12 max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
