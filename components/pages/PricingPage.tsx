// Author: Stella Duke
// OS support: Web Browser (Chrome, Safari, Firefox)
// Description: Detailed pricing page with tiered plans and feature comparison.

import React from 'react';

export const PricingPage: React.FC = () => {
  const plans = [
    { name: 'Core', price: 'Free', desc: 'For individual engineers', features: ['Cloud Editor (Solo)', 'Genius AI (Basic)', '1 Project Node'] },
    { name: 'Team', price: '$49/mo', desc: 'For growing scale-ups', features: ['Collaborative Editor', 'Full Genius Suite', '10 Project Nodes', 'Swarm Access'] },
    { name: 'Enterprise', price: 'Custom', desc: 'For global organizations', features: ['Private Mesh', 'Custom AI Synth', 'Unlimited Nodes', '24/7 Silver Support'] },
  ];

  return (
    <div className="pt-40 pb-32 min-h-screen bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 animate-fade">
          <h1 className="text-6xl font-bold text-white mb-6 tracking-tighter">Scale with <span className="gradient-text">Precision</span></h1>
          <p className="text-xl text-slate-500 max-w-xl mx-auto">Flexible investment plans for teams of any size. Built to grow with your architecture.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-32">
          {plans.map((plan, i) => (
            <div key={i} className={`silver-card p-12 flex flex-col justify-between ${i === 1 ? 'border-white/30 bg-white/[0.04]' : ''}`}>
              <div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-4">{plan.name}</div>
                <div className="text-4xl font-bold text-white mb-4">{plan.price}</div>
                <p className="text-slate-500 text-sm mb-10">{plan.desc}</p>
                <div className="space-y-4 mb-12">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-3 text-sm text-slate-300">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
              <button className={i === 1 ? 'silver-button' : 'ghost-button'}>Select {plan.name}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- End of components/pages/PricingPage.tsx ---