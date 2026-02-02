
import React from 'react';
import { motion } from 'framer-motion';

const Shapes = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Circle - Top Left */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.05, 1]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-teal-400/20 to-purple-500/20 blur-xl dark:from-teal-400/10 dark:to-purple-500/10"
            />

            {/* Cube-like Square - Top Right */}
            <motion.div
                animate={{
                    y: [0, 30, 0],
                    rotate: [0, 45, 90, 45, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-tr from-teal-500/30 to-purple-500/30 rounded-2xl backdrop-blur-sm border border-white/10 shadow-xl transform rotate-12"
            />

            {/* Triangle/Cone apprx - Bottom Left */}
            <motion.div
                animate={{
                    y: [0, -40, 0],
                    x: [0, 20, 0],
                    rotate: [0, -20, 0]
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-40 left-20 w-0 h-0 border-l-[50px] border-l-transparent border-b-[80px] border-b-teal-500/20 border-r-[50px] border-r-transparent blur-sm"
            />

            {/* Ring - Center/Bottom */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute bottom-20 right-1/3 w-40 h-40 rounded-full border-4 border-teal-500/10 border-dashed"
            />

            {/* Small floating particles */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "easeInOut"
                    }}
                    className="absolute w-2 h-2 bg-teal-400 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                />
            ))}
        </div>
    );
};

export default Shapes;
