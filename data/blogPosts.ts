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
    date: 'Feb 15, 2026',
    readTime: '25 min read',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1652337036505-6f5052a69b70',
    keywords: ['Crypto SEO', 'Token Ranking', 'Programmatic SEO']
  },
  {
    id: '2',
    slug: 'presale-guide', // Fixed slug match
    title: 'The Ultimate Crypto Presale Guide 2026',
    excerpt: 'How to raise 1000 ETH in minutes. The "Hybrid Launch" strategy, smart contract vesting logic, and avoiding the post-presale dump.',
    date: 'Feb 15, 2026',
    readTime: '30 min read',
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
    keywords: ['Presale DApp', 'Smart Contract', 'Fundraising']
  },
  {
    id: '3',
    slug: 'solana-meme-coin-guide',
    title: 'How to Launch a Solana Meme Coin in 2026',
    excerpt: 'From Token-2022 to Jito Bundles. The ultimate technical and marketing roadmap for a viral Solana token launch.',
    date: 'Feb 22, 2026',
    readTime: '35 min read',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&w=800&q=80',
    keywords: ['Solana Meme Coin', 'Token-2022', 'Web3 Development']
  },
  {
    id: '4',
    slug: 'crypto-marketing-guide',
    title: 'The 2026 Crypto Marketing Strategy Guide',
    excerpt: 'Stop burning money on ads. Here is how to build organic community hype using Twitter, Telegram, and "Cult Engineering".',
    date: 'Dec 24, 2025',
    readTime: '15 min read',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    keywords: ['Crypto Marketing', 'Token Strategy', 'Community']
  },
  {
    id: '5',
    slug: 'best-website-developer', // Fixed slug match (was best-developer)
    title: 'How to Hire the Best Web3 Developer',
    excerpt: 'Avoid scams and low-quality code. A checklist for finding a developer who truly understands blockchain architecture.',
    date: 'Nov 16, 2025',
    readTime: '12 min read',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80',
    keywords: ['Hire Developer', 'Blockchain Agency', 'Freelancer Guide']
  },
  {
    id: '6',
    slug: 'crypto-website-cost', // Fixed slug match (was crypto-cost)
    title: 'The Real Cost of Building a Crypto Website in 2026',
    excerpt: 'How much should you pay? We analyze market rates for 2026. From $500 templates to $50k custom dApps.',
    date: 'Dec 26, 2025',
    readTime: '10 min read',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    keywords: ['Website Cost', 'Web Development Pricing', 'Budgeting']
  },
  {
    id: '7',
    slug: 'static-vs-dynamic-website',
    title: 'Why Static Sites (React) Are Safer Than WordPress',
    excerpt: 'Security is paramount in crypto. Learn why a static architecture prevents 99% of database hacks and SQL injections.',
    date: 'Feb 28, 2026',
    readTime: '20 min read',
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
    keywords: ['Website Security', 'Static vs Dynamic', 'WordPress Risks']
  },
  {
    id: '8',
    slug: 'meme-coin-website-features', // Fixed slug match
    title: '5 Must-Have Features for Viral Meme Coin Sites',
    excerpt: 'Don’t launch without these. Conversions depend on trust signals, seamless UI, and "Buy Now" optimization.',
    date: 'Feb 20, 2026',
    readTime: '18 min read',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1636587224433-3cd253788c40',
    keywords: ['Meme Coin Features', 'Web Design', 'Conversion Rate']
  },
  {
    id: '9',
    slug: 'crypto-project', // Fixed slug match (was crypto-project-website)
    title: 'How to Launch a Crypto Project: The Blueprint',
    excerpt: 'The definitive 6,000-word military-grade guide. Tokenomics Engineering, Anti-Sniper defense, and CEX Listing secrets.',
    date: 'Feb 01, 2026',
    readTime: '40 min read',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    keywords: ['Launch Strategy', 'Tokenomics', 'Project Management']
  },
  {
    id: '10',
    slug: 'website-builder-vs-developer',
    title: 'Wix vs Custom Code: The Honest Truth',
    excerpt: 'Should you use Wix or hire a dev? We analyze the "Rented Land" risk and performance gaps for crypto startups.',
    date: 'Mar 01, 2026',
    readTime: '25 min read',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    keywords: ['Wix vs React', 'Custom Development', 'Business Strategy']
  }
];