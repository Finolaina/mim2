"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const DarkVeil: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 1000], [0.4, 0.1]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let animationFrameId: number;
        let mouseX = width / 2;
        let mouseY = height / 2;
        let targetX = width / 2;
        let targetY = height / 2;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const onMouseMove = (e: MouseEvent) => {
            targetX = e.clientX;
            targetY = e.clientY;
        };

        const render = () => {
            // Smooth mouse follow
            mouseX += (targetX - mouseX) * 0.05;
            mouseY += (targetY - mouseY) * 0.05;

            ctx.clearRect(0, 0, width, height);

            // Create gradient
            // Primary Color: #2EE6A6 (Mint)
            // Accent Color: #FFB000 (Amber)
            // Background is strictly #070A12 handled by CSS
            
            // Draw a subtle primary glow following mouse
            const gradient = ctx.createRadialGradient(
                mouseX, 
                mouseY, 
                0, 
                mouseX, 
                mouseY, 
                600
            );
            
            gradient.addColorStop(0, "rgba(46, 230, 166, 0.04)"); // Very faint center
            gradient.addColorStop(0.4, "rgba(46, 230, 166, 0.01)");
            gradient.addColorStop(1, "transparent");

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            // Add Grain
            // We use a pattern or just random noise if performant, 
            // but for "elegant" maybe just the glow is enough.
            // Let's add very subtle secondary glow for "Accent" warmth at the bottom right or moving
            
            const time = Date.now() * 0.0005;
            const accentX = width * 0.8 + Math.sin(time) * 100;
            const accentY = height * 0.8 + Math.cos(time) * 100;
            
            const accentGrad = ctx.createRadialGradient(accentX, accentY, 0, accentX, accentY, 400);
            accentGrad.addColorStop(0, "rgba(255, 176, 0, 0.03)");
            accentGrad.addColorStop(1, "transparent");
            
            ctx.fillStyle = accentGrad;
            ctx.fillRect(0, 0, width, height);
            
            animationFrameId = requestAnimationFrame(render);
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", onMouseMove);
        
        resize();
        render();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <motion.div 
            style={{ opacity }}
            className="fixed inset-0 z-[-1] pointer-events-none bg-[#070A12]"
        >
             {/* Base dark background is handled by CSS, but we ensure it here just in case */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
            
            {/* Overlay Grid or Noise if needed for extra texture */}
            <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />
        </motion.div>
    );
};
