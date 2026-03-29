import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Zap, Globe, Layers, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden bg-white dark:bg-slate-950">
      {/* Hero Section - High Impact Split Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <span className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-[0.3em] text-blue-600 uppercase bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300 rounded-full">
              Full Stack Web Architect
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-headline font-black tracking-tighter leading-[0.85] text-blue-950 dark:text-white mb-10">
              CRAFTING <br />
              <span className="text-blue-600 italic">DIGITAL</span> <br />
              MASTERY.
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-sans max-w-xl mb-12 leading-relaxed">
              I engineer high-performance, scalable web applications that transform businesses. From complex backend logic to pixel-perfect frontends.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link 
                to="/work" 
                className="px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-500/40 transition-all group flex items-center gap-3"
              >
                View My Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="px-10 py-5 border-2 border-slate-200 dark:border-slate-800 text-blue-950 dark:text-white font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-all"
              >
                Get Started
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-900 group">
              <img 
                src="https://picsum.photos/seed/tech-abstract/1200/1200" 
                alt="Digital Art" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 to-transparent mix-blend-overlay" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="p-6 glass-card rounded-3xl text-center">
                  <p className="text-white font-bold tracking-widest text-xs uppercase mb-2">Innovation Driven</p>
                  <p className="text-blue-200 text-sm">Crafting the future of web.</p>
                </div>
              </div>
            </div>
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600 rounded-full blur-[80px] opacity-30" 
            />
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-600 rounded-full blur-[80px] opacity-30" 
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-blue-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-blue-500/10 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
          </motion.div>
        </div>
      </section>

      {/* Trusted By Marquee - Professional Tech Stack */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50 overflow-hidden border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.5em]">Core Technologies</p>
        </div>
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-24 px-12">
            {['REACT', 'NEXT.JS', 'TYPESCRIPT', 'NODE.JS', 'POSTGRESQL', 'AWS', 'DOCKER', 'TAILWIND', 'GRAPHQL', 'REDIS'].map((tech) => (
              <span key={tech} className="text-4xl md:text-6xl font-headline font-black text-slate-300 dark:text-slate-700 tracking-tighter hover:text-blue-600 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-24 px-12">
            {['REACT', 'NEXT.JS', 'TYPESCRIPT', 'NODE.JS', 'POSTGRESQL', 'AWS', 'DOCKER', 'TAILWIND', 'GRAPHQL', 'REDIS'].map((tech) => (
              <span key={tech + '-2'} className="text-4xl md:text-6xl font-headline font-black text-slate-300 dark:text-slate-700 tracking-tighter hover:text-blue-600 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hire Me - The "Persuasion" Section */}
      <section className="py-40 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Why Choose Me</span>
              <h2 className="text-5xl md:text-7xl font-headline font-bold text-blue-950 dark:text-white mb-10 tracking-tight leading-[0.9]">
                I DON'T JUST CODE. <br /> I <span className="italic text-blue-600 text-glow">SOLVE.</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
                Most developers build features. I build business assets. My approach combines technical excellence with strategic thinking to ensure your product doesn't just work—it wins.
              </p>
              <div className="space-y-8">
                {[
                  { title: 'Performance First', desc: 'Lightning-fast load times and smooth interactions.' },
                  { title: 'Scalable Architecture', desc: 'Systems designed to grow with your user base.' },
                  { title: 'User-Centric Design', desc: 'Interfaces that people actually enjoy using.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-950 dark:text-white mb-2">{item.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-12">
                <div className="aspect-[4/5] rounded-3xl bg-slate-100 dark:bg-slate-900 overflow-hidden">
                  <img src="https://picsum.photos/seed/code1/600/800" alt="Code" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square rounded-3xl bg-blue-600 flex flex-col justify-end p-8 text-white">
                  <p className="text-5xl font-black mb-2 tracking-tighter">99%</p>
                  <p className="text-sm font-bold uppercase tracking-widest opacity-80">Client Satisfaction</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="aspect-square rounded-3xl bg-slate-900 flex flex-col justify-end p-8 text-white">
                  <p className="text-5xl font-black mb-2 tracking-tighter">10+</p>
                  <p className="text-sm font-bold uppercase tracking-widest opacity-80">Years of Code</p>
                </div>
                <div className="aspect-[4/5] rounded-3xl bg-slate-100 dark:bg-slate-900 overflow-hidden">
                  <img src="https://picsum.photos/seed/code2/600/800" alt="Code" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
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
            Get Started <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
