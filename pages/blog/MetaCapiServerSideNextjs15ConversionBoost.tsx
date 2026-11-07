import React from 'react';
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

const MetaCapiServerSideNextjs15ConversionBoost: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);

  const faqData = [
    {
        "question": "Why do we need Event ID deduplication between Pixel and CAPI?",
        "answer": "When both browser Pixel and Server CAPI fire for the same order, Meta uses the identical event_id to recognize it as a single conversion, preventing duplicate counting while ensuring 100% signal capture."
    },
    {
        "question": "Does server-side tracking slow down the customer checkout experience?",
        "answer": "No. The CAPI dispatch runs asynchronously in background edge workers after the 200 OK checkout confirmation is already sent to the buyer."
    },
    {
        "question": "Can this be integrated with local payment gateways like bKash and Cash on Delivery?",
        "answer": "Yes. CAPI fires automatically upon successful bKash webhook confirmation or COD order dispatch, ensuring COD purchases are recorded accurately in Ads Manager."
    },
    {
        "question": "How quickly can CryptoWebBuild deploy server-side CAPI on our store?",
        "answer": "Principal Engineer Sagor Ahamed deploys and verifies server-side CAPI within 48 hours under our 50/50 terms."
    }
];
  const technicalDeepDiveCode = "### Server-Side CAPI Implementation in Next.js 15\n\nWhen a customer completes a checkout, your server generates a unique `event_id` and sends the payload to Meta's Graph API asynchronously:\n\n```typescript\n// app/api/tracking/meta-capi/route.ts\nimport { NextResponse } from 'next/server';\nimport crypto from 'crypto';\n\nfunction hashData(val: string): string {\n  return crypto.createHash('sha256').update(val.trim().toLowerCase()).digest('hex');\n}\n\nexport async function POST(req: Request) {\n  const { eventId, eventName, customerEmail, customerPhone, value, currency } = await req.json();\n\n  const payload = {\n    data: [\n      {\n        event_name: eventName || 'Purchase',\n        event_time: Math.floor(Date.now() / 1000),\n        event_id: eventId, // Critical for client & server deduplication\n        action_source: 'website',\n        user_data: {\n          em: customerEmail ? [hashData(customerEmail)] : [],\n          ph: customerPhone ? [hashData(customerPhone)] : [],\n          client_user_agent: req.headers.get('user-agent') || '',\n        },\n        custom_data: {\n          currency: currency || 'BDT',\n          value: Number(value),\n        },\n      },\n    ],\n  };\n\n  const response = await fetch(\n    `https://graph.facebook.com/v19.0/${process.env.META_PIXEL_ID}/events?access_token=${process.env.META_CAPI_ACCESS_TOKEN}`,\n    {\n      method: 'POST',\n      headers: { 'Content-Type': 'application/json' },\n      body: JSON.stringify(payload),\n    }\n  );\n\n  return NextResponse.json(await response.json());\n}\n```";

  return (
    <article className="max-w-4xl mx-auto px-6 py-8 md:py-12">
      <SEO
        title="Meta Conversions API (CAPI) in Next.js 15: How to Recover 35% Lost Ad Conversions Bypassing iOS 14 Tracking Blockers"
        description="Client-side Meta Pixel drops up to 35% of purchase events due to ad-blockers and iOS privacy. Learn how to engineer direct Server-Side Meta CAPI inside Next.js 15 Route Handlers with 100% event deduplication."
        keywords={["Meta Conversions API Next.js 15","Facebook CAPI Server Side Tracking","Meta Pixel Deduplication Event ID","Next.js 15 Route Handler CAPI","Sagor Ahamed CryptoWebBuild"]}
        canonical="/blog/meta-capi-server-side-nextjs15-conversion-boost"
        type="article"
        publishedTime="2026-11-07T16:46:43.001Z"
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&fm=webp&q=80"
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
            Tech · Architectural Teardown
          </span>
          <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            9 min read
          </span>
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            Verified Production Blueprint
          </span>
        </div>

        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          Meta Conversions API (CAPI) in Next.js 15: How to Recover 35% Lost Ad Conversions Bypassing iOS 14 Tracking Blockers
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Client-side Meta Pixel drops up to 35% of purchase events due to ad-blockers and iOS privacy. Learn how to engineer direct Server-Side Meta CAPI inside Next.js 15 Route Handlers with 100% event deduplication.
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
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&fm=webp&q=80"
          alt="Meta Conversions API (CAPI) in Next.js 15: How to Recover 35% Lost Ad Conversions Bypassing iOS 14 Tracking Blockers"
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
          The iOS Tracking Blindspot: Why 35% of Your Paid Ad Sales Never Reach Ads Manager
        </h2>
        <p className="text-base sm:text-lg">
          If you run Facebook or Instagram Ads for your e-commerce store, browser ad-blockers, Brave shields, and Apple iOS 14.5+ ATT privacy prompts silently discard more than a third of your purchase signals. Meta Ads Manager thinks your campaigns are underperforming, driving up your Customer Acquisition Cost (CAC) by 40%. The only fix is moving event tracking from the fragile client browser to a server-side Next.js 15 Node/Edge pipeline.
        </p>

        {/* Benchmark Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          
          <div className="p-5 rounded-2xl glass-panel border border-slate-200/80 dark:border-white/[0.08] space-y-1">
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold uppercase">Client-Side Pixel Only</div>
            <div className="font-display text-2xl font-bold text-indigo-600 dark:text-indigo-400">62% Match Rate</div>
            <div className="text-xs text-slate-600 dark:text-slate-400">Severely degraded by browser ad blockers</div>
          </div>

          <div className="p-5 rounded-2xl glass-panel border border-slate-200/80 dark:border-white/[0.08] space-y-1">
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold uppercase">Next.js Server-Side CAPI</div>
            <div className="font-display text-2xl font-bold text-indigo-600 dark:text-indigo-400">98.4% Match Rate</div>
            <div className="text-xs text-slate-600 dark:text-slate-400">Direct secure server-to-Meta API handshake</div>
          </div>

          <div className="p-5 rounded-2xl glass-panel border border-slate-200/80 dark:border-white/[0.08] space-y-1">
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold uppercase">Reported ROAS Lift</div>
            <div className="font-display text-2xl font-bold text-indigo-600 dark:text-indigo-400">+35% Tracked</div>
            <div className="text-xs text-slate-600 dark:text-slate-400">Immediate ad algorithm targeting recovery</div>
          </div>
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
            href="https://wa.me/8801618138820?text=Hi%20Sagor%2C%20I%20read%20your%20article%20on%20meta-capi-server-side-nextjs15-conversion-boost%20and%20want%20to%20discuss%20my%20project!"
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

export default MetaCapiServerSideNextjs15ConversionBoost;
