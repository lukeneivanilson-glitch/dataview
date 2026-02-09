import React, { useState, useEffect } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Fecha o menu se a tela aumentar e controla o scroll do body
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setIsOpen(false);
    };

    window.addEventListener('resize', handleResize);
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';

    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Serviços", href: "#servicos" },
    { name: "Metodologia", href: "#metodologia" },
    { name: "Downloads", href: "#academia", accent: true },
    { name: "Contactos", href: "#contacto" },
  ];

  return (
    <nav className="sticky top-0 z-[100] bg-dataview-navy/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="z-[110]">
          <img
            src="/img/2-removebg-preview.png"
            alt="DataView"
            className="w-24 md:w-32 h-auto object-contain"
          />
        </div>

        {/* Desktop Links (xl+) */}
        <ul className="hidden xl:flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-white/70">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a 
                href={link.href} 
                className={`hover:text-white transition ${link.accent ? 'text-dataview-accent italic' : ''}`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Buttons & Toggle */}
        <div className="flex items-center gap-3 z-[110]">
          <button className="hidden md:block border border-white/20 text-white text-[9px] font-black px-5 py-3 rounded-xl uppercase tracking-widest hover:bg-white/5 transition">
            Área de Cliente
          </button>
          
          <button className="hidden sm:block bg-dataview-blue text-white text-[9px] font-black px-6 py-3 rounded-xl uppercase tracking-widest shadow-xl shadow-dataview-blue/20 hover:scale-105 transition-all">
            Solicitar Proposta
          </button>
          
          {/* Botão Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden w-11 h-11 flex items-center justify-center bg-white/10 rounded-xl text-white transition-all active:scale-95"
          >
            <i className={`fa-solid ${isOpen ? 'fa-xmark text-xl' : 'fa-bars-staggered text-lg'}`} />
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      <div 

  className={`fixed inset-0 bg-dataview-navy z-[105] xl:hidden flex flex-col transition-all duration-500 ease-in-out transform ${

    isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'

  }`}

>

  {/* Sombra de isolamento interna para profundidade */}

  <div className="absolute inset-0 bg-dataview-navy pointer-events-none" />



  {/* Header do Menu: Logo e Botão de Fechar para referência visual */}

  <div className="flex justify-between items-center px-6 py-4 w-full relative z-20">

  {/* 
  <img src="/img/2-removebg-preview.png" alt="Logo" className="w-20 h-auto" /> 

    <button onClick={() => setIsOpen(false)} className="text-white bg-white/10 p-2 rounded-lg">

      <i className="fa-solid fa-xmark text-xl" />

    </button>
 */}
  </div>



  {/* Área Central: Links de Navegação */}

  <div className="flex-grow flex flex-col items-center bg-dataview-navy pb-16 justify-center relative z-20">

    <div className="flex flex-col items-center gap-7">

      {navLinks.map((link, idx) => (

        <a

          key={idx}

          href={link.href}

          onClick={() => setIsOpen(false)}

          className={`text-xl font-black uppercase tracking-[4px] italic transition-all active:scale-95 ${

            link.accent ? 'text-dataview-accent' : 'text-white'

          }`}

        >

          {link.name}

        </a>

      ))}

    </div>



    {/* Área Inferior: Botões de Ação */}

    <div className="flex flex-col gap-4 w-full px-12 mt-12 max-w-[340px]">

      <button className="w-full border border-white/20 text-white/90 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest italic">

        Área de Cliente

      </button>

      <button className="w-full bg-dataview-blue text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl italic">

        Solicitar Proposta

      </button>

    </div>

  </div>



  {/* Copyright minimalista no fundo */}

  <div className="pb-8 text-center relative z-20">

    <p className="text-[8px] text-white/20 uppercase tracking-[3px]">DataView © 2026</p>

  </div>

</div>
    </nav>
  );
}