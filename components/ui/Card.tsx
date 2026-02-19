import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "standard" | "feature" | "pathway";
    pathwayColor?: string; // For border accent in pathway cards
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = "standard", pathwayColor, style, ...props }, ref) => {

        // Base styles
        const baseStyles = "rounded-[24px] p-7 transition-all duration-300";

        const variants = {
            standard: "bg-white shadow-md hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-blush-pink transition-all duration-300",
            feature: "bg-warm-white border-2 border-light-grey hover:border-honey-gold hover:shadow-md",
            pathway: "bg-white/60 border-l-4 shadow-sm hover:shadow-md hover:-translate-y-1",
        };

        // If pathway, we handle border color via style or class construction
        // Here we'll assume pathwayColor gives us a hex or we rely on style
        const combinedStyle = variant === 'pathway' && pathwayColor
            ? { ...style, borderLeftColor: pathwayColor, backgroundColor: `${pathwayColor}15` } // 15 = ~8% opacity hex
            : style;

        return (
            <div
                ref={ref}
                className={cn(baseStyles, variants[variant], className)}
                style={combinedStyle}
                {...props}
            />
        );
    }
);
Card.displayName = "Card";

export { Card };
