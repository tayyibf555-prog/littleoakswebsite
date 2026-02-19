'use client';

import { CheckCircle, HouseLine, Sparkle } from "@phosphor-icons/react";

export function ChildminderSolution() {
    return (
        <section className="bg-deep-green py-24 relative text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-honey-gold font-accent font-semibold tracking-wider uppercase mb-4 block">
                            The Little Oaks Agency
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                            You Focus on the Children. We Focus on the Rest.
                        </h2>
                        <p className="text-lg text-white/80 leading-relaxed mb-8">
                            By registering with Little Oaks, you get the independence of being your own boss, with the support structure of a large organisation.
                        </p>
                        <div className="space-y-3">
                            {[
                                "Ofsted Registration handled for you",
                                "Policies, contracts, and forms provided",
                                "Training and CPD included",
                                "Marketing support to fill places",
                                "Network of local peers"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle size={24} weight="fill" className="text-honey-gold shrink-0" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Visual Replacement: Abstract Home Office Iconography */}
                    <div className="bg-white/10 rounded-[24px] h-80 flex flex-col items-center justify-center border border-white/20 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-24 h-24 bg-honey-gold rounded-full flex items-center justify-center shadow-lg mb-6 text-deep-green">
                                <HouseLine size={48} weight="fill" />
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                                    <Sparkle weight="fill" className="text-honey-gold" /> Freedom
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                                    <CheckCircle weight="fill" className="text-sage" /> Support
                                </div>
                            </div>
                        </div>

                        {/* Decorative */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
