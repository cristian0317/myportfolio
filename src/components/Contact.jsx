import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const contactLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/CristianOrtizRendon",
      color: "hover:bg-[#2b3137] hover:border-gray-500"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/cristian-ortiz-rendon",
      color: "hover:bg-[#0077b5] hover:border-blue-400"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:cristianortizrendon12@gmail.com",
      color: "hover:bg-red-500/80 hover:border-red-400"
    }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status.error) setStatus({ ...status, error: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setStatus({ loading: false, success: false, error: t.contact.nameRequired });
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus({ loading: false, success: false, error: t.contact.emailRequired });
      return;
    }

    setStatus({ loading: true, success: false, error: '' });

    // Simulate contact form dispatch
    setTimeout(() => {
      setStatus({ loading: false, success: true, error: '' });
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setStatus({ loading: false, success: false, error: '' });
      }, 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0b1120] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-blue-500 uppercase tracking-widest font-semibold text-xs">{t.contact.subtitle}</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3">{t.contact.title}</h2>
          <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-5 bg-[#1e293b] p-6 rounded-3xl border border-gray-700/50 shadow-xl hover:border-blue-500/30 transition-all">
                <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400 border border-blue-500/20">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-xs uppercase font-semibold tracking-wider">{t.contact.emailLabel}</h4>
                  <a href="mailto:cristianortizrendon12@gmail.com" className="text-white font-bold break-all hover:text-blue-400 transition-colors text-sm sm:text-base">
                    cristianortizrendon12@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-5 bg-[#1e293b] p-6 rounded-3xl border border-gray-700/50 shadow-xl hover:border-emerald-500/30 transition-all">
                <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-400 border border-emerald-500/20">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-xs uppercase font-semibold tracking-wider">{t.contact.locationLabel}</h4>
                  <p className="text-white font-bold text-sm sm:text-base">Guadalajara, México</p>
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-[#1e293b] text-gray-400 hover:text-white rounded-2xl border border-gray-700/50 transition-all ${link.color} shadow-lg`}
                    title={link.name}
                  >
                    <link.icon size={22} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#1e293b] p-8 rounded-3xl border border-gray-700/50 shadow-2xl relative"
            >
              {status.success && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-sm flex items-center gap-3"
                >
                  <CheckCircle2 size={20} className="shrink-0 text-emerald-400" />
                  <span>{t.contact.successMsg}</span>
                </motion.div>
              )}

              {status.error && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-2xl bg-red-500/15 border border-red-500/40 text-red-300 text-sm flex items-center gap-3"
                >
                  <AlertCircle size={20} className="shrink-0 text-red-400" />
                  <span>{status.error}</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-gray-300 text-xs uppercase font-semibold tracking-wider mb-2">
                    {t.contact.namePlaceholder}
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Cristian Ortiz"
                    className="w-full bg-[#0f172a] border border-gray-700/80 rounded-2xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-xs uppercase font-semibold tracking-wider mb-2">
                    {t.contact.emailPlaceholder}
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="correo@ejemplo.com"
                    className="w-full bg-[#0f172a] border border-gray-700/80 rounded-2xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-xs uppercase font-semibold tracking-wider mb-2">
                    {t.contact.messagePlaceholder}
                  </label>
                  <textarea 
                    rows="4" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="..."
                    className="w-full bg-[#0f172a] border border-gray-700/80 rounded-2xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status.loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3.5 rounded-2xl transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center space-x-2 group cursor-pointer disabled:opacity-50"
                >
                  <span>{status.loading ? t.contact.sendingBtn : t.contact.sendBtn}</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
