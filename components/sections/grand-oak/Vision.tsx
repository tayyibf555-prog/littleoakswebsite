import { FadeIn } from "@/components/ui/FadeIn";
import { Tree, Heart, ShieldCheck } from "@phosphor-icons/react";

export function Vision() {
    return (
        <section className="bg-white py-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-honey-gold/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <FadeIn>
                        <span className="text-honey-gold font-accent font-semibold tracking-wider uppercase mb-4 block">
                            Founder & Vision
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold font-display text-deep-green mb-8 leading-tight">
                            A vision rooted in care, character and community
                        </h2>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 max-w-6xl mx-auto items-center">

                    {/* Vision Text Block */}
                    <div className="md:col-span-7 space-y-6">
                        <FadeIn delay={0.1}>
                            <p className="text-lg text-slate leading-relaxed">
                                Grand Oak Sheffield is guided by a clear and heartfelt vision: to create a nurturing space where children feel safe, valued and inspired — a place where learning is joyful, character is shaped gently, and a sense of belonging is deeply felt.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <p className="text-lg text-slate leading-relaxed">
                                This vision is led by <strong className="text-deep-green font-semibold">Dr Mohsin Lubani</strong>, a GP with a strong grounding in safeguarding, child wellbeing and family care, alongside a longstanding commitment to community education. Over many years, he has been closely involved in mosque-based teaching and youth development, working directly with children and families in meaningful and trusted settings.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div className="bg-warm-white p-6 md:p-8 rounded-2xl border-l-4 border-honey-gold mt-8 shadow-sm">
                                <p className="text-lg font-medium text-deep-green italic leading-relaxed">
                                    "Through both professional and community experience, a simple truth has become clear: children thrive most in environments that are warm, structured, and filled with positive purpose."
                                </p>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Value Pillars */}
                    <div className="md:col-span-5 flex flex-col gap-6">
                        <FadeIn delay={0.4}>
                            <div className="bg-white p-6 rounded-2xl shadow-md border border-light-grey flex items-start gap-4 transform transition-transform hover:-translate-y-1">
                                <div className="bg-honey-gold/10 p-3 rounded-xl text-honey-gold mt-1">
                                    <Heart size={24} weight="fill" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-deep-green mb-2">Warm Environment</h4>
                                    <p className="text-slate text-sm">Where every child feels valued, safe, and part of a loving community setup.</p>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.5}>
                            <div className="bg-white p-6 rounded-2xl shadow-md border border-light-grey flex items-start gap-4 transform transition-transform hover:-translate-y-1">
                                <div className="bg-honey-gold/10 p-3 rounded-xl text-honey-gold mt-1">
                                    <ShieldCheck size={24} weight="fill" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-deep-green mb-2">Safeguarding Focus</h4>
                                    <p className="text-slate text-sm">Led by robust wellbeing principles grounded in professional healthcare experience.</p>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.6}>
                            <div className="bg-white p-6 rounded-2xl shadow-md border border-light-grey flex items-start gap-4 transform transition-transform hover:-translate-y-1">
                                <div className="bg-honey-gold/10 p-3 rounded-xl text-honey-gold mt-1">
                                    <Tree size={24} weight="fill" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-deep-green mb-2">Positive Purpose</h4>
                                    <p className="text-slate text-sm">Fostering spaces where character is shaped gently and joyfully.</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
}
