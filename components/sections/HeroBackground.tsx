'use client';

import { motion, Variants } from "framer-motion";
import {
    Sun,
    Cloud,
    Bird,
    PaperPlaneTilt,
    Smiley,
    Sparkle,
    Tree,
    Flower
} from "@phosphor-icons/react";

export function HeroBackground() {
    // Animation variants for floating elements
    const float: Variants = {
        animate: {
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const drift: Variants = {
        animate: {
            x: [0, 50, 0],
            transition: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
            }
        }
    };

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            {/* Sun - Top Right */}
            <motion.div
                className="absolute top-10 right-[5%] text-honey-gold/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            >
                <Sun size={120} weight="duotone" />
            </motion.div>

            {/* Clouds - Drifting */}
            <motion.div
                className="absolute top-32 left-[10%] text-cloud-blue/40"
                variants={drift}
                animate="animate"
            >
                <Cloud size={80} weight="fill" />
            </motion.div>

            <motion.div
                className="absolute top-16 right-[20%] text-cloud-blue/30"
                animate={{ x: [0, -40, 0] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
                <Cloud size={60} weight="fill" />
            </motion.div>

            {/* Playful Icons Scattering */}

            {/* Paper Plane - Flying */}
            <motion.div
                className="absolute top-40 left-[15%] text-slate/10"
                animate={{
                    x: [0, 100, 200, 300],
                    y: [0, -20, 10, -30],
                    opacity: [0, 1, 1, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
                <PaperPlaneTilt size={48} weight="light" />
            </motion.div>

            {/* Bird */}
            <motion.div
                className="absolute top-24 left-[40%] text-deep-green/10"
                variants={float}
                animate="animate"
            >
                <Bird size={42} weight="duotone" />
            </motion.div>

            {/* Nature Elements - Bottom aligned */}
            <div className="absolute bottom-0 left-0 w-full h-32 flex justify-between items-end px-12 opacity-20 text-deep-green">
                <motion.div variants={float} animate="animate" custom={1}>
                    <Tree size={64} weight="duotone" />
                </motion.div>
                <motion.div
                    variants={float}
                    animate="animate"
                    transition={{ delay: 1, duration: 7, repeat: Infinity }}
                    className="hidden md:block mb-8"
                >
                    <Bird size={32} weight="fill" className="text-honey-gold" />
                </motion.div>
                <motion.div
                    variants={float}
                    animate="animate"
                    transition={{ delay: 2, duration: 5, repeat: Infinity }}
                >
                    <Flower size={48} weight="duotone" className="text-blush-pink" />
                </motion.div>
            </div>

            {/* Decorative Sparkles */}
            <motion.div
                className="absolute top-1/3 right-1/3 text-honey-gold/30"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
            >
                <Sparkle size={32} weight="fill" />
            </motion.div>

            {/* Hand-drawn style SVG blob (Custom) */}
            <svg className="absolute top-1/4 left-[-50px] w-64 h-64 text-blush-pink/5 opacity-50 -z-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.3,82.2,22.9,71.2,34.3C60.2,45.7,49.5,54.9,37.6,61.9C25.7,68.9,12.6,73.7,-1.8,76.8C-16.2,79.9,-30.7,81.3,-43.3,75.4C-55.9,69.5,-66.6,56.3,-74.6,41.9C-82.6,27.5,-87.9,11.9,-86.6,-3.2C-85.3,-18.3,-77.4,-32.9,-66.6,-44.6C-55.8,-56.3,-42.1,-65.1,-28.4,-72.6C-14.7,-80.1,0,-86.3,14,-84.9C28,-83.5,44.7,-76.4,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
        </div>
    );
}
