import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import AutoGitMockup from '../components/AutoGitMockup';
import SolNovaMockup from '../components/SolNovaMockup';
import QuackInuMockup from '../components/QuackInuMockup';
import GigaChadMockup from '../components/GigaChadMockup';
import ShopFastMockup from '../components/ShopFastMockup';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'commerce' | 'saas' | 'ai-web3'>('all');

  const projects = [
    {
      id: 'clickrunclaw',
      title: 'ClickRunClaw: 1-Click Cloud Engine',
      category: 'Flagship AI SaaS',
      metric: '99.98% Uptime',
      group: 'ai-web3',
      desc: 'Managed 24/7 cloud runtime for OpenClaw & RAG AI agents with instant webhook provisioning for WhatsApp, Telegram & Discord.',
      tech: ['Cloud Runtime', 'RAG Webhooks', 'Next.js', 'Docker'],
      link: '/services/ai-automation',
      img: '/projects/clickrunclaw.webp',
      liveUrl: 'https://clickrunclaw.com/',
    },
    {
      id: 'shopfast',
      title: 'ShopFast Headless Storefront',
      category: '1-Click E-Commerce',
      metric: '0.4s Load • +240% Sales',
      group: 'commerce',
      desc: 'Sub-second headless storefront with 1-click checkout (Stripe/bKash), server-side Meta CAPI, and automated courier tracking.',
      tech: ['Next.js 15', 'Stripe / bKash', '100/100 CWV'],
      link: '/shopfast',
      liveUrl: 'https://cryptowebbuild.com/shopfast',
    },
    {
      id: 'vanguardsaas',
      title: 'Vanguard Financial SaaS',
      category: 'Python / Django B2B',
      metric: '10M+ Rows • <50ms API',
      group: 'saas',
      desc: 'High-concurrency B2B analytics platform engineered with Python, Django REST, PostgreSQL, and React to query millions of rows.',
      tech: ['Python / Django', 'PostgreSQL', 'React & D3.js'],
      link: '/vanguardsaas',
      img: '/projects/vanguardsaas.webp',
      liveUrl: 'https://cryptowebbuild.com/vanguardsaas',
    },
    {
      id: 'auracommerce',
      title: 'Aura & Edel Direct Retail',
      category: 'F-Commerce & Retail',
      metric: '3.8x ROAS Lift',
      group: 'commerce',
      desc: 'Replaced "Inbox for Price" friction with an instant 1-click product funnel, automated Steadfast/Pathao dispatch, and pixel tracking.',
      tech: ['Next.js', 'Courier API', 'Meta CAPI'],
      link: '/auracommerce',
      img: '/projects/auracommerce.webp',
      liveUrl: 'https://cryptowebbuild.com/auracommerce',
    },
    {
      id: 'autogithub',
      title: 'AutoGit Edge Deployer',
      category: 'DevOps SaaS',
      metric: 'Zero-CLI Browser CI/CD',
      group: 'saas',
      desc: 'Client-side DevOps engine deploying production repositories directly from the browser via GitHub REST API and Cloudflare Edge.',
      tech: ['React', 'GitHub REST API', 'Cloudflare Edge'],
      link: '/autogithub',
      liveUrl: 'https://cryptowebbuild.com/autogithub',
    },
    {
      id: 'tokenlaunch',
      title: 'SolNova Presale Protocol',
      category: 'Web3 DeFi App',
      metric: '$4.2M+ Volume',
      group: 'ai-web3',
      desc: 'Real-time Solana presale and staking dashboard featuring sub-second RPC telemetry, Phantom/Solflare wallet sync, and on-chain verification.',
      tech: ['React', 'Solana Web3.js', 'RPC Telemetry'],
      link: '/tokenlaunch',
      liveUrl: 'https://cryptowebbuild.com/tokenlaunch',
    },
    {
      id: 'apexagency',
      title: 'Apex Enterprise Funnel',
      category: 'B2B Technical SEO',
      metric: '100/100 PageSpeed',
      group: 'commerce',
      desc: 'High-authority B2B corporate platform and programmatic SEO architecture that doubled qualified inbound enterprise leads.',
      tech: ['React', 'Schema.org JSON-LD', 'Conversion UX'],
      link: '/apexagency',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      liveUrl: 'https://cryptowebbuild.com/apexagency',
    },
    {
      id: 'nexusweb3',
      title: 'Nexus Staking Terminal',
      category: 'DeFi Analytics',
      metric: 'Multi-Chain EVM',
      group: 'ai-web3',
      desc: 'Institutional-grade DeFi staking and liquidity terminal with multi-wallet Web3 integration and live APY yield calculations.',
      tech: ['React', 'Ethers.js', 'Tailwind'],
      liveUrl: 'https://clickrunclaw.com',
      link: '/nexusweb3',
      img: '/projects/nexusweb3.webp',
    },
    {
      id: 'solananft',
      title: 'SolMint Collectibles Hub',
      category: 'Solana Marketplace',
      metric: '<0.6s Asset Load',
      group: 'ai-web3',
      desc: 'High-speed Solana NFT marketplace featuring optimistic UI state updates, instant wallet signing, and edge image optimization.',
      tech: ['Next.js', 'Solana Web3', 'Edge CDN'],
      link: '/solananft',
      img: '/projects/solananft.webp',
      liveUrl: 'https://cryptowebbuild.com/solananft',
    },
    {
      id: 'newsphotocard',
      title: 'News Photo Card Studio',
      category: 'Client-Side SaaS',
      metric: '100% Browser Canvas',
      group: 'saas',
      desc: 'Zero-server media card generator built with HTML5 Canvas API, enabling publishers to export crisp social cards in seconds.',
      tech: ['React', 'Canvas API', 'TypeScript'],
      link: '/newsphotocard',
      liveUrl: 'https://cryptowebbuild.com/newsphotocard',
      img: '/projects/project-newsphotocard.jpg',
    },
    {
      id: 'gigasolana',
      title: '$GIGA Solana Ecosystem',
      category: 'Web3 Community Hub',
      metric: 'Interactive Moon Math',
      group: 'ai-web3',
      desc: 'High-conversion token portal featuring an interactive market-cap simulator and live DEX liquidity chart integration.',
      tech: ['React', 'Token Simulator', 'DEX API'],
      link: '/gigasolana',
      liveUrl: 'https://cryptowebbuild.com/gigasolana',
    },
    {
      id: 'memecoinsite',
      title: 'BNB Quack Inu Portal',
      category: 'Gamified Web3 UI',
      metric: 'High-Retention UX',
      group: 'ai-web3',
      desc: 'Interactive BNB Chain token hub engineered with hardware-accelerated micro-interactions and instant contract verification.',
      tech: ['React', 'BNB Chain', 'Interactive UI'],
      link: '/memecoinsite',
      liveUrl: 'https://cryptowebbuild.com/memecoinsite',
    },
  ];

  const filteredProjects =
    activeFilter === 'all' ? projects : projects.filter((p) => p.group === activeFilter);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Portfolio Case Studies | CryptoWebBuild',
    url: 'https://cryptowebbuild.com/projects',
    description: 'Selected projects and case studies in E-Commerce, Python/Django SaaS, AI Automation, and Web3 development.',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: projects.map((t, o) => ({
        '@type': 'CreativeWork',
        position: o + 1,
        name: t.title,
        description: t.desc,
        url: `https://cryptowebbuild.com${t.link}`,
        image: t.img ? `https://cryptowebbuild.com${t.img}` : 'https://cryptowebbuild.com/hero-avatar.webp',
      })),
    },
  };

  return (
    <div className="container mx-auto px-6 min-h-screen">
      <SEO
        title="Case Studies & Portfolio | CryptoWebBuild"
        description="Explore our portfolio of high-converting E-Commerce stores, Python/Django SaaS platforms, Technical SEO wins, and autonomous AI infrastructure."
        keywords={[
          'Full-Stack Portfolio',
          'E-commerce Case Studies',
          'Python Django SaaS Examples',
          'React Next.js Projects',
          'Web3 & AI Portfolio',
        ]}
        canonical="/projects"
        schema={schema}
      />

      <div className="text-center mb-14">
        <div className="inline-block px-4 py-1.5 mb-5 rounded-full bg-white dark:bg-white/5 border border-purple-500/30 text-purple-600 dark:text-purple-400 text-xs font-bold tracking-wider uppercase shadow-sm">
          Shipped Production Systems
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-5">
          Production Projects &amp;{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 dark:from-purple-400 dark:to-cyan-400">
            Case Studies
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-8">
          Inspect live interactive previews and architectural breakdowns across{' '}
          <Link to="/services" className="text-cyan-600 dark:text-cyan-400 hover:underline font-bold">
            1-Click E-Commerce
          </Link>
          ,{' '}
          <Link to="/services" className="text-purple-600 dark:text-purple-400 hover:underline font-bold">
            Python/Django SaaS
          </Link>
          , and Autonomous AI &amp; Web3 Systems.
        </p>

        {/* Clean Filter Tabs */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white dark:bg-[#0B1120] border border-gray-200 dark:border-white/10 shadow-sm">
          {[
            { id: 'all' as const, label: 'All Works' },
            { id: 'commerce' as const, label: 'E-Commerce & SEO' },
            { id: 'saas' as const, label: 'Python/Django & SaaS' },
            { id: 'ai-web3' as const, label: 'AI Agents & Web3' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeFilter === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((t) => (
          <article
            key={t.id}
            className="group flex flex-col rounded-3xl overflow-hidden glass-panel border border-gray-200 dark:border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-lg"
          >
            {/* Top Interactive Visual Preview */}
            <div className="relative h-60 w-full overflow-hidden bg-slate-900 border-b border-gray-200 dark:border-white/10">
              {t.id === 'autogithub' ? (
                <AutoGitMockup className="w-full h-full object-cover" />
              ) : t.id === 'tokenlaunch' ? (
                <SolNovaMockup className="w-full h-full object-cover" />
              ) : t.id === 'memecoinsite' ? (
                <QuackInuMockup className="w-full h-full object-cover" />
              ) : t.id === 'gigasolana' ? (
                <GigaChadMockup className="w-full h-full object-cover" />
              ) : t.id === 'shopfast' ? (
                <ShopFastMockup className="w-full h-full object-cover" />
              ) : (
                <img
                  src={t.img || '/hero-avatar.webp'}
                  alt={`Preview of ${t.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              )}
              <div className="absolute top-3 left-3 flex items-center gap-2 pointer-events-none">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-950/85 text-white border border-white/15">
                  {t.category}
                </span>
              </div>
              <div className="absolute top-3 right-3 pointer-events-none">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/95 text-white shadow-sm">
                  {t.metric}
                </span>
              </div>
            </div>

            {/* Bottom Structured Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {t.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                  {t.desc}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {t.tech.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] font-bold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 px-2.5 py-1 rounded-lg"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-white/10">
                  <Link
                    to={t.link}
                    className="flex-1 inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-colors"
                  >
                    Case Study Breakdown
                  </Link>
                  {t.liveUrl && (
                    <a
                      href={t.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 font-bold text-xs transition-colors"
                    >
                      Live Site <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 text-center">
        <div className="inline-block p-8 md:p-12 rounded-3xl glass-panel border border-gray-200 dark:border-white/10 shadow-xl max-w-2xl mx-auto">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Ready to engineer your platform?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 font-medium">
            2 build slots open this month. 50% upfront / 50% upon live verification.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white neon-button rounded-xl shadow-lg"
          >
            Claim Your 48-Hour Prototype
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;