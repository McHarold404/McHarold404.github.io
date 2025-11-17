import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../../context/ThemeContext';
import { FiAward, FiCode, FiBookOpen } from 'react-icons/fi';

const About = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { icon: FiCode, label: 'Years of Experience', value: '3+' },
    { icon: FiBookOpen, label: 'Publications', value: '6' },
    { icon: FiAward, label: 'Projects', value: '15+' },
  ];

  const highlights = [
    'MS in Computer Science @ Arizona State University (GPA: 3.89/4)',
    'BTech (Honors) @ IIIT Hyderabad (GPA: 8.6/10)',
    'Research focus: Table Generation, Semantic Parsing (NL2SQL), Agentic AI',
    'Published at ACL, AACL, LREC, INLG',
    'Experience at AWS, Mayo Clinic, Perceptive Analytics',
  ];

  return (
    <section
      id="about"
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
              About <span className={isDark ? 'text-dark-primary' : 'text-light-primary'}>Me</span>
            </h2>
            <div
              className={`w-20 h-1 mx-auto ${
                isDark ? 'bg-dark-primary' : 'bg-light-primary'
              }`}
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-6 rounded-xl text-center ${
                  isDark ? 'bg-dark-card' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-shadow`}
              >
                <stat.icon
                  className={`w-12 h-12 mx-auto mb-4 ${
                    isDark ? 'text-dark-primary' : 'text-light-primary'
                  }`}
                />
                <div
                  className={`text-4xl font-bold mb-2 ${
                    isDark ? 'text-dark-text' : 'text-light-text'
                  }`}
                >
                  {stat.value}
                </div>
                <div
                  className={`text-sm ${
                    isDark ? 'text-dark-text-secondary' : 'text-light-text-secondary'
                  }`}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="/images/profile.jpeg"
                  alt="Naman Ahuja"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                />
                <div
                  className={`absolute -bottom-4 -right-4 w-full h-full rounded-2xl -z-10 ${
                    isDark ? 'bg-dark-primary/20' : 'bg-light-primary/20'
                  }`}
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h3
                className={`text-2xl md:text-3xl font-bold mb-6 ${
                  isDark ? 'text-dark-text' : 'text-light-text'
                }`}
              >
                Graduate CS Student at Arizona State University
              </h3>
              <p
                className={`text-lg mb-6 leading-relaxed ${
                  isDark ? 'text-dark-text-secondary' : 'text-light-text-secondary'
                }`}
              >
                I'm Naman Ahuja, a Computer Science graduate from IIIT Hyderabad, now pursuing my 
                master's at Arizona State University. As a machine learning enthusiast with research 
                experience in applied NLP for social good, I am passionate about solving complex 
                real-world problems.
              </p>
              <p
                className={`text-lg mb-8 leading-relaxed ${
                  isDark ? 'text-dark-text-secondary' : 'text-light-text-secondary'
                }`}
              >
                My curiosity drives me to continuously learn and adapt, and I take pride in seeing 
                my projects through to completion. I am currently on the lookout for new collaborations. 
                So if you have a cool idea that needs to be built or a complex problem that needs to be 
                solved, feel free to reach out!
              </p>

              {/* Highlights */}
              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        isDark ? 'bg-dark-primary' : 'bg-light-primary'
                      }`}
                    />
                    <p
                      className={`${
                        isDark ? 'text-dark-text-secondary' : 'text-light-text-secondary'
                      }`}
                    >
                      {highlight}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
