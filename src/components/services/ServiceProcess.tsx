"use client";
import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, MessageSquareQuote, Hammer, CheckCircle } from "lucide-react";

export const ServiceProcess = () => {
    const steps = [
        {
            icon: ClipboardList,
            title: "Diagnóstico",
            desc: "Analizamos sus necesidades y la viabilidad técnica sin coste."
        },
        {
            icon: MessageSquareQuote,
            title: "Propuesta",
            desc: "Presupuesto detallado, transparente y sin letra pequeña."
        },
        {
            icon: Hammer,
            title: "Ejecución",
            desc: "Instalación rápida por técnicos certificados y limpieza.",
        },
        {
            icon: CheckCircle,
            title: "Garantía",
            desc: "Entrega de documentación, legalización y soporte post-venta."
        }
    ];

    return (
        <div id="proceso" className="py-12 border-y border-white/5 bg-secondary/5 my-12 rounded-2xl">
            <div className="text-center mb-10">
                <h2 className="text-2xl font-bold">¿Cómo trabajamos?</h2>
                <p className="text-muted-foreground">Proceso transparente en 4 pasos</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex flex-col items-center text-center space-y-4"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-2 transform rotate-3 hover:rotate-6 transition-transform">
                            <step.icon className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold text-lg">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
