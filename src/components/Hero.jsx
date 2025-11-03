import React from 'react';
import Spline from '@splinetool/react-spline';
import { Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Scene (full-cover) */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/JqBuM4DcZiGXqO-1/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Neon grid + scanning beam overlays that don't block interactions */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(0,255,170,0.08) 0px, rgba(0,255,170,0.08) 1px, transparent 1px, transparent 24px), repeating-linear-gradient(90deg, rgba(0,255,170,0.08) 0px, rgba(0,255,170,0.08) 1px, transparent 1px, transparent 24px)'
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-emerald-400/15 via-cyan-300/10 to-transparent"
        initial={{ y: -120 }}
        animate={{ y: [ -120, 0, -120 ] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-emerald-200 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
          AI/ML • Full‑Stack • CS @ UIUC (Incoming)
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut', delay: 0.05 }}
          className="mt-4 font-sans text-5xl font-black uppercase leading-tight tracking-wider text-white sm:text-6xl md:text-7xl"
        >
          Owen Chen
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut', delay: 0.15 }}
          className="mt-3 max-w-3xl text-base text-zinc-300 sm:text-lg"
        >
          First-year CS student focused on AI/ML applications, alignment research, and full-stack products. Previously at BMW, UPenn/CMU research, and founder of OchCoins.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: 'easeOut', delay: 0.25 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="https://www.linkedin.com/in/owen-chen-112382322/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-zinc-100 backdrop-blur-sm transition will-change-transform hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-[0_0_60px_-10px_rgba(16,185,129,0.5)]"
          >
            <Linkedin size={18} />
            <span className="font-black uppercase tracking-wide">LinkedIn</span>
          </a>
          <a
            href="mailto:owen4@illinois.edu"
            className="group inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-emerald-100 backdrop-blur-sm transition will-change-transform hover:-translate-y-0.5 hover:bg-emerald-400/20"
          >
            <Mail size={18} />
            <span className="font-black uppercase tracking-wide">Email</span>
          </a>
          <a
            href="tel:+16476138298"
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-zinc-100 backdrop-blur-sm transition will-change-transform hover:-translate-y-0.5 hover:bg-white/10"
          >
            <Phone size={18} />
            <span className="font-black uppercase tracking-wide">(647) 613-8298</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
