import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Share2, Infinity, Linkedin } from 'lucide-react';

const Footer = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Hannan Ansari - Web Developer',
          text: 'Check out Hannan Ansari for your next web development project!',
          url: window.location.origin,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.origin);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 w-full rounded-t-[2rem] mt-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-6 py-16">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-blue-900 dark:text-white mb-4 block font-headline">
            <Infinity className="w-6 h-6 text-blue-600" />
            FLUXIFY
          </Link>
          <p className="text-slate-500 dark:text-slate-400 font-body text-sm leading-relaxed mb-6">
            Building the digital future with a human touch. Every pixel tells a story.
          </p>
        </div>
        <div>
          <h5 className="font-headline font-bold text-blue-900 dark:text-white mb-4">Agency</h5>
          <ul className="space-y-3">
            <li><Link className="text-slate-500 dark:text-slate-400 hover:text-blue-700 hover:translate-x-1 transition-all duration-200 block text-sm" to="/work">Work</Link></li>
            <li><Link className="text-slate-500 dark:text-slate-400 hover:text-blue-700 hover:translate-x-1 transition-all duration-200 block text-sm" to="/services">Services</Link></li>
            <li><Link className="text-slate-500 dark:text-slate-400 hover:text-blue-700 hover:translate-x-1 transition-all duration-200 block text-sm" to="/about">About</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-headline font-bold text-blue-900 dark:text-white mb-4">Legal</h5>
          <ul className="space-y-3">
            <li><Link className="text-slate-500 dark:text-slate-400 hover:text-blue-700 hover:translate-x-1 transition-all duration-200 block text-sm" to="/privacy">Privacy Policy</Link></li>
            <li><Link className="text-slate-500 dark:text-slate-400 hover:text-blue-700 hover:translate-x-1 transition-all duration-200 block text-sm" to="/terms">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-headline font-bold text-blue-900 dark:text-white mb-4">Connect</h5>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">Lajpat Nagar, Moradabad</p>
          <a href="mailto:hannanansari56789@gmail.com" className="text-slate-500 dark:text-slate-400 text-sm mb-4 block hover:text-blue-600 transition-colors">hannanansari56789@gmail.com</a>
          <div className="flex gap-4">
            <a href="mailto:hannanansari56789@gmail.com" className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center hover:bg-blue-100 transition-colors cursor-pointer">
              <Mail className="w-4 h-4 text-slate-600" />
            </a>
            <button onClick={handleShare} className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center hover:bg-blue-100 transition-colors cursor-pointer">
              <Share2 className="w-4 h-4 text-slate-600" />
            </button>
            <a href="https://www.linkedin.com/in/hannan-ansari-989610395" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center hover:bg-blue-100 transition-colors cursor-pointer">
              <Linkedin className="w-4 h-4 text-slate-600" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-8 border-t border-slate-200 dark:border-slate-800 text-center">
        <p className="text-slate-400 text-xs">© 2026 Hannan Ansari. Engineering the Future.</p>
      </div>
    </footer>
  );
};

export default Footer;
