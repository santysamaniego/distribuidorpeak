import { motion } from "motion/react";
import { MessageCircle, Instagram, ChevronDown } from "lucide-react";

export default function Hero() {
  const handleWhatsAppContact = () => {
    const phoneNumber = "5491172528552"; // Reemplazar por número del distribuidor
    const message = "¡Hola! Quisiera ponerme en contacto con el distribuidor oficial de PEAK para realizar una consulta comercial sobre lubricantes y fluidos.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleInstagramContact = () => {
    window.open("https://instagram.com/rpdistribuidora1_", "_blank"); // Reemplazar por Instagram del distribuidor
  };

  const scrollToCatalog = () => {
    const element = document.getElementById("productos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-[95vh] bg-neutral-950 text-white flex flex-col items-center justify-center overflow-hidden py-24 border-b border-neutral-900">
      
      {/* Background Hero Banner Image with premium light overlay */}
      <div className="absolute inset-0 z-0 bg-neutral-950">
        <img
          src="/fondo_hero.png"
          alt="PEAK Automotive Lubricants Banner"
          referrerPolicy="no-referrer"
          className="object-cover w-full h-full opacity-80 scale-100 filter brightness-[0.95] contrast-[1.02]"
        />
        {/* Extremely soft, subtle overlays to preserve text readability while showing the image beautifully */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,10,10,0.05)_0%,rgba(10,10,10,0.3)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-neutral-950/40 to-neutral-950/90" />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full flex flex-col justify-center items-center text-center mt-8">
        
        {/* Title: Serif luxury font with independent light sheen animation */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7.5xl font-serif tracking-tight leading-[1.08] mb-6 max-w-4xl font-medium [text-shadow:_0_2px_12px_rgba(0,0,0,0.9)]"
        >
          <span className="text-shine inline-block py-1">Lubricación de alto rendimiento</span> <br />
          <span className="text-shine-blue italic font-normal font-serif inline-block py-1">PEAK® Premium</span>
        </motion.h1>

        {/* Short, precise description - Now mentioning "Distribuidor Mayorista" and "Portfolio Profesional" natively */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-neutral-300 text-sm sm:text-base lg:text-lg max-w-3xl mb-12 leading-relaxed font-sans [text-shadow:_0_1px_6px_rgba(0,0,0,0.8)]"
        >
          Como <strong className="text-white">Distribuidor Mayorista</strong> oficial de PEAK®, presentamos un <strong className="text-white">Portfolio Profesional</strong> de lubricantes, grasas y refrigerantes bajo rigurosos estándares globales de equipo original. Abastecimiento inmediato con entrega bonificada y asesoramiento técnico integral en Zona Sur.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center mb-16"
        >
          {/* Main WhatsApp Contact */}
          <button
            onClick={handleWhatsAppContact}
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-xs tracking-widest uppercase rounded-full transition-all duration-300 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2.5 hover:scale-[1.02]"
          >
            Contactar por WhatsApp <MessageCircle className="w-4 h-4" />
          </button>

          {/* Instagram Link - Styled beautifully for dark bg */}
          <button
            onClick={handleInstagramContact}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/30 font-sans font-bold text-xs tracking-widest uppercase rounded-full transition-all duration-300 flex items-center justify-center gap-2.5 shadow-sm"
          >
            Instagram Oficial <Instagram className="w-4 h-4 text-neutral-300" />
          </button>
        </motion.div>

        {/* Bottom micro trust metrics with sleek white borders */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-3 gap-6 sm:gap-16 border-t border-white/10 pt-10 w-full max-w-3xl justify-items-center mb-10"
        >
          <div className="text-center">
            <span className="text-2xl sm:text-3xl font-serif text-blue-400 font-semibold block">100%</span>
            <span className="text-[9px] font-sans text-neutral-400 uppercase tracking-widest font-bold">Garantizado</span>
          </div>
          <div className="text-center">
            <span className="text-2xl sm:text-3xl font-serif text-blue-400 font-semibold block">Zona Sur</span>
            <span className="text-[9px] font-sans text-neutral-400 uppercase tracking-widest font-bold">Distribución</span>
          </div>
          <div className="text-center">
            <span className="text-2xl sm:text-3xl font-serif text-blue-400 font-semibold block">Original</span>
            <span className="text-[9px] font-sans text-neutral-400 uppercase tracking-widest font-bold">Línea Oficial</span>
          </div>
        </motion.div>

        {/* Scroll indicator with bouncing arrow and shiny sweep effect */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center gap-2.5 cursor-pointer mt-4"
          onClick={scrollToCatalog}
        >
          <span className="text-[9px] font-sans tracking-[0.25em] text-neutral-400 uppercase font-extrabold">
            Explorar Catálogo
          </span>
          <div className="relative w-10 h-10 rounded-full border border-white/20 hover:border-white/40 flex items-center justify-center bg-white/5 backdrop-blur-sm arrow-bounce overflow-hidden group">
            {/* Reflecting light beam sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full arrow-shine-sweep pointer-events-none" />
            <ChevronDown className="w-5 h-5 text-white/80 group-hover:text-white" />
          </div>
        </motion.div>

      </div>

      {/* Bottom overlay fine shadow */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none" />
    </section>
  );
}


