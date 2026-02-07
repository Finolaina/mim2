"use client";

import React, { useState } from "react";
import { Container, Section } from "@/components/layout/Base";
import { Header } from "@/components/layout/Header"; // Import specific components not full layout to avoid dupes if used inside page.tsx
import { SERVICES } from "@/lib/constants";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Get unique categories
const CATEGORIES = ["Todos", ...Array.from(new Set(SERVICES.map(s => s.category)))];

export default function ServicesPage() {
    const [activeCategory, setActiveCategory] = useState("Todos");

    const filteredServices = SERVICES.filter(s =>
        activeCategory === "Todos" ? true : s.category === activeCategory
    );

    return (
        <>
            <Header />
            <main className="pt-32 pb-20 min-h-screen">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Nuestros Servicios</h1>
                        <p className="text-xl text-muted-foreground">
                            Soluciones técnicas integrales con la garantía de una empresa homologada y 20 años de experiencia.
                        </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                                    activeCategory === cat
                                        ? "bg-primary text-primary-foreground border-primary"
                                        : "bg-card border-white/10 text-muted-foreground hover:border-primary/30"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence mode="popLayout">
                            {filteredServices.map((service) => (
                                <motion.div
                                    key={service.slug}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Link href={`/servicios/${service.slug}`} className="block h-full">
                                        <SpotlightCard
                                            className="h-full p-8 group hover:border-primary/50 flex flex-col"
                                            spotlightColor={service.color + "40"}
                                            enableTilt={true}
                                        >
                                            <div
                                                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                                                style={{ backgroundColor: service.color + "20" }}
                                            >
                                                <service.icon className="w-7 h-7" style={{ color: service.color }} />
                                            </div>
                                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                            <p className="text-muted-foreground text-sm mb-6 flex-1">
                                                {service.shortDesc}
                                            </p>
                                            <div className="flex items-center text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform">
                                                Ver detalles <ArrowRight className="ml-2 w-4 h-4" />
                                            </div>
                                        </SpotlightCard>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </Container>
            </main>
        </>
    );
}
