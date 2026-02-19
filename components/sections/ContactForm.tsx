'use client';

import { Button } from "@/components/ui/Button";
import { Envelope, Phone, MapPin } from "@phosphor-icons/react";

export function ContactForm() {
    return (
        <section className="bg-warm-white py-24 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-honey-gold font-accent font-semibold tracking-wider uppercase mb-4 block">
                        Get in Touch
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-deep-green mb-6">
                        Start the Conversation
                    </h1>
                    <p className="text-lg text-slate max-w-2xl mx-auto">
                        Whether you are a trustee, a potential childminder, or a commercial partner, we are here to map your pathway.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Form */}
                    <div className="bg-white p-8 md:p-10 rounded-[24px] shadow-sm border border-light-grey">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-deep-green font-bold mb-2">Name</label>
                                <input type="text" className="w-full h-12 px-4 rounded-xl bg-warm-white border border-light-grey focus:outline-none focus:border-honey-gold transition-colors" placeholder="Your full name" />
                            </div>
                            <div>
                                <label className="block text-deep-green font-bold mb-2">Email</label>
                                <input type="email" className="w-full h-12 px-4 rounded-xl bg-warm-white border border-light-grey focus:outline-none focus:border-honey-gold transition-colors" placeholder="name@example.com" />
                            </div>
                            <div>
                                <label className="block text-deep-green font-bold mb-2">I am a...</label>
                                <select className="w-full h-12 px-4 rounded-xl bg-warm-white border border-light-grey focus:outline-none focus:border-honey-gold transition-colors text-charcoal">
                                    <option>Mosque Trustee / Committee Member</option>
                                    <option>Individual Childminder</option>
                                    <option>Islamic Scholar / Educator</option>
                                    <option>Commercial Property Owner</option>
                                    <option>Parent</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-deep-green font-bold mb-2">Message</label>
                                <textarea className="w-full h-32 p-4 rounded-xl bg-warm-white border border-light-grey focus:outline-none focus:border-honey-gold transition-colors resize-none" placeholder="How can we help you?" />
                            </div>
                            <Button className="w-full text-lg">Send Message</Button>
                        </form>
                    </div>

                    {/* Info */}
                    <div className="flex flex-col justify-center space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold text-deep-green mb-6">Contact Information</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-deep-green/5 rounded-full flex items-center justify-center shrink-0">
                                        <Envelope size={24} className="text-deep-green" />
                                    </div>
                                    <div>
                                        <span className="block font-bold text-deep-green">Email</span>
                                        <a href="mailto:hello@littleoaks.co.uk" className="text-slate hover:text-honey-gold transition-colors">hello@littleoaks.co.uk</a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-deep-green/5 rounded-full flex items-center justify-center shrink-0">
                                        <Phone size={24} className="text-deep-green" />
                                    </div>
                                    <div>
                                        <span className="block font-bold text-deep-green">Phone</span>
                                        <span className="text-slate">020 1234 5678</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-deep-green/5 rounded-full flex items-center justify-center shrink-0">
                                        <MapPin size={24} className="text-deep-green" />
                                    </div>
                                    <div>
                                        <span className="block font-bold text-deep-green">Head Office</span>
                                        <span className="text-slate block">123 Example Street</span>
                                        <span className="text-slate block">London, UK</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-honey-gold/10 p-8 rounded-[24px] border border-honey-gold/20">
                            <h3 className="text-xl font-bold text-deep-green mb-4">Strategic Consultation</h3>
                            <p className="text-slate mb-6">
                                For mosque committees and large organizations, we recommend booking a direct call with our strategic team.
                            </p>
                            {/* <Button variant="secondary" className="w-full bg-white">Book a Call</Button> */}
                            <div className="mt-4">
                                <iframe
                                    src="https://calendly.com/little-oaks-demo/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                                    width="100%"
                                    height="400px"
                                    frameBorder="0"
                                    title="Select a Date & Time - Calendly"
                                    className="rounded-xl border border-light-grey bg-white"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
