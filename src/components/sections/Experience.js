import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../context/ThemeContext';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { experience } from '../../data/experience';

const Experience = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section
      id="experience"
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
              Work <span className={isDark ? 'text-dark-primary' : 'text-light-primary'}>Experience</span>
            </h2>
            <div
              className={`w-20 h-1 mx-auto ${
                isDark ? 'bg-dark-primary' : 'bg-light-primary'
              }`}
            />
          </div>

          {/* Experience Cards */}
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-xl overflow-hidden ${
                  isDark ? 'bg-dark-card' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-shadow`}
              >
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3
                          className={`text-xl font-bold ${
                            isDark ? 'text-dark-text' : 'text-light-text'
                          }`}
                        >
                          {exp.role}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            isDark ? 'bg-dark-primary/20 text-dark-primary' : 'bg-light-primary/20 text-light-primary'
                          }`}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <p
                        className={`text-lg font-medium mb-1 ${
                          isDark ? 'text-dark-primary' : 'text-light-primary'
                        }`}
                      >
                        {exp.company}
                      </p>
                      <p
                        className={`text-sm ${
                          isDark ? 'text-dark-text-secondary' : 'text-light-text-secondary'
                        }`}
                      >
                        {exp.period} • {exp.location}
                      </p>
                    </div>
                    <button
                      className={`p-2 rounded-lg ${
                        isDark ? 'hover:bg-dark-surface' : 'hover:bg-light-surface'
                      }`}
                    >
                      {expandedId === exp.id ? (
                        <FiChevronUp className={isDark ? 'text-dark-primary' : 'text-light-primary'} />
                      ) : (
                        <FiChevronDown className={isDark ? 'text-dark-primary' : 'text-light-primary'} />
                      )}
                    </button>
                  </div>

                  <AnimatePresence>
                    {expandedId === exp.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4"
                      >
                        <ul className="space-y-2 mb-4">
                          {exp.description.map((item, i) => (
                            <li
                              key={i}
                              className={`flex items-start gap-2 ${
                                isDark ? 'text-dark-text-secondary' : 'text-light-text-secondary'
                              }`}
                            >
                              <span className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                                isDark ? 'bg-dark-primary' : 'bg-light-primary'
                              }`} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                isDark
                                  ? 'bg-dark-surface text-dark-text-secondary'
                                  : 'bg-light-surface text-light-text-secondary'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
