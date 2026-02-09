export default function NavBar() {
  return (
    <nav
      className="sticky top-0 z-[100] glass-nav border-b border-white/5"
      id="mainNav"
    >
      <div className="max-w-[1440px] mx-auto px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="relative w-auto h-auto flex flex-col justify-end p-1 overflow-hidden transition-transform group-hover:scale-105">
          <img
            src="/img/2-removebg-preview.png" // ✅ caminho correto
            alt="DataView Logo"
            className="md:w-32 w-24 h-auto object-contain"
          />
        </div>

        {/* Menu links */}
        <ul className="hidden xl:flex items-center gap-8 text-[10px] font-extrabold uppercase tracking-[2px] text-white/70">
          <li>
            <a
              href="#home"
              className="text-white border-b-2 border-dataview-accent pb-1"
            >
              Início
            </a>
          </li>
          <li className="relative group">
            <a
              href="#servicos"
              className="hover:text-white transition flex items-center gap-2"
            >
              Serviços <i className="fa-solid fa-chevron-down text-[8px]" />
            </a>
            <div className="absolute top-full left-0 mt-5 w-64 bg-dataview-navy border border-white/10 p-6 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-2xl">
              <div className="space-y-4">
                <a href="#" className="block text-white/60 hover:text-dataview-accent">
                  Contabilidade Geral
                </a>
                <a href="#" className="block text-white/60 hover:text-dataview-accent">
                  Assessoria Fiscal (AGT)
                </a>
                <a href="#" className="block text-white/60 hover:text-dataview-accent">
                  Recursos Humanos
                </a>
                <a href="#" className="block text-white/60 hover:text-dataview-accent">
                  Auditoria Financeira
                </a>
              </div>
            </div>
          </li>
          <li>
            <a href="#metodologia" className="hover:text-white transition">
              Metodologia
            </a>
          </li>
          <li>
            <a
              href="#academia"
              className="hover:text-white transition italic text-dataview-accent"
            >
              Downloads
            </a>
          </li>
          <li>
            <a href="#contacto" className="hover:text-white transition">
              Contactos
            </a>
          </li>
        </ul>

        {/* Botões */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block text-white text-[9px] font-black uppercase tracking-widest border border-white/20 px-5 py-3 rounded-xl hover:bg-white/5 transition">
            Área de Cliente
          </button>
          <button className="bg-dataview-blue text-white text-[9px] font-black uppercase tracking-widest px-6 py-3 rounded-xl shadow-xl shadow-dataview-blue/20 hover:scale-105 transition-all">
            Solicitar Proposta
          </button>
        </div>
      </div>
    </nav>
  );
}
