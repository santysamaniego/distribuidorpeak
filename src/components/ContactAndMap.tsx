import React, { useState } from "react";
import { motion } from "motion/react";
import { COVERAGE_ZONES } from "../data";
import { Send, MapPin, CheckCircle, Navigation, Info } from "lucide-react";

const MAP_SOURCES: Record<string, string> = {
  "Avellaneda": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.3323081514787!2d-58.372553!3d-34.66258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3334fd912ec9b%3A0xc331a98075f72365!2sAvellaneda%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1719600000000!5m2!1ses!2sar",
  "Lanús": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.252062562575!2d-58.4116527!3d-34.6987154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc330df32cf5f%3A0x7d6f582736cb4e5a!2sLan%C3%BAs%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1719600000000!5m2!1ses-419!2sar",
  "Lomas de Zamora": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.252062562575!2d-58.415!3d-34.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc36e05ff6477%3A0xc3afbfd8e4eb7216!2sLomas%20de%20Zamora%252C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1719600000000!5m2!1ses!2sar",
  "Adrogué": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.456012!2d-58.39!3d-34.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd306782db841%3A0x1dcd7961d564fa7c!2sAdrogu%C3%A9%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1719600000000!5m2!1ses!2sar",
  "Quilmes": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.456012!2d-58.25!3d-34.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32e2646d2cb79%3A0xb367e946cb3ee1b0!2sQuilmes%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1719600000000!5m2!1ses!2sar",
  "Ezeiza": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.456012!2d-58.52!3d-34.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd131843b44b7%3A0x51c6c5b057fc8661!2sEzeiza%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1719600000000!5m2!1ses!2sar"
};

export default function ContactAndMap() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    phone: "",
    message: "",
  });
  
  const [selectedZone, setSelectedZone] = useState<string>("Lomas de Zamora");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.lastName || !form.phone || !form.message) {
      alert("Por favor completa todos los campos del formulario.");
      return;
    }

    const targetPhone = "5491134567890"; // Número oficial de contacto PEAK
    const formattedText = `Hola! Quiero realizar una consulta.\n\n*Datos de contacto:*\n- Nombre: ${form.name}\n- Apellido: ${form.lastName}\n- Teléfono: ${form.phone}\n\n*Consulta:*\n${form.message}\n\n_Enviado desde el sitio web de Distribución PEAK_`;
    
    const encodedText = encodeURIComponent(formattedText);
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodedText}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setSubmitted(false);
    }, 800);
  };

  return (
    <section id="contacto" className="py-24 bg-white text-neutral-800 relative border-b border-neutral-100">
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-50/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Title Block */}
        <div className="text-center md:text-left mb-16">
          <span className="text-[11px] font-sans tracking-[0.25em] text-blue-600 uppercase block mb-3 font-extrabold">
            CONTACTO COMERCIAL
          </span>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-neutral-900 font-medium">
            Formulario de consulta rápida
          </h2>
        </div>

        {/* Dual Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Minimal Contact Form with beautifully rounded containers */}
          <div className="lg:col-span-5 bg-slate-50 border border-neutral-150 p-8 rounded-3xl shadow-sm relative flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-serif text-neutral-900 mb-6 font-semibold">
                Envianos un mensaje directo
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Row: Nombre & Apellido */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-sans tracking-widest uppercase text-neutral-500 mb-2 font-bold">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Ej. Juan"
                      className="w-full bg-white border border-neutral-200 focus:border-blue-500 rounded-xl py-3 px-4 text-xs font-sans text-neutral-800 outline-none transition-all placeholder-neutral-300 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-sans tracking-widest uppercase text-neutral-500 mb-2 font-bold">
                      Apellido
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Ej. Pérez"
                      className="w-full bg-white border border-neutral-200 focus:border-blue-500 rounded-xl py-3 px-4 text-xs font-sans text-neutral-800 outline-none transition-all placeholder-neutral-300 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {/* Teléfono */}
                <div>
                  <label className="block text-[10px] font-sans tracking-widest uppercase text-neutral-500 mb-2 font-bold">
                    Número de Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="Ej. +54 9 11 3456 7890"
                    className="w-full bg-white border border-neutral-200 focus:border-blue-500 rounded-xl py-3 px-4 text-xs font-sans text-neutral-800 outline-none transition-all placeholder-neutral-300 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Consulta */}
                <div>
                  <label className="block text-[10px] font-sans tracking-widest uppercase text-neutral-500 mb-2 font-bold">
                    Consulta o Pedido técnico
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Escribí tu consulta, productos requeridos..."
                    className="w-full bg-white border border-neutral-200 focus:border-blue-500 rounded-xl py-3 px-4 text-xs font-sans text-neutral-800 outline-none transition-all resize-none placeholder-neutral-300 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Submit button with rounded pill/oval corners */}
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold tracking-widest uppercase rounded-full text-xs transition-all duration-300 disabled:opacity-50 shadow-md shadow-blue-500/10"
                >
                  {submitted ? (
                    <>
                      <CheckCircle className="w-4 h-4" /> Redirigiendo...
                    </>
                  ) : (
                    <>
                      Enviar a WhatsApp <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2 text-[10px] font-sans tracking-wider text-neutral-400 justify-center mt-4">
                  <Info className="w-3.5 h-3.5 text-blue-500" />
                  <span>Serás redirigido al chat de atención oficial.</span>
                </div>

              </form>
            </div>
          </div>

          {/* Right Side: Elegant Minimal Map Guide with actual Google Map */}
          <div className="lg:col-span-7 bg-slate-50 border border-neutral-150 p-8 rounded-3xl flex flex-col justify-between h-full min-h-[500px] shadow-sm">
            <div className="flex flex-col h-full justify-between gap-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-serif text-neutral-900 flex items-center gap-2 font-semibold">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    Zona de cobertura logística
                  </h3>
                  <span className="text-[9px] font-sans text-blue-600 px-3 py-1 bg-white border border-neutral-200 uppercase font-bold tracking-wider rounded-full">
                    Buenos Aires Sur
                  </span>
                </div>
                <p className="text-neutral-500 text-xs leading-relaxed mb-6 font-sans">
                  Nuestra red de logística atiende periódicamente a comercios minoristas y mayoristas en toda la Zona Sur. Seleccione su localidad para visualizar el mapa de la zona y conocer la frecuencia de visitas semanal con envío gratuito.
                </p>

                {/* Google Map Frame with elegant rounding and shadows */}
                <div className="relative w-full bg-white border border-neutral-200 rounded-2xl p-1.5 mb-6 overflow-hidden h-72 shadow-inner">
                  <iframe
                    title="Ubicación de Distribución"
                    src={MAP_SOURCES[selectedZone] || MAP_SOURCES["Lomas de Zamora"]}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl w-full h-full"
                  />
                </div>
              </div>

              {/* Dynamic Localities Selector - Rounded and beautiful */}
              <div>
                <span className="block text-[10px] font-sans tracking-widest uppercase text-neutral-400 mb-3 font-bold">
                  LOCALIDADES CON COBERTURA DE ENTREGA DIRECTA
                </span>
                <div className="flex flex-wrap gap-2 mb-6">
                  {COVERAGE_ZONES.map((zone) => {
                    const isActive = selectedZone === zone.name;
                    return (
                      <button
                        key={zone.name}
                        onClick={() => setSelectedZone(zone.name)}
                        className={`px-4 py-2 text-[11px] font-sans font-semibold tracking-wider uppercase transition-all duration-300 rounded-full border ${
                          isActive
                            ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/10"
                            : "bg-white text-neutral-600 hover:text-neutral-900 border-neutral-200 hover:border-neutral-300"
                        }`}
                      >
                        {zone.name}
                      </button>
                    );
                  })}
                </div>

                {/* Selected Zone Detail Panel */}
                <div className="bg-white p-5 border border-neutral-150 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm">
                  <div>
                    <span className="text-[9px] font-sans text-neutral-400 uppercase tracking-widest block mb-1 font-bold">
                      LOCALIDAD DE RECORRIDO
                    </span>
                    <h4 className="text-base font-serif text-neutral-800 flex items-center gap-2 font-medium">
                      <Navigation className="w-4 h-4 text-blue-600 rotate-45" />
                      {selectedZone}
                    </h4>
                  </div>
                  
                  <div className="bg-blue-50/50 px-4 py-2.5 border border-blue-100 rounded-xl w-full sm:w-auto text-center sm:text-right">
                    <span className="text-[8px] font-sans text-blue-500 uppercase tracking-widest block mb-0.5 font-bold">
                      Logística Frecuente
                    </span>
                    <span className="text-xs font-sans text-blue-600 font-extrabold tracking-wider uppercase">
                      {COVERAGE_ZONES.find(z => z.name === selectedZone)?.status || "Entrega Frecuente"}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

