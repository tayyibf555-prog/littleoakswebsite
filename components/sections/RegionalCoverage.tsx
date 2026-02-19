'use client';

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { WavyDivider } from "@/components/ui/WavyDivider";
import { MapTrifold } from "@phosphor-icons/react";

const regions = [
    {
        name: "Scotland",
        description: "Working alongside accredited Scottish consultancies within the Care Inspectorate framework.",
        href: "/regions/scotland",
        imageColor: "bg-cloud-blue/50",
    },
    {
        name: "England",
        description: "The Little Oaks model is a working reality. Regulatory pathway mapped, compliance in place.",
        href: "/regions/england",
        imageColor: "bg-soft-forest/10",
    },
    {
        name: "Wales",
        description: "Aligning regulated childcare with Care Inspectorate Wales. A significant underserved opportunity.",
        href: "/regions/wales",
        imageColor: "bg-terracotta/10",
    },
];

export function RegionalCoverage() {
    return (
        <section className="bg-cloud-blue py-24 relative">
            {/* Divider (Warm White -> Cloud Blue) handled by previous section's bottom divider */}

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-deep-green mb-6">
                        Supporting Nurseries Across the UK
                    </h2>
                    <p className="text-xl text-slate max-w-2xl mx-auto">
                        We provide region-specific frameworks aligned with national regulatory bodies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {regions.map((region) => (
                        <Card key={region.name} className="flex flex-col h-full hover:-translate-y-2">
                            <div className={`h-48 rounded-[16px] mb-6 ${region.imageColor} flex items-center justify-center`}>
                                <MapTrifold size={48} className="text-deep-green opacity-50" />
                                {/* Placeholder for Map Image/Flag */}
                            </div>
                            <h3 className="text-2xl font-bold text-deep-green mb-3">{region.name}</h3>
                            <p className="text-slate mb-8 flex-grow">
                                {region.description}
                            </p>
                            <Link href={region.href} className="w-full">
                                <Button variant="secondary" className="w-full">View Framework</Button>
                            </Link>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Divider to next section (Cloud Blue -> Soft Peach) */}
            <div className="absolute bottom-0 left-0 w-full text-soft-peach">
                <WavyDivider color="#FDDEC0" />
            </div>
        </section>
    );
}
