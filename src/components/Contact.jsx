import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const contactLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/CristianOrtizRendon",
      color: "hover:bg-[#2b3137]"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/cristian-ortiz-rendon",
      color: "hover:bg-[#0077b5]"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:cristianortizrendon12@gmail.com",
      color: "hover:bg-red-500"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#0b1120] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-blue-500 uppercase tracking-widest font-semibold text-sm">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Contact Me</h2>
          <p className="text-gray-400 mt-6 text-lg">
            I'm currently looking for new opportunities. My inbox is always open.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-6 bg-[#1e293b] p-6 rounded-2xl border border-gray-700/50">
                <div className="p-4 bg-blue-500/10 rounded-xl text-blue-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm font-medium">Email Me</h4>
                  <p className="text-white font-bold break-all">cristianortizrendon12@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 bg-[#1e293b] p-6 rounded-2xl border border-gray-700/50">
                <div className="p-4 bg-emerald-500/10 rounded-xl text-emerald-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm font-medium">Location</h4>
                  <p className="text-white font-bold">Guadalajara, Mexico</p>
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
                    <link.icon size={24} />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#1e293b] p-8 rounded-2xl border border-gray-700/50 shadow-2xl"
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows="4" 
                    placeholder="How can I help you?"
                    className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center space-x-2 group"
                >
                  <span>Send Message</span>
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
