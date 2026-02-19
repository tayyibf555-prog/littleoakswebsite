'use client';

export function MosquePain() {
    return (
        <section className="bg-white py-24 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-deep-green mb-8 text-center">
                        The Current Reality
                    </h2>

                    <div className="bg-warm-white p-8 md:p-12 rounded-[24px] border border-light-grey mb-12">
                        <h3 className="text-xl font-bold text-deep-green mb-4">The Trustee's Dilemma</h3>
                        <p className="text-slate text-lg leading-relaxed mb-6">
                            You know the building should be used. You know the community needs childcare. But you also know the risks: Ofsted registration, safeguarding liabilities, employment law, staffing ratios.
                        </p>
                        <p className="text-slate text-lg leading-relaxed">
                            So the doors remain locked during the day. The heating runs for an empty hall. And the next generation spends its formative years in institutions that have no connection to the mosque.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta font-bold text-xl">1</div>
                            <div>
                                <h4 className="text-lg font-bold text-deep-green mb-2">Zero Usage</h4>
                                <p className="text-slate">Valuable community assets sit largely dormant during prime working hours.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta font-bold text-xl">2</div>
                            <div>
                                <h4 className="text-lg font-bold text-deep-green mb-2">Rising Costs</h4>
                                <p className="text-slate">Utilities and maintenance costs are rising, but donation-based models are volatile.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta font-bold text-xl">3</div>
                            <div>
                                <h4 className="text-lg font-bold text-deep-green mb-2">Generational Drift</h4>
                                <p className="text-slate">Children have no daily relationship with the space until they are much older.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta font-bold text-xl">4</div>
                            <div>
                                <h4 className="text-lg font-bold text-deep-green mb-2">Liability Fear</h4>
                                <p className="text-slate">Trustees avoid provision because they cannot personally manage regulatory risk.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
