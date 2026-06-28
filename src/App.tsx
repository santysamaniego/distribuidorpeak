import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import AboutUs from "./components/AboutUs";
import FeaturedProducts from "./components/FeaturedProducts";
import ProductsSection from "./components/ProductsSection";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import ContactAndMap from "./components/ContactAndMap";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <div id="app" className="min-h-screen bg-neutral-950 text-neutral-100 font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* 1. Header (Navbar, category dropdown, quick search) */}
      <Header
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* 2. Main Portada / Hero Banner */}
      <Hero />

      {/* 3. Marketing Information Ticker */}
      <Ticker />

      {/* 4. About Us (First content section: slides from Left & Right to Center, resets on scroll) */}
      <AboutUs />

      {/* 5. Featured Products (Grid of 6 featured products) */}
      <FeaturedProducts />

      {/* 6. Main Catalog (9 Categories, Full Search, Detailed Spec Modals) */}
      <ProductsSection
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* 7. Distributor Services */}
      <Services />

      {/* 8. FAQ Accordion Section */}
      <FAQ />

      {/* 9. Contact Form & Interactive Zone Map */}
      <ContactAndMap />

      {/* 10. Footer info & navigation shortcuts */}
      <Footer />

      {/* 11. Floating global WhatsApp button */}
      <WhatsAppFloat />
    </div>
  );
}
