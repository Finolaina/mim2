"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface MagnetButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    strength?: number; // How strong the pull is
}

export const MagnetButton: React.FC<MagnetButtonProps> = ({
    children,
    className,
    strength = 30, // default strength
    onClick,
    ...props
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current!.getBoundingClientRect();

        // Calculate center relative to viewport
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        // Distance from center
        const dist = { x: clientX - centerX, y: clientY - centerY };

        setPosition({ x: dist.x / strength, y: dist.y / strength });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="inline-block"
        >
            <Button
                className={cn(
                    "relative overflow-hidden transition-all duration-300 transform font-semibold",
                    className
                )}
                onClick={onClick}
                {...props}
            >
                <span className="relative z-10">{children}</span>
            </Button>
        </motion.div>
    );
};
