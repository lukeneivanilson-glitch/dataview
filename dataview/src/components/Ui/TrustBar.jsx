import React from 'react';

const sectors = [
  { icon: 'fa-landmark', label: 'Banca' },
  { icon: 'fa-oil-well', label: 'Petróleo & Gás' },
  { icon: 'fa-ship', label: 'Logística Marítima' },
  { icon: 'fa-helmet-safety', label: 'Engenharia' },
  { icon: 'fa-wheat-awn', label: 'Agronegócio' },
];

export default function TrustBar() {
  return (
    <div className="py-12 bg-white border-b border-slate-50">
      {/* Enquadramento ajustado para 1200px */}
      <div className="max-w-[1200px] mx-auto px-6">
        <p 
          className="text-center text-[9px] font-black text-slate-300 uppercase tracking-[5px] mb-10 italic"
          data-aos="fade-up"
          data-aos-duration="400"
        >
          Liderando com rigor em diversos setores
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {sectors.map((sector, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center gap-3"
              data-aos="zoom-in"
              data-aos-delay={index * 50} // Cascata ultra rápida (50ms entre cada item)
              data-aos-duration="300"
            >
               <i className={`fa-solid ${sector.icon} text-3xl text-dataview-navy group-hover:text-dataview-blue transition-colors`} />
               
               <span className="text-[7px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity text-dataview-blue">
                 {sector.label}
               </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}