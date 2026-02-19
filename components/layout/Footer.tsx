'use client';

import Link from "next/link";
import { Envelope, Phone, MapPin, Leaf } from "@phosphor-icons/react";

const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Approach", href: "/approach" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
];

const pathwayLinks = [
    { name: "For Mosques", href: "/pathways/mosques" },
    { name: "For Childminders", href: "/pathways/childminders" },
    { name: "Commercial Partners", href: "/pathways/commercial" },
    { name: "Scholars & Educators", href: "/pathways/scholars" },
];

export function Footer() {
    return (
        <footer className="bg-deep-green text-white pt-16 pb-8 relative overflow-hidden">
            {/* Decorative Background Pattern (Subtle) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="inline-block mb-6 group">
                            <span className="font-display font-bold text-2xl tracking-tight text-white">
                                Little Oaks
                            </span>
                        </Link>
                        <p className="text-white/80 leading-relaxed mb-6 font-medium">
                            A national framework enabling mosques, scholars, and communities to build regulated childcare provision.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-display font-bold text-lg mb-6 text-honey-gold">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-white/80 hover:text-white hover:translate-x-1 transition-all inline-block">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Pathways */}
                    <div>
                        <h4 className="font-display font-bold text-lg mb-6 text-honey-gold">Pathways</h4>
                        <ul className="space-y-3">
                            {pathwayLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-white/80 hover:text-white hover:translate-x-1 transition-all inline-block">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-display font-bold text-lg mb-6 text-honey-gold">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-white/80">
                                <Envelope size={20} className="mt-1 shrink-0 text-honey-gold" />
                                <span>hello@littleoaks.co.uk</span>
                            </li>
                            <li className="flex items-start gap-3 text-white/80">
                                <Phone size={20} className="mt-1 shrink-0 text-honey-gold" />
                                <span>020 1234 5678</span>
                            </li>
                            <li className="flex items-start gap-3 text-white/80">
                                <MapPin size={20} className="mt-1 shrink-0 text-honey-gold" />
                                <span>London, United Kingdom</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
                    <p>© {new Date().getFullYear()} Little Oaks Early Years Ltd. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
