import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Base";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-background border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <Container>
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-background font-bold text-xl">
                                M
                            </div>
                            <span className="font-bold text-lg tracking-tight text-foreground">
                                MIM Sistemas
                            </span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Ingeniería y servicios integrales para comunidades y empresas. Calidad, transparencia y compromiso técnico.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-background transition-colors">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-foreground mb-4">Empresa</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/sobre-nosotros" className="hover:text-primary transition-colors">Sobre Nosotros</Link></li>
                            <li><Link href="/casos" className="hover:text-primary transition-colors">Casos de Éxito</Link></li>
                            <li><Link href="/contacto" className="hover:text-primary transition-colors">Trabaja con nosotros</Link></li>
                            <li><Link href="/contacto" className="hover:text-primary transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold text-foreground mb-4">Servicios</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/servicios/placas-solares" className="hover:text-primary transition-colors">Energía Solar</Link></li>
                            <li><Link href="/servicios/cctv" className="hover:text-primary transition-colors">Videovigilancia</Link></li>
                            <li><Link href="/servicios/control-accesos" className="hover:text-primary transition-colors">Control de Accesos</Link></li>
                            <li><Link href="/servicios/electricidad" className="hover:text-primary transition-colors">Electricidad</Link></li>
                            <li><Link href="/servicios" className="hover:text-primary transition-colors underline decoration-primary/30">Ver todos</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-foreground mb-4">Contacto</h4>
                        <div className="flex items-start gap-3 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 mt-1 text-primary" />
                            <span>C/ Ejemplo 123, <br /> 28000 Madrid</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <Phone className="w-4 h-4 text-primary" />
                            <span>912 000 002</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <Mail className="w-4 h-4 text-primary" />
                            <span>info@mimsistemas.com</span>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} MIM Sistemas S.L. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-foreground">Aviso Legal</a>
                        <a href="#" className="hover:text-foreground">Política de Privacidad</a>
                        <a href="#" className="hover:text-foreground">Cookies</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
