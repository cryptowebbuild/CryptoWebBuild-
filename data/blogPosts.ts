export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string; // This is an estimate for the card view
  category: 'Guide' | 'Tech' | 'Business' | 'Case Study';
  image: string;
  keywords: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'crypto-seo-guide',
    title: 'Crypto SEO Guide 2026: How to Rank Your Token #1',
    excerpt: 'The ultimate guide to ranking for "How to buy $TOKEN". Programmatic SEO, Schema Markup, and Speed Optimization strategies.',
    date: 'Jan 05, 2026',
    readTime: '12 min read',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
    keywords: ['Crypto SEO', 'Token Ranking', 'Programmatic SEO']
  },
  {
    id: '2',
    slug: 'how-to-build-presale-dapp',
    title: 'How to Build a Secure Token Presale DApp',
    excerpt: 'Technical roadmap for building a high-concurrency ICO dashboard. Smart contracts, React, and anti-bot security layers.',
    date: 'Jan 10, 2026',
    readTime: '15 min read',
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    keywords: ['Presale DApp', 'Smart Contract Development', 'Web3 Security']
  },
  {
    id: '3',
    slug: 'solana-meme-coin-guide',
    title: 'How to Launch a Solana Meme Coin in 2025 (Step-by-Step)',
    excerpt: 'From tokenomics to website launch. The ultimate technical and marketing roadmap for a viral Solana token.',
    date: 'Dec 28, 2025',
    readTime: '18 min read',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&w=800&q=80',
    keywords: ['Solana Meme Coin', 'Token Launch', 'Web3 Development']
  },
  {
    id: '4',
    slug: 'crypto-marketing-guide',
    title: 'The 2026 Crypto Marketing Strategy Guide',
    excerpt: 'Stop burning money on ads. Here is how to build organic community hype using Twitter, Telegram, and SEO.',
    date: 'Dec 24, 2025',
    readTime: '8 min read',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    keywords: ['Crypto Marketing', 'Token Launch Strategy', 'Community Building']
  },
  {
    id: '5',
    slug: 'best-website-developer',
    title: 'How to Hire the Best Web3 Developer',
    excerpt: 'Avoid scams and low-quality code. A checklist for finding a developer who truly understands blockchain architecture.',
    date: 'Nov 16, 2025',
    readTime: '6 min read',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80',
    keywords: ['Hire Web3 Developer', 'Blockchain Developer', 'Agency vs Freelancer']
  },
  {
    id: '6',
    slug: 'crypto-website-cost',
    title: 'The Real Cost of Building a Crypto Website in 2026',
    excerpt: 'How much should you pay for a token site? We analyze the market rates for 2025-2026 agency pricing.',
    date: 'Dec 26, 2025',
    readTime: '5 min read',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    keywords: ['Website Cost', 'Web Development Pricing', 'Budgeting']
  },
  {
    id: '7',
    slug: 'static-vs-dynamic-website',
    title: 'Why Static Sites (React) Are Safer Than WordPress',
    excerpt: 'Security is paramount in crypto. Learn why a static architecture prevents 99% of database hacks and SQL injections.',
    date: 'Nov 12, 2025',
    readTime: '4 min read',
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80',
    keywords: ['Website Security', 'Static vs Dynamic', 'WordPress Alternatives']
  },
  {
    id: '8',
    slug: 'meme-coin-website-features',
    title: '5 Must-Have Features for Viral Meme Coin Sites',
    excerpt: 'Don’t launch without these. Conversions depend on trust signals, seamless UI, and mobile optimization.',
    date: 'Nov 03, 2025',
    readTime: '5 min read',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1620321023374-d1a68fdd720d?auto=format&fit=crop&w=800&q=80',
    keywords: ['Meme Coin Features', 'Web Design', 'Conversion Rate']
  },
  {
    id: '9',
    slug: 'crypto-project-website',
    title: 'Blueprint: The Perfect Crypto Project Website',
    excerpt: 'Wireframes and structure for a DeFi or Protocol website that investors love and trust.',
    date: 'Nov 03, 2025',
    readTime: '7 min read',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    keywords: ['Website Blueprint', 'UX Design', 'Web3 UI']
  },
  {
    id: '10',
    slug: 'website-builder-vs-developer',
    title: 'Wix vs Custom Code: What Your Startup Needs',
    excerpt: 'When to save money with a builder, and when to invest in custom code for massive scalability.',
    date: 'Nov 25, 2025',
    readTime: '6 min read',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    keywords: ['Wix vs React', 'Custom Development', 'Scalability']
  }
];