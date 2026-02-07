"use client";

import React from "react";
import { Container, Section } from "@/components/layout/Base";
import { InfiniteMarquee } from "@/components/effects/InfiniteMarquee";
import { CountUp } from "@/components/effects/CountUp";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        text: "Llevamos más de 5 años trabajando con MIM en todas nuestras comunidades. La respuesta ante urgencias es inmediata.",
        author: "María G.",
        role: "Administradora de Fincas",
    },
    {
        text: "Nos solucionaron un problema de antenas que nadie más detectaba. Muy profesionales y limpios trabajando.",
        author: "Pedro R.",
        role: "Presidente Comunidad",
    },
    {
        text: "Instalaron las cámaras de seguridad y el control de accesos. Todo funciona perfecto desde el móvil.",
        author: "Laura M.",
        role: "Gerente Empresa Logística",
    },
    {
        text: "El mantenimiento preventivo nos ha ahorrado mucho dinero en reparaciones de puertas de garaje.",
        author: "Carlos D.",
        role: "Administrador de Fincas",
    },
];

const stats = [
    { value: 20, label: "Años de Experiencia", suffix: "+" },
    { value: 500, label: "Comunidades Gestionadas", suffix: "+" },
    { value: 24, label: "Atención Urgencias", suffix: "h" },
];

export const SocialProofSection: React.FC = () => {
    return (
        <Section className="bg-background border-y border-white/5 relative">
            <div className="absolute inset-0 bg-primary/5 blur-[100px] pointer-events-none" />

            <Container className="grid lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left: Stats & Authority */}
                <div className="space-y-12">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                        La confianza se construye con <span className="text-primary">hechos</span>.
                    </h2>

                    <div className="grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="space-y-2">
                                <CountUp
                                    to={stat.value}
                                    suffix={stat.suffix}
                                    className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50"
                                    delay={0.2 * idx}
                                />
                                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Infinite Marquee of Testimonials */}
                <div className="relative">
                    {/* Visual gradient edges are handled by Marquee mask-image but adding extra softness here */}
                    <div className="relative">
                        <InfiniteMarquee speed="slow" direction="left">
                            {testimonials.map((t, i) => (
                                <div key={i} className="w-[350px] p-6 rounded-xl bg-card/40 backdrop-blur-md border border-white/10 hover:border-primary/30 transition-all duration-300">
                                    <Quote className="w-8 h-8 text-primary/20 mb-4" />
                                    <p className="text-foreground/90 leading-relaxed mb-6">"{t.text}"</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-background font-bold">
                                            {t.author.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-foreground">{t.author}</p>
                                            <p className="text-xs text-muted-foreground">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </InfiniteMarquee>

                        <div className="mt-8 flex justify-center gap-1">
                            {[1, 2, 3, 4, 5].map(i => (
                                <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                            ))}
                            <span className="ml-2 text-sm font-medium text-foreground">4.9/5 Valoración Media</span>
                        </div>
                    </div>
                </div>

            </Container>
        </Section>
    );
};
