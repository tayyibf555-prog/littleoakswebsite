import { MosqueHero } from "@/components/sections/mosques/Hero";
import { MosquePain } from "@/components/sections/mosques/Pain";
import { MosqueSolution } from "@/components/sections/mosques/Solution";
import { InstitutionalRenewal } from "@/components/sections/InstitutionalRenewal";
import { Testimonials } from "@/components/sections/Testimonials";
import { IncomePreview } from "@/components/sections/IncomePreview";
import { BookConsultation } from "@/components/sections/BookConsultation";
import { FAQ } from "@/components/sections/FAQ";

export default function MosquePathwayPage() {
    return (
        <>
            <MosqueHero />
            <MosquePain />
            <MosqueSolution />
            <InstitutionalRenewal />
            <div id="calculator">
                <IncomePreview />
            </div>
            <Testimonials />
            <BookConsultation />
            <FAQ />
        </>
    );
}
