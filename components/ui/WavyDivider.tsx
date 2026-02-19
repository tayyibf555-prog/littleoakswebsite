'use client';

import { cn } from "@/lib/utils";

interface WavyDividerProps {
    color?: string; // Hex code or tailwind class if implementing fill differently
    className?: string;
    position?: "top" | "bottom";
}

export function WavyDivider({ color = "#FBF8F3", className, position = "bottom" }: WavyDividerProps) {
    // Simple wave shape
    return (
        <div className={cn("w-full overflow-hidden leading-none rotate-180", className)}>
            <svg
                className="relative block w-[calc(100%+1.3px)] h-[60px]"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                style={{ transform: position === 'top' ? 'rotate(180deg)' : 'none' }}
            >
                <path
                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                    fill={color}
                />
            </svg>
        </div>
    );
}

// Alternative cleaner wave if needed
// d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
