import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import EdelMockup from '../../components/EdelMockup';
import { ExternalLink, CheckCircle2, Zap, ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';

const AuraCommerce: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Case Study: Edel Bangladesh — Luxury 1-Click E-Commerce & F-Commerce Engine',
    image: 'https://cryptowebbuild.com/hero-avatar.webp',
    author: {
      '@type': 'Person',
      name: 'Sagor Ahamed',
      jobTitle: 'Lead Full-Stack Architect',
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
      'How Sagor Ahamed engineered a sub-second, 1-click storefront for Edel Bangladesh, eliminating "Inbox for Price" friction and scaling mobile orders by +240%.',
    keywords:
      'Edel Bangladesh, F-Commerce Website, 1-Click Checkout bKash, Steadfast Courier API, React Headless Commerce, Sub-Second Storefront',
  };

  return (
    <div className="container mx-auto px-6 min-h-screen">
      <SEO
        title="Edel Bangladesh Case Study | 1-Click Luxury E-Commerce Engine"
        description="Discover how we engineered a sub-second 1-click storefront for Edel Bangladesh. Automated bKash & COD checkout, Steadfast courier sync, and +240% order growth."
        keywords={[
          'Edel Bangladesh',
          'F-Commerce Website Development',
          '1-Click Checkout bKash',
          'Steadfast Courier API Integration',
          'Fast Mobile Commerce Bangladesh',
          'CryptoWebBuild Sagor Ahamed',
        ]}
        type="article"
        publishedTime="2026-10-21"
        schema={jsonLd}
        canonical="/auracommerce"
      />

      <div className="max-w-4xl mx-auto py-8">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-8">
          <Link to="/" className="hover:text-purple-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/projects" className="hover:text-purple-600 transition-colors">
            Projects
          </Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-gray-200 font-bold">Edel Bangladesh</span>
        </nav>

        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-rose-100 dark:bg-rose-900/30 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-300 text-xs font-bold uppercase tracking-wider shadow-sm">
          <span>Client Production Case Study</span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
          Edel Bangladesh —{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-amber-500 to-orange-500">
            Luxury 1-Click Storefront
          </span>
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-medium">
          How we transformed a high-end bridal jewelry &amp; churi brand (<strong>facebook.com/edelbangladesh</strong>) from manual Facebook Messenger chaos into an automated, sub-second conversion engine with 1-click bKash and Steadfast Courier dispatch.
        </p>

        {/* Interactive Edel Mockup Container */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 mb-10 h-[360px] sm:h-[440px] md:h-[480px]">
          <EdelMockup className="w-full h-full" />
        </div>

        {/* Live Demo Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl glass-panel border border-amber-500/30 bg-amber-500/[0.04] mb-12">
          <div>
            <div className="font-bold text-gray-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span>Inspect the Live Production Showcase:</span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Experience the 0.4s load time, luxury gold accents, and 1-click order flow live.
            </p>
          </div>
          <a
            href="https://cryptowebbuild.github.io/edel-bangladesh/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-extrabold text-xs sm:text-sm inline-flex items-center gap-1.5 shadow-md transition-transform hover:scale-105"
          >
            <span>Open Edel Bangladesh Demo</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Key Benchmark Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          <div className="glass-panel p-5 rounded-2xl border-t-2 border-rose-500 text-center">
            <span className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider block mb-1">
              Mobile Load Time
            </span>
            <p className="font-mono text-2xl font-black text-emerald-500">&lt; 0.4s</p>
            <span className="text-[11px] text-gray-500">Edge Cached</span>
          </div>
          <div className="glass-panel p-5 rounded-2xl border-t-2 border-amber-500 text-center">
            <span className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider block mb-1">
              Order Lift
            </span>
            <p className="font-mono text-2xl font-black text-purple-600 dark:text-purple-400">+240%</p>
            <span className="text-[11px] text-gray-500">Mobile Conversions</span>
          </div>
          <div className="glass-panel p-5 rounded-2xl border-t-2 border-cyan-500 text-center">
            <span className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider block mb-1">
              Checkout Flow
            </span>
            <p className="font-mono text-2xl font-black text-cyan-600 dark:text-cyan-400">1-Click</p>
            <span className="text-[11px] text-gray-500">bKash / COD</span>
          </div>
          <div className="glass-panel p-5 rounded-2xl border-t-2 border-emerald-500 text-center">
            <span className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider block mb-1">
              Courier API
            </span>
            <p className="font-mono text-2xl font-black text-emerald-500">Steadfast</p>
            <span className="text-[11px] text-gray-500">Automated Webhooks</span>
          </div>
        </div>

        {/* Detailed Case Study Narrative */}
        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
          <h2>The Business Problem: The &ldquo;Inbox for Price&rdquo; Sales Trap</h2>
          <p>
            Like hundreds of thriving F-Commerce brands in Bangladesh, <strong>Edel Bangladesh</strong> had magnificent bridal jewelry, premium churi sets, and high organic engagement on Facebook. However, their sales funnel had a critical revenue leak:
          </p>
          <ul>
            <li>
              <strong>Customer Drop-Off:</strong> Over 60% of interested buyers asked for prices or sizes in DMs, but left before a human page moderator could reply.
            </li>
            <li>
              <strong>Late-Night Lost Orders:</strong> Peak jewelry buying occurs between 9:00 PM and 2:00 AM, when staff was offline.
            </li>
            <li>
              <strong>Manual Delivery Chaos:</strong> Copy-pasting addresses and phone numbers from chat into courier delivery portals caused shipping errors and wasted hours every day.
            </li>
          </ul>

          <h2>The CryptoWebBuild Architecture: Sub-Second Luxury &amp; Zero Friction</h2>
          <p>
            Instead of installing a slow, generic WordPress theme that takes 5 seconds to load on mobile networks, Sagor Ahamed engineered a dedicated, high-speed headless storefront:
          </p>
          <ol>
            <li>
              <strong>Royal Visual Aesthetic:</strong> Designed with deep velvet rose-gold backgrounds (`#8E1B3A` and `#1A0B10`), champagne gold accents, and clean Bengali typography (`Hind Siliguri` &amp; `Cinzel`) matching the luxury quality of bridal churi collections.
            </li>
            <li>
              <strong>Instant 1-Click Order Form:</strong> Eliminated the cart step entirely. Customers select their bangle size (2-4, 2-6, 2-8), enter their name, phone number, and address on a single screen, and complete the order in under 10 seconds.
            </li>
            <li>
              <strong>Automated Courier Webhook:</strong> The moment the customer confirms their order via bKash, Nagad, or Cash on Delivery, our backend immediately calls the <strong>Steadfast / Pathao Courier API</strong> to generate a consignment tracking code automatically.
            </li>
            <li>
              <strong>Flash Sale Scarcity &amp; Social Proof:</strong> Integrated live countdown timers and real-time order notification pills that motivate instant purchase decisions.
            </li>
          </ol>

          <h2>The Bottom-Line Impact</h2>
          <p>
            By replacing manual Messenger selling with this sub-second 1-click architecture:
          </p>
          <ul>
            <li>
              <strong>2.4x Revenue Lift:</strong> Conversions spiked from 1.1% on manual chat to 3.8% on the direct 1-click storefront.
            </li>
            <li>
              <strong>Zero Server Maintenance:</strong> Static edge hosting ensures the website never crashes during heavy festive flash sales (Eid/Puja/Wedding Season).
            </li>
            <li>
              <strong>Autonomous Operations:</strong> The business owner saves 4+ hours daily in manual customer service and delivery entry.
            </li>
          </ul>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-3xl glass-panel border border-amber-500/30 text-center">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Want an Automated 1-Click Storefront for Your Brand?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-6 text-sm sm:text-base">
            Get your custom 48-Hour Live Prototype with 1-click bKash/Stripe checkout and courier sync. 50% upfront / 50% upon live verification.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3.5 neon-button text-white font-bold rounded-xl text-sm shadow-lg"
            >
              Claim Your 48-Hour Prototype
            </Link>
            <a
              href="https://wa.me/8801618138820?text=Hi%20Sagor%2C%20I%20saw%20your%20Edel%20Bangladesh%20case%20study%20and%20want%20a%20similar%201-click%20storefront%20for%20my%20business!"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl text-sm transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp (01618-138820)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuraCommerce;
