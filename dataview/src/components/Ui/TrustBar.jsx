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
    <div className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-[1600px] mx-auto px-8">
        <p className="text-center text-[10px] font-black text-slate-300 uppercase tracking-[6px] mb-12 italic">
          Liderando com rigor em diversos setores
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          {sectors.map((sector, index) => (
            <div key={index} className="group flex flex-col items-center gap-4">
               <i className={`fa-solid ${sector.icon} text-4xl text-dataview-navy group-hover:text-dataview-blue transition-colors`} />
               {/* Tooltip opcional que aparece no hover */}
               <span className="text-[8px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                 {sector.label}
               </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}