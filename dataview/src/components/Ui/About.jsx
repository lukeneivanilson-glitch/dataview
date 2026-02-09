import React from 'react';

const ObjectiveItem = ({ icon, title, description, type, index }) => {
  const themes = {
    blue: "bg-dataview-blue/10 text-dataview-blue",
    accent: "bg-dataview-accent/10 text-dataview-accent"
  };

  return (
    <div 
      className="flex gap-4 group"
      data-aos="fade-up"
      data-aos-delay={400 + (index * 100)}
      data-aos-duration="400"
    >
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
    <section id="sobre" className="py-12 lg:py-20 bg-white relative overflow-hidden">
      {/* Container ajustado para 1200px */}
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Bloco de Imagem com animação de entrada lateral */}
        <div className="relative w-full max-w-[450px] mx-auto lg:mx-0" data-aos="fade-right" data-aos-duration="600">
          <div className="aspect-square bg-dataview-silver rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden relative group shadow-2xl">
            <img 
              src="./img/pexels-gustavo-fring-7446945.jpg" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              alt="Equipa Dataview" 
            />
            <div className="absolute inset-0 bg-dataview-navy/10 group-hover:bg-transparent transition-colors"></div>
          </div>
          
          {/* Badge de Experiência: Animação de pop-in (zoom) */}
          <div 
            className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 p-6 lg:p-8 bg-dataview-blue rounded-[2rem] lg:rounded-[2.5rem] shadow-2xl text-white max-w-[200px] lg:max-w-[240px]"
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="400"
          >
            <h5 className="text-2xl lg:text-3xl font-black mb-1 italic tracking-tighter uppercase leading-none">10 ANOS</h5>
            <p className="text-[8px] lg:text-[9px] font-bold uppercase tracking-[1px] opacity-80">
              Experiência consolidada no mercado angolano.
            </p>
          </div>
        </div>

        {/* Conteúdo Textual */}
        <div className="space-y-6">
          <div data-aos="fade-left" data-aos-duration="500">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[1.5px] bg-dataview-blue"></div>
              <span className="text-dataview-blue font-black uppercase tracking-[3px] text-[8px] italic">O Nosso DNA</span>
            </div>
            
            <h3 className="text-3xl lg:text-4xl text-dataview-dark mb-4 italic font-black leading-tight">
              Compromisso com a <br />
              <span className="text-dataview-blue">Transparência Digital</span>.
            </h3>
            
            <p className="text-sm text-slate-500 leading-relaxed max-w-lg">
              Na <span className="font-bold text-dataview-dark uppercase">Dataview</span>, garantimos conformidade total com o sistema tributário de Angola (AGT) através de processos auditáveis.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 pt-2">
            <ObjectiveItem 
              index={0}
              icon="fa-bullseye"
              title="Missão"
              description="Soluções de gestão que mitiguem riscos e potenciem lucros sustentáveis."
              type="blue"
            />
            <ObjectiveItem 
              index={1}
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