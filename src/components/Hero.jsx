import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Iridescent gradient overlay that won't block 3D interactions */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.20),rgba(15,23,42,0)_60%)]" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl font-bold leading-tight text-white drop-shadow sm:text-5xl md:text-6xl"
        >
          Owen Chen
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="mt-3 max-w-2xl text-base text-slate-300 sm:text-lg"
        >
          Building modern, user-centric experiences at the intersection of design and engineering.
          Passionate about performant web apps, delightful UI, and thoughtful systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-cyan-200 transition hover:bg-cyan-500/20 hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.45)]"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
            <ExternalLink size={16} className="opacity-60 transition group-hover:opacity-100" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-4 py-2 text-slate-200 transition hover:bg-slate-800 hover:shadow-[0_0_40px_-12px_rgba(148,163,184,0.35)]"
          >
            <Github size={18} />
            <span>GitHub</span>
            <ExternalLink size={16} className="opacity-60 transition group-hover:opacity-100" />
          </a>
        </motion.div>

        {/* Optional profile photo: add a file named public/profile.jpg to display automatically */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.25 }}
          className="mt-8"
        >
          <div className="relative h-28 w-28 overflow-hidden rounded-full border border-slate-700/60 shadow-lg shadow-slate-900/40">
            <img
              src="/profile.jpg"
              alt="Owen Chen"
              className="h-full w-full object-cover"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `<div class='flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-600/30 via-slate-800 to-fuchsia-600/30 text-xl font-semibold text-slate-200'>OC</div>`;
                }
              }}
            />
          </div>
          <p className="mt-2 text-xs text-slate-400">Add /public/profile.jpg to show your photo</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
