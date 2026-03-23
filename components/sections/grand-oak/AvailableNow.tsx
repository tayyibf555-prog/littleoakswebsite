import { FadeIn } from "@/components/ui/FadeIn";
import { Baby, UsersThree, Student, CalendarStar, Storefront } from "@phosphor-icons/react";

const services = [
    {
        title: "Mother & Toddler Group",
        description: "A welcoming space for parents, carers and little ones to connect, play and enjoy time together.",
        icon: <Baby size={32} weight="fill" />,
        color: "bg-blue-50 text-blue-600",
    },
    {
        title: "Playgroup Sessions",
        description: "Engaging sessions for young children in a warm, child-friendly environment.",
        icon: <UsersThree size={32} weight="fill" />,
        color: "bg-green-50 text-green-600",
    },
    {
        title: "After-School Classes & Activities",
        description: "Structured sessions for primary-aged children, combining enjoyable activities with learning and positive development.",
        icon: <Student size={32} weight="fill" />,
        color: "bg-purple-50 text-purple-600",
    },
    {
        title: "Weekend Children’s Sessions",
        description: "Purposeful and engaging sessions for children to learn, socialise and build confidence.",
        icon: <CalendarStar size={32} weight="fill" />,
        color: "bg-orange-50 text-orange-600",
    },
    {
        title: "Room Hire",
        description: "Available for children’s birthdays and family-friendly events.",
        icon: <Storefront size={32} weight="fill" />,
        color: "bg-rose-50 text-rose-600",
    }
];

export function AvailableNow() {
    return (
        <section className="bg-warm-white py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <FadeIn>
                        <span className="text-honey-gold font-accent font-semibold tracking-wider uppercase mb-4 block">
                            Services
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold font-display text-deep-green mb-6 leading-tight">
                            Available Now for Families
                        </h2>
                        <p className="text-lg text-slate leading-relaxed">
                            We are beginning with a phased offer designed to serve local families immediately while building toward our full nursery and wraparound model.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <FadeIn key={index} delay={0.1 * index}>
                            <div className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-light-grey/60 h-full flex flex-col group transform hover:-translate-y-1">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${service.color}`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-deep-green mb-4 font-display">
                                    {service.title}
                                </h3>
                                <p className="text-slate flex-grow leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </FadeIn>
                    ))}

                    {/* Placeholder for visual layout balance */}
                    <FadeIn delay={0.6}>
                        <div className="bg-deep-green rounded-[2rem] p-8 shadow-md h-full flex flex-col items-center justify-center text-center relative overflow-hidden group">
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_2px,transparent_2px)] [background-size:16px_16px]"></div>
                            <h3 className="text-2xl font-bold text-white relative z-10 font-display mb-2">More updates coming!</h3>
                            <p className="text-white/80 relative z-10">Expanding our services step by step.</p>
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-honey-gold rounded-full opacity-50 blur-2xl group-hover:opacity-70 transition-opacity"></div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
