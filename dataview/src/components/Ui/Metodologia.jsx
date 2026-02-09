import React from 'react';

const workflowSteps = [
  {
    number: "01",
    title: "Diagnóstico e Triagem",
    description: "Avaliamos o estado atual da sua contabilidade e identificamos passivos ocultos antes de qualquer ação.",
  },
  {
    number: "02",
    title: "Setup de Conformidade",
    description: "Implementação de processos digitais e organização documental rigorosa sob as normas do PGC e AGT.",
  },
  {
    number: "03",
    title: "Gestão e Reporting",
    description: "Monitorização contínua com entrega de relatórios de gestão e aconselhamento estratégico.",
  }
];

export default function Metodologia() {
  return (
    <section
      id="metodologia"
      className="py-16 lg:py-24 bg-white overflow-hidden relative"
    >
      {/* Background Decorativo sutil */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/4 pointer-events-none" />

      {/* Container ajustado para 1200px */}
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Coluna de Texto: Workflow */}
          <div>
            <div className="flex items-center gap-3 mb-6" data-aos="fade-right" data-aos-duration="400">
              <div className="w-8 h-[1.5px] bg-dataview-accent" />
              <span className="text-dataview-accent font-bold uppercase tracking-[4px] text-[8px] block italic">
                Workflow
              </span>
            </div>
            
            <h3 
              className="text-4xl lg:text-5xl text-dataview-navy mb-12 font-black italic leading-none tracking-tighter"
              data-aos="fade-right" 
              data-aos-delay="100"
              data-aos-duration="500"
            >
              Como <span className="text-dataview-blue">Operamos</span>.
            </h3>

            <div className="space-y-10 relative">
              {/* Linha vertical conectora com animação de crescimento */}
              <div 
                className="absolute left-[24px] lg:left-[32px] top-4 bottom-4 w-[1px] bg-slate-100 hidden md:block" 
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-duration="1000"
              />

              {workflowSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex gap-6 group items-start relative z-10"
                  data-aos="fade-up"
                  data-aos-delay={200 + (index * 100)}
                  data-aos-duration="400"
                >
                  <div className="text-4xl lg:text-6xl font-black text-dataview-dark group-hover:text-dataview-accent transition-all duration-700 leading-none select-none italic">
                    {step.number}
                  </div>
                  <div className="pt-1 lg:pt-2">
                    <h5 className="text-base font-bold text-dataview-navy mb-2 uppercase italic tracking-tight group-hover:text-dataview-blue transition-colors">
                      {step.title}
                    </h5>
                    <p className="text-slate-500 leading-relaxed text-[13px] max-w-sm italic opacity-90">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna Visual: O Heart do Design */}
          <div 
            className="relative flex justify-center lg:justify-end scale-90 lg:scale-100"
            data-aos="zoom-in-left"
            data-aos-duration="600"
          >
            <div
              className="aspect-square w-full max-w-[420px] bg-dataview-navy rounded-[3.5rem] overflow-hidden rotate-2 flex items-center justify-center p-10 shadow-2xl relative group transition-transform duration-700 hover:rotate-0"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-1000"
                style={{ backgroundImage: 'url("/img/analise-de-dados-estrategia-de-negocio_358394548632c98068d328.webp")' }} 
              />
              <div className="absolute inset-0 bg-gradient-to-br from-dataview-navy via-dataview-navy/80 to-transparent" />

              <div className="relative z-10 text-center">
                <div className="mb-6 relative inline-block">
                    <i className="fa-solid fa-infinity text-5xl text-dataview-accent animate-pulse" />
                    <div className="absolute inset-0 blur-xl bg-dataview-accent/20 -z-10" />
                </div>
                
                <h4 className="text-2xl font-black text-white italic uppercase tracking-tighter leading-tight">
                  Melhoria <br /> 
                  <span className="text-dataview-blue">Contínua</span>
                </h4>
                
                <p className="text-white/30 text-[7px] mt-4 uppercase tracking-[4px] font-bold">
                  Standard de Excelência
                </p>
                <div className="mt-4 w-10 h-[1px] bg-dataview-accent mx-auto rounded-full" />
              </div>
            </div>
            
            {/* Brilho de Fundo */}
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-dataview-accent/10 rounded-full blur-[80px]" />
          </div>

        </div>
      </div>
    </section>
  );
}