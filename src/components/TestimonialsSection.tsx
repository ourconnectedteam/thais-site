import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function TestimonialsSection() {
    const testimonials = [
        {
            quote: "A Thais superou expectativas ao criar um curso totalmente customizado para o Google. O progresso foi claro e reconhecido globalmente pela liderança.",
            author: "Maria Emilia Azevedo",
            role: "Diretora de RH no Google",
            initials: "MA"
        },
        {
            quote: "Extremamente focada, competente e consistente na entrega de resultados. Uma parceira estratégica que recomendo sem hesitar.",
            author: "Renata Fabrini",
            role: "Sócia na Plongê",
            initials: "RF"
        },
        {
            quote: "Não foi apenas um curso de inglês. Foi preparação estratégica. Ganhei organização, fluência e confiança para arrasar na minha apresentação.",
            author: "Elizabeth Auricchio",
            role: "GreenTech Brasil",
            initials: "EA"
        },
        {
            quote: "Aulas além do inglês tradicional. Foco em pronúncia, contexto e comunicação corporativa com precisão e profundidade.",
            author: "Fabio Santana",
            role: "Sócio no Cury Santa Kubric Associados",
            initials: "FS"
        },
        {
            quote: "Metodologia estratégica, foco em precisão e evolução real na comunicação. Um investimento que vale cada centavo.",
            author: "Leandro Viaceli",
            role: "Diretor de Vendas na Clear Correct",
            initials: "LV"
        },
        {
            quote: "Criativa, orientada a resultados e profundamente comprometida com as necessidades do cliente. Recomendo sem ressalvas.",
            author: "Daniella Holl",
            role: "HR Director LATAM & Caribe na Prada",
            initials: "DH"
        },
    ];

    return (
        <section className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-16">
                    <span className="text-gold">Palavras de Líderes</span>
                </h2>
                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((t, i) => (
                        <Card key={i} className="bg-muted/10 border-[#d4af37]/20 shadow-sm hover:border-[#d4af37]/60 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-300">
                            <CardContent className="pt-6">
                                <div className="flex gap-4 mb-4">
                                    <Avatar className="h-10 w-10">
                                        <AvatarFallback className="bg-[#d4af37]/10 text-[#d4af37]">{t.initials}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-semibold">{t.author}</p>
                                        <p className="text-xs text-muted-foreground">{t.role}</p>
                                    </div>
                                </div>
                                <blockquote className="text-muted-foreground italic leading-relaxed">
                                    "{t.quote}"
                                </blockquote>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
