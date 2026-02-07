"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
    email: z.string().email("Email inválido."),
    phone: z.string().min(9, "Teléfono inválido."),
    message: z.string().min(10, "El mensaje es muy corto."),
});

type FormValues = z.infer<typeof formSchema>;

export const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
        reset();

        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
    };

    return (
        <div className="w-full max-w-md mx-auto relative">
            <AnimatePresence mode="wait">
                {isSuccess ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="flex flex-col items-center justify-center p-8 bg-card rounded-2xl border border-primary/20 text-center min-h-[400px]"
                    >
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                            <CheckCircle className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">¡Mensaje Enviado!</h3>
                        <p className="text-muted-foreground">
                            Gracias por contactar con MIM Sistemas. Uno de nuestros técnicos revisará tu consulta y te responderá en menos de 24h.
                        </p>
                        <Button
                            variant="outline"
                            className="mt-6"
                            onClick={() => setIsSuccess(false)}
                        >
                            Enviar otro mensaje
                        </Button>
                    </motion.div>
                ) : (
                    <motion.form
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-6 bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 shadow-2xl"
                    >
                        <h3 className="text-xl font-bold mb-4">Hablemos de tu proyecto</h3>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Nombre Completo</label>
                            <Input
                                {...register("name")}
                                placeholder="Juan Pérez"
                                className={cn("bg-background/50 border-white/10 focus:border-primary/50", errors.name && "border-destructive")}
                            />
                            {errors.name && (
                                <span className="text-xs text-destructive flex items-center gap-1">
                                    <AlertCircle className="w-3 h-3" /> {errors.name.message}
                                </span>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email Profesional</label>
                            <Input
                                {...register("email")}
                                placeholder="juan@empresa.com"
                                className={cn("bg-background/50 border-white/10 focus:border-primary/50", errors.email && "border-destructive")}
                            />
                            {errors.email && (
                                <span className="text-xs text-destructive flex items-center gap-1">
                                    <AlertCircle className="w-3 h-3" /> {errors.email.message}
                                </span>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Teléfono</label>
                            <Input
                                {...register("phone")}
                                placeholder="600 000 000"
                                className={cn("bg-background/50 border-white/10 focus:border-primary/50", errors.phone && "border-destructive")}
                            />
                            {errors.phone && (
                                <span className="text-xs text-destructive flex items-center gap-1">
                                    <AlertCircle className="w-3 h-3" /> {errors.phone.message}
                                </span>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">¿En qué podemos ayudarte?</label>
                            <Textarea
                                {...register("message")}
                                placeholder="Describa brevemente su necesidad..."
                                className={cn("bg-background/50 border-white/10 focus:border-primary/50 min-h-[120px]", errors.message && "border-destructive")}
                            />
                            {errors.message && (
                                <span className="text-xs text-destructive flex items-center gap-1">
                                    <AlertCircle className="w-3 h-3" /> {errors.message.message}
                                </span>
                            )}
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-12"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Enviando...
                                </>
                            ) : (
                                "Solicitar Asesoramiento"
                            )}
                        </Button>

                        <p className="text-xs text-center text-muted-foreground mt-4">
                            Protegemos tus datos. Al enviar aceptas nuestra Política de Privacidad.
                        </p>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
};
