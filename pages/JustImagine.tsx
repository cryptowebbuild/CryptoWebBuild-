import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';

const JustImagine: React.FC = () => {
  const metrics = [
    { value: '20+', label: 'Static pages' },
    { value: '8', label: 'Service areas' },
    { value: '6', label: 'Core services' },
    { value: '3', label: 'Contact paths' },
  ];

  return (
    <div className="container mx-auto px-6 py-12 max-w-6xl">
      <SEO
        title="Just Imagine Heating case study | CryptoWebBuild"
        description="A 20-page local service site for a Gas Safe heating and plumbing engineer in Rugby: six services, eight area pages, FAQs, and a call-first conversion funnel."
        canonical="/justimagine"
        image="/projects/justimagine-hero.webp"
        type="article"
        publishedTime="2026-11-21"
        schemaType="Article"
        keywords={[
          'local service website design',
          'heating and plumbing website',
          'local SEO case study',
          'Gas Safe website',
          'conversion focused local business website',
        ]}
      />

      <nav className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mb-8" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</Link>
        <span>/</span>
        <Link to="/projects" className="hover:text-indigo-600 dark:hover:text-indigo-400">Work</Link>
        <span>/</span>
        <span className="text-slate-900 dark:text-white">Just Imagine Heating</span>
      </nav>

      <header className="max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/10 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-orange-700 dark:text-orange-300">
          Local service / SEO
        </div>
        <h1 className="mt-5 font-display text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.02]">
          Just Imagine Heating: built to turn local searches into calls.
        </h1>
        <p className="mt-5 text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
          A Gas Safe heating and plumbing engineer in Rugby needed to look like the established choice before the
          first call. The result is a 20+ page static site with six services, eight area pages, trust-first proof,
          and three ways to start a conversation.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="https://cryptowebbuild.github.io/justimagine-preview/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 min-h-[48px] px-6 rounded-xl neon-button text-white font-semibold text-sm"
          >
            Open the live preview
            <span aria-hidden="true">↗</span>
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 min-h-[48px] px-6 rounded-xl border border-slate-300 dark:border-white/15 text-slate-900 dark:text-white font-semibold text-sm hover:border-indigo-500/50 transition-colors"
          >
            Start a project like this
          </Link>
        </div>
      </header>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#11131A] p-5">
            <div className="font-display text-2xl md:text-3xl font-black text-slate-900 dark:text-white">{m.value}</div>
            <div className="mt-1 text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">{m.label}</div>
          </div>
        ))}
      </div>

      <figure className="mt-10 rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-[#11131A]">
        <OptimizedImage
          src="/projects/justimagine-hero.webp"
          alt="Just Imagine Heating homepage with a Gas Safe registered badge, boiler engineer photo, and call to action"
          width={1600}
          height={1000}
          priority
        />
      </figure>

      <section className="mt-14 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">01 / The brief</div>
          <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Trust before the first call.</h2>
        </div>
        <div className="lg:col-span-8 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            A local heating engineer competes with national firms that have bigger ad budgets and call centres. The
            website had to answer three questions in the first screen: is this person qualified, is he local, and how
            do I reach him?
          </p>
          <p>
            The design puts the Gas Safe registration, the Rugby location, and a direct call button above the fold.
            It explains the six services in plain English, then gives every nearby town its own page so a search for
            “boiler repair Coventry” or “landlord gas safety Warwick” has somewhere useful to land.
          </p>
        </div>
      </section>

      <section className="mt-12 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">02 / The build</div>
          <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 dark:text-white tracking-tight">A complete local funnel, not a brochure.</h2>
        </div>
        <div className="lg:col-span-8 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            The site is static HTML, CSS, and a small amount of JavaScript. That keeps the pages fast and easy to
            host, while the structure does the SEO work: service pages, area pages, FAQs, internal links, and a clear
            heading on every page.
          </p>
          <ul className="grid sm:grid-cols-2 gap-2 pt-2 text-sm">
            {[
              'Six service pages, one for each job type',
              'Eight town and city area pages',
              'Gas Safe number and local proof above the fold',
              'Call, WhatsApp 10-second quote, callback form',
              'FAQ page for the questions that block a booking',
              'Cookie consent with no tracking by default',
            ].map((x) => (
              <li key={x} className="flex gap-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#11131A] p-3">
                <span className="text-emerald-500 font-bold">+</span>
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <figure className="rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-[#11131A]">
          <OptimizedImage
            src="/projects/justimagine-services.webp"
            alt="Just Imagine Heating services section with six service cards for boiler repair, installation, servicing, landlord gas safety, radiators and plumbing"
            width={1600}
            height={1000}
          />
        </figure>
        <figure className="rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-[#11131A] flex items-center justify-center p-6">
          <OptimizedImage
            src="/projects/justimagine-mobile-v2.webp"
            alt="Mobile view of the Just Imagine Heating homepage with the Gas Safe badge and call button"
            width={720}
            height={1500}
            className="max-w-[260px]"
          />
        </figure>
      </div>

      <section className="mt-14 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">03 / Why it converts</div>
          <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Remove every reason to hesitate.</h2>
        </div>
        <div className="lg:col-span-8 grid sm:grid-cols-3 gap-4">
          {[
            {
              h: 'Proof at the top',
              p: 'Gas Safe registration, a real engineer, and a local address before the first scroll.',
            },
            {
              h: 'One clear next step',
              p: 'Call for urgency, WhatsApp for a fast quote, or a callback form for planned work.',
            },
            {
              h: 'A page for every search',
              p: 'Service and area pages meet high-intent queries with specific answers, not a generic homepage.',
            },
          ].map((x) => (
            <div key={x.h} className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#11131A] p-5">
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{x.h}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{x.p}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#11131A] p-6 md:p-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">04 / The result</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              A small business that looks like the safe choice.
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              The site now covers the full local journey: emergency boiler repair, planned installation, landlord
              certificates, and everyday plumbing. Each service and area has its own page, each page has a route back
              to a call, and the trust proof is visible before a visitor has to ask for it.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://cryptowebbuild.github.io/justimagine-preview/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400"
              >
                Open the live preview <span aria-hidden="true">↗</span>
              </a>
              <Link to="/services/crypto-growth" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                Technical SEO service <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 rounded-2xl bg-slate-50 dark:bg-[#090A0F] border border-slate-200 dark:border-white/10 p-5">
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">Stack</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {['Static HTML', 'CSS', 'Vanilla JS', 'Schema.org', 'Local SEO', 'Cookie consent'].map((x) => (
                <span key={x} className="rounded-lg border border-slate-200 dark:border-white/10 px-2 py-1 text-[11px] font-mono text-slate-600 dark:text-slate-300">
                  {x}
                </span>
              ))}
            </div>
            <div className="mt-5 text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">Coverage</div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Rugby, Coventry, Leicester, Northampton, Leamington Spa, Warwick, Kenilworth, Milton Keynes.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14 rounded-3xl bg-gradient-to-br from-indigo-600 to-indigo-800 p-8 md:p-12 text-white">
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
          Need a local service site that turns searches into calls?
        </h2>
        <p className="mt-3 text-indigo-100 max-w-2xl leading-relaxed">
          I build service and area pages, trust-first design, and a clean contact path. Fixed quote, 50/50 terms,
          source handover.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/contact" className="inline-flex items-center gap-2 min-h-[48px] px-6 rounded-xl bg-white text-indigo-700 font-semibold text-sm">
            Start a project <span aria-hidden="true">→</span>
          </Link>
          <Link to="/projects" className="inline-flex items-center gap-2 min-h-[48px] px-6 rounded-xl border border-white/30 text-white font-semibold text-sm">
            See more work
          </Link>
        </div>
      </section>
    </div>
  );
};

export default JustImagine;
