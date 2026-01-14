// Author: Stella Duke
// OS support: Web Browser (Chrome, Safari, Firefox)
// Description: Section showcasing detailed case studies with high-quality, relevant tech imagery.

import React from 'react';

const CASE_STUDIES = [
  {
    company: "Lumina Logistics",
    title: "Optimizing 2M Daily Routes with Stella Editor",
    description: "Reduced deployment latency by 65% using our high-performance cloud editor and real-time syncing architecture.",
    metric: "65% Faster Deploy",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    company: "Nova FinTech",
    title: "Scaling to 100k TPS via Genius AI Monitoring",
    description: "Maintained 99.999% uptime during peak surges using autonomous patching and real-time observability.",
    metric: "100k Trans/Sec",
    image: "https://images.unsplash.com/photo-1611974714024-4607a55d405c?auto=format&fit=crop&q=80&w=800"
  },
  {
    company: "Apex Media",
    title: "Global Collaboration via Unified Workspace",
    description: "Uniting 500+ developers across 4 continents using predictive sprint planning and roadmap alignment.",
    metric: "40% Team Velocity",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
  }
];

export const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <h2 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">Proven Success</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Real-World <span className="gradient-text">Impact</span></h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              Explore how top-tier organizations leverage the Stella Suite to solve their most complex engineering challenges.
            </p>
          </div>
          <button className="px-8 py-3 rounded-full border border-slate-700 text-white font-medium hover:border-white transition-all">
            View All Stories
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, idx) => (
            <div key={idx} className="flex flex-col h-full glass border border-slate-800 rounded-3xl overflow-hidden group hover:border-slate-500 transition-all">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.company} 
                  className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-110 opacity-60"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/80 backdrop-blur-md border border-slate-700 rounded-full text-xs font-bold text-slate-300">
                    {study.company}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="mb-4">
                  <span className="text-2xl font-bold text-white block mb-2">{study.metric}</span>
                  <h4 className="text-xl font-bold text-white leading-tight">{study.title}</h4>
                </div>
                <p className="text-slate-400 mb-8 line-clamp-3 text-sm flex-1">
                  {study.description}
                </p>
                <div className="pt-6 border-t border-slate-800">
                  <a href="#" className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-4 transition-all">
                    Read Case Study
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- End of components/CaseStudies.tsx ---