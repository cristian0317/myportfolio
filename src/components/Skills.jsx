import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal } from 'lucide-react';

const SkillCard = ({ title, icon: Icon, skills, color }) => (
  <motion.div
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-[#1e293b] p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-colors shadow-xl group"
  >
    <div className={`p-4 rounded-xl inline-flex mb-6 ${color} transition-colors group-hover:scale-110 duration-300`}>
      <Icon size={28} className="text-white" />
    </div>
    <h3 className="text-white font-bold text-xl mb-6">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span 
          key={skill} 
          className="px-3 py-1 bg-gray-800 text-gray-400 text-sm rounded-md border border-gray-700 hover:border-blue-500/50 hover:text-white transition-all cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const skillSets = [
    {
      title: "Frontend",
      icon: Layout,
      color: "bg-blue-600/20",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]
    },
    {
      title: "Backend",
      icon: Code2,
      color: "bg-emerald-600/20",
      skills: ["Node.js", "Express", "REST APIs"]
    },
    {
      title: "Database",
      icon: Database,
      color: "bg-purple-600/20",
      skills: ["MongoDB", "SQL Basics"]
    },
    {
      title: "Tools",
      icon: Terminal,
      color: "bg-orange-600/20",
      skills: ["Git", "GitHub", "Excel", "Vite", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#0b1120]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-blue-500 uppercase tracking-widest font-semibold text-sm">Tech Stack</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">My Skills</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {skillSets.map((set, index) => (
            <SkillCard key={set.title} {...set} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
