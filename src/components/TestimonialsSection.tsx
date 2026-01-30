import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function TestimonialsSection() {
    const testimonials = [
        {
            quote: "A Thais transformou completamente como me apresento ao conselho. Sinto-me no controle e compreendida.",
            author: "Sofia M.",
            role: "VP de Operações, FinTech",
            initials: "SM"
        },
        {
            quote: "A nuance que ela ensina era o que faltava no meu inglês. Não é apenas sobre estar correto; é sobre ser eficaz.",
            author: "Carlos R.",
            role: "Fundador, Startup de Tecnologia",
            initials: "CR"
        },
        {
            quote: "O coaching dela me deu confiança para liderar negociações internacionais sem duvidar das minhas palavras.",
            author: "Elena B.",
            role: "Diretora de Vendas, Varejo",
            initials: "EB"
        }
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
