"use client";
import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceBenefitsProps {
    benefits: string[];
    color: string;
}

export const ServiceBenefits = ({ benefits, color }: ServiceBenefitsProps) => {
    return (
        <div id="beneficios" className="scroll-mt-32">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <span className="w-1 h-8 rounded-full bg-primary" />
                Ventajas Principales
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                        className="group relative p-6 rounded-2xl bg-secondary/10 border border-white/5 overflow-hidden transition-all"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                        <div className="flex gap-4 items-start relative z-10">
                            <div
                                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-secondary/30"
                                style={{ color: color }}
                            >
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <span className="text-lg font-medium text-foreground leading-snug pt-1.5">
                                {benefit}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
