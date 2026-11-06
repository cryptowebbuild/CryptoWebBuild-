import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
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

// --- Chunk Load Auto-Recovery Wrapper (Fixes White Screen on New Deployments) ---
function lazyWithRetry<T extends React.ComponentType<any>>(
  factory: () => Promise<{ default: T }>
): React.LazyExoticComponent<T> {
  return lazy(async () => {
    try {
      return await factory();
    } catch (error: any) {
      const isChunkError =
        error?.message?.includes('Failed to fetch dynamically imported module') ||
        error?.message?.includes('Importing a module script failed') ||
        error?.name === 'ChunkLoadError';

      const alreadyRefreshed = sessionStorage.getItem('chunk_retry_refreshed');

      if (isChunkError && !alreadyRefreshed) {
        sessionStorage.setItem('chunk_retry_refreshed', 'true');
        window.location.reload();
        return new Promise<{ default: T }>(() => {}); // Hold until browser reload
      }

      sessionStorage.removeItem('chunk_retry_refreshed');
      throw error;
    }
  });
}

// --- Lazy Load Pages ---
const Home = lazyWithRetry(() => import('./pages/Home'));
const About = lazyWithRetry(() => import('./pages/About'));
const Services = lazyWithRetry(() => import('./pages/Services'));
const Projects = lazyWithRetry(() => import('./pages/Projects'));
const Blog = lazyWithRetry(() => import('./pages/Blog'));
const Contact = lazyWithRetry(() => import('./pages/Contact'));
const ThankYou = lazyWithRetry(() => import('./pages/ThankYou'));
const FAQ = lazyWithRetry(() => import('./pages/FAQ'));
const Privacy = lazyWithRetry(() => import('./pages/Privacy'));
const Terms = lazyWithRetry(() => import('./pages/Terms'));
const NotFound = lazyWithRetry(() => import('./pages/NotFound'));

// --- Service Landing Pages ---
const AIAutomation = lazyWithRetry(() => import('./pages/services/AIAutomation'));
const Web3Development = lazyWithRetry(() => import('./pages/services/Web3Development'));
const CryptoGrowth = lazyWithRetry(() => import('./pages/services/CryptoGrowth'));
const EcommerceDevelopmentBD = lazyWithRetry(() => import('./pages/services/EcommerceDevelopmentBD'));
const FCommerceBangladesh = lazyWithRetry(() => import('./pages/FCommerceBangladesh'));

// --- Case Studies ---
const TokenLaunch = lazyWithRetry(() => import('./pages/cases/TokenLaunch'));
const MemeCoinSite = lazyWithRetry(() => import('./pages/cases/MemeCoinSite'));
const ShopFast = lazyWithRetry(() => import('./pages/cases/ShopFast'));
const AutoGitHub = lazyWithRetry(() => import('./pages/cases/AutoGitHub'));
const GigaSolana = lazyWithRetry(() => import('./pages/cases/GigaSolana'));
const NewsPhotoCard = lazyWithRetry(() => import('./pages/cases/NewsPhotoCard'));
const NexusWeb3 = lazyWithRetry(() => import('./pages/cases/NexusWeb3'));
const AuraCommerce = lazyWithRetry(() => import('./pages/cases/AuraCommerce'));
const ApexAgency = lazyWithRetry(() => import('./pages/cases/ApexAgency'));
const VanguardSaaS = lazyWithRetry(() => import('./pages/cases/VanguardSaaS'));
const SolanaNFT = lazyWithRetry(() => import('./pages/cases/SolanaNFT'));
const ClickRunClawCase = lazyWithRetry(() => import('./pages/cases/ClickRunClawCase'));

// --- Blog Posts Imports ---
const WoocommerceToHeadlessNextjsMigrationGuide = lazyWithRetry(() => import('./pages/blog/WoocommerceToHeadlessNextjsMigrationGuide'));
const SteadfastCourierApiWebhookIntegrationNextjs = lazyWithRetry(() => import('./pages/blog/SteadfastCourierApiWebhookIntegrationNextjs'));
const BkashTokenizedCheckoutNextjsApiIntegration = lazyWithRetry(() => import('./pages/blog/BkashTokenizedCheckoutNextjsApiIntegration'));
const DjangoCeleryRedisEcommerceOrderPipeline = lazyWithRetry(() => import('./pages/blog/DjangoCeleryRedisEcommerceOrderPipeline'));
const BestDeveloper = lazyWithRetry(() => import('./pages/blog/BestDeveloper'));
const CryptoProject = lazyWithRetry(() => import('./pages/blog/CryptoProject'));
const MemeCoinFeatures = lazyWithRetry(() => import('./pages/blog/MemeCoinWebsiteFeatures'));
const CryptoCost = lazyWithRetry(() => import('./pages/blog/CryptoCost'));
const StaticVsDynamic = lazyWithRetry(() => import('./pages/blog/StaticVsDynamic'));
const WebsiteBuilderVsDeveloper = lazyWithRetry(() => import('./pages/blog/WebsiteBuilderVsDeveloper'));
const CryptoMarketingGuide = lazyWithRetry(() => import('./pages/blog/CryptoMarketingGuide'));
const SolanaMemeCoinGuide = lazyWithRetry(() => import('./pages/blog/SolanaMemeCoinGuide'));
const CryptoSEO = lazyWithRetry(() => import('./pages/blog/CryptoSEO'));
const PresaleGuide = lazyWithRetry(() => import('./pages/blog/PresaleGuide'));
const GamingProxyVsCryptoNodes = lazyWithRetry(() => import('./pages/blog/GamingProxyVsCryptoNodes'));
const HiddenCostSlowWebsites = lazyWithRetry(() => import('./pages/blog/HiddenCostSlowWebsites'));
const MemeCoinWebsiteUltimateGuide = lazyWithRetry(() => import('./pages/blog/MemeCoinWebsiteUltimateGuide'));
const LocalBusinessWebsiteSEOChecklist = lazyWithRetry(() => import('./pages/blog/local-business-website-seo-checklist'));
const RoofingWebsiteMistakesCostingLeads = lazyWithRetry(() => import('./pages/blog/roofing-website-mistakes-costing-leads'));
const OpenClawAIWorkflowAutomation = lazyWithRetry(() => import('./pages/blog/OpenClawAIWorkflowAutomation'));
const AISEO2026 = lazyWithRetry(() => import('./pages/blog/AISEO2026'));
const AGIAutonomousAIAgents = lazyWithRetry(() => import('./pages/blog/AGIAutonomousAIAgents'));
const DecentralizedAIStack = lazyWithRetry(() => import('./pages/blog/DecentralizedAIStack'));
const WhyWeb3ProjectsReplaceHumanModsWithRAGAI = lazyWithRetry(() => import('./pages/blog/WhyWeb3ProjectsReplaceHumanModsWithRAGAI'));
const WhyCryptoProjectsAdoptRealTimeAIEngines = lazyWithRetry(() => import('./pages/blog/WhyCryptoProjectsAdoptRealTimeAIEngines'));
const WhySubSecondWebsitesCrushWordPress2026 = lazyWithRetry(() => import('./pages/blog/WhySubSecondWebsitesCrushWordPress2026'));
const HowToAutomateEcommerceWhatsAppAIAgents = lazyWithRetry(() => import('./pages/blog/HowToAutomateEcommerceWhatsAppAIAgents'));
const BangladeshFCommerceToWebsiteMigrationGuide2026 = lazyWithRetry(() => import('./pages/blog/BangladeshFCommerceToWebsiteMigrationGuide2026'));
const SubSecondSalesPsychology2026 = lazyWithRetry(() => import('./pages/blog/SubSecondSalesPsychology2026'));
const NextJsDjangoArchitecture2026 = lazyWithRetry(() => import('./pages/blog/NextJsDjangoArchitecture2026'));

// --- Optimized Loader ---
const PageLoader = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAFA] dark:bg-[#090A0F] z-50">
    <div className="relative w-12 h-12" aria-label="Loading content…">
      <div className="absolute top-0 left-0 w-full h-full border-2 border-indigo-500/20 rounded-full"></div>
      <div className="absolute top-0 left-0 w-full h-full border-2 border-indigo-500 rounded-full border-t-transparent animate-spin"></div>
    </div>
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
          {/* --- Service Landing Pages --- */}
          <Route path="/services/ai-automation" element={<AIAutomation />} />
          <Route path="/services/web3-development" element={<Web3Development />} />
          <Route path="/services/crypto-growth" element={<CryptoGrowth />} />
          <Route path="/services/ecommerce-development-bangladesh" element={<EcommerceDevelopmentBD />} />
          <Route path="/fcommerce" element={<FCommerceBangladesh />} />
          <Route path="/bangladesh" element={<FCommerceBangladesh />} />

          <Route path="/videos" element={<Navigate to="/projects" replace />} />
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
          <Route path="/newsphotocard" element={<NewsPhotoCard />} />
          <Route path="/nexusweb3" element={<NexusWeb3 />} />
          <Route path="/auracommerce" element={<AuraCommerce />} />
          <Route path="/apexagency" element={<ApexAgency />} />
          <Route path="/vanguardsaas" element={<VanguardSaaS />} />
          <Route path="/solananft" element={<SolanaNFT />} />
          <Route path="/clickrunclaw" element={<ClickRunClawCase />} />

          {/* --- BLOG ROUTES (Synchronized with src/data/blogPosts.ts) --- */}
          <Route path="/blog/crypto-seo-guide" element={<CryptoSEO />} />
          <Route path="/blog/presale-guide" element={<PresaleGuide />} />
          <Route path="/blog/solana-meme-coin-guide" element={<SolanaMemeCoinGuide />} />
          <Route path="/blog/crypto-marketing-guide" element={<CryptoMarketingGuide />} />
          <Route path="/blog/best-website-developer" element={<BestDeveloper />} />
          <Route path="/blog/crypto-website-cost" element={<CryptoCost />} />
          <Route path="/blog/static-vs-dynamic-website" element={<StaticVsDynamic />} />
          <Route path="/blog/meme-coin-website-features" element={<MemeCoinFeatures />} />
          <Route path="/blog/crypto-project" element={<CryptoProject />} />
          <Route path="/blog/website-builder-vs-developer" element={<WebsiteBuilderVsDeveloper />} />
          <Route path="/blog/gaming-proxy-vs-crypto-nodes" element={<GamingProxyVsCryptoNodes />} />
          <Route path="/blog/hidden-cost-of-slow-websites" element={<HiddenCostSlowWebsites />} />
          <Route path="/blog/meme-coin-website-ultimate-guide" element={<MemeCoinWebsiteUltimateGuide />} />
          <Route path="/blog/local-business-website-seo-checklist" element={<LocalBusinessWebsiteSEOChecklist />} />
          <Route path="/blog/roofing-website-mistakes-costing-leads" element={<RoofingWebsiteMistakesCostingLeads />} />
          <Route path="/blog/openclaw-ai-workflow-automation" element={<OpenClawAIWorkflowAutomation />} />
          <Route path="/blog/ai-seo-generative-engine-optimization-2026" element={<AISEO2026 />} />
          <Route path="/blog/agi-autonomous-ai-agents-business-future-2026" element={<AGIAutonomousAIAgents />} />
          <Route path="/blog/decentralized-ai-stack-web3-infrastructure-2026" element={<DecentralizedAIStack />} />
          <Route path="/blog/why-web3-projects-replace-human-mods-with-rag-ai" element={<WhyWeb3ProjectsReplaceHumanModsWithRAGAI />} />
          <Route path="/blog/why-crypto-projects-adopt-real-time-ai-engines" element={<WhyCryptoProjectsAdoptRealTimeAIEngines />} />
          <Route path="/blog/why-sub-second-websites-crush-wordpress-ecommerce-2026" element={<WhySubSecondWebsitesCrushWordPress2026 />} />
          <Route path="/blog/how-to-automate-ecommerce-orders-whatsapp-ai-agents" element={<HowToAutomateEcommerceWhatsAppAIAgents />} />
          <Route path="/blog/bangladesh-fcommerce-to-website-migration-guide-2026" element={<BangladeshFCommerceToWebsiteMigrationGuide2026 />} />
          <Route path="/blog/sub-second-sales-psychology-architecture-2026" element={<SubSecondSalesPsychology2026 />} />
          <Route path="/blog/nextjs-django-fullstack-architecture-2026" element={<NextJsDjangoArchitecture2026 />} />

          <Route path="/blog/django-celery-redis-ecommerce-order-pipeline" element={<DjangoCeleryRedisEcommerceOrderPipeline />} />
          <Route path="/blog/bkash-tokenized-checkout-nextjs-api-integration" element={<BkashTokenizedCheckoutNextjsApiIntegration />} />
          <Route path="/blog/steadfast-courier-api-webhook-integration-nextjs" element={<SteadfastCourierApiWebhookIntegrationNextjs />} />
          <Route path="/blog/woocommerce-to-headless-nextjs-migration-guide" element={<WoocommerceToHeadlessNextjsMigrationGuide />} />
          {/* --- 404 Catch-All --- */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
