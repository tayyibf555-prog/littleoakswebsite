import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export function RegisterInterest() {
    return (
        <section id="register-interest" className="bg-white py-24 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16">

                    {/* Info Column */}
                    <div className="lg:w-1/3 flex flex-col justify-center">
                        <FadeIn>
                            <h2 className="text-3xl md:text-4xl font-bold text-deep-green mb-6 font-display">
                                Register Your Interest
                            </h2>
                            <p className="text-slate mb-8 text-lg">
                                Whether you're interested in our currently available sessions or looking ahead to our nursery and wraparound provision, let us know how we can support your family.
                            </p>
                            <div className="p-6 bg-warm-white rounded-2xl shadow-sm border border-light-grey">
                                <h3 className="font-bold text-deep-green mb-3">Next Steps:</h3>
                                <ul className="space-y-3 text-sm text-slate">
                                    <li className="flex items-center gap-2">✓ Submit your details</li>
                                    <li className="flex items-center gap-2">✓ We'll reach out to discuss availability</li>
                                    <li className="flex items-center gap-2">✓ Receive updates on future developments</li>
                                </ul>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Form Column */}
                    <div className="lg:w-2/3">
                        <FadeIn delay={0.2}>
                            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-light-grey group hover:border-honey-gold/30 transition-colors duration-500 relative overflow-hidden">
                                <div className="absolute top-0 w-full h-2 bg-gradient-to-r from-deep-green via-honey-gold to-deep-green left-0"></div>

                                <form className="space-y-6 mt-4 relative z-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-deep-green font-bold mb-2 text-sm uppercase tracking-wide">Parent's Name</label>
                                            <input type="text" className="w-full h-12 px-4 rounded-xl bg-warm-white/50 border border-light-grey focus:outline-none focus:border-honey-gold focus:ring-1 focus:ring-honey-gold transition-all" placeholder="E.g. Jane Doe" required />
                                        </div>
                                        <div>
                                            <label className="block text-deep-green font-bold mb-2 text-sm uppercase tracking-wide">Child's Age</label>
                                            <input type="text" className="w-full h-12 px-4 rounded-xl bg-warm-white/50 border border-light-grey focus:outline-none focus:border-honey-gold focus:ring-1 focus:ring-honey-gold transition-all" placeholder="E.g. 3 years old" required />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-deep-green font-bold mb-2 text-sm uppercase tracking-wide">Phone Number</label>
                                            <input type="tel" className="w-full h-12 px-4 rounded-xl bg-warm-white/50 border border-light-grey focus:outline-none focus:border-honey-gold focus:ring-1 focus:ring-honey-gold transition-all" placeholder="07123 456789" required />
                                        </div>
                                        <div>
                                            <label className="block text-deep-green font-bold mb-2 text-sm uppercase tracking-wide">Email</label>
                                            <input type="email" className="w-full h-12 px-4 rounded-xl bg-warm-white/50 border border-light-grey focus:outline-none focus:border-honey-gold focus:ring-1 focus:ring-honey-gold transition-all" placeholder="jane@example.com" required />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-deep-green font-bold mb-2 text-sm uppercase tracking-wide">Service Interested In</label>
                                            <select className="w-full h-12 px-4 rounded-xl bg-warm-white/50 border border-light-grey focus:outline-none focus:border-honey-gold focus:ring-1 focus:ring-honey-gold transition-all text-slate" required>
                                                <option defaultValue="">Select a service</option>
                                                <option>Mother & Toddler Group</option>
                                                <option>Playgroup Sessions</option>
                                                <option>After-School / Weekend Sessions</option>
                                                <option>Future Nursery Provision</option>
                                                <option>Future Wraparound Care</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-deep-green font-bold mb-2 text-sm uppercase tracking-wide">Preferred Start</label>
                                            <input type="text" className="w-full h-12 px-4 rounded-xl bg-warm-white/50 border border-light-grey focus:outline-none focus:border-honey-gold focus:ring-1 focus:ring-honey-gold transition-all" placeholder="E.g. As soon as possible, or Sep 2026" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-deep-green font-bold mb-2 text-sm uppercase tracking-wide">Message</label>
                                        <textarea className="w-full h-32 p-4 rounded-xl bg-warm-white/50 border border-light-grey focus:outline-none focus:border-honey-gold focus:ring-1 focus:ring-honey-gold transition-all resize-none" placeholder="Any specific requirements or questions?" />
                                    </div>

                                    <Button className="w-full bg-deep-green text-white hover:bg-honey-gold px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                                        Submit Registration
                                    </Button>
                                </form>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
}
