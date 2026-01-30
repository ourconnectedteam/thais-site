import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "About | Thais Lapolla",
    description: "Learn about Thais Lapolla's background and coaching philosophy.",
};

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col overflow-x-hidden bg-background">
            <Navbar />
            <main className="flex-1">
                {/* Container for the Hero Card */}
                <div className="container mx-auto px-4 md:px-6 py-6 h-full">
                    <section className="relative w-full min-h-[85vh] rounded-[3rem] overflow-hidden flex flex-col justify-between shadow-sm border border-border/50">

                        {/* 1. Full Background Image */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/about-portrait.png"
                                alt="Empowering Confidence"
                                fill
                                className="object-cover object-center"
                                priority
                            />
                            {/* Optional Gradient Overlay for Text Readability - subtle */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/40" />
                        </div>

                        {/* 2. Content Grid */}
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 h-full flex-grow p-8 lg:p-16">

                            {/* Left Headline */}
                            <div className="lg:col-span-6 flex flex-col justify-start pt-12 lg:pt-0">
                                {/* Static text-black to persist across themes */}
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-black leading-[1.1] drop-shadow-sm">
                                    Empoderando <br />
                                    Confiança <br />
                                    Em Todo Lugar
                                </h1>
                            </div>

                            {/* Spacer for Center */}
                            <div className="lg:col-span-2"></div>

                            {/* Right Subtitle + Button */}
                            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end text-left lg:text-right pb-24 lg:pb-0">
                                <div className="max-w-xs backdrop-blur-sm bg-white/30 p-6 rounded-3xl border border-white/40 shadow-sm">
                                    <p className="text-lg text-stone-800 mb-6 font-medium leading-relaxed">
                                        Um mercado global para artistas exibirem, compartilharem e venderem seu trabalho para o mundo.
                                    </p>
                                    {/* Hardcoded black button for consistency */}
                                    <Button asChild className="rounded-full bg-black text-white hover:bg-black/80 px-8 py-6 text-base font-semibold shadow-lg w-full md:w-auto">
                                        <Link href="/contact">Explorar Oportunidades</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* 3. "About Me" Text (Bottom Layer - Smaller, Thinner, Left Aligned) */}
                        <div className="absolute bottom-0 left-0 w-full flex justify-start pl-8 md:pl-16 z-20 pointer-events-none mix-blend-darken">
                            {/* Static text-black to persist across themes */}
                            <span className="text-[13vw] leading-[0.8] font-light text-black/90 tracking-tighter select-none pb-4 lg:pb-8">
                                Sobre Mim
                            </span>
                        </div>

                    </section>
                </div>

                {/* Story / Values Section - Preserved spacing */}
                <section className="py-20 md:py-32 bg-background">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <div>
                                <h2 className="text-4xl font-bold tracking-tight mb-6">
                                    Superando a barreira entre <span className="text-primary">fluência</span> e <span className="text-primary">influência</span>.
                                </h2>
                                <div className="prose prose-lg dark:prose-invert text-muted-foreground">
                                    <p>
                                        Sou Thais Lapolla, uma coach de inglês executivo dedicada a ajudar profissionais a dominar o ambiente.
                                        Com anos de experiência trabalhando com executivos C-suite, diplomatas e empreendedores, entendo que nos níveis mais altos,
                                        a comunicação não é apenas sobre vocabulário — é sobre estratégia, tom e presença.
                                    </p>
                                    <p>
                                        Minha abordagem combina precisão linguística com psicologia comportamental. Eu não ensino apenas "Inglês para Negócios";
                                        eu treino você para navegar em negociações complexas e articular sua visão com uma clareza que inspira ação.
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <Button asChild variant="outline" size="lg" className="rounded-full">
                                        <Link href="/contact">Ler Bio Completa</Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Stats / Credentials Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { label: "Anos de Experiência", value: "10+" },
                                    { label: "Executivos Treinados", value: "500+" },
                                    { label: "Países Atendidos", value: "15" },
                                    { label: "Satisfação do Cliente", value: "100%" }
                                ].map((stat, i) => (
                                    <div key={i} className="p-8 rounded-2xl bg-muted/30 border border-border/50 flex flex-col items-center text-center justify-center hover:bg-muted/50 transition-colors">
                                        <span className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</span>
                                        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <CTASection />
            </main >
            <Footer />
        </div >
    );
}
