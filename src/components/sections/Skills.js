import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../context/ThemeContext';
import {
  SiPython, SiCplusplus, SiJavascript, SiTypescript, SiMysql, SiGnubash, SiC,
  SiReact, SiNodedotjs, SiExpress, SiSpringboot, SiFlask, SiGraphql,
  SiAmazondynamodb, SiMongodb, SiGooglecloud,
  SiPytorch, SiHuggingface, SiChainlink, SiOpenai, SiFacebook, SiElasticsearch, SiPandas, SiNumpy,
  SiAwslambda, SiAmazons3, SiAmazonwebservices, SiDocker, SiGit, SiGithubactions
} from 'react-icons/si';
import { skills } from '../../data/skills';

const iconMap = {
  SiPython, SiCplusplus, SiJavascript, SiTypescript, SiMysql, SiGnubash, SiC,
  SiReact, SiNodedotjs, SiExpress, SiSpringboot, SiFlask, SiGraphql,
  SiAmazondynamodb, SiMongodb, SiGooglecloud,
  SiPytorch, SiHuggingface, SiChainlink, SiOpenai, SiFacebook, SiElasticsearch, SiPandas, SiNumpy,
  SiAwslambda, SiAmazons3, SiAmazonwebservices, SiDocker, SiGit, SiGithubactions
};

const Skills = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const categories = [
    { title: 'Languages', data: skills.languages },
    { title: 'Frameworks', data: skills.frameworks },
    { title: 'Databases', data: skills.databases },
    { title: 'ML & AI', data: skills.mlai },
    { title: 'Cloud & DevOps', data: skills.cloud },
  ];

  return (
    <section
      id="skills"
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
              Technical <span className={isDark ? 'text-dark-primary' : 'text-light-primary'}>Skills</span>
            </h2>
            <div
              className={`w-20 h-1 mx-auto ${
                isDark ? 'bg-dark-primary' : 'bg-light-primary'
              }`}
            />
          </div>

          {/* Skills Grid */}
          <div className="space-y-12">
            {categories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              >
                <h3
                  className={`text-2xl font-bold mb-6 ${
                    isDark ? 'text-dark-text' : 'text-light-text'
                  }`}
                >
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {category.data.map((skill, index) => {
                    const Icon = iconMap[skill.icon];
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: catIndex * 0.1 + index * 0.05 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className={`p-4 rounded-xl flex flex-col items-center justify-center gap-3 transition-all ${
                          isDark
                            ? 'bg-dark-card hover:bg-dark-surface hover:shadow-lg hover:shadow-dark-primary/20'
                            : 'bg-white hover:bg-light-surface hover:shadow-lg hover:shadow-light-primary/20'
                        }`}
                      >
                        {Icon && (
                          <Icon
                            className={`w-8 h-8 ${
                              isDark ? 'text-dark-primary' : 'text-light-primary'
                            }`}
                          />
                        )}
                        <span
                          className={`text-sm font-medium text-center ${
                            isDark ? 'text-dark-text' : 'text-light-text'
                          }`}
                        >
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
