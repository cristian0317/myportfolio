import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, User } from 'lucide-react';

const About = () => {
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
          <div className="flex items-center space-x-2 mb-4 justify-center">
            <User className="text-blue-500" size={24} />
            <span className="text-blue-500 uppercase tracking-widest font-semibold text-sm">Who I Am</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                Software Development student at <span className="text-white font-medium">Universidad Tecnológica de Jalisco</span> with interest in web development and building digital tools.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I am a fast learner, problem solver, and highly motivated to grow as a professional developer. I enjoy the challenge of turning complex problems into simple, functional, and aesthetically pleasing applications.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <span className="text-white font-bold text-3xl">Fast</span>
                  <span className="text-gray-400">Learner</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-3xl">Problem</span>
                  <span className="text-gray-400">Solver</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-[#1e293b] p-8 rounded-2xl border border-gray-700/50 shadow-xl"
            >
              <div className="flex items-start space-x-4 mb-8">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-1">Education</h3>
                  <p className="text-gray-400">Software Development Degree</p>
                  <p className="text-blue-400 text-sm">UTJ - In Progress</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-500">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-1">Interests</h3>
                  <p className="text-gray-400">Fullstack Web Development</p>
                  <p className="text-emerald-400 text-sm">UI/UX Design & Backend Architecture</p>
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
