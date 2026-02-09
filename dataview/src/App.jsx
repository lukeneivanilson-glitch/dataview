import { Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import TopBar from "./components/layout/TopBar";
import Footer from "./components/layout/Footer";

import Hero from "./components/Ui/Hero";
import TrustBar from "./components/Ui/TrustBar.jsx";
import Services from "./components/Ui/Services";
import Metodologia from "./components/Ui/Metodologia";
import Fiscal from "./components/Ui/Fiscal";
import Faq from "./components/Ui/Faq";
import Contact from "./components/Ui/Contact";
import About from "./components/Ui/About";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <NavBar />
      <main className="font-sans custom-scrollbar text-white flex-1">
        <Routes>
          {/* Página inicial com todas as seções */}
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

          {/* Rotas dedicadas */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/metodologia" element={<Metodologia />} />
          <Route path="/fiscal" element={<Fiscal />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
