import { motion } from "motion/react";

const TICKER_ITEMS = [
  "DISTRIBUIDOR OFICIAL PEAK",
  "ENVÍOS DIARIOS EN ZONA SUR",
  "PRODUCTOS 100% GARANTIZADOS",
  "N°1 EN EL MERCADO AMERICANO",
  "ASESORAMIENTO TÉCNICO CERTIFICADO",
  "STOCK COMPLETO Y PERMANENTE",
];

export default function Ticker() {
  const doubleItems = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="relative w-full bg-blue-600 text-white overflow-hidden py-3 border-y border-blue-500/20 z-10">
      <div className="flex whitespace-nowrap min-w-full">
        <motion.div
          className="flex gap-16 text-[10px] font-sans tracking-[0.2em] font-semibold uppercase"
          animate={{ x: [0, -800] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {doubleItems.map((item, idx) => (
            <span key={idx} className="inline-flex items-center gap-3">
              <span>{item}</span>
              <span className="text-blue-300">•</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

