'use client';

export function CalendlyEmbed() {
    return (
        <div className="w-full h-[600px] bg-warm-white rounded-[24px] overflow-hidden border border-light-grey">
            <iframe
                src="https://calendly.com/little-oaks-demo/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Select a Date & Time - Calendly"
            ></iframe>
        </div>
    );
}
