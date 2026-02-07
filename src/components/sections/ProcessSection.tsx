"use client";

import React, { useRef } from "react";
import { Container, Section } from "@/components/layout/Base";
import { ScrollFloat } from "@/components/effects/ScrollFloat";
import { SplitText } from "@/components/effects/SplitText";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, FileText, Hammer, Headset, CheckCircle } from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "1. Inspección Técnica",
        desc: "Visitamos las instalaciones para evaluar necesidades reales y detectar vulnerabilidades.",
    },
    {
        icon: FileText,
        title: "2. Propuesta a Medida",
        desc: "Diseñamos un plan técnico adaptado a normativa y presupuesto, sin costes ocultos.",
    },
    {
        icon: Hammer,
        title: "3. Instalación Certificada",
        desc: "Ejecución por equipo propio homologado, cumpliendo plazos y limpieza.",
    },
    {
        icon: Headset,
        title: "4. Mantenimiento y Soporte",
        desc: "Atención prioritaria y mantenimiento preventivo para evitar futuras averías.",
    },
];

export const ProcessSection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    // Beam animation logic
    const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <Section className="bg-background relative overflow-hidden">
            {/* Background Decorative Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <Container className="relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wider uppercase mb-4">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Método de Trabajo
                    </div>
                    <SplitText
                        text="Cómo garantizamos tu tranquilidad"
                        className="text-3xl md:text-5xl font-bold justify-center"
                        delay={0.1}
                    />
                    <p className="mt-4 text-muted-foreground text-lg">
                        Un proceso auditado y transparente, desde la primera visita hasta el mantenimiento post-venta.
                    </p>
                </div>

                <div ref={containerRef} className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Interactive Diagram (Option A) */}
                    <div className="relative hidden lg:block h-full min-h-[500px]">
                        {/* The Beam Path */}
                        <svg
                            className="absolute left-[30px] top-0 bottom-0 h-full w-20 overflow-visible"
                            viewBox="0 0 50 600"
                            fill="none"
                            preserveAspectRatio="none"
                        >
                            <motion.path
                                d="M 25 0 V 600"
                                stroke="url(#gradient-beam)"
                                strokeWidth="4"
                                strokeLinecap="round"
                                style={{ pathLength, opacity }}
                            />
                            <defs>
                                <linearGradient id="gradient-beam" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#2EE6A6" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#2EE6A6" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#FFB000" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Connection Points & Floating Cards */}
                        <div className="space-y-12 pl-24 pt-8">
                            {steps.map((step, idx) => (
                                <ScrollFloat key={idx} offset={20 * (idx + 1)} direction="up" className="relative group">
                                    {/* Connection Dot */}
                                    <div className="absolute -left-[66px] top-6 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 group-hover:bg-primary transition-colors duration-300 shadow-[0_0_10px_rgba(46,230,166,0.5)]" />

                                    {/* Card */}
                                    <div className="p-6 rounded-xl bg-card/60 backdrop-blur-md border border-white/5 hover:border-primary/30 transition-all duration-300 shadow-lg">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-secondary/50 rounded-lg text-primary">
                                                <step.icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                                                <p className="text-sm text-muted-foreground">{step.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollFloat>
                            ))}
                        </div>
                    </div>

                    {/* Right: Steps Text & Homologations (Mobile Friendly view essentially, or context) */}
                    <div className="space-y-12 lg:sticky lg:top-24">
                        {/* Mobile view of steps (visible on small screens only) */}
                        <div className="lg:hidden space-y-8">
                            {steps.map((step, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold">{step.title}</h4>
                                        <p className="text-gray-400">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-8 rounded-2xl bg-gradient-to-br from-card to-background border border-border mt-8 lg:mt-0">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <CheckCircle className="text-accent w-6 h-6" />
                                Garantía y Homologaciones
                            </h3>
                            <p className="text-muted-foreground mb-8">
                                Somos una empresa registrada en Industria y cumplimos con todas las normativas vigentes en seguridad y electricidad.
                            </p>

                            {/* Badges Placeholder */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {["Industria", "Telecomunicaciones", "REA", "ISO 9001 (pending)", "Fenyist", "Amiitel"].map((badge, i) => (
                                    <div key={i} className="h-20 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs font-semibold text-center p-2 hover:bg-white/10 transition-colors cursor-default">
                                        {badge}
                                        <br /><span className="text-[10px] text-muted-foreground font-normal">Certificado</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </Section>
    );
};
