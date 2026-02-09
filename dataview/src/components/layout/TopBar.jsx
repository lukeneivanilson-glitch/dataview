

export default function TopBar() {
  return (
    <>
      {/* TOP BAR: Ajustada para 1440px */}
      <div className="hidden lg:block bg-dataview-navy border-b border-white/5 py-2 px-8">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center text-[10px] font-bold uppercase tracking-[2px] text-white/50">
          <div className="flex gap-8">
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-location-dot text-dataview-accent" />{" "}
              Edifício Sky Center, Talatona, Luanda
            </span>
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-clock text-dataview-accent" /> Seg - Sex:
              08:00 - 17:30
            </span>
          </div>
          <div className="flex gap-6 items-center">
            <a
              href="mailto:geral@dataview.ao"
              className="hover:text-white transition"
            >
              geral@dataview.ao
            </a>
            <span className="w-px h-3 bg-white/10" />
            <div className="flex gap-3">
              <i className="fa-brands fa-linkedin-in hover:text-dataview-accent cursor-pointer" />
              <i className="fa-brands fa-whatsapp hover:text-dataview-accent cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
