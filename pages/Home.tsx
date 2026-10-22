import React from 'react';
import { Link } from 'react-router-dom';
import {
  Zap,
  Bot,
  Code2,
  Search,
  ShieldCheck,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';
import ShopFastMockup from '../components/ShopFastMockup';
import EdelMockup from '../components/EdelMockup';
import ProjectScopeBuilder from '../components/ProjectScopeBuilder';
import SpeedRevenueSimulator from '../components/SpeedRevenueSimulator';

const Home: React.FC = () => {
  const featuredCases = [
    {
      id: 'auracommerce',
      title: 'Edel Bangladesh Luxury Store',
      category: '1-Click Luxury E-Commerce',
      metric: '0.4s Load · +240% Sales',
      desc: 'Replaced manual "Inbox for Price" chat with 1-click bKash/COD checkout and automated Steadfast courier sync.',
      tech: ['Next.js 15', '1-Click bKash/COD', 'Steadfast API'],
      link: '/auracommerce',
      liveUrl: 'https://cryptowebbuild.github.io/edel-bangladesh/',
      mockup: 'edel',
    },
    {
      id: 'clickrunclaw',
      title: 'ClickRunClaw Cloud Engine',
      category: 'Global Automation SaaS',
      metric: '7,000+ Active Users',
      desc: 'Managed 24/7 cloud runtime deploying automated support and order agents to WhatsApp, Telegram, and Web.',
      tech: ['Python / Django', 'Vector RAG', 'Next.js'],
      link: '/clickrunclaw',
      liveUrl: 'https://clickrunclaw.com/',
      img: '/projects/clickrunclaw.webp',
    },
    {
      id: 'shopfast',
      title: 'ShopFast Headless Storefront',
      category: 'Global D2C E-Commerce',
      metric: '100/100 Speed · +38% Lift',
      desc: 'Migrated a 4.8s WooCommerce store to a static-edge React storefront with instant Stripe and local checkout.',
      tech: ['Next.js', 'Stripe / bKash', '100/100 SEO'],
      link: '/shopfast',
      liveUrl: 'https://cryptowebbuild.com/shopfast',
      mockup: 'shopfast',
    },
  ];

  return (
    <div className="space-y-24 md:space-y-32 overflow-hidden">
      <SEO
        title="CryptoWebBuild | Sub-Second Web, E-Commerce & 100/100 SEO Studio"
        description="Principal Full-Stack Engineering by Sagor Ahamed. We build sub-second Next.js & Python/Django websites, 1-click E-Commerce checkouts, and 100/100 Technical SEO. Pay 50% only after live testing."
        keywords={[
          'Full-Stack Web Developer',
          'Python Django Developer',
          'Next.js E-commerce Developer',
          '1-Click Checkout Website Bangladesh',
          'Technical SEO Web Design',
          'CryptoWebBuild',
          'Sagor Ahamed',
        ]}
        canonical="/"
        schemaType="Organization"
      />

      {/* STAGE 1: HERO — CLEAN PROPOSITION + FOUNDER PORTRAIT & 60FPS LIVE ARCHITECTURE PROOF */}
      <section className="relative px-6 pt-6 md:pt-12">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (7 cols) — High-Conversion Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
              <span>Principal Engineering Studio</span>
              <span aria-hidden="true">·</span>
              <span>Sagor Ahamed</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-600 dark:text-emerald-400">50/50 Risk-Free Build</span>
            </div>

            <h1
              className="font-display text-4xl sm:text-6xl lg:text-[60px] font-black tracking-tight leading-[1.06] text-slate-900 dark:text-white"
              style={{ textWrap: 'balance' }}
            >
              Sub-Second Websites &amp; 1-Click Stores That{' '}
              <span className="text-indigo-600 dark:text-indigo-400">Multiply Revenue.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
              Slow templates kill 60% of your paid traffic. I hand-code{' '}
              <strong className="text-slate-900 dark:text-white">0.4s Next.js &amp; Python/Django systems</strong>,{' '}
              <strong className="text-slate-900 dark:text-white">1-click Stripe/bKash checkouts</strong>, and{' '}
              <strong className="text-slate-900 dark:text-white">100/100 Google SEO</strong>. Pay the final 50% only after testing your live system.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto pt-1">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 px-7 py-4 w-full sm:w-auto neon-button text-white font-semibold rounded-xl text-sm sm:text-base whitespace-nowrap shrink-0"
              >
                <Zap className="w-4 h-4" />
                <span>Claim 48-Hour Prototype</span>
              </Link>
              <a
                href="https://wa.me/8801618138820?text=Hi%20Sagor%2C%20I%20visited%20CryptoWebBuild.com%20and%20want%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-4 w-full sm:w-auto bg-white dark:bg-[#11131A] border border-slate-200 dark:border-white/[0.08] text-slate-900 dark:text-white font-semibold rounded-xl hover:border-indigo-500/40 transition-colors text-sm sm:text-base whitespace-nowrap shrink-0 tabular-nums"
              >
                <MessageSquare className="w-4 h-4 text-emerald-500" />
                <span>WhatsApp: 01618-138820</span>
              </a>
            </div>

            {/* 4 Crisp Proof Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200 dark:border-white/[0.07] w-full tabular-nums">
              {[
                { val: '0.4s', label: 'Mobile Edge Load' },
                { val: '100/100', label: 'Google PageSpeed' },
                { val: '50 / 50', label: 'Pay After Live Test' },
                { val: '100%', label: 'GitHub Code Handover' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-3.5 rounded-xl bg-white dark:bg-[#11131A] border border-slate-200/80 dark:border-white/[0.06] text-center lg:text-left"
                >
                  <div className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                    {item.val}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (5 cols) — Clean Founder Portrait + 60fps SVG Motion Graphic & 1-Line Live Proof */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-3xl glass-panel p-5 sm:p-6 space-y-5 gpu-accelerated">
              {/* Top Founder Identity & Live Portrait */}
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/15 shrink-0 bg-slate-900">
                  <OptimizedImage
                    src="/hero-avatar.webp"
                    alt="Sagor Ahamed — Founder & Principal Architect at CryptoWebBuild"
                    className="w-full h-full object-cover"
                    fill={true}
                    priority={true}
                  />
                </div>
                <div className="space-y-1 min-w-0">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Direct Lead Engineer · Zero Outsourcing
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white truncate">
                    Sagor Ahamed
                  </h2>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Python/Django · Next.js 15 · 100/100 SEO
                  </p>
                </div>
              </div>

              {/* 60fps Hardware-Accelerated SVG Architecture Motion Graphic (Zero Video Bloat) */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#090A0F] border border-slate-200/80 dark:border-white/[0.06] space-y-3">
                <div className="flex items-center justify-between text-xs font-mono tabular-nums">
                  <span className="text-slate-600 dark:text-slate-400 font-semibold">
                    Live Conversion Pipeline
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                    LCP 0.4s · CLS 0.000
                  </span>
                </div>

                <svg
                  viewBox="0 0 380 76"
                  className="w-full h-auto overflow-visible"
                  role="img"
                  aria-label="Sub-second Next.js and Django conversion pipeline diagram"
                >
                  {/* Base Connection Track */}
                  <line
                    x1="55"
                    y1="38"
                    x2="325"
                    y2="38"
                    stroke="rgba(99, 102, 241, 0.2)"
                    strokeWidth="2"
                  />
                  {/* 60fps GPU Signal Stream */}
                  <line
                    x1="55"
                    y1="38"
                    x2="325"
                    y2="38"
                    stroke="#6366F1"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="animate-signal-flow"
                  />

                  {/* Node 1: Edge */}
                  <g transform="translate(8, 12)">
                    <rect
                      width="94"
                      height="52"
                      rx="10"
                      fill="#11131A"
                      stroke="rgba(255,255,255,0.12)"
                    />
                    <text x="47" y="23" textAnchor="middle" fill="#F8FAFC" fontSize="10" fontWeight="700" fontFamily="monospace">
                      Next.js Edge
                    </text>
                    <text x="47" y="39" textAnchor="middle" fill="#10B981" fontSize="10" fontWeight="700" fontFamily="monospace">
                      0.4s Load
                    </text>
                  </g>

                  {/* Node 2: Checkout / API */}
                  <g transform="translate(143, 12)">
                    <rect
                      width="94"
                      height="52"
                      rx="10"
                      fill="#11131A"
                      stroke="rgba(99, 102, 241, 0.45)"
                    />
                    <text x="47" y="23" textAnchor="middle" fill="#F8FAFC" fontSize="10" fontWeight="700" fontFamily="monospace">
                      1-Click Pay
                    </text>
                    <text x="47" y="39" textAnchor="middle" fill="#818CF8" fontSize="9.5" fontWeight="700" fontFamily="monospace">
                      Stripe · bKash
                    </text>
                  </g>

                  {/* Node 3: Revenue Outcome */}
                  <g transform="translate(278, 12)">
                    <rect
                      width="94"
                      height="52"
                      rx="10"
                      fill="#11131A"
                      stroke="rgba(16, 185, 129, 0.45)"
                    />
                    <text x="47" y="23" textAnchor="middle" fill="#F8FAFC" fontSize="10" fontWeight="700" fontFamily="monospace">
                      100/100 SEO
                    </text>
                    <text x="47" y="39" textAnchor="middle" fill="#10B981" fontSize="10" fontWeight="700" fontFamily="monospace">
                      +240% Sales
                    </text>
                  </g>
                </svg>
              </div>

              {/* 1-Line Live Client & GitHub Verification Bar */}
              <div className="pt-1 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="text-slate-500 dark:text-slate-400 font-medium">
                  Inspect Live Proof:
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href="https://cryptowebbuild.github.io/edel-bangladesh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-semibold hover:border-indigo-500/40 transition-colors inline-flex items-center gap-1 whitespace-nowrap shrink-0"
                  >
                    <span>Edel BD Live</span>
                    <ExternalLink className="w-3 h-3 text-indigo-500" />
                  </a>
                  <a
                    href="https://clickrunclaw.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-semibold hover:border-indigo-500/40 transition-colors inline-flex items-center gap-1 whitespace-nowrap shrink-0"
                  >
                    <span>ClickRunClaw</span>
                    <ExternalLink className="w-3 h-3 text-indigo-500" />
                  </a>
                  <a
                    href="https://github.com/cryptowebbuild"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-semibold hover:border-indigo-500/40 transition-colors inline-flex items-center gap-1 whitespace-nowrap shrink-0"
                  >
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 text-emerald-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STAGE 2: 3 CORE ENGINEERING SERVICES + INTERACTIVE SPEED & REVENUE SIMULATOR */}
      <section className="max-w-7xl mx-auto px-6 cv-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
              02 · Core Engineering Capabilities
            </div>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Three Systems Engineered for Direct ROI.
            </h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md">
            Built for international SaaS/D2C brands ($ USD) and growing Bangladesh businesses (৳ BDT).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Code2,
              badge: '01 · Web & E-Commerce',
              title: 'Sub-Second Stores & Full-Stack Apps',
              desc: 'Replace slow WordPress themes and manual "Inbox for Price" selling with 0.4s Next.js storefronts and Python/Django backends.',
              bullets: [
                'Next.js 15, React 18 & Python/Django',
                '1-Click Stripe, bKash, Nagad & COD',
                'Automated Steadfast & Pathao Courier API',
              ],
              link: '/services/ecommerce-development-bangladesh',
              cta: 'Explore 1-Click E-Commerce',
            },
            {
              icon: Search,
              badge: '02 · 100/100 Speed & SEO',
              title: 'Technical SEO & Google #1 Ranking',
              desc: 'Core Web Vitals engineering, Schema.org JSON-LD, and AI Search (GEO) indexing that capture high-intent buyers organically.',
              bullets: [
                'Guaranteed 98–100 PageSpeed Score',
                'Programmatic JSON-LD & Sitemap Sync',
                'Server-Side Meta CAPI & GA4 Tracking',
              ],
              link: '/services/crypto-growth',
              cta: 'Explore SEO System',
            },
            {
              icon: Bot,
              badge: '03 · Sales Automation',
              title: '24/7 WhatsApp & Web Order Pipelines',
              desc: 'Custom automated workflows and catalog-trained assistants that reply in 0.6s, qualify leads, and confirm orders 24/7.',
              bullets: [
                '24/7 WhatsApp, Telegram & Web Replies',
                'Instant Order & Stock Verification',
                'Zero Monthly SaaS Markup Lock-In',
              ],
              link: '/services/ai-automation',
              cta: 'Explore Automation',
            },
          ].map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 sm:p-7 rounded-3xl glass-panel hover:border-indigo-500/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5">
                    {pillar.desc}
                  </p>

                  <ul className="space-y-2 mb-6 border-t border-slate-200/80 dark:border-white/[0.06] pt-4">
                    {pillar.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={pillar.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:translate-x-1 transition-transform"
                >
                  <span>{pillar.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Interactive Speed & Revenue Simulator */}
        <SpeedRevenueSimulator />
      </section>

      {/* STAGE 3: TOP 3 VERIFIED PRODUCTION PROJECTS */}
      <section className="max-w-7xl mx-auto px-6 cv-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
              03 · Verified Production Proof
            </div>
            <h2
              className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Shipped Systems &amp; Live Client Results.
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-[#11131A] border border-slate-200 dark:border-white/[0.08] text-slate-900 dark:text-white font-semibold text-xs hover:border-indigo-500/40 transition-colors self-start md:self-auto whitespace-nowrap shrink-0"
          >
            <span>View All 13+ Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCases.map((project) => (
            <article
              key={project.id}
              className="group rounded-3xl glass-panel overflow-hidden flex flex-col justify-between hover:border-indigo-500/40 transition-colors"
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-[#090A0F] border-b border-slate-200/80 dark:border-white/[0.06]">
                  {project.mockup === 'shopfast' ? (
                    <ShopFastMockup className="w-full h-full object-cover" />
                  ) : project.mockup === 'edel' ? (
                    <EdelMockup className="w-full h-full object-cover" />
                  ) : (
                    <img
                      src={project.img}
                      alt={`Preview of ${project.title}`}
                      width={600}
                      height={360}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 text-xs font-mono tabular-nums text-slate-500 dark:text-slate-400 mb-2">
                    <span>{project.category}</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{project.metric}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                    {project.tech.map((t, index) => (
                      <React.Fragment key={t}>
                        {index > 0 && <span aria-hidden="true">·</span>}
                        <span>{t}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-slate-200/60 dark:border-white/[0.05] flex items-center gap-2.5">
                <Link
                  to={project.link}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-xs text-center hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  Case Study
                </Link>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white font-semibold text-xs inline-flex items-center gap-1.5 hover:border-indigo-500/40 transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* STAGE 4: INTERACTIVE DUAL-CURRENCY SCOPE & QUOTE CONFIGURATOR */}
      <div className="cv-auto">
        <ProjectScopeBuilder />
      </div>

      {/* STAGE 5: FINAL 50/50 GUARANTEE CALL-TO-ACTION */}
      <section className="max-w-7xl mx-auto px-6 pb-8 cv-auto">
        <div className="rounded-3xl glass-panel p-8 sm:p-14 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>50 / 50 Milestone Protection · 100% Source Code Handover</span>
          </div>

          <h2
            className="font-display text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight max-w-3xl mx-auto leading-tight"
            style={{ textWrap: 'balance' }}
          >
            Test Your Live System on Staging Before Paying the Final 50%.
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Work 1-on-1 with Principal Engineer <strong className="text-slate-900 dark:text-white">Sagor Ahamed</strong>. Launch a sub-second storefront or web app in days—backed by verifiable PageSpeed 100/100 benchmarks.
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 justify-center pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 neon-button text-white text-sm sm:text-base font-semibold rounded-xl whitespace-nowrap"
            >
              <Zap className="w-4 h-4" />
              <span>Claim 48-Hour Prototype</span>
            </Link>
            <a
              href="https://wa.me/8801618138820?text=Hi%20Sagor%2C%20I%20want%20to%20claim%20my%2048-Hour%20Prototype%20with%20the%2050/50%20Guarantee!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm sm:text-base font-semibold rounded-xl hover:border-indigo-500/40 transition-colors whitespace-nowrap tabular-nums"
            >
              <MessageSquare className="w-4 h-4 text-emerald-500" />
              <span>WhatsApp Direct: 01618-138820</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
