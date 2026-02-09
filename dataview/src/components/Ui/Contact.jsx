import React from 'react';

export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-16 lg:py-24 bg-white relative overflow-hidden"
    >
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-slate-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-dataview-blue/5 rounded-full blur-3xl pointer-events-none" />

      {/* Container 1200px */}
      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Lado Esquerdo: Info de Contacto */}
        <div className="space-y-8">
          <div data-aos="fade-right" data-aos-duration="600">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[1.5px] bg-dataview-blue" />
              <span className="text-dataview-blue font-bold uppercase tracking-[3px] text-[8px] block italic">
                Agende uma reunião
              </span>
            </div>
            <h3 className="text-4xl lg:text-5xl text-dataview-dark mb-5 font-black italic leading-tight tracking-tighter">
              Pronto para <br />
              <span className="text-dataview-blue">Decolar?</span>
            </h3>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed italic opacity-90">
              Visite-nos em Luanda ou solicite uma reunião virtual com os nossos
              consultores especializados.
            </p>
          </div>

          <div className="space-y-6 pt-2">
            {/* Telefone */}
            <div 
              className="flex gap-5 items-center group cursor-pointer"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center text-dataview-dark text-lg group-hover:bg-dataview-blue group-hover:text-white transition-all duration-300 shadow-sm border border-slate-100">
                <i className="fa-solid fa-phone" />
              </div>
              <div>
                <p className="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Linha de Apoio</p>
                <p className="text-base font-bold text-dataview-dark group-hover:text-dataview-blue transition-colors">+244 923 000 000</p>
              </div>
            </div>

            {/* Email */}
            <div 
              className="flex gap-5 items-center group cursor-pointer"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center text-dataview-dark text-lg group-hover:bg-dataview-blue group-hover:text-white transition-all duration-300 shadow-sm border border-slate-100">
                <i className="fa-solid fa-envelope-open-text" />
              </div>
              <div>
                <p className="text-[7px] font-black text-slate-400 uppercase tracking-widest mb-0.5">E-mail Corporativo</p>
                <p className="text-base font-bold text-dataview-dark group-hover:text-dataview-blue transition-colors">comercial@dataview.ao</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lado Direito: Formulário com Efeito de Rotação (Flip) */}
        <div
          className="p-8 lg:p-10 bg-white rounded-[2.5rem] shadow-[0_25px_60px_rgba(0,0,0,0.06)] border border-slate-100 relative group transition-all duration-700 hover:rotate-1 hover:scale-[1.01]"
          data-aos="flip-right" // Este atributo faz o formulário "rodar" na entrada
          data-aos-delay="400"
          data-aos-duration="800"
        >
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1.5" data-aos="fade-up" data-aos-delay="600">
                <label className="text-[7px] font-black text-dataview-dark uppercase tracking-widest ml-1">Nome Completo</label>
                <input type="text" placeholder="João Manuel" className="w-full bg-slate-50 border border-slate-100 rounded-lg p-3 text-[12px] focus:bg-white focus:ring-4 focus:ring-dataview-blue/5 focus:border-dataview-blue transition-all outline-none" />
              </div>
              <div className="space-y-1.5" data-aos="fade-up" data-aos-delay="700">
                <label className="text-[7px] font-black text-dataview-dark uppercase tracking-widest ml-1">Empresa</label>
                <input type="text" placeholder="Nome da instituição" className="w-full bg-slate-50 border border-slate-100 rounded-lg p-3 text-[12px] focus:bg-white focus:ring-4 focus:ring-dataview-blue/5 focus:border-dataview-blue transition-all outline-none" />
              </div>
            </div>

            <div className="space-y-1.5" data-aos="fade-up" data-aos-delay="800">
              <label className="text-[7px] font-black text-dataview-dark uppercase tracking-widest ml-1">Serviço de Interesse</label>
              <div className="relative">
                <select className="w-full bg-slate-50 border border-slate-100 rounded-lg p-3 text-[12px] focus:bg-white focus:ring-4 focus:ring-dataview-blue/5 focus:border-dataview-blue transition-all outline-none appearance-none cursor-pointer">
                  <option>Contabilidade Geral</option>
                  <option>Consultoria Fiscal / AGT</option>
                  <option>Gestão de Recursos Humanos</option>
                  <option>Auditoria Independente</option>
                </select>
                <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[8px]" />
              </div>
            </div>

            <div className="space-y-1.5" data-aos="fade-up" data-aos-delay="900">
              <label className="text-[7px] font-black text-dataview-dark uppercase tracking-widest ml-1">Sua Mensagem</label>
              <textarea rows={3} placeholder="Como podemos ajudar hoje?" className="w-full bg-slate-50 border border-slate-100 rounded-lg p-3 text-[12px] focus:bg-white focus:ring-4 focus:ring-dataview-blue/5 focus:border-dataview-blue transition-all outline-none resize-none" />
            </div>

            <button className="w-full py-3.5 bg-dataview-dark text-white rounded-lg text-[8px] font-black uppercase tracking-[3px] hover:bg-dataview-blue hover:-translate-y-0.5 transition-all shadow-lg active:scale-95">
              Enviar Solicitação
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}