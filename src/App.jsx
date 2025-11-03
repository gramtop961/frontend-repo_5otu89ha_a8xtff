import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950">
      <Hero />

      <motion.main
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Section divider */}
        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
        </div>

        <About />
        <Projects />
        <Education />
      </motion.main>

      <footer className="mx-auto mt-10 w-full max-w-6xl px-6 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Owen Chen • Crafted with React & Tailwind
      </footer>
    </div>
  );
}

export default App;
