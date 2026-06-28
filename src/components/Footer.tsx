import { Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-slate-50 text-neutral-800 border-t border-neutral-200 pt-16 pb-8 relative overflow-hidden">
      
      {/* Decorative ambient footer light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Col 1: Brand & Desc */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="text-neutral-900 font-serif tracking-[0.1em] text-2xl font-semibold">
                PEAK®
              </div>
              <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-neutral-400 uppercase mt-1 pl-2 border-l border-neutral-200">
                PORTFOLIO PROFESIONAL
              </span>
            </div>
            
            <p className="text-neutral-500 text-xs leading-relaxed mb-6 max-w-sm font-sans">
              Catálogo comercial y canal de cotización directo de productos PEAK® para lubricentros, talleres e industrias con logística estratégica dedicada en la Zona Sur.
            </p>

            <div className="text-[9px] font-sans text-neutral-500 uppercase tracking-widest border border-neutral-200 bg-white px-4 py-2 w-fit font-semibold rounded-full shadow-sm">
              Garantía de origen certificada
            </div>
          </div>

          {/* Col 2: Navigation Shortcuts */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-sans font-bold uppercase text-neutral-400 tracking-[0.25em] mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-neutral-500 font-medium">
              <li>
                <button onClick={() => handleLinkClick("sobre-mi")} className="hover:text-blue-600 transition-colors cursor-pointer">
                  El Distribuidor
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("destacados")} className="hover:text-blue-600 transition-colors cursor-pointer">
                  Productos destacados
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("productos")} className="hover:text-blue-600 transition-colors cursor-pointer">
                  Catálogo completo
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("servicios")} className="hover:text-blue-600 transition-colors cursor-pointer">
                  Nuestros servicios
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick("faq")} className="hover:text-blue-600 transition-colors cursor-pointer">
                  Preguntas frecuentes
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Logistics */}
          <div className="md:col-span-4">
            <h4 className="text-[10px] font-sans font-bold uppercase text-neutral-400 tracking-[0.25em] mb-4">
              Contacto Directo
            </h4>
            <ul className="space-y-3.5 text-xs font-sans text-neutral-500">
              <li className="leading-relaxed">
                Utilice el formulario de contacto técnico o el botón directo de WhatsApp disponible en cada ficha para consultas de cotización mayorista y disponibilidad.
              </li>
              <li className="flex items-center gap-2.5 font-semibold text-neutral-700">
                <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>contacto@distribuidorpeak.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Separator */}
        <div className="h-px bg-neutral-200 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-sans tracking-wider text-neutral-400 uppercase font-bold">
          <div>
            &copy; {new Date().getFullYear()} Distribuidor Especializado PEAK® • Buenos Aires Sur.
          </div>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-neutral-200 hover:border-neutral-300 text-neutral-500 hover:text-blue-600 rounded-full transition-all text-[10px] shadow-sm"
            title="Volver al inicio"
          >
            Subir <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}

