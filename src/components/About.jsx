import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, User, Sparkles, Award, Code } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-[#0f172a] relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center space-x-2 mb-3 justify-center">
            <User className="text-blue-500" size={20} />
            <span className="text-blue-500 uppercase tracking-widest font-semibold text-xs">{t.about.subtitle}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16">{t.about.title}</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                {t.about.text1} <span className="text-white font-semibold underline decoration-blue-500/50">{t.about.institution}</span> {t.about.text1_end}
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                {t.about.text2}
              </p>

              {/* Statistics & Highlights */}
              <div className="pt-4 grid grid-cols-2 gap-6">
                <div className="flex flex-col bg-slate-800/40 p-4 rounded-xl border border-gray-700/50">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles size={18} className="text-blue-400" />
                    <span className="text-white font-bold text-2xl sm:text-3xl">{t.about.stat1Title}</span>
                  </div>
                  <span className="text-gray-400 text-xs uppercase tracking-wider font-medium">{t.about.stat1Sub}</span>
                </div>

                <div className="flex flex-col bg-slate-800/40 p-4 rounded-xl border border-gray-700/50">
                  <div className="flex items-center gap-2 mb-1">
                    <Award size={18} className="text-emerald-400" />
                    <span className="text-white font-bold text-2xl sm:text-3xl">{t.about.stat2Title}</span>
                  </div>
                  <span className="text-gray-400 text-xs uppercase tracking-wider font-medium">{t.about.stat2Sub}</span>
                </div>
              </div>
            </motion.div>

            {/* Right Card: Education & Focus */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-[#1e293b] p-8 rounded-3xl border border-gray-700/50 shadow-2xl space-y-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-start space-x-4">
                <div className="p-3.5 bg-blue-500/10 rounded-2xl text-blue-400 border border-blue-500/20">
                  <GraduationCap size={26} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-1">{t.about.eduTitle}</h3>
                  <p className="text-gray-300 font-medium text-sm">{t.about.eduDegree}</p>
                  <p className="text-blue-400 text-xs font-semibold mt-1 inline-block px-2.5 py-0.5 rounded-full bg-blue-400/10 border border-blue-400/20">
                    {t.about.eduInstitution}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3.5 bg-emerald-500/10 rounded-2xl text-emerald-400 border border-emerald-500/20">
                  <Briefcase size={26} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-1">{t.about.interestsTitle}</h3>
                  <p className="text-gray-300 font-medium text-sm">{t.about.interestsField}</p>
                  <p className="text-emerald-400 text-xs font-semibold mt-1 inline-block px-2.5 py-0.5 rounded-full bg-emerald-400/10 border border-emerald-400/20">
                    {t.about.interestsSub}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
