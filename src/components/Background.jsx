
import React from 'react';

const Background = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            {/* Base background color */}
            <div className="absolute inset-0 bg-white dark:bg-slate-950 transition-colors duration-300" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-900 [mask-image:linear-gradient(to_bottom,white,transparent)]" />

            {/* Radial Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-100/20 via-transparent to-purple-100/20 dark:from-teal-900/10 dark:to-purple-900/10 backdrop-blur-[1px]" />
        </div>
    );
};

export default Background;
