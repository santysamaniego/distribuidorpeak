import { motion } from "motion/react";
import { MessageCircle, Instagram, ArrowRight } from "lucide-react";

export default function Hero() {
  const handleWhatsAppContact = () => {
    const phoneNumber = "5491134567890"; // Reemplazar por número del distribuidor
    const message = "¡Hola! Quisiera ponerme en contacto con el distribuidor oficial de PEAK para realizar una consulta comercial sobre lubricantes y fluidos.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleInstagramContact = () => {
    window.open("https://instagram.com/peak_argentina_fake_url", "_blank"); // Reemplazar por Instagram del distribuidor
  };

  const scrollToCatalog = () => {
    const element = document.getElementById("productos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-[80vh] lg:min-h-[85vh] bg-white text-neutral-900 flex items-center justify-center overflow-hidden py-24 border-b border-neutral-100">
      
      {/* Background Hero Banner Image with premium light overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/peak_hero_banner_1782661433550.jpg"
          alt="PEAK Automotive Lubricants Banner"
          referrerPolicy="no-referrer"
          className="object-cover w-full h-full opacity-[0.08] scale-105"
        />
        {/* Crisp light gradient mask */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full flex flex-col justify-center items-center text-center">
        
        {/* Premium badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4.5 py-1.5 bg-blue-50/50 border border-blue-100 rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
          <span className="text-[10px] sm:text-xs font-sans tracking-[0.2em] text-blue-800 uppercase font-bold">
            Distribuidor Mayorista • Portfolio Profesional
          </span>
        </motion.div>

        {/* Title: Serif luxury font */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7.5xl font-serif tracking-tight leading-[1.08] mb-6 max-w-4xl text-neutral-900 font-medium"
        >
          Lubricación de alto rendimiento <br />
          <span className="text-blue-600 italic font-normal font-serif">PEAK® Premium</span>
        </motion.h1>

        {/* Short, precise description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-neutral-500 text-sm sm:text-base lg:text-lg max-w-2xl mb-12 leading-relaxed font-sans"
        >
          Catálogo comercial de lubricantes, fluidos y anticongelantes bajo estándares mundiales de equipo original. Abastecimiento profesional enfocado en rendimiento y durabilidad.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center"
        >
          {/* Main WhatsApp Contact */}
          <button
            onClick={handleWhatsAppContact}
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-xs tracking-widest uppercase rounded-full transition-all duration-300 shadow-lg shadow-blue-600/15 flex items-center justify-center gap-2.5"
          >
            Contactar por WhatsApp <MessageCircle className="w-4 h-4" />
          </button>

          {/* Instagram Link */}
          <button
            onClick={handleInstagramContact}
            className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-neutral-50 text-neutral-700 border border-neutral-200 hover:border-neutral-300 font-sans font-bold text-xs tracking-widest uppercase rounded-full transition-all duration-300 flex items-center justify-center gap-2.5 shadow-sm"
          >
            Instagram Oficial <Instagram className="w-4 h-4 text-neutral-500" />
          </button>

          {/* Direct Catalog Scroll */}
          <button
            onClick={scrollToCatalog}
            className="px-6 py-3 text-xs font-sans font-semibold uppercase tracking-widest text-neutral-500 hover:text-blue-600 flex items-center justify-center gap-1.5 transition-all duration-300"
          >
            Catálogo completo <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Bottom micro trust metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-3 gap-6 sm:gap-16 mt-20 border-t border-neutral-100 pt-10 w-full max-w-3xl justify-items-center"
        >
          <div className="text-center">
            <span className="text-2xl sm:text-3xl font-serif text-blue-600 font-semibold block">100%</span>
            <span className="text-[9px] font-sans text-neutral-400 uppercase tracking-widest font-bold">Garantizado</span>
          </div>
          <div className="text-center">
            <span className="text-2xl sm:text-3xl font-serif text-blue-600 font-semibold block">Zona Sur</span>
            <span className="text-[9px] font-sans text-neutral-400 uppercase tracking-widest font-bold">Distribución</span>
          </div>
          <div className="text-center">
            <span className="text-2xl sm:text-3xl font-serif text-blue-600 font-semibold block">Original</span>
            <span className="text-[9px] font-sans text-neutral-400 uppercase tracking-widest font-bold">Línea Oficial</span>
          </div>
        </motion.div>

      </div>

      {/* Bottom overlay fine shadow to match our high-end light design */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-neutral-50 to-transparent pointer-events-none" />
    </section>
  );
}

