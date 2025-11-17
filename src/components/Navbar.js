import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Publications', href: '#publications' },
    { name: 'Projects', href: '#projects' },
    { name: 'News', href: '#news' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? isDark
              ? 'bg-dark-surface/95 backdrop-blur-md shadow-lg'
              : 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#home');
                }}
                className="flex items-center"
              >
                <img 
                  src={isDark ? "/images/logo.png" : "/images/logo-black.png"} 
                  alt="Naman Ahuja" 
                  className="h-10 w-auto transition-opacity duration-300"
                />
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`text-sm font-medium transition-colors hover:${
                    isDark ? 'text-dark-primary' : 'text-light-primary'
                  } ${
                    isDark ? 'text-dark-text-secondary' : 'text-light-text-secondary'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${
                  isDark
                    ? 'bg-dark-card hover:bg-dark-primary/20'
                    : 'bg-light-surface hover:bg-light-primary/10'
                }`}
              >
                {isDark ? (
                  <FiSun className="w-5 h-5 text-dark-primary" />
                ) : (
                  <FiMoon className="w-5 h-5 text-light-primary" />
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${
                  isDark ? 'text-dark-primary' : 'text-light-primary'
                }`}
              >
                {isDark ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 ${
                  isDark ? 'text-dark-text' : 'text-light-text'
                }`}
              >
                {mobileMenuOpen ? (
                  <FiX className="w-6 h-6" />
                ) : (
                  <FiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          className={`fixed inset-0 z-40 md:hidden ${
            isDark ? 'bg-dark-bg' : 'bg-light-bg'
          }`}
          style={{ top: '64px' }}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`text-2xl font-medium transition-colors ${
                  isDark
                    ? 'text-dark-text hover:text-dark-primary'
                    : 'text-light-text hover:text-light-primary'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
