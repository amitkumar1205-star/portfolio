import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
    // Custom paths for a stylized "AK"
    // "A" path: bottom-left -> top -> bottom-right, plus the crossbar
    const pathA = "M 10 50 L 30 10 L 50 50 M 20 35 L 40 35";

    // "K" path: vertical line, then two diagonals
    // Using a separate path for K to allow distinct coloring or timing if desired
    const pathK = "M 60 10 L 60 50 M 80 10 L 60 30 L 80 50";

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => ({
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay: i * 0.2, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay: i * 0.2, duration: 0.01 }
            }
        })
    };

    return (
        <motion.div
            className="flex items-center justify-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <svg
                width="60"
                height="40"
                viewBox="0 0 90 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-2"
            >
                {/* Letter A - Teal Gradient applied via stroke */}
                <motion.path
                    d={pathA}
                    stroke="url(#gradient-teal)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={draw}
                    custom={0}
                    initial="hidden"
                    animate="visible"
                />

                {/* Letter K - Purple Gradient */}
                <motion.path
                    d={pathK}
                    stroke="url(#gradient-purple)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={draw}
                    custom={1}
                    initial="hidden"
                    animate="visible"
                />

                {/* Definitions for gradients */}
                <defs>
                    <linearGradient id="gradient-teal" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#2dd4bf" /> {/* Teal-400 */}
                        <stop offset="100%" stopColor="#0d9488" /> {/* Teal-600 */}
                    </linearGradient>
                    <linearGradient id="gradient-purple" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#c084fc" /> {/* Purple-400 */}
                        <stop offset="100%" stopColor="#9333ea" /> {/* Purple-600 */}
                    </linearGradient>
                </defs>
            </svg>
        </motion.div>
    );
};

export default Logo;
