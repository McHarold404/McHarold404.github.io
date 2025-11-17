import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../context/ThemeContext';
import { FiMail, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'nahuja11@asu.edu',
      href: 'mailto:nahuja11@asu.edu',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Tempe, Arizona',
      href: null,
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 'Naman Ahuja',
      href: 'https://www.linkedin.com/in/naman-ahuja-402166190/',
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      value: 'McHarold404',
      href: 'https://github.com/McHarold404/',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-20 ${isDark ? 'bg-dark-bg' : 'bg-light-bg'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 ${
                isDark ? 'text-dark-text' : 'text-light-text'
              }`}
            >
              Get In <span className={isDark ? 'text-dark-primary' : 'text-light-primary'}>Touch</span>
            </h2>
            <div
              className={`w-20 h-1 mx-auto mb-6 ${
                isDark ? 'bg-dark-primary' : 'bg-light-primary'
              }`}
            />
            <p
              className={`text-lg max-w-2xl mx-auto ${
                isDark ? 'text-dark-text-secondary' : 'text-light-text-secondary'
              }`}
            >
              I'm currently looking for new opportunities and collaborations. Whether you have a 
              question or just want to say hi, feel free to reach out!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-6 rounded-xl text-center ${
                  isDark ? 'bg-dark-card' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-all`}
              >
                <info.icon
                  className={`w-12 h-12 mx-auto mb-4 ${
                    isDark ? 'text-dark-primary' : 'text-light-primary'
                  }`}
                />
                <h3
                  className={`text-sm font-medium mb-2 ${
                    isDark ? 'text-dark-text-secondary' : 'text-light-text-secondary'
                  }`}
                >
                  {info.label}
                </h3>
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`font-medium hover:underline ${
                      isDark ? 'text-dark-primary' : 'text-light-primary'
                    }`}
                  >
                    {info.value}
                  </a>
                ) : (
                  <p
                    className={`font-medium ${
                      isDark ? 'text-dark-text' : 'text-light-text'
                    }`}
                  >
                    {info.value}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <a
              href="mailto:nahuja11@asu.edu"
              className={`inline-block px-8 py-4 rounded-lg font-medium text-lg transition-all transform hover:scale-105 ${
                isDark
                  ? 'bg-dark-primary text-white hover:bg-dark-primary-light'
                  : 'bg-light-primary text-white hover:bg-light-primary-dark'
              }`}
            >
              Send me an email
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
