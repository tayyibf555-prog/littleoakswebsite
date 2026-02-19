'use client';

import { WavyDivider } from "@/components/ui/WavyDivider";
import { FadeIn } from "@/components/ui/FadeIn";

export function WhatIsLittleOaks() {
    return (
        <section className="bg-warm-white py-24 relative">
            {/* Divider from previous section (Soft Peach to Warm White) */}
            <div className="absolute top-0 left-0 w-full text-soft-peach -translate-y-[99%]">
                <WavyDivider position="top" color="#FED7AA" /> {/* Updated color code matches Soft Peach */}
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-honey-gold font-accent font-semibold tracking-wider uppercase mb-4 block">
                            About Us
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-deep-green mb-6">
                            What Is Little Oaks?
                        </h2>
                        <div className="space-y-6 text-lg text-slate leading-relaxed">
                            <p>
                                You may not have encountered this model before. Most people have not.
                            </p>
                            <p>
                                Childminding on Non-Domestic Premises, known as CWDP, is a regulated framework that enables professional childcare to operate within community buildings. It is not a nursery. It is not a school. It is more flexible than either, more community-embedded than either, and more accessible to the kinds of organisations and individuals this framework is designed to serve.
                            </p>
                            <p>
                                Little Oaks is the national strategic framework that makes CWDP operational within mosques, Islamic centres, community spaces, and commercial premises across England, Scotland, and Wales.
                            </p>
                            <p className="font-semibold text-deep-green">
                                We map the regulatory pathway. We structure the governance. We model the income. We manage the onboarding. We stand alongside every partner throughout.
                            </p>
                            <p>
                                We do not deliver childcare. We build the infrastructure through which communities can deliver it, with full legal clarity, full professional compliance, and full operational confidence.
                            </p>
                            <p className="font-display font-bold text-xl text-soft-forest">
                                We are not casual advisers. We are infrastructure architects.
                            </p>
                        </div>
                    </div>

                    {/* Abstract Visual Replacement */}
                    <div className="relative">
                        <div className="aspect-[4/3] bg-gradient-to-br from-blush-pink/30 to-soft-peach/30 rounded-[32px] overflow-hidden relative border border-white shadow-lg">
                            {/* Geometric Shapes Abstracting 'Structure' and 'Community' */}
                            <div className="absolute top-[10%] left-[10%] w-[60%] h-[60%] bg-soft-forest rounded-[24px] opacity-10 rotate-3"></div>
                            <div className="absolute bottom-[10%] right-[10%] w-[60%] h-[60%] bg-honey-gold rounded-full opacity-10 -rotate-3"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-32 h-32 bg-white rounded-full shadow-md flex items-center justify-center z-10">
                                    <div className="w-20 h-20 bg-deep-green rounded-full opacity-10 animate-pulse"></div>
                                    <div className="absolute w-16 h-16 bg-deep-green rounded-full opacity-20"></div>
                                    {/* Center Icon or Symbol */}
                                    <div className="absolute w-3 h-3 bg-honey-gold rounded-full"></div>
                                </div>
                            </div>
                            {/* Floating elements */}
                            <div className="absolute top-8 right-8 w-16 h-16 bg-white/60 backdrop-blur-sm rounded-2xl animate-float-slow"></div>
                            <div className="absolute bottom-12 left-12 w-20 h-20 bg-white/60 backdrop-blur-sm rounded-full animate-float-delayed"></div>
                        </div>
                        {/* Decorative blobs */}
                        <div className="absolute -z-10 top-[-20px] right-[-20px] w-32 h-32 bg-honey-gold/20 rounded-full blur-2xl" />
                        <div className="absolute -z-10 bottom-[-20px] left-[-20px] w-40 h-40 bg-soft-forest/10 rounded-full blur-2xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}
