// Author: Stella Duke
// OS support: Web Browser
// Description: Refined Navbar with perfect vertical alignment and centered link items.

import React from 'react';
import { Page } from '../App';

interface NavbarProps {
  setPage: (page: Page) => void;
  currentPage: Page;
}

export const Navbar: React.FC<NavbarProps> = ({ setPage, currentPage }) => {
  const navLinks: { label: string; id: Page }[] = [
    { label: 'Editor', id: 'editor' },
    { label: 'Genius', id: 'assistant' },
    { label: 'Voice', id: 'tts' },
    { label: 'Neural', id: 'llm' },
    { label: 'Downloads', id: 'downloads' },
    { label: 'All Pages', id: 'all-pages' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 bg-black/50">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <button 
          onClick={() => setPage('home')}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-white to-slate-400 flex items-center justify-center text-black font-bold text-sm shadow-inner">S</div>
          <span className="text-[17px] font-bold tracking-tight text-white">Stella Duke</span>
        </button>
        
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setPage(link.id)}
              className={`text-[13px] font-medium transition-all duration-300 ${
                currentPage === link.id 
                  ? 'text-white' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-8">
          <button 
            onClick={() => setPage('downloads')}
            className="silver-button !py-2 !px-6 !text-[12px] !font-bold"
          >
            Download Suite
          </button>
        </div>
      </nav>
    </div>
  );
};

// --- End of components/Navbar.tsx ---