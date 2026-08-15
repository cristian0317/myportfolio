import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f172a]/90 backdrop-blur-md py-4 shadow-xl border-b border-gray-800/50' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black text-white tracking-wider group flex items-center gap-1"
        >
          CRISTIAN<span className="text-blue-500 group-hover:text-emerald-400 transition-colors">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="text-gray-300 hover:text-white transition-colors relative group font-medium text-sm tracking-wide"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}

          {/* CV Button */}
          <a
            href="/CV_Cristian_Ortiz.pdf"
            download="CV_Cristian_Ortiz.pdf"
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-400 border border-blue-500/30 hover:border-blue-500 hover:bg-blue-500/10 rounded-full transition-all flex items-center gap-1.5"
          >
            <FileText size={14} />
            <span>{t.nav.cv}</span>
          </a>

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-xs font-semibold text-gray-300 hover:text-white border border-gray-700/60 transition-all shadow-inner cursor-pointer"
            title="Toggle Language / Cambiar Idioma"
          >
            <Globe size={14} className="text-blue-400" />
            <span className="uppercase">{lang}</span>
          </button>
        </div>

        {/* Mobile Nav Actions */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-800 text-xs font-semibold text-gray-300 border border-gray-700"
          >
            <Globe size={13} className="text-blue-400" />
            <span className="uppercase">{lang}</span>
          </button>

          <div className="text-white cursor-pointer p-1" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#1e293b]/95 backdrop-blur-lg py-6 px-6 absolute w-full top-full left-0 border-t border-gray-700/60 shadow-2xl space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2.5 text-gray-300 hover:text-white font-medium border-b border-gray-700/30 text-base"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <a
            href="/CV_Cristian_Ortiz.pdf"
            download="CV_Cristian_Ortiz.pdf"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center gap-2 w-full justify-center py-3 mt-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium text-sm shadow-lg shadow-blue-500/20"
          >
            <FileText size={16} />
            <span>{t.hero.downloadCv}</span>
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
