import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../../context/ThemeContext";
import { news } from "../../data/news";

const News = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [showAll, setShowAll] = useState(false);
  const visibleNews = showAll ? news : news.slice(0, 5);

  return (
    <section
      id="news"
      ref={ref}
      className={`py-20 ${isDark ? "bg-dark-surface" : "bg-light-surface"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 ${
                isDark ? "text-dark-text" : "text-light-text"
              }`}
            >
              What I&apos;ve{" "}
              <span
                className={isDark ? "text-dark-primary" : "text-light-primary"}
              >
                Been Up To
              </span>
            </h2>
            <div
              className={`w-20 h-1 mb-8 ${
                isDark ? "bg-dark-primary" : "bg-light-primary"
              }`}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_0.35fr] lg:items-start">
            <div className="flex flex-col gap-4">
            {visibleNews.map((item, idx) => (
              <div
                key={idx}
                className={`w-full rounded-lg p-5 ${
                  isDark ? "bg-dark-card" : "bg-white"
                }`}
              >
                <div
                  className={`mb-2 text-xs font-semibold uppercase tracking-[0.18em] ${
                    isDark ? "text-dark-primary" : "text-light-primary"
                  }`}
                >
                  {item.month} {item.year}
                </div>
                <div
                  className={`text-base leading-relaxed ${
                    isDark ? "text-dark-text-secondary" : "text-light-text-secondary"
                  }`}
                  dangerouslySetInnerHTML={{ __html: item.summary }}
                />
              </div>
            ))}
            {news.length > 5 && (
              <button
                className={`mt-2 px-4 py-2 rounded text-sm font-medium border ${
                  isDark
                    ? "border-dark-primary text-dark-primary"
                    : "border-light-primary text-light-primary"
                }`}
                onClick={() => setShowAll((v) => !v)}
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
            )}
            </div>

            <div className={`rounded-lg p-6 ${isDark ? "bg-dark-card" : "bg-white"}`}>
              <p
                className={`text-sm font-semibold uppercase tracking-[0.2em] ${
                  isDark ? "text-dark-primary" : "text-light-primary"
                }`}
              >
                Full profile
              </p>
              <p
                className={`mt-4 text-sm leading-relaxed ${
                  isDark ? "text-dark-text-secondary" : "text-light-text-secondary"
                }`}
              >
                Work history, publications, skills, and projects live on a separate page
                now so the homepage stays lighter.
              </p>
              <a
                href="#work"
                className={`mt-5 inline-flex rounded-lg px-4 py-2 text-sm font-medium ${
                  isDark
                    ? "bg-dark-primary text-white hover:bg-dark-primary-light"
                    : "bg-light-primary text-white hover:bg-light-primary-dark"
                }`}
              >
                View Work
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default News;
