import React, { useState } from "react";
import { CATEGORIES } from "../data";
import { 
  X, ChevronDown, Menu
} from "lucide-react";

interface HeaderProps {
  selectedCategory: string;
  setSelectedCategory: (catId: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Header({
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showCatDropdown, setShowCatDropdown] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    setShowCatDropdown(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCategoryClick = (catId: string) => {
    setSelectedCategory(catId);
    setShowCatDropdown(false);
    setIsOpen(false);
    const element = document.getElementById("productos");
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  };

  return (
    <header className="sticky top-0 w-full z-40 bg-white/95 border-b border-neutral-100 shadow-sm backdrop-blur-md">
      
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Distributor Portfolio Label */}
        <button
          onClick={() => handleNavClick("app")}
          className="flex items-center gap-3 group text-left"
        >
          <img className="h-3 w-auto" src="logo_peak.png" alt="Logo Peak" />
          <span className="text-[10px] font-sans font-semibold tracking-[0.25em] text-neutral-400 uppercase mt-1 pl-3 border-l border-neutral-200">
            DISTRIBUIDOR
          </span>
        </button>

        {/* Desktop Nav Links - Beautifully spacious */}
        <nav className="hidden md:flex items-center gap-10">
          <button
            onClick={() => handleNavClick("sobre-mi")}
            className="text-[11px] font-sans font-medium tracking-widest uppercase text-neutral-600 hover:text-blue-600 transition-colors py-2"
          >
            El Distribuidor
          </button>
          
          <button
            onClick={() => handleNavClick("destacados")}
            className="text-[11px] font-sans font-medium tracking-widest uppercase text-neutral-600 hover:text-blue-600 transition-colors py-2"
          >
            Destacados
          </button>

          {/* Categories Dropdown Container */}
          <div className="relative">
            <button
              onClick={() => setShowCatDropdown(!showCatDropdown)}
              onMouseEnter={() => setShowCatDropdown(true)}
              className="inline-flex items-center gap-1.5 text-[11px] font-sans font-medium tracking-widest uppercase text-neutral-600 hover:text-blue-600 transition-colors py-2"
            >
              Productos <ChevronDown className={`w-3 h-3 transition-transform ${showCatDropdown ? 'rotate-180 text-blue-600' : ''}`} />
            </button>

            {showCatDropdown && (
              <div 
                className="absolute top-full left-0 mt-2 w-64 bg-white border border-neutral-100 shadow-xl p-2.5 z-50 flex flex-col gap-1 rounded-2xl"
                onMouseLeave={() => setShowCatDropdown(false)}
              >
                <button
                  onClick={() => handleCategoryClick("all")}
                  className={`px-4 py-2.5 text-[11px] font-sans rounded-xl text-left transition-colors flex items-center justify-between ${
                    selectedCategory === "all" ? "bg-blue-50/50 text-blue-600 font-bold" : "text-neutral-600 hover:bg-neutral-50 hover:text-blue-600"
                  }`}
                >
                  <span>Todos los productos</span>
                </button>
                <div className="h-px bg-neutral-100 my-1.5 mx-2" />
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat.id)}
                    className={`px-4 py-2.5 text-[11px] font-sans rounded-xl text-left transition-colors flex items-center justify-between ${
                      selectedCategory === cat.id ? "bg-blue-50/50 text-blue-600 font-bold" : "text-neutral-600 hover:bg-neutral-50 hover:text-blue-600"
                    }`}
                  >
                    <span>{cat.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick("servicios")}
            className="text-[11px] font-sans font-medium tracking-widest uppercase text-neutral-600 hover:text-blue-600 transition-colors py-2"
          >
            Servicios
          </button>

          <button
            onClick={() => handleNavClick("faq")}
            className="text-[11px] font-sans font-medium tracking-widest uppercase text-neutral-600 hover:text-blue-600 transition-colors py-2"
          >
            FAQ
          </button>

          <button
            onClick={() => handleNavClick("contacto")}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-sans font-semibold text-[10px] tracking-widest uppercase rounded-full transition-all duration-300 shadow-sm shadow-blue-500/10 hover:shadow-blue-500/25"
          >
            Contacto
          </button>
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 bg-neutral-50 border border-neutral-100 text-neutral-600 hover:text-blue-600 hover:bg-neutral-100 transition-colors rounded-full"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-neutral-100 bg-white p-6 flex flex-col gap-4 shadow-lg rounded-b-3xl">
          
          <div className="flex flex-col gap-2">
            <h4 className="text-[10px] font-sans text-neutral-400 uppercase tracking-[0.2em] font-bold mb-1">
              Secciones
            </h4>
            <button
              onClick={() => handleNavClick("sobre-mi")}
              className="text-sm font-sans font-medium text-neutral-700 hover:text-blue-600 py-2.5 text-left border-b border-neutral-100"
            >
              El Distribuidor
            </button>
            <button
              onClick={() => handleNavClick("destacados")}
              className="text-sm font-sans font-medium text-neutral-700 hover:text-blue-600 py-2.5 text-left border-b border-neutral-100"
            >
              Productos Destacados
            </button>
            <button
              onClick={() => handleNavClick("servicios")}
              className="text-sm font-sans font-medium text-neutral-700 hover:text-blue-600 py-2.5 text-left border-b border-neutral-100"
            >
              Nuestros Servicios
            </button>
            <button
              onClick={() => handleNavClick("faq")}
              className="text-sm font-sans font-medium text-neutral-700 hover:text-blue-600 py-2.5 text-left border-b border-neutral-100"
            >
              Preguntas Frecuentes
            </button>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <h4 className="text-[10px] font-sans text-neutral-400 uppercase tracking-[0.2em] font-bold mb-1 flex justify-between">
              <span>Categorías</span>
              <button 
                onClick={() => handleCategoryClick("all")}
                className="text-[10px] text-blue-600 font-bold tracking-wider"
              >
                Ver todo
              </button>
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`px-3 py-2.5 bg-neutral-50 text-[10px] font-sans tracking-wider text-neutral-600 hover:text-blue-600 hover:bg-neutral-100 text-left rounded-xl truncate border border-neutral-100 transition-colors ${
                    selectedCategory === cat.id ? "border-blue-500 bg-blue-50 text-blue-600 font-bold" : ""
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => handleNavClick("contacto")}
            className="w-full mt-4 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-xs tracking-widest uppercase rounded-full transition-all duration-300 text-center shadow-md shadow-blue-500/10"
          >
            Formulario de Contacto
          </button>
        </div>
      )}

    </header>
  );
}
