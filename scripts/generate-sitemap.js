import fs from 'fs';
import path from 'path';

// Define the Base URL
const BASE_URL = 'https://cryptowebbuild.com';

// Define your static routes here (sync this with App.tsx manually or automated)
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

// Blog Routes (Manually synced with data/blogPosts.ts for now, as we can't import TS in JS script easily without build step)
// NOTE: Ideally this would parse the TS file, but for simplicity/reliability in this script, we list them.
const blogRoutes = [
  '/crypto-marketing-guide',
  '/best-website-developer',
  '/solana-meme-coin-guide', // NEW
  '/crypto-website-cost',
  '/static-vs-dynamic-website',
  '/meme-coin-website-features',
  '/crypto-project-website',
  '/website-builder-vs-developer'
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

  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir);
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully!');
};

generateSitemap();
