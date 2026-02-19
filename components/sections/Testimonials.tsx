'use client';

import { Card } from "@/components/ui/Card";
import { Star } from "@phosphor-icons/react";

const testimonials = [
    {
        quote: "The framework gave our trustees the confidence to proceed. We now have a thriving nursery that serves our community daily.",
        author: "Imam Yusuf",
        role: "Trustee, Birmingham Central Mosque",
        rating: 5,
    },
    {
        quote: "Little Oaks bridged the gap between regulation and our values. The support during onboarding was exceptional.",
        author: "Sarah Ahmed",
        role: "Childminder, Manchester",
        rating: 5,
    },
    {
        quote: "Finally, a career path that respects my background as an Alima while offering genuine professional standing.",
        author: "Fatima K.",
        role: "Educator, London",
        rating: 5,
    },
    {
        quote: "Our community centre is now a hub of activity all week. The rental income has transformed our financial stability.",
        author: "Mr. Ali",
        role: "Chairman, Glasgow Islamic Centre",
        rating: 5,
    }
];

export function Testimonials() {
    return (
        <section className="bg-warm-white py-24 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-deep-green mb-6">
                        What Nurseries Say
                    </h2>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none]">
                    {testimonials.map((t, i) => (
                        <div key={i} className="min-w-[300px] md:min-w-[400px] snap-center">
                            <Card className="bg-sage/10 h-full border-none">
                                <div className="flex gap-1 mb-4 text-honey-gold">
                                    {[...Array(t.rating)].map((_, i) => <Star key={i} weight="fill" size={20} />)}
                                </div>
                                <p className="text-xl font-display italic text-deep-green mb-6 leading-relaxed">
                                    "{t.quote}"
                                </p>
                                <div>
                                    <div className="font-bold text-deep-green">{t.author}</div>
                                    <div className="text-sm text-slate">{t.role}</div>
                                </div>
                            </Card>
                        </div>
                    ))}
                    {/* Spacer for end */}
                    <div className="min-w-[20px]" />
                </div>
            </div>
        </section>
    );
}
