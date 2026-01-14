// Author: Stella Duke
// OS support: Web Browser (Chrome, Safari, Firefox)
// Description: Generic information page for legal and compliance documents.

import React from 'react';

interface LegalPageProps {
  title: string;
}

export const LegalPage: React.FC<LegalPageProps> = ({ title }) => {
  return (
    <div className="pt-40 pb-32 min-h-screen bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-16 animate-fade">
            <span className="text-[11px] font-bold tracking-[0.4em] text-slate-500 uppercase mb-6 block">Legal Archive</span>
            <h1 className="text-5xl font-bold text-white mb-8 tracking-tighter">{title}</h1>
            <p className="text-slate-500 text-sm">Last Updated: October 24, 2024</p>
          </div>

          <div className="silver-card p-12 space-y-12 text-slate-400 leading-relaxed animate-fade [animation-delay:200ms]">
            <section>
              <h2 className="text-xl font-bold text-white mb-6">1. Overview</h2>
              <p>This document outlines the protocols and standards maintained by Stella Duke Technologies. We believe in total transparency and data sovereignty for every engineer on our mesh network.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-6">2. Data Sovereignty</h2>
              <p>Your code is your property. Stella Duke provides the interface and intelligence to scale it, but we never claim ownership or persistence beyond your explicit instruction.</p>
            </section>
            <section>
              <h2 className="text-xl font-bold text-white mb-6">3. Use of AI</h2>
              <p>All AI-generated content and insights are provided "as-is" for architectural optimization. Final validation remains the responsibility of the system architect.</p>
            </section>
            <div className="pt-12 border-t border-white/5">
              <p className="text-xs italic text-slate-600">For inquiries regarding this protocol, please contact legal@stelladuke.tech</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- End of components/pages/LegalPage.tsx ---