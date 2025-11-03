import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative mx-auto w-full max-w-5xl px-6 py-16 text-slate-200">
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">About Owen</h2>
      <p className="mt-4 text-slate-300">
        I’m a builder who loves turning ideas into polished, production-ready products. My focus is
        on crafting performant frontend experiences, clean APIs, and scalable systems. I enjoy
        working across the stack, leading with design thinking, and delivering delightful details.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
          <p className="text-sm text-slate-400">Focus Areas</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-300">
            <li>Modern React and design systems</li>
            <li>Type-safe APIs and cloud-native tooling</li>
            <li>Real-time UX and data visualization</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
          <p className="text-sm text-slate-400">Values</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-300">
            <li>Accessibility and performance first</li>
            <li>Well-crafted, maintainable code</li>
            <li>Clear communication and collaboration</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
