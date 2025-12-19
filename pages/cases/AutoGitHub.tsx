import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import AutoGitMockup from '../../components/AutoGitMockup';

const AutoGitHub: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Case Study: AutoGit Deployer - Serverless DevOps",
    "image": "https://cryptowebbuild.com/autogit-hero.jpg",
    "author": {
      "@type": "Organization",
      "name": "CryptoWebBuild"
    },
    "description": "Building a client-side DevOps engine to deploy static websites to GitHub Pages directly from the browser without a backend."
  };

  return (
    <div className="container mx-auto px-6 pt-32 pb-20">
      <SEO
        title="Case Study: AutoGit Deployer - Serverless DevOps Engine"
        description="How I built a client-side tool to deploy static sites to GitHub Pages directly from the browser using React and the GitHub API."
      />
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      <div className="max-w-4xl mx-auto animate-slide-up">
        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-300 text-xs font-bold uppercase tracking-wider shadow-sm">
          Case Study
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-main mb-8 leading-tight">
          AutoGit — <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Client-Side DevOps</span>
        </h1>

        <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 mb-12 relative group h-[400px] md:h-[500px]">
            {/* Replaced static image with live coded mockup */}
            <AutoGitMockup className="w-full h-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="glass-panel p-6 rounded-2xl bg-surface border-t border-blue-500/20">
            <h3 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-2">Stack</h3>
            <p className="text-text-main font-bold text-lg">React, GitHub API</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl bg-surface border-t border-blue-500/20">
            <h3 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-2">Architecture</h3>
            <p className="text-text-main font-bold text-lg">100% Client-Side</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl bg-surface border-t border-blue-500/20">
            <h3 className="text-text-muted text-xs font-bold uppercase tracking-widest mb-2">Impact</h3>
            <p className="text-green-500 font-bold text-lg">Zero Server Cost</p>
          </div>
        </div>

        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          <h2>The Challenge</h2>
          <p>Deploying static websites typically requires a complex toolchain: installing Git, setting up Node.js, configuring SSH keys, and understanding CI/CD pipelines (GitHub Actions). For non-technical users or mobile-first developers, this barrier is too high.</p>
          <p>I wanted to build a tool that could take a folder of HTML/CSS/JS files and deploy it live to the internet <strong>without a single command line interaction</strong> and without me paying for a backend server to process the files.</p>

          <h2>The Solution</h2>
          <p><strong>AutoGit Deployer</strong> is a "Serverless DevOps Engine" running entirely in the user's browser. Here is the architectural breakthrough:</p>
          <ul>
            <li><strong>Direct GitHub API Integration:</strong> The app authenticates using a Personal Access Token (PAT) stored locally.</li>
            <li><strong>Browser-Based Git Logic:</strong> Instead of using `git` commands on a server, the app constructs the Git tree structure (blobs and trees) using JSON payloads sent directly to the GitHub REST API.</li>
            <li><strong>Automated Configuration:</strong> It automatically creates the repository, pushes the code, and enables GitHub Pages environments via API calls.</li>
          </ul>

          <h2>Technical Deep Dive</h2>
          <p>The most complex part was handling binary file uploads and large directory structures from the browser. I implemented a recursive file reader that converts assets to Base64 (for images) or raw text (for code) and batches the API requests to avoid rate limits.</p>
          <p>Because the logic lives in the client, the tool is <strong>infinitely scalable</strong> and costs $0 to host.</p>

          <h2>The Outcome</h2>
          <p>Users can now deploy a live website in under 30 seconds from a phone or tablet. It bridges the gap between coding on mobile (using AI tools) and publishing to the real web.</p>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center pt-10 border-t border-white/10">
          <a href="https://autogithub.pages.dev" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-500/20">
            Launch AutoGit
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
          <Link to="/projects" className="inline-flex items-center justify-center px-8 py-3 bg-surface border border-slate-200 dark:border-slate-700 text-text-main font-bold rounded-xl hover:bg-surface-highlight transition-colors">
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AutoGitHub;