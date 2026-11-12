import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://cryptowebbuild.com';
const DIST_DIR = path.resolve('dist');

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function safeJsonLd(obj) {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

const MONTH_MAP = {
  jan: '01', feb: '02', mar: '03', apr: '04', may: '05', jun: '06',
  jul: '07', aug: '08', sep: '09', oct: '10', nov: '11', dec: '12',
};

function toIsoDate(dateStr = '') {
  const s = String(dateStr).trim();
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s.slice(0, 10);
  const m = s.match(/^([A-Za-z]{3})\s+(\d{1,2}),?\s+(\d{4})$/);
  if (m) {
    const mon = MONTH_MAP[m[1].toLowerCase()];
    if (mon) return `${m[3]}-${mon}-${m[2].padStart(2, '0')}`;
  }
  const ts = Date.parse(`${s} UTC`);
  if (!Number.isNaN(ts)) return new Date(ts).toISOString().slice(0, 10);
  return '2026-11-10';
}

// Read static routes & blog post slugs
const staticRoutes = [
  '/',
  '/about',
  '/services',
  '/services/web3-development',
  '/services/crypto-growth',
  '/services/ai-automation',
  '/services/ecommerce-development-bangladesh',
  '/fcommerce',
  '/projects',
  '/blog',
  '/contact',
  '/thank-you',
  '/404',
  '/faq',
  '/privacy',
  '/terms',
  // Case Studies
  '/tokenlaunch',
  '/memecoinsite',
  '/shopfast',
  '/autogithub',
  '/gigasolana',
  '/newsphotocard',
  '/nexusweb3',
  '/auracommerce',
  '/apexagency',
  '/vanguardsaas',
  '/solananft',
  '/clickrunclaw',
];

const SERVICE_LINKS = [
  { href: '/services/ecommerce-development-bangladesh', label: '1-Click E-Commerce Development' },
  { href: '/fcommerce', label: 'Bangladesh 1-Click F-Commerce Engine' },
  { href: '/services/web3-development', label: 'Full-Stack Web & Web3 Development' },
  { href: '/services/crypto-growth', label: '100/100 Technical SEO & Growth' },
  { href: '/services/ai-automation', label: 'RAG AI Agents & Automation' },
];

const CASE_STUDY_LINKS = [
  { href: '/auracommerce', label: 'Edel Bangladesh Luxury Storefront' },
  { href: '/clickrunclaw', label: 'ClickRunClaw 24/7 Cloud SaaS' },
  { href: '/shopfast', label: 'ShopFast Headless Storefront' },
  { href: '/vanguardsaas', label: 'Vanguard Python/Django Financial SaaS' },
  { href: '/autogithub', label: 'AutoGit Edge Deployer' },
  { href: '/tokenlaunch', label: 'SolNova Presale Protocol' },
  { href: '/apexagency', label: 'Apex Digital Agency B2B Funnel' },
  { href: '/nexusweb3', label: 'Nexus Web3 Staking Dashboard' },
  { href: '/solananft', label: 'SolMint Solana NFT Marketplace' },
  { href: '/newsphotocard', label: 'News Photo Card Canvas Studio' },
  { href: '/gigasolana', label: '$GIGA Solana Portal' },
  { href: '/memecoinsite', label: 'BNB Quack Inu Gamified Portal' },
];

// Extract blog posts cleanly via deterministic JS evaluation (handles quotes/newlines safely)
const blogPostsPath = path.resolve('data/blogPosts.ts');
let blogPosts = [];

try {
  const content = fs.readFileSync(blogPostsPath, 'utf-8');
  const jsCode =
    content
      .replace(/export\s+interface\s+BlogPost\s*\{[\s\S]*?\}/, '')
      .replace(/export\s+const\s+blogPosts\s*:\s*BlogPost\[\]\s*=/, 'const blogPosts =') +
    '\nreturn blogPosts;';
  const parsedPosts = new Function(jsCode)();
  if (!Array.isArray(parsedPosts) || parsedPosts.length === 0) {
    throw new Error('Parsed blogPosts array is empty');
  }
  blogPosts = parsedPosts.map((p) => ({
    id: p.id || p.slug,
    slug: p.slug,
    title: p.title || '',
    description: p.excerpt || '',
    date: p.date || '2026-11-10',
    category: p.category || 'Engineering',
    image: p.image || `${BASE_URL}/hero-avatar.webp`,
    keywords: Array.isArray(p.keywords) ? p.keywords : [],
  }));
  console.log(`✅ SSG Parser extracted ${blogPosts.length} blog posts cleanly from data/blogPosts.ts`);
} catch (e) {
  console.error('❌ Could not parse blog posts for SSG:', e.message);
  process.exit(1);
}

// Route metadata dictionary for pre-rendering
const routeMeta = {
  '/': {
    title: 'CryptoWebBuild | Sub-Second Web & 100/100 SEO',
    description: 'Sub-second Next.js & Python websites, 1-click E-Commerce checkouts, and 100/100 SEO by Sagor Ahamed. Pay 50% only after live testing.',
    h1: 'Sub-Second Websites & 1-Click Stores That Multiply Revenue.',
  },
  '/about': {
    title: 'About Sagor Ahamed | Lead Full-Stack Architect',
    description: 'Meet Sagor Ahamed, Principal Full-Stack Engineer behind CryptoWebBuild. Building 0.4s Next.js and Python/Django platforms with 50/50 terms.',
    h1: 'Direct Principal Engineering by Sagor Ahamed',
  },
  '/services': {
    title: 'Engineering Services | CryptoWebBuild',
    description: 'Sub-second web development, 100/100 Technical SEO, and 24/7 autonomous WhatsApp automation systems engineered by Sagor Ahamed.',
    h1: 'Production Engineering Services & Architectures',
  },
  '/services/ecommerce-development-bangladesh': {
    title: '1-Click E-Commerce Website Development | CryptoWebBuild',
    description: 'Custom 0.4s Next.js e-commerce websites with 1-click bKash/Stripe checkout, Steadfast courier sync, and Server-Side Meta CAPI.',
    h1: '1-Click E-Commerce Website Development & Courier Automation',
  },
  '/fcommerce': {
    title: '১-ক্লিক ওয়েবসাইট ও কুরিয়ার অটোমেশন | CryptoWebBuild',
    description: 'ফেসবুক ইনবক্সের ঝামেলা বাদ দিয়ে ০.৪ সেকেন্ড গতির নেক্সট.জেএস ওয়েবসাইট, ১-ক্লিক বিকাশ/ক্যাশ অন ডেলিভারি এবং স্টেডফাস্ট/পাঠাও অটোমেশন।',
    h1: 'ফেসবুক ইনবক্সের প্যারা বাদ দিয়ে শুরু করুন ১-ক্লিক অর্ডার ওয়েবসাইট',
  },
  '/blog': {
    title: 'Web Engineering, SEO & AI Insights | CryptoWebBuild',
    description: 'Expert guides on full-stack Next.js & Python web architecture, Technical SEO, 24/7 AI automation workflows, and sub-second e-commerce engineering.',
    h1: 'Insights from the Codebase: Engineering, SEO & AI Guides',
  },
  '/memecoinsite': {
    title: 'Meme Coin Website Design | BNB Quack Inu Case Study',
    description: 'Case study: Engineering a gamified, sub-second Web3 meme coin landing page on BNB Chain with spin-to-win utility, animations, and mobile-first speed.',
    h1: 'BNB Quack Inu — Gamified Viral Web3 Launch Case Study',
  },
  '/gigasolana': {
    title: 'Viral Meme Coin Design | $GIGA Solana Case Study',
    description: 'Case study: Building a cult-following Solana token portal with an interactive Moon Math market-cap calculator, neon dark mode, and sub-second routing.',
    h1: '$GIGA Solana — Cult Brand & Moon Math Portal Case Study',
  },
  '/newsphotocard': {
    title: 'News Photo Card Generator | Client-Side Canvas SaaS',
    description: 'Case study: Building a zero-server React and HTML5 Canvas social media news card generator for digital publishers with instant client-side export.',
    h1: 'News Photo Card Studio — Client-Side Canvas SaaS Case Study',
  },
  '/nexusweb3': {
    title: 'Nexus Web3 Protocol | DeFi Staking Dashboard UI',
    description: 'Case study: Designing and engineering a sub-second Web3 staking and DeFi analytics dashboard with real-time on-chain wallet telemetry and multi-chain UI.',
    h1: 'Nexus Web3 Protocol — DeFi Staking Dashboard Case Study',
  },
  '/apexagency': {
    title: 'Apex Digital Agency | B2B Technical SEO Case Study',
    description: 'Case study: Engineering a 100/100 Google PageSpeed B2B corporate portfolio and programmatic Schema.org SEO funnel that doubled inbound enterprise leads.',
    h1: 'Apex Digital Agency — 100/100 PageSpeed B2B Funnel Case Study',
  },
  '/solananft': {
    title: 'SolMint | High-Performance Solana NFT Marketplace',
    description: 'Case study: Engineering a sub-0.6s Solana NFT collectibles marketplace with optimistic UI updates, edge image optimization, and seamless wallet signing.',
    h1: 'SolMint — Sub-Second Solana NFT Marketplace Case Study',
  },
  '/thank-you': {
    title: 'Message Received — Thank You | CryptoWebBuild',
    description: 'Thank you for contacting CryptoWebBuild. Principal Full-Stack Engineer Sagor Ahamed has received your brief and will respond within 24 hours.',
    h1: 'Inquiry Received — Direct Response Within 24 Hours',
    noIndex: true,
  },
  '/404': {
    title: '404 - Page Not Found | CryptoWebBuild',
    description: 'The requested page does not exist or has moved. Explore CryptoWebBuild full-stack web engineering, Technical SEO, and AI automation services.',
    h1: '404 — Page Not Found',
    noIndex: true,
  },
  '/services/ai-automation': {
    title: 'AI Automation & 24/7 Agent Systems | CryptoWebBuild',
    description: 'Custom RAG AI agents and autonomous WhatsApp/Telegram order pipelines deployed with zero vendor lock-in and high concurrency.',
    h1: 'Autonomous AI Agents & Business Workflow Automation',
  },
  '/services/crypto-growth': {
    title: '100/100 Technical SEO & Growth | CryptoWebBuild',
    description: 'Core Web Vitals domination, programmatic Schema.org JSON-LD, and sub-second speed optimization that double organic search rankings.',
    h1: 'Technical SEO Optimization & Google PageSpeed Domination',
  },
  '/services/web3-development': {
    title: 'Web3 & High-Performance Web Apps | CryptoWebBuild',
    description: 'High-speed React & Next.js full-stack applications with sub-second asset loads, wallet bridges, and rock-solid smart contract UI.',
    h1: 'Full-Stack Web3 & Enterprise Web Application Engineering',
  },
  '/projects': {
    title: 'Verified Case Studies & Portfolio | CryptoWebBuild',
    description: 'Inspect live production platforms: Edel Bangladesh, ClickRunClaw (7,000+ users), ShopFast, Vanguard SaaS, and AutoGit DevOps.',
    h1: 'Shipped Systems & Verified Production Deployments',
  },
  '/contact': {
    title: 'Claim 48-Hour Prototype | CryptoWebBuild',
    description: 'Start your project with Principal Engineer Sagor Ahamed. 48-hour live staging prototype. Pay 50% only after live testing.',
    h1: 'Claim Your 48-Hour Live Staging Prototype',
  },
  '/faq': {
    title: 'Frequently Asked Questions | CryptoWebBuild',
    description: 'Answers on 50/50 milestone payments, 48-hour prototypes, 100% source code handover, and sub-second Next.js architecture.',
    h1: 'Frequently Asked Questions & 50/50 Milestone Terms',
  },
  '/privacy': {
    title: 'Privacy Policy | CryptoWebBuild',
    description: 'CryptoWebBuild privacy practices, zero third-party ad tracking, data handling policies, and strict client code confidentiality standards.',
    h1: 'Privacy Policy & Data Security',
  },
  '/terms': {
    title: 'Terms of Service | CryptoWebBuild',
    description: 'CryptoWebBuild service agreement, 50/50 payment milestones, and 100% intellectual property code ownership handover.',
    h1: 'Terms of Service & Engagement Terms',
  },
  '/clickrunclaw': {
    title: 'ClickRunClaw Case Study | 7,000+ Active Users SaaS',
    description: 'How Sagor Ahamed architected ClickRunClaw.com — a 24/7 managed cloud runtime for WhatsApp & web automation with 99.98% uptime.',
    h1: 'ClickRunClaw: Managed 24/7 Cloud Engine for 7,000+ Users',
  },
  '/auracommerce': {
    title: 'Edel Bangladesh Case Study | 1-Click Luxury Store',
    description: 'How Sagor Ahamed transformed Edel Bangladesh from manual chat chaos into a 0.4s storefront with 1-click bKash and +240% sales.',
    h1: 'Edel Bangladesh: 1-Click Luxury Storefront & Courier Sync',
  },
  '/shopfast': {
    title: 'ShopFast Case Study | 100/100 Speed Storefront',
    description: 'Migrating legacy WooCommerce to a sub-second Next.js storefront, cutting mobile load time from 4.8s to 0.4s with 1-click checkout.',
    h1: 'ShopFast: Sub-Second Headless E-Commerce Storefront',
  },
  '/vanguardsaas': {
    title: 'Vanguard SaaS Case Study | Python Django Analytics',
    description: 'High-concurrency B2B analytics platform querying 10M+ rows with <50ms API response built with Python, Django REST, and PostgreSQL.',
    h1: 'Vanguard: High-Concurrency Python/Django Analytics SaaS',
  },
  '/autogithub': {
    title: 'AutoGit Case Study | Edge DevOps Engine',
    description: 'Client-side DevOps engine deploying repositories directly from browser via GitHub REST API and Cloudflare Edge caching.',
    h1: 'AutoGit: Zero-CLI Browser DevOps & Edge Deployment Engine',
  },
  '/tokenlaunch': {
    title: 'SolNova Protocol Case Study | Solana Presale Hub',
    description: 'Real-time Solana presale aggregation dashboard with Phantom/Solflare wallet sync, live RPC telemetry, and on-chain verification.',
    h1: 'SolNova: Real-Time Solana Presale & Staking Dashboard',
  },
};

const runSSG = () => {
  if (!fs.existsSync(DIST_DIR)) {
    console.error('❌ dist directory not found. Please run vite build first.');
    process.exit(1);
  }

  const baseHtmlPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(baseHtmlPath)) {
    console.error('❌ dist/index.html not found.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(baseHtmlPath, 'utf-8');

  // Combine static routes and blog routes
  const allRoutes = [...staticRoutes];
  blogPosts.forEach((post) => {
    allRoutes.push(`/blog/${post.slug}`);
    
    // Intelligent SEO Title Clamping (Max 60 chars, no clipped words)
    let smartTitle = post.title;
    if (smartTitle.length + 18 <= 60) {
      smartTitle = `${smartTitle} | CryptoWebBuild`;
    } else if (smartTitle.length > 60) {
      const cutoff = smartTitle.substring(0, 57);
      const lastSpace = cutoff.lastIndexOf(' ');
      smartTitle = (lastSpace > 35 ? cutoff.substring(0, lastSpace) : cutoff) + '...';
    }

    // Intelligent SEO Meta Description Clamping (Max 155 chars, no clipped words)
    let smartDesc = (post.description || 'In-depth guide by Sagor Ahamed on sub-second web architecture, technical SEO, and conversion engineering.').trim();
    if (smartDesc.length > 155) {
      const cutoff = smartDesc.substring(0, 152);
      const lastSpace = cutoff.lastIndexOf(' ');
      smartDesc = (lastSpace > 110 ? cutoff.substring(0, lastSpace) : cutoff) + '...';
    }

    routeMeta[`/blog/${post.slug}`] = {
      title: smartTitle,
      description: smartDesc,
      h1: post.title,
      isArticle: true,
    };
  });

  console.log(`🚀 Pre-rendering static HTML for ${allRoutes.length} routes...`);

  let preRenderedCount = 0;

  allRoutes.forEach((route) => {
    const meta = routeMeta[route] || {
      title: 'CryptoWebBuild | Sub-Second Web & 100/100 SEO',
      description: 'Sub-second Next.js & Python websites, 1-click E-Commerce checkouts, and 100/100 SEO by Sagor Ahamed. Pay 50% only after live testing.',
      h1: 'Sub-Second Web & Full-Stack Engineering Studio',
    };

    // Ensure title <= 60 chars
    let pageTitle = meta.title;
    if (pageTitle.length > 60) {
      pageTitle = pageTitle.substring(0, 57) + '...';
    }

    // Ensure description is 120-155 chars
    let pageDesc = meta.description;
    if (pageDesc.length > 155) {
      pageDesc = pageDesc.substring(0, 152) + '...';
    }

    const canonicalUrl = `${BASE_URL}${route === '/' ? '/' : route}`;
    const safeTitle = escapeHtml(pageTitle);
    const safeDesc = escapeHtml(pageDesc);
    const safeH1 = escapeHtml(meta.h1 || pageTitle);

    const isBlogIndex = route === '/blog';
    const isBlogPost = route.startsWith('/blog/') && route !== '/blog';
    const currentPostIndex = isBlogPost ? blogPosts.findIndex((p) => `/blog/${p.slug}` === route) : -1;
    const matchedPost = currentPostIndex >= 0 ? blogPosts[currentPostIndex] : null;

    let extraLinksSection = '';
    if (isBlogIndex) {
      extraLinksSection = `
        <section class="mt-10 pt-8 border-t border-slate-200 dark:border-white/10">
          <h2 class="text-lg font-bold text-slate-900 dark:text-white mb-4">All Engineering, SEO &amp; AI Guides (${blogPosts.length})</h2>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            ${blogPosts.map((p) => `<li><a href="/blog/${escapeHtml(p.slug)}" class="text-indigo-600 dark:text-indigo-400 hover:underline">${escapeHtml(p.title)}</a></li>`).join('\n            ')}
          </ul>
        </section>`;
    } else if (isBlogPost && blogPosts.length > 1) {
      const relatedPosts = [];
      for (let offset = 1; offset <= Math.min(4, blogPosts.length - 1); offset++) {
        relatedPosts.push(blogPosts[(currentPostIndex + offset) % blogPosts.length]);
      }
      extraLinksSection = `
        <section class="mt-10 pt-8 border-t border-slate-200 dark:border-white/10">
          <h2 class="text-lg font-bold text-slate-900 dark:text-white mb-4">Related Engineering Guides</h2>
          <ul class="space-y-2 text-sm">
            ${relatedPosts.map((p) => `<li><a href="/blog/${escapeHtml(p.slug)}" class="text-indigo-600 dark:text-indigo-400 hover:underline">${escapeHtml(p.title)}</a></li>`).join('\n            ')}
            <li><a href="/blog" class="font-bold hover:underline">Browse All ${blogPosts.length} Engineering Articles →</a></li>
          </ul>
        </section>`;
    } else if (route === '/projects') {
      extraLinksSection = `
        <section class="mt-10 pt-8 border-t border-slate-200 dark:border-white/10">
          <h2 class="text-lg font-bold text-slate-900 dark:text-white mb-4">Verified Production Case Studies</h2>
          <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            ${CASE_STUDY_LINKS.map((c) => `<li><a href="${c.href}" class="text-indigo-600 dark:text-indigo-400 hover:underline">${escapeHtml(c.label)}</a></li>`).join('\n            ')}
          </ul>
        </section>`;
    } else if (route === '/' || route === '/services') {
      const recentPosts = blogPosts.slice(0, 6);
      extraLinksSection = `
        <section class="mt-10 pt-8 border-t border-slate-200 dark:border-white/10 space-y-6">
          <div>
            <h2 class="text-lg font-bold text-slate-900 dark:text-white mb-3">Core Engineering Tracks</h2>
            <ul class="flex flex-wrap gap-4 text-sm">
              ${SERVICE_LINKS.map((s) => `<li><a href="${s.href}" class="text-indigo-600 dark:text-indigo-400 hover:underline">${escapeHtml(s.label)}</a></li>`).join('\n              ')}
            </ul>
          </div>
          <div>
            <h2 class="text-lg font-bold text-slate-900 dark:text-white mb-3">Featured Case Studies</h2>
            <ul class="flex flex-wrap gap-4 text-sm">
              ${CASE_STUDY_LINKS.map((c) => `<li><a href="${c.href}" class="hover:underline">${escapeHtml(c.label)}</a></li>`).join('\n              ')}
            </ul>
          </div>
          <div>
            <h2 class="text-lg font-bold text-slate-900 dark:text-white mb-3">Latest Engineering Guides</h2>
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              ${recentPosts.map((p) => `<li><a href="/blog/${escapeHtml(p.slug)}" class="hover:underline">${escapeHtml(p.title)}</a></li>`).join('\n              ')}
            </ul>
          </div>
        </section>`;
    }

    // Generate crawlable static pre-render shell inside <div id="root">
    const crawlableShell = `
      <div id="ssg-prerender" class="max-w-7xl mx-auto px-6 py-12">
        <header class="border-b border-slate-200 dark:border-white/10 pb-6 mb-8 flex flex-wrap items-center justify-between gap-4">
          <a href="/" class="font-display font-black text-2xl tracking-tight text-slate-900 dark:text-white">
            CryptoWebBuild
          </a>
          <nav class="flex flex-wrap items-center gap-4 text-xs font-semibold" aria-label="Main Navigation">
            <a href="/services" class="hover:underline">Services</a>
            <a href="/services/web3-development" class="hover:underline">Full-Stack &amp; Web3</a>
            <a href="/services/crypto-growth" class="hover:underline">Technical SEO</a>
            <a href="/services/ai-automation" class="hover:underline">AI Automation</a>
            <a href="/services/ecommerce-development-bangladesh" class="hover:underline">1-Click E-Commerce</a>
            <a href="/fcommerce" class="hover:underline">BD F-Commerce</a>
            <a href="/projects" class="hover:underline">Work</a>
            <a href="/blog" class="hover:underline">Blog</a>
            <a href="/about" class="hover:underline">About</a>
            <a href="/contact" class="hover:underline">Contact</a>
          </nav>
        </header>
        <main>
          <article class="space-y-6">
            <h1 class="font-display text-3xl sm:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              ${safeH1}
            </h1>
            <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
              ${safeDesc}
            </p>
            <div class="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-4 text-xs">
              <a href="https://wa.me/8801618138820" class="font-bold underline">WhatsApp: 01618-138820</a>
              <span>·</span>
              <a href="https://cal.com/cryptowebbuilddev/15min" class="font-bold underline">Book 15-Min Strategy Call</a>
              <span>·</span>
              <a href="/contact" class="font-bold underline">Claim 48-Hour Staging Prototype (50/50 Terms)</a>
            </div>
            ${extraLinksSection}
          </article>
        </main>
        <footer class="mt-16 pt-8 border-t border-slate-200 dark:border-white/10 text-xs text-slate-500 flex flex-wrap justify-between gap-4">
          <p>© 2026 CryptoWebBuild. Principal Full-Stack Engineering by Sagor Ahamed.</p>
          <div class="flex flex-wrap gap-4">
            <a href="/services">Services</a>
            <a href="/projects">Case Studies</a>
            <a href="/blog">Blog</a>
            <a href="/about">About</a>
            <a href="/faq">FAQ</a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/sitemap.xml">Sitemap</a>
          </div>
        </footer>
      </div>
    `;

    // Replace Title, Description, Canonical, and Root Content in base HTML
    let routeHtml = baseHtml;

    // Replace <title>
    routeHtml = routeHtml.replace(/<title>.*?<\/title>/i, `<title>${pageTitle}</title>`);

    // Replace meta description
    routeHtml = routeHtml.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
      `<meta name="description" content="${pageDesc}" />`
    );

    // Injected Canonical URL
    if (routeHtml.includes('<link rel="canonical"')) {
      routeHtml = routeHtml.replace(
        /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
        `<link rel="canonical" href="${canonicalUrl}" />`
      );
    } else {
      routeHtml = routeHtml.replace(
        '</head>',
        `  <link rel="canonical" href="${canonicalUrl}" />\n  </head>`
      );
    }

    // Injected OpenGraph / Twitter tags
    routeHtml = routeHtml.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:title" content="${pageTitle}" />`
    );
    routeHtml = routeHtml.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:description" content="${pageDesc}" />`
    );
    routeHtml = routeHtml.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:url" content="${canonicalUrl}" />`
    );

    // Inject static crawlable shell inside #root
    routeHtml = routeHtml.replace('<div id="root"></div>', `<div id="root">${crawlableShell}</div>`);

    // Enforce HTML-escaped metadata with data-rh="true" so react-helmet-async reconciles without DOM duplicates
    routeHtml = routeHtml
      .replace(/<title>[\s\S]*?<\/title>/i, `<title>${safeTitle}</title>`)
      .replace(/<meta\s+name="description"\s+content="[\s\S]*?"\s*\/?>/i, `<meta data-rh="true" name="description" content="${safeDesc}" />`)
      .replace(/<meta\s+property="og:type"\s+content="([^"]*)"\s*\/?>/i, `<meta data-rh="true" property="og:type" content="$1" />`)
      .replace(/<meta\s+property="og:site_name"\s+content="([^"]*)"\s*\/?>/i, `<meta data-rh="true" property="og:site_name" content="$1" />`)
      .replace(/<meta\s+property="og:image"\s+content="([^"]*)"\s*\/?>/i, `<meta data-rh="true" property="og:image" content="$1" />`)
      .replace(/<meta\s+name="twitter:card"\s+content="([^"]*)"\s*\/?>/i, `<meta data-rh="true" name="twitter:card" content="$1" />`)
      .replace(/<meta\s+name="twitter:site"\s+content="([^"]*)"\s*\/?>/i, `<meta data-rh="true" name="twitter:site" content="$1" />`)
      .replace(/<meta\s+name="twitter:image"\s+content="([^"]*)"\s*\/?>/i, `<meta data-rh="true" name="twitter:image" content="$1" />`)
      .replace(/<meta\s+property="og:title"\s+content="[\s\S]*?"\s*\/?>/i, `<meta data-rh="true" property="og:title" content="${safeTitle}" />`)
      .replace(/<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/?>/i, `<meta data-rh="true" property="og:description" content="${safeDesc}" />`)
      .replace(/<meta\s+property="og:url"\s+content="[\s\S]*?"\s*\/?>/i, `<meta data-rh="true" property="og:url" content="${canonicalUrl}" />`)
      .replace(/<meta\s+name="twitter:title"\s+content="[\s\S]*?"\s*\/?>/i, `<meta data-rh="true" name="twitter:title" content="${safeTitle}" />`)
      .replace(/<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/?>/i, `<meta data-rh="true" name="twitter:description" content="${safeDesc}" />`);

    if (meta.noIndex) {
      routeHtml = routeHtml.replace(/<link\s+[^>]*rel="canonical"[\s\S]*?\/>/gi, '');
      routeHtml = routeHtml.replace(/<meta\s+[^>]*name="robots"[\s\S]*?\/>/gi, '');
      routeHtml = routeHtml.replace(/<\/head>/i, `  <meta data-rh="true" name="robots" content="noindex, nofollow" />\n</head>`);
    } else {
      const hasCanon = /<link\s+[^>]*rel="canonical"/i.test(routeHtml);
      if (hasCanon) {
        routeHtml = routeHtml.replace(/<link\s+[^>]*rel="canonical"\s+href="[\s\S]*?"\s*\/?>/i, `<link data-rh="true" rel="canonical" href="${canonicalUrl}" />`);
      } else {
        routeHtml = routeHtml.replace(/<\/head>/i, `  <link data-rh="true" rel="canonical" href="${canonicalUrl}" />\n</head>`);
      }
    }

    if (!meta.noIndex) {
      const orgId = `${BASE_URL}/#organization`;
      const personId = `${BASE_URL}/#founder`;
      const siteId = `${BASE_URL}/#website`;
      const baseEntities = [
        {
          '@type': 'Person',
          '@id': personId,
          name: 'Sagor Ahamed',
          jobTitle: 'Founder & Principal Full-Stack Engineer',
          url: `${BASE_URL}/about`,
          sameAs: [
            'https://github.com/cryptowebbuild',
            'https://x.com/cryptowebbuild',
            'https://t.me/cryptowebbuild',
          ],
          worksFor: { '@id': orgId },
        },
        {
          '@type': 'ProfessionalService',
          '@id': orgId,
          name: 'CryptoWebBuild',
          url: `${BASE_URL}/`,
          logo: `${BASE_URL}/hero-avatar.webp`,
          image: `${BASE_URL}/hero-avatar.webp`,
          founder: { '@id': personId },
          email: 'hello@cryptowebbuild.com',
          telephone: '+8801618138820',
          priceRange: '$$$',
          areaServed: ['Worldwide', 'Bangladesh', 'United States', 'United Kingdom', 'United Arab Emirates'],
          sameAs: [
            'https://github.com/cryptowebbuild',
            'https://x.com/cryptowebbuild',
            'https://t.me/cryptowebbuild',
          ],
        },
        {
          '@type': 'WebSite',
          '@id': siteId,
          url: `${BASE_URL}/`,
          name: 'CryptoWebBuild',
          publisher: { '@id': orgId },
          inLanguage: route === '/fcommerce' ? ['bn', 'en'] : ['en'],
        },
      ];

      let pageEntity;
      const isCaseStudyRoute = CASE_STUDY_LINKS.some((c) => c.href === route);
      if (isBlogPost && matchedPost) {
        const postImage = matchedPost.image && matchedPost.image.startsWith('http')
          ? matchedPost.image
          : `${BASE_URL}${matchedPost.image && matchedPost.image.startsWith('/') ? matchedPost.image : '/hero-avatar.webp'}`;
        pageEntity = {
          '@type': 'BlogPosting',
          '@id': `${canonicalUrl}#article`,
          headline: matchedPost.title,
          description: pageDesc,
          datePublished: toIsoDate(matchedPost.date),
          dateModified: toIsoDate(matchedPost.date),
          image: postImage,
          url: canonicalUrl,
          mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
          author: { '@id': personId },
          publisher: { '@id': orgId },
          articleSection: matchedPost.category,
          keywords: matchedPost.keywords.join(', '),
        };
      } else if (isCaseStudyRoute) {
        pageEntity = {
          '@type': 'Article',
          '@id': `${canonicalUrl}#casestudy`,
          headline: meta.h1 || pageTitle,
          description: pageDesc,
          url: canonicalUrl,
          image: `${BASE_URL}/hero-avatar.webp`,
          mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
          author: { '@id': personId },
          publisher: { '@id': orgId },
        };
      } else if (route.startsWith('/services') || route === '/fcommerce') {
        pageEntity = {
          '@type': 'Service',
          '@id': `${canonicalUrl}#service`,
          name: meta.h1 || pageTitle,
          description: pageDesc,
          url: canonicalUrl,
          provider: { '@id': orgId },
          areaServed: ['Worldwide', 'Bangladesh', 'United States'],
        };
      } else if (route === '/blog') {
        pageEntity = {
          '@type': 'Blog',
          '@id': `${canonicalUrl}#blog`,
          name: 'CryptoWebBuild Engineering & SEO Insights',
          description: pageDesc,
          url: canonicalUrl,
          publisher: { '@id': orgId },
          blogPost: blogPosts.slice(0, 10).map((p) => ({
            '@type': 'BlogPosting',
            headline: p.title,
            url: `${BASE_URL}/blog/${p.slug}`,
            datePublished: toIsoDate(p.date),
            author: { '@id': personId },
          })),
        };
      } else if (route === '/projects') {
        pageEntity = {
          '@type': 'CollectionPage',
          '@id': `${canonicalUrl}#collection`,
          name: pageTitle,
          description: pageDesc,
          url: canonicalUrl,
          isPartOf: { '@id': siteId },
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: CASE_STUDY_LINKS.map((c, idx) => ({
              '@type': 'CreativeWork',
              position: idx + 1,
              name: c.label,
              url: `${BASE_URL}${c.href}`,
            })),
          },
        };
      } else {
        pageEntity = {
          '@type': route === '/about' ? 'AboutPage' : route === '/contact' ? 'ContactPage' : route === '/faq' ? 'FAQPage' : 'WebPage',
          '@id': `${canonicalUrl}#webpage`,
          name: pageTitle,
          description: pageDesc,
          url: canonicalUrl,
          isPartOf: { '@id': siteId },
          about: { '@id': orgId },
        };
      }

      const graph = [...baseEntities, pageEntity];
      if (route !== '/') {
        const crumbs = [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` }];
        if (isBlogPost) {
          crumbs.push({ '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` });
          crumbs.push({ '@type': 'ListItem', position: 3, name: matchedPost ? matchedPost.title : pageTitle, item: canonicalUrl });
        } else if (isCaseStudyRoute) {
          crumbs.push({ '@type': 'ListItem', position: 2, name: 'Projects', item: `${BASE_URL}/projects` });
          crumbs.push({ '@type': 'ListItem', position: 3, name: meta.h1 || pageTitle, item: canonicalUrl });
        } else if (route.startsWith('/services/')) {
          crumbs.push({ '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` });
          crumbs.push({ '@type': 'ListItem', position: 3, name: meta.h1 || pageTitle, item: canonicalUrl });
        } else {
          crumbs.push({ '@type': 'ListItem', position: 2, name: meta.h1 || pageTitle, item: canonicalUrl });
        }
        graph.push({
          '@type': 'BreadcrumbList',
          itemListElement: crumbs,
        });
      }

      const schemaPayload = safeJsonLd({ '@context': 'https://schema.org', '@graph': graph });
      routeHtml = routeHtml.replace(/<\/head>/i, `  <script data-rh="true" type="application/ld+json">${schemaPayload}</script>\n</head>`);
    }

    // Write flat .html files so Cloudflare Pages serves /route at 200 OK with zero 308 redirects
    let targetFile;
    if (route === '/') {
      targetFile = path.join(DIST_DIR, 'index.html');
    } else {
      const cleanPath = route.replace(/^\/+|\/+$/g, '');
      targetFile = path.join(DIST_DIR, `${cleanPath}.html`);
      const targetParentDir = path.dirname(targetFile);
      if (!fs.existsSync(targetParentDir)) {
        fs.mkdirSync(targetParentDir, { recursive: true });
      }
    }
    fs.writeFileSync(targetFile, routeHtml, 'utf-8');
    if (route === '/') {
      for (const staleExt of ['.gz', '.br']) {
        const staleFile = `${targetFile}${staleExt}`;
        if (fs.existsSync(staleFile)) {
          fs.unlinkSync(staleFile);
        }
      }
    }
    preRenderedCount++;
  });

  console.log(`✅ Successfully pre-rendered ${preRenderedCount} static routes with full SEO & H1 compliance!`);
};

runSSG();
