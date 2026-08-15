import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code, X, CheckCircle2, Info } from 'lucide-react';
import { projects } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';

const ProjectCard = ({ project, index, onSelect }) => {
  const { lang, t } = useLanguage();
  const title = project.title[lang] || project.title.es;
  const description = project.description[lang] || project.description.es;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-[#1e293b] rounded-3xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
    >
      <div>
        <div className="h-52 bg-gradient-to-br from-blue-950/60 via-slate-900 to-slate-950 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
          <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Code size={56} className="text-blue-400/40 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-500" />
          
          <button 
            onClick={() => onSelect(project)}
            className="absolute bottom-4 right-4 bg-slate-900/80 hover:bg-blue-600 text-white p-2.5 rounded-full border border-gray-700 hover:border-blue-400 transition-all backdrop-blur-md shadow-lg"
            title={t.projects.detailsModalTitle}
          >
            <Info size={18} />
          </button>
        </div>
        
        <div className="p-8">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-snug">
            {title}
          </h3>
          <p className="text-gray-300 text-sm mb-6 leading-relaxed line-clamp-3">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
              <span key={tag} className="text-[11px] uppercase tracking-wider font-bold text-blue-400 bg-blue-400/10 border border-blue-400/20 px-2.5 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-8 pb-6 pt-4 border-t border-gray-700/40 flex items-center justify-between">
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center text-gray-300 hover:text-white transition-colors text-sm font-semibold group/link"
        >
          <Github size={18} className="mr-2 group-hover/link:scale-110 transition-transform text-blue-400" />
          <span>{t.projects.sourceCode}</span>
        </a>

        <button 
          onClick={() => onSelect(project)}
          className="flex items-center text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors gap-1"
        >
          <span>{t.projects.detailsModalTitle}</span>
          <ExternalLink size={14} />
        </button>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { lang, t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-[#0f172a] relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-blue-500 uppercase tracking-widest font-semibold text-xs">{t.projects.subtitle}</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3">{t.projects.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onSelect={setSelectedProject} />
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-[#1e293b] w-full max-w-2xl rounded-3xl border border-gray-700 p-6 sm:p-8 shadow-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700 transition-all"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-500/10 text-blue-400 rounded-2xl border border-blue-500/20">
                  <Code size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {selectedProject.title[lang] || selectedProject.title.es}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="my-6 space-y-4">
                <p className="text-gray-300 text-base leading-relaxed">
                  {selectedProject.longDescription[lang] || selectedProject.longDescription.es}
                </p>

                <div className="pt-2">
                  <h4 className="text-white font-semibold text-sm mb-3">Highlights:</h4>
                  <ul className="space-y-2">
                    {(selectedProject.highlights[lang] || selectedProject.highlights.es).map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-end gap-4 pt-6 border-t border-gray-700/60">
                <a 
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-gray-700 flex items-center gap-2 transition-all"
                >
                  <Github size={18} />
                  <span>{t.projects.sourceCode}</span>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md transition-all"
                >
                  {t.projects.close}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
