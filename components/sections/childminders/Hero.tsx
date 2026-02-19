'use client';

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { WavyDivider } from "@/components/ui/WavyDivider";

export function ChildminderHero() {
    return (
        <section className="relative bg-cloud-blue pt-20 pb-32 overflow-hidden">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#FBCFE8 1px, transparent 1px), radial-gradient(#2D7A50 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                    backgroundPosition: '0 0, 16px 16px'
                }}
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="max-w-4xl mx-auto mt-12 md:mt-20 mb-12">
                    <span className="text-deep-green font-accent font-semibold tracking-wider uppercase mb-4 block">
                        Pathway for Childminders
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-deep-green leading-tight mb-6">
                        Your Home. Your Practice. Your Independence.
                    </h1>
                    <p className="text-lg md:text-xl text-slate max-w-2xl mx-auto leading-relaxed mb-8">
                        Why work for a nursery when you can own the practice? Build a professional, Ofsted-registered career from home, with the full backing of a national agency.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <Button size="lg">Start Your Application</Button>
                        </Link>
                        <Link href="#calculator">
                            <Button variant="secondary" size="lg">Calculate Your Income</Button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Wavy Divider */}
            <div className="absolute bottom-0 left-0 w-full text-white">
                <WavyDivider color="#FFFFFF" />
            </div>
        </section>
    );
}
