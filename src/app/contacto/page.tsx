"use client";

import React from "react";
import { Container, Section } from "@/components/layout/Base";
import { Header } from "@/components/layout/Header";
import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-32 pb-20 relative overflow-hidden">

                <Container className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                    {/* Left: Contact Info & Map Visualization */}
                    <div className="space-y-12">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contacta con nosotros</h1>
                            <p className="text-xl text-muted-foreground">
                                ¿Tienes un proyecto en mente? Estamos aquí para ayudarte a hacerlo realidad.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-white/5">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Teléfono 24h</p>
                                    <p className="text-lg font-bold">912 000 002</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-white/5">
                                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Email</p>
                                    <p className="text-lg font-bold">info@mimsistemas.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-white/5">
                                <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center text-white">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Oficinas Centrales</p>
                                    <p className="text-lg font-bold">C/ Ejemplo 123, Madrid</p>
                                </div>
                            </div>
                        </div>

                        {/* Abstract Stylized Map Visualization */}
                        <div className="relative h-[300px] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#0f1218] group">
                            {/* Grid Pattern */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

                            {/* Radar/Pulse Effect at "Location" */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="relative">
                                    <motion.div
                                        animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="absolute inset-0 bg-primary/30 rounded-full"
                                    />
                                    <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_#2EE6A6]" />
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute bottom-4 left-4 text-xs font-mono text-primary/60">
                                LAT: 40.4168 N <br /> NG: 3.7038 W
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div>
                        <ContactForm />
                    </div>
                </Container>
            </main>
        </>
    );
}
