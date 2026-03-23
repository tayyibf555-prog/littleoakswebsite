import { FadeIn } from "@/components/ui/FadeIn";
import { Confetti } from "@phosphor-icons/react";
import Link from "next/link";

export function RoomHire() {
    return (
        <section className="bg-honey-gold py-16 text-deep-green relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#1B5E3B_1px,transparent_1px)] [background-size:24px_24px]"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <FadeIn>
                    <div className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-3xl max-w-4xl mx-auto shadow-lg border border-white/50">
                        <div className="flex justify-center mb-6">
                            <div className="bg-deep-green/10 p-4 rounded-full text-deep-green">
                                <Confetti size={40} weight="fill" />
                            </div>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                            Room Hire for Birthdays & Events
                        </h2>
                        <p className="text-lg text-slate max-w-2xl mx-auto mb-8">
                            Our spaces are available for children’s birthday parties and family-friendly events within a welcoming community setting.
                        </p>
                        <Link href="/grand-oak-early-years/party-room" className="inline-block bg-deep-green text-white px-8 py-3 rounded-xl font-bold hover:bg-slate hover:shadow-lg transition-all transform hover:-translate-y-1">
                            Enquire About Room Hire
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
