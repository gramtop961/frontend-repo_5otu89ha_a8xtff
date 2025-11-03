import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white">
      {/* Global background design: soft radial glow + ultra‑subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 10%, rgba(255,255,255,0.06), transparent 45%), radial-gradient(circle at 80% 90%, rgba(255,255,255,0.05), transparent 40%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />

      <Hero />

      <motion.main
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        {/* Section divider */}
        <div className="mx-auto max-w-6xl px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <About />
        <Projects />
        <Education />
      </motion.main>

      <footer className="mx-auto mt-10 w-full max-w-6xl px-6 py-10 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} Owen Chen • Crafted in black & white
      </footer>
    </div>
  );
}

export default App;
