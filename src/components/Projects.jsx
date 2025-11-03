import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Holograph Portfolio',
    description:
      'A 3D-enhanced personal site using Spline and motion-driven UI for a futuristic identity.',
    tech: ['React', 'Spline', 'Tailwind'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Realtime Collab Notes',
    description:
      'A low-latency notes app with presence, comments, and conflict-free editing.',
    tech: ['React', 'WebSockets', 'CRDT'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Fintech Dashboard',
    description:
      'Beautiful, responsive charts and risk insights with dark-mode first design.',
    tech: ['FastAPI', 'Postgres', 'Charts'],
    github: '#',
    demo: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative mx-auto w-full max-w-6xl px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold text-white sm:text-3xl"
      >
        Projects
      </motion.h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="group rounded-xl border border-slate-800 bg-slate-900/50 p-5 transition hover:border-cyan-500/40 hover:bg-slate-900"
          >
            <h3 className="text-lg font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-700 bg-slate-800/60 px-2 py-1 text-xs text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-slate-300 transition hover:text-white"
              >
                <Github size={16} /> Code
              </a>
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-cyan-300 transition hover:text-cyan-200"
              >
                <ExternalLink size={16} /> Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
