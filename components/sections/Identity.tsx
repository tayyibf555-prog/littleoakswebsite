'use client';

export function Identity() {
    return (
        <section className="bg-soft-peach py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent opacity-50" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-deep-green mb-6">
                            The Question of Identity
                        </h2>
                        <p className="text-xl text-slate font-medium">
                            Where do children spend their most impressionable hours?
                        </p>
                    </div>

                    <div className="bg-white rounded-[24px] p-8 md:p-12 shadow-sm border border-warm-white">
                        <p className="text-lg text-slate leading-relaxed mb-8">
                            If the answer is: nursery, school, and after-school provision, and none of those carry any thread back to the mosque, then a child's sense of belonging, of cultural identity, and of community loyalty forms entirely outside the spaces their families hold sacred.
                        </p>

                        <p className="text-lg text-slate leading-relaxed mb-8">
                            This is not accidental. It is structural. And what is structural can be restructured.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Identity consolidates through daily repetition.",
                                "Belonging deepens through consistent, familiar presence.",
                                "Loyalty forms through early, positive, and meaningful experience."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-honey-gold mt-2.5 shrink-0" />
                                    <span className="text-lg text-charcoal font-semibold">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="text-xl font-display font-bold text-deep-green text-center mt-10">
                            When the mosque becomes part of that daily rhythm, it does not compete with modern life. It becomes inseparable from it.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
