'use client';

import { Leaf } from "@phosphor-icons/react";

const events = [
    { year: "Memory", title: "The Observation", description: "Growing up in mosque communities, witnessing the disconnect between the institution and the daily lives of families." },
    { year: "Analysis", title: "The Clinical View", description: "Understanding child development and the critical nature of early years formation within a secure community context." },
    { year: "Strategy", title: "The Framework", description: "Mapping the regulatory landscape to find a model that solves the liability barrier for trustees." },
    { year: "Reality", title: "Little Oaks", description: "A national infrastructure built to bridge the gap and restore the mosque to the centre of daily life." },
];

export function Timeline() {
    return (
        <section className="bg-warm-white py-24 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-deep-green text-center mb-16">The Journey</h2>

                <div className="max-w-4xl mx-auto relative">
                    {/* Center Line */}
                    <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-1 bg-soft-forest/20 md:-translate-x-1/2 rounded-full" />

                    <div className="space-y-12">
                        {events.map((event, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <div key={index} className={`flex flex-col md:flex-row gap-8 items-start relative ${!isLeft ? 'md:flex-row-reverse' : ''}`}>
                                    {/* Icon Marker */}
                                    <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-deep-green rounded-full border-4 border-warm-white flex items-center justify-center z-10 md:-translate-x-1/2">
                                        <Leaf size={16} weight="fill" className="text-honey-gold" />
                                    </div>

                                    {/* Spacer for Desktop Centering */}
                                    <div className="hidden md:block flex-1" />

                                    {/* Content Card */}
                                    <div className="w-full md:w-[calc(50%-40px)] ml-12 md:ml-0 bg-white p-6 rounded-[20px] shadow-sm border border-light-grey relative">
                                        {/* Arrow (CSS triangle) */}
                                        <div className={`hidden md:block absolute top-6 w-4 h-4 bg-white border-b border-l border-light-grey transform rotate-45 ${isLeft ? '-right-[9px] border-r-0 border-t-0 bg-transparent' /* actually complex to do arrows with border, skipping for simplicity */ : '-left-[9px]'}`} />

                                        <span className="inline-block px-3 py-1 bg-soft-peach text-deep-green text-xs font-bold uppercase rounded-full mb-3">
                                            {event.year}
                                        </span>
                                        <h3 className="text-xl font-bold text-deep-green mb-2">{event.title}</h3>
                                        <p className="text-slate">{event.description}</p>
                                    </div>

                                    {/* Spacer for Left side if needed */}
                                    <div className={`hidden md:block flex-1 ${!isLeft ? '' : ''}`} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
