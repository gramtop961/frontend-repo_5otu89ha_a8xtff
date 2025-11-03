import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const roles = [
  {
    org: 'The Waiting Room (Internship)',
    period: 'May 2025 — Aug 2025',
    points: [
      'Built a full-stack mental health platform with a FastAPI backend and Docker for scalable deploys.',
      'Implemented a secure therapist chat using MongoDB and JavaScript, improving accessibility.',
      'Streamlined backend workflows with Node.js, cutting bug resolution time by ~30%.',
    ],
    tech: ['FastAPI', 'Docker', 'MongoDB', 'Node.js', 'JavaScript'],
  },
  {
    org: 'BMW (Internship)',
    period: 'Jun 2024 — Aug 2024',
    points: [
      'Researched AI-driven IFACTORY initiatives leveraging AWS for large-scale data processing.',
      'Applied Rust and C++ in digital twin simulations to model eco-friendly production workflows.',
    ],
    tech: ['AWS', 'Rust', 'C++'],
  },
  {
    org: 'UPenn & Carnegie Mellon (Research Assistant — Aydin Mohseni)',
    period: 'Aug 2021 — Aug 2024',
    points: [
      'Researched AI alignment and corrigibility frameworks; engaged with foundational safety literature.',
      'Designed Python simulations to test reward ambiguity and safety mechanisms for alignment.',
    ],
    tech: ['Python', 'AI Safety', 'Simulation'],
  },
  {
    org: 'OchCoins (Founder & CEO)',
    period: 'Jun 2021 — Aug 2023',
    points: [
      'Built B2C automation workflows with Node.js, Angular.js, and Vue.js; scaled to 3,000+ users.',
      'Developed an E2E Discord payment bot with AWS deployment, API integration, and Twilio updates.',
    ],
    tech: ['Node.js', 'Angular.js', 'Vue.js', 'AWS', 'Twilio'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative mx-auto w-full max-w-6xl px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="font-sans text-2xl font-black uppercase tracking-wider text-white sm:text-3xl"
      >
        Experience
      </motion.h2>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {roles.map((r, i) => (
          <motion.div
            key={r.org}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
          >
            <div className="flex items-start gap-3">
              <div className="rounded-md bg-white/10 p-2 text-white">
                <Briefcase size={18} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-sans text-base font-black uppercase tracking-wide text-white">
                    {r.org}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs text-zinc-400">
                    <Calendar size={14} /> {r.period}
                  </span>
                </div>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-300">
                  {r.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap gap-2">
                  {r.tech.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-black/40 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
