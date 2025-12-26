export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: 'Guide' | 'Tech' | 'Business' | 'Case Study';
  image: string;
  keywords: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: '/crypto-marketing-guide',
    title: 'The 2026 Crypto Marketing Strategy Guide',
    excerpt: 'Stop burning money on ads. Here is how to build organic community hype for your token launch.',
    date: 'Dec 24, 2025',
    readTime: '8 min read',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    keywords: ['Crypto Marketing', 'Token Launch Strategy', 'Community Building']
  },
  {
    id: '2',
    slug: '/best-website-developer',
    title: 'How to Hire the Best Web3 Developer',
    excerpt: 'Avoid scams and low-quality code. A checklist for finding a developer who understands blockchain.',
    date: 'Nov 16, 2025',
    readTime: '6 min read',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80',
    keywords: ['Hire Web3 Developer', 'Blockchain Developer', 'Agency vs Freelancer']
  },
  {
    id: '3',
    slug: '/solana-meme-coin-guide', // NEW
    title: 'How to Launch a Solana Meme Coin in 2025 (Step-by-Step)',
    excerpt: 'From tokenomics to website launch. The ultimate technical and marketing roadmap for a viral Solana token.',
    date: 'Dec 28, 2025',
    readTime: '12 min read',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&w=800&q=80',
    keywords: ['Solana Meme Coin', 'Token Launch', 'Web3 Development']
  },
  {
    id: '4',
    slug: '/crypto-website-cost',
    title: 'The Real Cost of Building a Crypto Website in 2026',
    excerpt: 'How much should you pay for a token site? We analyze the market rates for 2025.',
    date: 'Dec 26, 2025',
    readTime: '5 min read',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    keywords: ['Website Cost', 'Web Development Pricing', 'Budgeting']
  },
  {
    id: '5',
    slug: '/static-vs-dynamic-website',
    title: 'Why Static Sites (React) Are Safer Than WordPress',
    excerpt: 'Security is paramount in crypto. Learn why a static architecture prevents 99% of hacks.',
    date: 'Nov 12, 2025',
    readTime: '4 min read',
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80',
    keywords: ['Website Security', 'Static vs Dynamic', 'WordPress Alternatives']
  },
  {
    id: '6',
    slug: '/meme-coin-website-features',
    title: '5 Must-Have Features for Viral Meme Coin Sites',
    excerpt: 'Don’t launch without these. Conversions depend on trust signals and smooth UI.',
    date: 'Nov 03, 2025',
    readTime: '5 min read',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1620321023374-d1a68fdd720d?auto=format&fit=crop&w=800&q=80',
    keywords: ['Meme Coin Features', 'Web Design', 'Conversion Rate']
  },
  {
    id: '7',
    slug: '/crypto-project-website',
    title: 'Blueprint: The Perfect Crypto Project Website',
    excerpt: 'Wireframes and structure for a DeFi or Protocol website that investors love.',
    date: 'Nov 03, 2025',
    readTime: '7 min read',
    category: 'Guide',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    keywords: ['Website Blueprint', 'UX Design', 'Web3 UI']
  },
  {
    id: '8',
    slug: '/website-builder-vs-developer',
    title: 'Wix vs Custom Code: What Your Startup Needs',
    excerpt: 'When to save money with a builder, and when to invest in custom code for scalability.',
    date: 'Nov 25, 2025',
    readTime: '6 min read',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    keywords: ['Wix vs React', 'Custom Development', 'Scalability']
  }
];
