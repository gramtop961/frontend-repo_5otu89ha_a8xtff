import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative mx-auto w-full max-w-6xl px-6 py-20 text-zinc-200">
      {/* Futuristic grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(16,185,129,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 font-mono text-2xl font-semibold uppercase tracking-widest text-white sm:text-3xl"
      >
        About
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="relative z-10 mt-4 max-w-3xl text-zinc-300"
      >
        First-year CS student building AI/ML applications. First-authored research in high school, with assistant research at the University of Pennsylvania and Carnegie Mellon University. Experienced in full‑stack apps (Vue, React) and AI Alignment; eager to create impactful solutions for real-world problems.
      </motion.p>

      {/* Skills */}
      <div className="relative z-10 mt-8 grid gap-5 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-5 backdrop-blur-sm"
        >
          <h3 className="font-mono text-sm font-semibold uppercase tracking-widest text-emerald-200">Languages</h3>
          <div className="mt-3 flex flex-wrap gap-2 text-sm text-zinc-200">
            {['Rust', 'C++', 'Java', 'TypeScript/JavaScript', 'Python', 'Go', 'HTML5/CSS3'].map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-black/40 px-2 py-1 text-xs text-zinc-300">{t}</span>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
        >
          <h3 className="font-mono text-sm font-semibold uppercase tracking-widest text-white">Frameworks & Libraries</h3>
          <div className="mt-3 flex flex-wrap gap-2 text-sm text-zinc-200">
            {['Vue.js', 'React.js', 'Node.js', 'Angular.js', 'FastAPI'].map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-black/40 px-2 py-1 text-xs text-zinc-300">{t}</span>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
        >
          <h3 className="font-mono text-sm font-semibold uppercase tracking-widest text-white">Tools & Platforms</h3>
          <div className="mt-3 flex flex-wrap gap-2 text-sm text-zinc-200">
            {['Git', 'Docker', 'Twilio', 'AWS', 'MongoDB', 'Firebase'].map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-black/40 px-2 py-1 text-xs text-zinc-300">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
