import React from 'react';
import { motion } from 'framer-motion';

const item = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.08 * i } }),
};

const About = () => {
  return (
    <section id="about" className="relative mx-auto w-full max-w-6xl px-6 py-20 text-zinc-200">
      {/* Subtle background motif */}
      <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-2xl font-semibold text-white sm:text-3xl"
      >
        About Owen
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="relative z-10 mt-4 max-w-3xl text-zinc-300"
      >
        I’m a full‑stack product engineer focused on minimal, monochrome interfaces with bold, cinematic motion. 
        I obsess over clarity, performance, and the tiny details that make products feel effortless.
      </motion.p>

      <div className="relative z-10 mt-8 grid gap-5 sm:grid-cols-3">
        {[
          { title: 'Craft', points: ['Design systems', 'Interaction design', 'A11y & performance'] },
          { title: 'Build', points: ['React & motion', 'Type‑safe APIs', 'Scalable systems'] },
          { title: 'Impact', points: ['Quality at speed', 'Clear comms', 'Delightful polish'] },
        ].map((card, i) => (
          <motion.div
            key={card.title}
            variants={item}
            initial="hidden"
            whileInView="show"
            custom={i}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -6, rotate: -0.2 }}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-shadow hover:shadow-[0_10px_50px_-20px_rgba(255,255,255,0.4)]"
          >
            <h3 className="text-sm font-semibold text-white">{card.title}</h3>
            <ul className="mt-2 space-y-1 text-sm text-zinc-300">
              {card.points.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
