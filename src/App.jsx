import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white">
      {/* Global tech background: soft radial glow, subtle grid, and neon circuitry accents */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 10%, rgba(16,185,129,0.10), transparent 45%), radial-gradient(circle at 80% 90%, rgba(59,130,246,0.10), transparent 40%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-y-0 left-0 -z-0 w-[2px] bg-gradient-to-b from-emerald-400/0 via-emerald-400/70 to-emerald-400/0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 -z-0 h-24 bg-gradient-to-b from-emerald-400/20 via-cyan-300/10 to-transparent"
        initial={{ y: -100 }}
        animate={{ y: [ -100, 0, -100 ] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
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
          <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
        </div>

        <About />
        <Experience />
        <Education />
      </motion.main>

      <footer className="mx-auto mt-10 w-full max-w-6xl px-6 py-10 text-center text-xs text-zinc-400">
        <div className="flex flex-col items-center justify-center gap-1">
          <span className="font-mono tracking-widest text-zinc-300">owen4@illinois.edu • (647) 613-8298</span>
          <a
            href="https://www.linkedin.com/in/owen-chen-112382322/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-300 hover:text-emerald-200"
          >
            LinkedIn
          </a>
          <span className="text-zinc-500">© {new Date().getFullYear()} Owen Chen</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
