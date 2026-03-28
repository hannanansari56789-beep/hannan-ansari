import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Zap, Globe, Layers, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden bg-white dark:bg-slate-950">
      {/* Hero Section - Editorial / Magazine Style */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-[0.3em] text-blue-600 uppercase bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300 rounded-full">
              Full Stack Web Developer
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-headline font-extrabold tracking-tight leading-[0.9] text-blue-950 dark:text-white mb-10">
              BUILDING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 italic">SCALABLE</span> <br />
              WEB APPS.
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-sans max-w-2xl mx-auto mb-12 leading-relaxed">
              I engineer high-performance web experiences with modern tech stacks. From pixel-perfect frontends to robust backend architectures.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/work" 
                className="px-12 py-6 bg-blue-600 text-white font-bold rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40 transition-all group flex items-center gap-3"
              >
                View Portfolio <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="px-12 py-6 border-2 border-slate-200 dark:border-slate-800 text-blue-950 dark:text-white font-bold rounded-full hover:bg-slate-50 dark:hover:bg-slate-900 transition-all"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Marquee - Pushed further down with more padding */}
      <section className="py-32 bg-white dark:bg-slate-950 overflow-hidden border-y border-slate-100 dark:border-slate-900 relative z-20">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-24 px-12">
            {['REACT', 'NEXT.JS', 'TYPESCRIPT', 'NODE.JS', 'POSTGRESQL', 'AWS', 'DOCKER', 'TAILWIND'].map((tech) => (
              <span key={tech} className="text-3xl md:text-5xl font-headline font-black text-slate-200 dark:text-slate-800 tracking-tighter hover:text-blue-600 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-24 px-12">
            {['REACT', 'NEXT.JS', 'TYPESCRIPT', 'NODE.JS', 'POSTGRESQL', 'AWS', 'DOCKER', 'TAILWIND'].map((tech) => (
              <span key={tech + '-2'} className="text-3xl md:text-5xl font-headline font-black text-slate-200 dark:text-slate-800 tracking-tighter hover:text-blue-600 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Clean Utility */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: 'Projects Delivered', value: '250+' },
              { label: 'Global Clients', value: '120+' },
              { label: 'Design Awards', value: '15+' },
              { label: 'Years Experience', value: '10+' },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-headline font-black text-blue-600 mb-2 tracking-tighter">{stat.value}</p>
                <p className="text-sm font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Expertise - Technical Dashboard Style (Human-Designed Feel) */}
      <section className="py-40 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-32">
            <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Our Capabilities</span>
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-headline font-bold text-blue-950 dark:text-white mb-10 tracking-tight leading-[0.9]">
              WE BUILD THE <br /> <span className="italic text-blue-600">FUTURE.</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Precision meets creativity. We don't just build websites; we engineer digital environments that drive real business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-[2rem] overflow-hidden">
            {[
              { 
                id: '01',
                title: 'Frontend Engineering', 
                desc: 'Building responsive, high-performance user interfaces using React, Next.js, and modern CSS frameworks like Tailwind.',
                tags: ['React', 'TypeScript', 'Tailwind']
              },
              { 
                id: '02',
                title: 'Backend Systems', 
                desc: 'Designing scalable server-side architectures, RESTful APIs, and database schemas using Node.js and PostgreSQL.',
                tags: ['Node.js', 'Express', 'SQL']
              },
              { 
                id: '03',
                title: 'Full Stack Solutions', 
                desc: 'End-to-end web application development from initial concept to deployment and cloud infrastructure management.',
                tags: ['AWS', 'Docker', 'CI/CD']
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-10 md:p-16 bg-white dark:bg-slate-950 hover:bg-blue-600 transition-colors duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
                  <div className="flex gap-10 items-start">
                    <span className="text-sm font-mono text-slate-400 group-hover:text-blue-200 transition-colors">{service.id}</span>
                    <div className="max-w-xl">
                      <h3 className="text-3xl md:text-5xl font-headline font-bold text-blue-950 dark:text-white mb-6 group-hover:text-white transition-colors">{service.title}</h3>
                      <p className="text-lg text-slate-600 dark:text-slate-400 group-hover:text-blue-100 transition-colors leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {service.tags.map(tag => (
                      <span key={tag} className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 group-hover:border-white/30 group-hover:text-white transition-all">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Clean & Impactful */}
      <section className="py-32 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-headline font-bold text-white mb-12 tracking-tight leading-tight">
            READY TO BUILD YOUR <br /> <span className="opacity-70 italic font-light">DIGITAL LEGACY?</span>
          </h2>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-4 px-12 py-6 bg-white text-blue-600 font-black rounded-full hover:scale-105 transition-all shadow-2xl text-xl uppercase tracking-widest"
          >
            Let's Talk <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
