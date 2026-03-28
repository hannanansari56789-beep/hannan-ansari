import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Coffee, Zap, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden bg-surface-bright dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-700 uppercase bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-300">
              My Journey
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight text-blue-900 dark:text-white mb-8 font-headline leading-[1.1]">
              Engineering the Web with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 italic">Technical Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
              I am a Full Stack Web Developer passionate about building scalable, high-performance applications. My mission is to bridge the gap between complex backend logic and intuitive frontend experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Sparkles className="w-8 h-8 text-blue-500" />,
                title: "Clean Code",
                description: "I write maintainable, well-documented code that follows industry best practices."
              },
              {
                icon: <Zap className="w-8 h-8 text-amber-500" />,
                title: "Performance",
                description: "Optimizing every byte to ensure lightning-fast load times and smooth interactions."
              },
              {
                icon: <Layers className="w-8 h-8 text-rose-500" />,
                title: "Scalability",
                description: "Building architectures that grow with your business, from MVP to enterprise."
              },
              {
                icon: <Coffee className="w-8 h-8 text-orange-700" />,
                title: "Dedication",
                description: "I am committed to delivering excellence in every project I undertake."
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-surface-bright dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
              >
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-4 font-headline">{value.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-sans leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-24 px-6 bg-surface-bright dark:bg-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 dark:text-white mb-8 font-headline tracking-tight leading-tight">
              A Solo Craft <br className="hidden md:block"/>Built on Passion
            </h2>
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
              <p>
                I believe that the best software is built by individuals who truly care about the end-user experience. My approach is holistic: I don't just write code; I design systems that solve real-world problems.
              </p>
              <p>
                With years of experience across various industries, I've learned that the key to a successful project is clear communication and a relentless pursuit of quality. I treat every project as if it were my own.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://picsum.photos/seed/developer-workspace/1000/1000" 
              alt="My Workspace" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-blue-900 dark:bg-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 font-headline tracking-tight leading-tight">
            Ready to build something <span className="italic text-blue-300">extraordinary?</span>
          </h2>
          <p className="text-xl text-blue-100/80 mb-12 font-sans max-w-2xl mx-auto">
            Let's collaborate to bring your digital vision to life with precision and care.
          </p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-white text-blue-900 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
