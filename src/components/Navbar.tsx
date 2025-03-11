import React from 'react';
import { Github, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  onThemeToggle: () => void;
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  isDarkMode,
  onThemeToggle,
  currentPage,
  onPageChange,
}) => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Github className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              README Gen
            </span>
          </div>
          <div className="flex space-x-8 items-center">
            <NavLink
              active={currentPage === 'home'}
              onClick={() => onPageChange('home')}
            >
              Home
            </NavLink>
            <NavLink
              active={currentPage === 'about'}
              onClick={() => onPageChange('about')}
            >
              About
            </NavLink>
            <button
              onClick={onThemeToggle}
              className="p-2 rounded-full text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`
      px-3 py-2 rounded-md text-sm font-medium transition-colors
      ${active
        ? 'text-blue-600 dark:text-blue-400'
        : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
      }
    `}
  >
    {children}
  </button>
);

export default Navbar;