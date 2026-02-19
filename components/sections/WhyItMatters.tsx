'use client';

import { WavyDivider } from "@/components/ui/WavyDivider";

export function WhyItMatters() {
    return (
        <section className="bg-white py-24 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="text-honey-gold font-accent font-semibold tracking-wider uppercase mb-4 block">
                        The Sector Context
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-deep-green mb-8">
                        Why This Conversation Matters Now
                    </h2>

                    <div className="space-y-6 text-lg text-slate leading-relaxed text-left md:text-center">
                        <p>
                            Mosques remain places of spiritual authority and communal identity.
                            That has not changed. What has changed is the architecture of daily life around them.
                        </p>
                        <p>
                            Parents today work longer and travel further than any previous generation. Children spend their most developmental hours, sometimes 35 to 40 hours each week, inside structured, regulated environments. Nurseries, schools, and after-school providers have become the primary institutions of daily childhood. The mosque, for all its spiritual significance, is present for a fraction of that time.
                        </p>
                        <p>
                            When a child's daily rhythm is shaped entirely by institutions that hold no connection to their family's faith, culture, or community, the consequence is not crisis. It is drift. Quiet, gradual, and cumulative.
                        </p>
                        <p className="font-semibold text-deep-green">
                            That is not a question of faith. It is a question of presence.
                        </p>
                        <p>
                            The educational and formative provisions that shape the next generation are those woven into the fabric of their daily lives.
                        </p>

                        <p className="text-2xl font-display font-bold text-soft-forest mt-8 italic">
                            Little Oaks was built to change the weave.
                        </p>
                    </div>
                </div>
            </div>
            {/* Divider to next section */}
            <div className="absolute bottom-0 left-0 w-full text-soft-peach">
                <WavyDivider color="#FDDEC0" />
            </div>
        </section>
    );
}
