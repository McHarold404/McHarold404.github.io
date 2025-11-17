import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiFileText, FiChevronDown } from 'react-icons/fi';
import { SiGooglescholar } from 'react-icons/si';
import { useTheme } from '../../context/ThemeContext';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const { isDark } = useTheme();

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/McHarold404', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/naman-ahuja-402166190/', label: 'LinkedIn' },
    { icon: SiGooglescholar, href: '#', label: 'Google Scholar' },
    { icon: FiMail, href: 'mailto:nahuja11@asu.edu', label: 'Email' },
  ];

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        isDark ? 'bg-dark-bg' : 'bg-light-bg'
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute inset-0 opacity-20 ${
            isDark
              ? 'bg-gradient-to-br from-dark-primary/30 via-transparent to-dark-primary/30'
              : 'bg-gradient-to-br from-light-primary/20 via-transparent to-light-primary/20'
          }`}
        />
        {/* Animated circles */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl ${
            isDark ? 'bg-dark-primary/10' : 'bg-light-primary/10'
          }`}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl ${
            isDark ? 'bg-dark-primary/10' : 'bg-light-primary/10'
          }`}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <img 
              src={isDark ? "/images/logo.png" : "/images/logo-black.png"} 
              alt="Naman Ahuja" 
              className="h-24 w-auto md:h-32 transition-opacity duration-300"
            />
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`text-lg md:text-xl mb-4 ${
              isDark ? 'text-dark-text-secondary' : 'text-light-text-secondary'
            }`}
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-4 ${
              isDark ? 'text-dark-text' : 'text-light-text'
            }`}
          >
            Naman <span className={isDark ? 'text-dark-primary' : 'text-light-primary'}>Ahuja</span>
          </motion.h1>

          {/* Animated Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={`text-2xl md:text-4xl lg:text-5xl font-semibold mb-8 h-20 ${
              isDark ? 'text-dark-text-secondary' : 'text-light-text-secondary'
            }`}
          >
            <TypeAnimation
              sequence={[
                'Software Engineer',
                2000,
                'ML Researcher',
                2000,
                'NLP Enthusiast',
                2000,
                'Full-Stack Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className={`text-lg md:text-xl max-w-3xl mx-auto mb-12 ${
              isDark ? 'text-dark-text-secondary' : 'text-light-text-secondary'
            }`}
          >
            MS in Computer Science @ Arizona State University | Specializing in Table Generation, 
            Semantic Parsing, and Agentic AI
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="https://drive.google.com/drive/folders/1DK-_xzOwiza7CPILDWUX4tM97IT4koYF?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 flex items-center gap-2 ${
                isDark
                  ? 'bg-dark-primary text-white hover:bg-dark-primary-light'
                  : 'bg-light-primary text-white hover:bg-light-primary-dark'
              }`}
            >
              <FiFileText /> Download CV
            </a>
            <a
              href="#contact"
              className={`px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 border-2 ${
                isDark
                  ? 'border-dark-primary text-dark-primary hover:bg-dark-primary hover:text-white'
                  : 'border-light-primary text-light-primary hover:bg-light-primary hover:text-white'
              }`}
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-lg transition-colors ${
                  isDark
                    ? 'text-dark-text-secondary hover:text-dark-primary hover:bg-dark-card'
                    : 'text-light-text-secondary hover:text-light-primary hover:bg-light-surface'
                }`}
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className={isDark ? 'text-dark-primary' : 'text-light-primary'}
        >
          <FiChevronDown className="w-8 h-8" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
