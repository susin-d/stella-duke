// Author: Stella Duke
// OS support: Web Browser (Chrome, Safari, Firefox)
// Description: Black and Silver minimalist multi-column footer with active navigation links.

import React from 'react';
import { Page } from '../App';

interface FooterProps {
  setPage: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ setPage }) => {
  return (
    <footer className="py-24 bg-black border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-full lg:col-span-1">
            <button 
              onClick={() => setPage('home')}
              className="flex items-center gap-2 mb-8 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-bold text-xs">S</div>
              <span className="text-[18px] font-bold text-white tracking-tight">Stella Duke</span>
            </button>
          </div>
          
          <div>
            <h4 className="text-[11px] font-bold mb-6 text-white uppercase tracking-widest">Modules</h4>
            <ul className="space-y-4 text-[13px] text-slate-500">
              <li><button onClick={() => setPage('editor')} className="hover:text-white transition-colors">Cloud Editor</button></li>
              <li><button onClick={() => setPage('assistant')} className="hover:text-white transition-colors">Genius AI</button></li>
              <li><button onClick={() => setPage('tts')} className="hover:text-white transition-colors">Voice Synth (TTS)</button></li>
              <li><button onClick={() => setPage('llm')} className="hover:text-white transition-colors">Neural Engine (LLM)</button></li>
              <li><button onClick={() => setPage('agents')} className="hover:text-white transition-colors">Swarm Agents</button></li>
              <li><button onClick={() => setPage('workspace')} className="hover:text-white transition-colors">Workspace</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[11px] font-bold mb-6 text-white uppercase tracking-widest">Protocol</h4>
            <ul className="space-y-4 text-[13px] text-slate-500">
              <li><button onClick={() => setPage('network')} className="hover:text-white transition-colors">Network Status</button></li>
              <li><button onClick={() => setPage('security')} className="hover:text-white transition-colors">Security Audit</button></li>
              <li><button onClick={() => setPage('latency')} className="hover:text-white transition-colors">Latency Logs</button></li>
              <li><button onClick={() => setPage('opensource')} className="hover:text-white transition-colors">Open Source</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[11px] font-bold mb-6 text-white uppercase tracking-widest">Enterprise</h4>
            <ul className="space-y-4 text-[13px] text-slate-500">
              <li><button onClick={() => setPage('pricing')} className="hover:text-white transition-colors">Scale Pricing</button></li>
              <li><button onClick={() => setPage('support')} className="hover:text-white transition-colors">Support Portal</button></li>
              <li><button onClick={() => setPage('home')} className="hover:text-white transition-colors">Consultation</button></li>
              <li><button onClick={() => setPage('partners')} className="hover:text-white transition-colors">Partners</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold mb-6 text-white uppercase tracking-widest">Legal</h4>
            <ul className="space-y-4 text-[13px] text-slate-500">
              <li><button onClick={() => setPage('privacy')} className="hover:text-white transition-colors">Data Privacy</button></li>
              <li><button onClick={() => setPage('terms')} className="hover:text-white transition-colors">Service Terms</button></li>
              <li><button onClick={() => setPage('cookies')} className="hover:text-white transition-colors">Cookie Policy</button></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 text-[12px] text-slate-600 flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© 2024 Stella Duke Technologies. Encrypted for security.</p>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer transition-colors uppercase tracking-widest text-[10px] font-bold">Node: 7F42-B</span>
            <span className="hover:text-white cursor-pointer transition-colors uppercase tracking-widest text-[10px] font-bold">Latency: 12ms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- End of components/Footer.tsx ---