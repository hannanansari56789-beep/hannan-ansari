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
      <section className="py-24 px-6 bg-surface-bright dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
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
      <section className="py-24 px-6 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-6 font-headline tracking-tight">Contact Information</h2>
              <p className="text-slate-600 dark:text-slate-400 font-sans mb-10 leading-relaxed max-w-md">
                Reach out through any of these channels. We typically respond within 24 hours.
              </p>
              <div className="space-y-6">
                {[
                  { icon: <Mail className="w-6 h-6" />, label: "Email Us", value: "hannanansari56789@gmail.com", href: "mailto:hannanansari56789@gmail.com" },
                  { icon: <Phone className="w-6 h-6" />, label: "Call Us", value: "+91 9458110071", href: "tel:+919458110071" },
                  { icon: <MapPin className="w-6 h-6" />, label: "Visit Us", value: "Lajpat Nagar, Moradabad", href: "https://maps.google.com/?q=Lajpat+Nagar,+Moradabad" }
                ].map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.href}
                    className="flex items-center gap-6 p-6 rounded-3xl bg-surface-bright dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-500/50 transition-all group"
                  >
                    <div className="p-3 rounded-2xl bg-white dark:bg-slate-950 text-blue-600 dark:text-blue-400 shadow-sm group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-lg font-bold text-blue-900 dark:text-white font-headline">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-6 font-headline tracking-tight">Follow Our Journey</h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/hannan-ansari-989610395" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-surface-bright dark:bg-slate-900 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <button 
                  onClick={handleShare}
                  className="p-4 rounded-full bg-surface-bright dark:bg-slate-900 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                >
                  <Share2 className="w-6 h-6" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-12 rounded-[3rem] bg-surface-bright dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center">
                  <Send className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-headline font-bold text-blue-900 dark:text-white">Message Sent!</h3>
                <p className="text-slate-600 dark:text-slate-400 max-w-xs">✅ Your message has been sent successfully!</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-blue-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 rounded-2xl text-sm font-medium">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-blue-900 dark:text-white uppercase tracking-widest ml-4">Name</label>
                    <input 
                      required
                      name="name"
                      type="text" 
                      placeholder="Enter your name" 
                      className="w-full px-6 py-4 rounded-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-blue-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-blue-900 dark:text-white uppercase tracking-widest ml-4">Email</label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full px-6 py-4 rounded-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-blue-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-blue-900 dark:text-white uppercase tracking-widest ml-4">Phone Number</label>
                  <input 
                    required
                    name="phone"
                    type="tel" 
                    placeholder="Enter your phone number" 
                    className="w-full px-6 py-4 rounded-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-blue-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-blue-900 dark:text-white uppercase tracking-widest ml-4">What kind of website do you want?</label>
                  <textarea 
                    required
                    name="websiteType"
                    rows={3}
                    placeholder="E.g. E-commerce, Portfolio, SaaS..." 
                    className="w-full px-8 py-6 rounded-[2rem] bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-blue-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-blue-900 dark:text-white uppercase tracking-widest ml-4">Message</label>
                  <textarea 
                    required
                    name="message"
                    rows={4}
                    placeholder="Write your message..." 
                    className="w-full px-8 py-6 rounded-[2rem] bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-blue-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  />
                </div>
                <button 
                  disabled={loading}
                  type="submit" 
                  className="w-full py-5 bg-blue-900 dark:bg-blue-700 text-white rounded-full font-bold text-lg hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 transition-all shadow-xl flex items-center justify-center gap-3 group"
                >
                  {loading ? "Sending..." : "Send Message"} 
                  {!loading && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
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
