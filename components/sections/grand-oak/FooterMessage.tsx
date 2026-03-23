import { FadeIn } from "@/components/ui/FadeIn";

export function FooterMessage() {
    return (
        <section className="bg-deep-green py-24 text-center relative overflow-hidden text-white">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <FadeIn>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold font-display mb-8 leading-tight">
                            A space for children to grow with confidence and belonging
                        </h2>
                        <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto font-medium">
                            Grand Oak Sheffield is being developed to support children and families through care, structure and community — creating an environment where children feel happy, safe and inspired every day.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
