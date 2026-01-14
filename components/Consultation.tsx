// Author: Stella Duke
// OS support: Web Browser (Chrome, Safari, Firefox)
// Description: Black and Silver AI consultant terminal.

import React, { useState } from 'react';
import { getTechInsight } from '../services/geminiService';

export const Consultation: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse(null);
    try {
      const insight = await getTechInsight(query);
      setResponse(insight || "System link interrupted.");
    } catch (err) {
      setResponse("Fatal connection error. Protocol reset required.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="consultation" className="py-32 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto silver-card p-12 md:p-24 text-center flex flex-col items-center overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <span className="text-[11px] font-bold tracking-[0.4em] text-slate-500 uppercase mb-6">Neural Protocol Active</span>
          <h2 className="text-[48px] md:text-[64px] font-bold text-white mb-8 tracking-tighter leading-tight">Stella Genius.</h2>
          <p className="text-[19px] text-slate-400 mb-16 max-w-xl leading-relaxed">
            Direct interface with our architectural intelligence. Inquire about optimization patterns or cloud-native scaling.
          </p>
          
          <form onSubmit={handleSubmit} className="w-full max-w-2xl relative group">
            <div className="absolute -inset-1 bg-white/10 blur opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
            <div className="relative">
              <input 
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Submit technical query..."
                className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-6 text-[16px] text-white focus:outline-none focus:border-white/40 transition-all placeholder:text-slate-700"
              />
              <button 
                disabled={loading}
                className="absolute right-2.5 top-2.5 bottom-2.5 silver-button !py-0 !px-10 disabled:opacity-50"
              >
                {loading ? 'Processing' : 'Interface'}
              </button>
            </div>
          </form>

          {response && (
            <div className="mt-16 text-left p-10 bg-white/5 rounded-[32px] border border-white/10 animate-fade shadow-2xl relative">
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-white rounded-full" />
              <p className="text-[16px] leading-relaxed text-slate-300 font-medium italic">
                <span className="text-white font-bold block mb-3 not-italic uppercase tracking-widest text-[11px] opacity-60">System Response:</span>
                "{response}"
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// --- End of components/Consultation.tsx ---