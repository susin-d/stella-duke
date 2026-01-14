// Author: Stella Duke
// OS support: Web Browser (Chrome, Safari, Firefox)
// Description: Refined product showcase for the homepage with balanced alignment.

import React from 'react';

export const HomeProducts: React.FC = () => {
  const items = [
    {
      label: "ENGINEERING",
      title: "Cloud Editor.",
      subtitle: "Zero Latency.",
      desc: "Experience the speed of a local environment in your browser. With native Rust bindings and a distributed kernel, our editor handles millions of lines of code without a stutter.",
      features: ['Local-first architecture', 'Real-time multi-user syncing', 'Integrated Vercel & AWS deployments'],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
      reverse: false
    },
    {
      label: "INTELLIGENCE",
      title: "Genius Assistant.",
      subtitle: "Your Co-Pilot.",
      desc: "Stella Genius understands your codebase contextually and fixes bugs before they reach production. Available across all major operating systems.",
      features: ['Context-aware code refactoring', 'Autonomous bug patching', 'Personalized dev productivity insights'],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000",
      reverse: true
    },
    {
      label: "AUTONOMY",
      title: "Stella Swarm.",
      subtitle: "Autonomous Agents.",
      desc: "Independently write features, fix security vulnerabilities, and optimize infrastructure with our swarm protocol. 99.9% architectural accuracy.",
      features: ['Self-healing codebase', 'Autonomous feature delivery', 'Multi-agent orchestration'],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
      reverse: false
    }
  ];

  return (
    <section className="py-32 bg-black space-y-48">
      {items.map((item, idx) => (
        <div key={idx} className="container mx-auto px-6">
          <div className={`flex flex-col ${item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-20 lg:gap-32`}>
            <div className="flex-1 animate-fade">
              <div className="text-[12px] font-bold tracking-[0.4em] text-slate-500 uppercase mb-6">{item.label}</div>
              <h2 className="text-[48px] md:text-[64px] font-bold text-white mb-8 leading-[1] tracking-tighter">
                {item.title} <br/><span className="gradient-text">{item.subtitle}</span>
              </h2>
              <p className="text-slate-400 text-[19px] leading-relaxed mb-10">
                {item.desc}
              </p>
              <ul className="space-y-5 mb-12">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-300 font-medium">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center border border-white/5">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="silver-button !px-10">System Details</button>
            </div>
            
            <div className="flex-1 relative group animate-fade [animation-delay:200ms]">
              <div className="absolute -inset-8 bg-white/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-3xl">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-[500px] object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

// --- End of components/HomeProducts.tsx ---