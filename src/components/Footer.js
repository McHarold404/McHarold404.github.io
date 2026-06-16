import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiHeart } from 'react-icons/fi';

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer
      className={`py-8 ${
        isDark ? 'bg-dark-surface border-t border-dark-card' : 'bg-light-surface border-t border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Logo */}
          <img 
            src="/images/image.png" 
            alt="Naman Ahuja" 
            className="h-12 w-auto rounded-sm opacity-80 transition-opacity duration-300"
          />

          {/* Copyright */}
          <div
            className={`text-sm flex items-center gap-2 ${
              isDark ? 'text-dark-text-secondary' : 'text-light-text-secondary'
            }`}
          >
            <span>© {new Date().getFullYear()} Naman Ahuja. Built with</span>
            <FiHeart className={`w-4 h-4 ${isDark ? 'text-dark-primary' : 'text-light-primary'}`} />
            <span>and React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
