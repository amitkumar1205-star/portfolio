
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center lg:text-left z-10"
                >
                    <div className="inline-block p-1 rounded-full bg-gradient-to-r from-teal-500/10 to-teal-500/10 mb-6 backdrop-blur-sm border border-teal-200 dark:border-teal-900">
                        <span className="block px-4 py-1 text-sm font-medium text-teal-600 dark:text-teal-400 rounded-full">
                            {PERSONAL_INFO.role}
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight leading-tight">
                        Building Digital <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-500 to-purple-600 animate-gradient">
                            Experiences
                        </span>
                    </h1>

                    <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        {PERSONAL_INFO.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                        <a
                            href="#projects"
                            className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white transition-all duration-200 bg-teal-500 rounded-full hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                        >
                            View My Work
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-slate-700 dark:text-slate-300 transition-all duration-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="flex justify-center lg:justify-start space-x-6">
                        {SOCIAL_LINKS.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                aria-label={item.label}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors transform hover:scale-110 duration-200"
                            >
                                <item.Icon size={24} />
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Interactive 3D Image Area */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block h-[500px]"
                >
                    {/* Abstract Background Shapes */}
                    <motion.div style={{ y: y2 }} className="absolute inset-0 z-0">
                        <div className="absolute top-10 right-10 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
                    </motion.div>

                    {/* Floating Cards / Objects */}
                    <motion.div
                        style={{ y: y1 }}
                        className="relative z-10 w-full h-full flex items-center justify-center"
                    >
                        {/* Main Glass Card */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="w-80 h-96 bg-white/10 dark:bg-slate-800/50 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 rounded-2xl shadow-2xl relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-purple-600/10 group-hover:opacity-100 transition-opacity duration-500 opacity-50"></div>

                            {/* Pseudo UI Elements */}
                            <div className="p-6 space-y-4">
                                <div className="h-4 w-1/3 bg-slate-200 dark:bg-slate-700 rounded-full animate-pulse"></div>
                                <div className="h-32 w-full bg-gradient-to-br from-teal-100 to-blue-100 dark:from-teal-900/40 dark:to-blue-900/40 rounded-xl"></div>
                                <div className="space-y-2">
                                    <div className="h-3 w-3/4 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                                    <div className="h-3 w-1/2 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                                </div>
                                <div className="flex gap-2 pt-4">
                                    <div className="h-8 w-20 bg-teal-500 rounded-lg"></div>
                                    <div className="h-8 w-8 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Elements around */}
                        <motion.div
                            animate={{ y: [10, -10, 10], rotate: [0, 5, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -right-4 top-20 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ x: [-10, 10, -10], rotate: [0, -5, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute -left-8 bottom-32 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-2"
                        >
                            <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-white font-bold text-xs">
                                TS
                            </div>
                            <div className="text-xs font-semibold dark:text-white">TypeScript</div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
