'use client';

import { FadeIn } from "@/components/ui/FadeIn";
import { MagnifyingGlass, ShieldCheck, RocketLaunch } from "@phosphor-icons/react";

const steps = [
    {
        icon: MagnifyingGlass,
        title: "1. Infrastructure Audit",
        description: "We assess your current premises and map the precise regulatory pathways needed to operate legally and efficiently."
    },
    {
        icon: ShieldCheck,
        title: "2. Governance & Compliance",
        description: "We handle the complex Ofsted registration, structure your governance models, and ensure complete operational confidence."
    },
    {
        icon: RocketLaunch,
        title: "3. Launch & Revenue",
        description: "Your space transforms into a fully regulated childcare setting, delivering community impact alongside sustainable financial return."
    }
];

export function HowItWorks() {
    return (
        <section className="bg-white py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <FadeIn>
                    <span className="inline-block py-1 px-3 rounded-full bg-soft-forest/10 text-soft-forest text-sm font-semibold tracking-wider font-accent mb-4 border border-soft-forest/20 uppercase">
                        The Process
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-deep-green mb-6 font-display">
                        How We Partner With You
                    </h2>
                    <p className="text-lg text-slate max-w-2xl mx-auto mb-16">
                        From initial assessment to full operational launch, we architect the entire infrastructure so you can focus on serving your community.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
                    {/* Connecting Line (hidden on mobile) */}
                    <div className="hidden md:block absolute top-[48px] left-[15%] right-[15%] h-0.5 bg-light-grey -z-10" />

                    {steps.map((step, idx) => (
                        <FadeIn key={idx} delay={idx * 0.2}>
                            <div className="flex flex-col items-center bg-warm-white p-8 rounded-3xl shadow-sm border border-slate/10 hover:shadow-md transition-shadow relative z-10 h-full">
                                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 border-4 border-light-grey shadow-sm">
                                    <step.icon size={40} className="text-honey-gold" weight="duotone" />
                                </div>
                                <h3 className="text-xl font-bold text-deep-green mb-4">{step.title}</h3>
                                <p className="text-slate leading-relaxed">{step.description}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
