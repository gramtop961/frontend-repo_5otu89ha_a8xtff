import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
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
      <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl font-bold leading-tight text-white drop-shadow sm:text-5xl md:text-6xl">
          Owen Chen
        </h1>
        <p className="mt-3 max-w-2xl text-base text-slate-300 sm:text-lg">
          Building modern, user-centric experiences at the intersection of design and engineering.
          Passionate about performant web apps, delightful UI, and thoughtful systems.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-cyan-200 transition hover:bg-cyan-500/20"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
            <ExternalLink size={16} className="opacity-60 transition group-hover:opacity-100" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-4 py-2 text-slate-200 transition hover:bg-slate-800"
          >
            <Github size={18} />
            <span>GitHub</span>
            <ExternalLink size={16} className="opacity-60 transition group-hover:opacity-100" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
