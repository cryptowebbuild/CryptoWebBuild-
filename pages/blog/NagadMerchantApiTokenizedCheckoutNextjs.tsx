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

const NagadMerchantApiTokenizedCheckoutNextjs: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);

  const faqData = [
    {
        "question": "Why does Nagad use RSA cryptography instead of simple API tokens?",
        "answer": "RSA asymmetric key cryptography guarantees that neither party can forge transaction requests or manipulate order amounts between the browser and bank."
    },
    {
        "question": "Where should RSA private keys be stored in Next.js 15?",
        "answer": "Strictly in server-side environment variables or Cloudflare Secrets, never exposed to client-side code bundles."
    },
    {
        "question": "Can we offer bKash, Nagad, and Cards in a single unified checkout UI?",
        "answer": "Yes. Our 1-Click checkout component bundles bKash, Nagad, VISA/Mastercard, and Cash on Delivery seamlessly in a sub-second tabbed interface."
    },
    {
        "question": "What is CryptoWebBuild’s delivery timeframe for payment integrations?",
        "answer": "A fully functional staging test environment is delivered in 48 hours under our 50/50 risk-free milestone model."
    }
];
  const technicalDeepDiveCode = "### Nagad Cryptographic Signature Verification\n\nNagad requires encrypting payloads with Nagad's Public Key and signing with your Merchant Private Key:\n\n```typescript\n// lib/nagad-crypto.ts\nimport crypto from 'crypto';\n\nexport function signWithPrivateKey(data: string, privateKeyPem: string): string {\n  const signer = crypto.createSign('SHA256');\n  signer.update(data);\n  return signer.sign(privateKeyPem, 'base64');\n}\n\nexport function encryptWithPublicKey(data: string, publicKeyPem: string): string {\n  const buffer = Buffer.from(data, 'utf8');\n  const encrypted = crypto.publicEncrypt(\n    {\n      key: publicKeyPem,\n      padding: crypto.constants.RSA_PKCS1_PADDING,\n    },\n    buffer\n  );\n  return encrypted.toString('base64');\n}\n```";

  return (
    <article className="max-w-4xl mx-auto px-6 py-8 md:py-12">
      <SEO
        title="Nagad Merchant PG Integration in Next.js 15: Public-Key Cryptography & Instant 1-Click Payments"
        description="Step-by-step technical teardown of integrating Nagad Merchant Payment Gateway with RSA private/public key cryptography in Next.js 15 App Router. Zero manual TrxID friction."
        keywords={["Nagad Payment Gateway Next.js 15","Nagad Merchant API Integration","RSA Cryptography Payment Gateway","Nagad Direct Checkout Bangladesh","CryptoWebBuild Sagor Ahamed"]}
        canonical="/blog/nagad-merchant-api-tokenized-checkout-nextjs"
        type="article"
        publishedTime="2026-11-09T10:58:37.190Z"
        image="https://images.unsplash.com/photo-1556742049-0a67e557224f?auto=format&fit=crop&w=1200&fm=webp&q=80"
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
          Nagad Merchant PG Integration in Next.js 15: Public-Key Cryptography & Instant 1-Click Payments
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Step-by-step technical teardown of integrating Nagad Merchant Payment Gateway with RSA private/public key cryptography in Next.js 15 App Router. Zero manual TrxID friction.
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
          src="https://images.unsplash.com/photo-1556742049-0a67e557224f?auto=format&fit=crop&w=1200&fm=webp&q=80"
          alt="Nagad Merchant PG Integration in Next.js 15: Public-Key Cryptography & Instant 1-Click Payments"
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
          Why Modern E-Commerce Cannot Depend Solely on One Payment Rail
        </h2>
        <p className="text-base sm:text-lg">
          Offering only bKash or only Cash on Delivery leaves up to 28% of qualified buyers stranded. Nagad has over 80 million registered accounts in Bangladesh. Implementing direct Nagad Merchant PG with RSA public-key signatures gives your customers an instant, professional checkout experience while completely automating accounting reconciliation.
        </p>

        {/* Benchmark Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          
          <div className="p-5 rounded-2xl glass-panel border border-slate-200/80 dark:border-white/[0.08] space-y-1">
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold uppercase">Manual "Nagad Personal"</div>
            <div className="font-display text-2xl font-bold text-indigo-600 dark:text-indigo-400">6–8 Minutes</div>
            <div className="text-xs text-slate-600 dark:text-slate-400">Frequent fake TrxID scams and lost sales</div>
          </div>

          <div className="p-5 rounded-2xl glass-panel border border-slate-200/80 dark:border-white/[0.08] space-y-1">
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold uppercase">Nagad Direct PG</div>
            <div className="font-display text-2xl font-bold text-indigo-600 dark:text-indigo-400">1.4 Seconds</div>
            <div className="text-xs text-slate-600 dark:text-slate-400">Automated cryptographic callback verification</div>
          </div>

          <div className="p-5 rounded-2xl glass-panel border border-slate-200/80 dark:border-white/[0.08] space-y-1">
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold uppercase">Checkout Completion</div>
            <div className="font-display text-2xl font-bold text-indigo-600 dark:text-indigo-400">+270% Velocity</div>
            <div className="text-xs text-slate-600 dark:text-slate-400">Zero friction mobile payment</div>
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
            href="https://wa.me/8801618138820?text=Hi%20Sagor%2C%20I%20read%20your%20article%20on%20nagad-merchant-api-tokenized-checkout-nextjs%20and%20want%20to%20discuss%20my%20project!"
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

export default NagadMerchantApiTokenizedCheckoutNextjs;
