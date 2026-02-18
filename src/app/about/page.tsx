import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import AboutVisual from "@/components/AboutVisual";

export const metadata = {
    title: "About | Thais Lapolla",
    description: "Learn about Thais Lapolla's background and coaching philosophy.",
};

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col overflow-x-hidden bg-background">
            <Navbar />
            <main className="flex-1">
                <AboutVisual />

                {/* Story / Values Section - Premium Layout */}
                <section className="py-24 bg-background relative overflow-hidden">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid lg:grid-cols-12 gap-16 items-start">
                            {/* Bio Content - Spans 7 cols */}
                            <div className="lg:col-span-7">
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
                                    Líderes não se destacam pelo que sabem. E sim, por <span className="text-gold">como se comunicam</span>.
                                </h2>
                                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                    <p>
                                        A forma como você comunica define o alcance da sua <span className="text-foreground font-medium">liderança</span>. <span className="text-foreground font-medium">Thais Lapolla</span> é especialista em inglês estratégico para executivos que atuam em esferas globais. Há mais de três décadas, <span className="text-gold font-medium">transforma fluência em influência real</span>, alinhando linguagem, posicionamento e responsabilidade em ambientes de alta complexidade. Fluente em cinco idiomas, já viveu em três países e construiu sua trajetória unindo <span className="text-foreground font-medium">expertise em idiomas à experiência prática em multinacionais americanas</span>, consolidando inteligência intercultural e a capacidade de transitar com naturalidade entre diferentes contextos e níveis de decisão.
                                    </p>
                                    <p>
                                        Sua abordagem precisa transforma <span className="text-foreground font-medium">líderes</span> em <span className="text-foreground font-medium">comunicadores estratégicos</span>, capazes de influenciar com <span className="text-foreground font-medium">precisão e autoridade</span>. Thais acredita que comunicação não é sobre talento, e sim sobre <span className="text-gold font-medium">estratégia</span>. E que, com a orientação certa, qualquer profissional pode ir além. <span className="text-foreground font-medium">É exatamente para isso que ela está aqui.</span>
                                    </p>
                                </div>
                                <div className="mt-10">
                                    <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-300">
                                        <Link href="/contact">Agendar Consultoria</Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Stats - Premium Vertical/Grid Layout - Spans 5 cols */}
                            <div className="lg:col-span-5 space-y-8">
                                <div className="grid grid-cols-1 gap-px bg-gradient-to-b from-border/50 via-border/30 to-border/0 rounded-3xl overflow-hidden border border-border/40 shadow-sm">
                                    {[
                                        { label: "Anos de Experiência", value: "30+" },
                                        { label: "Líderes Treinados", value: "1000+" },
                                        { label: "Países Atendidos", value: "5" },
                                        { label: "Soluções Customizadas", value: "100%" }
                                    ].map((stat, i) => (
                                        <div key={i} className="bg-card/50 backdrop-blur-sm p-8 flex flex-row items-center justify-between gap-4 hover:bg-card transition-colors duration-300 group">
                                            <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase group-hover:text-foreground transition-colors">{stat.label}</span>
                                            <span className="text-5xl font-bold text-gold tabular-nums tracking-tight drop-shadow-sm">{stat.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Integrated Testimonials - Premium Flow */}
                        <div className="mt-32">
                            <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">
                                O impacto da <span className="text-gold">comunicação estratégica</span>
                            </h3>
                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    {
                                        quote: "A Thais transformou completamente como me apresento ao conselho. Sinto-me no controle e compreendida.",
                                        author: "Sofia M.",
                                        role: "VP de Operações"
                                    },
                                    {
                                        quote: "A nuance que ela ensina era o que faltava no meu inglês. Não é apenas sobre estar correto; é sobre ser eficaz.",
                                        author: "Carlos R.",
                                        role: "Fundador, Tech Startup"
                                    },
                                    {
                                        quote: "O coaching dela me deu confiança para liderar negociações internacionais sem duvidar das minhas palavras.",
                                        author: "Elena B.",
                                        role: "Diretora de Vendas"
                                    }
                                ].map((t, i) => (
                                    <div key={i} className="relative group">
                                        <div className="absolute inset-0 bg-gold/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="relative bg-card border border-border/50 rounded-2xl p-8 hover:border-gold/30 transition-all duration-300 h-full flex flex-col shadow-sm hover:shadow-md">
                                            <div className="mb-6 text-gold text-4xl leading-none font-serif opacity-50">"</div>
                                            <p className="text-muted-foreground italic mb-6 leading-relaxed flex-1">
                                                {t.quote}
                                            </p>
                                            <div className="border-t border-border/50 pt-4">
                                                <p className="font-semibold text-foreground">{t.author}</p>
                                                <p className="text-xs text-gold font-medium uppercase tracking-wider">{t.role}</p>
                                            </div>
                                        </div>
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
