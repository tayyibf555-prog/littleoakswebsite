import { ScholarsHero } from "@/components/sections/scholars/Hero";
import { ScholarsContent } from "@/components/sections/scholars/Content";
import { BookConsultation } from "@/components/sections/BookConsultation";
import { FAQ } from "@/components/sections/FAQ";

export default function ScholarsPathwayPage() {
    return (
        <>
            <ScholarsHero />
            <ScholarsContent />
            <BookConsultation />
            <FAQ />
        </>
    );
}
