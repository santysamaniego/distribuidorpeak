import { motion } from "motion/react";
import { PRODUCTS } from "../data";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

export default function FeaturedProducts() {
  const featured = PRODUCTS.filter((p) => p.highlighted).slice(0, 6);

  const handleQuoteClick = (productName: string, productId: string) => {
    const phoneNumber = "5491134567890"; // Reemplazar por número del distribuidor
    const message = `Hola! Vi en la web el producto destacado: ${productName} (ID: ${productId}). Me interesaría solicitar una cotización y conocer la disponibilidad. ¡Gracias!`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section id="destacados" className="py-24 bg-white text-neutral-800 relative border-b border-neutral-100 overflow-hidden">
      {/* Decorative clean radial background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Title Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="text-[11px] font-sans tracking-[0.25em] text-blue-600 uppercase block mb-3 font-extrabold">
              RENDIMIENTO MÁXIMO CERTIFICADO
            </span>
            <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-neutral-900 font-medium">
              Línea de productos destacados
            </h2>
          </div>
          <p className="text-neutral-500 text-sm max-w-sm leading-relaxed font-sans">
            Las soluciones más solicitadas por lubricentros, talleres y flotas en Zona Sur debido a su excelente rendimiento bajo especificaciones de equipo original.
          </p>
        </div>

        {/* Featured Products Showcase - Fully rounded organic card style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product, index) => (
            <motion.div
              key={product.id}
              className="group relative bg-white border border-neutral-100 hover:border-blue-100 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-500/5 p-6 rounded-[2.5rem]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              
              <div>
                {/* Top Info Ribbon */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[9px] font-sans tracking-[0.15em] text-blue-600 uppercase font-extrabold flex items-center gap-1 bg-blue-50/50 px-2.5 py-1 rounded-full">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-500" /> PRODUCTO EXCLUSIVO
                  </span>
                  <span className="text-[9px] font-mono font-bold text-neutral-400 bg-slate-100 px-2.5 py-1 rounded-full tracking-wider">
                    #{product.id}
                  </span>
                </div>

                {/* Ambient rounded image container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-blue-50/20 rounded-[2rem] flex items-center justify-center p-6 mb-6 transition-all duration-500 group-hover:bg-blue-50/40">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="object-contain w-full h-full opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out z-10 filter drop-shadow-md"
                  />
                  
                  {/* Big background index number in soft blue */}
                  <div className="absolute top-4 left-5 font-serif text-5xl font-extrabold text-blue-500/10 group-hover:text-blue-500/15 transition-colors pointer-events-none select-none">
                    0{index + 1}
                  </div>
                </div>

                {/* Title & Description Container */}
                <div className="mb-6">
                  <h3 className="text-xl font-serif text-neutral-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors font-semibold">
                    {product.name}
                  </h3>
                  
                  <p className="text-neutral-500 text-xs leading-relaxed font-sans line-clamp-3">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Rounded solid blue button at the bottom */}
              <button
                onClick={() => handleQuoteClick(product.name, product.id)}
                className="w-full inline-flex items-center justify-between px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-sans font-bold tracking-widest uppercase transition-all duration-300 rounded-full shadow-md shadow-blue-500/10 hover:shadow-blue-500/20"
              >
                <span>Solicitar Cotización</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

