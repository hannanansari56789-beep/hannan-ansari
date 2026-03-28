import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Share2, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Work = () => {
  const projects = [
    {
      title: 'E-Commerce Engine',
      category: 'Full Stack',
      description: 'A high-performance online store built with Next.js and Stripe.',
      image: 'https://picsum.photos/seed/ecommerce/800/1200',
      tall: true
    },
    {
      title: 'Analytics Dashboard',
      category: 'Frontend',
      description: 'Real-time data visualization for enterprise metrics.',
      image: 'https://picsum.photos/seed/dashboard/800/600',
      tall: false
    },
    {
      title: 'Social Connect',
      category: 'Backend',
      description: 'Scalable API infrastructure for a social networking app.',
      image: 'https://picsum.photos/seed/social/800/600',
      tall: false
    },
    {
      title: 'Portfolio Framework',
      category: 'Open Source',
      description: 'A customizable theme for creative professionals.',
      image: 'https://picsum.photos/seed/portfolio/800/1200',
      tall: true
    },
    {
      title: 'Task Master',
      category: 'Web App',
      description: 'Productivity tool with real-time collaboration features.',
      image: 'https://picsum.photos/seed/task/800/600',
      tall: false
    }
  ];

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-blue-100 text-blue-700 rounded-full">
            My Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-extrabold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]">
            Engineering Digital <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Solutions.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
            I build robust, scalable, and user-centric web applications. Explore my latest technical projects and experiments.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {['All Projects', 'Frontend', 'Backend', 'Full Stack', 'Web App'].map((cat, i) => (
            <button 
              key={cat}
              className={`px-8 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                i === 0 ? 'bg-blue-600 text-white scale-105 shadow-sm' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Project Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[200px]">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-2xl bg-surface-container-lowest transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                project.tall ? 'row-span-3' : 'row-span-2'
              }`}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                <span className="text-xs font-bold uppercase tracking-widest mb-2 text-primary-fixed">{project.category}</span>
                <h3 className="text-2xl font-headline font-bold mb-1">{project.title}</h3>
                <p className="text-sm text-primary-fixed/80">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-32 max-w-5xl mx-auto px-6 mb-24">
        <div className="bg-surface-container-low rounded-2xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-on-surface mb-6 leading-tight">Have a project in mind?</h2>
            <p className="text-on-surface-variant mb-10 text-lg">Let's create something that matters. Reach out and tell us your story.</p>
            <Link className="inline-flex items-center gap-2 bg-primary text-on-primary px-10 py-4 rounded-full font-bold hover:scale-105 hover:shadow-xl transition-all duration-300" to="/contact">
              Start a Conversation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary-container/40 rounded-full blur-2xl"></div>
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary-container/30 rounded-full blur-2xl"></div>
        </div>
      </section>
    </div>
  );
};

export default Work;
