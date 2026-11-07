import fs from 'fs';
import path from 'path';

// --- CURATED TOPIC MATRIX (High-Ticket, High-Intent Client Search Queries) ---
export const CURATED_TOPICS = [
  {
    id: 'meta-capi-server-side-nextjs15-conversion-boost',
    slug: 'meta-capi-server-side-nextjs15-conversion-boost',
    title: 'Meta Conversions API (CAPI) in Next.js 15: How to Recover 35% Lost Ad Conversions Bypassing iOS 14 Tracking Blockers',
    excerpt: 'Client-side Meta Pixel drops up to 35% of purchase events due to ad-blockers and iOS privacy. Learn how to engineer direct Server-Side Meta CAPI inside Next.js 15 Route Handlers with 100% event deduplication.',
    category: 'Tech',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&fm=webp&q=80',
    keywords: [
      'Meta Conversions API Next.js 15',
      'Facebook CAPI Server Side Tracking',
      'Meta Pixel Deduplication Event ID',
      'Next.js 15 Route Handler CAPI',
      'Sagor Ahamed CryptoWebBuild'
    ],
    summaryHeading: 'The iOS Tracking Blindspot: Why 35% of Your Paid Ad Sales Never Reach Ads Manager',
    hookStory: 'If you run Facebook or Instagram Ads for your e-commerce store, browser ad-blockers, Brave shields, and Apple iOS 14.5+ ATT privacy prompts silently discard more than a third of your purchase signals. Meta Ads Manager thinks your campaigns are underperforming, driving up your Customer Acquisition Cost (CAC) by 40%. The only fix is moving event tracking from the fragile client browser to a server-side Next.js 15 Node/Edge pipeline.',
    benchmarkMetrics: [
      { label: 'Client-Side Pixel Only', value: '62% Match Rate', desc: 'Severely degraded by browser ad blockers' },
      { label: 'Next.js Server-Side CAPI', value: '98.4% Match Rate', desc: 'Direct secure server-to-Meta API handshake' },
      { label: 'Reported ROAS Lift', value: '+35% Tracked', desc: 'Immediate ad algorithm targeting recovery' }
    ],
    technicalDeepDive: `### Server-Side CAPI Implementation in Next.js 15

When a customer completes a checkout, your server generates a unique \`event_id\` and sends the payload to Meta's Graph API asynchronously:

\`\`\`typescript
// app/api/tracking/meta-capi/route.ts
import { NextResponse } from 'next/server';
import crypto from 'crypto';

function hashData(val: string): string {
  return crypto.createHash('sha256').update(val.trim().toLowerCase()).digest('hex');
}

export async function POST(req: Request) {
  const { eventId, eventName, customerEmail, customerPhone, value, currency } = await req.json();

  const payload = {
    data: [
      {
        event_name: eventName || 'Purchase',
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId, // Critical for client & server deduplication
        action_source: 'website',
        user_data: {
          em: customerEmail ? [hashData(customerEmail)] : [],
          ph: customerPhone ? [hashData(customerPhone)] : [],
          client_user_agent: req.headers.get('user-agent') || '',
        },
        custom_data: {
          currency: currency || 'BDT',
          value: Number(value),
        },
      },
    ],
  };

  const response = await fetch(
    \`https://graph.facebook.com/v19.0/\${process.env.META_PIXEL_ID}/events?access_token=\${process.env.META_CAPI_ACCESS_TOKEN}\`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }
  );

  return NextResponse.json(await response.json());
}
\`\`\``,
    faqs: [
      {
        question: 'Why do we need Event ID deduplication between Pixel and CAPI?',
        answer: 'When both browser Pixel and Server CAPI fire for the same order, Meta uses the identical event_id to recognize it as a single conversion, preventing duplicate counting while ensuring 100% signal capture.'
      },
      {
        question: 'Does server-side tracking slow down the customer checkout experience?',
        answer: 'No. The CAPI dispatch runs asynchronously in background edge workers after the 200 OK checkout confirmation is already sent to the buyer.'
      },
      {
        question: 'Can this be integrated with local payment gateways like bKash and Cash on Delivery?',
        answer: 'Yes. CAPI fires automatically upon successful bKash webhook confirmation or COD order dispatch, ensuring COD purchases are recorded accurately in Ads Manager.'
      },
      {
        question: 'How quickly can CryptoWebBuild deploy server-side CAPI on our store?',
        answer: 'Principal Engineer Sagor Ahamed deploys and verifies server-side CAPI within 48 hours under our 50/50 terms.'
      }
    ]
  },
  {
    id: 'pathao-courier-dynamic-consignment-nextjs',
    slug: 'pathao-courier-dynamic-consignment-nextjs',
    title: 'Pathao Courier API Automation: Dynamic Delivery Fee Calculation and Instant Parcel Consignment in Next.js 15',
    excerpt: 'Complete guide to connecting Pathao Courier API with Next.js 15 and Django. Auto-calculate city zones, generate parcel consignments in 0.3s, and sync webhook delivery statuses.',
    category: 'Guide',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&fm=webp&q=80',
    keywords: [
      'Pathao Courier API Next.js',
      'Automated Parcel Booking Bangladesh',
      'Pathao Merchant API Integration',
      'Next.js 15 Courier Webhook Sync',
      'CryptoWebBuild Sagor Ahamed'
    ],
    summaryHeading: 'Stop Manual Parcel Entry: Why Real-Time Courier Sync Multiplies Delivery Velocity',
    hookStory: 'Fulfillment delays kill repeat customers. When an e-commerce business relies on spreadsheet data-entry or manual merchant panel copy-pasting, shipping mistakes skyrocket. With direct Pathao API integration, the second a customer taps "Place Order", city zones are resolved, consignment tracking numbers are booked in under 0.3 seconds, and the customer receives instant live tracking via SMS.',
    benchmarkMetrics: [
      { label: 'Manual Panel Entry', value: '4 Minutes / Order', desc: 'Typos and shipping address delays' },
      { label: 'Pathao API Automated', value: '0.34s Total', desc: 'Instant merchant consignment generated' },
      { label: 'Parcel Return Rate', value: '-55% Drop', desc: 'Pre-validated delivery zones and phone numbers' }
    ],
    technicalDeepDive: `### Pathao Courier Consignment Dispatch Architecture

\`\`\`python
# services/pathao_service.py
import requests
from django.conf import settings

def create_pathao_order(order):
    token = get_pathao_access_token()
    url = f"{settings.PATHAO_BASE_URL}/aladdin/api/v1/orders"
    
    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
    
    payload = {
        "store_id": settings.PATHAO_STORE_ID,
        "merchant_order_id": order.order_number,
        "recipient_name": order.customer_name,
        "recipient_phone": order.customer_phone,
        "recipient_address": order.delivery_address,
        "recipient_city": order.city_id,
        "recipient_zone": order.zone_id,
        "delivery_type": 48, # 48 hours delivery
        "item_type": 1, # Parcel
        "special_instruction": order.note or "Handle with care",
        "item_quantity": 1,
        "item_weight": 0.5,
        "amount_to_collect": float(order.total_amount) if order.is_cod else 0
    }
    
    res = requests.post(url, json=payload, headers=headers, timeout=5)
    data = res.json()
    if data.get("type") == "success":
        order.tracking_number = data["data"]["consignment_id"]
        order.save(update_fields=["tracking_number"])
        return order.tracking_number
    raise Exception(f"Pathao Dispatch Failed: {data}")
\`\`\``,
    faqs: [
      {
        question: 'Does the system automatically update order status when Pathao delivers?',
        answer: 'Yes. Pathao webhooks securely push status updates (In Transit, Delivered, Returned) to our Django/Next.js API endpoint, updating your dashboard in real-time.'
      },
      {
        question: 'Can both Pathao and Steadfast be integrated simultaneously?',
        answer: 'Yes. We build intelligent courier failover—orders can default to Pathao and automatically fallback to Steadfast if coverage zones require it.'
      },
      {
        question: 'How do you handle Pathao OAuth token expiration?',
        answer: 'Access tokens and refresh tokens are cached in Redis with TTLs and refreshed proactively in the background, ensuring zero latency during customer checkouts.'
      },
      {
        question: 'What is the staging guarantee for this deployment?',
        answer: 'You test live courier consignment generation in staging within 48 hours, paying 50% only after full satisfaction.'
      }
    ]
  },
  {
    id: 'nagad-merchant-api-tokenized-checkout-nextjs',
    slug: 'nagad-merchant-api-tokenized-checkout-nextjs',
    title: 'Nagad Merchant PG Integration in Next.js 15: Public-Key Cryptography & Instant 1-Click Payments',
    excerpt: 'Step-by-step technical teardown of integrating Nagad Merchant Payment Gateway with RSA private/public key cryptography in Next.js 15 App Router. Zero manual TrxID friction.',
    category: 'Tech',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1556742049-0a67e557224f?auto=format&fit=crop&w=1200&fm=webp&q=80',
    keywords: [
      'Nagad Payment Gateway Next.js 15',
      'Nagad Merchant API Integration',
      'RSA Cryptography Payment Gateway',
      'Nagad Direct Checkout Bangladesh',
      'CryptoWebBuild Sagor Ahamed'
    ],
    summaryHeading: 'Why Modern E-Commerce Cannot Depend Solely on One Payment Rail',
    hookStory: 'Offering only bKash or only Cash on Delivery leaves up to 28% of qualified buyers stranded. Nagad has over 80 million registered accounts in Bangladesh. Implementing direct Nagad Merchant PG with RSA public-key signatures gives your customers an instant, professional checkout experience while completely automating accounting reconciliation.',
    benchmarkMetrics: [
      { label: 'Manual "Nagad Personal"', value: '6–8 Minutes', desc: 'Frequent fake TrxID scams and lost sales' },
      { label: 'Nagad Direct PG', value: '1.4 Seconds', desc: 'Automated cryptographic callback verification' },
      { label: 'Checkout Completion', value: '+270% Velocity', desc: 'Zero friction mobile payment' }
    ],
    technicalDeepDive: `### Nagad Cryptographic Signature Verification

Nagad requires encrypting payloads with Nagad's Public Key and signing with your Merchant Private Key:

\`\`\`typescript
// lib/nagad-crypto.ts
import crypto from 'crypto';

export function signWithPrivateKey(data: string, privateKeyPem: string): string {
  const signer = crypto.createSign('SHA256');
  signer.update(data);
  return signer.sign(privateKeyPem, 'base64');
}

export function encryptWithPublicKey(data: string, publicKeyPem: string): string {
  const buffer = Buffer.from(data, 'utf8');
  const encrypted = crypto.publicEncrypt(
    {
      key: publicKeyPem,
      padding: crypto.constants.RSA_PKCS1_PADDING,
    },
    buffer
  );
  return encrypted.toString('base64');
}
\`\`\``,
    faqs: [
      {
        question: 'Why does Nagad use RSA cryptography instead of simple API tokens?',
        answer: 'RSA asymmetric key cryptography guarantees that neither party can forge transaction requests or manipulate order amounts between the browser and bank.'
      },
      {
        question: 'Where should RSA private keys be stored in Next.js 15?',
        answer: 'Strictly in server-side environment variables or Cloudflare Secrets, never exposed to client-side code bundles.'
      },
      {
        question: 'Can we offer bKash, Nagad, and Cards in a single unified checkout UI?',
        answer: 'Yes. Our 1-Click checkout component bundles bKash, Nagad, VISA/Mastercard, and Cash on Delivery seamlessly in a sub-second tabbed interface.'
      },
      {
        question: 'What is CryptoWebBuild’s delivery timeframe for payment integrations?',
        answer: 'A fully functional staging test environment is delivered in 48 hours under our 50/50 risk-free milestone model.'
      }
    ]
  },
  {
    id: 'solana-anchor-sub-second-rpc-dapp',
    slug: 'solana-anchor-sub-second-rpc-dapp',
    title: 'Solana Anchor & React: Engineering Sub-0.3s DEX Swaps & Presale Mints with Zero RPC Throttling',
    excerpt: 'High-throughput Web3 engineering guide: How to build sub-second Solana dApps with Anchor, priority fee dynamic estimation, and private WebSocket RPC clusters.',
    category: 'Tech',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&fm=webp&q=80',
    keywords: [
      'Solana Anchor Web3 DApp',
      'Sub-Second Solana DEX Swap',
      'Dynamic Priority Fees Solana',
      'Solana RPC WebSocket Clusters',
      'Sagor Ahamed Full Stack Web3'
    ],
    summaryHeading: 'The 429 Throttle Nightmare: Why Public RPCs Destroy Web3 Presales',
    hookStory: 'When a meme coin presale or NFT mint launches, public RPC endpoints drop up to 80% of transaction signatures due to rate limits and network congestion. Buyers get frustrated, hype evaporates, and capital moves elsewhere. We architect Web3 interfaces with private dedicated RPC load balancing, dynamic micro-lamport priority fee estimators, and sub-0.3s local wallet signing.',
    benchmarkMetrics: [
      { label: 'Public RPC Node', value: '4.2s / 68% Failure', desc: 'Rate throttled under 50+ concurrent requests' },
      { label: 'Private Cluster + Priority Fees', value: '0.24s / 99.9% Land', desc: 'Direct transaction forwarding to leaders' },
      { label: 'Presale Completion', value: '3x Faster Mints', desc: 'Zero dropped transactions during surges' }
    ],
    technicalDeepDive: `### Dynamic Priority Fee Optimization in Solana

\`\`\`typescript
import { Connection, ComputeBudgetProgram, TransactionMessage, VersionedTransaction } from '@solana/web3.js';

export async function createOptimizedTransaction(
  connection: Connection,
  instructions: any[],
  payerKey: any
) {
  // 1. Fetch real-time recent priority fees from validator leaders
  const fees = await connection.getRecentPrioritizationFees();
  const medianFee = fees.length ? Math.median(fees.map(f => f.prioritizationFee)) : 50_000;

  // 2. Prepend compute budget instructions
  const computeUnitLimit = ComputeBudgetProgram.setComputeUnitLimit({ units: 250_000 });
  const computeUnitPrice = ComputeBudgetProgram.setComputeUnitPrice({ microLamports: medianFee + 10_000 });

  const latestBlockhash = await connection.getLatestBlockhash('confirmed');
  
  const messageV0 = new TransactionMessage({
    payerKey,
    recentBlockhash: latestBlockhash.blockhash,
    instructions: [computeUnitLimit, computeUnitPrice, ...instructions]
  }).compileToV0Message();

  return new VersionedTransaction(messageV0);
}
\`\`\``,
    faqs: [
      {
        question: 'Why are priority fees mandatory on modern Solana launches?',
        answer: 'Since the Solana stake-weighted QoS upgrade, transactions without dynamic priority fees are heavily deprioritized by block-producing leaders during traffic bursts.'
      },
      {
        question: 'How do you handle Phantom, Solflare, and Backpack wallet bridges?',
        answer: 'We implement the standard Solana Mobile Wallet Adapter and unified React wallet-adapter with auto-reconnect and session persistence.'
      },
      {
        question: 'Can you build custom Anchor smart contracts as well as frontends?',
        answer: 'Yes. Principal Engineer Sagor Ahamed builds both the Rust Anchor program and the sub-second React/Next.js frontend directly.'
      },
      {
        question: 'What is the staging timeline?',
        answer: 'Live testnet/devnet staging prototype in 48 hours under our 50/50 payment model.'
      }
    ]
  },
  {
    id: 'redis-rate-limiter-anti-bot-web3-presale',
    slug: 'redis-rate-limiter-anti-bot-web3-presale',
    title: 'Redis Token Bucket Rate Limiting: Stopping Sniper Bots & Presale Drainers in 2026 Web3 Launches',
    excerpt: 'Protect token launches and flash-sales from automated sniper bots. Implement sliding-window Redis rate limiters and Cloudflare Turnstile verification with zero latency.',
    category: 'Tech',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&fm=webp&q=80',
    keywords: [
      'Redis Token Bucket Rate Limiter',
      'Anti-Bot Protection Web3 Presale',
      'Cloudflare Turnstile Next.js 15',
      'DDoS Protection High Volume E-Commerce',
      'Sagor Ahamed CryptoWebBuild'
    ],
    summaryHeading: 'How Sniper Bots Drain Web3 Allocations in Under 2 Seconds',
    hookStory: 'Unprotected presale smart contracts and website checkout forms get slammed by automated bot scripts that consume all early bird allocations within milliseconds. Real community members and retail buyers get left out, causing community backlash. We deploy dual-layer defense: Cloudflare Turnstile cryptographic challenges at the edge and Redis sliding-window token buckets at the API layer.',
    benchmarkMetrics: [
      { label: 'Unprotected Endpoint', value: '100% Bot Drain', desc: 'Scripted bots overwhelm real buyers' },
      { label: 'Redis Sliding-Window', value: '0.00% Bot Penetration', desc: 'Strict IP & wallet rate limiting' },
      { label: 'Legitimate User Overhead', value: '< 15ms Latency', desc: 'Seamless non-intrusive verification' }
    ],
    technicalDeepDive: `### Sliding Window Rate Limiter in Redis Lua

\`\`\`lua
-- Sliding window rate limiting in pure Redis Lua script (atomic)
local key = KEYS[1]
local now = tonumber(ARGV[1])
local window = tonumber(ARGV[2])
local limit = tonumber(ARGV[3])
local clearBefore = now - window

redis.call('ZREMRANGEBYSCORE', key, 0, clearBefore)
local currentRequests = redis.call('ZCARD', key)

if currentRequests < limit then
    redis.call('ZADD', key, now, now)
    redis.call('EXPIRE', key, window)
    return 1 -- Allowed
else
    return 0 -- Rate limited
end
\`\`\``,
    faqs: [
      {
        question: 'Why use Redis Lua scripts instead of standard backend middleware?',
        answer: 'Lua scripts execute atomically inside Redis memory, eliminating race conditions even when thousands of bot threads fire at the exact same millisecond.'
      },
      {
        question: 'Does this interfere with real human buyers on mobile devices?',
        answer: 'No. Legitimate buyers easily pass within the allowed token window, and Cloudflare Turnstile verifies humans silently in 0.1s without annoying CAPTCHAs.'
      },
      {
        question: 'Can this protect e-commerce flash sales as well?',
        answer: 'Yes. The same sliding window prevents inventory hoarding and checkout bot manipulation during high-demand product drops.'
      },
      {
        question: 'How fast can this be deployed?',
        answer: 'Prototype and security audit in 48 hours under our 50/50 milestone guarantee.'
      }
    ]
  },
  {
    id: 'core-web-vitals-crushing-inp-under-50ms',
    slug: 'core-web-vitals-crushing-inp-under-50ms',
    title: 'Crushing Interaction to Next Paint (INP) Under 50ms: The Deep React 18 Concurrent Rendering Playbook',
    excerpt: 'Google officially replaced FID with INP in Core Web Vitals. Discover how we eliminate main-thread JavaScript freezing, optimize React 18 transitions, and maintain 100/100 PageSpeed scores.',
    category: 'Case Study',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&fm=webp&q=80',
    keywords: [
      'Interaction to Next Paint INP',
      'Core Web Vitals 2026 Optimization',
      'React 18 Concurrent Transitions',
      'Sub-Second JavaScript Execution',
      'Sagor Ahamed CryptoWebBuild'
    ],
    summaryHeading: 'The Hidden INP Trap: Why Fast LCP Still Results in Poor Google Rankings',
    hookStory: 'Many web agencies brag about fast initial loading (LCP), but when a mobile user clicks "Add to Cart" or taps a navigation menu, the screen freezes for 300ms while heavy React bundles block the CPU. Google Core Web Vitals measures this delay as Interaction to Next Paint (INP). High INP scores directly hurt organic Google search ranking and cause frustrating mobile UI stutter.',
    benchmarkMetrics: [
      { label: 'Standard WordPress/Shopify', value: '280ms–450ms INP (Poor)', desc: 'Heavy unoptimized JS bundles choke main thread' },
      { label: 'CryptoWebBuild Next.js', value: '38ms INP (Good)', desc: 'Non-blocking concurrent transitions & Web Workers' },
      { label: 'Mobile Conversion Lift', value: '+32% Completed', desc: 'Instant tactile feedback on every click' }
    ],
    technicalDeepDive: `### Eliminating Main-Thread Freezes with React 18 \`startTransition\`

\`\`\`typescript
import { useState, useTransition } from 'react';

export function HighThroughputProductFilter({ products }: { products: any[] }) {
  const [filter, setFilter] = useState('');
  const [filteredList, setFilteredList] = useState(products);
  const [isPending, startTransition] = useTransition();

  function handleFilterChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    // 1. Immediate urgent update: keeps input typing at 60fps (0ms INP lag)
    setFilter(val);

    // 2. Non-urgent background computation: yield to browser paint events
    startTransition(() => {
      const filtered = products.filter(p => p.name.toLowerCase().includes(val.toLowerCase()));
      setFilteredList(filtered);
    });
  }

  return (
    <div>
      <input type="text" value={filter} onChange={handleFilterChange} placeholder="Search catalog..." />
      {isPending && <span className="text-xs text-indigo-400">Filtering...</span>}
      <ProductGrid items={filteredList} />
    </div>
  );
}
\`\`\``,
    faqs: [
      {
        question: 'What is a "Good" INP score according to Google?',
        answer: 'Google requires an INP score of 200 milliseconds or less for a "Good" rating. At CryptoWebBuild, our engineered sites consistently clock under 50ms.'
      },
      {
        question: 'Does third-party tracking scripts (Pixel, Analytics) worsen INP?',
        answer: 'Yes, heavily. We offload heavy analytics scripts to Cloudflare Workers or run them via Partytown in background Web Workers, keeping the main thread free.'
      },
      {
        question: 'How do you verify INP before launching to production?',
        answer: 'We test across throttled mobile CPUs using Playwright and Google Lighthouse performance profiling in real network environments.'
      },
      {
        question: 'What is CryptoWebBuild’s speed guarantee?',
        answer: 'We guarantee 95–100 Mobile PageSpeed scores. You test the live staging build before paying the remaining 50% milestone.'
      }
    ]
  }
];

// --- AI TOPIC GENERATOR VIA GEMINI API ---
async function fetchGeminiGeneratedTopic(existingSlugs) {
  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    console.log('ℹ️ No GEMINI_API_KEY found in environment. Using curated high-ticket topic matrix.');
    return null;
  }

  console.log('⚡ Querying Gemini AI to craft an original high-converting architectural article...');

  const systemPrompt = `You are Sagor Ahamed, Principal Full-Stack Architect at CryptoWebBuild (cryptowebbuild.com).
You specialize in 0.4s sub-second Next.js 15, Python/Django & Celery asynchronous pipelines, 1-click bKash/Nagad/Stripe checkouts, Steadfast/Pathao courier automations, Web3 Solana/EVM high-throughput dApps, and 100/100 Core Web Vitals.
Your target audience: Serious business owners, e-commerce brands, and Web3 founders looking for custom engineering with 50/50 milestone terms.

Generate ONE brand-new, original, deeply technical architectural teardown article that has NOT been written yet.
The following slugs have ALREADY been published and MUST NOT be repeated:
${JSON.stringify(existingSlugs)}

Return ONLY valid JSON with this exact schema (no markdown, no extra commentary):
{
  "id": "slug-name-hyphenated",
  "slug": "slug-name-hyphenated",
  "title": "Compelling Title (under 65 chars)",
  "excerpt": "Meta description explaining problem, technical solution, and metric lift (140-155 chars)",
  "category": "Tech", // Must be one of: 'Tech', 'Guide', 'Case Study', 'Business'
  "readTime": "9 min read",
  "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&fm=webp&q=80",
  "keywords": ["Keyword 1", "Keyword 2", "Keyword 3", "Keyword 4", "Sagor Ahamed CryptoWebBuild"],
  "summaryHeading": "Punchy Problem Statement Heading",
  "hookStory": "Engaging real-world hook paragraph explaining client pain points and why ordinary approaches fail...",
  "benchmarkMetrics": [
    { "label": "Legacy Approach", "value": "Slow / Crashes", "desc": "Technical bottleneck description" },
    { "label": "CryptoWebBuild Architecture", "value": "0.3s Instant", "desc": "Optimized architecture description" },
    { "label": "Business Outcome", "value": "+240% Lift", "desc": "Concrete revenue or conversion impact" }
  ],
  "technicalDeepDive": "Detailed technical explanation including code snippets (TypeScript or Python) demonstrating the production architecture.",
  "faqs": [
    { "question": "Technical question 1?", "answer": "Clear, authoritative answer." },
    { "question": "Question 2?", "answer": "Clear, authoritative answer." },
    { "question": "Question 3?", "answer": "Clear, authoritative answer." },
    { "question": "How fast can CryptoWebBuild deploy this?", "answer": "Principal Engineer Sagor Ahamed provides a working staging prototype in 48 hours under our 50/50 terms." }
  ]
}`;

  const models = ['gemini-1.5-flash', 'gemini-2.0-flash', 'gemini-1.5-pro'];

  for (const model of models) {
    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: systemPrompt }] }],
          generationConfig: {
            temperature: 0.7,
            responseMimeType: 'application/json'
          }
        })
      });

      if (!response.ok) {
        console.warn(`Gemini API model ${model} responded with status: ${response.status}`);
        continue;
      }

      const result = await response.json();
      const rawText = result.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!rawText) continue;

      const parsed = JSON.parse(rawText.replace(/```json\s*|```/g, '').trim());

      if (parsed && parsed.slug && parsed.title && parsed.excerpt && !existingSlugs.includes(parsed.slug)) {
        if (!['Tech', 'Guide', 'Case Study', 'Business'].includes(parsed.category)) {
          parsed.category = 'Tech';
        }
        console.log(`✨ Successfully generated AI article via Gemini (${model}): "${parsed.title}"`);
        return parsed;
      }
    } catch (err) {
      console.warn(`Failed with model ${model}:`, err.message);
    }
  }

  return null;
}

export function generatePostComponent(topic) {
  const componentName = topic.slug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join('');

  return `import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ShieldCheck,
  ExternalLink,
  MessageSquare,
  ArrowRight,
  TrendingUp,
  Clock,
  Sparkles,
} from 'lucide-react';
import SEO from '../../components/SEO';
import ProTip from '../../components/blog/ProTip';
import ExpertBox from '../../components/blog/ExpertBox';
import BookingModal from '../../components/BookingModal';

const ${componentName}: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);

  const faqData = ${JSON.stringify(topic.faqs, null, 4)};
  const technicalDeepDiveCode = ${JSON.stringify(topic.technicalDeepDive)};

  return (
    <article className="max-w-4xl mx-auto px-6 py-8 md:py-12">
      <SEO
        title="${topic.title.replace(/"/g, '\\"')}"
        description="${topic.excerpt.replace(/"/g, '\\"')}"
        keywords={${JSON.stringify(topic.keywords)}}
        canonical="/blog/${topic.slug}"
        type="article"
        publishedTime="${new Date().toISOString()}"
        image="${topic.image}"
        faq={faqData}
      />

      {/* Back Link */}
      <div className="mb-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Engineering Articles</span>
        </Link>
      </div>

      {/* Header Badge & Title */}
      <header className="space-y-4 mb-10">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider">
            ${topic.category} · Architectural Teardown
          </span>
          <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            ${topic.readTime}
          </span>
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            Verified Production Blueprint
          </span>
        </div>

        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          ${topic.title}
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          ${topic.excerpt}
        </p>

        {/* Lead Engineer Metadata */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-200/80 dark:border-white/[0.08]">
          <div className="w-11 h-11 rounded-full overflow-hidden border border-slate-200 dark:border-white/20 shrink-0">
            <img
              src="/hero-avatar.webp"
              alt="Sagor Ahamed"
              width={44}
              height={44}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="font-bold text-sm text-slate-900 dark:text-white">
              Sagor Ahamed
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Principal Full-Stack Architect at CryptoWebBuild · 50/50 Milestone Terms
            </div>
          </div>
        </div>
      </header>

      {/* Featured Header Visual */}
      <div className="relative rounded-3xl overflow-hidden mb-12 border border-slate-200 dark:border-white/10 shadow-xl bg-slate-900">
        <img
          src="${topic.image}"
          alt="${topic.title.replace(/"/g, '')}"
          className="w-full h-72 sm:h-96 object-cover opacity-90 hover:scale-102 transition-transform duration-500"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
          <div className="text-white text-xs font-mono font-medium flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Targeting 100/100 Core Web Vitals &amp; Sub-Second Checkout Velocity</span>
          </div>
        </div>
      </div>

      {/* Section 1: The Problem & Story Hook */}
      <section className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed mb-12">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
          ${topic.summaryHeading}
        </h2>
        <p className="text-base sm:text-lg">
          ${topic.hookStory}
        </p>

        {/* Benchmark Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          ${topic.benchmarkMetrics.map(b => `
          <div className="p-5 rounded-2xl glass-panel border border-slate-200/80 dark:border-white/[0.08] space-y-1">
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold uppercase">${b.label}</div>
            <div className="font-display text-2xl font-bold text-indigo-600 dark:text-indigo-400">${b.value}</div>
            <div className="text-xs text-slate-600 dark:text-slate-400">${b.desc}</div>
          </div>`).join('\n')}
        </div>
      </section>

      {/* ProTip Component */}
      <div className="my-8">
        <ProTip
          title="Architectural Rule for High-Concurreny Checkouts"
          tip="Never execute external courier HTTP calls, SMS verification, or complex invoice PDF rendering synchronously inside the user's checkout request thread. Always delegate them to background Redis/Celery workers and return a 200 OK receipt immediately."
        />
      </div>

      {/* Technical Deep Dive */}
      <section className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed mb-12">
        <div className="prose dark:prose-invert max-w-none">
          <p>
            When scaling to hundreds of thousands in monthly revenue, every millisecond of lag translates directly into cart abandonment. By decoupling the presentation layer (Next.js 15) from the asynchronous data engine (Python/Django &amp; PostgreSQL), your storefront remains 100% immune to database locking bottlenecks.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900 text-slate-200 border border-white/10 font-mono text-xs sm:text-sm overflow-x-auto space-y-2 whitespace-pre-wrap">
          <div className="text-emerald-400 font-bold mb-2">// Verified Production Configuration &amp; Implementation</div>
          <div>{technicalDeepDiveCode}</div>
        </div>
      </section>

      {/* Expert Note Box */}
      <div className="my-10">
        <ExpertBox
          title="Direct Engineering Note"
          author="Sagor Ahamed"
          role="Principal Architect at CryptoWebBuild"
          avatar="/hero-avatar.webp"
        >
          &ldquo;We don't hand off Figma designs and wish you good luck. We build, code, and deploy the entire Next.js and Django stack directly for you. We provide a clickable staging prototype within 48 hours, and you only pay the remaining 50% after testing the live speed and checkout yourself.&rdquo;
        </ExpertBox>
      </div>

      {/* Section: Live Proof & Case Study Connections */}
      <section className="my-12 p-8 rounded-3xl glass-panel border border-indigo-500/20 bg-indigo-500/[0.02] space-y-4">
        <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-indigo-500" />
          <span>Real-World Proof: Edel Bangladesh &amp; ClickRunClaw</span>
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          We implemented these exact sub-second checkout pipelines on <strong className="text-slate-900 dark:text-white">Edel Bangladesh</strong>, enabling 1-click bKash/COD orders and automated Steadfast courier booking that resulted in a <span className="text-emerald-600 dark:text-emerald-400 font-bold">+240% sales increase</span> in month one. For <strong className="text-slate-900 dark:text-white">ClickRunClaw Cloud</strong>, our Python/Django vector architecture currently handles 7,000+ active users with sub-0.6s response times.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://cryptowebbuild.github.io/edel-bangladesh/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold inline-flex items-center gap-1.5"
          >
            <span>Inspect Edel Live</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <Link
            to="/shopfast"
            className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-xs font-semibold inline-flex items-center gap-1.5"
          >
            <span>ShopFast Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="my-12 space-y-6">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-panel border border-slate-200/80 dark:border-white/[0.08] space-y-2"
            >
              <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                {item.question}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final 50/50 Guarantee CTA Card */}
      <section className="my-12 p-8 sm:p-10 rounded-3xl glass-panel text-center space-y-6 border-2 border-indigo-500/30">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
          <ShieldCheck className="w-4 h-4" />
          <span>50/50 Milestone Terms · 48-Hour Live Prototype</span>
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Want This Architecture Built for Your Business?
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          Test a live, working Next.js and Django prototype in 48 hours. Pay the remaining 50% only after verifying speed and checkout perfection.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/contact"
            className="px-7 py-3.5 neon-button text-white text-sm font-semibold rounded-xl"
          >
            Claim 48-Hour Prototype
          </Link>
          <a
            href="https://wa.me/8801618138820?text=Hi%20Sagor%2C%20I%20read%20your%20article%20on%20${encodeURIComponent(topic.slug)}%20and%20want%20to%20discuss%20my%20project!"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold rounded-xl inline-flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Direct</span>
          </a>
        </div>
      </section>

      {BookingModal && (
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
        />
      )}
    </article>
  );
};

export default ${componentName};
`;
}

export async function runDailyBlogGenerator() {
  console.log('🤖 Running Automated Daily Blog Generator...');

  const blogPostsFile = path.resolve('data/blogPosts.ts');
  const appFile = path.resolve('App.tsx');
  const blogDir = path.resolve('pages/blog');

  // Read existing slugs
  const blogPostsContent = fs.readFileSync(blogPostsFile, 'utf-8');
  const existingSlugs = [];
  const slugRegex = /slug:\s*['"]([^'"]+)['"]/g;
  let m;
  while ((m = slugRegex.exec(blogPostsContent)) !== null) {
    existingSlugs.push(m[1]);
  }

  // 1. Try Gemini AI Generation first if API key is provided
  let nextTopic = await fetchGeminiGeneratedTopic(existingSlugs);

  // 2. If AI not used or returned null, use Curated Topic Matrix
  if (!nextTopic) {
    nextTopic = CURATED_TOPICS.find(t => !existingSlugs.includes(t.slug));
  }

  if (!nextTopic) {
    console.log('ℹ️ All topics in current matrix have already been published!');
    return null;
  }

  console.log(`📝 Publishing new daily post: "${nextTopic.title}" (slug: ${nextTopic.slug})`);

  // Generate PascalCase component name
  const componentName = nextTopic.slug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join('');

  // 1. Write the TSX Component
  const componentPath = path.join(blogDir, `${componentName}.tsx`);
  const componentCode = generatePostComponent(nextTopic);
  fs.writeFileSync(componentPath, componentCode, 'utf-8');
  console.log(`✅ Generated component at: ${componentPath}`);

  // 2. Append to data/blogPosts.ts
  const newPostObject = `  {
    id: '${nextTopic.id}',
    slug: '${nextTopic.slug}',
    title: '${nextTopic.title.replace(/'/g, "\\'")}',
    excerpt: '${nextTopic.excerpt.replace(/'/g, "\\'")}',
    date: '${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}',
    readTime: '${nextTopic.readTime}',
    category: '${nextTopic.category}',
    image: '${nextTopic.image}',
    keywords: ${JSON.stringify(nextTopic.keywords, null, 6)}
  },\n`;

  const updatedBlogPostsContent = blogPostsContent.replace(
    'export const blogPosts: BlogPost[] = [',
    `export const blogPosts: BlogPost[] = [\n${newPostObject}`
  );
  fs.writeFileSync(blogPostsFile, updatedBlogPostsContent, 'utf-8');
  console.log('✅ Updated data/blogPosts.ts with new article');

  // 3. Register route in App.tsx
  let appContent = fs.readFileSync(appFile, 'utf-8').replace(/\r\n/g, '\n');
  const lazyImport = `const ${componentName} = lazyWithRetry(() => import('./pages/blog/${componentName}'));\n`;
  const routeLine = `          <Route path="/blog/${nextTopic.slug}" element={<${componentName} />} />\n`;

  // Insert lazy import right before PageLoader or after last blog import
  const importAnchor = '// --- Blog Posts Imports ---';
  appContent = appContent.replace(importAnchor, `${importAnchor}\n${lazyImport}`);

  // Insert Route line right before 404
  const routeAnchor = '{/* --- 404 Catch-All --- */}';
  appContent = appContent.replace(routeAnchor, `${routeLine}          ${routeAnchor}`);

  fs.writeFileSync(appFile, appContent, 'utf-8');
  console.log('✅ Registered lazyWithRetry import and Route in App.tsx');

  return nextTopic;
}

// Execute when invoked directly
if (process.argv[1] && process.argv[1].endsWith('generate-daily-blog.js')) {
  runDailyBlogGenerator().catch(console.error);
}
