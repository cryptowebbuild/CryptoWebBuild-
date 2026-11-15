import React from 'react';
import SEO from '../components/SEO';

const Terms: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <SEO
        title="Terms of Service | CryptoWebBuild"
        description="Terms of Service, 50/50 Risk-Reversal Guarantee, and intellectual property handover policies for CryptoWebBuild."
        canonical="/terms"
      />

      <div className="p-8 md:p-12 rounded-[32px] bg-white dark:bg-[#020617] glass-panel border border-gray-200 dark:border-white/5 shadow-xl animate-slide-up">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 font-bold uppercase tracking-wider">
          Last Updated: November 2026 • CryptoWebBuild
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-6">
          <p>
            Welcome to <strong>CryptoWebBuild</strong> (<code>https://cryptowebbuild.com</code>). By engaging our Full-Stack Web Engineering, Technical SEO, or AI Automation services, you agree to the following terms:
          </p>
          <h2>1. 50/50 Risk-Reversal &amp; Milestone Structure</h2>
          <p>
            Standard engagements require a 50% upfront deposit to initiate architecture and development. The remaining 50% is payable only upon live verification of the agreed prototype, website, or custom AI agent on our staging or production environment.
          </p>
          <h2>2. 100% Source Code &amp; IP Ownership</h2>
          <p>
            Upon receipt of final milestone payment, 100% of custom source code, GitHub repositories, database schemas, and deployment configurations are transferred directly to the client with zero vendor lock-in.
          </p>
          <h2>3. 48-Hour Prototype &amp; Delivery</h2>
          <p>
            The 48-hour prototype is the first clickable staging build, measured from kickoff and receipt of the deposit, for projects that have supplied the required content and access. Full delivery timelines are confirmed in the written scope and typically range from 3 to 7 business days.
          </p>
          <h2>4. 30-Day Warranty</h2>
          <p>
            Every launch includes 30 days of bug fixes for defects in the delivered scope, starting on the launch date. The warranty does not cover new features, third-party service changes, content edits, or issues caused by code or plugins added by others after handover.
          </p>
          <h2>5. Refunds, Cancellation &amp; Liability</h2>
          <p>
            The 50% deposit covers architecture and build time and is non-refundable after kickoff, except where CryptoWebBuild misses the agreed staging date by more than five business days. If the project is cancelled before kickoff, any amount paid is refunded in full. Our total liability for any claim is limited to the fees paid for the affected project. We are not liable for indirect or consequential loss.
          </p>
          <h2>6. Governing Law</h2>
          <p>
            These terms are governed by the laws of Bangladesh. The courts of Dhaka have exclusive jurisdiction, unless a separate written agreement says otherwise.
          </p>
          <h2>7. Contact</h2>
          <p>
            For contract or service questions, reach us at{' '}
            <a href="mailto:hello@cryptowebbuild.com">hello@cryptowebbuild.com</a> or WhatsApp{' '}
            <a href="https://wa.me/8801618138820">+880 1618-138820</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;