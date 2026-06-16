import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/sections/Hero";
import Experience from "./components/sections/Experience";
import Publications from "./components/sections/Publications";
import Projects from "./components/sections/Projects";

const getCurrentView = () => (window.location.hash === "#work" ? "work" : "home");

function App() {
  const [currentView, setCurrentView] = useState(getCurrentView);

  useEffect(() => {
    const handleHashChange = () => setCurrentView(getCurrentView());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar currentView={currentView} />
        <main>
          {currentView === "work" ? (
            <>
              <section className="pt-28 pb-10 bg-light-bg dark:bg-dark-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-light-primary dark:text-dark-primary">
                    Work archive
                  </p>
                  <h1 className="mt-4 text-4xl font-bold text-light-text dark:text-dark-text md:text-6xl">
                    Experience, research, and projects
                  </h1>
                  <p className="mt-5 max-w-3xl text-lg leading-relaxed text-light-text-secondary dark:text-dark-text-secondary">
                    A fuller record of the places I have worked, the research I have published,
                    and the systems I have built.
                  </p>
                </div>
              </section>
              <Experience />
              <Publications />
              <Projects />
            </>
          ) : (
            <Hero />
          )}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
