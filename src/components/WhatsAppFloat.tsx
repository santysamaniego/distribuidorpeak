import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5491134567890"; // Reemplazar por número del distribuidor
    const message = "Hola! Vi su sitio web y quería realizar una consulta general sobre lubricantes y fluidos PEAK.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-40 bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 border border-blue-400/20 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      title="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 animate-pulse group-hover:scale-110 transition-transform" />
      {/* Tooltip on hover */}
      <span className="absolute right-full mr-3 bg-neutral-900 border border-neutral-800 text-white text-[10px] font-sans tracking-widest uppercase py-1.5 px-3 rounded-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        ¿Dudas? Chat Directo
      </span>
    </motion.button>
  );
}
