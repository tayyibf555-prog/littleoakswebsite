import { FadeIn } from "@/components/ui/FadeIn";
import { PuzzlePiece, BookOpenText, MoonStars, Users } from "@phosphor-icons/react";
import Image from "next/image";

export function AfterSchool() {
    return (
        <section className="bg-deep-green py-24 relative overflow-hidden">
            {/* Subtle background effects */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-honey-gold/10 to-transparent pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-honey-gold/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

                    <div className="text-white space-y-8">
                        <FadeIn>
                            <span className="inline-block py-1 px-3 rounded-full bg-honey-gold/20 text-honey-gold text-sm font-semibold tracking-wider font-accent mb-4 border border-honey-gold/30">
                                IMPORTANT FOCUS
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 leading-tight drop-shadow-sm">
                                After-School Programme <br />
                                <span className="text-honey-gold text-3xl md:text-4xl">(Ages 5–10)</span>
                            </h2>
                            <p className="text-lg text-white/90 leading-relaxed font-medium">
                                We are developing a structured after-school offer for primary-aged children, running weekday evenings and weekends.
                            </p>
                            <p className="text-white/80 leading-relaxed">
                                Designed to provide children with a safe, engaging and meaningful space after school.
                            </p>
                        </FadeIn>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            <FadeIn delay={0.1}>
                                <div className="flex items-start gap-4">
                                    <div className="bg-honey-gold rounded-xl p-3 text-deep-green shadow-md shrink-0">
                                        <PuzzlePiece size={24} weight="fill" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Activities & Play</h4>
                                        <p className="text-sm text-white/70">Creative and physical outlets.</p>
                                    </div>
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.2}>
                                <div className="flex items-start gap-4">
                                    <div className="bg-honey-gold rounded-xl p-3 text-deep-green shadow-md shrink-0">
                                        <BookOpenText size={24} weight="fill" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Structured Learning</h4>
                                        <p className="text-sm text-white/70">Guided educational support.</p>
                                    </div>
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.3}>
                                <div className="flex items-start gap-4">
                                    <div className="bg-honey-gold rounded-xl p-3 text-deep-green shadow-md shrink-0">
                                        <MoonStars size={24} weight="fill" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Islamic Studies</h4>
                                        <p className="text-sm text-white/70">Subtle, foundational elements.</p>
                                    </div>
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.4}>
                                <div className="flex items-start gap-4">
                                    <div className="bg-honey-gold rounded-xl p-3 text-deep-green shadow-md shrink-0">
                                        <Users size={24} weight="fill" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Social Environment</h4>
                                        <p className="text-sm text-white/70">Positive community interactions.</p>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>

                    <div className="relative h-[400px] sm:h-[500px] w-full lg:h-[600px]">
                        <FadeIn delay={0.3}>
                            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10 bg-deep-green/50">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-white/40 font-accent tracking-widest text-sm uppercase">Active Children Image Placeholder</span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-deep-green/80 to-transparent"></div>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
}
