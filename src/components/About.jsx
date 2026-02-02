
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-teal-600 to-purple-600 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition duration-500"></div>
                        <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl">
                            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Who I Am</h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                I am a passionate Frontend Developer with 2 years of experience in building modern web applications.
                                With a strong foundation in HTML, CSS, and JavaScript, I specialize in the React ecosystem.
                            </p>
                            <br />
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                Over the past year, I've focused heavily on React and Next.js, creating optimized user interfaces
                                that look great and perform seamlessly. I also have backend experience with PHP and MySQL,
                                giving me a well-rounded understanding of web development.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">
                            Bridging design and technology
                        </h2>
                        <div className="space-y-6">
                            {[
                                { title: "Frontend Excellence", desc: "Crafting pixel-perfect, responsive designs using Tailwind CSS.", color: "bg-teal-500" },
                                { title: "React & Next.js Expert", desc: "Building scalable SPA and SSR applications.", color: "bg-purple-500" },
                                { title: "Full Stack Awareness", desc: "Understanding of backend integration with PHP/Laravel and SQL.", color: "bg-green-500" }
                            ].map((item, index) => (
                                <div key={index} className="flex items-start group">
                                    <div className={`flex-shrink-0 h-4 w-4 rounded-full ${item.color} mt-1.5 mr-4 ring-2 ring-transparent group-hover:ring-offset-2 group-hover:ring-${item.color.replace('bg-', '')} transition-all`}></div>
                                    <div>
                                        <h4 className="text-lg font-medium text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-slate-500 dark:text-slate-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
