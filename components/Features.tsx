
// Author: AI Assistant
// OS support: Web Browser (Chrome, Safari, Firefox)
// Description: Grid of core product features with silver icons

import React from 'react';

const FEATURE_DATA = [
  {
    title: "Real-time Observability",
    description: "Instant insights across your entire stack with sub-second latency data processing.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    )
  },
  {
    title: "Predictive Analytics",
    description: "Identify bottlenecks before they happen with our proprietary ML forecasting engine.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
    )
  },
  {
    title: "Smart Automations",
    description: "Auto-scale resources and trigger healing workflows based on intelligent triggers.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
    )
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Engineering First Design</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Everything you need to ship confident code and maintain reliable systems.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {FEATURE_DATA.map((feature, idx) => (
            <div key={idx} className="p-8 rounded-2xl glass border border-slate-800 hover:border-slate-500 transition-all group">
              <div className="w-12 h-12 bg-white/5 text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- End of components/Features.tsx ---
