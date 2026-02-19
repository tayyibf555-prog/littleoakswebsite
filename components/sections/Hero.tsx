'use client';

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { WavyDivider } from "@/components/ui/WavyDivider";

import { HeroBackground } from "@/components/sections/HeroBackground";

export function Hero() {
    return (
        <section className="relative bg-warm-white pt-20 pb-32 overflow-hidden">
            {/* Animated Background */}
            <HeroBackground />

            {/* Geometric Pattern Overlay (Subtle Texture) */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#1B5E3B 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="max-w-4xl mx-auto mt-12 md:mt-20 mb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-deep-green leading-tight mb-6">
                        From Sacred Space to Daily Presence.
                    </h1>
                    <p className="text-lg md:text-xl text-slate max-w-2xl mx-auto leading-relaxed">
                        A national framework enabling mosques, scholars, and community members to build regulated childcare provision, generating sustainable income, engaging families across every day of the week, and restoring the mosque to its rightful place within the lived experience of the next generation.
                    </p>
                </div>

                {/* 4 Equal CTAs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-20">
                    <Link href="/regions/scotland" className="w-full">
                        <Button variant="secondary" className="w-full whitespace-nowrap">Explore Scotland</Button>
                    </Link>
                    <Link href="/regions/england" className="w-full">
                        <Button variant="secondary" className="w-full whitespace-nowrap">Explore England</Button>
                    </Link>
                    <Link href="/regions/wales" className="w-full">
                        <Button variant="secondary" className="w-full whitespace-nowrap">Explore Wales</Button>
                    </Link>
                    <Link href="/contact" className="w-full">
                        <Button variant="primary" className="w-full whitespace-nowrap">Book Strategic Consultation</Button>
                    </Link>
                </div>
            </div>

            {/* Wavy Divider to next section */}
            <div className="absolute bottom-0 left-0 w-full text-white">
                <WavyDivider color="#FFFFFF" /> {/* Matches next section bg? Or Soft Peach? Next section is 'Why It Matters' */}
            </div>
        </section>
    );
}
