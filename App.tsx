import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SEO from './components/SEO';

// Lazy Load Pages with extensions for native ESM resolution
const Home = lazy(() => import('./pages/Home.tsx'));
const About = lazy(() => import('./pages/About.tsx'));
const Services = lazy(() => import('./pages/Services.tsx'));
const Projects = lazy(() => import('./pages/Projects.tsx'));
const Videos = lazy(() => import('./pages/Videos.tsx'));
const Blog = lazy(() => import('./pages/Blog.tsx'));
const Contact = lazy(() => import('./pages/Contact.tsx'));
const ThankYou = lazy(() => import('./pages/ThankYou.tsx'));
const FAQ = lazy(() => import('./pages/FAQ.tsx'));
const Privacy = lazy(() => import('./pages/Privacy.tsx'));
const Terms = lazy(() => import('./pages/Terms.tsx'));
const NotFound = lazy(() => import('./pages/NotFound.tsx'));

// Case Studies
const TokenLaunch = lazy(() => import('./pages/cases/TokenLaunch.tsx'));
const MemeCoinSite = lazy(() => import('./pages/cases/MemeCoinSite.tsx'));
const ShopFast = lazy(() => import('./pages/cases/ShopFast.tsx'));
const AutoGitHub = lazy(() => import('./pages/cases/AutoGitHub.tsx'));
const GigaSolana = lazy(() => import('./pages/cases/GigaSolana.tsx'));

// Blog Posts
const BestDeveloper = lazy(() => import('./pages/blog/BestDeveloper.tsx'));
const CryptoProject = lazy(() => import('./pages/blog/CryptoProject.tsx'));
const MemeCoinFeatures = lazy(() => import('./pages/blog/MemeCoinFeatures.tsx'));
const CryptoCost = lazy(() => import('./pages/blog/CryptoCost.tsx'));
const StaticVsDynamic = lazy(() => import('./pages/blog/StaticVsDynamic.tsx'));
const WebsiteBuilderVsDeveloper = lazy(() => import('./pages/blog/WebsiteBuilderVsDeveloper.tsx'));

// Cosmic Loader Component
const PageLoader = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center">
    <div className="cosmic-spinner mb-4"></div>
    <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.3em] animate-pulse">Syncing Intelligence...</div>
  </div>
);

const App: React.FC = () => {
  return (
    <Layout>
      <SEO 
        title="Professional Developer" 
        description="High-performance Web3 and E-commerce architecture by Sagor Ahamed."
      />
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
          
          {/* Support & Legal */}
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          
          {/* Case Studies */}
          <Route path="/tokenlaunch" element={<TokenLaunch />} />
          <Route path="/memecoinsite" element={<MemeCoinSite />} />
          <Route path="/shopfast" element={<ShopFast />} />
          <Route path="/autogithub" element={<AutoGitHub />} />
          <Route path="/gigasolana" element={<GigaSolana />} />

          {/* Blog Posts */}
          <Route path="/best-website-developer" element={<BestDeveloper />} />
          <Route path="/crypto-project-website" element={<CryptoProject />} />
          <Route path="/meme-coin-website-features" element={<MemeCoinFeatures />} />
          <Route path="/crypto-website-cost" element={<CryptoCost />} />
          <Route path="/static-vs-dynamic-website" element={<StaticVsDynamic />} />
          <Route path="/website-builder-vs-developer" element={<WebsiteBuilderVsDeveloper />} />

          {/* 404 Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;