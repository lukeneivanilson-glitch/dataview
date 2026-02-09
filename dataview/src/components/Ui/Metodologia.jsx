import React from 'react';

const workflowSteps = [
  {
    number: "01",
    title: "Diagnóstico e Triagem",
    description: "Avaliamos o estado atual da sua contabilidade e identificamos passivos ocultos antes de qualquer ação.",
    delay: 0
  },
  {
    number: "02",
    title: "Setup de Conformidade",
    description: "Implementação de processos digitais e organização documental rigorosa sob as normas do PGC e AGT.",
    delay: 100
  },
  {
    number: "03",
    title: "Gestão e Reporting",
    description: "Monitorização contínua com entrega de relatórios de gestão e aconselhamento estratégico.",
    delay: 200
  }
];

export default function Metodologia() {
  return (
    <section
      id="metodologia"
      className="py-20 lg:py-24 bg-white overflow-hidden relative"
    >
      {/* Background Decorativo sutil */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-6 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Coluna de Texto: Workflow */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1.5px] bg-dataview-accent" />
              <span className="text-dataview-accent font-bold uppercase tracking-[4px] text-[9px] block italic">
                Workflow
              </span>
            </div>
            
            {/* Reduzido de 7xl para 5xl para elegância */}
            <h3 className="text-4xl lg:text-5xl text-dataview-navy mb-12 font-black italic leading-none tracking-tighter">
              Como <span className="text-dataview-blue">Operamos</span>.
            </h3>

            <div className="space-y-12 relative">
              {/* Linha vertical conectora */}
              <div className="absolute left-[24px] lg:left-[32px] top-4 bottom-4 w-[1px] bg-slate-100 hidden md:block" />

              {workflowSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex gap-6 group items-start relative z-10"
                >
                  {/* Números reduzidos para não "gritarem" no layout */}
                  <div className="text-4xl lg:text-6xl font-black text-dataview-accent group-hover:text-dataview-accent transition-all duration-700 leading-none select-none italic">
                    {step.number}
                  </div>
                  <div className="pt-1 lg:pt-2">
                    <h5 className="text-lg font-bold text-dataview-navy mb-3 uppercase italic tracking-tight group-hover:text-dataview-blue transition-colors">
                      {step.title}
                    </h5>
                    <p className="text-slate-500 leading-relaxed text-sm md:text-base max-w-sm italic opacity-90">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna Visual: O Heart do Design - Mantido com escala refinada */}
          <div className="relative flex justify-center lg:justify-end scale-95 lg:scale-100">
            <div
              className="aspect-square w-full max-w-[450px] bg-dataview-navy rounded-[4rem] overflow-hidden rotate-2 flex items-center justify-center p-10 shadow-2xl relative group transition-transform duration-700 hover:rotate-0"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:scale-110 transition-transform duration-1000 grayscale"
                style={{ backgroundImage: 'url("/img/workflow-bg.webp")' }} 
              />
              <div className="absolute inset-0 bg-gradient-to-br from-dataview-navy via-dataview-navy/80 to-transparent" />

              {/* Engrenagem Animada */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
                 <i className="fa-solid fa-gear text-[15rem] text-white/5 animate-[spin_30s_linear_infinite]" />
              </div>
              
              <div className="relative z-10 text-center">
                <div className="mb-6 relative inline-block">
                    <i className="fa-solid fa-infinity text-6xl text-dataview-accent animate-pulse" />
                    <div className="absolute inset-0 blur-xl bg-dataview-accent/20 -z-10" />
                </div>
                
                <h4 className="text-3xl font-black text-white italic uppercase tracking-tighter leading-tight">
                  Melhoria <br /> 
                  <span className="text-dataview-blue">Contínua</span>
                </h4>
                
                <p className="text-white/30 text-[8px] mt-4 uppercase tracking-[4px] font-bold">
                  Standard de Excelência
                </p>
                <div className="mt-4 w-12 h-[1.5px] bg-dataview-accent mx-auto rounded-full" />
              </div>
            </div>
            
            {/* Brilho de Fundo */}
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-dataview-accent/10 rounded-full blur-[80px]" />
          </div>

        </div>
      </div>
    </section>
  );
}