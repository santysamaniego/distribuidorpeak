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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 text-blue-800 text-xs font-sans tracking-[0.15em] uppercase mb-6 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" /> Mi Compromiso
          </div>
          
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
          initial={{ x: 220, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{
            type: "spring",
            stiffness: 45,
            damping: 15,
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 bg-slate-50/60 hover:bg-white border border-neutral-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 backdrop-blur-sm group rounded-[2rem]">
              <div className="w-12 h-12 bg-white border border-neutral-200 flex items-center justify-center mb-6 group-hover:border-blue-500 rounded-2xl transition-all shadow-sm">
                <Award className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-serif text-neutral-900 mb-3 group-hover:text-blue-600 transition-colors font-semibold">
                Soporte y Trayectoria
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed font-sans">
                PEAK es líder absoluto en el mercado americano. Mi labor es acercar esa tecnología y respaldo técnico oficial directamente a su taller o negocio local.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-slate-50/60 hover:bg-white border border-neutral-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 backdrop-blur-sm group rounded-[2rem]">
              <div className="w-12 h-12 bg-white border border-neutral-200 flex items-center justify-center mb-6 group-hover:border-blue-500 rounded-2xl transition-all shadow-sm">
                <Flame className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-serif text-neutral-900 mb-3 group-hover:text-blue-600 transition-colors font-semibold">
                Alta Operatividad
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed font-sans">
                Los lubricantes y fluidos que distribuyo están diseñados para resistir el desgaste severo, optimizando el rendimiento térmico y mecánico de los motores.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-slate-50/60 hover:bg-white border border-neutral-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 backdrop-blur-sm group rounded-[2rem]">
              <div className="w-12 h-12 bg-white border border-neutral-200 flex items-center justify-center mb-6 group-hover:border-blue-500 rounded-2xl transition-all shadow-sm">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-serif text-neutral-900 mb-3 group-hover:text-blue-600 transition-colors font-semibold">
                Garantía Certificada
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed font-sans">
                Cada lote despachado cuenta con trazabilidad oficial, protegiendo su inversión con la absoluta confianza de un producto legítimo PEAK.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

