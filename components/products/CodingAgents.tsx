// Author: Stella Duke
// OS support: Web Browser (Chrome, Safari, Firefox)
// Description: Product page for Stella Swarm (Black and Silver edition)

import React from 'react';

export const CodingAgentsPage: React.FC = () => {
  return (
    <div className="pt-40 pb-32 min-h-screen bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24 animate-fade">
          <div className="flex-1">
            <span className="text-[11px] font-bold tracking-[0.4em] text-slate-500 uppercase mb-6 block">Module: Autonomy Swarm</span>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-[0.9]">
              The <span className="gradient-text">Swarm</span> <br/>Protocol.
            </h1>
            <p className="text-2xl text-slate-400 leading-relaxed max-w-2xl">
              Scale your engineering output without scaling your headcount. Autonomous agents orchestrated for total feature delivery.
            </p>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
              alt="Autonomous Network" 
              className="rounded-[32px] border border-white/10 grayscale opacity-40 shadow-2xl"
            />
          </div>
        </div>

        <div className="silver-card h-[500px] border-white/10 mb-32 flex items-center justify-center relative overflow-hidden animate-fade [animation-delay:200ms]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)] animate-pulse" />
          
          <div className="relative flex flex-wrap justify-center gap-16 p-12 max-w-4xl">
              {['Architect', 'Synth-1', 'Synth-2', 'Validator', 'Deploy-Bot'].map((agent, i) => (
                  <div key={i} className="flex flex-col items-center gap-5 group cursor-pointer">
                      <div className="w-24 h-24 rounded-[32px] bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 group-hover:scale-110 shadow-2xl">
                          <div className="w-10 h-10 border-2 border-current rounded-xl opacity-40" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-500 group-hover:text-white transition-colors">{agent}</span>
                  </div>
              ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-24">
            <div className="space-y-8">
                <h3 className="text-3xl font-bold text-white tracking-tight">Full-Stack Synthesis</h3>
                <p className="text-slate-500 leading-relaxed text-lg">
                    Stella agents are not LLM wrappers. They are specialized engineering modules that understand state management, cloud-native infrastructure, and binary performance.
                </p>
                <div className="p-10 silver-card border-white/5 bg-white/[0.02]">
                    <div className="text-[10px] font-bold text-slate-600 uppercase mb-6 tracking-widest">Active Synthesis:</div>
                    <div className="text-white font-mono text-[14px] leading-relaxed">"Re-architecting authentication node for geo-distributed high-availability."</div>
                    <div className="mt-8 flex items-center gap-6">
                        <div className="flex-1 bg-white/5 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-white h-full w-[88%] transition-all duration-1000" />
                        </div>
                        <span className="text-[11px] font-bold text-white tracking-widest">88% SYNTH</span>
                    </div>
                </div>
            </div>
            
            <div className="space-y-8">
                <h3 className="text-3xl font-bold text-white tracking-tight">Validator Swarm</h3>
                <p className="text-slate-500 leading-relaxed text-lg">
                    Every line of code is challenged by a secondary swarm of validation agents. Zero-day scanning and chaos engineering simulations are built into every build.
                </p>
                <ul className="space-y-6">
                    {['Automated Unit Synthesis', 'Security Perimeter Validation', 'Binary Footprint Optimization'].map((f, i) => (
                        <li key={i} className="flex items-center gap-4 text-slate-300 font-medium">
                            <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                            {f}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

// --- End of components/products/CodingAgents.tsx ---