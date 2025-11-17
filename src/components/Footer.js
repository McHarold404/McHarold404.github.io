import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { SiGooglescholar } from 'react-icons/si';

const Footer = () => {
  const { isDark } = useTheme();

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/McHarold404', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/naman-ahuja-402166190/', label: 'LinkedIn' },
    { icon: SiGooglescholar, href: '#', label: 'Google Scholar' },
    { icon: FiMail, href: 'mailto:nahuja11@asu.edu', label: 'Email' },
  ];

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
            src={isDark ? "/images/logo.png" : "/images/logo-black.png"} 
            alt="Naman Ahuja" 
            className="h-12 w-auto opacity-80 transition-opacity duration-300"
          />
          
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-colors ${
                  isDark
                    ? 'text-dark-text-secondary hover:text-dark-primary hover:bg-dark-card'
                    : 'text-light-text-secondary hover:text-light-primary hover:bg-white'
                }`}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

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
