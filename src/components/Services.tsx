import { motion } from "motion/react";
import { SERVICES } from "../data";
import { Truck, FileSpreadsheet, Layers, Coins } from "lucide-react";

const ICON_MAP: Record<string, any> = {
  Truck,
  FileSpreadsheet,
  Layers,
  Coins
};

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-white text-neutral-900 relative border-b border-neutral-100">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-50/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Title Block */}
        <div className="text-center mb-16">
          <span className="text-[11px] font-sans tracking-[0.25em] text-blue-600 uppercase block mb-3 font-extrabold">
            NUESTROS SERVICIOS COMERCIALES
          </span>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-neutral-900 mb-4 font-medium">
            Soporte estratégico para comercios
          </h2>
          <p className="max-w-xl mx-auto text-neutral-500 text-sm leading-relaxed font-sans">
            Garantizo un servicio de entrega directo y asistencia comercial personalizada para optimizar las operaciones de su lubricentro, taller o flota comercial.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv, index) => {
            const IconComp = ICON_MAP[srv.iconName] || Truck;
            return (
              <motion.div
                key={index}
                className="p-8 bg-slate-50/60 hover:bg-white border border-neutral-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 rounded-[2rem] transition-all duration-350 backdrop-blur-sm group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                {/* Icon Container */}
                <div className="w-12 h-12 bg-white border border-neutral-200 flex items-center justify-center mb-6 group-hover:border-blue-500 rounded-2xl transition-all shadow-sm">
                  <IconComp className="w-5 h-5 text-blue-600 transition-colors" />
                </div>

                <h3 className="text-lg font-serif text-neutral-900 mb-3 group-hover:text-blue-600 transition-colors font-semibold">
                  {srv.title}
                </h3>
                
                <p className="text-neutral-500 text-xs leading-relaxed font-sans">
                  {srv.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

