import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const Navbar = ({ currentView = "home" }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", view: "home" },
    { name: "Work", href: "#work", view: "work" },
  ];

  const scrollToSection = (href, view = "home") => {
    setMobileMenuOpen(false);

    if (view === "work") {
      window.location.hash = "work";
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.location.hash = href.replace("#", "");
    window.setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, currentView === "work" ? 100 : 0);
  };

  const navLinkClass = (item) => {
    const isActive = item.view === currentView;
    const activeClass = isActive
      ? isDark
        ? "text-dark-primary"
        : "text-light-primary"
      : "";
    const baseColor = isDark ? "text-dark-text-secondary" : "text-light-text-secondary";

    return `text-sm font-medium transition-colors ${activeClass || baseColor} ${
      isDark ? "hover:text-dark-primary" : "hover:text-light-primary"
    }`;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? isDark
              ? "bg-dark-surface/95 backdrop-blur-md shadow-lg"
              : "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#home");
                }}
                className="flex items-center"
              >
                <img
                  src="/images/image.png"
                  alt="Naman Ahuja"
                  className="h-10 w-auto rounded-sm transition-opacity duration-300"
                />
              </a>
            </motion.div>

            <div className="hidden items-center space-x-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href, item.view);
                  }}
                  className={navLinkClass(item)}
                >
                  {item.name}
                </a>
              ))}

              <button
                onClick={toggleTheme}
                className={`rounded-lg p-2 transition-colors ${
                  isDark
                    ? "bg-dark-card hover:bg-dark-primary/20"
                    : "bg-light-surface hover:bg-light-primary/10"
                }`}
                aria-label="Toggle color theme"
              >
                {isDark ? (
                  <FiSun className="h-5 w-5 text-dark-primary" />
                ) : (
                  <FiMoon className="h-5 w-5 text-light-primary" />
                )}
              </button>
            </div>

            <div className="flex items-center space-x-4 md:hidden">
              <button
                onClick={toggleTheme}
                className={`rounded-lg p-2 ${
                  isDark ? "text-dark-primary" : "text-light-primary"
                }`}
                aria-label="Toggle color theme"
              >
                {isDark ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 ${isDark ? "text-dark-text" : "text-light-text"}`}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          className={`fixed inset-0 z-40 md:hidden ${isDark ? "bg-dark-bg" : "bg-light-bg"}`}
          style={{ top: "64px" }}
        >
          <div className="flex h-full flex-col items-center justify-center space-y-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href, item.view);
                }}
                className={`text-2xl font-medium transition-colors ${
                  item.view === currentView
                    ? isDark
                      ? "text-dark-primary"
                      : "text-light-primary"
                    : isDark
                      ? "text-dark-text hover:text-dark-primary"
                      : "text-light-text hover:text-light-primary"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
