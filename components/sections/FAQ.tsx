'use client';

import { Accordion } from "@/components/ui/Accordion";
import { WavyDivider } from "@/components/ui/WavyDivider";

const faqs = [
    {
        question: "Do I need to be a registered charity to partner with Little Oaks?",
        answer: "No. We work with registered charities, CICs, and private commercial entities. The regulatory framework adapts to your structure.",
    },
    {
        question: "Does the mosque hold the Ofsted registration?",
        answer: "No. The Ofsted registration is held by the Childminding Agency or the individual provider. The mosque acts as the landlord and strategic partner, minimising liability.",
    },
    {
        question: "How much space do we need?",
        answer: "A single room can be sufficient for a start-up provision. We conduct a full feasibility study to determine the capacity of your specific premises.",
    },
    {
        question: "Can we hire our own community members?",
        answer: "Absolutely. One of our core goals is to create employment pathways within the community. We support the training and registration of local candidates."
    }
];

export function FAQ() {
    return (
        <section className="bg-warm-white py-24 relative">
            {/* Divider from Deep Green -> Warm White */}
            <div className="absolute top-0 left-0 w-full text-deep-green">
                <WavyDivider position="bottom" color="#1B5E3B" className="rotate-180" />
                {/* Note: Logic for top divider of THIS section vs bottom of PREV section.
            Prev section BookConsultation is Deep Green. 
            So we need a transition. 
            If BookConsultation has overflow hidden, we can put it there or here. 
            Let's put it here as a 'top' divider that is Deep Green color, 
            sitting on top of the Warm White bg?
            Actually, simpler: WavyDivider in BookConsultation bottom with WarmWhite color?
            Let's allow BookConsultation to handle its bottom edge if we want.
            Or here:
            We want Deep Green wave on top of Warm White.
        */}
            </div>
            {/* Wait, standard approach: WavyDivider takes 'color' matching the section it sits IN, or the section NEXT. 
          If placed at TOP of FAQ (Warm White), it should shape the boundary.
          Actually, let's let BookConsulation handle it? 
          BookConsultation (Deep Green) -> FAQ (Warm White).
          So BookConsultation needs a bottom divider of color Warm White.
      */}

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-deep-green mb-6">
                        Common Questions
                    </h2>
                </div>

                <Accordion items={faqs} />
            </div>
        </section>
    );
}
