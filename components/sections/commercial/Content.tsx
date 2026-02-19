'use client';

import { CheckCircle } from "@phosphor-icons/react";

export function CommercialContent() {
    return (
        <section className="bg-white py-24 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-deep-green mb-6">
                            Asset Optimisation
                        </h2>
                        <div className="space-y-6 text-lg text-slate leading-relaxed">
                            <p>
                                Community centres, halls, and commercial properties often sit empty during standard working hours. This is a missed opportunity for revenue and social impact.
                            </p>
                            <p>
                                Little Oaks partners with property owners to establish regulated childcare provision within these spaces. We handle the regulatory framework, finding and vetting the providers who will operate as your tenants.
                            </p>
                        </div>
                    </div>

                    <div className="bg-warm-white p-8 rounded-[24px] border border-light-grey">
                        <h3 className="font-bold text-xl text-deep-green mb-6">Why Partner With Us?</h3>
                        <ul className="space-y-4">
                            {[
                                "Long-term Regulated Tenancy",
                                "Guaranteed Rental Income (Govt Backed)",
                                "Zero Operational Liability",
                                "Enhanced Community Footfall",
                                "Professional Building Utilisation"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle size={24} weight="fill" className="text-honey-gold shrink-0" />
                                    <span className="font-medium text-charcoal">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
