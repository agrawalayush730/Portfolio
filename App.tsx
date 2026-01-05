import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactBar from './components/ImpactBar';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cyber-dark text-slate-300 font-sans selection:bg-cyan-500/30">
      <Navbar />
      
      <main className="container mx-auto px-4 md:px-8 max-w-7xl">
        <section id="hero">
          <Hero />
        </section>

        <section id="impact">
          <ImpactBar />
        </section>

        <section id="experience" className="py-20">
          <Experience />
        </section>

        <section id="projects" className="py-20">
          <Projects />
        </section>

        <section id="skills" className="py-20">
          <Skills />
        </section>

        <section id="education" className="py-20">
          <Education />
        </section>

        <section id="contact" className="py-20 mb-10">
          <Contact />
        </section>
      </main>

      {/* Floating Scroll Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-cyan-600/20 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 z-50 backdrop-blur-sm ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>

      <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-900">
        <p>© {new Date().getFullYear()} Ayush Agrawal. All rights reserved.</p>
        <p className="mt-1">Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default App;