'use client';

import { Quotes } from "@phosphor-icons/react";

export function VisionQuote() {
    return (
        <section className="bg-soft-peach py-24 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <Quotes size={64} weight="fill" className="text-honey-gold mx-auto mb-8 opacity-80" />
                <blockquote className="max-w-4xl mx-auto">
                    <p className="text-3xl md:text-4xl lg:text-5xl font-display font-bold italic text-deep-green leading-tight mb-8">
                        "When a child's daily rhythm is shaped entirely by institutions that hold no connection to their family's faith, the consequence is not crisis. It is drift."
                    </p>
                    <footer className="text-xl text-slate font-medium">
                        — Mohsan, Founder
                    </footer>
                </blockquote>
            </div>
        </section>
    );
}
