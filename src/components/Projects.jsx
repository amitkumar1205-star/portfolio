
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects = () => {

    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white"
                >
                    Featured Projects
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-teal-500/50 dark:hover:border-teal-500/50 hover:shadow-2xl transition-all duration-300 group flex flex-col h-full"
                        >
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                                    <a href="#" className="p-3 bg-white rounded-full text-slate-900 hover:bg-teal-600 hover:text-white hover:scale-110 transition-all duration-300 shadow-lg">
                                        <Github size={20} />
                                    </a>
                                    <a href="#" className="p-3 bg-white rounded-full text-slate-900 hover:bg-teal-600 hover:text-white hover:scale-110 transition-all duration-300 shadow-lg">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{project.title}</h3>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-slate-800 text-teal-600 dark:text-teal-400 rounded-md border border-slate-200 dark:border-slate-700">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mt-auto">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
