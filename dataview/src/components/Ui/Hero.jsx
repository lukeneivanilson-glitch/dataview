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
      {/* 1. Background Otimizado: Imagem mais nítida à direita */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/home.jpg"
          alt="DataView Business Luanda"
          className="w-full h-full object-cover object-[center_right] opacity-100 select-none grayscale-[20%]"
        />
        {/* Overlay mais equilibrado: Escuro na esquerda para leitura, limpo na direita para a imagem */}
        <div className="absolute inset-0 bg-gradient-to-r from-dataview-navy via-dataview-navy/1 to-transparent" />
      </div>

      {/* 2. Conteúdo Principal - Enquadramento 1200px */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 grid lg:grid-cols-12 gap-8 items-center w-full">
        
        {/* Coluna Esquerda: Texto Focado */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1.5px] bg-dataview-accent" style={glowStyle} />
            <span className="text-dataview-accent font-bold uppercase tracking-[4px] text-[8px] italic">
              Excelência em Angola
            </span>
          </div>

          <div className="relative">
            <h1 className="text-5xl md:text-7xl leading-[0.95] font-black text-white relative z-20 italic tracking-tighter">
              DATA<span className="text-dataview-blue">VIEW</span>
            </h1>
            {/* Texto de fundo mais discreto */}
            <span 
              className="absolute -top-4 -left-1 text-5xl md:text-7xl opacity-5 select-none hidden md:block font-black pointer-events-none z-10 italic"
              style={{ WebkitTextStroke: '1px white', color: 'transparent' }}
            >
              ESTRATÉGIA
            </span>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight uppercase italic">
              Contabilidade & Gestão <br />
              <span className="text-dataview-accent text-base md:text-lg font-medium not-italic tracking-wide opacity-80">
                Inteligência para o Mercado Regional
              </span>
            </h2>

            {/* Citação mais curta e elegante */}
            <div className="flex items-start gap-4 p-4 bg-white/5 border-l-[1.5px] border-dataview-accent backdrop-blur-sm rounded-r-xl max-w-md">
              <i className="fa-solid fa-quote-left text-dataview-accent text-sm opacity-40" />
              <p className="italic text-xs md:text-sm text-white/90 font-medium leading-relaxed">
                "Transformamos números em visão estratégica para o seu crescimento sustentável em Angola."
              </p>
            </div>
          </div>

          {/* Botões Small-Style */}
          <div className="flex flex-wrap gap-3 pt-2">
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

        {/* Coluna Direita: Dashboard Slim */}
        <div className="lg:col-span-5 relative hidden lg:block scale-90 origin-right">
          <div className="backdrop-blur-md bg-white/5 rounded-[2rem] border border-white/10 p-6 shadow-2xl">
            <div className="space-y-6">
              {/* Stat 1 */}
              <div>
                <div className="flex justify-between text-[8px] text-white/40 mb-2 uppercase font-bold tracking-widest">
                  <span>Crescimento Anual</span>
                  <span className="text-dataview-accent">+34.5%</span>
                </div>
                <div className="h-[3px] bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-dataview-blue w-[85%]" />
                </div>
              </div>

              {/* Stat 2 */}
              <div>
                <div className="flex justify-between text-[8px] text-white/40 mb-2 uppercase font-bold tracking-widest">
                  <span>Conformidade AGT</span>
                  <span className="text-white">99.2%</span>
                </div>
                <div className="h-[3px] bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-dataview-accent w-[95%]" />
                </div>
              </div>

              {/* Mini Cards */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  <p className="text-xl font-black text-white italic">+250</p>
                  <p className="text-[7px] text-white/30 uppercase tracking-widest">Clientes Ativos</p>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5">
                  <p className="text-xl font-black text-dataview-accent italic">100%</p>
                  <p className="text-[7px] text-white/30 uppercase tracking-widest">Digital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}