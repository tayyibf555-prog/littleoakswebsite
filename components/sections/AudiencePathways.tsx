'use client';

import { Card } from "@/components/ui/Card";
import { Mosque, HouseLine, Buildings, BookOpen, ArrowRight } from "@phosphor-icons/react"; // Using Phosphor icons
import Link from "next/link";
import { WavyDivider } from "@/components/ui/WavyDivider";

const pathways = [
    {
        title: "Mosques & Islamic Centres",
        description: "Generate sustainable rental income, engage families throughout the week, and secure the mosque's presence within the daily lives of the next generation.",
        icon: Mosque,
        href: "/pathways/mosques",
        color: "#FDDEC0", // Soft Peach
        iconBg: "bg-soft-peach",
    },
    {
        title: "Individual Childminders",
        description: "Build a regulated, government-supported childcare practice. Work from your own home, serve your community, and establish genuine financial independence.",
        icon: HouseLine,
        href: "/pathways/childminders",
        color: "#D6EAF0", // Cloud Blue
        iconBg: "bg-cloud-blue",
    },
    {
        title: "Commercial CWDP",
        description: "Create stable, long-term regulated childcare tenancies within commercial and community premises.",
        icon: Buildings,
        href: "/pathways/commercial",
        color: "#E8DFF0", // Lavender Mist (approx)
        iconBg: "bg-lavender-mist",
    },
    {
        title: "Islamic Scholars & Educators",
        description: "Transform your knowledge, your trust, and your community standing into a regulated, financially independent career pathway.",
        icon: BookOpen,
        href: "/pathways/scholars",
        color: "#A8C5A0", // Sage
        iconBg: "bg-sage",
    },
];

export function AudiencePathways() {
    return (
        <section className="bg-warm-white pb-24 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-honey-gold font-accent font-semibold tracking-wider uppercase mb-4 block">
                        Your Pathway
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-deep-green">
                        Who We Serve
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {pathways.map((pathway) => (
                        <Link key={pathway.title} href={pathway.href} className="block group">
                            <Card
                                variant="pathway"
                                pathwayColor={pathway.color}
                                className="h-full hover:scale-[1.01] transition-transform"
                            >
                                <div className="flex items-start gap-6">
                                    <div className={`w-16 h-16 rounded-full ${pathway.iconBg} flex items-center justify-center shrink-0 text-deep-green`}>
                                        <pathway.icon size={32} weight="duotone" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-deep-green mb-3 flex items-center gap-2">
                                            {pathway.title}
                                            <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity text-soft-forest" />
                                        </h3>
                                        <p className="text-slate leading-relaxed mb-4">
                                            {pathway.description}
                                        </p>
                                        <span className="text-soft-forest font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                            Explore Pathway <ArrowRight size={16} />
                                        </span>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Divider to next section (Warm White -> Cloud Blue) */}
            <div className="absolute bottom-0 left-0 w-full text-cloud-blue">
                <WavyDivider color="#D6EAF0" />
            </div>
        </section>
    );
}
