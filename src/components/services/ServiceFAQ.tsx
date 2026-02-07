"use client";
import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface ServiceFAQProps {
    faqs: { q: string; a: string }[];
}

export const ServiceFAQ = ({ faqs }: ServiceFAQProps) => {
    if (faqs.length === 0) return null;

    return (
        <div id="faqs" className="scroll-mt-32">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <span className="w-1 h-8 rounded-full bg-primary" />
                Preguntas Frecuentes
            </h2>
            <div className="bg-card border border-white/5 rounded-2xl p-6 lg:p-10">
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, i) => (
                        <AccordionItem key={i} value={`item-${i}`} className="border-b-white/10 last:border-0">
                            <AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors text-left">
                                {faq.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                                {faq.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
};
