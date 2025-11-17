import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../context/ThemeContext';
import { FiFileText, FiCode, FiExternalLink } from 'react-icons/fi';
import { publications } from '../../data/publications';

const Publications = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="publications"
      ref={ref}
      className={`py-20 ${isDark ? 'bg-dark-surface' : 'bg-light-surface'}`}
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
              Research <span className={isDark ? 'text-dark-primary' : 'text-light-primary'}>Publications</span>
            </h2>
            <div
              className={`w-20 h-1 mx-auto ${
                isDark ? 'bg-dark-primary' : 'bg-light-primary'
              }`}
            />
          </div>

          {/* Publications Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-xl ${
                  isDark ? 'bg-dark-card' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-all`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      isDark ? 'bg-dark-primary/20 text-dark-primary' : 'bg-light-primary/20 text-light-primary'
                    }`}
                  >
                    {pub.type}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      isDark ? 'text-dark-text-secondary' : 'text-light-text-secondary'
                    }`}
                  >
                    {pub.year}
                  </span>
                </div>

                <h3
                  className={`text-lg font-bold mb-2 ${
                    isDark ? 'text-dark-text' : 'text-light-text'
                  }`}
                >
                  {pub.title}
                </h3>

                <p
                  className={`text-sm mb-2 ${
                    isDark ? 'text-dark-text-secondary' : 'text-light-text-secondary'
                  }`}
                >
                  {pub.authors}
                </p>

                <p
                  className={`text-sm font-medium mb-3 ${
                    isDark ? 'text-dark-primary' : 'text-light-primary'
                  }`}
                >
                  {pub.venue}
                </p>

                <p
                  className={`text-sm mb-4 ${
                    isDark ? 'text-dark-text-secondary' : 'text-light-text-secondary'
                  }`}
                >
                  {pub.abstract}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 rounded text-xs ${
                        isDark
                          ? 'bg-dark-surface text-dark-text-secondary'
                          : 'bg-light-surface text-light-text-secondary'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {pub.links.paper && (
                    <a
                      href={pub.links.paper}
                      className={`flex items-center gap-1 text-sm font-medium hover:underline ${
                        isDark ? 'text-dark-primary' : 'text-light-primary'
                      }`}
                    >
                      <FiFileText /> Paper
                    </a>
                  )}
                  {pub.links.code && (
                    <a
                      href={pub.links.code}
                      className={`flex items-center gap-1 text-sm font-medium hover:underline ${
                        isDark ? 'text-dark-primary' : 'text-light-primary'
                      }`}
                    >
                      <FiCode /> Code
                    </a>
                  )}
                  {pub.links.demo && (
                    <a
                      href={pub.links.demo}
                      className={`flex items-center gap-1 text-sm font-medium hover:underline ${
                        isDark ? 'text-dark-primary' : 'text-light-primary'
                      }`}
                    >
                      <FiExternalLink /> Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
