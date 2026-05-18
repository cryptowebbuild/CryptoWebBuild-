import React, { useState } from 'react';

const FreeAuditCTA: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send data to API here
    setSubmitted(true);
  };

  return (
    <div className="my-16 bg-white dark:bg-[#1e293b] p-8 md:p-12 rounded-[32px] border border-gray-200 dark:border-white/10 shadow-xl max-w-3xl mx-auto text-center">
      <h3 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-4">Get a Free Technical Audit</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-8 font-medium">Find out exactly what's slowing down your website or how AI can scale your operations. No obligations.</p>

      {submitted ? (
        <div className="p-6 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 font-bold rounded-2xl">
          Request received! We'll be in touch within 24 hours.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="audit-name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Name</label>
              <input type="text" id="audit-name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#0f172a] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="audit-email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Work Email</label>
              <input type="email" id="audit-email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#0f172a] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="john@company.com" />
            </div>
          </div>
          <div>
            <label htmlFor="audit-url" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Website URL (Optional)</label>
            <input type="url" id="audit-url" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#0f172a] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="https://yourwebsite.com" />
          </div>
          <button type="submit" className="mt-4 w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold py-4 rounded-xl hover:scale-[1.02] transition-transform shadow-lg shadow-purple-500/25">
            Request Free Audit
          </button>
        </form>
      )}
    </div>
  );
};

export default FreeAuditCTA;
