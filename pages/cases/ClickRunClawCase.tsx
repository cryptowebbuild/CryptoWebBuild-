import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { ExternalLink, CheckCircle2, Zap, MessageSquare, ShieldCheck, Server, Cpu, Globe } from 'lucide-react';

const ClickRunClawCase: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Case Study: ClickRunClaw — 1-Click Cloud Runtime for Autonomous RAG & OpenClaw Agents',
        image: 'https://cryptowebbuild.com/projects/clickrunclaw.webp',
        author: {
          '@type': 'Person',
          name: 'Sagor Ahamed',
          jobTitle: 'Principal Full-Stack Architect',
          url: 'https://cryptowebbuild.com/about',
        },
        publisher: {
          '@type': 'Organization',
          name: 'CryptoWebBuild',
          logo: {
            '@type': 'ImageObject',
            url: 'https://cryptowebbuild.com/hero-avatar.webp',
          },
        },
        description:
          'How Sagor Ahamed architected ClickRunClaw.com — a managed 24/7 cloud runtime serving 7,000+ active users with 1-click webhook provisioning for WhatsApp, Telegram, and Web.',
      },
      {
        '@type': 'SoftwareApplication',
        name: 'ClickRunClaw Cloud Engine',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, Cloud',
        url: 'https://clickrunclaw.com/',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-8 min-h-screen space-y-12">
      <SEO
        title="ClickRunClaw Case Study | 24/7 Cloud Engine for WhatsApp & Web Automation"
        description="Explore the engineering behind ClickRunClaw.com: a high-concurrency Python/Django & Next.js cloud runtime serving 7,000+ users with 99.98% uptime."
        keywords={[
          'ClickRunClaw',
          'OpenClaw Cloud Hosting',
          'WhatsApp Order Automation SaaS',
          'Python Django Cloud Architecture',
          'Sagor Ahamed Case Study',
          'CryptoWebBuild',
        ]}
        type="article"
        publishedTime="2026-10-21"
        schema={jsonLd}
        canonical="/clickrunclaw"
      />

      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
        <Link to="/" className="hover:text-indigo-500 transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link to="/projects" className="hover:text-indigo-500 transition-colors">
          Work
        </Link>
        <span>/</span>
        <span className="text-slate-900 dark:text-white font-semibold">ClickRunClaw Cloud SaaS</span>
      </nav>

      {/* Hero Header */}
      <header className="space-y-5">
        <div className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
          Flagship Production SaaS · Live Verification
        </div>
        <h1
          className="font-display text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.08]"
          style={{ textWrap: 'balance' }}
        >
          ClickRunClaw: Managed 24/7 Cloud Runtime Scaling to{' '}
          <span className="text-indigo-600 dark:text-indigo-400">7,000+ Active Users.</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Businesses wanted 24/7 WhatsApp, Telegram, and Web order automation without managing Docker servers, Linux VPS terminals, or broken webhook tunnels. We engineered{' '}
          <strong className="text-slate-900 dark:text-white">ClickRunClaw.com</strong> to deploy isolated cloud containers in 1 click.
        </p>
      </header>

      {/* Live Preview Showcase Card */}
      <div className="rounded-3xl glass-panel overflow-hidden">
        <div className="relative h-64 sm:h-96 w-full bg-slate-950 border-b border-slate-200/80 dark:border-white/[0.07]">
          <img
            src="/projects/clickrunclaw.webp"
            alt="ClickRunClaw Production SaaS Dashboard"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div className="p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold text-slate-900 dark:text-white">
              Inspect Live Production Platform: clickrunclaw.com
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Zero cold-start container orchestration, sub-second dashboard UI, and automated webhook routing.
            </p>
          </div>
          <a
            href="https://clickrunclaw.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl neon-button text-white font-semibold text-xs sm:text-sm inline-flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            <span>Visit ClickRunClaw.com</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* 4 Production Benchmarks */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 tabular-nums">
        {[
          { label: 'Active Users', val: '7,000+', sub: 'Global SaaS Adoption' },
          { label: 'System Uptime', val: '99.98%', sub: 'Isolated Docker Nodes' },
          { label: 'Webhook Latency', val: '< 120ms', sub: 'WhatsApp / Telegram' },
          { label: 'Provisioning Time', val: '8 Seconds', sub: '1-Click Container Boot' },
        ].map((stat) => (
          <div key={stat.label} className="p-5 rounded-2xl glass-panel">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block">
              {stat.label}
            </span>
            <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              {stat.val}
            </div>
            <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 mt-0.5 block">
              {stat.sub}
            </span>
          </div>
        ))}
      </div>

      {/* Architectural Breakdown (Problem -> Solution -> Outcome) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl glass-panel space-y-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
            <Server className="w-5 h-5" />
          </div>
          <h2 className="font-display text-lg font-bold text-slate-900 dark:text-white">
            01 · The Infrastructure Bottleneck
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Founders and e-commerce teams struggled to keep self-hosted automation agents online. Local machines slept, webhook SSL certificates expired, and per-seat SaaS tools charged $300+/month.
          </p>
        </div>

        <div className="p-6 rounded-3xl glass-panel space-y-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
            <Cpu className="w-5 h-5" />
          </div>
          <h2 className="font-display text-lg font-bold text-slate-900 dark:text-white">
            02 · Custom Cloud Engine
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            We architected a multi-tenant control plane using Python/Django, PostgreSQL, Redis queues, and isolated Docker workers with an instant Next.js 15 dashboard.
          </p>
        </div>

        <div className="p-6 rounded-3xl glass-panel space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <Globe className="w-5 h-5" />
          </div>
          <h2 className="font-display text-lg font-bold text-slate-900 dark:text-white">
            03 · Commercial Impact
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Scaled organically to 7,000+ users via 100/100 Technical SEO and sub-second page loads, proving our ability to ship production-grade global SaaS platforms.
          </p>
        </div>
      </div>

      {/* Technical Stack Checklist */}
      <div className="p-6 sm:p-8 rounded-3xl glass-panel space-y-4">
        <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
          Production Stack &amp; Capabilities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            'Next.js 15 & TypeScript Frontend',
            'Python / Django REST Control Plane',
            'PostgreSQL Multi-Tenant Isolation',
            'Automated WhatsApp & Telegram Webhooks',
            'Stripe & Global Subscription Billing',
            '100/100 Core Web Vitals & JSON-LD SEO',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Risk-Reversal CTA */}
      <div className="p-8 sm:p-10 rounded-3xl glass-panel text-center space-y-5">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
          <ShieldCheck className="w-4 h-4" />
          <span>50/50 Milestone Protection · Direct Principal Engineer</span>
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white">
          Want to Build a Custom SaaS or Automation Platform?
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          Get a working staging prototype in 48 hours. Pay the final 50% only after verifying live performance.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-1">
          <Link
            to="/contact"
            className="px-7 py-3.5 neon-button text-white font-semibold rounded-xl text-sm inline-flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4" />
            <span>Claim 48-Hour Prototype</span>
          </Link>
          <a
            href="https://wa.me/8801618138820?text=Hi%20Sagor%2C%20I%20inspected%20your%20ClickRunClaw%20case%20study%20and%20want%20to%20build%20a%20custom%20SaaS%20or%20automation%20system."
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-semibold rounded-xl text-sm inline-flex items-center justify-center gap-2 hover:border-indigo-500/40 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-500" />
            <span>WhatsApp: 01618-138820</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClickRunClawCase;
