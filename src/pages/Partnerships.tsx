import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Users, Heart, ArrowRight, Mail, Calendar } from 'lucide-react';

const Partnerships = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[800px] flex items-center overflow-hidden bg-surface py-24">
        <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7 flex flex-col justify-center">
            <span className="text-tertiary font-headline font-bold tracking-widest uppercase text-sm mb-6 block">Partnerships at Fluxify</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-extrabold tracking-tight text-on-surface leading-[1.1] mb-8">
              Better <br /> <span className="text-primary italic">Together.</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed mb-10">
              We believe exceptional digital experiences aren't built in isolation. We partner with visionaries to amplify impact through shared craft and collective intelligence.
            </p>
            <div className="flex flex-wrap gap-4">
              <a className="bg-primary text-on-primary px-8 py-4 rounded-full font-headline font-bold text-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2" href="#contact">
                Become a Partner
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 relative">
            <motion.div 
              initial={{ rotate: 5, scale: 0.9 }}
              animate={{ rotate: 3, scale: 1 }}
              className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl bg-surface-container-high"
            >
              <img 
                className="w-full h-full object-cover" 
                src="https://picsum.photos/seed/partners/800/1000" 
                alt="Partners"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary-container rounded-full flex items-center justify-center p-8 text-center -rotate-12 shadow-xl">
              <span className="text-on-secondary-container font-headline font-bold text-lg leading-tight">100+ Shared Success Stories</span>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Partner With */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20 text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-6">Who we partner with</h2>
            <p className="text-on-surface-variant text-lg">Diversity in expertise leads to richness in outcomes. We focus on three core partnership pillars.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Tech Platforms', icon: Terminal, desc: 'Integrating cutting-edge SaaS, Cloud, and AI solutions to build robust ecosystems for our global clients.', tags: ['SAAS', 'INFRASTRUCTURE'], color: 'bg-primary-container' },
              { title: 'Creative Agencies', icon: Users, desc: 'Co-branding and white-labeling services for specialist agencies needing high-end design or development muscle.', tags: ['WHITE-LABEL', 'STRATEGY'], color: 'bg-secondary-container', offset: true },
              { title: 'Non-profits', icon: Heart, desc: 'Pro-bono and subsidized digital transformation for organizations making a tangible positive impact on humanity.', tags: ['IMPACT', 'SOCIAL GOOD'], color: 'bg-tertiary-container' }
            ].map((p, i) => (
              <div key={p.title} className={`bg-white p-10 rounded-[2rem] hover:shadow-xl transition-shadow duration-500 flex flex-col h-full ${p.offset ? 'md:mt-12' : ''}`}>
                <div className={`w-16 h-16 ${p.color} rounded-2xl flex items-center justify-center mb-8`}>
                  <p.icon className="w-8 h-8 text-on-surface" />
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4">{p.title}</h3>
                <p className="text-on-surface-variant leading-relaxed mb-8 flex-grow">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-surface-container text-on-surface-variant text-xs font-bold rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Contact Form */}
      <section className="py-32 bg-surface-container" id="contact">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="md:w-1/2 p-12 md:p-20 bg-primary text-on-primary">
              <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8">Let's craft the future.</h2>
              <p className="text-primary-container text-lg mb-12 leading-relaxed">Ready to explore how we can work together? Fill out the partner inquiry form and our partnership lead will be in touch within 24 hours.</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 p-1 bg-white/10 rounded-lg" />
                  <span>partnerships@fluxify.agency</span>
                </div>
                <div className="flex items-center gap-4">
                  <Calendar className="w-6 h-6 p-1 bg-white/10 rounded-lg" />
                  <span>Quarterly Partner Summits</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-12 md:p-20">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-on-surface-variant">Your Name</label>
                    <input className="w-full bg-surface-container-highest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/30 transition-all" placeholder="Jane Doe" type="text" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-on-surface-variant">Organization</label>
                    <input className="w-full bg-surface-container-highest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/30 transition-all" placeholder="Acme Inc." type="text" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-on-surface-variant">Partnership Type</label>
                  <select className="w-full bg-surface-container-highest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/30 transition-all">
                    <option>Tech Platform Integration</option>
                    <option>Agency Collaboration</option>
                    <option>Non-profit/Pro-bono</option>
                    <option>Referral Program</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-on-surface-variant">Message</label>
                  <textarea className="w-full bg-surface-container-highest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/30 transition-all" placeholder="How do you envision us working together?" rows={4}></textarea>
                </div>
                <button className="w-full bg-primary text-on-primary py-5 rounded-xl font-headline font-bold text-lg hover:bg-on-primary-container transition-colors shadow-lg" type="submit">
                  Send Partnership Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;
