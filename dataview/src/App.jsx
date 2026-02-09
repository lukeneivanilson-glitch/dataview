import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Importação da Biblioteca de Animação
import AOS from "aos";
import "aos/dist/aos.css";

// Layout
import NavBar from "./components/layout/NavBar";
import TopBar from "./components/layout/TopBar";
import Footer from "./components/layout/Footer";

// UI Components
import Hero from "./components/Ui/Hero";
import TrustBar from "./components/Ui/TrustBar.jsx";
import Services from "./components/Ui/Services";
import Metodologia from "./components/Ui/Metodologia";
import Fiscal from "./components/Ui/Fiscal";
import Faq from "./components/Ui/Faq";
import Contact from "./components/Ui/Contact";
import About from "./components/Ui/About";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    // 1. Inicialização do AOS (Animações)
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
    });

    // 2. Garantir que o scroll volte ao topo ao mudar de rota
    window.scrollTo(0, 0);
  }, [location]); // Executa sempre que a rota mudar

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* TopBar e NavBar fixos ou no topo */}
      <header>
        <TopBar />
        <NavBar />
      </header>

      {/* Conteúdo Principal */}
      <main className="font-sans custom-scrollbar flex-1">
        <Routes>
          {/* Página Inicial (Single Page Style) */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <TrustBar />
                <About />
                <Services />
                <Metodologia />
                <Fiscal />
                <Faq />
                <Contact />
              </>
            }
          />

          {/* Rotas Individuais (Caso queira páginas separadas) */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/metodologia" element={<Metodologia />} />
          <Route path="/fiscal" element={<Fiscal />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Rodapé fixo em todas as páginas */}
      <Footer />
    </div>
  );
}