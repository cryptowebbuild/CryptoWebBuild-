import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import EdelMockup from '../../components/EdelMockup';
import ShopFastMockup from '../../components/ShopFastMockup';
import {
  Zap,
  CheckCircle2,
  ShieldCheck,
  MessageSquare,
  ExternalLink,
  ShoppingBag,
  Truck,
  BarChart3,
} from 'lucide-react';

const EcommerceDevelopmentBD: React.FC = () => {
  const [currency, setCurrency] = useState<'BDT' | 'USD'>('BDT');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: '1-Click Custom E-Commerce Website Development (Next.js + bKash/Stripe + Steadfast)',
        provider: {
          '@type': 'ProfessionalService',
          name: 'CryptoWebBuild',
          url: 'https://cryptowebbuild.com',
        },
        areaServed: ['Bangladesh', 'United States', 'United Kingdom', 'United Arab Emirates', 'Worldwide'],
        description:
          'Custom 0.4s Next.js e-commerce storefronts with 1-click bKash, Nagad, COD, and Stripe checkout, automated Steadfast/Pathao courier dispatch, and Server-Side Meta CAPI.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Why choose a custom Next.js e-commerce website over WordPress/WooCommerce in Bangladesh?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'WordPress/WooCommerce stores take 4.5 to 6 seconds to load on mobile 4G networks, causing up to 60% of paid Facebook ad clicks to bounce. A custom Next.js storefront loads in 0.4 seconds and lets buyers complete orders on a single screen.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does it include bKash, Nagad, Cash on Delivery (COD), and Steadfast/Pathao Courier API?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Every storefront includes a 1-click checkout supporting bKash, Nagad, SSLCommerz, Stripe, and Cash on Delivery, plus automated webhook dispatch to Steadfast, Pathao, or RedX courier portals.',
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-20">
      <SEO
        title="Custom 1-Click E-Commerce Website Development (Bangladesh & Global) | CryptoWebBuild"
        description="Replace slow WordPress stores and manual Facebook inbox selling with a 0.4s Next.js e-commerce website. 1-Click bKash/Stripe checkout, Steadfast Courier API & Meta CAPI."
        keywords={[
          'E-Commerce Website Development Bangladesh',
          '1-Click Checkout Website bKash',
          'F-Commerce to Website Bangladesh',
          'Steadfast Courier API Website',
          'Custom Next.js E-Commerce Developer',
          'Server-Side Meta Pixel CAPI Bangladesh',
        ]}
        canonical="/services/ecommerce-development-bangladesh"
        schema={jsonLd}
      />

      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-4">
        <div className="lg:col-span-7 space-y-6">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            0.4s E-Commerce Engineering · Bangladesh (৳ BDT) &amp; Global ($ USD)
          </div>
          <h1
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.07]"
            style={{ textWrap: 'balance' }}
          >
            Stop Losing 60% of Facebook Ad Clicks to{' '}
            <span className="text-indigo-600 dark:text-indigo-400">Slow Stores &amp; Inbox Chaos.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
            We engineer custom <strong className="text-slate-900 dark:text-white">0.4s Next.js 15 storefronts</strong> with{' '}
            <strong className="text-slate-900 dark:text-white">1-Click bKash / Nagad / COD / Stripe checkout</strong>, automated{' '}
            <strong className="text-slate-900 dark:text-white">Steadfast &amp; Pathao Courier API</strong>, and Server-Side Meta Pixel (CAPI).
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 pt-1">
            <a
              href="https://wa.me/8801618138820?text=Hi%20Sagor%2C%20I%20want%20to%20build%20a%200.4s%201-Click%20E-Commerce%20Website%20with%20 the%2050/50%20Guarantee."
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-xl neon-button text-white font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Direct: 01618-138820</span>
            </a>
            <a
              href="https://cryptowebbuild.github.io/edel-bangladesh/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl bg-white dark:bg-[#11131A] border border-slate-200 dark:border-white/[0.08] text-slate-900 dark:text-white font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-2 hover:border-indigo-500/40 transition-colors whitespace-nowrap"
            >
              <span>Inspect Live Client Store (Edel BD)</span>
              <ExternalLink className="w-4 h-4 text-indigo-500" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-3xl glass-panel overflow-hidden">
            <div className="h-72 sm:h-80 w-full bg-slate-950 border-b border-slate-200/80 dark:border-white/[0.07]">
              <EdelMockup className="w-full h-full object-cover" />
            </div>
            <div className="p-5 flex items-center justify-between text-xs">
              <div>
                <div className="font-bold text-slate-900 dark:text-white">
                  Edel Bangladesh — Live 1-Click Store
                </div>
                <div className="text-slate-500 dark:text-slate-400">
                  0.4s Mobile Load · +240% Conversion Lift
                </div>
              </div>
              <Link
                to="/auracommerce"
                className="px-3.5 py-2 rounded-lg bg-indigo-600 text-white font-semibold whitespace-nowrap"
              >
                Read Case Study
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Conversion Pillars */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: ShoppingBag,
            title: '1-Click Single-Screen Checkout',
            desc: 'Customers select size/variant, enter name, phone, and address on the same screen, and order via COD, bKash, Nagad, or Stripe in 8 seconds.',
          },
          {
            icon: Truck,
            title: 'Steadfast, Pathao & RedX API Sync',
            desc: 'Zero manual copy-pasting from Messenger. Confirmed orders automatically generate courier consignment IDs and SMS tracking links.',
          },
          {
            icon: BarChart3,
            title: 'Server-Side Meta CAPI + Fake Order Shield',
            desc: 'Bypasses iOS ad blockers for lower Facebook Cost-Per-Purchase and blocks fake mobile numbers with OTP & courier history checks.',
          },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="p-6 rounded-3xl glass-panel space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <h2 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                {item.title}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </section>

      {/* Dual-Currency Package Comparison */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-1">
              Transparent Fixed Packages · 50/50 Milestone Protection
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Choose Your Storefront Architecture
            </h2>
          </div>

          <div className="inline-flex items-center p-1 rounded-xl bg-slate-100 dark:bg-[#11131A] border border-slate-200 dark:border-white/[0.08] self-start">
            <button
              type="button"
              onClick={() => setCurrency('BDT')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                currency === 'BDT' ? 'bg-indigo-600 text-white' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Bangladesh (৳ BDT)
            </button>
            <button
              type="button"
              onClick={() => setCurrency('USD')}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                currency === 'USD' ? 'bg-indigo-600 text-white' : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              International ($ USD)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 tabular-nums">
          <div className="p-7 rounded-3xl glass-panel flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase text-indigo-600 dark:text-indigo-400">
                  1-Click Growth Storefront
                </span>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
                  Delivery: 4 Business Days
                </span>
              </div>
              <div className="font-display text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
                {currency === 'BDT' ? '৳65,000' : '$550'}
                <span className="text-xs font-normal text-slate-500 ml-2">
                  (50% Upfront / 50% After Live Test)
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Ideal for F-Commerce brands and D2C product lines scaling Facebook &amp; TikTok ads.
              </p>
              <ul className="space-y-2.5 pt-2 border-t border-slate-200/80 dark:border-white/[0.06] text-xs sm:text-sm">
                {[
                  '0.4s Next.js 15 Storefront & Product Catalog',
                  '1-Click Checkout (bKash, Nagad, COD or Stripe)',
                  'Steadfast / Pathao Automated Courier API',
                  'Server-Side Meta Pixel (CAPI) & GA4 Setup',
                  '100% GitHub Source Code Ownership',
                ].map((feat) => (
                  <li key={feat} className="flex items-center gap-2 font-semibold text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://wa.me/8801618138820?text=Hi%20Sagor%2C%20I%20want%20to%20start%20the%201-Click%20Growth%20Storefront%20with%20the%2050/50%20Guarantee."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl neon-button text-white font-semibold text-sm flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4" />
              <span>Start 1-Click Storefront (50/50 Terms)</span>
            </a>
          </div>

          <div className="p-7 rounded-3xl glass-panel border-indigo-500/40 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase text-emerald-600 dark:text-emerald-400">
                  Full-Stack Custom Enterprise Store + Automation
                </span>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400">
                  Delivery: 7 Business Days
                </span>
              </div>
              <div className="font-display text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
                {currency === 'BDT' ? '৳1,25,000' : '$1,100'}
                <span className="text-xs font-normal text-slate-500 ml-2">
                  (50% Upfront / 50% After Live Test)
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Complete Python/Django + PostgreSQL multi-category store with 24/7 WhatsApp order automation.
              </p>
              <ul className="space-y-2.5 pt-2 border-t border-slate-200/80 dark:border-white/[0.06] text-xs sm:text-sm">
                {[
                  'Everything in Growth Storefront + Custom Django Admin',
                  'PostgreSQL Inventory, ERP & Role-Based Staff Portal',
                  '24/7 Automated WhatsApp & Messenger Order Replies',
                  '100/100 Programmatic SEO & Google Shopping Schema',
                  'Fake Order Phone Score & OTP Verification Shield',
                ].map((feat) => (
                  <li key={feat} className="flex items-center gap-2 font-semibold text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://wa.me/8801618138820?text=Hi%20Sagor%2C%20I%20want%20to%20start%20the%20Full-Stack%20Enterprise%20Store%20with%20the%2050/50%20Guarantee."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl neon-button text-white font-semibold text-sm flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Book Enterprise Store (50/50 Terms)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceDevelopmentBD;
