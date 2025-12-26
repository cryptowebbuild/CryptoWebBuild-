import React from 'react';

interface KeyTakeawaysProps {
  points: string[];
}

const KeyTakeaways: React.FC<KeyTakeawaysProps> = ({ points }) => {
  return (
    <div className="my-8 p-6 bg-purple-50 dark:bg-purple-900/10 border border-purple-200 dark:border-purple-800 rounded-2xl shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white shadow-md">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </span>
        <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white m-0">
          Key Takeaways
        </h3>
      </div>
      <ul className="space-y-3 m-0 p-0 list-none">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
            <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500" />
            <span className="font-medium leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeyTakeaways;
