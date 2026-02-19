'use client';

export function AboutHero() {
    return (
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-charcoal">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 bg-gray-800">
                {/* In production: <Image src="..." layout="fill" objectFit="cover" /> */}
                <div className="w-full h-full opacity-50 bg-[url('https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
            </div>

            {/* Full Width Overlay */}
            <div className="absolute inset-0 bg-deep-green/60" />

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <span className="block text-honey-gold font-accent font-semibold tracking-wider uppercase mb-4">
                    Our Story
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                    Built from the Inside. Designed for Permanence.
                </h1>
            </div>
        </section>
    );
}
