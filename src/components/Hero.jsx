import React from 'react';
import Spline from '@splinetool/react-spline';
import { Linkedin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [showFallback, setShowFallback] = React.useState(false);

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Scene (full-cover) */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EQgEIs2r5cMbWroZ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Iridescent/mono gradient overlays that won't block 3D interactions */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),rgba(0,0,0,0)_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.08),rgba(0,0,0,0)_55%)]" />

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
          className="mt-3 max-w-2xl text-base text-zinc-300 sm:text-lg"
        >
          Modern, monochrome aesthetics with a focus on clarity. I design and build performant web
          experiences with thoughtful motion and precise details.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="https://www.linkedin.com/in/owen-chen-112382322/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-zinc-100 backdrop-blur-sm transition hover:bg-white/10 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.35)]"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
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
          <div className="relative h-28 w-28 overflow-hidden rounded-full border border-white/15 bg-white/5 shadow-lg shadow-black/50 backdrop-blur-sm">
            {showFallback ? (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-white/10 via-black to-white/10 text-xl font-semibold text-zinc-200">
                OC
              </div>
            ) : (
              <img
                src="/profile.jpg"
                alt="Owen Chen"
                className="h-full w-full object-cover"
                onError={() => setShowFallback(true)}
              />
            )}
          </div>
          <p className="mt-2 text-xs text-zinc-400">Add /public/profile.jpg to show your photo</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
