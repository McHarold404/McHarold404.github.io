import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiFileText,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { SiGooglescholar } from "react-icons/si";
import { useTheme } from "../../context/ThemeContext";
import { news } from "../../data/news";

const Hero = () => {
  const { isDark } = useTheme();

  const socialLinks = [
    { icon: FiGithub, href: "https://github.com/McHarold404", label: "GitHub" },
    {
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/naman-ahuja-402166190/",
      label: "LinkedIn",
    },
    {
      icon: SiGooglescholar,
      href: "https://scholar.google.com/citations?user=oSZye74AAAAJ&hl=en",
      label: "Google Scholar",
    },
    { icon: FiMail, href: "mailto:nahuja11@asu.edu", label: "Email" },
  ];

  return (
    <section
      id="home"
      className={`relative min-h-screen overflow-visible pt-16 ${
        isDark ? "bg-dark-bg" : "bg-light-bg"
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-light-primary/30 dark:bg-dark-primary/30" />

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 py-7 sm:px-8 lg:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className={`mb-8 text-4xl font-bold leading-tight md:text-5xl ${
            isDark ? "text-dark-text" : "text-light-text"
          }`}
        >
          Naman Ahuja
        </motion.h1>

        <div className="grid grid-cols-1 items-start gap-9 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="flex flex-col items-start"
          >
            <div
              className={`relative overflow-hidden rounded-lg border p-3 shadow-xl ${
                isDark ? "border-dark-card bg-dark-surface" : "border-gray-200 bg-white"
              }`}
            >
              <img
                src="/images/hero-profile.png"
                alt="Naman Ahuja"
                className="h-[380px] w-[300px] rounded-md object-cover sm:h-[430px] sm:w-[340px]"
              />
            </div>

            <div className="mt-5 flex w-full max-w-[366px] flex-wrap gap-3">
              <a
                href="https://drive.google.com/drive/folders/1DK-_xzOwiza7CPILDWUX4tM97IT4koYF?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 rounded-lg px-5 py-3 text-base font-medium transition-all hover:scale-105 ${
                  isDark
                    ? "bg-dark-primary text-white hover:bg-dark-primary-light"
                    : "bg-light-primary text-white hover:bg-light-primary-dark"
                }`}
              >
                <FiFileText /> CV
              </a>
              <a
                href="#work"
                className={`flex items-center gap-2 rounded-lg border-2 px-5 py-3 text-base font-medium transition-all hover:scale-105 ${
                  isDark
                    ? "border-dark-primary text-dark-primary hover:bg-dark-primary hover:text-white"
                    : "border-light-primary text-light-primary hover:bg-light-primary hover:text-white"
                }`}
              >
                Work <FiArrowRight />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="max-w-4xl"
          >
            <div
              className={`space-y-4 text-lg leading-relaxed md:text-xl ${
                isDark ? "text-dark-text-secondary" : "text-light-text-secondary"
              }`}
            >
              <p>
                I work on information synthesis systems that convert unstructured,
                long-context documents into structured knowledge through text-to-table
                generation, semantic parsing, and tabular reasoning.
              </p>
              <p>
                My research focuses on agents that synthesize evidence across text,
                tables, figures, and domain-specific datasets, with an emphasis on
                reliability in sports analytics, healthcare data, and other specialized
                information settings.
              </p>
              <p>
                I recently completed my MS in Computer Science at Arizona State University.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className={`rounded-lg p-3 transition-colors ${
                    isDark
                      ? "text-dark-text-secondary hover:bg-dark-card hover:text-dark-primary"
                      : "text-light-text-secondary hover:bg-light-surface hover:text-light-primary"
                  }`}
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>

            <div className="mt-10">
              <h2
                className={`mb-4 text-2xl font-bold ${
                  isDark ? "text-dark-text" : "text-light-text"
                }`}
              >
                News
              </h2>

              <ul className="space-y-3">
                {news.map((item) => (
                  <li
                    key={`${item.month}-${item.year}-${item.summary}`}
                    className="grid grid-cols-[6rem_1fr] gap-4"
                  >
                    <div
                      className={`text-base font-semibold ${
                        isDark ? "text-dark-primary" : "text-light-primary"
                      }`}
                    >
                      {item.month} {item.year}
                    </div>
                    <div
                      className={`text-base leading-relaxed md:text-lg ${
                        isDark ? "text-dark-text-secondary" : "text-light-text-secondary"
                      }`}
                      dangerouslySetInnerHTML={{ __html: item.summary }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
