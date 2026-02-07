"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface InfiniteMarqueeProps {
    children: React.ReactNode;
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}

export const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({
    children,
    direction = "left",
    speed = "normal",
    pauseOnHover = true,
    className,
}) => {
    const speedClass = {
        fast: "duration-[20s]",
        normal: "duration-[40s]",
        slow: "duration-[60s]",
    };

    return (
        <div className={cn("group flex overflow-hidden p-2 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]", className)}>
            <div
                className={cn(
                    "flex shrink-0 gap-4 py-4 pr-4",
                    "animate-scroll-left", // Defined in tailwind extend or we add animation style
                    direction === "right" && "animate-scroll-right",
                    speedClass[speed],
                    pauseOnHover && "group-hover:[animation-play-state:paused]"
                )}
            >
                {children}
                {children} {/* Duplicate for seamless loop */}
            </div>
            <div
                aria-hidden="true"
                className={cn(
                    "flex shrink-0 gap-4 py-4 pr-4",
                    "animate-scroll-left",
                    direction === "right" && "animate-scroll-right",
                    speedClass[speed],
                    pauseOnHover && "group-hover:[animation-play-state:paused]"
                )}
            >
                {children}
                {children}
            </div>
        </div>
    );
};
