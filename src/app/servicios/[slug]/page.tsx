import React from "react";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Container, Section } from "@/components/layout/Base";
import { SERVICES } from "@/lib/constants";
import { ServiceStickyNav } from "@/components/layout/ServiceStickyNav";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Metadata } from "next";

// Force dynamic because we are using params, although generateStaticParams is better for SEO
// We will implement generateStaticParams below.

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

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": service.faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f.a
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {service.faqs.length > 0 && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
                />
            )}

            <Header />
            <ServiceStickyNav title={service.title} />

            <main className="min-h-screen">
                {/* Hero */}
                <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/10">
                    {/* Dynamic Background Glow */}
                    <div
                        className="absolute top-0 right-0 w-[60%] h-[600px] blur-[150px] opacity-20 pointer-events-none rounded-full"
                        style={{ background: service.color }}
                    />

                    <Container className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium mb-6" style={{ color: service.color }}>
                                <span className="w-2 h-2 rounded-full" style={{ background: service.color }} />
                                {service.category}
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold mb-6">{service.title}</h1>
                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                {service.fullDesc}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button size="lg" className="rounded-full text-lg h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90">
                                    Pedir Presupuesto
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                                <Button size="lg" variant="outline" className="rounded-full text-lg h-12 px-8">
                                    <Phone className="mr-2 w-5 h-5" />
                                    912 000 002
                                </Button>
                            </div>
                        </div>

                        {/* Visual/Icon Huge */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-[3rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 flex items-center justify-center relative backdrop-blur-sm shadow-2xl">
                                <service.icon
                                    className="w-1/2 h-1/2 drop-shadow-[0_0_50px_rgba(255,255,255,0.2)]"
                                    style={{ color: service.color }}
                                />

                                {/* Floating Badge */}
                                <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl border border-white/10 shadow-xl flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                    <span className="font-bold text-sm">Disponible en tu zona</span>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Details & Benefits */}
                <Container className="py-20 grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-16">
                        <div id="descripcion" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold mb-6">¿En qué consiste el servicio?</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Nuestro servicio de {service.title} está diseñado para ofrecer una solución integral "llaves en mano".
                                Nos ocupamos desde el diseño técnico inicial hasta la puesta en marcha, garantizando el cumplimiento de toda la normativa
                                vigente (CTE, REBT, LOPD, etc.).
                            </p>
                            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                                Contamos con un equipo propio de instaladores certificados, lo que nos permite asegurar la calidad de la ejecución
                                y ofrecer garantías superiores a la media del mercado.
                            </p>
                        </div>

                        <div id="beneficios" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold mb-8">Ventajas Principales</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {service.benefits.map((benefit, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-secondary/20 border border-white/5">
                                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                                        <span className="font-medium text-foreground">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div id="faqs" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold mb-8">Preguntas Frecuentes</h2>
                            <div className="space-y-4">
                                {service.faqs.length > 0 ? service.faqs.map((faq, i) => (
                                    <div key={i} className="p-6 rounded-xl bg-card border border-white/5">
                                        <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                                        <p className="text-muted-foreground">{faq.a}</p>
                                    </div>
                                )) : (
                                    <p className="text-muted-foreground italic">No hay preguntas frecuentes específicas para este servicio. Contáctanos para más info.</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Sticky CTA */}
                    <div className="relative hidden lg:block">
                        <div className="sticky top-32 p-8 rounded-2xl bg-card border border-border space-y-6">
                            <h3 className="text-xl font-bold">Solicitar Presupuesto</h3>
                            <p className="text-sm text-muted-foreground">
                                Sin compromiso. Recibe una valoración técnica en menos de 24h.
                            </p>
                            <Button className="w-full h-12 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90">
                                Contactar Ahora
                            </Button>
                            <div className="text-center text-xs text-muted-foreground">
                                O llámanos al <span className="text-foreground font-bold">912 000 002</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </main>
        </>
    );
}
