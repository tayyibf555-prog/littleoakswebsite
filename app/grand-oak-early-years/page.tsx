'use client';

import { Button } from "@/components/ui/Button";

import { Intro } from "@/components/sections/grand-oak/Intro";
import { Vision } from "@/components/sections/grand-oak/Vision";
import { AvailableNow } from "@/components/sections/grand-oak/AvailableNow";
import { AfterSchool } from "@/components/sections/grand-oak/AfterSchool";
import { ComingSoon } from "@/components/sections/grand-oak/ComingSoon";
import { WhyChooseUs } from "@/components/sections/grand-oak/WhyChooseUs";
import { RoomHire } from "@/components/sections/grand-oak/RoomHire";
import { RegisterInterest } from "@/components/sections/grand-oak/RegisterInterest";
import { FooterMessage } from "@/components/sections/grand-oak/FooterMessage";

export default function GrandOakEarlyYearsPage() {
    return (
        <main className="flex min-h-screen flex-col">
            {/* Simple Premium Hero */}
            <section className="bg-deep-green relative overflow-hidden py-32 flex items-center min-h-[600px]">
                {/* Background Image */}
                <img
                    src="/grand-oak-hero.png"
                    alt="Grand Oak Early Years Interior"
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-40 z-0"
                />

                <div
                    className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
                        backgroundSize: '32px 32px'
                    }}
                />

                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-honey-gold/20 to-transparent pointer-events-none z-0" />
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-honey-gold/30 rounded-full blur-[100px] pointer-events-none z-0" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-honey-gold/20 text-honey-gold text-sm font-semibold tracking-wider font-accent mb-6 backdrop-blur-sm border border-honey-gold/30">
                            GRAND OAK SHEFFIELD
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-6 leading-tight drop-shadow-md">
                            A nurturing children’s space at the <br className="hidden md:block" />
                            <span className="text-honey-gold">heart of the community</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 font-medium mb-10 max-w-2xl leading-relaxed drop-shadow-sm">
                            Grand Oak Sheffield offers a warm, family-centred environment within Sheffield Grand Mosque, with children’s activities available now and nursery and wraparound provision in development.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="bg-honey-gold text-white hover:bg-white hover:text-deep-green px-8 py-4 text-lg"
                                // @ts-ignore
                                onClick={() => typeof document !== 'undefined' && document.getElementById('register-interest')?.scrollIntoView({ behavior: 'smooth' })}>
                                Register Interest
                            </Button>
                            <Button className="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
                                // @ts-ignore
                                onClick={() => typeof document !== 'undefined' && document.getElementById('register-interest')?.scrollIntoView({ behavior: 'smooth' })}>
                                Enquire Now
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Intro />
            <Vision />
            <AvailableNow />
            <AfterSchool />
            <ComingSoon />
            <WhyChooseUs />
            <RegisterInterest />
            <RoomHire />
            <FooterMessage />

        </main>
    );
}
