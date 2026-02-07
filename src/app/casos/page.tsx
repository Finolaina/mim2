import React from "react";
import { Container, Section } from "@/components/layout/Base";
import { Header } from "@/components/layout/Header";
import { CASES } from "@/lib/constants";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ArrowRight, TrendingUp, Zap, Shield } from "lucide-react";
import Link from "next/link";

export default function CasesPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-32 pb-20">
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Casos de Éxito</h1>
                        <p className="text-xl text-muted-foreground">
                            Resultados reales. Descubre cómo hemos ayudado a otras comunidades y empresas a modernizar sus instalaciones.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {CASES.map((project, i) => (
                            <SpotlightCard key={i} className="p-0 overflow-hidden flex flex-col h-full group border-white/10">
                                {/* Image Placeholder */}
                                <div className="h-48 bg-secondary/30 relative">
                                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-xs font-bold text-white">
                                        {project.category}
                                    </div>
                                </div>

                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-6 flex-1">
                                        {project.desc}
                                    </p>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-white/5 mb-6">
                                        {Object.entries(project.stats).map(([key, val], idx) => (
                                            <div key={idx}>
                                                <div className="text-lg font-bold text-foreground">{val}</div>
                                                <div className="text-xs text-muted-foreground capitalize">{key}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="flex items-center text-sm font-bold text-primary">
                                        Ver Caso Completo <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </button>
                                </div>
                            </SpotlightCard>
                        ))}
                    </div>
                </Container>
            </main>
        </>
    );
}
