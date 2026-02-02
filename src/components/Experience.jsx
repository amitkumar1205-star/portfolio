
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: "React / Next.js Developer",
            company: "Current Company / Freelance",
            period: "2024 - Present",
            description: "Focusing on building modern web applications with Next.js, optimizing performance, and integrating complex UIs with Tailwind CSS."
        },
        {
            title: "Frontend Developer",
            company: "Previous Role",
            period: "2023 - 2024",
            description: "Developed responsive websites using HTML, CSS, and JavaScript. Collaborated with backend teams to integrate PHP and MySQL services."
        }
    ];

    return (
        <section id="experience" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white"
                >
                    Work Experience
                </motion.h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            <div className="hidden md:block absolute left-1/2 -ml-0.5 w-0.5 h-full bg-slate-200 dark:bg-slate-800 top-0"></div>
                            <div className={`md:flex items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="hidden md:block w-5/12"></div>

                                <div className="absolute left-0 md:left-1/2 -ml-3 md:-ml-3 w-6 h-6 rounded-full bg-teal-500 border-4 border-white dark:border-slate-900 z-10 shadow-lg"></div>

                                <div className="md:w-5/12 bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300 group">
                                    <div className="flex items-center mb-2 text-teal-600 dark:text-teal-400">
                                        <Briefcase size={18} className="mr-2" />
                                        <span className="text-sm font-semibold">{exp.period}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{exp.title}</h3>
                                    <h4 className="text-base text-slate-600 dark:text-slate-400 mb-4 font-medium">{exp.company}</h4>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
