import React from 'react';
import Spline from '@splinetool/react-spline';
import { Linkedin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Scene (full-cover) */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Monochrome overlays that won't block 3D interactions */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),transparent_30%,transparent_70%,rgba(0,0,0,0.35))]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-zinc-300 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Owen Chen
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="mt-3 max-w-2xl text-base text-zinc-300 sm:text-lg"
        >
          I design and build crisp, high-performance web experiences in a pure black‑and‑white aesthetic. 
          My work blends thoughtful interaction design with precision engineering and motion that feels alive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="https://www.linkedin.com/in/owen-chen-112382322/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-zinc-100 backdrop-blur-sm transition will-change-transform hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.35)]"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
            <ExternalLink size={16} className="opacity-60 transition group-hover:opacity-100" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
