// Author: Stella Duke
// OS support: Web Browser (Chrome, Safari, Firefox)
// Description: Centralized routing hub for the Stella Duke platform. 
// Manages transitions between core modules, protocol logs, and enterprise pages.

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { Consultation } from './components/Consultation';
import { CodeEditorPage } from './components/products/CodeEditor';
import { AiAssistantPage } from './components/products/AiAssistant';
import { WorkspacePage } from './components/products/Workspace';
import { CodingAgentsPage } from './components/products/CodingAgents';
import { TtsProductPage } from './components/products/TtsProduct';
import { LlmProductPage } from './components/products/LlmProduct';
import { TrustLogos } from './components/TrustLogos';
import { Stats } from './components/Stats';
import { ProductBrowser } from './components/ProductBrowser';
import { Features } from './components/Features';
import { CaseStudies } from './components/CaseStudies';
import { HomeProducts } from './components/HomeProducts';

// Protocol & Enterprise Pages
import { NetworkStatusPage } from './components/pages/NetworkStatus';
import { SecurityAuditPage } from './components/pages/SecurityAudit';
import { PricingPage } from './components/pages/PricingPage';
import { LegalPage } from './components/pages/LegalPage';
import { AllPagesPage } from './components/pages/AllPagesPage';
import { DownloadsPage } from './components/pages/DownloadsPage';

export type Page = 
  | 'home' | 'editor' | 'assistant' | 'workspace' | 'agents' | 'tts' | 'llm'
  | 'network' | 'security' | 'latency' | 'opensource'
  | 'pricing' | 'support' | 'partners' | 'downloads'
  | 'privacy' | 'terms' | 'cookies' | 'all-pages';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'editor': return <CodeEditorPage setPage={setCurrentPage} />;
      case 'assistant': return <AiAssistantPage setPage={setCurrentPage} />;
      case 'workspace': return <WorkspacePage />;
      case 'agents': return <CodingAgentsPage />;
      case 'tts': return <TtsProductPage />;
      case 'llm': return <LlmProductPage />;
      case 'downloads': return <DownloadsPage />;
      case 'network':
      case 'latency': return <NetworkStatusPage />;
      case 'security': return <SecurityAuditPage />;
      case 'pricing': return <PricingPage />;
      case 'privacy': return <LegalPage title="Data Privacy Protocol" />;
      case 'terms': return <LegalPage title="Service Terms" />;
      case 'cookies': return <LegalPage title="Cookie Architecture" />;
      case 'opensource': return <LegalPage title="Open Source Initiative" />;
      case 'all-pages': return <AllPagesPage setPage={setCurrentPage} />;
      case 'support':
      case 'partners':
        return (
          <div className="pt-40 pb-32 min-h-screen bg-black flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4 uppercase tracking-tighter">Module Restricted</h1>
              <p className="text-slate-500">Please contact your administrator to access the {currentPage} interface.</p>
              <button onClick={() => setCurrentPage('home')} className="mt-8 silver-button">Return to Core</button>
            </div>
          </div>
        );
      default:
        return (
          <div className="bg-black">
            <Hero setPage={setCurrentPage} />
            <TrustLogos />
            <HomeProducts />
            <Features />
            <ProductBrowser setPage={setCurrentPage} />
            <Stats />
            <CaseStudies />
            <Consultation />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-slate-200 selection:bg-white selection:text-black relative overflow-x-hidden">
      <div className="bg-grid" />
      <div className="bg-blob blob-1" />
      <div className="bg-blob blob-2" />
      <div className="bg-blob blob-3" />

      <Navbar setPage={setCurrentPage} currentPage={currentPage} />
      <main className="transition-all duration-700 relative z-10">
        {renderPage()}
      </main>
      <Footer setPage={setCurrentPage} />
    </div>
  );
};

export default App;

// --- End of App.tsx ---