import { motion } from "motion/react";
import { SERVICES } from "../data";
import { Truck, FileSpreadsheet, Layers, Coins } from "lucide-react";

const ICON_MAP: Record<string, any> = {
  Truck,
  FileSpreadsheet,
  Layers,
  Coins
};

const COLOR_SCHEMES = [
  {
    theme: "blue",
    border: "hover:border-blue-200",
    shadow: "hover:shadow-[0_25px_50px_rgba(59,130,246,0.06)]",
    bgGlow: "bg-blue-100/30",
    iconBg: "bg-blue-50 border-blue-100 group-hover:bg-blue-600 group-hover:border-blue-600",
    iconColor: "text-blue-600 group-hover:text-white",
    textColor: "group-hover:text-blue-600",
    barColor: "bg-blue-500"
  },
  {
    theme: "emerald",
    border: "hover:border-emerald-200",
    shadow: "hover:shadow-[0_25px_50px_rgba(16,185,129,0.06)]",
    bgGlow: "bg-emerald-100/30",
    iconBg: "bg-emerald-50 border-emerald-100 group-hover:bg-emerald-600 group-hover:border-emerald-600",
    iconColor: "text-emerald-600 group-hover:text-white",
    textColor: "group-hover:text-emerald-600",
    barColor: "bg-emerald-500"
  },
  {
    theme: "purple",
    border: "hover:border-purple-200",
    shadow: "hover:shadow-[0_25px_50px_rgba(139,92,246,0.06)]",
    bgGlow: "bg-purple-100/30",
    iconBg: "bg-purple-50 border-purple-100 group-hover:bg-purple-600 group-hover:border-purple-600",
    iconColor: "text-purple-600 group-hover:text-white",
    textColor: "group-hover:text-purple-600",
    barColor: "bg-purple-500"
  },
  {
    theme: "rose",
    border: "hover:border-rose-200",
    shadow: "hover:shadow-[0_25px_50px_rgba(244,63,94,0.06)]",
    bgGlow: "bg-rose-100/30",
    iconBg: "bg-rose-50 border-rose-100 group-hover:bg-rose-600 group-hover:border-rose-600",
    iconColor: "text-rose-600 group-hover:text-white",
    textColor: "group-hover:text-rose-600",
    barColor: "bg-rose-500"
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-16 bg-white text-neutral-900 relative border-b border-neutral-100">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-50/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Title Block */}
        <div className="text-center mb-10">
          <span className="text-[10px] font-sans tracking-[0.25em] text-blue-600 uppercase block mb-2 font-extrabold">
            NUESTROS SERVICIOS COMERCIALES
          </span>
          <h2 className="text-2xl md:text-4xl font-serif tracking-tight text-neutral-900 mb-3 font-medium">
            Soporte estratégico para comercios
          </h2>
          <p className="max-w-xl mx-auto text-neutral-500 text-xs leading-relaxed font-sans">
            Garantizo un servicio de entrega directo y asistencia comercial personalizada para optimizar las operaciones de su lubricentro, taller o flota comercial.
          </p>
        </div>

        {/* Services Grid (Restricted to exactly 3 items in a neat 3-column layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.slice(0, 3).map((srv, index) => {
            const IconComp = ICON_MAP[srv.iconName] || Truck;
            const colors = COLOR_SCHEMES[index % COLOR_SCHEMES.length];
            return (
              <motion.div
                key={index}
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
                className={`p-6 bg-white border border-neutral-100 border-b-4 hover:border-b-blue-600 ${colors.border} ${colors.shadow} rounded-[2rem] transition-all duration-300 relative overflow-hidden group shadow-[0_4px_20px_rgba(0,0,0,0.01)]`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Background Glow */}
                <div className={`absolute -top-12 -right-12 w-28 h-28 ${colors.bgGlow} rounded-full blur-2xl group-hover:scale-125 transition-all duration-500 pointer-events-none`} />

                {/* Top Technical Code Label & Icon */}
                <div className="flex justify-between items-center mb-5">
                  <div className={`w-11 h-11 ${colors.iconBg} border flex items-center justify-center rounded-xl group-hover:scale-110 transition-all duration-300 shadow-sm`}>
                    <IconComp className={`w-4 h-4 ${colors.iconColor} transition-colors duration-300`} />
                  </div>
                  <span className="font-mono text-[10px] font-bold text-neutral-300 group-hover:text-neutral-400 transition-colors">
                    [{String(index + 1).padStart(2, '0')}]
                  </span>
                </div>

                <h3 className={`text-base font-serif text-neutral-900 mb-2 ${colors.textColor} transition-colors font-bold tracking-tight`}>
                  {srv.title}
                </h3>
                
                <p className="text-neutral-500 text-[11px] leading-relaxed font-sans">
                  {srv.description}
                </p>

                {/* Left side vertical accent bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${colors.barColor} transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top`} />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

