// Author: Stella Duke
// OS support: Web Browser (Chrome, Safari, Firefox)
// Description: Subtle silver monochromatic marquee for partner logos.

import React from 'react';

const LOGOS = [
  "QUANTUM", "NEXUS", "VECTOR", "COBALT", "PRISM", "KINETIC", "ORBIT", "SYNAPSE"
];

export const TrustLogos: React.FC = () => {
  return (
    <div className="py-32 bg-black overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 mb-16 text-center">
        <span className="text-[11px] font-bold text-slate-600 uppercase tracking-[0.5em]">Powered Nodes Globally</span>
      </div>
      
      <div className="flex overflow-hidden opacity-20 transition-opacity hover:opacity-50">
        <div className="animate-marquee whitespace-nowrap flex items-center py-6">
          {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, idx) => (
            <span 
              key={idx} 
              className="text-[32px] font-black text-white mx-16 tracking-tighter"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- End of components/TrustLogos.tsx ---