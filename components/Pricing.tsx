
// Author: AI Assistant
// OS support: Web Browser (Chrome, Safari, Firefox)
// Description: Flexible pricing table with silver highlights

import React from 'react';

const PLANS = [
  {
    name: "Starter",
    price: "0",
    description: "Perfect for side projects and individual developers.",
    features: ["5 Projects", "Basic Monitoring", "24h Data Retention", "Community Support"],
    cta: "Start for Free",
    popular: false
  },
  {
    name: "Pro",
    price: "49",
    description: "Scale your startup with advanced tools and insights.",
    features: ["Unlimited Projects", "AI Predictive Alerts", "30 Days Retention", "Priority Support", "Team Access"],
    cta: "Start 14-day Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "High-volume solutions for world-class organizations.",
    features: ["Dedicated Support", "SLA Guarantees", "Custom AI Models", "Unlimited Retention", "Security Audit"],
    cta: "Contact Sales",
    popular: false
  }
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Pricing that grows with you</h2>
          <p className="text-slate-400">Simple, transparent, and built for scale.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PLANS.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative p-8 rounded-3xl border transition-all flex flex-col ${plan.popular ? 'bg-white/5 border-slate-400 shadow-xl shadow-white/5' : 'bg-slate-900/30 border-slate-800 hover:border-slate-700'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-black text-xs font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 text-white">{plan.name}</h3>
                <div className="flex items-baseline gap-1 text-white">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-slate-400 text-sm">/mo</span>}
                </div>
                <p className="mt-4 text-sm text-slate-400">{plan.description}</p>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-sm text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-white text-black hover:bg-slate-200' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- End of components/Pricing.tsx ---
