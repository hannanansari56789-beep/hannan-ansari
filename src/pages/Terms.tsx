import React from 'react';
import { motion } from 'motion/react';

const Terms = () => {
  return (
    <div className="flex flex-col w-full">
      <section className="py-24 px-6 bg-surface-bright dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-blue-900 dark:text-white mb-12 font-headline tracking-tight leading-tight">Terms of Service</h1>
            <div className="prose prose-lg dark:prose-invert max-w-none font-sans text-slate-600 dark:text-slate-400 space-y-8">
              <p>Last updated: March 28, 2026</p>
              
              <h2 className="text-2xl font-bold text-blue-900 dark:text-white font-headline">1. Acceptance of Terms</h2>
              <p>By accessing and using the website of Fluxify Digital Agency, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>

              <h2 className="text-2xl font-bold text-blue-900 dark:text-white font-headline">2. Use License</h2>
              <p>Permission is granted to temporarily download one copy of the materials (information or software) on Fluxify Digital Agency's website for personal, non-commercial transitory viewing only.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or copy the materials.</li>
                <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial).</li>
                <li>Attempt to decompile or reverse engineer any software contained on Fluxify Digital Agency's website.</li>
                <li>Remove any copyright or other proprietary notations from the materials.</li>
              </ul>

              <h2 className="text-2xl font-bold text-blue-900 dark:text-white font-headline">3. Disclaimer</h2>
              <p>The materials on Fluxify Digital Agency's website are provided on an 'as is' basis. Fluxify Digital Agency makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

              <h2 className="text-2xl font-bold text-blue-900 dark:text-white font-headline">4. Limitations</h2>
              <p>In no event shall Fluxify Digital Agency or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Fluxify Digital Agency's website, even if Fluxify Digital Agency or a Fluxify Digital Agency authorized representative has been notified orally or in writing of the possibility of such damage.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
