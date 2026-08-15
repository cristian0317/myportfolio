import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const SkillCard = ({ title, icon, skills, color, index }) => {
  const IconComponent = icon;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-[#1e293b] p-8 rounded-3xl border border-gray-700/50 hover:border-blue-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
    >
      <div>
        <div className={`p-4 rounded-2xl inline-flex mb-6 ${color} transition-transform group-hover:scale-110 duration-300 shadow-md`}>
          <IconComponent size={28} className="text-white" />
        </div>
        <h3 className="text-white font-bold text-xl mb-6 tracking-wide">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className="px-3 py-1.5 bg-slate-900/80 text-gray-300 text-xs font-semibold rounded-lg border border-gray-700/70 hover:border-blue-500/50 hover:text-white hover:bg-slate-800 transition-all cursor-default shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { t } = useLanguage();

  const skillSets = [
    {
      title: t.skills.categories.frontend,
      icon: Layout,
      color: "bg-blue-600/20 text-blue-400 border border-blue-500/30",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React 19", "Tailwind CSS v4", "Framer Motion"]
    },
    {
      title: t.skills.categories.backend,
      icon: Code2,
      color: "bg-emerald-600/20 text-emerald-400 border border-emerald-500/30",
      skills: ["Node.js", "Express.js", "REST APIs", "CRUD Operations"]
    },
    {
      title: t.skills.categories.database,
      icon: Database,
      color: "bg-purple-600/20 text-purple-400 border border-purple-500/30",
      skills: ["MongoDB", "Mongoose", "SQL Basics", "Database Modeling"]
    },
    {
      title: t.skills.categories.tools,
      icon: Terminal,
      color: "bg-amber-600/20 text-amber-400 border border-amber-500/30",
      skills: ["Git", "GitHub", "Vite", "VS Code", "Postman", "ESLint"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#0b1120] relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-blue-500 uppercase tracking-widest font-semibold text-xs">{t.skills.subtitle}</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3">{t.skills.title}</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {skillSets.map((set, index) => (
            <SkillCard key={set.title} {...set} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
