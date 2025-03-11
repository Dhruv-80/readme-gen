import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'icon';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  variant = 'primary',
  children,
  className = '',
}) => {
  const baseStyles = "focus:outline-none focus:ring-2 focus:ring-blue-500";
  const variants = {
    primary: "w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md p-2 disabled:bg-blue-300 transition duration-300 ease-in-out transform hover:scale-105",
    icon: "p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;