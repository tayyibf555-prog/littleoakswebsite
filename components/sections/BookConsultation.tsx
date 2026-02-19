'use client';

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { WavyDivider } from "@/components/ui/WavyDivider";

export function BookConsultation() {
    return (
        <section className="bg-deep-green py-24 relative overflow-hidden text-center text-white">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#D4A843 1px, transparent 1px)',
                    backgroundSize: '32px 32px'
                }}
            />

            {/* Top Divider (Warm White -> Deep Green) */}
            <div className="absolute top-0 left-0 w-full text-warm-white -translate-y-[99%]">
                <WavyDivider position="top" color="#1B5E3B" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6">
                        Ready to Transform Your Nursery?
                    </h2>
                    <p className="text-xl text-white/90 mb-10 font-medium">
                        Start with a conversation. No obligation, just clarity.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contact">
                            <Button className="bg-white text-deep-green hover:bg-honey-gold hover:text-white border-none text-lg px-8 py-4">
                                Book a Free Consultation
                            </Button>
                        </Link>
                    </div>
                    <p className="mt-6 text-sm text-white/60">
                        30-minute call • No obligation
                    </p>
                </div>
            </div>

            {/* Bottom Divider (Deep Green -> Warm White) */}
            <div className="absolute bottom-0 left-0 w-full text-warm-white">
                <WavyDivider color="#FBF8F3" />
            </div>
        </section>
    );
}
