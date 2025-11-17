import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../context/ThemeContext';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../../data/projects';

const Projects = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.featured);

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-20 ${isDark ? 'bg-dark-bg' : 'bg-light-bg'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 ${
                isDark ? 'text-dark-text' : 'text-light-text'
              }`}
            >
              Featured <span className={isDark ? 'text-dark-primary' : 'text-light-primary'}>Projects</span>
            </h2>
            <div
              className={`w-20 h-1 mx-auto mb-8 ${
                isDark ? 'bg-dark-primary' : 'bg-light-primary'
              }`}
            />
            <div className="flex justify-center gap-3">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === 'all'
                    ? isDark ? 'bg-dark-primary text-white' : 'bg-light-primary text-white'
                    : isDark ? 'bg-dark-card text-dark-text-secondary' : 'bg-white text-light-text-secondary'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter('featured')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === 'featured'
                    ? isDark ? 'bg-dark-primary text-white' : 'bg-light-primary text-white'
                    : isDark ? 'bg-dark-card text-dark-text-secondary' : 'bg-white text-light-text-secondary'
                }`}
              >
                Featured
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`rounded-xl overflow-hidden ${
                  isDark ? 'bg-dark-card' : 'bg-white'
                } shadow-lg hover:shadow-2xl transition-all`}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      isDark ? 'text-dark-text' : 'text-light-text'
                    }`}
                  >
                    {project.name}
                  </h3>
                  <p
                    className={`text-sm mb-4 ${
                      isDark ? 'text-dark-text-secondary' : 'text-light-text-secondary'
                    }`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
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
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1 text-sm font-medium hover:underline ${
                          isDark ? 'text-dark-primary' : 'text-light-primary'
                        }`}
                      >
                        <FiGithub /> Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1 text-sm font-medium hover:underline ${
                          isDark ? 'text-dark-primary' : 'text-light-primary'
                        }`}
                      >
                        <FiExternalLink /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
