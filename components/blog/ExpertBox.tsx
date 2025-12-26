import React from 'react';

interface ExpertBoxProps {
  title?: string;
  children: React.ReactNode;
  type?: 'pro' | 'warning' | 'insight';
}

const ExpertBox: React.FC<ExpertBoxProps> = ({ title = "Expert Take", children, type = 'insight' }) => {
  const styles = {
    pro: {
      container: "bg-emerald-50 dark:bg-emerald-900/10 border-emerald-500/20 shadow-emerald-900/5",
      icon: "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
      title: "text-emerald-800 dark:text-emerald-300"
    },
    warning: {
      container: "bg-red-50 dark:bg-red-900/10 border-red-500/20 shadow-red-900/5",
      icon: "bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400",
      title: "text-red-800 dark:text-red-300"
    },
    insight: {
      container: "bg-purple-50 dark:bg-purple-900/10 border-purple-500/20 shadow-purple-900/5",
      icon: "bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400",
      title: "text-purple-800 dark:text-purple-300"
    }
  };

  const icons = {
    pro: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    warning: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
    ),
    insight: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    )
  };

  const currentStyle = styles[type];

  return (
    <div className={`my-10 p-6 md:p-8 rounded-3xl border ${currentStyle.container} shadow-lg relative overflow-hidden group`}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full bg-current opacity-[0.03] group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

      <div className="flex items-start gap-4 relative z-10">
        <div className={`p-3 rounded-2xl shrink-0 ${currentStyle.icon}`}>
            {icons[type]}
        </div>
        <div>
            <h4 className={`text-lg font-black uppercase tracking-wide mb-2 ${currentStyle.title}`}>{title}</h4>
            <div className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                {children}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertBox;
