import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQS } from "../data";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white text-neutral-800 relative border-b border-neutral-100">
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-50/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6">
        
        {/* Title Block */}
        <div className="text-center mb-16">
          <span className="text-[11px] font-sans tracking-[0.25em] text-blue-600 uppercase block mb-3 font-extrabold">
            PREGUNTAS FRECUENTES
          </span>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-neutral-900 mb-4 font-medium">
            Resolución de dudas
          </h2>
          <p className="max-w-md mx-auto text-neutral-500 text-sm leading-relaxed font-sans">
            Respuestas directas y claras sobre plazos de entrega, logística y métodos de comercialización en Zona Sur.
          </p>
        </div>

        {/* Modular Rounded Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                className={`border transition-all duration-300 rounded-[1.5rem] overflow-hidden ${
                  isOpen 
                    ? "bg-slate-50/50 border-blue-200/60 shadow-md shadow-blue-500/5" 
                    : "bg-white border-neutral-100 hover:border-blue-100 hover:shadow-sm"
                }`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex justify-between items-center text-left p-6 focus:outline-none group"
                >
                  <span className="text-base font-serif text-neutral-800 group-hover:text-blue-600 transition-colors pr-6 font-semibold">
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center transition-all ${
                    isOpen ? "bg-blue-600 border-blue-600 text-white" : "bg-white text-neutral-400 group-hover:border-blue-500 group-hover:text-blue-500"
                  }`}>
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>

                {/* Accordion Content Panels */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-neutral-550 leading-relaxed font-sans border-t border-dashed border-neutral-200/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

