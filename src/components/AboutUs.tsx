import { motion } from "motion/react";
import { ShieldCheck, Award, Flame } from "lucide-react";

export default function AboutUs() {
  return (
    <section
      id="sobre-mi"
      className="py-24 bg-white text-neutral-900 overflow-hidden relative border-b border-neutral-100"
    >
      {/* Background soft glowing lights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-50/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-blue-50/30 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center justify-center">
        
        {/* UPPER PART: Slides from Left to Center, resets on scroll up */}
        <motion.div
          className="w-full text-center mb-20"
          initial={{ x: -220, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{
            type: "spring",
            stiffness: 45,
            damping: 15,
          }}
        >
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[10px] font-sans font-extrabold uppercase tracking-[0.25em] text-blue-600">
              Mi Compromiso
            </span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-neutral-900 mb-6 font-medium">
            Socio oficial de <span className="text-blue-600 italic">PEAK®</span> en Zona Sur
          </h2>
          
          <p className="max-w-3xl mx-auto text-neutral-600 text-base md:text-lg leading-relaxed font-sans">
            Como distribuidor comercial de la prestigiosa marca PEAK, presento mi portfolio comercial de lubricantes, fluidos especiales y anticongelantes. Abastezco de manera directa a lubricentros, talleres mecánicos, flotas comerciales e industrias en toda la región, garantizando autenticidad de fábrica, asesoría experta y entregas eficientes.
          </p>
        </motion.div>

        {/* LOWER PART: Slides from Right to Center, resets on scroll up */}
        <motion.div
          className="w-full"
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            type: "spring",
            stiffness: 45,
            damping: 15,
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Soporte y Trayectoria (Warm Amber Style) */}
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-8 bg-white border border-neutral-100 hover:border-amber-200 hover:shadow-[0_20px_40px_rgba(245,158,11,0.06)] transition-all duration-300 rounded-[2.5rem] relative overflow-hidden group shadow-[0_4px_25px_rgba(0,0,0,0.01)]"
            >
              {/* Background Glow */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-amber-100/30 rounded-full blur-2xl group-hover:scale-125 transition-all duration-500 pointer-events-none" />
              
              <div className="w-14 h-14 bg-amber-50 border border-amber-100 flex items-center justify-center mb-6 rounded-2xl group-hover:scale-110 group-hover:bg-amber-500 group-hover:border-amber-500 transition-all duration-300 shadow-sm">
                <Award className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-serif text-neutral-900 mb-3 group-hover:text-amber-600 transition-colors font-bold tracking-tight">
                Soporte y Trayectoria
              </h3>
              <p className="text-neutral-500 text-xs leading-relaxed font-sans">
                PEAK es líder absoluto en el mercado americano. Mi labor es acercar esa tecnología y respaldo técnico oficial directamente a su taller o negocio local.
              </p>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 inset-x-0 h-1 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>

            {/* Card 2: Alta Operatividad (Cool Indigo Style) */}
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-8 bg-white border border-neutral-100 hover:border-indigo-200 hover:shadow-[0_20px_40px_rgba(99,102,241,0.06)] transition-all duration-300 rounded-[2.5rem] relative overflow-hidden group shadow-[0_4px_25px_rgba(0,0,0,0.01)]"
            >
              {/* Background Glow */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-indigo-100/30 rounded-full blur-2xl group-hover:scale-125 transition-all duration-500 pointer-events-none" />
              
              <div className="w-14 h-14 bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-6 rounded-2xl group-hover:scale-110 group-hover:bg-indigo-500 group-hover:border-indigo-500 transition-all duration-300 shadow-sm">
                <Flame className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-serif text-neutral-900 mb-3 group-hover:text-indigo-600 transition-colors font-bold tracking-tight">
                Alta Operatividad
              </h3>
              <p className="text-neutral-500 text-xs leading-relaxed font-sans">
                Los lubricantes y fluidos que distribuyo están diseñados para resistir el desgaste severo, optimizando el rendimiento térmico y mecánico de los motores.
              </p>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 inset-x-0 h-1 bg-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>

            {/* Card 3: Garantía Certificada (Vibrant Emerald Style) */}
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-8 bg-white border border-neutral-100 hover:border-emerald-200 hover:shadow-[0_20px_40px_rgba(16,185,129,0.06)] transition-all duration-300 rounded-[2.5rem] relative overflow-hidden group shadow-[0_4px_25px_rgba(0,0,0,0.01)]"
            >
              {/* Background Glow */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-emerald-100/30 rounded-full blur-2xl group-hover:scale-125 transition-all duration-500 pointer-events-none" />
              
              <div className="w-14 h-14 bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6 rounded-2xl group-hover:scale-110 group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-300 shadow-sm">
                <ShieldCheck className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-serif text-neutral-900 mb-3 group-hover:text-emerald-600 transition-colors font-bold tracking-tight">
                Garantía Certificada
              </h3>
              <p className="text-neutral-500 text-xs leading-relaxed font-sans">
                Cada lote despachado cuenta con trazabilidad oficial, protegiendo su inversión con la absoluta confianza de un producto legítimo PEAK.
              </p>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 inset-x-0 h-1 bg-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

