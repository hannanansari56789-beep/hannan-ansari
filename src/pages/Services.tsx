import React from 'react';
import { motion } from 'motion/react';
import { Globe, Layout, Palette, Code, Play, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Frontend Development',
      description: 'Building responsive, high-performance user interfaces using React, Next.js, and modern CSS frameworks. Pixel-perfect implementation of your designs.',
      icon: Layout,
      color: 'bg-blue-100',
      textColor: 'text-blue-600'
    },
    {
      title: 'Backend Engineering',
      description: 'Designing robust server-side architectures, RESTful APIs, and database schemas. Ensuring security, scalability, and data integrity.',
      icon: Code,
      color: 'bg-slate-100',
      textColor: 'text-slate-600'
    },
    {
      title: 'Full Stack Solutions',
      description: 'End-to-end web application development. From initial database design to the final polished user interface.',
      icon: Globe,
      color: 'bg-amber-100',
      textColor: 'text-amber-600'
    },
    {
      title: 'API Integration',
      description: 'Connecting your application with third-party services like Stripe, Twilio, or AWS. Seamless data flow across your digital ecosystem.',
      icon: Play,
      color: 'bg-rose-100',
      textColor: 'text-rose-600'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Deploying and managing applications on AWS, Google Cloud, or Vercel. Setting up CI/CD pipelines for automated deployments.',
      icon: Lightbulb,
      color: 'bg-emerald-100',
      textColor: 'text-emerald-600'
    },
    {
      title: 'Performance Audit',
      description: 'Analyzing and optimizing your existing web applications for speed, SEO, and accessibility. Improving Core Web Vitals.',
      icon: Palette,
      color: 'bg-indigo-100',
      textColor: 'text-indigo-600'
    }
  ];

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <header className="relative pt-24 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-12 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="col-span-12 lg:col-span-8"
            >
              <span className="inline-block py-1 px-4 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6 uppercase tracking-widest">My Expertise</span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-extrabold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]">
                Technical Solutions for <span className="text-blue-600">Modern Web.</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                I provide comprehensive web development services focused on performance, scalability, and user experience. No shortcuts, just high-quality engineering.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-primary-container/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-secondary-container/30 rounded-full blur-[100px]"></div>
      </header>

      {/* Services Grid */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 flex flex-col group"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <service.icon className={`${service.textColor} w-8 h-8`} />
              </div>
              <h3 className="text-2xl md:text-3xl font-headline font-bold text-blue-950 dark:text-white mb-4">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-grow text-lg">
                {service.description}
              </p>
              <Link to="/contact" className="flex items-center text-blue-600 font-bold group/link cursor-pointer text-lg">
                <span className="mr-2">Inquire Now</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Asymmetric Featured Section */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                <img 
                  src="https://picsum.photos/seed/process/800/1000" 
                  alt="Design process" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-2xl max-w-xs hidden md:block border border-slate-100 dark:border-slate-800">
                <p className="font-headline font-black text-blue-600 text-2xl mb-2">Human-Centered</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Every pixel is placed with intention and empathy for the end user.</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Our Philosophy</span>
              <h2 className="text-4xl md:text-6xl font-headline font-bold text-blue-950 dark:text-white mb-8 leading-tight">My Process is Built on <span className="italic">Transparency.</span></h2>
              <p className="text-slate-600 dark:text-slate-400 mb-10 text-xl leading-relaxed">
                I don't believe in "black box" development. I work as an extension of your team, providing clear communication and rapid iteration throughout the development lifecycle.
              </p>
              <ul className="space-y-6 mb-12">
                {[
                  'Direct communication with the developer',
                  'Daily progress updates and feedback loops',
                  'Agile and adaptive project management'
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <CheckCircle className="text-blue-600 w-4 h-4" />
                    </div>
                    <span className="font-bold text-blue-950 dark:text-white text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/contact" className="px-10 py-5 rounded-2xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all text-center shadow-xl shadow-blue-500/20">Start a Project</Link>
                <Link to="/work" className="px-10 py-5 rounded-2xl border-2 border-slate-200 dark:border-slate-800 text-blue-950 dark:text-white font-bold hover:bg-slate-50 dark:hover:bg-slate-900 transition-all text-center">View Portfolio</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
