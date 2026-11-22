/**
 * IndexNow submitter.
 * Usage: node scripts/indexnow.mjs [url ...]
 * With no arguments it submits every URL in dist/sitemap.xml.
 *
 * The key file lives in public/<KEY>.txt and must be deployed first.
 */
import fs from 'node:fs';
import path from 'node:path';

const KEY = '873eccd734e7b3ed28176a2b0853e6e6';
const HOST = 'cryptowebbuild.com';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const args = process.argv.slice(2);
let urls = args.filter((value) => value.startsWith('http'));

if (urls.length === 0) {
  const sitemapPath = path.resolve('dist/sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    console.error('dist/sitemap.xml not found. Run the build first.');
    process.exit(1);
  }
  const xml = fs.readFileSync(sitemapPath, 'utf-8');
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
}

if (urls.length === 0) {
  console.error('No URLs to submit.');
  process.exit(1);
}

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urls.slice(0, 10000),
};

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
});

console.log(`Submitted ${payload.urlList.length} URLs. Status: ${response.status} ${response.statusText}`);
