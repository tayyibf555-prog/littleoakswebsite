import { FadeIn } from "@/components/ui/FadeIn";
import { CheckCircle } from "@phosphor-icons/react";

const reasons = [
    "Trusted community setting",
    "Warm, nurturing environment",
    "Faith-aware and family-centred",
    "Strong focus on safety and wellbeing",
    "Structured and purposeful activities",
    "Growing into nursery and wraparound provision"
];

export function WhyChooseUs() {
    return (
        <section className="bg-warm-white py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">
                    <div className="lg:w-1/2">
                        <FadeIn>
                            <div className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-square bg-deep-green border border-light-grey">
                                <div className="absolute inset-0 flex items-center justify-center p-8 text-center text-white/50">
                                    <span className="font-accent tracking-widest text-sm uppercase">Community Setting Image Placeholder</span>
                                </div>
                                <div className="absolute inset-0 mix-blend-overlay opacity-30 bg-warm-white"></div>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="lg:w-1/2">
                        <FadeIn>
                            <span className="text-honey-gold font-accent font-semibold tracking-wider uppercase mb-4 block">
                                Our Core Values
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold font-display text-deep-green mb-8 leading-tight">
                                Why Families <br /> Choose Us
                            </h2>
                        </FadeIn>

                        <div className="space-y-4">
                            {reasons.map((reason, index) => (
                                <FadeIn key={index} delay={0.1 * index}>
                                    <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-light-grey hover:border-honey-gold/30 transition-colors">
                                        <CheckCircle size={28} weight="fill" className="text-deep-green shrink-0" />
                                        <span className="text-lg font-bold text-slate">{reason}</span>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
