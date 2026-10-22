import React, { useState, useEffect, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FloatingChatWidget from './FloatingChatWidget';

export const BrandLogo: React.FC<{ className?: string; idSuffix?: string }> = memo(
  ({ className, idSuffix = 'header' }) => (
    <svg
      viewBox="0 0 128 128"
      width="128"
      height="128"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="CryptoWebBuild Logo"
      role="img"
    >
      <defs>
        <linearGradient id={`logoGradient-${idSuffix}`} x1="0" y1="0" x2="128" y2="128" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <path
        d="M44 36C44 36 28 50 28 64C28 78 44 92 44 92"
        stroke={`url(#logoGradient-${idSuffix})`}
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M84 36C84 36 100 50 100 64C100 78 84 92 84 92"
        stroke={`url(#logoGradient-${idSuffix})`}
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M48 64H80"
        stroke={`url(#logoGradient-${idSuffix})`}
        strokeWidth="12"
        strokeLinecap="round"
        opacity="0.8"
      />
      <circle cx="28" cy="64" r="6" fill="currentColor" />
      <circle cx="100" cy="64" r="6" fill="currentColor" />
    </svg>
  )
);

const SocialIcon: React.FC<{ d: string }> = ({ d }) => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d={d} />
  </svg>
);

const SOCIAL_LINKS = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/8801618138820?text=Hi%20Sagor%2C%20I%20visited%20CryptoWebBuild.com%20and%20want%20to%20discuss%20a%20project.',
    d: 'M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.125.556 4.119 1.529 5.853l-1.529 5.581 5.719-1.5c1.682.912 3.609 1.434 5.656 1.434 6.627 0 12-5.373 12-12 0-6.627-5.373-12-11.375-11.368z',
  },
  {
    label: 'Telegram',
    href: 'https://t.me/cryptowebbuild',
    d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.48-1.02-2.4-1.62-1.06-.69-.37-1.07.23-1.68.16-.16 2.87-2.63 2.92-2.85.01-.03.01-.14-.06-.2-.06-.05-.16-.04-.23-.02-.1.02-1.72 1.1-4.86 3.22-.46.32-.88.47-1.25.46-.4-.01-1.18-.23-1.75-.38-.7-.18-1.26-.28-1.21-.6.03-.16.24-.32.65-.49 2.56-1.11 4.27-1.84 5.12-2.2 2.43-1.01 2.93-1.19 3.26-1.19.07 0 .23.02.33.09.09.08.12.19.13.29v.04z',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@cryptowebbuild',
    d: 'M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/cryptowebbuild',
    d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/CryptoWebBuildX',
    d: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    label: 'Email',
    href: 'mailto:hello@cryptowebbuild.com',
    d: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
  },
];

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Videos', path: '/videos' },
  { label: 'Blog', path: '/blog' },
  { label: 'About', path: '/about' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

/* Isolated Header & ScrollToTop so scrolling NEVER re-renders page children */
const StickyHeaderAndScrollButton: React.FC<{
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}> = memo(({ theme, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          const nextScrolled = y > 20;
          const nextShowTop = y > 500;
          setScrolled((prev) => (prev !== nextScrolled ? nextScrolled : prev));
          setShowScrollTop((prev) => (prev !== nextShowTop ? nextShowTop : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 py-3.5">
        <div className="container mx-auto px-4 md:px-6">
          <nav
            className={`mx-auto max-w-7xl flex items-center justify-between gap-8 px-5 py-3 rounded-2xl transition-shadow duration-150 relative z-50 gpu-accelerated ${
              scrolled
                ? 'bg-white dark:bg-[#0f172a] shadow-md border border-slate-200/90 dark:border-white/10'
                : 'bg-white/95 dark:bg-[#0f172a]/95 border border-slate-200/60 dark:border-white/5'
            }`}
            aria-label="Primary Navigation"
          >
            <Link to="/" className="flex items-center gap-3 group whitespace-nowrap shrink-0" aria-label="CryptoWebBuild Home">
              <div aria-hidden="true">
                <BrandLogo className="w-9 h-9 text-slate-900 dark:text-white" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                CryptoWebBuild
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-4 py-2 text-sm font-semibold rounded-xl transition-colors ${
                      isActive
                        ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="w-10 h-10 flex items-center justify-center rounded-full text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {theme === 'dark' ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>

              <Link
                to="/contact"
                className="hidden md:inline-flex items-center justify-center px-5 py-2.5 neon-button text-white font-bold rounded-xl text-sm"
              >
                Start Project
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-900 dark:text-white focus:outline-none bg-slate-100 dark:bg-white/10 rounded-lg"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                <div className="w-5 h-4 flex flex-col justify-between relative">
                  <span
                    className={`h-0.5 bg-current w-full rounded-full transition-transform duration-200 ${
                      mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                    }`}
                  />
                  <span
                    className={`h-0.5 bg-current w-full rounded-full transition-opacity duration-200 ${
                      mobileMenuOpen ? 'opacity-0' : ''
                    }`}
                  />
                  <span
                    className={`h-0.5 bg-current w-full rounded-full transition-transform duration-200 ${
                      mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </nav>

          {/* Mobile Dropdown */}
          <div
            className={`lg:hidden absolute top-full left-0 right-0 p-4 transition-all duration-200 z-40 origin-top ${
              mobileMenuOpen
                ? 'opacity-100 scale-y-100 translate-y-0'
                : 'invisible opacity-0 scale-y-95 -translate-y-2 pointer-events-none'
            }`}
          >
            <div className="bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 shadow-2xl rounded-3xl p-4 overflow-hidden">
              <div className="flex flex-col space-y-1">
                {NAV_LINKS.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-3 text-base font-semibold rounded-xl transition-colors ${
                      location.pathname === item.path
                        ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200 dark:border-white/10">
                <div className="flex justify-center gap-4 mb-4">
                  {SOCIAL_LINKS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors p-2"
                      aria-label={item.label}
                    >
                      <SocialIcon d={item.d} />
                    </a>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="flex items-center justify-center w-full px-6 py-3.5 neon-button text-white font-bold rounded-xl text-base"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Start Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-6 z-40 p-3.5 rounded-full bg-purple-600 text-white shadow-lg shadow-purple-500/30 transition-all duration-200 hover:scale-110 hover:bg-purple-500 focus:outline-none ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </>
  );
});

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-screen flex flex-col relative bg-[#F8FAFC] dark:bg-[#020617] text-slate-900 dark:text-slate-50 selection:bg-purple-500 selection:text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-6 focus:py-3 focus:bg-purple-600 focus:text-white focus:rounded-xl focus:font-bold focus:shadow-2xl"
      >
        Skip to content
      </a>

      {/* Zero-Repaint Hardware-Accelerated Ambient Lighting & Subtle Grid */}
      <div
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
        style={{
          backgroundImage: `
            radial-gradient(circle at 85% 12%, rgba(124, 58, 237, 0.09) 0%, transparent 45%),
            radial-gradient(circle at 15% 85%, rgba(6, 182, 212, 0.08) 0%, transparent 45%),
            linear-gradient(var(--grid-color) 1px, transparent 1px),
            linear-gradient(to right, var(--grid-color) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 100% 100%, 64px 64px, 64px 64px',
        }}
      />

      <StickyHeaderAndScrollButton theme={theme} toggleTheme={toggleTheme} />

      <main id="main-content" tabIndex={-1} className="relative z-10 flex-grow pt-24 md:pt-32 pb-24 focus:outline-none">
        {children}
      </main>

      <FloatingChatWidget />

      {/* Footer */}
      <footer className="relative z-10 mt-24 bg-white dark:bg-[#0f172a] border-t border-slate-200 dark:border-white/5">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-5">
              <Link to="/" className="flex items-center gap-3">
                <BrandLogo className="w-8 h-8 text-slate-900 dark:text-white" idSuffix="footer" />
                <span className="font-display font-bold text-2xl text-slate-900 dark:text-white">CryptoWebBuild</span>
              </Link>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed max-w-sm">
                Principal Full-Stack Web Engineering (Python/Django &amp; Next.js), 100/100 Technical SEO, and 24/7 RAG AI Systems. Built directly by Sagor Ahamed.
              </p>
              <div className="flex flex-wrap gap-2.5 pt-1">
                {SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 flex items-center justify-center hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-colors"
                    aria-label={item.label}
                  >
                    <SocialIcon d={item.d} />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <h3 className="font-display font-bold text-slate-900 dark:text-white mb-5 text-xs uppercase tracking-widest">
                Navigation
              </h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm font-medium">
                {NAV_LINKS.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h3 className="font-display font-bold text-slate-900 dark:text-white mb-5 text-xs uppercase tracking-widest">
                Direct Contact
              </h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm font-medium">
                <li>
                  <a
                    href="https://wa.me/8801618138820"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-semibold text-emerald-600 dark:text-emerald-400"
                  >
                    WhatsApp: 01618-138820
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/cryptowebbuild"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    Telegram: @cryptowebbuild
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@cryptowebbuild.com"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    hello@cryptowebbuild.com
                  </a>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    Terms &amp; 50/50 Guarantee
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4">
              <h3 className="font-display font-bold text-slate-900 dark:text-white mb-5 text-xs uppercase tracking-widest">
                Engineering Guides
              </h3>
              <ul className="grid grid-cols-1 gap-2.5 text-slate-600 dark:text-slate-400 text-sm font-medium">
                <li>
                  <Link
                    to="/blog/local-business-website-seo-checklist"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-cyan-500">★</span> Local Business Website SEO Checklist
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog/hidden-cost-of-slow-websites"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    The Hidden Cost of Slow Websites
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog/openclaw-ai-workflow-automation"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    OpenClaw AI Workflow Automation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog/ai-seo-generative-engine-optimization-2026"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    AI SEO &amp; Generative Engine Optimization
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog/static-vs-dynamic-website"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    Static vs Dynamic Architecture
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog/best-website-developer"
                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    Hiring a Senior Full-Stack Developer
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
              © {new Date().getFullYear()} CryptoWebBuild • Engineered by Sagor Ahamed.
            </p>
            <div className="flex flex-wrap gap-6 text-sm font-bold text-slate-600 dark:text-slate-400">
              <a
                href="https://github.com/cryptowebbuild"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.youtube.com/@cryptowebbuild"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                YouTube
              </a>
              <a
                href="https://x.com/CryptoWebBuildX"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                X (Twitter)
              </a>
              <a
                href="https://wa.me/8801618138820"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;