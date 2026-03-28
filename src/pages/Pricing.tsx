import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Zap, Star, Shield } from 'lucide-react';
import { cn } from '../lib/utils';

const Pricing = () => {
  const plans = [
    {
      name: "Frontend Focus",
      price: "$1,500",
      description: "Perfect for static sites and landing pages that need a premium look.",
      features: [
        "Custom UI/UX Design",
        "React/Next.js Implementation",
        "Responsive Layout",
        "Basic SEO Optimization",
        "Performance Tuning",
        "Email Support"
      ],
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      color: "bg-amber-50 dark:bg-amber-900/20 text-amber-900 dark:text-amber-300",
      buttonColor: "bg-amber-600 hover:bg-amber-700"
    },
    {
      name: "Full Stack App",
      price: "$3,500",
      description: "A complete web application with backend logic and database integration.",
      features: [
        "Database Architecture",
        "User Authentication",
        "RESTful API Development",
        "Admin Dashboard",
        "Advanced Analytics",
        "Priority Support",
        "Deployment Setup"
      ],
      icon: <Star className="w-8 h-8 text-blue-500" />,
      color: "bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-300",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      popular: true
    },
    {
      name: "Enterprise Solution",
      price: "Custom",
      description: "Tailored for complex systems that require high scalability and security.",
      features: [
        "Microservices Architecture",
        "Cloud Infrastructure (AWS/GCP)",
        "E-Commerce Integration",
        "Custom API Development",
        "Unlimited Revisions",
        "Dedicated Support",
        "Ongoing Maintenance"
      ],
      icon: <Shield className="w-8 h-8 text-rose-500" />,
      color: "bg-rose-50 dark:bg-rose-900/20 text-rose-900 dark:text-rose-300",
      buttonColor: "bg-rose-600 hover:bg-rose-700"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-surface-bright dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-700 uppercase bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-300">
              Transparent Pricing
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight text-blue-900 dark:text-white mb-8 font-headline leading-[1.1]">
              Invest in Your <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">Technical Future</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-sans max-w-2xl mx-auto leading-relaxed">
              I don't sell hours. I sell high-performance solutions. Choose the tier that best fits your project goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24 px-6 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  "relative p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl flex flex-col h-full",
                  plan.popular && "ring-4 ring-blue-500/20 border-blue-500/50"
                )}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-widest shadow-lg">
                    Most Popular
                  </div>
                )}
                <div className="flex items-center gap-4 mb-8">
                  <div className={cn("p-4 rounded-2xl", plan.color)}>
                    {plan.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 dark:text-white font-headline">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-blue-900 dark:text-white font-headline">{plan.price}</span>
                      {plan.price !== "Custom" && <span className="text-slate-500 text-sm font-sans">/ project</span>}
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 font-sans mb-8 leading-relaxed">
                  {plan.description}
                </p>
                <div className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <div className="p-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-300 font-sans text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className={cn(
                  "w-full py-4 rounded-full text-white font-bold text-lg hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2",
                  plan.buttonColor
                )}>
                  Get Started <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-surface-bright dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-16 font-headline text-center tracking-tight">
            Common Questions
          </h2>
          <div className="space-y-8">
            {[
              {
                q: "How long does a typical project take?",
                a: "It varies based on complexity, but most Artisan projects take 4-6 weeks, while Curator projects take 8-12 weeks."
              },
              {
                q: "Do you offer ongoing maintenance?",
                a: "Yes, we offer monthly maintenance packages to keep your digital masterpiece running smoothly and securely."
              },
              {
                q: "Can I upgrade my plan later?",
                a: "Absolutely. We build with scalability in mind, so you can start small and grow as your business needs evolve."
              },
              {
                q: "What is your revision policy?",
                a: "We believe in collaboration. Each plan includes a set number of revision rounds to ensure the final product exceeds your expectations."
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow-sm"
              >
                <h4 className="text-xl font-bold text-blue-900 dark:text-white mb-4 font-headline">{faq.q}</h4>
                <p className="text-slate-600 dark:text-slate-400 font-sans leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
