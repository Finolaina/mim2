"use client";

import React from "react";
import Link from "next/link";
import { Container, Section } from "@/components/layout/Base";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ArrowRight, Sun, Video, Key, DoorOpen, Zap, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
    {
        icon: Sun,
        title: "Placas Solares",
        desc: "Instalación llaves en mano y gestión de subvenciones.",
        slug: "placas-solares",
        color: "#fbbf24", // Amber
    },
    {
        icon: Video,
        title: "CCTV y Videovigilancia",
        desc: "Monitorización 24/7 con acceso remoto seguro.",
        slug: "cctv",
        color: "#2EE6A6", // Brand
    },
    {
        icon: Key,
        title: "Control de Accesos",
        desc: "RFID, biometría y lectura de matrículas.",
        slug: "control-accesos",
        color: "#22d3ee", // Cyan
    },
    {
        icon: DoorOpen,
        title: "Automatismos",
        desc: "Puertas de garaje y barreras automáticas.",
        slug: "automatismos",
        color: "#818cf8", // Indigo
    },
    {
        icon: Zap,
        title: "Electricidad",
        desc: "Mantenimiento media y baja tensión.",
        slug: "electricidad",
        color: "#f472b6", // Pink
    },
    {
        icon: Radio,
        title: "Antenización",
        desc: "Televisión TDT y parabólicas comunitarias.",
        slug: "antenizacion",
        color: "#a78bfa", // Purple
    },
];

export const FeaturedServices: React.FC = () => {
    return (
        <Section className="py-24">
            <Container className="space-y-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Servicios Destacados</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            Cubrimos todas las necesidades técnicas de tu comunidad o empresa con personal propio homologado.
                        </p>
                    </div>
                    <Button variant="outline" className="group" asChild>
                        <Link href="/servicios">
                            Ver todos los servicios
                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <Link key={idx} href={`/servicios/${service.slug}`} className="block h-full">
                            <SpotlightCard className="h-full p-8 group hover:border-primary/50" spotlightColor={service.color + "40"}>
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                                    style={{ backgroundColor: service.color + "20" }}
                                >
                                    <service.icon className="w-7 h-7" style={{ color: service.color }} />
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-muted-foreground mb-6">
                                    {service.desc}
                                </p>

                                <div className="flex items-center text-sm font-semibold text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                    Más información <ArrowRight className="ml-2 w-4 h-4" />
                                </div>
                            </SpotlightCard>
                        </Link>
                    ))}
                </div>
            </Container>
        </Section>
    );
};
