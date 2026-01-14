// Author: Stella Duke
// OS support: Web Browser (Chrome, Safari, Firefox)
// Description: Product page for Stella Genius (Black and Silver edition)

import React from 'react';
import { Page } from '../../App';

interface AiAssistantPageProps {
  setPage: (page: Page) => void;
}

export const AiAssistantPage: React.FC<AiAssistantPageProps> = ({ setPage }) => {
  return (
    <div className="pt-40 pb-32 min-h-screen bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24 mb-32">
          <div className="flex-1 text-left animate-fade">
            <span className="text-[11px] font-bold tracking-[0.4em] text-slate-500 uppercase mb-6 block">Neural Module: Active</span>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-[0.9]">
              Genius. <br/><span className="gradient-text">Unbound.</span>
            </h1>
            <p className="text-2xl text-slate-400 leading-relaxed mb-12 max-w-xl">
              The autonomous engineering companion that lives across your devices. From debugging kernels to optimizing sprints, Genius is your architectural backbone.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <button onClick={() => setPage('downloads')} className="silver-button !text-[16px] !px-10">Download OS Client</button>
              <button className="ghost-button !text-[16px] !px-10">Access Web UI</button>
            </div>
          </div>
          
          <div className="flex-1 relative animate-fade [animation-delay:200ms]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/5 blur-[120px] rounded-full" />
            <div className="relative silver-card border-white/10 p-1 bg-black overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1200" 
                alt="Genius Core" 
                className="w-full h-auto opacity-40 grayscale group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <div className="text-[10px] font-bold tracking-[0.4em] text-white uppercase mb-2">Neural Link Status</div>
                <div className="text-green-500 font-mono text-[12px]">SYNCED // ENCRYPTED</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { title: "Node Analysis", desc: "Real-time auditing of distributed node health." },
            { title: "Code Synth", desc: "Autonomous feature synthesis using proprietary models." },
            { title: "Threat Offset", desc: "Predictive patching of vulnerabilities before discovery." },
            { title: "Spatial Sync", desc: "Seamless context sharing across mobile and desktop." }
          ].map((item, i) => (
            <div key={i} className="silver-card p-10 hover:bg-white/[0.04]">
              <h4 className="text-xl font-bold text-white mb-4 tracking-tight">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- End of components/products/AiAssistant.tsx ---