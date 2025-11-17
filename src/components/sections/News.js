import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../context/ThemeContext';
import { FiBriefcase, FiAward, FiBookOpen, FiStar } from 'react-icons/fi';
import { news } from '../../data/news';

const iconMap = {
  briefcase: FiBriefcase,
  award: FiAward,
  trophy: FiAward,
  research: FiBookOpen,
  star: FiStar,
  graduation: FiBookOpen,
  publication: FiAward,
  achievement: FiAward,
  education: FiBookOpen,
};

const News = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [filter, setFilter] = useState('all');

  const types = ['all', 'publication', 'achievement', 'internship', 'research'];
  
  const filteredNews = filter === 'all' 
    ? news 
    : news.filter(item => item.type === filter);

  return (
    <section
      id="news"
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
          <div className="text-center mb-12">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 ${
                isDark ? 'text-dark-text' : 'text-light-text'
              }`}
            >
              Latest <span className={isDark ? 'text-dark-primary' : 'text-light-primary'}>News</span>
            </h2>
            <div
              className={`w-20 h-1 mx-auto mb-8 ${
                isDark ? 'bg-dark-primary' : 'bg-light-primary'
              }`}
            />
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all capitalize ${
                    filter === type
                      ? isDark
                        ? 'bg-dark-primary text-white'
                        : 'bg-light-primary text-white'
                      : isDark
                      ? 'bg-dark-card text-dark-text-secondary hover:bg-dark-surface'
                      : 'bg-white text-light-text-secondary hover:bg-light-surface'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div
              className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 ${
                isDark ? 'bg-dark-card' : 'bg-light-surface'
              }`}
            />

            {/* News Items */}
            <div className="space-y-12">
              {filteredNews.map((item, index) => {
                const Icon = iconMap[item.icon] || FiStar;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col md:gap-8`}
                  >
                    {/* Icon */}
                    <div
                      className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center z-10 ${
                        isDark ? 'bg-dark-primary' : 'bg-light-primary'
                      }`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className={`w-full md:w-5/12 ml-24 md:ml-0 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`p-6 rounded-xl shadow-lg ${
                          isDark ? 'bg-dark-card' : 'bg-white'
                        }`}
                      >
                        <div
                          className={`text-sm font-medium mb-2 ${
                            isDark ? 'text-dark-primary' : 'text-light-primary'
                          }`}
                        >
                          {item.date}
                        </div>
                        <h3
                          className={`text-xl font-bold mb-2 ${
                            isDark ? 'text-dark-text' : 'text-light-text'
                          }`}
                        >
                          {item.title}
                        </h3>
                        <p
                          className={`${
                            isDark ? 'text-dark-text-secondary' : 'text-light-text-secondary'
                          }`}
                        >
                          {item.description}
                        </p>
                        {item.link && (
                          <a
                            href={item.link}
                            className={`inline-block mt-3 font-medium hover:underline ${
                              isDark ? 'text-dark-primary' : 'text-light-primary'
                            }`}
                          >
                            Learn more →
                          </a>
                        )}
                      </motion.div>
                    </div>

                    {/* Spacer for even layout */}
                    <div className="hidden md:block w-5/12" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default News;
