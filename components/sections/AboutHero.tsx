'use client';

export function AboutHero() {
    return (
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-charcoal">
            {/* Background Image */}
            <div className="absolute inset-0 bg-deep-green">
                <img src="/placeholders/about_hero.png" alt="About us background" className="w-full h-full object-cover opacity-60" />
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
