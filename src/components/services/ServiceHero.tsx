"use client";
import React from "react";
import { Container } from "@/components/layout/Base";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceHeroProps {
    title: string;
    description: string;
    category: string;
    icon: LucideIcon;
    color: string;
}

export const ServiceHero = ({ title, description, category, icon: Icon, color }: ServiceHeroProps) => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/10 min-h-[60vh] flex items-center">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0a] to-black" />

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.2, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-0 right-0 w-[80%] h-[800px] blur-[120px] rounded-full pointer-events-none"
                style={{ background: color }}
            />

            <Container className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium mb-6 backdrop-blur-md"
                        style={{ color: color, borderColor: `${color}33` }}
                    >
                        <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: color }} />
                        {category}
                    </div>

                    <h1 className="text-4xl lg:text-7xl font-bold mb-6 tracking-tight">
                        {title.split(" ").map((word, i) => (
                            <span key={i} className="inline-block mr-3">
                                {word}
                            </span>
                        ))}
                    </h1>

                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Button size="lg" className="rounded-full text-lg h-12 px-8 bg-white text-black hover:bg-white/90 transition-all hover:scale-105">
                            Pedir Presupuesto
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full text-lg h-12 px-8 border-white/10 hover:bg-white/5">
                            <Phone className="mr-2 w-5 h-5" />
                            912 000 002
                        </Button>
                    </div>
                </motion.div>

                {/* Visual Icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="flex justify-center lg:justify-end"
                >
                    <div className="relative w-[300px] h-[300px] lg:w-[450px] lg:h-[450px]">
                        {/* Glass Container */}
                        <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-xl shadow-2xl flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-noise opacity-10" />
                            <Icon
                                className="w-1/2 h-1/2 drop-shadow-[0_0_60px_rgba(255,255,255,0.3)] relative z-10"
                                style={{ color: color }}
                            />
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 bg-card/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="text-2xl">⭐️</div>
                                <div>
                                    <div className="font-bold">Top Quality</div>
                                    <div className="text-xs text-muted-foreground">Certified Tech</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-6 -left-6 bg-card/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl flex items-center gap-3"
                        >
                            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                            <span className="font-bold text-sm">Disponible <br />en tu zona</span>
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};
