import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const schools = [
  {
    school: 'University of Somewhere',
    degree: 'B.S. in Computer Science',
    period: '2019 – 2023',
    details: 'Focused on human-computer interaction, distributed systems, and product design.',
  },
  {
    school: 'Advanced Coursework',
    degree: 'Machine Learning, Databases, UX Research',
    period: 'Selected',
    details: 'Project-based learning with emphasis on practical, real-world applications.',
  },
];

const Education = () => {
  return (
    <section id="education" className="relative mx-auto w-full max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">Education</h2>
      <div className="mt-6 space-y-4">
        {schools.map((s) => (
          <div
            key={s.school}
            className="rounded-xl border border-slate-800 bg-slate-900/50 p-5"
          >
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-slate-800 p-2 text-cyan-300">
                <GraduationCap size={20} />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-white">{s.school}</h3>
                <p className="text-sm text-slate-300">{s.degree}</p>
                <p className="mt-1 inline-flex items-center gap-1 text-xs text-slate-400">
                  <Calendar size={14} /> {s.period}
                </p>
                <p className="mt-2 text-sm text-slate-300">{s.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
