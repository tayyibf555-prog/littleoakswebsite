import { FadeIn } from "@/components/ui/FadeIn";
import Image from "next/image";

export function Intro() {
    return (
        <section className="bg-warm-white py-24 relative overflow-hidden">
            {/* Background pattern */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(#1B5E3B 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">

                    <div className="lg:w-1/2">
                        <FadeIn>
                            <span className="text-honey-gold font-accent font-semibold tracking-wider uppercase mb-4 block">
                                Introduction
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold font-display text-deep-green mb-8 leading-tight">
                                Welcome to <br /> Grand Oak Sheffield
                            </h2>
                            <p className="text-lg text-slate leading-relaxed mb-6">
                                Grand Oak Sheffield is a nurturing children’s space created to support families through warmth, structure and purpose.
                            </p>
                            <p className="text-lg text-slate leading-relaxed">
                                Based within Sheffield Grand Mosque, we are developing a trusted environment where children can learn, play and grow with confidence, in a setting rooted in care, community and belonging.
                            </p>
                        </FadeIn>
                    </div>

                    <div className="lg:w-1/2">
                        <FadeIn delay={0.2}>
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-square lg:aspect-[4/3] bg-deep-green/5 border border-light-grey">
                                <div className="absolute inset-0 flex items-center justify-center p-8 text-center text-slate/50">
                                    <span className="font-accent tracking-widest text-sm uppercase">Warm & Welcoming Space Image</span>
                                </div>
                                {/* Placeholder for an actual image */}
                                <div className="absolute inset-0 mix-blend-multiply opacity-5 bg-deep-green"></div>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
}
