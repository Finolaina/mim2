import React from "react";
import { Container, Section } from "@/components/layout/Base";
import { Header } from "@/components/layout/Header";
import { TEAM } from "@/lib/constants";
import { SplitText } from "@/components/effects/SplitText";
import { ShieldCheck, Users, Target } from "lucide-react";

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                {/* Hero */}
                <Section className="pt-32 pb-20">
                    <Container className="text-center max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                            Sobre MIM Sistemas
                        </div>
                        <SplitText
                            text="Ingeniería cercana para problemas complejos"
                            className="text-4xl md:text-6xl font-bold mb-8"
                        />
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Más que instaladores, somos consultores técnicos. Nacimos con la vocación de profesionalizar el sector de las instalaciones en comunidades y empresas, aportando rigor técnico, transparencia y tecnología.
                        </p>
                    </Container>
                </Section>

                {/* Values Grid */}
                <Section className="bg-secondary/5 py-20">
                    <Container>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: ShieldCheck, title: "Rigor Técnico", desc: "No vendemos 'apaños'. Diseñamos soluciones basadas en normativa y cálculos reales." },
                                { icon: Users, title: "Cercanía", desc: "Hablamos tu idioma. Traducimos la complejidad técnica a beneficios claros para el usuario." },
                                { icon: Target, title: "Transparencia", desc: "Presupuestos cerrados. Sin sorpresas ni costes ocultos a mitad de obra." }
                            ].map((val, i) => (
                                <div key={i} className="p-8 rounded-2xl bg-card border border-white/5">
                                    <val.icon className="w-10 h-10 text-primary mb-6" />
                                    <h3 className="text-xl font-bold mb-4">{val.title}</h3>
                                    <p className="text-muted-foreground">{val.desc}</p>
                                </div>
                            ))}
                        </div>
                    </Container>
                </Section>

                {/* Team */}
                <Section className="py-20">
                    <Container>
                        <h2 className="text-3xl font-bold mb-12 text-center">Equipo Directivo</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {TEAM.map((member, i) => (
                                <div key={i} className="group relative overflow-hidden rounded-2xl bg-card border border-white/10">
                                    {/* Image Placeholder - In real world we would use Next/Image */}
                                    <div className="aspect-[3/4] bg-secondary w-full relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                        <div className="absolute bottom-0 left-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                            <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                                            <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                                {member.bio}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Container>
                </Section>
            </main>
        </>
    );
}
