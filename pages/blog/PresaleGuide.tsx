import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import ExpertBox from '../../components/blog/ExpertBox';
import TableOfContents from '../../components/blog/TableOfContents';

const PresaleGuide: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#020617] transition-colors duration-300">
      <SEO
        title="How to Build a Token Presale DApp: The Technical Roadmap (2026)"
        description="Don't launch a broken presale. A technical guide to building secure, high-concurrency ICO dashboards. Smart contracts, React integration, and anti-bot security."
        keywords={['Build Presale DApp', 'ICO Website Development', 'Token Sale Smart Contract', 'Web3 Presale Dashboard', 'Launchpad Development']}
        canonical="/how-to-build-presale-dapp"
        type="article"
        publishedTime="2026-01-10"
        author="Sagor Ahamed"
      />

      <article className="container mx-auto px-6 pt-32 pb-24">

        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16 animate-slide-up text-center">
           <Link to="/blog" className="text-teal-600 dark:text-teal-400 font-bold mb-6 inline-flex items-center hover:underline">
             ← Back to Insights
           </Link>
           <h1 className="font-display text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
             How to Build a Secure <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Token Presale DApp</span>
           </h1>
           <div className="flex items-center justify-center gap-4 text-sm text-gray-500 font-medium">
             <span>Jan 10, 2026</span>
             <span>•</span>
             <span>15 min read</span>
             <span>•</span>
             <span className="bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full text-xs font-bold uppercase">Technical Guide</span>
           </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">

          {/* Main Content */}
          <div className="lg:w-2/3 prose prose-lg md:prose-xl dark:prose-invert max-w-none animate-slide-up" style={{ animationDelay: '0.1s' }}>

            <p className="lead text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300">
              A Presale (or ICO) is the most critical moment for a crypto project. It's when you ask strangers to trust you with their money. If your website crashes, or the "Claim" button fails, your project is dead on arrival.
            </p>

            <ExpertBox type="warning" title="The High Concurrency Problem">
              Standard websites handle traffic sequentially. Presales are different. 10,000 users will try to hit "Buy" at the <strong>exact same second</strong> the round opens. If your RPC nodes aren't load-balanced, your UI will freeze, and investors will FUD.
            </ExpertBox>

            <h2 id="architecture">1. The Architecture (React + Wagmi + Smart Contract)</h2>
            <p>
              Do not use WordPress. Do not use Wix. You need a dedicated React application.
            </p>
            <h3>The Stack:</h3>
            <ul>
              <li><strong>Frontend:</strong> Next.js or Vite (React). Fast rendering is essential.</li>
              <li><strong>Wallet Connection:</strong> RainbowKit or AppKit (formerly Web3Modal). These handle the messy edge cases of mobile wallets well.</li>
              <li><strong>Contract Interaction:</strong> Wagmi (Viem). It's type-safe and handles multi-chain logic beautifully.</li>
              <li><strong>Backend (Optional but Recommended):</strong> A simple Node.js server to track "Off-Chain" whitelists and serve signatures for gasless transactions.</li>
            </ul>

            <h2 id="smart-contract">2. The Smart Contract (The Vault)</h2>
            <p>
              Your contract needs specific features for a presale:
            </p>
            <ul>
              <li><strong>Stages:</strong> Seed Round, Private Round, Public Round. Each with different prices and limits.</li>
              <li><strong>Vesting:</strong> You must lock tokens. "Linear Vesting" (drip release) is preferred over "Cliff Vesting" (all at once) to prevent dumping.</li>
              <li><strong>Emergency Withdraw:</strong> A function (protected by Multisig) to recover funds if something goes wrong.</li>
            </ul>

            <ExpertBox type="pro" title="Security Audit is Mandatory">
              Never launch a presale contract without at least one audit (CertiK, Hacken, or a trusted independent). I can coordinate this process for you.
            </ExpertBox>

            <h2 id="frontend-security">3. Frontend Security (Anti-Phishing)</h2>
            <p>
              Hackers don't attack the contract; they attack the website (DNS Hijacking or XSS).
            </p>
            <ul>
              <li><strong>Content Security Policy (CSP):</strong> Restrict which domains your site can talk to.</li>
              <li><strong>Hardcoded ABI:</strong> Never fetch your ABI or Contract Address from a database. Hardcode it in the build. If your DB is hacked, they can't swap the address.</li>
              <li><strong>Auto-Disconnect:</strong> Automatically disconnect wallets after 15 minutes of inactivity.</li>
            </ul>

            <h2 id="user-experience">4. UX: The "Buy" Flow</h2>
            <p>
              Complexity kills conversion. Your UI should be stupidly simple.
            </p>
            <ol>
              <li><strong>Connect Wallet:</strong> Big button. Detects chain automatically. Prompts network switch (e.g., ETH to Base) instantly.</li>
              <li><strong>Input Amount:</strong> Show the USD equivalent in real-time (fetch price from Chainlink Oracle or CoinGecko API).</li>
              <li><strong>Approve & Buy:</strong> Handle the "Approve" transaction (for USDT/USDC) cleanly. Show a "Pending" spinner.</li>
              <li><strong>Success State:</strong> Show a "Confetti" animation. It sounds silly, but it gives dopamine confirmation.</li>
            </ol>

            <h2 id="cost-timeline">5. Cost & Timeline</h2>
            <p>
              Building a custom presale DApp isn't cheap, but it's an investment in asset security.
            </p>
            <p>
              <strong>Timeline:</strong> 3-6 Weeks (including Audit).
              <br/>
              <strong>Cost:</strong> See my <Link to="/crypto-website-cost">Detailed Pricing Breakdown</Link>.
            </p>

            <h2 id="conclusion">Conclusion</h2>
            <p>
              A presale site is high-stakes software engineering. One bug equals lost funds.
            </p>
            <p>
              I have built presale dashboards that processed over $5M in volume without a single glitch.
            </p>

            <div className="mt-12 p-8 bg-teal-50 dark:bg-teal-900/20 rounded-2xl border border-teal-100 dark:border-teal-500/20 text-center">
              <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4">Planning a Token Launch?</h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Don't risk it with a template. Let's build a secure, audited Launchpad.
              </p>
              <Link to="/contact" className="inline-block px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl transition-colors">
                Discuss Your Presale
              </Link>
            </div>

          </div>

          {/* Sidebar */}
          <div className="hidden lg:block lg:w-1/3">
             <TableOfContents />
          </div>

        </div>
      </article>
    </div>
  );
};

export default PresaleGuide;
