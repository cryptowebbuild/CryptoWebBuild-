import fs from 'fs';
import path from 'path';

// Define the Base URL
const BASE_URL = 'https://cryptowebbuild.com';

// Define your static routes
const staticRoutes = [
  '/',
  '/about',
  '/services',
  '/projects',
  '/videos',
  '/blog',
  '/contact',
  '/thank-you',
  '/faq',
  '/privacy',
  '/terms',
  // Case Studies
  '/tokenlaunch',
  '/memecoinsite',
  '/shopfast',
  '/autogithub',
  '/gigasolana',
];

// Read blog posts dynamically from data/blogPosts.ts
const blogPostsPath = path.resolve('data/blogPosts.ts');
let blogRoutes = [];

try {
  const content = fs.readFileSync(blogPostsPath, 'utf-8');
  // Regex to extract slugs from the TS object structure
  // Looks for: slug: 'some-slug-value'
  const slugRegex = /slug:\s*['"]([^'"]+)['"]/g;
  let match;

  while ((match = slugRegex.exec(content)) !== null) {
    if (match[1]) {
      blogRoutes.push(`/blog/${match[1]}`);
    }
  }

  console.log(`✅ Found ${blogRoutes.length} blog posts.`);
} catch (error) {
  console.error('❌ Error reading blogPosts.ts:', error);
  // Fallback to hardcoded list if file read fails (though it shouldn't)
  blogRoutes = [
    '/blog/crypto-seo-guide',
    '/blog/presale-guide',
    '/blog/solana-meme-coin-guide',
    '/blog/crypto-marketing-guide',
    '/blog/best-website-developer',
    '/blog/crypto-website-cost',
    '/blog/static-vs-dynamic-website',
    '/blog/meme-coin-website-features',
    '/blog/crypto-project',
    '/blog/website-builder-vs-developer'
  ];
}

const routes = [...staticRoutes, ...blogRoutes];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    return `  <url>
    <loc>${BASE_URL}${route === '/' ? '' : route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  // Handle distinct public folder path depending on where script is run
  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir);
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully with correct /blog paths!');
};

generateSitemap();