import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <div
            className={cn("w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}
            {...props}
        >
            {children}
        </div>
    );
};

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <section
            className={cn("py-16 md:py-24 relative overflow-hidden", className)}
            {...props}
        >
            {children}
        </section>
    );
};
