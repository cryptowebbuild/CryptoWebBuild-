import React from 'react';
import SEO from '../components/SEO';

const Privacy: React.FC = () => {
  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <SEO 
        title="Privacy Policy | CryptoWebBuild"
        description="Our privacy policy outlining how we collect, use, and protect your data."
      />
      
      <div className="max-w-4xl mx-auto animate-slide-up">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-text-main mb-8 text-center">
          Privacy Policy
        </h1>
        
        <div className="glass-panel p-8 md:p-16 rounded-3xl bg-surface shadow-xl shadow-purple-900/5 border-t border-purple-500/20">
          <div className="prose prose-lg prose-invert max-w-none text-text-muted">
            <p className="text-sm uppercase tracking-widest font-bold mb-8 text-cyan-500">Last Updated: November 2025</p>

            <h3>1. Introduction</h3>
            <p>
              Welcome to CryptoWebBuild. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>

            <h3>2. Data We Collect</h3>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
            </p>
            <ul>
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes email address and telephone numbers submitted via contact forms.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data:</strong> includes information about how you use our website and services (via Google Analytics).</li>
            </ul>

            <h3>3. How We Use Your Data</h3>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul>
              <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., building your website).</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal or regulatory obligation.</li>
            </ul>

            <h3>4. Cookies</h3>
            <p>
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
            </p>

            <h3>5. Third-Party Links</h3>
            <p>
              This website may include links to third-party websites, plug-ins and applications (such as crypto exchanges or wallets). Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
            </p>

            <h3>6. Contact Details</h3>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us via the contact form on our website or email at: hello@cryptowebbuild.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;