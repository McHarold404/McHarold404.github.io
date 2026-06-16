import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiAward, FiBookOpen, FiCode } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

const About = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { icon: FiCode, label: "Industry roles", value: "3+" },
    { icon: FiBookOpen, label: "Publications", value: "6" },
    { icon: FiAward, label: "Projects built", value: "15+" },
  ];

  const highlights = [
    "MS in Computer Science from Arizona State University.",
    "Researching table generation, semantic parsing, NL2SQL, and agentic AI.",
    "Previously worked across AWS, Mayo Clinic, Perceptive Analytics, and research labs.",
  ];

  return (
    <section
      id="about"
      ref={ref}
      className={`py-20 ${isDark ? "bg-dark-bg" : "bg-light-bg"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h2
              className={`mb-4 text-4xl font-bold md:text-5xl ${
                isDark ? "text-dark-text" : "text-light-text"
              }`}
            >
              Short <span className={isDark ? "text-dark-primary" : "text-light-primary"}>Bio</span>
            </h2>
            <div className={`h-1 w-20 ${isDark ? "bg-dark-primary" : "bg-light-primary"}`} />
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className={`rounded-lg p-6 ${isDark ? "bg-dark-surface" : "bg-light-surface"}`}>
              <p
                className={`text-sm font-semibold uppercase tracking-[0.2em] ${
                  isDark ? "text-dark-primary" : "text-light-primary"
                }`}
              >
                Right now
              </p>
              <p
                className={`mt-4 text-lg leading-relaxed ${
                  isDark ? "text-dark-text-secondary" : "text-light-text-secondary"
                }`}
              >
                I am focused on building reliable AI systems that can reason over
                structured information, generate useful tables, and translate natural
                language questions into executable queries.
              </p>
            </div>

            <div>
              <h3
                className={`mb-3 text-xl font-bold ${
                  isDark ? "text-dark-text" : "text-light-text"
                }`}
              >
                Computer science graduate from Arizona State University
              </h3>
              <p
                className={`mb-6 text-base leading-relaxed ${
                  isDark ? "text-dark-text-secondary" : "text-light-text-secondary"
                }`}
              >
                I am Naman Ahuja, a software engineer and ML researcher with a CS
                background from IIIT Hyderabad. My work sits between product engineering
                and applied NLP: taking ambiguous real-world problems, turning them into
                working systems, and making the results easy for people to use.
              </p>

              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className={`mt-2 h-2 w-2 flex-shrink-0 rounded-full ${
                        isDark ? "bg-dark-primary" : "bg-light-primary"
                      }`}
                    />
                    <p className={isDark ? "text-dark-text-secondary" : "text-light-text-secondary"}>
                      {highlight}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-lg p-6 ${
                  isDark ? "bg-dark-surface" : "bg-light-surface"
                }`}
              >
                <stat.icon
                  className={`mb-4 h-8 w-8 ${
                    isDark ? "text-dark-primary" : "text-light-primary"
                  }`}
                />
                <div
                  className={`mb-1 text-3xl font-bold ${
                    isDark ? "text-dark-text" : "text-light-text"
                  }`}
                >
                  {stat.value}
                </div>
                <div className={isDark ? "text-dark-text-secondary" : "text-light-text-secondary"}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
