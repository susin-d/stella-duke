// Author: Stella Duke
// OS support: Web Browser
// Description: Product grid with refined image hover effects and improved spatial alignment.

import React, { useState, useMemo } from 'react';
import { Page } from '../App';

const PRODUCTS = [
  {
    id: 'editor',
    name: 'Cloud Editor',
    tagline: 'Precision engineering in real-time.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'assistant',
    name: 'Genius AI',
    tagline: 'Autonomous observability engine.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4638d9f8d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tts',
    name: 'Voice Synth',
    tagline: 'Hyper-realistic audio synthesis.',
    image: 'https://images.unsplash.com/photo-1590650516494-0caef4096091?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'llm',
    name: 'Neural Engine',
    tagline: 'Massively parallel reasoning core.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'agents',
    name: 'Swarm Agents',
    tagline: 'Scalable multi-agent orchestration.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'workspace',
    name: 'Workspace',
    tagline: 'The unified core for every team.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  }
];

export const ProductBrowser: React.FC<ProductBrowserProps> = ({ setPage }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tagline.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <section className="py-32 bg-black border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-[12px] font-bold tracking-[0.3em] text-slate-500 uppercase mb-4 block">Engineered Ecosystem</span>
            <h2 className="text-[48px] md:text-[64px] font-bold text-white tracking-tighter mb-4 leading-none">The Stella Suite.</h2>
            <p className="text-[20px] text-slate-400">Forged for those who demand the absolute best in structural integrity.</p>
          </div>
          
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </div>
            <input
              type="text"
              placeholder="Search Protocol Modules..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 px-4 text-[15px] text-white focus:outline-none focus:border-white/30 transition-all placeholder:text-slate-700"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <div key={product.id} className="silver-card group relative h-[560px] flex flex-col items-center justify-end p-12 text-center overflow-hidden">
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale opacity-30 transition-all duration-1000 ease-out group-hover:scale-110 group-hover:opacity-60 group-hover:grayscale-0" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity group-hover:opacity-80" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
              </div>
              
              <div className="relative z-10 w-full transform transition-all duration-700 group-hover:translate-y-[-8px]">
                <span className="text-[11px] font-bold tracking-[0.4em] text-slate-500 uppercase mb-4 block">Module Active</span>
                <h3 className="text-[40px] font-bold text-white mb-2 tracking-tighter leading-none">{product.name}</h3>
                <p className="text-[17px] text-slate-400 mb-8 leading-relaxed px-4">{product.tagline}</p>
                <div className="flex items-center justify-center gap-4">
                   <button onClick={() => setPage(product.id as Page)} className="silver-button !px-8 !py-3">Access Core</button>
                   <button className="ghost-button !px-8 !py-3">Specs</button>
                </div>
              </div>
            </div>
          ))}
          
          {filteredProducts.length === 0 && (
            <div className="col-span-full py-48 text-center border border-dashed border-white/10 rounded-[40px]">
              <p className="text-[22px] text-slate-600 italic">No operational modules found within the specified parameters.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

interface ProductBrowserProps {
  setPage: (page: Page) => void;
}

// --- End of components/ProductBrowser.tsx ---