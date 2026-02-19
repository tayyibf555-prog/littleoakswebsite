'use client';

import { WavyDivider } from "@/components/ui/WavyDivider";

export function InstitutionalRenewal() {
    return (
        <section className="bg-warm-white py-24 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-deep-green mb-8">
                        Beyond Income — Institutional Renewal
                    </h2>
                    <p className="text-2xl font-display text-soft-forest leading-normal italic mb-12">
                        "This is not a revenue strategy. It is an act of institutional renewal."
                    </p>

                    <div className="text-left md:text-center space-y-6 text-lg text-slate leading-relaxed">
                        <p>
                            The mosque has always been a place of prayer. But across the long arc of Islamic civilisation, it has been considerably more: a place of learning, of arbitration, of welfare, of commerce, of daily communal life.
                        </p>
                        <p>
                            Structured childcare provision is not simply a revenue stream. It is a restoration of function. It re-embeds the mosque within the practical, daily experience of family life.
                        </p>
                        <p className="font-bold text-deep-green">
                            Sacred spaces endure when they remain woven into the fabric of ordinary life.
                        </p>
                    </div>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12 max-w-5xl mx-auto">
                    {[
                        "Weekday building utilisation moves from one day to five",
                        "Safeguarding standards are enhanced",
                        "Young families engage as a daily reality",
                        "Community educators gain professional pathways",
                        "Mosque's presence in next gen experience is secured",
                        "Sustainability built on service, not donations"
                    ].map((benefit, i) => (
                        <div key={i} className="flex items-start gap-4">
                            <div className="mt-1.5 w-3 h-3 rounded-full bg-honey-gold shrink-0 border border-warm-white shadow-sm" />
                            <p className="text-slate font-medium">{benefit}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Divider to next section (Warm White -> Deep Green [Consultation CTA]) */}
            {/* Actually next is Testimonials (Warm White) -> so no divider needed or just spacer */}
            {/* Wait, design says CTA is Section 8. Testimonials Section 7. */}
            {/* Let's assume Testimonials next. */}
        </section>
    );
}
