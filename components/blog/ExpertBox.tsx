import React from 'react';

interface ExpertBoxProps {
  title?: string;
  children: React.ReactNode;
  type?: 'pro' | 'warning' | 'insight';
}

const ExpertBox: React.FC<ExpertBoxProps> = ({ title = "Expert Take", children, type = 'insight' }) => {
  const styles = {
    pro: "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-200",
    warning: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-500/30 text-red-800 dark:text-red-200",
    insight: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-500/30 text-purple-800 dark:text-purple-200"
  };

  const icons = {
    pro: (
      <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    warning: (
      <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    insight: (
      <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  };

  return (
    <div className={`my-8 p-6 rounded-2xl border-l-4 ${styles[type]} shadow-sm`}>
      <div className="flex items-center mb-3 font-bold text-lg">
        {icons[type]}
        {title}
      </div>
      <div className="prose prose-sm dark:prose-invert max-w-none font-medium opacity-90">
        {children}
      </div>
    </div>
  );
};

export default ExpertBox;
