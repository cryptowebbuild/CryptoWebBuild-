import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import SEO from './components/SEO';

// --- Scroll To Top Component (UX Fix) ---
// এটি নিশ্চিত করে যে রাউট চেঞ্জ হলে পেজটি সবসময় টপ থেকে শুরু হবে
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Lazy Load Pages (Code Splitting) ---
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

// --- Blog Posts (All 7 Articles) ---
const BestDeveloper = lazy(() => import('./pages/blog/BestDeveloper'));
const CryptoProject = lazy(() => import('./pages/blog/CryptoProject'));
const MemeCoinFeatures = lazy(() => import('./pages/blog/MemeCoinFeatures'));
const CryptoCost = lazy(() => import('./pages/blog/CryptoCost'));
const StaticVsDynamic = lazy(() => import('./pages/blog/StaticVsDynamic'));
const WebsiteBuilderVsDeveloper = lazy(() => import('./pages/blog/WebsiteBuilderVsDeveloper'));
const CryptoMarketingGuide = lazy(() => import('./pages/blog/CryptoMarketingGuide'));
const SolanaMemeCoinGuide = lazy(() => import('./pages/blog/SolanaMemeCoinGuide'));

// --- Optimized Loader ---
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#020617] transition-colors">
    <div className="relative w-16 h-16" aria-label="Loading...">
      <div className="absolute top-0 left-0 w-full h-full border-4 border-purple-500/20 rounded-full"></div>
      <div className="absolute top-0 left-0 w-full h-full border-4 border-cyan-500 rounded-full border-t-transparent animate-spin"></div>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Layout>
      {/* UX Utility */}
      <ScrollToTop />
      
      {/* Global Default SEO */}
      <SEO />
      
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          
          {/* Legal & Help */}
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          
          {/* Case Studies */}
          <Route path="/tokenlaunch" element={<TokenLaunch />} />
          <Route path="/memecoinsite" element={<MemeCoinSite />} />
          <Route path="/shopfast" element={<ShopFast />} />
          <Route path="/autogithub" element={<AutoGitHub />} />
          <Route path="/gigasolana" element={<GigaSolana />} />

          {/* Blog Posts Routes */}
          <Route path="/best-website-developer" element={<BestDeveloper />} />
          <Route path="/crypto-project-website" element={<CryptoProject />} />
          <Route path="/meme-coin-website-features" element={<MemeCoinFeatures />} />
          <Route path="/crypto-website-cost" element={<CryptoCost />} />
          <Route path="/static-vs-dynamic-website" element={<StaticVsDynamic />} />
          <Route path="/website-builder-vs-developer" element={<WebsiteBuilderVsDeveloper />} />
          <Route path="/crypto-marketing-guide" element={<CryptoMarketingGuide />} />
          <Route path="/solana-meme-coin-guide" element={<SolanaMemeCoinGuide />} />

          {/* 404 Catch-All */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;