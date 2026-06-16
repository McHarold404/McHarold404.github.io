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
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 ${
                isDark ? "text-dark-text" : "text-light-text"
              }`}
            >
              Latest{" "}
              <span
                className={isDark ? "text-dark-primary" : "text-light-primary"}
              >
                News
              </span>
            </h2>
            <div
              className={`w-20 h-1 mx-auto mb-8 ${
                isDark ? "bg-dark-primary" : "bg-light-primary"
              }`}
            />

            {/* Removed filter buttons for news. */}
          </div>

          {/* News List */}
          <div className="flex flex-col items-center gap-4">
            {visibleNews.map((item, idx) => (
              <div
                key={idx}
                className={`w-full max-w-2xl p-4 rounded-lg shadow ${
                  isDark ? "bg-dark-card" : "bg-white"
                }`}
              >
                <div className="text-xs font-semibold mb-1 text-gray-500">
                  {item.month} {item.year}
                </div>
                <div
                  className="text-base"
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
        </motion.div>
      </div>
    </section>
  );
};

export default News;
