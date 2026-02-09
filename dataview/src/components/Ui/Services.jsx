import React from 'react';

const servicesData = [
  {
    title: "Contabilidade Geral e Analítica",
    description: "Processamento segundo o PGC, encerramento de contas e relatórios mensais de performance.",
    icon: "fa-calculator",
    items: ["Balancetes", "Fluxos de Caixa"],
    delay: 0,
    accent: false
  },
  {
    title: "Consultoria Fiscal Estratégica",
    description: "Apuramento rigoroso de IVA, IRT e Imposto Industrial. Representação técnica junto da AGT.",
    icon: "fa-scale-balanced",
    items: ["Planeamento Fiscal", "Submissão AGT"],
    delay: 100,
    accent: true
  },
  {
    title: "Gestão de Capital Humano",
    description: "Processamento de salários, gestão de segurança social (INSS) e consultoria na LGT.",
    icon: "fa-users-gear",
    items: ["Mapas de Salários", "IRT & INSS"],
    delay: 200,
    accent: false
  },
  {
    title: "Auditoria & Compliance",
    description: "Exame às demonstrações financeiras e verificação de conformidade legal e de processos.",
    icon: "fa-magnifying-glass-chart",
    items: ["Auditoria Interna", "Gestão de Risco"],
    delay: 300,
    accent: true
  }
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-20 bg-dataview-navy text-white relative overflow-hidden"
    >
      {/* Background Decorativo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-dataview-blue/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1300px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* Header da Secção - Refinado para acompanhar o Hero */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1.5px] bg-dataview-accent" />
              <span className="text-dataview-accent font-bold uppercase tracking-[4px] text-[9px] block italic">
                Portfólio de Serviços
              </span>
            </div>
            {/* Reduzido de 7xl para 5xl para manter a elegância */}
            <h3 className="text-4xl lg:text-5xl mb-5 font-black italic leading-none">
              Soluções <span className="text-dataview-blue">360º</span>.
            </h3>
            <p className="text-white/50 text-base italic max-w-md">
              Serviços integrados para empresas que procuram liderança no mercado
              angolano com conformidade e estratégia.
            </p>
          </div>
          
          <div className="pb-2">
            <a
              href="/catalogo.pdf"
              target="_blank"
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-dataview-accent hover:text-dataview-navy transition-all duration-500 flex items-center gap-3 shadow-xl group"
            >
              Baixar Catálogo PDF 
              <i className="fa-solid fa-download group-hover:animate-bounce" />
            </a>
          </div>
        </div>

        {/* Grid de Serviços - Design Original Mantido */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`group p-8 border border-white/5 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full
                ${service.accent ? 'bg-white/5 hover:bg-dataview-dark' : 'bg-white/5 hover:bg-dataview-blue'}`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors
                ${service.accent ? 'bg-dataview-accent/10' : 'bg-dataview-blue/10'} 
                group-hover:bg-white/20`}
              >
                <i className={`fa-solid ${service.icon} text-xl text-dataview-accent group-hover:text-white`} />
              </div>

              <h4 className="text-lg font-bold mb-3 italic tracking-tight leading-tight min-h-[2.5rem]">
                {service.title}
              </h4>
              <p className="text-white/50 group-hover:text-white/90 text-[13px] leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              <ul className="space-y-2 text-[9px] font-black uppercase tracking-widest text-dataview-accent group-hover:text-white/80 transition-colors">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-[8px] text-white" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}