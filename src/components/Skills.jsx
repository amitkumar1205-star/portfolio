
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
        { category: "Backend", items: ["PHP", "Laravel (Basic)", "MySQL", "SQL"] },
        { category: "Tools", items: ["Git", "VS Code", "Vite", "Figma"] }
    ];

    return (
        <section id="skills" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">Technical Skills</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {skills.map((skillGroup, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl hover:border-teal-500/50 dark:hover:border-teal-500/50 transition-all duration-300"
                            >
                                <h3 className="text-xl font-bold mb-6 text-teal-600 dark:text-teal-400 border-b border-slate-100 dark:border-slate-800 pb-2">
                                    {skillGroup.category}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {skillGroup.items.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full text-sm border border-slate-200 dark:border-slate-700 hover:border-teal-500 hover:text-teal-500 dark:hover:text-teal-400 transition-colors cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
