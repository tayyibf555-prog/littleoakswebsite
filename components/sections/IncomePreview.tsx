'use client';

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { WavyDivider } from "@/components/ui/WavyDivider";
import { Calculator } from "@phosphor-icons/react";

export function IncomePreview() {
    return (
        <section className="bg-soft-peach py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-honey-gold font-accent font-semibold tracking-wider uppercase mb-4 block">
                            Free Tool
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-deep-green mb-6">
                            Calculate Your Nursery Income
                        </h2>
                        <p className="text-lg text-slate leading-relaxed mb-8">
                            A single regulated early years provision can generate in excess of £12,000 in rental income annually. See exactly what your specific inputs—rooms, hours, and region—could yield using our interactive calculator.
                        </p>
                        <Link href="/pathways/childminders#calculator">
                            <Button variant="accent">Try the Calculator</Button>
                        </Link>
                    </div>

                    {/* Calculator Mockup */}
                    <div className="relative">
                        <div className="bg-white rounded-[24px] shadow-lg p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500 border border-warm-white">
                            <div className="flex items-center justify-between mb-6 border-b border-light-grey pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="bg-soft-forest/10 p-2 rounded-lg text-soft-forest">
                                        <Calculator size={24} weight="bold" />
                                    </div>
                                    <span className="font-bold text-deep-green">Income Estimator</span>
                                </div>
                            </div>
                            {/* Simulated fields */}
                            <div className="space-y-4 mb-8">
                                <div className="h-10 bg-warm-white rounded-lg w-full" />
                                <div className="h-10 bg-warm-white rounded-lg w-3/4" />
                                <div className="h-10 bg-warm-white rounded-lg w-full" />
                            </div>
                            {/* Result */}
                            <div className="bg-soft-forest text-white rounded-xl p-6 text-center">
                                <span className="text-sm opacity-80 block mb-1">Projected Annual Income</span>
                                <span className="text-3xl font-display font-bold">£36,000+</span>
                            </div>
                        </div>
                        {/* Decorative */}
                        <div className="absolute -z-10 top-10 right-10 w-full h-full bg-deep-green/5 rounded-[30px]" />
                    </div>
                </div>
            </div>

            {/* Divider to next section (Soft Peach -> Warm White) */}
            <div className="absolute bottom-0 left-0 w-full text-warm-white">
                <WavyDivider color="#FBF8F3" />
            </div>
        </section>
    );
}
