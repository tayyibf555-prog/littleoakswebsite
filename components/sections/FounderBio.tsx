'use client';

import { Card } from "@/components/ui/Card";
import { UserCircle } from "@phosphor-icons/react";

export function FounderBio() {
    return (
        <section className="bg-warm-white py-24 relative overflow-hidden">
            {/* Decorator Blob */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blush-pink/30 rounded-l-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Col */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md aspect-square">
                            {/* Real Founder Picture */}
                            <div className="w-full h-full bg-deep-green rounded-[40px] overflow-hidden shadow-xl border-4 border-white relative flex items-center justify-center group">
                                <img src="/placeholders/founder_bio.png" alt="Mohsan - Founder" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            {/* Floating name card */}
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-[20px] shadow-lg max-w-xs border border-light-grey">
                                <h3 className="font-display font-bold text-xl text-deep-green">Mohsan</h3>
                                <span className="font-accent text-xs font-bold uppercase tracking-wider text-honey-gold">Founder & Lead Consultant</span>
                            </div>
                        </div>
                    </div>

                    {/* Text Col */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-deep-green mb-8">
                            The Mind Behind Little Oaks
                        </h2>
                        <div className="space-y-6 text-lg text-slate leading-relaxed">
                            <p>
                                Mohsan did not arrive at this work through market research. He arrived through memory.
                            </p>
                            <p>
                                He grew up in the shadow of the minaret. His father was a lead imam, and through that upbringing Mohsan spent decades moving through mosque communities across the country, observing, absorbing, and quietly cataloguing something that troubled him long before he had the language to name it: the gradual withdrawal of the mosque from the daily life of the families it existed to serve.
                            </p>
                            <p>
                                As a medical professional and trustee, he understood both the developmental needs of children and the governance pressures on mosques.
                            </p>
                            <p className="font-semibold text-deep-green">
                                He is the icebreaker between two worlds that have rarely spoken: the regulated world of Ofsted-registered childcare agencies, and the communal world of mosque governance.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Executive Director Section */}
                <div className="mt-20 pt-16 border-t border-slate/10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-8 lg:order-2">
                            <div className="mb-4">
                                <h3 className="text-2xl font-bold text-deep-green mb-2">
                                    Our Team
                                </h3>
                                <span className="inline-block font-accent text-sm font-bold uppercase tracking-wider text-honey-gold">
                                    Executive Director of Strategy, Expansion & Capital Partnerships
                                </span>
                            </div>
                            <div className="text-slate leading-relaxed space-y-4">
                                <p>
                                    Driving the national expansion of the Little Oaks framework, forging strategic capital partnerships, and ensuring our foundational model seamlessly scales to empower communities across the entire region.
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-4 lg:order-1 flex justify-center lg:justify-start">
                            <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                                <div className="w-full h-full bg-deep-green rounded-[32px] overflow-hidden shadow-lg border-4 border-white relative group">
                                    <img src="/placeholders/executive_director.png" alt="Executive Director" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
