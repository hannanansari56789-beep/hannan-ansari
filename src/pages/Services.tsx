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
        <div className="max-w-7xl mx-auto px-6 relative z-10">
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
      <main className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-xl p-8 rounded-[24px] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col group"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className={`${service.textColor} w-6 h-6`} />
              </div>
              <h3 className="text-2xl font-headline font-bold text-on-surface mb-4">{service.title}</h3>
              <p className="text-on-surface-variant leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              <Link to="/contact" className="flex items-center text-primary font-semibold group/link cursor-pointer">
                <span className="mr-2">Inquire Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Asymmetric Featured Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-12 items-center">
            <div className="col-span-12 lg:col-span-6 relative">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/process/800/1000" 
                  alt="Design process" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
                <p className="font-headline font-bold text-primary text-xl mb-1">Human-Centered</p>
                <p className="text-on-surface-variant text-sm">Every pixel is placed with intention and empathy for the end user.</p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-8">
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-on-surface mb-6 leading-tight">My Process is Built on Transparency.</h2>
              <p className="text-on-surface-variant mb-8 text-lg leading-relaxed">
                I don't believe in "black box" development. I work as an extension of your team, providing clear communication and rapid iteration throughout the development lifecycle.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Direct communication with the developer',
                  'Daily progress updates and feedback loops',
                  'Agile and adaptive project management'
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle className="text-primary w-5 h-5 mr-3 mt-1" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="px-8 py-4 rounded-full bg-primary text-white font-bold hover:scale-105 transition-transform text-center">Start a Project</Link>
                <Link to="/process" className="px-8 py-4 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all text-center">Explore Our Process</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
