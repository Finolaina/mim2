import React from "react";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Container } from "@/components/layout/Base";
import { SERVICES } from "@/lib/constants";
import { ServiceStickyNav } from "@/components/layout/ServiceStickyNav";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceBenefits } from "@/components/services/ServiceBenefits";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceProcess } from "@/components/services/ServiceProcess";

// Force dynamic because we are using params
export async function generateStaticParams() {
    return SERVICES.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) return { title: "Servicio no encontrado" };

    return {
        title: `${service.title} | MIM Sistemas`,
        description: service.shortDesc,
    };
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
    const service = SERVICES.find((s) => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    // Schema.org Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": service.title,
        "provider": {
            "@type": "LocalBusiness",
            "name": "MIM Sistemas",
            "telephone": "+34912000002"
        },
        "description": service.fullDesc,
        "areaServed": "Madrid",
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Header />
            <ServiceStickyNav title={service.title} />

            <main className="min-h-screen bg-background">
                <ServiceHero
                    title={service.title}
                    description={service.fullDesc}
                    category={service.category}
                    icon={service.icon}
                    color={service.color}
                />

                <Container className="py-20 grid lg:grid-cols-3 gap-12 relative">
                    <div className="lg:col-span-2 space-y-20">
                        {/* Description Section */}
                        <div id="descripcion" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <span className="w-1 h-8 rounded-full bg-primary" />
                                ¿En qué consiste?
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                {service.fullDesc}
                            </p>
                            <div className="mt-8 p-6 bg-secondary/10 border border-white/5 rounded-2xl italic text-muted-foreground">
                                "Garantizamos el cumplimiento estricto de la normativa vigente y ofrecemos un servicio post-venta ágil."
                            </div>
                        </div>

                        {/* Benefits Section */}
                        <ServiceBenefits benefits={service.benefits} color={service.color} />

                        {/* Process Section */}
                        <ServiceProcess />

                        {/* FAQs Section */}
                        <ServiceFAQ faqs={service.faqs} />
                    </div>

                    {/* Sidebar Sticky CTA */}
                    <div className="relative hidden lg:block h-full">
                        <div className="sticky top-32 p-8 rounded-2xl bg-card border border-white/10 shadow-2xl space-y-6 backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl pointer-events-none" />

                            <h3 className="text-xl font-bold relative z-10">¿Hablamos?</h3>
                            <p className="text-sm text-muted-foreground relative z-10">
                                Reciba una valoración técnica y presupuesto sin compromiso en menos de 24h.
                            </p>

                            <Button className="w-full h-12 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all relative z-10">
                                Contactar Ahora
                            </Button>

                            <div className="text-center text-xs text-muted-foreground relative z-10">
                                o llámenos al <span className="text-foreground font-bold hover:underline cursor-pointer">912 000 002</span>
                            </div>

                            <div className="pt-6 border-t border-white/10 relative z-10">
                                <div className="flex items-center gap-2 text-xs text-muted-foreground justify-center">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    Técnicos disponibles hoy
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </main>
        </>
    );
}
