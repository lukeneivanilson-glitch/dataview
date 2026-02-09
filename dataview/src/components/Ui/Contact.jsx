import React from "react";
import { useForm } from "@formspree/react";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  // 1. Configuração do Formspree (ID corrigido: apenas o código alfanumérico)
  const [state, handleSubmit] = useForm("xjgekjje");

  // 2. Lógica de envio com Toast e Limpeza de campos
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    // toast.promise gere os 3 estados: loading, success e error
    await toast.promise(
      handleSubmit(e).then((result) => {
        if (result.body && !result.body.errors) {
          form.reset(); // Limpa o formulário apenas se tiver sucesso
        } else {
          throw new Error("Erro no servidor");
        }
      }),
      {
        loading: "A enviar a sua solicitação...",
        success: "Mensagem enviada com sucesso! 🚀",
        error: "Erro ao enviar. Por favor, tente novamente.",
      },
      {
        style: {
          minWidth: "250px",
          borderRadius: "12px",
          background: "#1e293b", // Slate-800
          color: "#fff",
          fontSize: "14px",
        },
        success: {
          duration: 5000,
          iconTheme: {
            primary: "#3b82f6", // dataview-blue
            secondary: "#fff",
          },
        },
      }
    );
  };

  return (
    <section
      id="contacto"
      className="py-16 lg:py-24 bg-white relative overflow-hidden"
    >
      {/* Notificações no topo */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Elementos Decorativos de Fundo */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-slate-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-dataview-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Coluna de Informação */}
        <div className="space-y-8">
          <h3 className="text-4xl lg:text-5xl text-dataview-dark mb-5 font-black italic leading-tight tracking-tighter">
            Pronto para <br />
            <span className="text-dataview-blue">Decolar?</span>
          </h3>
          <p className="text-sm text-slate-500 max-w-sm leading-relaxed italic opacity-90">
            Visite-nos em Luanda ou solicite uma reunião virtual com os nossos consultores especializados.
          </p>

          <div className="space-y-6 pt-2">
            <div className="flex gap-5 items-center">
              <i className="fa-solid fa-phone text-dataview-blue text-xl" />
              <p className="text-base font-bold text-dataview-dark">+244 923 000 000</p>
            </div>
            <div className="flex gap-5 items-center">
              <i className="fa-solid fa-envelope-open-text text-dataview-blue text-xl" />
              <p className="text-base font-bold text-dataview-dark">comercial@dataview.ao</p>
            </div>
          </div>
        </div>

        {/* Coluna do Formulário */}
        <div className="p-8 lg:p-10 bg-white rounded-[2.5rem] shadow-[0_25px_60px_rgba(0,0,0,0.06)] border border-slate-100">
          <form onSubmit={handleFormSubmit} className="space-y-4">
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[7px] font-black uppercase tracking-widest ml-1">Nome Completo</label>
                <input 
                  type="text" 
                  name="nome" 
                  placeholder="João Manuel" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-lg p-3 text-[12px] focus:outline-none focus:ring-2 focus:ring-dataview-blue/20 focus:border-dataview-blue transition-all" 
                  required 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[7px] font-black uppercase tracking-widest ml-1">Empresa</label>
                <input 
                  type="text" 
                  name="empresa" 
                  placeholder="Nome da instituição" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-lg p-3 text-[12px] focus:outline-none focus:ring-2 focus:ring-dataview-blue/20 focus:border-dataview-blue transition-all" 
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[7px] font-black uppercase tracking-widest ml-1">Serviço de Interesse</label>
              <select 
                name="servico" 
                className="w-full bg-slate-50 border border-slate-100 rounded-lg p-3 text-[12px] focus:outline-none focus:ring-2 focus:ring-dataview-blue/20 focus:border-dataview-blue transition-all"
              >
                <option>Contabilidade Geral</option>
                <option>Consultoria Fiscal / AGT</option>
                <option>Gestão de Recursos Humanos</option>
                <option>Auditoria Independente</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[7px] font-black uppercase tracking-widest ml-1">Sua Mensagem</label>
              <textarea 
                name="mensagem" 
                rows={3} 
                placeholder="Como podemos ajudar hoje?" 
                className="w-full bg-slate-50 border border-slate-100 rounded-lg p-3 text-[12px] focus:outline-none focus:ring-2 focus:ring-dataview-blue/20 focus:border-dataview-blue transition-all" 
                required 
              />
            </div>

            {/* O botão fica desativado automaticamente durante o envio via state.submitting */}
            <button 
              type="submit" 
              disabled={state.submitting}
              className="w-full py-3.5 bg-dataview-dark text-white rounded-lg text-[8px] font-black uppercase tracking-[3px] hover:bg-dataview-blue active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.submitting ? "A processar..." : "Enviar Solicitação"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}