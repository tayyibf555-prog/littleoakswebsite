import { ChildminderHero } from "@/components/sections/childminders/Hero";
import { ChildminderPain } from "@/components/sections/childminders/Pain";
import { ChildminderSolution } from "@/components/sections/childminders/Solution";
import { IncomeCalculator } from "@/components/features/IncomeCalculator";
import { Testimonials } from "@/components/sections/Testimonials";
import { BookConsultation } from "@/components/sections/BookConsultation";
import { FAQ } from "@/components/sections/FAQ";

export default function ChildminderPathwayPage() {
    return (
        <>
            <ChildminderHero />
            <ChildminderPain />
            <ChildminderSolution />
            <IncomeCalculator />
            <Testimonials />
            <BookConsultation />
            <FAQ />
        </>
    );
}
