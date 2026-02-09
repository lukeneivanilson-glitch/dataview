import React from 'react';

const impostos = [
  { 
    nome: "IVA", 
    taxa: "7% ou 14% (Regime Geral)", 
    prazo: "Até ao fim do mês seguinte", 
    icon: "fa-receipt" 
  },
  { 
    nome: "IRT", 
    taxa: "Progressivo (até 25%)", 
    prazo: "Até ao dia 30 do mês seguinte", 
    icon: "fa-user-tie" 
  },
  { 
    nome: "Imp. Industrial", 
    taxa: "25% (Taxa Geral)", 
    prazo: "Declaração Modelo 1 (Maio)", 
    icon: "fa-building-columns" 
  },
  { 
    nome: "INSS", 
    taxa: "3% (Trab.) + 8% (Empresa)", 
    prazo: "Até ao dia 10 do mês seguinte", 
    icon: "fa-handshake-angle" 
  }
];

export default function Fiscal() {
  return (
    <section id="fiscal" className="py-16 bg-slate-50/50 relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-dataview-blue/30 to-transparent" />

      {/* Container 1200px */}
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header da Seção */}
        <div className="text-center mb-10" data-aos="fade-up" data-aos-duration="500">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-dataview-blue/5 rounded-full mb-4 border border-dataview-blue/10">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dataview-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-dataview-blue"></span>
            </span>
            <span className="text-dataview-blue font-bold uppercase tracking-[3px] text-[8px] italic">
              Observatório Fiscal 2026
            </span>
          </div>
          <h3 className="text-3xl lg:text-5xl text-dataview-navy italic font-black tracking-tighter">
            Calendário de <span className="text-dataview-blue">Obrigações</span>
          </h3>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto italic text-sm opacity-80">
            Mantenha a sua conformidade com a AGT em dia. O rigor fiscal é o primeiro passo para o crescimento sustentável.
          </p>
        </div>

        {/* Tabela Container - Entrada Snappy */}
        <div 
          className="bg-white rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.03)] overflow-hidden border border-slate-100"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="600"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-dataview-navy text-white text-[8px] uppercase tracking-[2px] font-bold">
                  <th className="p-5 pl-8">Imposto / Contribuição</th>
                  <th className="p-5">Incidência / Taxa</th>
                  <th className="p-5">Prazo Crítico</th>
                  <th className="p-5 text-center pr-8">Status Fiscal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {impostos.map((imp, index) => (
                  <tr 
                    key={index} 
                    className="group hover:bg-slate-50 transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-delay={300 + (index * 50)} // Cascata ultra-rápida
                    data-aos-duration="400"
                    data-aos-anchor-placement="top-bottom"
                  >
                    <td className="p-5 pl-8 font-bold text-dataview-navy italic text-[15px] flex items-center gap-4">
                      <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-dataview-blue group-hover:bg-dataview-blue group-hover:text-white transition-all text-xs">
                        <i className={`fa-solid ${imp.icon}`}></i>
                      </div>
                      {imp.nome}
                    </td>
                    <td className="p-5 text-slate-500 font-medium italic text-[13px]">{imp.taxa}</td>
                    <td className="p-5">
                      <div className="flex items-center gap-2 text-dataview-navy font-bold italic text-[13px]">
                        <i className="fa-regular fa-calendar-check text-dataview-blue text-[10px]"></i>
                        {imp.prazo}
                      </div>
                    </td>
                    <td className="p-5 text-center pr-8">
                      <span className="bg-emerald-50 text-emerald-600 border border-emerald-100/50 px-3 py-1 rounded-full text-[7px] font-black uppercase tracking-widest inline-flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></span>
                        Vigente 2026
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action - Entrada Lateral */}
        <div 
          className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6 px-4"
          data-aos="fade"
          data-aos-delay="600"
          data-aos-duration="500"
        >
          <div className="flex items-center gap-3">
            <i className="fa-solid fa-circle-info text-dataview-blue text-sm opacity-50"></i>
            <p className="text-slate-400 italic text-[9px] max-w-md leading-relaxed">
              * Este guia é informativo. Alterações legislativas em Angola podem ocorrer via Decreto Presidencial. 
              <span className="text-dataview-navy font-bold ml-1">Consulte-nos para auditoria.</span>
            </p>
          </div>
          
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-dataview-navy rounded-lg font-black uppercase text-[8px] tracking-widest hover:border-dataview-blue hover:text-dataview-blue transition-all group shadow-sm active:scale-95">
            <i className="fa-solid fa-print opacity-50 group-hover:opacity-100 text-[10px]"></i>
            Imprimir Calendário
          </button>
        </div>

      </div>
    </section>
  );
}