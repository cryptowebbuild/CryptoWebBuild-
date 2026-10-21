export type PortfolioCategory =
  | 'All'
  | 'E-Commerce & Conversion'
  | 'SaaS & Full-Stack'
  | 'AI Automation'
  | 'Web3 Infrastructure';

export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  category: Exclude<PortfolioCategory, 'All'>;
  categoryLabel: string;
  impactMetric: string;
  loadTimeMetric: string;
  desc: string;
  problemSolved: string;
  tech: string[];
  caseStudyPath: string;
  liveUrl?: string;
  secondaryLiveUrl?: string;
  secondaryLiveLabel?: string;
  image?: string;
  mockupType?: 'shopfast' | 'fcommerce' | 'vanguard' | 'aura' | 'rag_guardian' | 'autogit' | 'solnova' | 'giga' | 'quack';
}

export const portfolioCategories: PortfolioCategory[] = [
  'All',
  'E-Commerce & Conversion',
  'SaaS & Full-Stack',
  'AI Automation',
  'Web3 Infrastructure',
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'shopfast',
    title: 'ShopFast Headless E-Commerce',
    subtitle: 'Sub-Second Static Storefront & Instant Checkout Funnel',
    category: 'E-Commerce & Conversion',
    categoryLabel: 'Headless E-Commerce',
    impactMetric: '100/100 PageSpeed · +240% Checkout Lift',
    loadTimeMetric: '0.4s LCP Load',
    desc: 'Engineered an ultra-fast headless storefront with zero-latency client-side cart state, instant SKU filtering, and frictionless Stripe & Cash-on-Delivery (COD) checkout flows.',
    problemSolved: 'Eliminated 4.8s WordPress WooCommerce checkout lag that was causing 62% mobile cart abandonment.',
    tech: ['Next.js', 'React', 'Python/Django API', 'Stripe & COD', 'Tailwind CSS'],
    caseStudyPath: '/shopfast',
    liveUrl: 'https://cryptowebbuild.com/shopfast',
    mockupType: 'shopfast',
  },
  {
    id: 'fcommerce-engines',
    title: 'Edel Bangladesh & Fuler Dokan',
    subtitle: '1-Click F-Commerce & Automated WhatsApp Order Engines',
    category: 'E-Commerce & Conversion',
    categoryLabel: '1-Click F-Commerce Engine',
    impactMetric: 'Zero "Inbox for Price" Friction · 3.1x Direct Orders',
    loadTimeMetric: '0.6s Mobile Load',
    desc: 'Custom automated ordering storefronts built for high-volume Bangladeshi retail & floral brands—replacing chaotic manual Messenger replies with dynamic size/variant calculators and 1-click structured WhatsApp order receipts.',
    problemSolved: 'Replaced 4-hour manual Messenger response delays with instant self-serve variant selection and automated WhatsApp checkout dispatch.',
    tech: ['React', 'Dynamic Variant Engine', 'WhatsApp Order API', 'PostgreSQL', 'Tailwind CSS'],
    caseStudyPath: '/auracommerce',
    liveUrl: 'https://wa.me/8801618138820?text=Hi%20Sagor%2C%20I%20want%20to%20see%20the%20live%20demo%20of%20Edel%20Bangladesh%20%26%20Fuler%20Dokan%201-Click%20F-Commerce%20Engine.',
    secondaryLiveUrl: '/auracommerce',
    secondaryLiveLabel: 'Inspect Funnel Architecture',
    image: '/projects/auracommerce.webp',
    mockupType: 'fcommerce',
  },
  {
    id: 'vanguardsaas',
    title: 'Vanguard B2B Analytics SaaS',
    subtitle: 'High-Concurrency Financial Telemetry & API Platform',
    category: 'SaaS & Full-Stack',
    categoryLabel: 'B2B Analytics SaaS',
    impactMetric: '1M+ Data Points Rendered · Zero UI Frame Drops',
    loadTimeMetric: '0.7s First Paint',
    desc: 'High-performance dark-mode B2B analytics platform and executive console engineered with React, D3.js, and a scalable Python/Django + PostgreSQL REST API architecture.',
    problemSolved: 'Consolidated fragmented enterprise reporting into a single real-time cohort and revenue attribution command center.',
    tech: ['Python', 'Django REST', 'PostgreSQL', 'React', 'D3.js'],
    caseStudyPath: '/vanguardsaas',
    liveUrl: 'https://cryptowebbuild.com/vanguardsaas',
    image: '/projects/vanguardsaas.webp',
    mockupType: 'vanguard',
  },
  {
    id: 'auracommerce',
    title: 'Aura Commerce Brand Funnel',
    subtitle: 'Mobile-First Direct-to-Consumer Conversion Architecture',
    category: 'E-Commerce & Conversion',
    categoryLabel: 'DTC Brand Storefront',
    impactMetric: '+185% Mobile ROAS · 4.8% Conversion Rate',
    loadTimeMetric: '0.5s LCP Load',
    desc: 'Mobile-first luxury DTC brand funnel engineered for Paid Social (Meta/TikTok) traffic with instant bundle pricing, sticky 1-tap checkout, and programmatic SEO product schema.',
    problemSolved: 'Turned cold social ad clicks into high-AOV bundle purchases without third-party Shopify app bloat.',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'Technical SEO Schema', 'Tailwind CSS'],
    caseStudyPath: '/auracommerce',
    liveUrl: 'https://cryptowebbuild.com/auracommerce',
    image: '/projects/auracommerce.webp',
    mockupType: 'aura',
  },
  {
    id: 'aiagentdemo',
    title: 'Autonomous RAG Support Guardian',
    subtitle: '24/7 Custom Knowledge Base & Multi-Channel AI Agent',
    category: 'AI Automation',
    categoryLabel: 'RAG AI Automation',
    impactMetric: '7,000+ Active Users · 80% Ticket Reduction',
    loadTimeMetric: '0.35s AI Response',
    desc: 'Custom LLM + Retrieval-Augmented Generation (RAG) agent trained on proprietary company documentation, handling 7,000+ community members across Web, WhatsApp, Telegram, and Discord 24/7.',
    problemSolved: 'Eliminated $4,500/mo in repetitive human support overhead while delivering sub-second, zero-hallucination answers.',
    tech: ['Python', 'Vector RAG', 'OpenAI / Claude API', 'WhatsApp & Telegram Webhooks'],
    caseStudyPath: '/services/ai-automation',
    liveUrl: 'https://clickrunclaw.com/',
    image: '/projects/aiagentdemo.webp',
    mockupType: 'rag_guardian',
  },
  {
    id: 'solnova-autogit',
    title: 'SolNova & AutoGit Deployer',
    subtitle: 'Client-Side DevOps Engine & Real-Time Web3 Dashboard',
    category: 'Web3 Infrastructure',
    categoryLabel: 'DevOps & Web3 Infra',
    impactMetric: '100k+ Concurrent Capacity · Zero Server Lag',
    loadTimeMetric: '0.5s Edge Load',
    desc: 'Dual showcase of complex state and API mastery: AutoGit (browser-native GitHub CI/CD static deployment engine) and SolNova (real-time Solana DeFi presale and on-chain telemetry dashboard).',
    problemSolved: 'Demonstrates battle-tested frontend state orchestration, cryptographic wallet bridges, and zero-downtime edge execution.',
    tech: ['React', 'GitHub REST API', 'Solana Web3.js', 'Cloudflare Edge', 'TypeScript'],
    caseStudyPath: '/autogithub',
    liveUrl: 'https://cryptowebbuild.com/tokenlaunch',
    secondaryLiveUrl: '/tokenlaunch',
    secondaryLiveLabel: 'View SolNova Case Study',
    mockupType: 'autogit',
  },
  {
    id: 'clickrunclaw',
    title: 'ClickRunClaw Cloud Engine',
    subtitle: '1-Click Managed Cloud Infrastructure for AI Agents',
    category: 'AI Automation',
    categoryLabel: 'Flagship AI SaaS',
    impactMetric: '99.98% Uptime · 1-Click Webhook Deployment',
    loadTimeMetric: '0.6s Dashboard Load',
    desc: 'Enterprise-grade 24/7 cloud orchestration platform enabling founders to deploy autonomous OpenClaw, Telegram, WhatsApp, and Discord AI agents without managing servers.',
    problemSolved: 'Replaced complex Docker/VPS terminal setup with a 60-second visual cloud deployment pipeline.',
    tech: ['Next.js', 'Python Workers', 'Docker', 'Webhooks', 'PostgreSQL'],
    caseStudyPath: '/services/ai-automation',
    liveUrl: 'https://clickrunclaw.com/',
    image: '/projects/clickrunclaw.webp',
  },
  {
    id: 'nexusweb3',
    title: 'Nexus DeFi Staking Protocol',
    subtitle: 'Real-Time On-Chain Yield & Liquidity Terminal',
    category: 'Web3 Infrastructure',
    categoryLabel: 'DeFi Protocol UI',
    impactMetric: '$10M+ TVL Architecture · 100% Uptime',
    loadTimeMetric: '0.6s Load Time',
    desc: 'Institutional-grade DeFi staking and liquidity aggregation interface featuring real-time APY calculators, multi-wallet connection, and optimistic transaction feedback.',
    problemSolved: 'Simplified complex multi-pool staking into an intuitive 2-click institutional dashboard.',
    tech: ['React', 'Ethers.js', 'Wagmi', 'Tailwind CSS'],
    caseStudyPath: '/nexusweb3',
    liveUrl: 'https://cryptowebbuild.com/nexusweb3',
    image: '/projects/nexusweb3.webp',
  },
  {
    id: 'newsphotocard',
    title: 'News Photo Card Studio',
    subtitle: 'Client-Side Canvas Viral Media Generator',
    category: 'SaaS & Full-Stack',
    categoryLabel: 'Browser Media SaaS',
    impactMetric: '100% Client-Side Canvas · Zero Server Cost',
    loadTimeMetric: '0.4s Instant Render',
    desc: 'Privacy-first browser application enabling publishers and marketers to generate branded, high-resolution social news cards in seconds using HTML5 Canvas.',
    problemSolved: 'Cut social graphic production time from 15 minutes in Photoshop to 10 seconds in the browser.',
    tech: ['React', 'HTML5 Canvas API', 'TypeScript', 'Tailwind CSS'],
    caseStudyPath: '/newsphotocard',
    liveUrl: 'https://cryptowebbuild.com/newsphotocard',
    image: '/projects/project-newsphotocard.jpg',
  },
];
