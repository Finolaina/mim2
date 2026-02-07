"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollFloatProps {
    children: React.ReactNode;
    className?: string;
    offset?: number; // How much it floats
    direction?: "up" | "down";
}

export const ScrollFloat: React.FC<ScrollFloatProps> = ({
    children,
    className,
    offset = 50,
    direction = "up",
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(
        scrollYProgress,
        [0, 1],
        direction === "up" ? [offset, -offset] : [-offset, offset]
    );

    return (
        <motion.div ref={ref} style={{ y }} className={cn(className)}>
            {children}
        </motion.div>
    );
};
