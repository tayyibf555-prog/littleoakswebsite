import { OurSites } from "@/components/sections/OurSites";
import { BookConsultation } from "@/components/sections/BookConsultation";
import { ContactForm } from "@/components/sections/ContactForm";
import { Button } from "@/components/ui/Button";

export default function GranOakEarlyYearsPage() {
    return (
        <main className="flex min-h-screen flex-col">
            {/* Simple Premium Hero */}
            <section className="bg-deep-green relative overflow-hidden py-32 flex items-center">
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
                        backgroundSize: '32px 32px'
                    }}
                />

                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-honey-gold/20 to-transparent pointer-events-none" />
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-honey-gold/30 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-honey-gold/20 text-honey-gold text-sm font-semibold tracking-wider font-accent mb-6 backdrop-blur-sm border border-honey-gold/30">
                            NEW LOCATION
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-6 leading-tight">
                            Gran Oak <br />
                            <span className="text-honey-gold">Early Years</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 font-medium mb-10 max-w-2xl leading-relaxed">
                            A highly anticipated nursery environment designed to nurture your child's innate potential. Join the waiting list today.
                        </p>
                    </div>
                </div>
            </section>

            {/* Waiting List Form Section */}
            <section className="bg-warm-white py-24 relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16">

                        {/* Info Column */}
                        <div className="lg:w-1/3 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-deep-green mb-6 font-display">
                                Secure Your Place
                            </h2>
                            <p className="text-slate mb-8 text-lg">
                                We are experiencing high demand for our upcoming opening at Gran Oak Early Years. Please complete the form to register your interest and we will be in touch with more details.
                            </p>
                            <div className="p-6 bg-white rounded-2xl shadow-sm border border-light-grey mb-8">
                                <h3 className="font-bold text-deep-green mb-2">Why register early?</h3>
                                <ul className="space-y-3 text-sm text-slate">
                                    <li className="flex items-center gap-2">✓ Priority enrollment access</li>
                                    <li className="flex items-center gap-2">✓ Exclusive opening day invites</li>
                                    <li className="flex items-center gap-2">✓ Updates on our facilities</li>
                                </ul>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="lg:w-2/3">
                            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-md border border-light-grey group hover:border-honey-gold/30 transition-colors duration-500 relative overflow-hidden">
                                {/* Decorative subtle gradient */}
                                <div className="absolute top-0 w-full h-2 bg-gradient-to-r from-deep-green via-honey-gold to-deep-green left-0"></div>

                                <form className="space-y-6 mt-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-deep-green font-bold mb-2 text-sm uppercase tracking-wide">Parent's Name</label>
                                            <input type="text" className="w-full h-12 px-4 rounded-xl bg-warm-white/50 border border-light-grey focus:outline-none focus:border-honey-gold focus:ring-1 focus:ring-honey-gold transition-all" placeholder="John Doe" />
                                        </div>
                                        <div>
                                            <label className="block text-deep-green font-bold mb-2 text-sm uppercase tracking-wide">Email</label>
                                            <input type="email" className="w-full h-12 px-4 rounded-xl bg-warm-white/50 border border-light-grey focus:outline-none focus:border-honey-gold focus:ring-1 focus:ring-honey-gold transition-all" placeholder="john@example.com" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-deep-green font-bold mb-2 text-sm uppercase tracking-wide">Phone Number</label>
                                            <input type="tel" className="w-full h-12 px-4 rounded-xl bg-warm-white/50 border border-light-grey focus:outline-none focus:border-honey-gold focus:ring-1 focus:ring-honey-gold transition-all" placeholder="07123 456789" />
                                        </div>
                                        <div>
                                            <label className="block text-deep-green font-bold mb-2 text-sm uppercase tracking-wide">Child's Age (Years)</label>
                                            <select className="w-full h-12 px-4 rounded-xl bg-warm-white/50 border border-light-grey focus:outline-none focus:border-honey-gold focus:ring-1 focus:ring-honey-gold transition-all text-slate">
                                                <option defaultValue="">Select age</option>
                                                <option>Expectant Parent</option>
                                                <option>0 - 1 Years</option>
                                                <option>1 - 2 Years</option>
                                                <option>2 - 3 Years</option>
                                                <option>3 - 4 Years</option>
                                                <option>4+ Years</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-deep-green font-bold mb-2 text-sm uppercase tracking-wide">Any additional comments or questions?</label>
                                        <textarea className="w-full h-32 p-4 rounded-xl bg-warm-white/50 border border-light-grey focus:outline-none focus:border-honey-gold focus:ring-1 focus:ring-honey-gold transition-all resize-none" placeholder="We would love to know more..." />
                                    </div>

                                    <Button className="w-full md:w-auto bg-honey-gold text-white hover:bg-deep-green px-10 py-4 text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                                        Join Waiting List
                                    </Button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
