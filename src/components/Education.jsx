import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const schools = [
  {
    school: 'University of Illinois Urbana–Champaign',
    degree: 'B.Sc. in Computer Science (expected)',
    period: 'Aug 2025 — May 2029',
    details: 'Incoming CS student with interests in AI/ML, alignment, and full-stack systems.'
  },
  {
    school: 'Bayview Glen High School',
    degree: 'High School Diploma',
    period: 'Sep 2021 — Jun 2025',
    details: 'GPA: 4.0 unweighted, 4.32 weighted'
  }
];

const Education = () => {
  return (
    <section id="education" className="relative mx-auto w-full max-w-6xl px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="font-mono text-2xl font-semibold uppercase tracking-widest text-white sm:text-3xl"
      >
        Education
      </motion.h2>

      <div className="mt-6 space-y-4">
        {schools.map((s, i) => (
          <motion.div
            key={s.school}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            whileHover={{ y: -6 }}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
          >
            <div className="flex items-start gap-3">
              <motion.div whileHover={{ rotate: -6 }} className="rounded-md bg-white/10 p-2 text-white">
                <GraduationCap size={18} />
              </motion.div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-white">{s.school}</h3>
                <p className="text-sm text-zinc-300">{s.degree}</p>
                <p className="mt-1 inline-flex items-center gap-1 text-xs text-zinc-400">
                  <Calendar size={14} /> {s.period}
                </p>
                <p className="mt-2 text-sm text-zinc-300">{s.details}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
