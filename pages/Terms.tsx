import React from 'react';
import SEO from '../components/SEO';

const Terms: React.FC = () => {
  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <SEO 
        title="Terms of Service | CryptoWebBuild"
        description="Terms and conditions for using CryptoWebBuild services."
      />
      
      <div className="max-w-4xl mx-auto animate-slide-up">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-text-main mb-8 text-center">
          Terms of Service
        </h1>
        
        <div className="glass-panel p-8 md:p-16 rounded-3xl bg-surface shadow-xl shadow-purple-900/5 border-t border-purple-500/20">
          <div className="prose prose-lg prose-invert max-w-none text-text-muted">
            <p className="text-sm uppercase tracking-widest font-bold mb-8 text-cyan-500">Last Updated: November 2025</p>

            <h3>1. Acceptance of Terms</h3>
            <p>
              By accessing and using this website (CryptoWebBuild), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>

            <h3>2. Services</h3>
            <p>
              CryptoWebBuild provides web development services including but not limited to landing pages, e-commerce stores, and web applications. Specific deliverables, timelines, and costs are agreed upon in separate project contracts or invoices.
            </p>

            <h3>3. Intellectual Property</h3>
            <p>
              Upon full payment, intellectual property rights for the developed website code and custom designs are transferred to the client, unless otherwise specified in a separate agreement. CryptoWebBuild retains the right to display the project in portfolios and case studies.
            </p>

            <h3>4. Payments and Refunds</h3>
            <p>
              Payments are typically milestone-based. Deposits are non-refundable once work has commenced. Final files and rights are transferred upon final payment settlement. We accept standard fiat and select cryptocurrency payments.
            </p>

            <h3>5. Limitation of Liability</h3>
            <p>
              CryptoWebBuild shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or the inability to use the services or for cost of procurement of substitute goods and services.
            </p>
            <p>
              We are developers, not financial advisors. We do not offer financial advice regarding cryptocurrencies, tokens, or investments. We are not responsible for the financial performance of any project we build for.
            </p>

            <h3>6. Third-Party Services</h3>
            <p>
              Our services may integrate with third-party tools (e.g., Stripe, Cloudflare, Blockchain RPCs). We are not responsible for the uptime, security, or changes to these third-party platforms.
            </p>

            <h3>7. Governing Law</h3>
            <p>
              Any disputes arising out of or related to these Terms of Service and/or any use by you of the Site shall be governed by the laws of the jurisdiction in which the developer resides, without regard to the conflicts of laws provisions therein.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;