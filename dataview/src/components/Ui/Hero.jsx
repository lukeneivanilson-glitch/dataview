import React from 'react';

export default function Hero() {
  const glowStyle = {
    boxShadow: '0 0 15px var(--color-dataview-accent)',
  };

  return (
    <section
      id="home"
      className="relative h-[calc(100vh-80px)] min-h-[600px] w-full flex items-center overflow-hidden bg-dataview-navy text-white"
    >
      {/* 1. Background: Entrada sutil mas rápida */}
      <div className="absolute inset-0 z-0" data-aos="fade" data-aos-duration="800">
        <img
          src="/img/home.jpg"
          alt="DataView Business Luanda"
          className="w-full h-full object-cover object-[center_right] opacity-100 select-none grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dataview-navy via-dataview-navy/1 to-transparent" />
      </div>

      {/* 2. Conteúdo Principal */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 grid lg:grid-cols-12 gap-8 items-center w-full">
        
        {/* Coluna Esquerda: Texto Focado */}
        <div className="lg:col-span-7 space-y-6">
          {/* Label superior: 100ms delay */}
          <div className="flex items-center gap-3" data-aos="fade-right" data-aos-delay="100" data-aos-duration="400">
            <div className="w-8 h-[1.5px] bg-dataview-accent" style={glowStyle} />
            <span className="text-dataview-accent font-bold uppercase tracking-[4px] text-[8px] italic">
              Excelência em Angola
            </span>
          </div>

          {/* Título Principal: 200ms delay */}
          <div className="relative" data-aos="fade-right" data-aos-delay="200" data-aos-duration="500">
            <h1 className="text-5xl md:text-7xl leading-[0.95] font-black text-white relative z-20 italic tracking-tighter">
              DATA<span className="text-dataview-blue">VIEW</span>
            </h1>
            <span 
              className="absolute -top-4 -left-1 text-5xl md:text-7xl opacity-5 select-none hidden md:block font-black pointer-events-none z-10 italic"
              style={{ WebkitTextStroke: '1px white', color: 'transparent' }}
            >
              ESTRATÉGIA
            </span>
          </div>

          {/* H2 e Citação: 300ms delay */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight uppercase italic">
              Contabilidade & Gestão <br />
              <span className="text-dataview-accent text-base md:text-lg font-medium not-italic tracking-wide opacity-80">
                Inteligência para o Mercado Regional
              </span>
            </h2>

            <div className="flex items-start gap-4 p-4 bg-white/5 border-l-[1.5px] border-dataview-accent backdrop-blur-sm rounded-r-xl max-w-md">
              <i className="fa-solid fa-quote-left text-dataview-accent text-sm opacity-40" />
              <p className="italic text-xs md:text-sm text-white/90 font-medium leading-relaxed">
                "Transformamos números em visão estratégica para o seu crescimento sustentável em Angola."
              </p>
            </div>
          </div>

          {/* Botões: 400ms delay */}
          <div className="flex flex-wrap gap-3 pt-2" data-aos="fade-right" data-aos-delay="10" data-aos-duration="00">
            <a 
              href="#contacto" 
              className="px-6 py-3 bg-dataview-blue text-white rounded-lg font-bold uppercase text-[9px] tracking-[2px] hover:bg-dataview-accent hover:text-dataview-navy transition-all shadow-md active:scale-95"
            >
              Consultoria
            </a>
            <a 
              href="#servicos" 
              className="px-6 py-3 border border-white/20 text-white rounded-lg font-bold uppercase text-[9px] tracking-[2px] hover:bg-white/10 transition-all flex items-center gap-2 group"
            >
              Nossos Pilares 
              <i className="fa-solid fa-arrow-right text-dataview-accent text-[8px] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Coluna Direita: Dashboard Slim - Entrada mais rápida lateral */}
        
      </div>
    </section>
  );
}