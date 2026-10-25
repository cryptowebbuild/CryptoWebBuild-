import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://cryptowebbuild.com';
const DIST_DIR = path.resolve('dist');

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
  '/bangladesh',
  '/projects',
  '/blog',
  '/contact',
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

// Extract blog posts dynamically
const blogPostsPath = path.resolve('data/blogPosts.ts');
let blogPosts = [];

try {
  const content = fs.readFileSync(blogPostsPath, 'utf-8');
  const postRegex = /{\s*id:\s*['"]([^'"]+)['"],\s*slug:\s*['"]([^'"]+)['"],\s*title:\s*['"]([^'"]+)['"],\s*excerpt:\s*['"]([^'"]+)['"]/g;
  let match;
  while ((match = postRegex.exec(content)) !== null) {
    blogPosts.push({
      id: match[1],
      slug: match[2],
      title: match[3],
      description: match[4],
    });
  }
} catch (e) {
  console.warn('Could not parse blog posts for SSG:', e.message);
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
    title: 'এফ-কমার্স থেকে ১-ক্লিক ওয়েবসাইট ও কুরিয়ার অটোমেশন | CryptoWebBuild',
    description: 'ফেসবুক ইনবক্সের ঝামেলা বাদ দিয়ে ০.৪ সেকেন্ড গতির নেক্সট.জেএস ওয়েবসাইট, ১-ক্লিক বিকাশ/ক্যাশ অন ডেলিভারি এবং স্টেডফাস্ট/পাঠাও অটোমেশন।',
    h1: 'ফেসবুক ইনবক্সের প্যারা বাদ দিয়ে শুরু করুন ১-ক্লিক অর্ডার ওয়েবসাইট',
  },
  '/bangladesh': {
    title: 'এফ-কমার্স থেকে ১-ক্লিক ওয়েবসাইট ও কুরিয়ার অটোমেশন | CryptoWebBuild',
    description: 'ফেসবুক ইনবক্সের ঝামেলা বাদ দিয়ে ০.৪ সেকেন্ড গতির নেক্সট.জেএস ওয়েবসাইট, ১-ক্লিক বিকাশ/ক্যাশ অন ডেলিভারি এবং স্টেডফাস্ট/পাঠাও অটোমেশন।',
    h1: 'ফেসবুক ইনবক্সের প্যারা বাদ দিয়ে শুরু করুন ১-ক্লিক অর্ডার ওয়েবসাইট',
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
    description: 'CryptoWebBuild privacy practices, data handling, and strict client confidentiality standards.',
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
    routeMeta[`/blog/${post.slug}`] = {
      title: `${post.title.substring(0, 42)} | CryptoWebBuild`.substring(0, 60),
      description: (post.description || 'In-depth guide by Sagor Ahamed on sub-second web architecture, technical SEO, and conversion engineering.').substring(0, 152) + '...',
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

    const canonicalUrl = `${BASE_URL}${route === '/' ? '' : route}`;

    // Generate crawlable static pre-render shell inside <div id="root">
    const crawlableShell = `
      <div id="ssg-prerender" class="max-w-7xl mx-auto px-6 py-12">
        <header class="border-b border-slate-200 dark:border-white/10 pb-6 mb-8 flex flex-wrap items-center justify-between gap-4">
          <a href="/" class="font-display font-black text-2xl tracking-tight text-slate-900 dark:text-white">
            CryptoWebBuild
          </a>
          <nav class="flex flex-wrap items-center gap-4 text-xs font-semibold" aria-label="Main Navigation">
            <a href="/services" class="hover:underline">Services</a>
            <a href="/projects" class="hover:underline">Work</a>
            <a href="/blog" class="hover:underline">Blog</a>
            <a href="/about" class="hover:underline">About</a>
            <a href="/contact" class="hover:underline">Contact</a>
            <a href="/services/ecommerce-development-bangladesh" class="hover:underline">1-Click E-Commerce</a>
            <a href="/clickrunclaw" class="hover:underline">ClickRunClaw</a>
            <a href="/auracommerce" class="hover:underline">Edel Bangladesh</a>
          </nav>
        </header>
        <main>
          <article class="space-y-6">
            <h1 class="font-display text-3xl sm:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              ${meta.h1}
            </h1>
            <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
              ${pageDesc}
            </p>
            <div class="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-4 text-xs">
              <a href="https://wa.me/8801618138820" class="font-bold underline">WhatsApp: 01618-138820</a>
              <span>·</span>
              <a href="https://cal.com/cryptowebbuilddev/15min" class="font-bold underline">Book 15-Min Strategy Call</a>
              <span>·</span>
              <a href="/contact" class="font-bold underline">Claim 48-Hour Staging Prototype (50/50 Terms)</a>
            </div>
          </article>
        </main>
        <footer class="mt-16 pt-8 border-t border-slate-200 dark:border-white/10 text-xs text-slate-500 flex flex-wrap justify-between gap-4">
          <p>© 2026 CryptoWebBuild. Principal Full-Stack Engineering by Sagor Ahamed.</p>
          <div class="flex gap-4">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/faq">FAQ</a>
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

    // Determine target directory and file
    let targetDir = DIST_DIR;
    if (route !== '/') {
      targetDir = path.join(DIST_DIR, ...route.split('/').filter(Boolean));
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
    }

    const targetFile = path.join(targetDir, 'index.html');
    fs.writeFileSync(targetFile, routeHtml, 'utf-8');
    preRenderedCount++;
  });

  console.log(`✅ Successfully pre-rendered ${preRenderedCount} static routes with full SEO & H1 compliance!`);
};

runSSG();
