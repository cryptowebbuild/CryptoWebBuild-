import React from 'react';
import SEO from '../components/SEO';

const Privacy: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <SEO
        title="Privacy Policy | CryptoWebBuild"
        description="Privacy Policy for CryptoWebBuild. Learn how we protect your project data, inquiries, and intellectual property."
        canonical="/privacy"
      />

      <div className="p-8 md:p-12 rounded-[32px] bg-white dark:bg-[#020617] glass-panel border border-gray-200 dark:border-white/5 shadow-xl animate-slide-up">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 font-bold uppercase tracking-wider">
          Last Updated: January 2026 • CryptoWebBuild
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 space-y-6">
          <p>
            At <strong>CryptoWebBuild</strong> (<code>https://cryptowebbuild.com</code>), founded by Sagor Ahamed, we respect your privacy and are committed to protecting your personal and business information.
          </p>
          <h2>1. Information We Collect</h2>
          <p>
            When you request a 48-hour prototype, submit a project audit form, or contact us via Email, WhatsApp (<code>+880 1618-138820</code>), or Telegram (<code>@cryptowebbuild</code>), we collect only the details you voluntarily provide (such as your name, email address, website URL, and project requirements).
          </p>
          <h2>2. How We Use Your Data</h2>
          <p>
            Your information is used strictly to evaluate your technical requirements, prepare your custom prototype or SEO audit, and communicate project milestones. We never sell, rent, or trade your data to third parties.
          </p>
          <h2>3. Confidentiality &amp; AI Data Security</h2>
          <p>
            All proprietary documentation, source code, and RAG knowledge base files shared with CryptoWebBuild are isolated, encrypted, and covered by strict confidentiality standards.
          </p>
          <h2>4. Contact</h2>
          <p>
            For any privacy inquiries, contact us at{' '}
            <a href="mailto:hello@cryptowebbuild.com">hello@cryptowebbuild.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
