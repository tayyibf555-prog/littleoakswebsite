'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { List, X, CaretDown } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "About", href: "/about" },
    { name: "Pathways", href: "/pathways" }, // This could be a dropdown in v2
    { name: "Regions", href: "/regions" },   // This could be a dropdown in v2
    { name: "Resources", href: "/resources" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "absolute top-0 left-0 right-0 z-50 transition-all duration-300 p-4 md:p-6 flex items-start justify-between pointer-events-none",
                // Removed global background/shadow, handling per-element
            )}
        >
            {/* Logo - Independent & Large */}
            <div className="pointer-events-auto">
                <Link href="/" className="block group">
                    {/* Reverted to JPEG with circular mask to preserve colors */}
                    <div className="relative w-24 h-24 md:w-40 md:h-40 shrink-0 group-hover:scale-105 transition-transform -mt-4 -ml-2 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <Image
                            src="/logo.jpeg"
                            alt="Little Oaks Logo"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </Link>
            </div>

            {/* Navigation Box - Floating Pill */}
            <div className="pointer-events-auto relative">
                <div className={cn(
                    "bg-white/95 backdrop-blur-md shadow-sm border border-white/20 transition-all duration-300 px-6 py-3",
                    "rounded-2xl md:rounded-full", // Rounded box
                    scrolled ? "shadow-md" : ""
                )}>
                    <div className="flex items-center gap-6">
                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-charcoal font-semibold text-lg hover:text-soft-forest transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-soft-forest rounded-full transition-all duration-300 group-hover:w-1.5 -translate-x-1/2 opacity-0 group-hover:opacity-100" />
                                </Link>
                            ))}
                            <div className="h-6 w-px bg-slate/20" /> {/* Divider */}
                            <Link href="/contact">
                                <Button size="lg">Book a Call</Button>
                            </Link>
                        </nav>

                        {/* Mobile Toggle */}
                        <button
                            className="md:hidden p-2 text-charcoal hover:text-soft-forest transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={32} weight="bold" /> : <List size={32} weight="bold" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown (Floating) */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full right-0 mt-2 w-[calc(100vw-32px)] md:w-80 bg-warm-white shadow-xl rounded-2xl border border-light-grey p-6 flex flex-col gap-4 overflow-hidden origin-top-right"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-xl font-display font-bold text-charcoal hover:text-soft-forest transition-colors text-right"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="h-px w-full bg-slate/10 my-2" />
                            <Link href="/contact" onClick={() => setIsOpen(false)} className="w-full">
                                <Button className="w-full" size="lg">Book a Call</Button>
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
