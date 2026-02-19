'use client';

import { CheckCircle, Buildings, User, UsersThree, ArrowsLeftRight } from "@phosphor-icons/react";

export function MosqueSolution() {
    return (
        <section className="bg-deep-green py-24 relative text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-honey-gold font-accent font-semibold tracking-wider uppercase mb-4 block">
                            The Solution
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                            The Regulated Tenancy Model
                        </h2>
                        <p className="text-xl text-white/90">
                            You do not run the nursery. You facilitate it.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-lg text-white/80 leading-relaxed mb-6">
                                Little Oaks structures a partnership between the Mosque (Landlord) and a Regulated Provider (Tenant).
                            </p>
                            <p className="text-lg text-white/80 leading-relaxed mb-8">
                                The Provider holds the Ofsted registration, employs the staff, and manages the daily operations. The Mosque provides the space and sets the ethos.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Zero regulatory liability for Trustees",
                                    "Guaranteed annual rental income",
                                    "Full alignment with Islamic ethos",
                                    "Priority places for community families"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle size={24} weight="fill" className="text-honey-gold shrink-0" />
                                        <span className="text-lg font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Replaced Diagram with Icon Flow */}
                        <div className="bg-white/5 rounded-[24px] p-8 border border-white/10 flex flex-col items-center justify-center text-center backdrop-blur-sm">
                            <div className="w-full flex items-center justify-between mb-8 px-4 relative">
                                {/* Connecting Line */}
                                <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-white/20 -z-10 border-t border-dashed border-white/30"></div>

                                {/* Node 1: Mosque */}
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 bg-deep-green border-2 border-honey-gold rounded-full flex items-center justify-center shadow-lg mb-3 z-10">
                                        <Buildings size={32} className="text-white" />
                                    </div>
                                    <span className="font-bold text-sm text-honey-gold">Mosque</span>
                                    <span className="text-xs text-white/60">Space Provider</span>
                                </div>

                                {/* Arrows */}
                                <div className="bg-deep-green text-white p-1 rounded-full z-10">
                                    <ArrowsLeftRight size={20} />
                                </div>

                                {/* Node 2: Provider */}
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-3 z-10">
                                        <User size={32} className="text-deep-green" />
                                    </div>
                                    <span className="font-bold text-sm text-white">Provider</span>
                                    <span className="text-xs text-white/60">Regulated Entity</span>
                                </div>
                            </div>

                            <div className="bg-white/10 rounded-xl p-4 w-full">
                                <p className="text-xs font-bold text-honey-gold uppercase mb-2">Little Oaks Framework</p>
                                <p className="text-sm text-white/80 leading-snug">
                                    Facilitates lease, compliance, and partnership agreement.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
