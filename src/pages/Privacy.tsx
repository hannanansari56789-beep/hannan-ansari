import React from 'react';
import { motion } from 'motion/react';

const Privacy = () => {
  return (
    <div className="flex flex-col w-full">
      <section className="py-24 px-6 bg-surface-bright dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-blue-900 dark:text-white mb-12 font-headline tracking-tight leading-tight">Privacy Policy</h1>
            <div className="prose prose-lg dark:prose-invert max-w-none font-sans text-slate-600 dark:text-slate-400 space-y-8">
              <p>Last updated: March 28, 2026</p>
              
              <h2 className="text-2xl font-bold text-blue-900 dark:text-white font-headline">1. Introduction</h2>
              <p>Welcome to Fluxify Digital Agency. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>

              <h2 className="text-2xl font-bold text-blue-900 dark:text-white font-headline">2. The Data We Collect</h2>
              <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Identity Data includes first name, last name, username or similar identifier.</li>
                <li>Contact Data includes email address and telephone numbers.</li>
                <li>Technical Data includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              </ul>

              <h2 className="text-2xl font-bold text-blue-900 dark:text-white font-headline">3. How We Use Your Data</h2>
              <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>

              <h2 className="text-2xl font-bold text-blue-900 dark:text-white font-headline">4. Data Security</h2>
              <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
