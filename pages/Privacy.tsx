import React from 'react';
import { Shield } from 'lucide-react';
import SEO from '../components/SEO';

const Privacy: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 lg:py-24 max-w-4xl min-h-screen">
      <SEO title="Privacy Policy | CryptoWebBuild"
        description="Privacy Policy and Data Handling procedures for CryptoWebBuild's Elite AI Infrastructure and Web3 services."
        canonical="/privacy"
      />
      
      <div className="text-center mb-16 gpu-accelerated animate-slide-up">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-6 border border-purple-200 dark:border-purple-800 shadow-lg shadow-purple-500/20">
          <Shield className="w-8 h-8" />
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
          Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600">Policy</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Last Updated: May 2026
        </p>
      </div>

      <div className="glass-panel rounded-3xl p-8 md:p-12 shadow-2xl gpu-accelerated animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-purple-500 hover:prose-a:text-purple-600">
          <p className="lead text-xl text-gray-600 dark:text-gray-300 font-medium">
            At CryptoWebBuild, we engineer elite AI Agent Infrastructure and Web3 Growth Funnels. We treat your corporate data, proprietary operational logic, and tokenomics strategies with the highest level of cryptographic and operational security.
          </p>

          <div className="mt-12 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-white/10 pb-4 mb-6">
                1. Enterprise Data Collection & Processing
              </h2>
              <p>
                To build and deploy custom autonomous AI agents and complex Web3 architectures, we require access to specific operational data. We classify and protect this data strictly:
              </p>
              <ul className="list-disc pl-6 space-y-3 mt-4 text-gray-600 dark:text-gray-400">
                <li><strong className="text-gray-900 dark:text-white">Proprietary Training Data:</strong> Information you provide for RAG (Retrieval-Augmented Generation) ingestion, including whitepapers, private community logs, and business logic matrices.</li>
                <li><strong className="text-gray-900 dark:text-white">Technical Architecture Data:</strong> Smart contract ABIs, API keys, staging environment credentials, and server configurations necessary for frontend integration.</li>
                <li><strong className="text-gray-900 dark:text-white">Identity Data:</strong> Executive contact information, Telegram/Discord handles for project management, and billing details.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-white/10 pb-4 mb-6">
                2. Data Security & Encryption
              </h2>
              <p>
                We implement military-grade security protocols for all client data:
              </p>
              <ul className="list-disc pl-6 space-y-3 mt-4 text-gray-600 dark:text-gray-400">
                <li>All proprietary training data utilized for Custom LLM deployments is strictly sandboxed. We use isolated vector databases to ensure zero cross-contamination between client projects.</li>
                <li>Your data is never used to train foundational public models (e.g., OpenAI, Anthropic) without explicit enterprise data-privacy agreements in place.</li>
                <li>API keys and environment variables are encrypted at rest using industry-standard KMS (Key Management Services) and are only decrypted in volatile memory during deployment phases.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-white/10 pb-4 mb-6">
                3. Web3 & Tokenomics Integrity
              </h2>
              <p>
                CryptoWebBuild is committed to the integrity of the decentralized ecosystem. We handle sensitive pre-launch data, such as tokenomics distribution models and TGE (Token Generation Event) timelines, under strict Non-Disclosure Agreements (NDAs). We do not engage in front-running, nor do we share internal launch strategies with external entities or marketing partners without explicit authorization.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-white/10 pb-4 mb-6">
                4. Third-Party Infrastructure Providers
              </h2>
              <p>
                To deliver our elite services, we integrate with secure third-party providers (e.g., Cloudflare for edge computing, Supabase for backend databases, Vercel for frontend hosting, and various RPC node providers). While we meticulously vet these partners for compliance with SOC 2 and ISO 27001 standards, we do not control their independent privacy practices.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-white/10 pb-4 mb-6">
                5. Contact & Compliance Officer
              </h2>
              <p>
                If you require data deletion, infrastructure audit reports, or have inquiries regarding our compliance protocols regarding your proprietary AI models, please contact our lead systems architect directly via our secure channel: <a href="mailto:hello@cryptowebbuild.com" className="font-bold text-purple-500 hover:text-purple-400">hello@cryptowebbuild.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
