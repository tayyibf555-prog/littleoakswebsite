import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { Testimonials } from "@/components/sections/Testimonials";
import { BookConsultation } from "@/components/sections/BookConsultation";
import { FAQ } from "@/components/sections/FAQ";

export default function ScotlandRegionPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <section className="bg-deep-green relative overflow-hidden py-32 flex items-center min-h-[500px]">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-honey-gold/20 to-transparent pointer-events-none" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-honey-gold/20 text-honey-gold text-sm font-semibold tracking-wider font-accent mb-6 backdrop-blur-sm border border-honey-gold/30 uppercase">
                            Regional Framework
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-6 leading-tight">
                            Explore <span className="text-honey-gold">Scotland</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 font-medium mb-10 max-w-2xl leading-relaxed">
                            Discover our tailored childminding frameworks and community partnerships expanding across Scotland. Join the movement today.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact">
                                <Button className="bg-honey-gold text-white hover:bg-white hover:text-deep-green px-8 py-4 text-lg w-full sm:w-auto">
                                    Contact Regional Team
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-warm-white py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <FadeIn>
                        <h2 className="text-3xl font-bold text-deep-green mb-6 font-display">Scotland Rollout Plan</h2>
                        <p className="text-lg text-slate max-w-2xl mx-auto mb-10">
                            We are currently establishing strategic partnerships with local authorities, mosques, and community centres across Scotland to roll out our premium childcare provision model.
                        </p>
                        <Link href="/contact">
                            <Button variant="secondary" className="px-8 py-3 bg-white hover:bg-honey-gold hover:text-white transition-colors border-none shadow-sm">
                                Register Your Interest
                            </Button>
                        </Link>
                    </FadeIn>
                </div>
            </section>

            <FadeIn delay={0.2}><Testimonials /></FadeIn>
            <FadeIn delay={0.3}><BookConsultation /></FadeIn>
            <FadeIn delay={0.4}><FAQ /></FadeIn>
        </main>
    );
}
