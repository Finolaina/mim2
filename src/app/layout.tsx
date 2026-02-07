import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DarkVeil } from "@/components/effects/DarkVeil";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "MIM Sistemas | Soluciones Integrales",
    template: "%s | MIM Sistemas"
  },
  description: "Empresa de ingeniería e instalaciones para comunidades y empresas en Madrid. Placas solares, CCTV, Control de Accesos y Electricidad.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://mimsistemas.com",
    title: "MIM Sistemas | Ingeniería y Servicios",
    description: "Soluciones técnicas integrales con 20 años de experiencia.",
    siteName: "MIM Sistemas",
  },
  twitter: {
    card: "summary_large_image",
    title: "MIM Sistemas",
    description: "Referente en instalaciones técnicas para comunidades.",
  },
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} font-sans antialiased min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary`}>
        <DarkVeil />
        <div className="relative flex flex-col min-h-screen">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
