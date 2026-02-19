import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "accent" | "tag" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const variants = {
            primary: "bg-soft-forest text-white hover:bg-deep-green shadow-btn hover:shadow-lg hover:-translate-y-0.5",
            secondary: "bg-transparent border-2 border-soft-forest text-soft-forest hover:bg-soft-forest hover:text-white",
            accent: "bg-terracotta text-white shadow-btn hover:bg-[#C06A4F] hover:shadow-lg hover:-translate-y-0.5",
            tag: "bg-warm-white border-1.5 border-light-grey text-slate font-medium hover:bg-soft-peach text-[13px]",
            ghost: "bg-transparent text-charcoal hover:bg-fluff-50", // minimal hover
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-8 py-3.5 text-base",
            lg: "px-9 py-4 text-lg",
        };

        // Tag size override if variant is tag
        const sizeClasses = variant === 'tag' ? "px-4 py-2" : sizes[size];

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none",
                    variants[variant],
                    sizeClasses,
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
