"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Data Definition ---
type ServiceItem = {
    id: string;
    title: string;
    description: string;
    ctaLabel: string;
    href: string;
    imageColor: string;
    image?: string;
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
                image: "/Preparatorio Entrevista.png",
            },
            {
                id: "cv-translation",
                title: "Tradução de CV",
                description: "Versão estratégica do seu currículo para que chegue nas mãos certas.",
                ctaLabel: "Obter Orçamento",
                href: "/contact?service=cv-translation",
                imageColor: "bg-rose-500/10",
                image: "/Traducao de CV.png",
            },
            {
                id: "personal-coaching",
                title: "Coaching Pessoal",
                description: "Preparatório personalizado para a sua entrevista em inglês.",
                ctaLabel: "Iniciar Jornada",
                href: "/contact?service=personal-coaching",
                imageColor: "bg-emerald-500/10",
                image: "/Coaching Pessoal.png",
            },
        ],
    },
    {
        id: "business-english",
        title: "Business English",
        description: "Transforme fluência em influência no ambiente corporativo.",
        items: [
            {
                id: "business-english",
                title: "Business English Express",
                description: "Para líderes que operam em contextos decisivos e exigem precisão na comunicação.",
                ctaLabel: "Iniciar Jornada",
                href: "/contact?service=business-english",
                imageColor: "bg-blue-500/10",
                image: "/Business English Express.png",
            },
            {
                id: "travel-english",
                title: "Inglês para Viagens",
                description: "Se sua agenda é global, sua comunicação precisa acompanhar.",
                ctaLabel: "Iniciar Jornada",
                href: "/contact?service=travel-english",
                imageColor: "bg-orange-500/10",
                image: "/Ingles Para Viagens.png",
            },
            {
                id: "private-classes",
                title: "Aulas Particulares",
                description: "Comunicação ajustada ao seu nível de responsabilidade.",
                ctaLabel: "Iniciar Jornada",
                href: "/contact?service=private-classes",
                imageColor: "bg-amber-500/10",
                image: "/Aulas Particulares.png",
            },
        ],
    },
    {
        id: "fluency",
        title: "Além da Fluência",
        description: "Aprimore sua fala e pronúncia para uma comunicação natural e fluida.",
        items: [
            {
                id: "ttl-club",
                title: "Inglês Americano na Prática – Accent Training",
                description: "Sua pronúncia impacta a sua credibilidade?",
                ctaLabel: "Quero Mais Clareza",
                href: "/contact?service=ttl-club",
                imageColor: "bg-cyan-500/10",
                image: "/Accent Training.png",
            },
            {
                id: "next-chapter",
                title: "The Next Chapter Club - by invitation only",
                description: "Aqui, fluência é ponto de partida. Maturidade e visão são o diferencial.",
                ctaLabel: "Entrar na Discussão",
                href: "/contact?service=next-chapter",
                imageColor: "bg-sky-500/10",
                image: "/Next Chapter Club.png",
            },
            {
                id: "accent-training",
                title: "TTL Community Club",
                description: "Prática estruturada de conversação em grupo.",
                ctaLabel: "Iniciar Jornada",
                href: "/contact?service=accent-training",
                imageColor: "bg-indigo-500/10",
                image: "/TTL Community Club.png",
            },
        ],
    },
    {
        id: "other-courses",
        title: "What's Next?",
        description: "Líderes evoluem continuamente. Nossos desafios e programas mantêm sua comunicação estratégica em movimento.",
        items: [
            {
                id: "challenge-15-days",
                title: "Our Community",
                description: "Faça parte da comunidade e acompanhe os próximos passos dessa jornada.",
                ctaLabel: "Quero fazer parte",
                href: "/contact?service=challenge-15-days",
                imageColor: "bg-yellow-500/10",
                image: "/Our Community.png",
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
                <section className="relative py-24 lg:py-32 overflow-hidden bg-primary">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-white/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] -z-20" />

                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <div className="flex flex-col items-center max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
                            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white/90 mb-6 backdrop-blur-sm">
                                <span className="flex h-2 w-2 rounded-full bg-white mr-2 animate-pulse"></span>
                                Expertise e Programas
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-gold pb-2">
                                Nossas Soluções
                            </h1>
                            <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
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

// --- Redesigned Category Block ---
function ServiceCategoryBlock({ category, isReversed }: { category: ServiceCategory; isReversed: boolean }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeItem = category.items[activeIndex];

    return (
        <section className="py-20 md:py-28 border-b border-border/40 last:border-0">
            <div className="container mx-auto px-4 md:px-6">

                {/* Category Header */}
                <div className="mb-12 md:mb-16">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-3 block">
                        Soluções
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">{category.title}</h2>
                    <p className="text-lg text-muted-foreground max-w-xl">{category.description}</p>
                </div>

                {/* Two-column layout */}
                <div className={cn(
                    "flex flex-col lg:flex-row gap-10 lg:gap-20 items-start",
                    isReversed && "lg:flex-row-reverse"
                )}>

                    {/* ── Left: Numbered interactive list (40%) ── */}
                    <div className="lg:w-[40%] w-full">
                        {category.items.map((item, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveIndex(index)}
                                    className={cn(
                                        "w-full text-left group py-6 px-5 transition-all duration-300 border-b border-border/30 last:border-0",
                                        "border-l-4",
                                        isActive
                                            ? "border-l-[#d4af37] bg-muted/50"
                                            : "border-l-transparent hover:border-l-[#d4af37]/30 hover:bg-muted/20"
                                    )}
                                >
                                    <div className="flex items-start gap-5">
                                        {/* Number */}
                                        <span className={cn(
                                            "text-sm font-bold tabular-nums mt-1 shrink-0 transition-colors duration-300",
                                            isActive ? "text-[#d4af37]" : "text-muted-foreground/30 group-hover:text-[#d4af37]/50"
                                        )}>
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <div className="flex-1 min-w-0">
                                            {/* Title */}
                                            <h3 className={cn(
                                                "font-semibold text-lg leading-snug transition-colors duration-300",
                                                isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground/80"
                                            )}>
                                                {item.title}
                                            </h3>

                                            {/* Expandable content */}
                                            {isActive && (
                                                <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                                                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                                                        {item.description}
                                                    </p>
                                                    <Button
                                                        asChild
                                                        size="sm"
                                                        className="group/btn bg-primary text-primary-foreground hover:bg-primary/90 shadow-md transition-all duration-300 rounded-full px-5"
                                                    >
                                                        <a href={item.href}>
                                                            {item.ctaLabel}
                                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                                        </a>
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* ── Right: Large sticky image panel (60%) ── */}
                    <div className="lg:w-[60%] w-full relative">
                        <div className="lg:sticky lg:top-28">
                            {/* Main image card */}
                            <div className={cn(
                                "w-full aspect-[16/10] rounded-3xl overflow-hidden relative shadow-2xl border border-border/30 transition-all duration-500",
                                !activeItem.image && activeItem.imageColor
                            )}>
                                {activeItem.image ? (
                                    <Image
                                        key={activeItem.id}
                                        src={activeItem.image}
                                        alt={activeItem.title}
                                        fill
                                        className="object-cover object-[20%_center]"
                                        priority
                                    />
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-full gap-4">
                                        <span className="text-6xl font-bold text-muted-foreground/10 tabular-nums">
                                            {String(activeIndex + 1).padStart(2, "0")}
                                        </span>
                                        <span className="text-muted-foreground/40 font-medium text-center px-12 text-sm">
                                            {activeItem.title}
                                        </span>
                                    </div>
                                )}

                                {/* Bottom gradient overlay */}
                                {activeItem.image && (
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                                )}

                                {/* Service badge */}
                                <div className="absolute bottom-5 left-5">
                                    <span className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm text-white/90 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shrink-0" />
                                        {activeItem.title}
                                    </span>
                                </div>
                            </div>

                            {/* Decorative layered border */}
                            <div className="absolute -z-10 inset-0 rounded-3xl border border-[#d4af37]/10 translate-x-3 translate-y-3 hidden lg:block" />
                            <div className="absolute -z-20 inset-0 rounded-3xl border border-[#d4af37]/5 translate-x-6 translate-y-6 hidden lg:block" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
