import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Globe, Share2, Linkedin } from 'lucide-react';

const Contact = () => {
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
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.origin);
      alert('Link copied to clipboard!');
    }
  };

  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // StaticForms payload
    const payload = {
      accessKey: "sf_c5g2hmek242k6bbc8akh84c8",
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: `New Website Inquiry: ${data.websiteType}`,
      message: `Website Type: ${data.websiteType}\n\nMessage: ${data.message}`,
      replyTo: data.email,
    };

    try {
      const response = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        e.currentTarget.reset();
      } else {
        setError("❌ Failed to send message. Try again!");
      }
    } catch (err) {
      setError("❌ Something went wrong. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="py-24 px-4 md:px-6 bg-surface-bright dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-700 uppercase bg-primary-fixed rounded-full dark:bg-blue-900/30 dark:text-blue-300">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-blue-900 dark:text-white mb-8 font-headline leading-[1.1]">
              Let's Start a <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 text-glow">Conversation</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-sans max-w-2xl mx-auto leading-relaxed">
              Whether you have a specific project in mind or just want to say hello, we're all ears.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 px-4 md:px-6 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-12"
          >
            <div>
              <h2 className="text-4xl font-bold text-blue-950 dark:text-white mb-6 font-headline tracking-tight">Contact Information</h2>
              <p className="text-slate-600 dark:text-slate-400 font-sans mb-10 text-lg leading-relaxed max-w-md">
                Reach out through any of these channels. I typically respond within 24 hours.
              </p>
              <div className="space-y-6">
                {[
                  { icon: <Mail className="w-6 h-6" />, label: "Email Me", value: "hannanansari56789@gmail.com", href: "mailto:hannanansari56789@gmail.com" },
                  { icon: <Phone className="w-6 h-6" />, label: "Call Me", value: "+91 9458110071", href: "tel:+919458110071" },
                  { icon: <MapPin className="w-6 h-6" />, label: "Visit Me", value: "Lajpat Nagar, Moradabad", href: "https://maps.google.com/?q=Lajpat+Nagar,+Moradabad" }
                ].map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.href}
                    className="flex items-center gap-4 md:gap-6 p-6 md:p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 hover:shadow-xl transition-all group"
                  >
                    <div className="p-4 rounded-2xl bg-white dark:bg-slate-950 text-blue-600 dark:text-blue-400 shadow-sm group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-lg md:text-xl font-bold text-blue-950 dark:text-white font-headline break-all">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-6 font-headline tracking-tight">Follow My Journey</h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/hannan-ansari-989610395" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-5 rounded-full bg-slate-50 dark:bg-slate-900 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                >
                  <Linkedin className="w-7 h-7" />
                </a>
                <button 
                  onClick={handleShare}
                  className="p-5 rounded-full bg-slate-50 dark:bg-slate-900 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                >
                  <Share2 className="w-7 h-7" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-8 md:p-12 rounded-[3rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-8 py-20">
                <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center">
                  <Send className="w-12 h-12" />
                </div>
                <h3 className="text-4xl font-headline font-bold text-blue-950 dark:text-white">Message Sent!</h3>
                <p className="text-slate-600 dark:text-slate-400 max-w-sm text-lg">✅ Your message has been sent successfully! I'll get back to you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {error && (
                  <div className="p-5 bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 rounded-2xl text-sm font-bold">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-blue-950 dark:text-white uppercase tracking-widest ml-2">Name</label>
                    <input 
                      required
                      name="name"
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-8 py-5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-blue-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-blue-950 dark:text-white uppercase tracking-widest ml-2">Email</label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full px-8 py-5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-blue-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-blue-950 dark:text-white uppercase tracking-widest ml-2">Phone Number</label>
                  <input 
                    required
                    name="phone"
                    type="tel" 
                    placeholder="+91 00000 00000" 
                    className="w-full px-8 py-5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-blue-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-blue-950 dark:text-white uppercase tracking-widest ml-2">Project Type</label>
                  <select 
                    required
                    name="websiteType"
                    className="w-full px-8 py-5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-blue-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  >
                    <option value="">Select project type</option>
                    <option value="E-commerce">E-commerce Website</option>
                    <option value="SaaS">SaaS Application</option>
                    <option value="Portfolio">Personal Portfolio</option>
                    <option value="Corporate">Corporate Website</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-blue-950 dark:text-white uppercase tracking-widest ml-2">Message</label>
                  <textarea 
                    required
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..." 
                    className="w-full px-8 py-6 rounded-[2rem] bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-blue-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  />
                </div>
                <button 
                  disabled={loading}
                  type="submit" 
                  className="w-full py-6 bg-blue-600 text-white rounded-full font-black text-xl hover:bg-blue-700 disabled:opacity-50 transition-all shadow-2xl shadow-blue-500/20 flex items-center justify-center gap-4 group"
                >
                  {loading ? "Sending..." : "Send Message"} 
                  {!loading && <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[450px] w-full bg-slate-100 dark:bg-slate-900 relative overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.2123456789!2d78.7654321!3d28.8345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afbb123456789%3A0x1234567890abcdef!2sLajpat%20Nagar%2C%20Moradabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy"
          title="Location Map"
          className="grayscale dark:invert dark:opacity-80"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
