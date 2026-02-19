import { FounderBio } from "@/components/sections/FounderBio";
import { VisionQuote } from "@/components/sections/VisionQuote";
import { Timeline } from "@/components/sections/Timeline";
import { AboutHero } from "@/components/sections/AboutHero";

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <FounderBio />
            <VisionQuote />
            <Timeline />
        </>
    );
}
