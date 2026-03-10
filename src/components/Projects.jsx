import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group bg-[#1e293b] rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-xl"
  >
    <div className="h-48 bg-gradient-to-br from-blue-900/40 to-slate-900 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <Code size={48} className="text-blue-500/30 group-hover:text-blue-500/50 group-hover:scale-110 transition-all duration-500" />
    </div>
    
    <div className="p-8">
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-blue-400 bg-blue-400/10 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center text-gray-300 hover:text-white transition-colors font-medium group/link"
        >
          <Github size={18} className="mr-2 group-hover/link:scale-110 transition-transform" />
          Source Code
        </a>
        <div className="text-blue-500/50">
           <ExternalLink size={18} />
        </div>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#0f172a]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-blue-500 uppercase tracking-widest font-semibold text-sm">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
