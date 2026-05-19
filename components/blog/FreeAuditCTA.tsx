import React, { useState } from 'react';

const FreeAuditCTA: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append("access_key", "3e10ed03-3f9f-406f-b087-1871c9dec81a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="my-16 bg-white dark:bg-[#020617] p-8 md:p-12 rounded-[32px] border border-gray-200 dark:border-white/10 shadow-xl max-w-3xl mx-auto text-center">
      <h3 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-4">Get a Free Technical Audit</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-8 font-medium">Find out exactly what's slowing down your website or how AI can scale your operations. No obligations.</p>

      {isSuccess ? (
        <div className="p-6 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 font-bold rounded-2xl border border-green-200 dark:border-green-800">
          Request received! We'll be in touch within 24 hours.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="audit-name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Name</label>
              <input type="text" name="name" id="audit-name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="audit-email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Work Email</label>
              <input type="email" name="email" id="audit-email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="john@company.com" />
            </div>
          </div>
          <div>
            <label htmlFor="audit-url" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Website URL (Optional)</label>
            <input type="url" name="url" id="audit-url" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="https://yourwebsite.com" />
          </div>
          <button type="submit" disabled={isSubmitting} className="mt-4 w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold py-4 rounded-xl hover:scale-[1.02] transition-transform shadow-lg shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed">
            {isSubmitting ? "Sending..." : "Request Free Audit"}
          </button>
        </form>
      )}
    </div>
  );
};

export default FreeAuditCTA;
