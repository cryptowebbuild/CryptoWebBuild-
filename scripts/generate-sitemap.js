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

// Blog Routes (UPDATED: Added '/blog' prefix to match App.tsx)
const blogRoutes = [
  '/blog/crypto-seo-guide',
  '/blog/how-to-build-presale-dapp',
  '/blog/crypto-marketing-guide',
  '/blog/best-website-developer',
  '/blog/solana-meme-coin-guide',
  '/blog/crypto-website-cost',
  '/blog/static-vs-dynamic-website',
  '/blog/meme-coin-website-features',
  '/blog/crypto-project-website',
  '/blog/website-builder-vs-developer'
];

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