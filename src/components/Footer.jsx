
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-slate-950 py-8 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 dark:text-slate-400">
                <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
                <p className="mt-2 text-sm">Built with React, Vite & Tailwind CSS</p>
            </div>
        </footer>
    );
};

export default Footer;
