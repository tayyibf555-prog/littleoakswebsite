import { CommercialHero } from "@/components/sections/commercial/Hero";
import { CommercialContent } from "@/components/sections/commercial/Content";
import { BookConsultation } from "@/components/sections/BookConsultation";
import { FAQ } from "@/components/sections/FAQ";

export default function CommercialPathwayPage() {
    return (
        <>
            <CommercialHero />
            <CommercialContent />
            <BookConsultation />
            <FAQ />
        </>
    );
}
