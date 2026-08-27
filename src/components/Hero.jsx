import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Download, Sparkles, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden relative bg-[#0f172a]">
      {/* Background Decorative Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/15 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse delay-1000 pointer-events-none"></div>

      <div className="container mx-auto text-center z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Welcome Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-6 shadow-inner"
          >
            <Sparkles size={14} className="text-blue-400" />
            <span>{t.hero.badge}</span>
          </motion.div>
          
          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4 tracking-tight leading-none"
          >
            {t.hero.greeting} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-300">Cristian Ortiz</span>
          </motion.h1>

          {/* Subtitle / Role */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium mb-4"
          >
            {t.hero.role}
          </motion.h2>

          {/* Location Badge */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center text-gray-400 mb-8 bg-slate-800/50 px-4 py-1.5 rounded-full border border-gray-700/50 text-sm"
          >
            <MapPin size={16} className="mr-2 text-emerald-400" />
            <span>{t.hero.location}</span>
          </motion.div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-2xl text-gray-300 text-base sm:text-lg mb-10 leading-relaxed font-normal"
          >
            {t.hero.description}
          </motion.p>

          {/* CTA Action Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-full font-semibold transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center group text-sm"
            >
              <span>{t.hero.viewWork}</span>
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>

            <a 
              href="/CV_Cristian_Ortiz.pdf"
              download="CV_Cristian_Ortiz.pdf"
              className="w-full sm:w-auto px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-semibold border border-slate-700 hover:border-slate-600 transition-all flex items-center justify-center gap-2 text-sm shadow-md"
            >
              <Download size={18} className="text-emerald-400" />
              <span>{t.hero.downloadCv}</span>
            </a>

            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-3.5 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white rounded-full font-semibold transition-all flex items-center justify-center text-sm"
            >
              <span>{t.hero.contactMe}</span>
            </a>
          </motion.div>

          {/* Quick Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-6 mt-12 text-gray-400"
          >
            <a 
              href="https://github.com/cristian0317" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white hover:scale-110 transition-all"
              title="GitHub"
            >
              <Github size={22} />
            </a>
            <a 
              href="https://www.linkedin.com/in/cristian-ortiz-rendon-817325348/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-400 hover:scale-110 transition-all"
              title="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a 
              href="mailto:cristianortizrendon12@gmail.com" 
              className="hover:text-emerald-400 hover:scale-110 transition-all"
              title="Email"
            >
              <Mail size={22} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <a href="#about" aria-label="Scroll to About">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2 hover:border-blue-500 transition-colors">
            <div className="w-1 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
