'use client';

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { MapPin } from "@phosphor-icons/react";

export function OurSites() {
    return (
        <section className="bg-warm-white py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-honey-gold font-accent font-semibold tracking-wider uppercase mb-4 block">
                        Our Sites
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-display text-deep-green mb-6">
                        Locations Near You
                    </h2>
                    <p className="text-xl text-slate max-w-2xl mx-auto">
                        Discover Little Oaks environments where your child can grow, learn, and thrive.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <FadeIn delay={0.2}>
                        <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-light-grey/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="flex flex-col md:flex-row">
                                {/* Image Placeholder/Accent */}
                                <div className="md:w-2/5 md:h-auto h-48 relative overflow-hidden border-r border-light-grey/50">
                                    <img src="/grand-oak-hero.png" alt="Grand Oak Early Years Nursery" className="absolute inset-0 w-full h-full object-cover object-bottom scale-125 origin-bottom group-hover:scale-[1.3] transition-transform duration-500" />
                                </div>

                                {/* Content */}
                                <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center bg-white">
                                    <div className="flex items-center gap-2 mb-3">
                                        <MapPin size={20} className="text-honey-gold" />
                                        <span className="text-sm font-semibold text-honey-gold uppercase tracking-wider">New Location</span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-deep-green mb-4 group-hover:text-honey-gold transition-colors">
                                        Grand Oak Early Years
                                    </h3>
                                    <p className="text-slate mb-8 line-clamp-2 md:line-clamp-none">
                                        Our newest dedicated early years setting. Register your interest now to join the waiting list for our upcoming opening.
                                    </p>
                                    <div className="mt-auto inline-flex">
                                        <Link href="/grand-oak-early-years">
                                            <Button className="bg-deep-green text-white hover:bg-honey-gold shadow-md hover:shadow-lg transition-all group-hover:-translate-y-1">
                                                Join Waiting List
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
