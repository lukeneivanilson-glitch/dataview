export default function Footer() {
  return (
    <footer className="bg-dataview-navy text-white pt-16 md:px-20 pb-8 overflow-hidden relative border-t border-white/5">
      {/* Efeito de Glow mais contido */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-dataview-blue opacity-[0.02] rounded-full translate-x-1/3 -translate-y-1/3" />
      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        {/* Grid Principal */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/5 pb-16">
          {/* Branding e Social */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-auto h-auto flex flex-col justify-end p-1 overflow-hidden transition-transform group-hover:scale-105">
                <img
                  src="public/img/2-removebg-preview.png"
                  alt="DataView Logo"
                  className="md:w-32 w-24 h-auto object-contain"
                />
              </div>
            </div>
            <p className="text-white/40 text-[12px] leading-relaxed italic mb-8 max-w-xs">
              Lideramos o mercado de contabilidade estratégica em Luanda com rigor e
              inovação tecnológica. Do seu património, cuidamos nós.
            </p>
            <div className="flex gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-dataview-accent hover:text-dataview-navy transition-all cursor-pointer">
                <i className="fa-brands fa-linkedin-in text-sm" />
              </div>
              <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-dataview-accent hover:text-dataview-navy transition-all cursor-pointer">
                <i className="fa-brands fa-instagram text-sm" />
              </div>
              <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-dataview-accent hover:text-dataview-navy transition-all cursor-pointer">
                <i className="fa-brands fa-whatsapp text-sm" />
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h5 className="font-display font-bold text-[10px] uppercase tracking-[3px] text-dataview-blue mb-8 italic">
              Acesso Rápido
            </h5>
            <ul className="space-y-4 text-[9px] font-bold text-white/50 uppercase tracking-[2px]">
              <li className="hover:text-white transition cursor-pointer">Sobre a Dataview</li>
              <li className="hover:text-white transition cursor-pointer">Nossa Metodologia</li>
              <li className="hover:text-white transition cursor-pointer">Carreiras</li>
              <li className="hover:text-white transition cursor-pointer">Notícias Fiscais</li>
              <li className="hover:text-white transition cursor-pointer">Privacidade</li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h5 className="font-display font-bold text-[10px] uppercase tracking-[3px] text-dataview-blue mb-8 italic">
              Serviços Focados
            </h5>
            <ul className="space-y-4 text-[9px] font-bold text-white/50 uppercase tracking-[2px]">
              <li className="hover:text-white transition cursor-pointer">Auditoria de Contas</li>
              <li className="hover:text-white transition cursor-pointer">Outsourcing Financeiro</li>
              <li className="hover:text-white transition cursor-pointer">Processamento Salarial</li>
              <li className="hover:text-white transition cursor-pointer">Apoio ao Investidor</li>
              <li className="hover:text-white transition cursor-pointer">Legalização AGT</li>
            </ul>
          </div>

          {/* Contacto e Newsletter */}
          <div>
            <h5 className="font-display font-bold text-[10px] uppercase tracking-[3px] text-dataview-blue mb-8 italic">
              Onde Estamos
            </h5>
            <div className="space-y-4 text-[9px] font-bold text-white/50 uppercase tracking-[2px] mb-8">
              <p className="leading-relaxed flex gap-3">
                <i className="fa-solid fa-map-pin text-dataview-accent mt-0.5" /> Sky Center, Talatona, Luanda
              </p>
              <p className="flex gap-3">
                <i className="fa-solid fa-phone text-dataview-accent" /> (+244) 923 444 555
              </p>
            </div>
            <div className="p-5 bg-white/5 rounded-xl border border-white/5">
              <p className="text-[8px] italic text-white/30 mb-3 uppercase tracking-widest">
                Newsletter Fiscal
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="bg-white/10 border-none rounded-lg py-2 px-3 text-[10px] w-full outline-none focus:ring-1 focus:ring-dataview-accent"
                />
                <button className="bg-dataview-blue px-3 rounded-lg hover:bg-dataview-accent transition-colors">
                  <i className="fa-solid fa-paper-plane text-[10px]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[8px] font-black uppercase tracking-[3px] text-white/20 text-center md:text-left">
          <p>© 2026 DATAVIEW CONTABILIDADE &amp; GESTÃO - LDA. NIF: 5410000000.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <span className="text-white/40">Powered by DV Strategic Tech</span>
            <span className="flex items-center gap-2">
              <div className="w-3 h-[1px] bg-dataview-accent" /> Orgulho em Angola
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
