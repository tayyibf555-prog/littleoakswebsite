import { Hero } from "@/components/sections/Hero";
import { WhyItMatters } from "@/components/sections/WhyItMatters";
import { Identity } from "@/components/sections/Identity";
import { WhatIsLittleOaks } from "@/components/sections/WhatIsLittleOaks";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { AudiencePathways } from "@/components/sections/AudiencePathways";
import { RegionalCoverage } from "@/components/sections/RegionalCoverage";
import { IncomePreview } from "@/components/sections/IncomePreview";
import { InstitutionalRenewal } from "@/components/sections/InstitutionalRenewal";
import { Testimonials } from "@/components/sections/Testimonials";
import { BookConsultation } from "@/components/sections/BookConsultation";
import { FAQ } from "@/components/sections/FAQ";
import { FadeIn } from "@/components/ui/FadeIn";
import { OurSites } from "@/components/sections/OurSites";

export default function Home() {
  return (
    <>
      <Hero />
      <FadeIn delay={0.2}><WhyItMatters /></FadeIn>
      <FadeIn><Identity /></FadeIn>
      <FadeIn><WhatIsLittleOaks /></FadeIn>
      <HowItWorks />
      <FadeIn><AudiencePathways /></FadeIn>
      <FadeIn><RegionalCoverage /></FadeIn>
      <FadeIn><IncomePreview /></FadeIn>
      <FadeIn><InstitutionalRenewal /></FadeIn>
      <FadeIn><Testimonials /></FadeIn>
      <FadeIn><OurSites /></FadeIn>
      <FadeIn><BookConsultation /></FadeIn>
      <FadeIn><FAQ /></FadeIn>
    </>
  );
}
