"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

// --- Data Definition ---
type ServiceItem = {
    id: string;
    title: string;
    description: string;
    ctaLabel: string;
    href: string;
    imageColor: string; // Placeholder for image logic
};

type ServiceCategory = {
    id: string;
    title: string;
    description: string;
    items: ServiceItem[];
};

const serviceCategories: ServiceCategory[] = [
    {
        id: "career-transition",
        title: "Transição de Carreira",
        description: "Prepare-se para grandes mudanças e alcance novos patamares profissionais.",
        items: [
            {
                id: "interview-prep",
                title: "Preparatório para Entrevista em Inglês",
                description: "Curso completo para você dar o próximo passo na sua carreira.",
                ctaLabel: "Agendar Agora",
                href: "/contact?service=interview-prep",
                imageColor: "bg-purple-500/10",
            },
            {
                id: "cv-translation",
                title: "Tradução de CV",
                description: "Versão estratégica do seu currículo para que chegue nas mãos certas.",
                ctaLabel: "Obter Orçamento",
                href: "/contact?service=cv-translation",
                imageColor: "bg-rose-500/10",
            },
            {
                id: "personal-coaching",
                title: "Coaching Pessoal",
                description: "Preparatório personalizado para a sua entrevista em inglês.",
                ctaLabel: "Iniciar Jornada",
                href: "/contact?service=personal-coaching",
                imageColor: "bg-emerald-500/10",
            },
        ],
    },
    {
        id: "business-english",
        title: "Business English",
        description: "Domine a linguagem dos negócios para se comunicar com autoridade.",
        items: [
            {
                id: "business-english",
                title: "Inglês para Negócios Expresso",
                description: "Um programa direto ao ponto para profissionais que já falam inglês, mas precisam usar melhor o que sabem.",
                ctaLabel: "Começar",
                href: "/contact?service=business-english",
                imageColor: "bg-blue-500/10",
            },
            {
                id: "private-classes",
                title: "Aulas Particulares",
                description: "Sessões 1:1 personalizadas focadas em seus objetivos específicos. A maneira mais rápida de alcançar a fluência e resolver lacunas pessoais.",
                ctaLabel: "Agendar",
                href: "/contact?service=private-classes",
                imageColor: "bg-orange-500/10",
            },
        ],
    },
    {
        id: "fluency",
        title: "Fluência (Conversação e Pronúncia)",
        description: "Aprimore sua fala e pronúncia para uma comunicação natural e fluida.",
        items: [
            {
                id: "ttl-club",
                title: "Conversação - TTL Community Club",
                description: "Um clube de conversação em inglês para quem já saiu do básico e quer praticar de maneira leve.",
                ctaLabel: "Entrar no Clube",
                href: "/contact?service=ttl-club",
                imageColor: "bg-cyan-500/10",
            },
            {
                id: "next-chapter",
                title: "The Next Chapter Club - by invitation only",
                description: "Um clube de conversas em inglês para quem valoriza profundidade, repertório e trocas de alto nível.",
                ctaLabel: "Entrar na Discussão",
                href: "/contact?service=next-chapter",
                imageColor: "bg-sky-500/10",
            },
            {
                id: "accent-training",
                title: "Inglês Americano na Prática - Accent Training",
                description: "Treinamento de pronúncia para profissionais que querem soar mais naturais em inglês americano.",
                ctaLabel: "Saiba Mais",
                href: "/contact?service=accent-training",
                imageColor: "bg-indigo-500/10",
            },
        ],
    },
    {
        id: "other-courses",
        title: "Outros Cursos",
        description: "Cursos complementares para necessidades específicas.",
        items: [
            {
                id: "travel-english",
                title: "Inglês para Viagens",
                description: "Inglês prático para viajar com mais autonomia, segurança e tranquilidade.",
                ctaLabel: "Explorar",
                href: "/contact?service=travel-english",
                imageColor: "bg-teal-500/10",
            },
            {
                id: "challenge-15-days",
                title: "Desafio: 15 dias, 30 phrasal verbs",
                description: "Um desafio intensivo para expandir seu vocabulário com os phrasal verbs mais utilizados.",
                ctaLabel: "Aceitar Desafio",
                href: "/contact?service=challenge-15-days",
                imageColor: "bg-yellow-500/10",
            },
        ],
    },
];

export default function ServicesPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                {/* Header Section */}
                <section className="relative py-24 lg:py-32 overflow-hidden">
                    {/* Background Glows */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] -z-20" />

                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <div className="flex flex-col items-center max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">

                            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6 backdrop-blur-sm">
                                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                                Expertise e Programas
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-gold pb-2">
                                Nossas Soluções
                            </h1>

                            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                                Cada etapa da sua trajetória exige uma comunicação à altura da sua responsabilidade.
                            </p>
                        </div>
                    </div>
                </section>

                {serviceCategories.map((category, index) => (
                    <ServiceCategoryBlock
                        key={category.id}
                        category={category}
                        isReversed={index % 2 !== 0}
                    />
                ))}

                <CTASection />
            </main>
            <Footer />
        </div>
    );
}

// --- Sub-Component for Category Block ---
function ServiceCategoryBlock({ category, isReversed }: { category: ServiceCategory; isReversed: boolean }) {
    const [activeItem, setActiveItem] = useState<string>(category.items[0].id);

    const activeService = category.items.find((item) => item.id === activeItem) || category.items[0];

    return (
        <section className="py-20 md:py-32 border-b border-border/40 last:border-0">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-12 md:mb-16 max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{category.title}</h2>
                    <p className="text-lg text-muted-foreground">{category.description}</p>
                </div>

                <div className={cn("flex flex-col lg:flex-row gap-12 lg:gap-24", isReversed && "lg:flex-row-reverse")}>

                    {/* Accordion Column */}
                    <div className="lg:w-1/2">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-4"
                            value={activeItem}
                            onValueChange={(val) => {
                                if (val) setActiveItem(val);
                            }}
                        >
                            {category.items.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="border-none"
                                >
                                    <AccordionTrigger
                                        className={cn(
                                            "hover:no-underline py-4 px-0 transition-all text-xl font-medium text-muted-foreground hover:text-foreground/80 data-[state=open]:text-foreground data-[state=open]:text-2xl data-[state=open]:font-semibold",
                                            activeItem === item.id && "pl-4 border-l-4 border-primary"
                                        )}
                                    >
                                        {item.title}
                                    </AccordionTrigger>
                                    <AccordionContent className="pt-2 pb-6 pl-4">
                                        <p className="text-muted-foreground mb-6 leading-relaxed max-w-lg">
                                            {item.description}
                                        </p>
                                        <Button asChild size="sm" variant="outline" className="group border-[#d4af37]/20 hover:border-[#d4af37]/60 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] bg-background text-foreground transition-all duration-300">
                                            <a href={item.href}>
                                                {item.ctaLabel} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </a>
                                        </Button>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    {/* Image Panel Column */}
                    <div className="lg:w-1/2 relative min-h-[400px]">
                        <div className="sticky top-32">
                            <div className={cn(
                                "w-full aspect-[4/3] rounded-3xl border border-border/50 shadow-2xl flex items-center justify-center transition-all duration-500 overflow-hidden",
                                activeService.imageColor
                            )}
                            >
                                <span className="text-muted-foreground/40 font-medium text-lg capitalize">
                                    {activeService.title} <br /> Visual
                                </span>
                                {/* 
                                   To use real images:
                                   <Image 
                                     src={`/images/${activeService.id}.jpg`} 
                                     alt={activeService.title}
                                     fill
                                     className="object-cover transition-opacity duration-500"
                                   />
                                */}
                            </div>

                            {/* Decorative Details */}
                            <div className="absolute -z-10 top-10 -right-10 w-full h-full border border-primary/5 rounded-3xl" />
                            <div className="absolute -z-20 top-20 -right-20 w-full h-full border border-primary/5 rounded-3xl" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
