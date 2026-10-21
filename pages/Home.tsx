import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  Bot,
  Database,
  Code2,
  Search,
  ShieldCheck,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  Terminal,
  ExternalLink,
} from 'lucide-react';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';
import LeakedRevenueCalculator from '../components/LeakedRevenueCalculator';
import ShopFastMockup from '../components/ShopFastMockup';
import AutoGitMockup from '../components/AutoGitMockup';
import SolNovaMockup from '../components/SolNovaMockup';
import EdelMockup from '../components/EdelMockup';
import ArchitectureComparison from '../components/ArchitectureComparison';
import BeforeAfterProof from '../components/BeforeAfterProof';
import ProjectScopeBuilder from '../components/ProjectScopeBuilder';

const Home: React.FC = () => {
  const [activeStudioTab, setActiveStudioTab] = useState<'stack' | 'speed' | 'ai'>('stack');

  const featuredCases = [
    {
      id: 'shopfast',
      title: 'ShopFast Headless Store',
      category: 'E-Commerce • 0.6s Load',
      metric: '+38% Checkout Lift',
      desc: 'Replaced a 4.8s WooCommerce store with a static-edge React storefront and 1-click Stripe/bKash checkout.',
      tech: ['Next.js', '1-Click Cart', '100/100 SEO'],
      link: '/shopfast',
      liveUrl: 'https://cryptowebbuild.com/shopfast',
      mockup: 'shopfast',
    },
    {
      id: 'clickrunclaw',
      title: 'ClickRunClaw AI Cloud',
      category: 'Flagship AI SaaS',
      metric: '7,000+ Active Users',
      desc: '1-click cloud engine deploying 24/7 RAG AI agents to Website, WhatsApp, Telegram, and Discord webhooks.',
      tech: ['Python', 'Vector RAG', 'Next.js'],
      link: '/projects',
      liveUrl: 'https://clickrunclaw.com/',
      img: '/projects/clickrunclaw.webp',
    },
    {
      id: 'vanguardsaas',
      title: 'Vanguard Analytics SaaS',
      category: 'Python/Django B2B SaaS',
      metric: '14s → 1.1s Queries',
      desc: 'Institutional financial analytics dashboard rendering millions of rows with virtualized tables and zero UI freeze.',
      tech: ['Python / Django', 'PostgreSQL', 'React D3'],
      link: '/vanguardsaas',
      liveUrl: 'https://cryptowebbuild.com/vanguardsaas',
      img: '/projects/vanguardsaas.webp',
    },
    {
      id: 'auracommerce',
      title: 'Edel Bangladesh Luxury Storefront',
      category: '1-Click Luxury E-Commerce',
      metric: '0.4s Load • +240% Sales',
      desc: 'Eliminated "Inbox for Price" drop-offs with 1-click bKash/COD checkout, Steadfast courier sync, and sub-0.5s speed.',
      tech: ['Next.js', '1-Click bKash/COD', 'Steadfast API'],
      link: '/auracommerce',
      liveUrl: 'https://cryptowebbuild.github.io/edel-bangladesh/',
      mockup: 'edel',
    },
    {
      id: 'tokenlaunch',
      title: 'SolNova Protocol',
      category: 'Solana DeFi & Presale',
      metric: '100k+ Peak Traffic',
      desc: 'Real-time Solana presale and staking dashboard with multi-wallet bridge and zero-latency RPC telemetry.',
      tech: ['React', 'Solana Web3.js', 'Cloudflare'],
      link: '/tokenlaunch',
      liveUrl: 'https://cryptowebbuild.com/tokenlaunch',
      mockup: 'solnova',
    },
    {
      id: 'autogithub',
      title: 'AutoGit Deployer',
      category: 'Browser DevOps Engine',
      metric: 'Zero-CLI Deploys',
      desc: 'Client-side DevOps SaaS that builds and deploys static repositories directly from the browser via GitHub API.',
      tech: ['TypeScript', 'GitHub API', 'Edge CI/CD'],
      link: '/autogithub',
      liveUrl: 'https://cryptowebbuild.com/autogithub',
      mockup: 'autogit',
    },
  ];

  return (
    <div className="space-y-24 md:space-y-36 overflow-hidden">
      <SEO
        title="CryptoWebBuild | Full-Stack Web, SEO & AI Engineering Studio"
        description="Direct Principal Engineering by Sagor Ahamed. We build sub-second Python/Django & Next.js websites, 100/100 Technical SEO systems, and 24/7 RAG AI agents."
        keywords={[
          'Full-Stack Web Developer',
          'Python Django Developer',
          'Next.js E-commerce Developer',
          'Technical SEO Web Design',
          'Custom AI Agents RAG',
          'CryptoWebBuild',
          'Sagor Ahamed',
        ]}
        canonical="/"
        schemaType="Organization"
      />

      {/* 1. HERO SECTION — AUTHENTIC ENGINEERING AUTHORITY */}
      <section className="relative px-6 pt-8 md:pt-14 pb-12">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                Direct Principal Engineer • 2 Build Slots Open
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-[64px] font-black tracking-tight leading-[1.06] text-slate-900 dark:text-white">
              Sub-Second Websites,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 dark:from-purple-400 dark:to-cyan-400">
                100/100 SEO &amp; AI Systems
              </span>{' '}
              Engineered in Code.
            </h1>

            <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              No bloated page builders or middlemen. I architect custom{' '}
              <strong className="text-slate-900 dark:text-white">Python/Django &amp; Next.js platforms</strong>,{' '}
              <strong className="text-slate-900 dark:text-white">1-click E-Commerce checkouts</strong>, and{' '}
              <strong className="text-slate-900 dark:text-white">24/7 RAG AI agents</strong> that load in &lt;0.8s and convert traffic into revenue.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto pt-1">
              <Link
                to="/contact"
                className="group flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto neon-button text-white font-bold rounded-xl text-base"
              >
                <Zap className="w-5 h-5" />
                <span>Claim 48-Hour Prototype</span>
              </Link>
              <a
                href="https://wa.me/8801618138820?text=Hi%20Sagor%2C%20I%20visited%20CryptoWebBuild.com%20and%20want%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-7 py-4 w-full sm:w-auto bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold rounded-xl hover:border-purple-500/40 transition-colors text-base"
              >
                <MessageSquare className="w-5 h-5 text-emerald-500" />
                <span>WhatsApp: 01618-138820</span>
              </a>
            </div>

            {/* Concrete Verification Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200 dark:border-white/10 w-full">
              {[
                { val: '< 0.8s', label: 'Avg Page Load' },
                { val: '100/100', label: 'Core Web Vitals' },
                { val: '100+', label: 'Systems Shipped' },
                { val: '50 / 50', label: 'Pay After Live Test' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-3 rounded-xl bg-white dark:bg-[#0f172a] border border-slate-200/80 dark:border-white/5 text-center lg:text-left"
                >
                  <div className="font-display font-black text-xl sm:text-2xl text-slate-900 dark:text-white">
                    {item.val}
                  </div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (5 cols) — Interactive Production Telemetry Console */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-3xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden">
              {/* Console Top Bar */}
              <div className="px-4 py-3 bg-slate-100 dark:bg-[#020617] border-b border-slate-200 dark:border-white/10 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center gap-1 bg-white dark:bg-white/5 p-1 rounded-xl border border-slate-200 dark:border-white/10">
                  {[
                    { id: 'stack' as const, label: 'Stack & Code' },
                    { id: 'speed' as const, label: '100/100 SEO' },
                    { id: 'ai' as const, label: 'RAG AI Live' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveStudioTab(tab.id)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                        activeStudioTab === tab.id
                          ? 'bg-purple-600 text-white'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Console Body */}
              <div className="p-5 sm:p-6 space-y-4">
                {activeStudioTab === 'stack' && (
                  <>
                    <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white">
                        <Terminal className="w-4 h-4 text-purple-500" />
                        production_architecture.py
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">
                        VERIFIED BUILD
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs leading-relaxed overflow-x-auto border border-slate-800">
                      <div className="text-slate-400"># Direct Full-Stack + AI Architecture</div>
                      <div>
                        <span className="text-purple-400">stack</span> = &#123;
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">&quot;frontend&quot;</span>: <span className="text-emerald-300">&quot;Next.js 15 / React 18 (Edge)&quot;</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">&quot;backend&quot;</span>: <span className="text-emerald-300">&quot;Python / Django REST + PostgreSQL&quot;</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">&quot;checkout&quot;</span>: <span className="text-emerald-300">&quot;Stripe + bKash + Steadfast API&quot;</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-300">&quot;ai_engine&quot;</span>: <span className="text-emerald-300">&quot;OpenClaw Vector RAG (&lt;0.7s)&quot;</span>
                      </div>
                      <div>&#125;</div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/5">
                        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">WordPress / Wix</div>
                        <div className="font-display font-bold text-sm text-red-600 dark:text-red-400 mt-0.5">
                          4.8s Load • 52/100 Score
                        </div>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                        <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                          CryptoWebBuild Custom
                        </div>
                        <div className="font-display font-bold text-sm text-emerald-700 dark:text-emerald-400 mt-0.5">
                          0.6s Load • 100/100 Score
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {activeStudioTab === 'speed' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold uppercase text-purple-600 dark:text-cyan-400">
                          Google Lighthouse Audit
                        </div>
                        <div className="font-display font-bold text-base text-slate-900 dark:text-white">
                          Core Web Vitals &amp; Technical SEO
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                        100 / 100
                      </span>
                    </div>

                    <div className="grid grid-cols-4 gap-2.5">
                      {[
                        { label: 'Speed', score: '100' },
                        { label: 'A11y', score: '100' },
                        { label: 'Best Prac.', score: '100' },
                        { label: 'SEO', score: '100' },
                      ].map((m) => (
                        <div
                          key={m.label}
                          className="p-3 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center"
                        >
                          <div className="w-10 h-10 rounded-full border-4 border-emerald-500 flex items-center justify-center mx-auto font-display font-black text-slate-900 dark:text-white text-sm">
                            {m.score}
                          </div>
                          <div className="text-[11px] font-bold text-slate-600 dark:text-slate-400 mt-1.5">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs space-y-2">
                      <div className="flex justify-between font-bold text-slate-900 dark:text-white">
                        <span>Largest Contentful Paint (LCP)</span>
                        <span className="text-emerald-600 dark:text-emerald-400">0.5s</span>
                      </div>
                      <div className="flex justify-between font-bold text-slate-900 dark:text-white">
                        <span>Cumulative Layout Shift (CLS)</span>
                        <span className="text-emerald-600 dark:text-emerald-400">0.00</span>
                      </div>
                      <div className="flex justify-between font-bold text-slate-900 dark:text-white">
                        <span>JSON-LD Schema &amp; AI Search (GEO)</span>
                        <span className="text-emerald-600 dark:text-emerald-400">Active</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeStudioTab === 'ai' && (
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                      <div className="flex items-center gap-2.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-bold text-slate-900 dark:text-white">
                          RAG AI Guardian • Web, WhatsApp &amp; Telegram
                        </span>
                      </div>
                      <span className="text-xs font-mono font-bold text-purple-600 dark:text-cyan-400">0.6s reply</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-3 text-xs">
                      <div className="p-3 rounded-xl bg-white dark:bg-[#020617] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                        <strong className="text-slate-900 dark:text-white block mb-0.5">Buyer (WhatsApp / Web):</strong>
                        &ldquo;Is the Pro plan or product available for instant delivery in Dhaka?&rdquo;
                      </div>
                      <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-slate-800 dark:text-slate-200">
                        <strong className="text-purple-700 dark:text-purple-300 block mb-0.5">
                          CryptoWebBuild RAG Agent:
                        </strong>
                        &ldquo;Yes, in stock! Click here for 1-click checkout via bKash/Card. Steadfast tracking is sent automatically.&rdquo;
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 50/50 RISK-REVERSAL GUARANTEE BAR */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto">
          <div className="p-6 sm:p-8 rounded-3xl glass-panel border-l-4 border-l-purple-600 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <div className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-cyan-400">
                50 / 50 Risk-Reversal Engineering Contract
              </div>
              <p className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white">
                Pay 50% upfront. Pay the final 50% <span className="underline decoration-purple-500">ONLY</span> after you verify your live Website or AI Agent on staging.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 px-6 py-3.5 rounded-xl neon-button text-white font-bold text-sm flex items-center gap-2"
            >
              <span>Lock Your Build Slot</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. THREE CORE ENGINEERING PILLARS (CONCISE, SCANNABLE, ZERO FLUFF) */}
      <section className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-purple-50 dark:bg-white/5 border border-purple-200 dark:border-purple-500/30 text-purple-700 dark:text-purple-400 text-xs font-bold tracking-wider uppercase">
            Core Engineering Pillars
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            One Principal Studio.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 dark:from-purple-400 dark:to-cyan-400">
              Three Revenue Engines.
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Every system is hand-coded for sub-second speed, search rankings, and automated conversion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Code2,
              badge: '01 • FULL-STACK & E-COMMERCE',
              title: 'Python/Django, Next.js & 1-Click Stores',
              desc: 'Custom full-stack web apps, SaaS dashboards, and 1-click E-Commerce storefronts that replace slow WordPress sites and manual "Inbox for Price" selling.',
              bullets: [
                'Python, Django REST & PostgreSQL',
                'React 18 & Next.js Edge Storefronts',
                'Stripe, bKash, Nagad & Courier APIs',
              ],
              link: '/services/web3-development',
              cta: 'Full-Stack Specs',
            },
            {
              icon: Search,
              badge: '02 • TECHNICAL SEO & SPEED',
              title: '100/100 PageSpeed & Search Domination',
              desc: 'Sub-0.8s load times, Core Web Vitals optimization, and programmatic Schema.org JSON-LD engineered to rank #1 on Google and AI Search (ChatGPT/Perplexity).',
              bullets: [
                'Guaranteed 95–100 PageSpeed Score',
                'Local & Global Technical SEO Schema',
                'Server-Side Meta CAPI & GA4 Tracking',
              ],
              link: '/services/crypto-growth',
              cta: 'SEO Architecture',
            },
            {
              icon: Bot,
              badge: '03 • RAG AI & AUTOMATION',
              title: '24/7 AI Sales & Support Guardians',
              desc: 'Custom Vector RAG chatbots and OpenClaw workflows trained on your exact catalog, SOPs, or whitepaper—deployed across Web, WhatsApp, Telegram & Discord.',
              bullets: [
                'Zero-Hallucination Vector RAG',
                'WhatsApp, Messenger, Telegram & Web',
                'Automated Lead & Order Workflows',
              ],
              link: '/services/ai-automation',
              cta: 'AI Agent Specs',
            },
          ].map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-7 sm:p-8 rounded-[28px] glass-panel hover:border-purple-500/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {pillar.desc}
                  </p>

                  <ul className="space-y-2.5 mb-7 border-t border-slate-200/80 dark:border-white/10 pt-5">
                    {pillar.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={pillar.link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-purple-600 dark:text-cyan-400 hover:translate-x-1 transition-transform"
                >
                  <span>{pillar.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. ARCHITECTURAL COMPARISON MATRIX: NEXT.JS + DJANGO VS WORDPRESS & SHOPIFY */}
      <ArchitectureComparison />

      {/* 5. SELECTED WORKS & PRODUCTION CASE STUDIES (CLEAN SPLIT CARDS) */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-purple-50 dark:bg-white/5 border border-purple-200 dark:border-purple-500/30 text-purple-700 dark:text-purple-400 text-xs font-bold tracking-wider uppercase">
              Verified Production Proof
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white">
              Shipped Systems &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 dark:from-purple-400 dark:to-cyan-400">
                Measured Results
              </span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold text-sm hover:border-purple-500/40 transition-colors self-start md:self-auto"
          >
            <span>View All 13+ Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {featuredCases.map((project) => (
            <article
              key={project.id}
              className="group rounded-[28px] glass-panel overflow-hidden flex flex-col justify-between hover:border-purple-500/40 transition-colors"
            >
              <div>
                {/* Top Unobstructed Visual Preview */}
                <div className="relative h-56 overflow-hidden bg-slate-100 dark:bg-[#020617] border-b border-slate-200/80 dark:border-white/10">
                  {project.mockup === 'shopfast' ? (
                    <ShopFastMockup className="w-full h-full object-cover" />
                  ) : project.mockup === 'edel' ? (
                    <EdelMockup className="w-full h-full object-cover" />
                  ) : project.mockup === 'autogit' ? (
                    <AutoGitMockup className="w-full h-full object-cover" />
                  ) : project.mockup === 'solnova' ? (
                    <SolNovaMockup className="w-full h-full object-cover" />
                  ) : (
                    <img
                      src={project.img}
                      alt={`Preview of ${project.title}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-slate-900/85 text-white text-[11px] font-bold backdrop-blur-sm">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500 text-slate-950 text-[11px] font-extrabold shadow-sm">
                      {project.metric}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-2.5 py-1 rounded-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-3 border-t border-slate-200/60 dark:border-white/5 flex items-center gap-3">
                <Link
                  to={project.link}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs text-center hover:opacity-90 transition-opacity"
                >
                  Read Case Study
                </Link>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white font-bold text-xs inline-flex items-center gap-1.5 hover:border-purple-500/40 transition-colors"
                  >
                    <span>Live</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 6. VERIFIED BENCHMARKS & BEFORE/AFTER PROOF */}
      <BeforeAfterProof />

      {/* 7. INTERACTIVE REVENUE & SPEED CALCULATOR */}
      <section id="roi-calculator" className="container mx-auto px-6">
        <LeakedRevenueCalculator />
      </section>

      {/* 8. INTERACTIVE PROJECT SCOPE & QUOTE BUILDER */}
      <ProjectScopeBuilder />

      {/* 9. MEET THE PRINCIPAL ARCHITECT (AUTHENTIC CODER AUTHORITY) */}
      <section className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto p-7 sm:p-12 rounded-[32px] glass-panel">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-3xl overflow-hidden border-2 border-purple-500/30 shadow-xl bg-slate-900">
                <OptimizedImage
                  src="/hero-avatar.webp"
                  alt="Sagor Ahamed — Founder & Principal Architect at CryptoWebBuild"
                  className="w-full h-full object-cover"
                  fill={true}
                  priority={false}
                />
              </div>
              <div className="mt-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Direct Lead Architect
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mt-2">
                  Sagor Ahamed
                </h3>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Founder, CryptoWebBuild • Full-Stack &amp; AI Engineer
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-5 text-center lg:text-left">
              <div className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-cyan-400">
                Zero Subcontracting • Direct Engineering Accountability
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                Work Directly With the Engineer Writing Your Code.
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                Traditional agencies charge $10k+ and hand your project to junior template installers. At{' '}
                <strong className="text-slate-900 dark:text-white">CryptoWebBuild</strong>, I personally architect your backend in{' '}
                <strong className="text-slate-900 dark:text-white">Python/Django &amp; PostgreSQL</strong>, your frontend in{' '}
                <strong className="text-slate-900 dark:text-white">React/Next.js</strong>, and your{' '}
                <strong className="text-slate-900 dark:text-white">RAG AI pipelines</strong>—with 100% GitHub repository ownership transferred to you.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-1">
                {[
                  'Python & Django',
                  'React & Next.js',
                  'TypeScript',
                  'PostgreSQL',
                  '100/100 Technical SEO',
                  'Vector RAG & OpenClaw',
                  'Solana & Web3',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-700 dark:text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-3">
                <a
                  href="https://wa.me/8801618138820?text=Hi%20Sagor%2C%20I%20want%20to%20discuss%20a%20project%20directly%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 shadow-sm hover:opacity-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp: +880 1618-138820</span>
                </a>
                <a
                  href="https://github.com/cryptowebbuild"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs sm:text-sm inline-flex items-center gap-2"
                >
                  <span>GitHub (@cryptowebbuild)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <Link
                  to="/about"
                  className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white font-bold text-xs sm:text-sm hover:border-purple-500/40"
                >
                  Full Engineer Bio →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. 48-HOUR LAUNCH PROTOCOL (CLEAN ALIGNED 4-STEP GRID) */}
      <section className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-purple-50 dark:bg-white/5 border border-purple-200 dark:border-purple-500/30 text-purple-700 dark:text-purple-400 text-xs font-bold tracking-wider uppercase">
            Execution Protocol
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            From Audit to Live Prototype in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 dark:from-purple-400 dark:to-cyan-400">
              48 Hours
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Fast, transparent milestones with zero agency bureaucracy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Technical Audit',
              desc: 'We diagnose your speed bottlenecks, SEO schema gaps, and checkout drop-offs in a clear roadmap.',
            },
            {
              step: '02',
              title: '48h Live Prototype',
              desc: 'You test a working staging UI or RAG AI prototype within 48 hours before full production rollout.',
            },
            {
              step: '03',
              title: 'Full-Stack Sprint',
              desc: 'Hand-coded Python/Django, Next.js, payment gateways, and Technical SEO built with clean Git commits.',
            },
            {
              step: '04',
              title: '100/100 Launch',
              desc: 'Edge deployment, Lighthouse 100/100 verification, and full 100% source code ownership handover.',
            },
          ].map((item) => (
            <div
              key={item.step}
              className="p-7 rounded-[28px] glass-panel hover:border-purple-500/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center font-display font-black text-purple-600 dark:text-cyan-400 text-lg mb-5">
                {item.step}
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. THE GRAND SLAM GUARANTEE BANNER (UNIFIED LIGHT & DARK THEME — NO BLACK BOX MISMATCH) */}
      <section className="container mx-auto px-6 pb-12">
        <div className="relative rounded-[32px] md:rounded-[40px] overflow-hidden p-8 sm:p-16 md:p-20 text-center bg-gradient-to-br from-purple-50 via-white to-cyan-50 dark:from-[#0f172a] dark:via-[#090d1a] dark:to-[#0f172a] border border-purple-200/80 dark:border-white/10 shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>The Grand Slam 50/50 Guarantee</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Test Your Live System Before Paying the Final 50%.
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Pay 50% upfront to start. Pay the remaining 50%{' '}
              <span className="text-purple-600 dark:text-cyan-400 font-bold">ONLY</span> after you verify your sub-second website, E-Commerce checkout, or RAG AI Agent live on staging.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-9 py-4 neon-button text-white text-base sm:text-lg font-bold rounded-2xl"
              >
                <Zap className="w-5 h-5" />
                <span>Claim 48-Hour Prototype</span>
              </Link>
              <a
                href="https://wa.me/8801618138820?text=Hi%20Sagor%2C%20I%20want%20to%20claim%20my%2048-Hour%20Prototype%20with%20the%2050/50%20Guarantee!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-white dark:bg-white/10 border border-slate-200 dark:border-white/15 text-slate-900 dark:text-white text-base sm:text-lg font-bold rounded-2xl hover:border-purple-500/40 transition-colors"
              >
                <MessageSquare className="w-5 h-5 text-emerald-500" />
                <span>WhatsApp Direct (01618-138820)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
