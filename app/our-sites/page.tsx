import { OurSites } from "@/components/sections/OurSites";
import { BookConsultation } from "@/components/sections/BookConsultation";
import { FAQ } from "@/components/sections/FAQ";
import { FadeIn } from "@/components/ui/FadeIn";

export default function OurSitesPage() {
    return (
        <main className="pt-24 pb-12 flex flex-col min-h-screen">
            <FadeIn>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 mb-8">
                    <span className="inline-block py-1 px-3 rounded-full bg-honey-gold/20 text-honey-gold text-sm font-semibold tracking-wider font-accent mb-4 border border-honey-gold/30 uppercase">
                        Current Locations
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold font-display text-deep-green">
                        Our Operational Sites
                    </h1>
                </div>
            </FadeIn>

            <FadeIn delay={0.1}><OurSites /></FadeIn>
            <FadeIn delay={0.2}><BookConsultation /></FadeIn>
            <FadeIn delay={0.3}><FAQ /></FadeIn>
        </main>
    );
}
