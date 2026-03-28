import React from 'react';
import { motion } from 'motion/react';
import { Search, Layers, Code, Rocket, Smartphone, Database, Terminal, Network, Cloud, BarChart, MessageSquare, Users, Edit } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      title: 'Discovery',
      description: 'We immerse ourselves in your world to uncover the core challenges and latent opportunities of your brand.',
      icon: Search,
      color: 'text-primary',
      items: ['Stakeholder Interviews', 'Market Analysis']
    },
    {
      title: 'Design',
      description: 'Translating insights into visual narratives and intuitive interfaces that resonate with human behavior.',
      icon: Layers,
      color: 'text-secondary',
      items: ['Rapid Prototyping', 'Visual Identity'],
      offset: true
    },
    {
      title: 'Development',
      description: 'Our engineers breathe life into designs with clean, performant code that ensures a seamless digital experience.',
      icon: Code,
      color: 'text-tertiary',
      items: ['Custom Architecture', 'Performance Tuning']
    },
    {
      title: 'Launch',
      description: 'The final deployment is just the beginning. We monitor, optimize, and scale your product for long-term growth.',
      icon: Rocket,
      color: 'text-on-tertiary-container',
      items: ['Deployment Strategy', 'Post-Launch Support'],
      offset: true
    }
  ];

  const tools = [
    { name: 'Figma', icon: Smartphone },
    { name: 'React', icon: Database },
    { name: 'Tailwind', icon: Terminal },
    { name: 'Notion', icon: Network },
    { name: 'Vercel', icon: Cloud },
    { name: 'PostHog', icon: BarChart }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-container text-on-tertiary-container text-xs font-bold tracking-widest uppercase mb-6">Our Methodology</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-extrabold tracking-tight text-on-surface leading-[1.1] mb-8">
              How We <span className="text-primary italic">Craft</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed font-light">
              Design is not a linear path; it is a meticulous assembly of empathy, strategy, and technical precision. We call it the Human-Centered Journey.
            </p>
          </div>
        </div>
        <div className="absolute -right-24 top-24 w-96 h-96 bg-primary-container/20 rounded-full blur-[120px] -z-10"></div>
      </section>

      {/* The Human-Centered Journey Timeline */}
      <section className="bg-surface-container-low py-32 rounded-[3rem] mx-4 lg:mx-8">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative">
            <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-outline-variant/30 -z-0"></div>
            {steps.map((step, index) => (
              <motion.div 
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`group relative z-10 ${step.offset ? 'lg:mt-24' : ''}`}
              >
                <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-xl group-hover:scale-105 transition-transform duration-500">
                  <step.icon className={`${step.color} w-10 h-10`} />
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4">{step.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{step.description}</p>
                <ul className="mt-6 space-y-2 text-sm font-medium">
                  {step.items.map((item) => (
                    <li key={item} className={`flex items-center gap-2 ${step.color}`}>
                      <span className={`w-1 h-1 rounded-full bg-current`}></span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Tools & Communication Section */}
      <section className="py-32 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7 bg-white rounded-[2rem] p-12 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6 tracking-tight">Our Tools</h2>
            <p className="text-on-surface-variant mb-12 max-w-md">We leverage a curated stack of world-class technologies to ensure precision at every touchpoint.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <div key={tool.name} className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low hover:bg-primary-container/20 transition-colors">
                  <tool.icon className="text-primary w-5 h-5" />
                  <span className="font-bold text-sm tracking-tight">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-5 bg-primary text-on-primary rounded-[2rem] p-12 relative overflow-hidden flex flex-col justify-end">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <img src="https://picsum.photos/seed/desk-minimal/600/800" alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6 tracking-tight">Client Communication</h2>
              <p className="text-primary-fixed mb-8 leading-relaxed">
                Transparency is our baseline. We provide dedicated Slack channels and weekly syncs to keep the pulse of your project alive.
              </p>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <MessageSquare className="text-white w-5 h-5" />
                  <span className="text-sm font-bold uppercase tracking-widest">Always Sync'd</span>
                </div>
                <div className="text-xs text-primary-fixed/80 italic font-light">"The level of clarity provided by Curator made the complex seem effortless."</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetric Detail Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center gap-24">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary-container/30 rounded-[2.5rem] rotate-3 -z-10"></div>
                <img src="https://picsum.photos/seed/collab/800/1000" alt="" className="w-full h-[600px] object-cover rounded-[2.5rem] shadow-2xl" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-8 leading-tight tracking-tight">Human touch in a <span className="italic text-secondary">digital first</span> world.</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                    <Users className="text-on-secondary-container w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-headline font-bold mb-2">Empathetic Strategy</h4>
                    <p className="text-on-surface-variant leading-relaxed">We don't just build features; we solve human frustrations through intentional interface design.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                    <Edit className="text-on-secondary-container w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-headline font-bold mb-2">Crafted Content</h4>
                    <p className="text-on-surface-variant leading-relaxed">Every word and every image is selected to reinforce your brand narrative and drive conversion.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
