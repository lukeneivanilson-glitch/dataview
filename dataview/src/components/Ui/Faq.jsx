import React from 'react';

const faqData = [
  {
    question: "O que é necessário para abrir uma empresa em Angola?",
    answer: "O processo envolve o GUE, reserva de nome, estatutos sociais, obtenção do NIF e o alvará comercial. A DATAVIEW trata de todo o licenciamento por si, garantindo conformidade total."
  },
  {
    question: "Como funciona o regime de IVA em Angola?",
    answer: "Existem três regimes: Geral (14% ou 7%), Transitório e de Exclusão. A classificação depende do seu volume de faturação anual e setor de atividade."
  },
  {
    question: "Quais as vantagens do Outsourcing Contabilístico?",
    answer: "Incluem a redução de custos fixos, acesso imediato a especialistas atualizados com a legislação AGT e foco total no seu core business enquanto gerimos o património."
  },
  {
    question: "Como é feita a submissão do Modelo 1?",
    answer: "A submissão é anual via portal da AGT até ao final de Maio. Nossa equipa realiza a auditoria prévia dos balanços para evitar discrepâncias fiscais."
  }
];

export default function Faq() {
  return (
    <section
      id="faq"
      className="py-20 md:px-10 bg-dataview-navy text-white overflow-hidden relative"
    >
      {/* Background Decorativo Sutil */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[30%] h-[30%] bg-dataview-accent blur-[150px] rounded-full" />
      </div>

      <div className="max-w-[1300px] mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-20 relative z-10">
        
        {/* Coluna das Perguntas (Acordeão) - Texto mais contido */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1.5px] bg-dataview-blue" />
            <span className="text-dataview-blue font-bold uppercase tracking-[4px] text-[9px] block italic">
              Knowledge Base
            </span>
          </div>
          <h3 className="text-4xl lg:text-5xl mb-10 italic font-black leading-none tracking-tighter">
            Dúvidas <span className="text-dataview-accent">Comuns</span>.
          </h3>

          <div className="space-y-3">
            {faqData.map((item, index) => (
              <details 
                key={index} 
                className="group bg-white/5 border border-white/10 rounded-2xl p-5 cursor-pointer transition-all hover:bg-white/10"
              >
                <summary className="flex justify-between items-center font-bold text-sm md:text-base italic tracking-tight list-none">
                  {item.question}
                  <span className="group-open:rotate-180 transition-transform duration-500 text-dataview-accent bg-white/5 w-8 h-8 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-chevron-down text-[10px]" />
                  </span>
                </summary>
                <div className="overflow-hidden transition-all duration-500 max-h-0 group-open:max-h-40">
                    <p className="mt-4 text-white/50 leading-relaxed text-xs md:text-sm border-t border-white/5 pt-4 italic">
                      {item.answer}
                    </p>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Coluna de Downloads - Mais compacta e elegante */}
        <div
          className="lg:col-span-5 bg-dataview-blue p-8 lg:p-10 rounded-[3rem] relative overflow-hidden self-start shadow-xl"
        >
          <i className="fa-solid fa-file-invoice-dollar absolute -right-6 -bottom-6 text-[10rem] text-white/10 -rotate-12 pointer-events-none" />
          
          <div className="relative z-10">
            <h4 className="text-2xl font-black text-white mb-8 italic uppercase tracking-tighter leading-tight">
              Central de <br /> 
              <span className="text-dataview-navy/40">Recursos Digitais</span>
            </h4>

            <div className="space-y-3">
              {[
                { name: "Código do IVA 2026", icon: "fa-file-pdf" },
                { name: "Modelo 1 I. Industrial", icon: "fa-file-lines" },
                { name: "Lei Geral do Trabalho", icon: "fa-scale-balanced" }
              ].map((doc, idx) => (
                <div 
                  key={idx}
                  className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-md rounded-xl hover:bg-white hover:text-dataview-navy transition-all duration-500 group cursor-pointer border border-white/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-dataview-blue/10">
                        <i className={`fa-solid ${doc.icon} text-sm`} />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest">
                      {doc.name}
                    </span>
                  </div>
                  <i className="fa-solid fa-download text-[10px] opacity-40 group-hover:opacity-100" />
                </div>
              ))}
            </div>

            <button className="mt-8 w-full py-4 bg-dataview-navy text-white rounded-xl text-[9px] font-black uppercase tracking-[3px] hover:bg-black transition-all shadow-lg">
              Ver Todos
            </button>
            
            <p className="text-center mt-5 text-[8px] uppercase tracking-widest text-white/30 font-bold">
              Atualizado Jan 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}