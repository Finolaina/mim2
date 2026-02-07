"use client";

import React from "react";
import { Container } from "@/components/layout/Base";
import { SplitText } from "@/components/effects/SplitText";
import { MagnetButton } from "@/components/ui/magnet-button";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ShieldCheck, Clock, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
            {/* Ambient Glows */}
            <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-[-5%] w-[600px] h-[600px] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

            <Container className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left Content */}
                <div className="space-y-8 relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-accent">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        Disponibles en Madrid y alrededores
                    </div>

                    <div className="space-y-4">
                        <SplitText
                            text="Soluciones integrales para comunidades y empresas"
                            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-foreground"
                            delay={0.1}
                        />
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-xl text-muted-foreground/90 max-w-lg leading-relaxed"
                        >
                            Profesionales homologados en instalación, reparación y mantenimiento.
                            20 años ofreciendo el mejor servicio técnico.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="flex flex-wrap gap-x-8 gap-y-3"
                    >
                        {[
                            { icon: Clock, text: "Respuesta Rápida" },
                            { icon: ShieldCheck, text: "Homologados" },
                            { icon: PenTool, text: "Mantenimiento Integral" },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                                <item.icon className="w-5 h-5 text-primary" />
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4"
                    >
                        <MagnetButton className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg rounded-full">
                            Pedir Presupuesto
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </MagnetButton>

                        <div className="flex flex-col">
                            <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Urgencias / Consultas</span>
                            <a href="tel:+34912000002" className="text-lg font-bold text-foreground hover:text-accent transition-colors flex items-center gap-2">
                                +34 912 000 002
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Right Content - Premium Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="relative h-[500px] w-full hidden lg:block"
                >
                    {/* Main Visual Container */}
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-card/30 backdrop-blur-sm shadow-2xl group">
                        {/* Glow Effect behind the image */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

                        {/* Placeholder for "Service Collage" */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Abstract Grid / UI elements representation */}
                            <div className="relative w-[300px] h-[400px] rotate-[-6deg] bg-black/40 rounded-xl border border-white/10 shadow-2xl transition-transform duration-500 group-hover:rotate-0 z-10 p-4">
                                <div className="w-full h-32 bg-white/5 rounded-lg mb-4 animate-pulse" />
                                <div className="w-3/4 h-4 bg-white/10 rounded mb-2" />
                                <div className="w-1/2 h-4 bg-white/10 rounded mb-6" />

                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                        <ShieldCheck className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="w-full h-3 bg-white/10 rounded mb-2" />
                                        <div className="w-5/6 h-3 bg-white/10 rounded" />
                                    </div>
                                </div>
                            </div>

                            <div className="absolute w-[280px] h-[360px] rotate-[12deg] bg-zinc-900/80 rounded-xl border border-white/5 -z-0 translate-x-20 translate-y-10 group-hover:translate-x-12 group-hover:translate-y-6 transition-all duration-500 p-4 backdrop-blur-md">
                                <div className="w-full h-full flex flex-col justify-between opacity-50">
                                    <div className="w-12 h-12 rounded-full bg-accent/20" />
                                    <div className="space-y-2">
                                        <div className="w-full h-2 bg-white/10 rounded" />
                                        <div className="w-full h-2 bg-white/10 rounded" />
                                        <div className="w-2/3 h-2 bg-white/10 rounded" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute bottom-10 left-10 py-3 px-5 bg-background/80 backdrop-blur-md border border-primary/30 rounded-lg shadow-lg shadow-primary/10 z-20 flex items-center gap-3"
                        >
                            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                            <div>
                                <p className="text-xs text-muted-foreground font-semibold">Estado del servicio</p>
                                <p className="text-sm font-bold text-primary">Operativo 100%</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};
