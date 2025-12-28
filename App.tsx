import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import SEO from './components/SEO';

// --- Scroll To Top Component (UX Fix) ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Instant scroll prevents "flash" of previous page content
    });
  }, [pathname]);
  return null;
};

// --- Lazy Load Pages ---
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Projects = lazy(() => import('./pages/Projects'));
const Videos = lazy(() => import('./pages/Videos'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));

// --- Case Studies ---
const TokenLaunch = lazy(() => import('./pages/cases/TokenLaunch'));
const MemeCoinSite = lazy(() => import('./pages/cases/MemeCoinSite'));
const ShopFast = lazy(() => import('./pages/cases/ShopFast'));
const AutoGitHub = lazy(() => import('./pages/cases/AutoGitHub'));
const GigaSolana = lazy(() => import('./pages/cases/GigaSolana'));

// --- Blog Posts Imports ---
const BestDeveloper = lazy(() => import('./pages/blog/BestDeveloper'));
const CryptoProject = lazy(() => import('./pages/blog/CryptoProject'));
const MemeCoinFeatures = lazy(() => import('./pages/blog/MemeCoinWebsiteFeatures'));
const CryptoCost = lazy(() => import('./pages/blog/CryptoCost'));
const StaticVsDynamic = lazy(() => import('./pages/blog/StaticVsDynamic'));
const WebsiteBuilderVsDeveloper = lazy(() => import('./pages/blog/WebsiteBuilderVsDeveloper'));
const CryptoMarketingGuide = lazy(() => import('./pages/blog/CryptoMarketingGuide'));
const SolanaMemeCoinGuide = lazy(() => import('./pages/blog/SolanaMemeCoinGuide'));
const CryptoSEO = lazy(() => import('./pages/blog/CryptoSEO'));
const PresaleGuide = lazy(() => import('./pages/blog/PresaleGuide'));

// --- Optimized Loader ---
const PageLoader = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-[#020617] transition-colors z-50">
    <div className="relative w-20 h-20" aria-label="Loading content...">
      {/* Outer Ring */}
      <div className="absolute top-0 left-0 w-full h-full border-4 border-purple-200 dark:border-white/10 rounded-full animate-pulse"></div>
      {/* Inner Spinner */}
      <div className="absolute top-0 left-0 w-full h-full border-4 border-purple-600 rounded-full border-t-transparent animate-spin"></div>
      {/* Logo Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
      </div>
    </div>
    <p className="mt-4 text-sm font-bold text-gray-400 uppercase tracking-widest animate-pulse">Loading</p>
  </div>
);

const App: React.FC = () => {
  return (
    <Layout>
      <ScrollToTop />
      {/* Default Global SEO (Can be overridden by pages) */}
      <SEO />
      
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* --- Main Pages --- */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          
          {/* --- Legal & Help --- */}
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          
          {/* --- Case Studies --- */}
          <Route path="/tokenlaunch" element={<TokenLaunch />} />
          <Route path="/memecoinsite" element={<MemeCoinSite />} />
          <Route path="/shopfast" element={<ShopFast />} />
          <Route path="/autogithub" element={<AutoGitHub />} />
          <Route path="/gigasolana" element={<GigaSolana />} />

          {/* --- BLOG ROUTES (Synchronized with src/data/blogPosts.ts) --- */}
          
          {/* 1. Crypto SEO Guide */}
          <Route path="/blog/crypto-seo-guide" element={<CryptoSEO />} />

          {/* 2. Presale Guide (Cleaned URL) */}
          <Route path="/blog/presale-guide" element={<PresaleGuide />} />

          {/* 3. Solana Meme Coin */}
          <Route path="/blog/solana-meme-coin-guide" element={<SolanaMemeCoinGuide />} />

          {/* 4. Crypto Marketing */}
          <Route path="/blog/crypto-marketing-guide" element={<CryptoMarketingGuide />} />

          {/* 5. Best Developer */}
          <Route path="/blog/best-website-developer" element={<BestDeveloper />} />

          {/* 6. Crypto Website Cost */}
          <Route path="/blog/crypto-website-cost" element={<CryptoCost />} />

          {/* 7. Static vs Dynamic */}
          <Route path="/blog/static-vs-dynamic-website" element={<StaticVsDynamic />} />

          {/* 8. Meme Coin Features */}
          <Route path="/blog/meme-coin-website-features" element={<MemeCoinFeatures />} />

          {/* 9. Crypto Project (Cleaned URL) */}
          <Route path="/blog/crypto-project" element={<CryptoProject />} />

          {/* 10. Builder vs Developer */}
          <Route path="/blog/website-builder-vs-developer" element={<WebsiteBuilderVsDeveloper />} />

          {/* --- 404 Catch-All --- */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;