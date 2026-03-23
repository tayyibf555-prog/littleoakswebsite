'use client';

import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export function ComingSoon() {
    return (
        <section className="bg-white py-24 relative overflow-hidden border-b border-light-grey/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <FadeIn>
                        <span className="text-honey-gold font-accent font-semibold tracking-wider uppercase mb-4 block">
                            Future Development
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold font-display text-deep-green mb-6 leading-tight">
                            Coming Soon
                        </h2>
                        <p className="text-lg text-slate leading-relaxed">
                            We are actively preparing to expand our provision to support even more families with dedicated nursery and wraparound care.
                        </p>
                    </FadeIn>
                </div>

                <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto mb-16">

                    <FadeIn delay={0.1} className="flex-1">
                        <div className="bg-warm-white p-8 md:p-10 rounded-3xl h-full border border-light-grey relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-deep-green to-honey-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            <h3 className="text-2xl font-bold text-deep-green mb-4 font-display">
                                Grand Oak <br /> Early Years Nursery
                            </h3>
                            <p className="text-slate leading-relaxed mb-6">
                                A high-quality early years setting focused on warmth, safety, structure and development.
                            </p>
                            <div className="mt-auto">
                                <span className="inline-block bg-white px-4 py-2 rounded-lg text-sm font-semibold text-deep-green shadow-sm border border-light-grey">Opening late 2026</span>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2} className="flex-1">
                        <div className="bg-warm-white p-8 md:p-10 rounded-3xl h-full border border-light-grey relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-honey-gold to-deep-green transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            <h3 className="text-2xl font-bold text-deep-green mb-4 font-display">
                                Grand Oak <br /> Wraparound Provision
                            </h3>
                            <p className="text-slate leading-relaxed mb-6">
                                Reliable before- and after-school care designed to support working families with flexible, safe hours.
                            </p>
                            <div className="mt-auto">
                                <span className="inline-block bg-white px-4 py-2 rounded-lg text-sm font-semibold text-deep-green shadow-sm border border-light-grey">Awaiting finalized dates</span>
                            </div>
                        </div>
                    </FadeIn>

                </div>

                <div className="text-center">
                    <FadeIn delay={0.4}>
                        <p className="text-lg text-deep-green font-medium mb-6">Secure your child's place ahead of time.</p>
                        <Button className="bg-honey-gold text-white hover:bg-deep-green px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                            onClick={() => document.getElementById('register-interest')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Register Early Interest
                        </Button>
                    </FadeIn>
                </div>

            </div>
        </section>
    );
}
