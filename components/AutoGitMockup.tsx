import React from 'react';

interface AutoGitMockupProps {
  className?: string;
}

const AutoGitMockup: React.FC<AutoGitMockupProps> = ({ className = '' }) => {
  return (
    <div className={`bg-[#0B1120] relative overflow-hidden flex flex-col font-sans ${className}`}>
      {/* Abstract Grid Background */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `linear-gradient(#334155 1px, transparent 1px), linear-gradient(to right, #334155 1px, transparent 1px)`, backgroundSize: '24px 24px' }}></div>
      
      {/* Browser Header */}
      <div className="h-8 border-b border-white/10 flex items-center px-4 gap-2 bg-[#0F172A] z-10 shrink-0">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
        </div>
        <div className="ml-4 flex items-center gap-2 px-3 py-0.5 bg-[#1E293B] rounded-full border border-white/5">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] text-slate-400 font-mono">deploy.autogit.dev</span>
        </div>
      </div>

      {/* Main UI Content */}
      <div className="flex-1 p-6 relative z-10 flex flex-col">
        
        {/* Header Area */}
        <div className="flex justify-between items-end mb-6">
            <div>
                <h2 className="text-xl font-bold text-white mb-1">My Dashboard</h2>
                <p className="text-xs text-slate-400">Manage your static deployments</p>
            </div>
            <div className="flex gap-2">
                <div className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer shadow-lg shadow-blue-900/20 flex items-center gap-1">
                    <span>+</span> New Project
                </div>
            </div>
        </div>

        {/* Deployment Pipeline Card */}
        <div className="w-full bg-[#161b22] rounded-xl border border-slate-700/50 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500"></div>
            
            {/* Repo Info */}
            <div className="p-4 border-b border-slate-800 flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-slate-800 flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </div>
                <div>
                    <div className="text-sm font-bold text-white">portfolio-v3</div>
                    <div className="text-[10px] text-slate-400 font-mono">production • main • 2m ago</div>
                </div>
                <div className="ml-auto flex items-center gap-2">
                    <span className="text-[10px] bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full">Active</span>
                </div>
            </div>

            {/* Pipeline Visual */}
            <div className="p-6 bg-[#0d1117] flex items-center justify-between relative">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-10 right-10 h-0.5 bg-slate-800 -z-0"></div>
                
                {/* Step 1 */}
                <div className="relative z-10 flex flex-col items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-green-500 flex items-center justify-center text-green-500 shadow-[0_0_10px_rgba(34,197,94,0.3)]">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-[10px] font-bold text-slate-300">Build</span>
                </div>

                {/* Step 2 */}
                <div className="relative z-10 flex flex-col items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-blue-500 flex items-center justify-center text-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.3)] animate-pulse">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-[10px] font-bold text-blue-400">Deploy</span>
                </div>

                {/* Step 3 */}
                <div className="relative z-10 flex flex-col items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-slate-500">
                        <div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
                    </div>
                    <span className="text-[10px] font-bold text-slate-500">Verify</span>
                </div>
            </div>

            {/* Terminal Log */}
            <div className="bg-black p-4 font-mono text-[10px] leading-relaxed border-t border-slate-800 text-slate-400 h-32 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>
                <p>&gt; git clone https://github.com/user/portfolio-v3.git</p>
                <p className="text-blue-400">&gt; npm install</p>
                <p>added 142 packages in 2s</p>
                <p className="text-blue-400">&gt; npm run build</p>
                <p>&gt; vite build</p>
                <p className="text-green-400">✓ built in 1.42s</p>
                <p>&gt; uploading to edge network...</p>
                <p className="animate-pulse">_</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default AutoGitMockup;