// Author: Stella Duke
// OS support: Web Browser
// Description: Refined Hero section with improved spacing and vertical alignment.

import React from 'react';
import { Page } from '../App';

interface HeroProps {
  setPage: (page: Page) => void;
}

export const Hero: React.FC<HeroProps> = ({ setPage }) => {
  return (
    <section className="relative pt-52 pb-40 bg-black flex flex-col items-center text-center overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-white/[0.04] blur-[160px] rounded-full -z-10" />
      
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[12px] font-bold tracking-[0.2em] text-slate-300 uppercase mb-12 animate-fade">
          <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
          Protocol v4.0.2 Deployment Live
        </div>
        
        <h1 className="text-[60px] md:text-[108px] font-bold tracking-tighter text-white mb-10 leading-[0.85] animate-fade">
          Engineering. <br />
          <span className="gradient-text">Mastered in Silver.</span>
        </h1>
        
        <p className="text-[19px] md:text-[25px] text-slate-400 mb-16 max-w-2xl mx-auto leading-relaxed animate-fade [animation-delay:150ms]">
          A unified engineering ecosystem forged for high-performance teams. Deploy distributed zero-latency architecture with autonomous swarm intelligence.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-36 animate-fade [animation-delay:300ms]">
          <button onClick={() => setPage('downloads')} className="silver-button !text-[16px] !px-12 !py-5">Download Binary</button>
          <button onClick={() => setPage('all-pages')} className="ghost-button !text-[16px] !px-12 !py-5 group flex items-center gap-3">
            System Manifest
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </button>
        </div>

        <div className="relative w-full max-w-6xl mx-auto animate-fade [animation-delay:450ms]">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-white/20 via-white/5 to-white/20 rounded-[44px] blur-2xl opacity-20" />
          <div className="relative bg-[#080808] rounded-[40px] shadow-3xl overflow-hidden border border-white/10 p-2.5">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10" />
             <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
              alt="Platform Core Visualization" 
              className="w-full h-auto object-cover opacity-70 grayscale scale-105 transition-transform duration-[20s] hover:scale-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// --- End of components/Hero.tsx ---