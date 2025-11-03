import React from 'react';
import { motion } from 'framer-motion';

const card = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 * i } }),
};

const About = () => {
  return (
    <section id="about" className="relative mx-auto w-full max-w-5xl px-6 py-16 text-slate-200">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold text-white sm:text-3xl"
      >
        About Owen
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-4 text-slate-300"
      >
        I’m a builder who loves turning ideas into polished, production-ready products. My focus is
        on crafting performant frontend experiences, clean APIs, and scalable systems. I enjoy
        working across the stack, leading with design thinking, and delivering delightful details.
      </motion.p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <motion.div
          variants={card}
          initial="hidden"
          whileInView="show"
          custom={0}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 transition hover:border-cyan-500/30 hover:bg-slate-900"
        >
          <p className="text-sm text-slate-400">Focus Areas</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-300">
            <li>Modern React and design systems</li>
            <li>Type-safe APIs and cloud-native tooling</li>
            <li>Real-time UX and data visualization</li>
          </ul>
        </motion.div>
        <motion.div
          variants={card}
          initial="hidden"
          whileInView="show"
          custom={1}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 transition hover:border-fuchsia-500/30 hover:bg-slate-900"
        >
          <p className="text-sm text-slate-400">Values</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-300">
            <li>Accessibility and performance first</li>
            <li>Well-crafted, maintainable code</li>
            <li>Clear communication and collaboration</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
