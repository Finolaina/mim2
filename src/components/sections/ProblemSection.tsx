"use client";

import React from "react";
import { Container, Section } from "@/components/layout/Base";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { SplitText } from "@/components/effects/SplitText";
import { AlertTriangle, ShieldAlert, ZapOff, Fingerprint } from "lucide-react";

const pains = [
    {
        icon: ShieldAlert,
        title: "Vulnerabilidad",
        desc: "Sistemas obsoletos que facilitan el acceso a intrusos.",
    },
    {
        icon: ZapOff,
        title: "Averías Constantes",
        desc: "Interrupciones eléctricas o de automatismos que paralizan tu día.",
    },
    {
        icon: AlertTriangle,
        title: "Mala Gestión",
        desc: "Coordinación lenta entre proveedores y administradores.",
    },
    {
        icon: Fingerprint,
        title: "Control Manual",
        desc: "Dependencia de llaves físicas y registros en papel inseguros.",
    },
];

export const ProblemSection: React.FC = () => {
    return (
        <Section className="bg-secondary/20">
            <Container className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left: Empathy/Problem */}
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 text-destructive font-semibold text-sm tracking-wider uppercase">
                        <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                        El Problema
                    </div>

                    <SplitText
                        text="La seguridad y el confort no pueden esperar"
                        className="text-3xl md:text-5xl font-bold text-foreground leading-tight"
                        delay={0.2}
                    />

                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Sabemos lo frustrante que es lidiar con puertas que no abren,
                        cámaras que no graban o apagones inesperados. En comunidades y empresas,
                        cada minuto de inoperatividad genera desconfianza y costes.
                    </p>

                    <div className="pt-4 border-l-2 border-primary/30 pl-6">
                        <p className="text-foreground font-medium italic">
                            "El 70% de las incidencias graves ocurren por falta de mantenimiento preventivo."
                        </p>
                    </div>
                </div>

                {/* Right: Solutions Grid (Spotlight + Tilt) */}
                <div className="grid sm:grid-cols-2 gap-4">
                    {pains.map((pain, idx) => (
                        <SpotlightCard
                            key={idx}
                            enableTilt={true}
                            className="p-6 bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/50 group"
                        >
                            <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                                <pain.icon className="w-6 h-6 text-destructive group-hover:text-primary transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-bold text-foreground mb-2">{pain.title}</h3>
                            <p className="text-sm text-muted-foreground">{pain.desc}</p>
                        </SpotlightCard>
                    ))}
                </div>
            </Container>
        </Section>
    );
};
