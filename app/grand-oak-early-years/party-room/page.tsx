'use client';

import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { CheckCircle, Info, WhatsappLogo } from "@phosphor-icons/react";
import Link from "next/link";

export default function PartyRoomPage() {
    return (
        <main className="flex min-h-screen flex-col bg-warm-white bg-opacity-30">
            {/* Hero Section */}
            <section className="bg-deep-green relative overflow-hidden py-32 flex items-center min-h-[500px]">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-honey-gold/20 to-transparent pointer-events-none" />
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-honey-gold/20 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-honey-gold/20 text-honey-gold text-sm font-semibold tracking-wider font-accent mb-6 backdrop-blur-sm border border-honey-gold/30 uppercase">
                            Exclusive Venue Hire
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold font-display text-white mb-6 leading-tight drop-shadow-md">
                            Private Toddler Party Venue – <span className="text-honey-gold">Exclusive Hire</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 font-medium mb-10 max-w-2xl leading-relaxed drop-shadow-sm">
                            Exclusive toddler party space designed for calm, structured celebrations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="bg-honey-gold text-white hover:bg-white hover:text-deep-green px-8 py-4 text-lg"
                                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
                                Check Availability & Book
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction and Features */}
            <section className="py-24 relative overflow-hidden bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto items-center">
                        <div className="lg:w-1/2">
                            <FadeIn>
                                <h2 className="text-3xl md:text-4xl font-bold font-display text-deep-green mb-6 leading-tight">
                                    A purpose-designed play space within the Grand Mosque
                                </h2>
                                <p className="text-lg text-slate leading-relaxed mb-6">
                                    A high-quality, purpose-designed toddler play space for Muslim families, available for exclusive private hire within a well-maintained mosque setting.
                                </p>
                                <p className="text-lg text-slate leading-relaxed mb-8">
                                    Designed for calm, structured and family-friendly celebrations, with full private use of the space for your event. <strong className="text-deep-green">Ideal for ages 1–5 years.</strong>
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Soft play & climbing frame",
                                        "Dedicated toddler-friendly environment",
                                        "Tables & seating area",
                                        "Private entrance & facilities"
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-deep-green font-medium">
                                            <CheckCircle size={24} weight="fill" className="text-honey-gold" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </FadeIn>
                        </div>

                        {/* Image Grid */}
                        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                            <FadeIn delay={0.1}>
                                <div className="rounded-2xl overflow-hidden aspect-square bg-deep-green/5 relative border border-light-grey flex items-center justify-center">
                                    <span className="text-sm font-accent text-slate/40 text-center px-4">Wide Shot of Room (Placeholder)</span>
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.2}>
                                <div className="rounded-2xl overflow-hidden aspect-square bg-honey-gold/5 relative border border-light-grey flex items-center justify-center">
                                    <span className="text-sm font-accent text-slate/40 text-center px-4">Climbing Frame (Placeholder)</span>
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.3}>
                                <div className="rounded-2xl overflow-hidden aspect-square bg-honey-gold/5 relative border border-light-grey flex items-center justify-center">
                                    <span className="text-sm font-accent text-slate/40 text-center px-4">Soft Play Area (Placeholder)</span>
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.4}>
                                <div className="rounded-2xl overflow-hidden aspect-square bg-deep-green/5 relative border border-light-grey flex items-center justify-center">
                                    <span className="text-sm font-accent text-slate/40 text-center px-4">Seating / Table Setup (Placeholder)</span>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* Structure: Pricing & Rules */}
            <section className="py-24 bg-warm-white border-t border-light-grey">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

                        {/* Pricing */}
                        <FadeIn>
                            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-light-grey h-full">
                                <h3 className="text-3xl font-bold font-display text-deep-green mb-8">Pricing Options</h3>
                                <div className="space-y-6">
                                    <div className="p-6 bg-honey-gold/10 rounded-2xl border border-honey-gold/20 flex justify-between items-center">
                                        <div>
                                            <h4 className="font-bold text-deep-green text-xl">Exclusive Private Hire</h4>
                                            <p className="text-slate text-sm">2 hours full access</p>
                                        </div>
                                        <div className="text-2xl font-bold font-display text-honey-gold">£200</div>
                                    </div>
                                    <div className="p-6 bg-warm-white rounded-2xl border border-light-grey flex justify-between items-center">
                                        <h4 className="font-bold text-deep-green">Additional Hour</h4>
                                        <div className="text-xl font-bold text-slate">£60</div>
                                    </div>
                                    <div className="p-6 bg-warm-white rounded-2xl border border-light-grey flex justify-between items-center relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-deep-green"></div>
                                        <h4 className="font-bold text-deep-green">Refundable Deposit</h4>
                                        <div className="text-xl font-bold text-slate">£50</div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Rules */}
                        <FadeIn delay={0.2}>
                            <div className="bg-deep-green p-10 rounded-[2rem] shadow-md text-white h-full relative overflow-hidden">
                                <div className="absolute -bottom-10 -right-10 opacity-10">
                                    <Info size={200} weight="fill" />
                                </div>
                                <h3 className="text-3xl font-bold font-display text-white mb-6">Key Rules & Small Print</h3>
                                <ul className="space-y-4 relative z-10 text-white/90">
                                    <li className="flex items-start gap-3">
                                        <div className="bg-white/20 p-1.5 rounded-full mt-0.5"><CheckCircle size={16} weight="bold" /></div>
                                        <span>Parent/guardian supervision required at all times.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-white/20 p-1.5 rounded-full mt-0.5"><CheckCircle size={16} weight="bold" /></div>
                                        <span>Maximum of 12–15 children allowed.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-white/20 p-1.5 rounded-full mt-0.5"><CheckCircle size={16} weight="bold" /></div>
                                        <span>Suitable for children aged 1–5 years only.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-white/20 p-1.5 rounded-full mt-0.5"><CheckCircle size={16} weight="bold" /></div>
                                        <span>No food in play area (designated eating space only).</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-white/20 p-1.5 rounded-full mt-0.5"><CheckCircle size={16} weight="bold" /></div>
                                        <span>Please leave the space in reasonable condition.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-white/20 p-1.5 rounded-full mt-0.5"><CheckCircle size={16} weight="bold" /></div>
                                        <span>Any damages to the venue may be chargeable.</span>
                                    </li>
                                </ul>
                            </div>
                        </FadeIn>

                    </div>
                </div>
            </section>

            {/* Booking Call to Action */}
            <section id="booking" className="py-24 bg-white border-t border-light-grey">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <FadeIn>
                            <h2 className="text-3xl md:text-5xl font-bold font-display text-deep-green mb-6">
                                Ready to book your slot?
                            </h2>
                            <p className="text-lg text-slate mb-10 max-w-2xl mx-auto">
                                Message us directly to check venue availability and secure your private toddler party booking. We respond to all enquiries promptly.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                                <Link href="https://wa.me/message/" target="_blank">
                                    <Button className="bg-[#25D366] text-white hover:bg-[#1DA851] px-10 py-5 text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center gap-3 rounded-full">
                                        <WhatsappLogo size={28} weight="fill" />
                                        Message on WhatsApp
                                    </Button>
                                </Link>
                                <span className="text-slate font-medium text-sm">or</span>
                                <Link href="/contact">
                                    <Button variant="secondary" className="px-10 py-5 text-lg bg-warm-white border border-light-grey rounded-full">
                                        Use Booking Form
                                    </Button>
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

        </main>
    );
}
