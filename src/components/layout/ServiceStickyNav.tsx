"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceStickyNavProps {
    title: string;
}

export const ServiceStickyNav: React.FC<ServiceStickyNavProps> = ({ title }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past the hero (approx 500px)
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };


    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-white/10 shadow-lg pt-16 md:pt-20" // Add padding top to account for Main Header
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
                        <div className="hidden md:block font-bold text-foreground truncate max-w-[200px]">
                            {title}
                        </div>

                        <div className="flex items-center gap-1 md:gap-6 overflow-x-auto no-scrollbar mask-gradient">
                            {[
                                { id: "descripcion", label: "Descripción" },
                                { id: "beneficios", label: "Beneficios" },
                                { id: "faqs", label: "Preguntas" },
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap px-3 py-1"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-2">
                            <Button size="sm" className="hidden sm:flex bg-primary text-primary-foreground hover:bg-primary/90">
                                Pedir Presupuesto
                            </Button>
                            <a href="tel:+34912000002" className="sm:hidden p-2 rounded-full bg-primary text-primary-foreground">
                                <Phone className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
