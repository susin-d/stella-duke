// Author: Stella Duke
// OS support: Web Browser (Chrome, Safari, Firefox)
// Description: A comprehensive directory of all pages within the Stella Duke platform.

import React from 'react';
import { Page } from '../../App';

interface AllPagesPageProps {
  setPage: (page: Page) => void;
}

export const AllPagesPage: React.FC<AllPagesPageProps> = ({ setPage }) => {
  const sections = [
    {
      title: 'Core Ecosystem',
      links: [
        { label: 'Home Page', id: 'home' as Page },
        { label: 'Cloud Editor', id: 'editor' as Page },
        { label: 'Genius AI', id: 'assistant' as Page },
        { label: 'Voice Synth (TTS)', id: 'tts' as Page },
        { label: 'Neural Engine (LLM)', id: 'llm' as Page },
        { label: 'Swarm Agents', id: 'agents' as Page },
        { label: 'Unified Workspace', id: 'workspace' as Page },
      ]
    },
    {
      title: 'Protocol & Telemetry',
      links: [
        { label: 'Network Status', id: 'network' as Page },
        { label: 'Security Audit', id: 'security' as Page },
        { label: 'Latency Logs', id: 'latency' as Page },
        { label: 'Open Source Initiative', id: 'opensource' as Page },
      ]
    },
    {
      title: 'Enterprise & Support',
      links: [
        { label: 'Scale Pricing', id: 'pricing' as Page },
        { label: 'Support Portal', id: 'support' as Page },
        { label: 'Partner Network', id: 'partners' as Page },
      ]
    },
    {
      title: 'Legal & Privacy',
      links: [
        { label: 'Data Privacy', id: 'privacy' as Page },
        { label: 'Service Terms', id: 'terms' as Page },
        { label: 'Cookie Policy', id: 'cookies' as Page },
      ]
    }
  ];

  return (
    <div className="pt-40 pb-32 min-h-screen bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24 animate-fade">
          <span className="text-[11px] font-bold tracking-[0.4em] text-slate-500 uppercase mb-6 block">System Directory</span>
          <h1 className="text-6xl font-bold text-white mb-8 tracking-tighter leading-none">
            All <span className="gradient-text">Modules</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            A comprehensive overview of the Stella Duke platform infrastructure. Access any protocol or module directly from this terminal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, idx) => (
            <div key={idx} className="silver-card p-10 flex flex-col animate-fade" style={{ animationDelay: `${idx * 100}ms` }}>
              <h2 className="text-[12px] font-bold text-white uppercase tracking-widest mb-8 pb-4 border-b border-white/10">
                {section.title}
              </h2>
              <div className="flex flex-col gap-4">
                {section.links.map((link, lIdx) => (
                  <button
                    key={lIdx}
                    onClick={() => setPage(link.id)}
                    className="text-left text-[15px] text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center justify-between group"
                  >
                    <span>{link.label}</span>
                    <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 silver-card border-white/5 bg-white/[0.01] text-center animate-fade" style={{ animationDelay: '600ms' }}>
          <p className="text-slate-500 text-sm mb-6 uppercase tracking-widest font-bold">Terminal Operational</p>
          <div className="flex justify-center gap-12 font-mono text-[10px] text-slate-600">
            <span>VERSION: 4.0.2-SILVER</span>
            <span>ENCRYPTION: AES-256-GCM</span>
            <span>NODE: ACTIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- End of components/pages/AllPagesPage.tsx ---