import React from 'react';

export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-16 md:px-10 lg:py-20 bg-white relative overflow-hidden"
    >
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-slate-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-dataview-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1250px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* Lado Esquerdo: Info de Contacto */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[1.5px] bg-dataview-blue" />
              <span className="text-dataview-blue font-bold uppercase tracking-[3px] text-[9px] block italic">
                Agende uma reunião
              </span>
            </div>
            <h3 className="text-4xl lg:text-5xl text-dataview-dark mb-5 font-black italic leading-tight tracking-tighter">
              Pronto para <br />
              <span className="text-dataview-blue">Decolar?</span>
            </h3>
            <p className="text-base text-slate-500 max-w-sm leading-relaxed italic opacity-90">
              Visite-nos em Luanda ou solicite uma reunião virtual com os nossos
              consultores. Estamos prontos para auditar o seu sucesso.
            </p>
          </div>

          <div className="space-y-6 pt-2">
            {/* Telefone */}
            <div className="flex gap-5 items-center group cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-dataview-dark text-lg group-hover:bg-dataview-blue group-hover:text-white transition-all duration-300 shadow-sm border border-slate-100">
                <i className="fa-solid fa-phone" />
              </div>
              <div>
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-0.5">
                  Linha de Apoio
                </p>
                <p className="text-lg font-bold text-dataview-dark group-hover:text-dataview-blue transition-colors tracking-tight">
                  +244 923 000 000
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-5 items-center group cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-dataview-dark text-lg group-hover:bg-dataview-blue group-hover:text-white transition-all duration-300 shadow-sm border border-slate-100">
                <i className="fa-solid fa-envelope-open-text" />
              </div>
              <div>
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-0.5">
                  E-mail Corporativo
                </p>
                <p className="text-lg font-bold text-dataview-dark group-hover:text-dataview-blue transition-colors tracking-tight">
                  comercial@dataview.ao
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lado Direito: Formulário - Reduzido para não "cansar" o utilizador */}
        <div
          className="p-8 lg:p-10 bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-slate-100 relative"
        >
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-[8px] font-black text-dataview-dark uppercase tracking-widest ml-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  placeholder="Ex: João Manuel"
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl p-3.5 text-xs focus:bg-white focus:ring-2 focus:ring-dataview-blue/10 focus:border-dataview-blue transition-all outline-none"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[8px] font-black text-dataview-dark uppercase tracking-widest ml-1">
                  Empresa
                </label>
                <input
                  type="text"
                  placeholder="Nome da instituição"
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl p-3.5 text-xs focus:bg-white focus:ring-2 focus:ring-dataview-blue/10 focus:border-dataview-blue transition-all outline-none"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[8px] font-black text-dataview-dark uppercase tracking-widest ml-1">
                Serviço de Interesse
              </label>
              <div className="relative">
                <select className="w-full bg-slate-50 border border-slate-100 rounded-xl p-3.5 text-xs focus:bg-white focus:ring-2 focus:ring-dataview-blue/10 focus:border-dataview-blue transition-all outline-none appearance-none cursor-pointer">
                  <option>Contabilidade Geral</option>
                  <option>Consultoria Fiscal / AGT</option>
                  <option>Gestão de Recursos Humanos</option>
                  <option>Auditoria Independente</option>
                </select>
                <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[8px] font-black text-dataview-dark uppercase tracking-widest ml-1">
                Sua Mensagem
              </label>
              <textarea
                rows={3}
                placeholder="Como podemos ajudar hoje?"
                className="w-full bg-slate-50 border border-slate-100 rounded-xl p-3.5 text-xs focus:bg-white focus:ring-2 focus:ring-dataview-blue/10 focus:border-dataview-blue transition-all outline-none resize-none"
              />
            </div>

            <button className="w-full py-4 bg-dataview-dark text-white rounded-xl text-[9px] font-black uppercase tracking-[3px] hover:bg-dataview-blue hover:-translate-y-0.5 transition-all shadow-lg active:scale-95">
              Enviar Solicitação
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}