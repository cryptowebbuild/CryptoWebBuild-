import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';
import RemotionContributionCard from '../components/RemotionContributionCard';

const About: React.FC = () => {
  const profileSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: 'Sagor Ahamed',
      alternateName: 'CryptoWebBuild',
      jobTitle: 'Founder & Lead Full-Stack, SEO & AI Architect',
      image: 'https://cryptowebbuild.com/hero-avatar.webp',
      description:
        'I am Sagor Ahamed, founder of CryptoWebBuild. Full-Stack Product Engineer specializing in Python, Django, PostgreSQL, React, Next.js, Technical SEO, and 24/7 RAG AI Agents.',
      url: 'https://cryptowebbuild.com/about',
      sameAs: [
        'https://x.com/CryptoWebBuildX',
        'https://t.me/cryptowebbuild',
        'https://github.com/cryptowebbuild',
        'https://www.youtube.com/@cryptowebbuild',
      ],
      knowsAbout: [
        'Python',
        'Django',
        'PostgreSQL',
        'React',
        'Next.js',
        'Technical SEO',
        'RAG AI Agents',
        'Solana & Web3',
        'Remotion Programmatic Video',
      ],
    },
  };

  const socialButtons = [
    {
      name: 'WhatsApp',
      label: '01618-138820',
      url: 'https://wa.me/8801618138820?text=Hi%20Sagor%2C%20I%20visited%20your%20About%20page%20on%20CryptoWebBuild.com!',
      color: 'bg-[#25D366]',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.125.556 4.119 1.529 5.853l-1.529 5.581 5.719-1.5c1.682.912 3.609 1.434 5.656 1.434 6.627 0 12-5.373 12-12 0-6.627-5.373-12-11.375-11.368z" />
        </svg>
      ),
    },
    {
      name: 'Telegram',
      label: '@cryptowebbuild',
      url: 'https://t.me/cryptowebbuild',
      color: 'bg-[#229ED9]',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.415-.752-.21-1.349-.321-1.298-.678.027-.184.285-.372.75-.567 2.943-1.28 4.909-2.126 5.895-2.54 2.809-1.176 3.39-1.38 3.766-1.386.082-.002.268.006.416.093z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      label: '@cryptowebbuild',
      url: 'https://github.com/cryptowebbuild',
      color: 'bg-[#24292F]',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'X (Twitter)',
      label: '@CryptoWebBuildX',
      url: 'https://x.com/CryptoWebBuildX',
      color: 'bg-slate-900 border border-white/15',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      label: '@cryptowebbuild',
      url: 'https://www.youtube.com/@cryptowebbuild',
      color: 'bg-[#FF0000]',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      ),
    },
    {
      name: 'Email',
      label: 'hello@cryptowebbuild.com',
      url: 'mailto:hello@cryptowebbuild.com',
      color: 'bg-gradient-to-r from-purple-600 to-cyan-600',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
    },
  ];

  const techArsenal = [
    { name: 'Python & Django', icon: '🐍', desc: 'REST APIs & High-Load Backend' },
    { name: 'React & Next.js', icon: '⚛️', desc: 'Sub-0.8s Edge Storefronts' },
    { name: 'TypeScript', icon: 'TS', desc: 'End-to-End Type Safety' },
    { name: 'PostgreSQL', icon: '🐘', desc: 'Indexed Relational Schemas' },
    { name: 'RAG AI & OpenClaw', icon: '🤖', desc: '24/7 Vector Support & Sales' },
    { name: 'Remotion (30k+ ⭐)', icon: '🎬', desc: 'Core Contributor (PR #12652)' },
  ];

  const stats = [
    { label: 'Years Engineering', value: '5+' },
    { label: 'Systems Shipped', value: '100+' },
    { label: 'Client Value Scaled', value: '$10M+' },
    { label: 'Avg Load Time', value: '< 0.8s' },
  ];

  return (
    <div className="container mx-auto px-6 min-h-screen">
      <SEO
        title="About Sagor Ahamed | Founder of CryptoWebBuild"
        description="Meet Sagor Ahamed, founder of CryptoWebBuild. Full-stack product engineer specialized in Python/Django, React/Next.js, Technical SEO, and 24/7 RAG AI Agents."
        keywords={[
          'Sagor Ahamed',
          'CryptoWebBuild Founder',
          'Full-Stack Python Django Developer',
          'Next.js Architect',
          'Technical SEO & AI Engineer',
        ]}
        image="https://cryptowebbuild.com/hero-avatar.webp"
        canonical="/about"
        schema={profileSchema}
      />

      {/* Hero Profile Card */}
      <div className="max-w-7xl mx-auto relative mb-24">
        <div className="rounded-[2.5rem] p-6 md:p-12 border border-purple-200 dark:border-purple-500/20 shadow-xl glass-panel relative z-10 overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="shrink-0 relative group">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden border-2 border-purple-500/30 shadow-2xl bg-[#0F172A]">
                <OptimizedImage
                  src="/hero-avatar.webp"
                  alt="Sagor Ahamed - CryptoWebBuild Founder"
                  className="w-full h-full object-cover"
                  fill={true}
                  priority={true}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="inline-block px-3 py-1 mb-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                    ● Direct Founder Access
                  </div>
                  <h2 className="text-white font-display font-bold text-2xl tracking-tight">Sagor Ahamed</h2>
                  <p className="text-slate-300 text-xs font-medium">Principal Full-Stack, SEO &amp; AI Architect</p>
                </div>
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                Principal Engineer • Zero Agency Bloat
              </div>

              <h1 className="font-display text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-5 leading-tight">
                Sagor Ahamed <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 dark:from-purple-400 dark:via-cyan-300 dark:to-blue-400">
                  Full-Stack, SEO &amp; AI Architect
                </span>
              </h1>

              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                I founded <strong className="text-gray-900 dark:text-white">CryptoWebBuild</strong> so founders never have to deal with slow WordPress templates or junior account managers. Every <strong className="text-gray-900 dark:text-white">Python/Django API, PostgreSQL schema, React/Next.js storefront, Technical SEO audit, and RAG AI agent</strong> is architected directly by me.
              </p>

              <div>
                <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">
                  Connect Directly With Sagor
                </h3>
                <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
                  {socialButtons.map((t) => (
                    <a
                      key={t.name}
                      href={t.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-white font-bold text-xs transition-transform hover:scale-[1.02] shadow-md ${t.color}`}
                    >
                      {t.icon}
                      <span>{t.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200 dark:border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
            {stats.map((t) => (
              <div key={t.label} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-1">
                  {t.value}
                </div>
                <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                  {t.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Philosophy & Agency Arsenal */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
        <div className="order-2 md:order-1">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
            Why Founders Work Directly With a{' '}
            <span className="text-purple-600 dark:text-purple-400">Principal Engineer</span>
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
            <p>
              Traditional agencies charge $10,000+ and hand your codebase to junior subcontractors using bloated themes. The result is a 5-second load time that bleeds paid ad traffic.
            </p>
            <p className="border-l-4 border-cyan-500 pl-4 italic text-gray-900 dark:text-white font-semibold">
              &ldquo;I obsess over database query times, sub-second LCP, and 1-click checkout flows because milliseconds directly determine your revenue.&rdquo;
            </p>
            <p>
              At <strong>CryptoWebBuild</strong>, you work 1-on-1 with the lead engineer. You get a live prototype in 48 hours, 100% source code ownership, and a 50% upfront / 50% upon live verification guarantee.
            </p>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="p-8 rounded-3xl glass-panel border border-gray-200 dark:border-white/10 shadow-xl">
            <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-7 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full" />
              Production Stack
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {techArsenal.map((t) => (
                <div
                  key={t.name}
                  className="p-4 bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-2xl"
                >
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-xl">
                      {t.icon === 'TS' ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-blue-600 text-white text-xs font-black">
                          TS
                        </span>
                      ) : (
                        t.icon
                      )}
                    </span>
                    <span className="font-bold text-gray-900 dark:text-white text-sm">{t.name}</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Open-Source Core Engineering Authority */}
      <div className="max-w-7xl mx-auto mb-24">
        <RemotionContributionCard />
      </div>

      {/* Bottom CTA - Harmonized for both Light Mode & Dark Mode */}
      <div className="max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden glass-panel border border-purple-200 dark:border-purple-500/30 bg-gradient-to-br from-purple-50 via-white to-cyan-50 dark:from-[#0B1120] dark:via-[#020617] dark:to-[#0F172A] p-8 md:p-14 text-center shadow-xl">
        <div className="max-w-2xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-purple-100 dark:bg-purple-500/15 border border-purple-300 dark:border-purple-500/30 text-purple-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-widest">
            50% Upfront • 50% Upon Live Verification
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
            Ready to build your platform?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
            Message Sagor Ahamed directly with your URL or project brief to get your 48-Hour Live Prototype.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 neon-button text-white font-bold rounded-xl shadow-lg"
            >
              Claim Your 48-Hour Prototype
            </Link>
            <a
              href="https://wa.me/8801618138820?text=Hi%20Sagor%2C%20I%27d%20like%20to%20discuss%20a%20project!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl transition-colors shadow-md"
            >
              WhatsApp (01618-138820)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;