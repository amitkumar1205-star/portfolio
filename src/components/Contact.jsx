
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Have a project in mind or want to discuss new opportunities?
                            I'm always open to discussing new projects and creative ideas.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div className="flex items-start space-x-4 group">
                                <div className="shrink-0 p-3 bg-teal-50 dark:bg-slate-800 rounded-xl text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-1">Email Me</h3>
                                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                                        {PERSONAL_INFO.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 group">
                                <div className="shrink-0 p-3 bg-teal-50 dark:bg-slate-800 rounded-xl text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-1">Call Me</h3>
                                    <a href="tel:9306898185" className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                                        +91 9306898185
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 group">
                                <div className="shrink-0 p-3 bg-teal-50 dark:bg-slate-800 rounded-xl text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-1">Location</h3>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        Remote / Worldwide
                                    </p>
                                </div>
                            </div>
                        </div>

                        <form className="space-y-6 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:border-teal-500 text-slate-900 dark:text-white placeholder-slate-400 transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:border-teal-500 text-slate-900 dark:text-white placeholder-slate-400 transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="Your Message"
                                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:border-teal-500 text-slate-900 dark:text-white placeholder-slate-400 transition-colors resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-8 py-4 bg-linear-to-r from-teal-600 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-teal-500/30 transform hover:-translate-y-1 transition-all duration-200"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
