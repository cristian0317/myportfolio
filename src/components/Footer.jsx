import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  return (
    <footer className="py-12 bg-[#0f172a] border-t border-gray-800/60">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-extrabold text-white tracking-wider">
              CRISTIAN<span className="text-blue-500">.</span>
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              {t.footer.tagline}
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex space-x-5">
              <a href="https://github.com/cristian0317" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/cristian-ortiz-rendon-817325348/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="mailto:cristianortizrendon12@gmail.com" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Mail size={18} />
              </a>
            </div>
            <p className="text-gray-500 text-xs">
              &copy; {currentYear} Cristian Ortiz Rendon. {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
