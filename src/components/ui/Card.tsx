import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`
      relative group overflow-hidden
      bg-white dark:bg-gray-800
      border border-gray-200 dark:border-gray-700
      shadow-lg hover:shadow-xl
      backdrop-blur-lg
      rounded-xl
      transition-all duration-300
      ${className}
    `}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/5 dark:to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative p-6">
        {children}
      </div>
    </div>
  );
};

export default Card;