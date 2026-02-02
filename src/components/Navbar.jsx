import React, { useState } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { title: 'Home', href: '#home' },
        { title: 'About', href: '#about' },
        { title: 'Skills', href: '#skills' },
        { title: 'Portfolio', href: '#projects' },
        { title: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 transition-colors duration-300 dark:bg-slate-900/80 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#" className="block">
                            <Logo />
                        </a>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    className="text-gray-600 hover:text-teal-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                                >
                                    {link.title}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-teal-600 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    className="text-gray-600 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.title}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
