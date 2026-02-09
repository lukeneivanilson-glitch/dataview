import React from 'react';

const ObjectiveItem = ({ icon, title, description, type }) => {
  // Mapeamento explícito para garantir que o Tailwind não remova as cores
  const themes = {
    blue: "bg-dataview-blue/10 text-dataview-blue",
    accent: "bg-dataview-accent/10 text-dataview-accent"
  };

  return (
    <div className="flex gap-4 group">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${themes[type]}`}>
        <i className={`fa-solid ${icon} text-lg`}></i>
      </div>
      <div>
        <h6 className="font-display font-bold text-dataview-dark mb-1 uppercase italic text-[10px] tracking-wider">
          {title}
        </h6>
        <p className="text-[10px] text-slate-500 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function About() {
  return (
    <section id="sobre" className="py-12 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Bloco de Imagem */}
        <div className="relative w-full md:w-96 lg:w-full mx-auto lg:mx-0 md:px-20">
          <div className="aspect-square bg-dataview-silver rounded-[3rem] lg:rounded-[3.5rem] overflow-hidden relative group shadow-2xl">
            <img 
              src="./img/pexels-gustavo-fring-7446945.jpg" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              alt="Equipa Dataview" 
            />
            <div className="absolute inset-0 bg-dataview-navy/10 group-hover:bg-transparent transition-colors"></div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 p-8 lg:p-10 bg-dataview-blue rounded-[2.5rem] lg:rounded-[3rem] shadow-2xl text-white max-w-[240px] lg:max-w-[280px]">
            <h5 className="text-2xl lg:text-4xl font-black mb-2 italic tracking-tighter uppercase leading-none">10 ANOS</h5>
            <p className="text-[9px] lg:text-[10px] font-bold uppercase tracking-[2px] opacity-80">
              Experiência consolidada e visão estratégica no mercado angolano.
            </p>
          </div>
        </div>

        {/* Conteúdo Textual */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1.5px] bg-dataview-blue"></div>
            <span className="text-dataview-blue font-black uppercase tracking-[3px] text-[9px] italic">O Nosso DNA</span>
          </div>
          
          <h3 className="text-3xl lg:text-4xl text-dataview-dark mb-6 italic font-black leading-tight">
            Compromisso com a <br />
            <span className="text-dataview-blue">Transparência Digital</span>.
          </h3>
          
          <p className="text-base text-slate-500 leading-relaxed mb-8 max-w-xl">
            Na <span className="font-bold text-dataview-dark uppercase">Dataview</span>, garantimos conformidade total com o sistema tributário de Angola (AGT).
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            <ObjectiveItem 
              icon="fa-bullseye"
              title="Missão"
              description="Soluções de gestão que mitiguem riscos e potenciem lucros sustentáveis."
              type="blue"
            />
            <ObjectiveItem 
              icon="fa-eye"
              title="Visão"
              description="Ser a referência nacional em auditoria estratégica em Luanda."
              type="accent"
            />
          </div>
        </div>
      </div>
    </section>
  );
}