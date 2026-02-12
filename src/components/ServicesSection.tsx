import { Briefcase, Globe, Mic, Rocket } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
    const services = [
        {
            title: "Transição de Carreira",
            description: "Para líderes em movimento. Entrevista marcada ou não, preparação é antecipação estratégica. O inglês deve impulsionar sua próxima decisão, nunca limitar seu avanço.",
            icon: <Briefcase className="h-6 w-6" />,
        },
        {
            title: "Business English",
            description: "Você opera em ambientes globais e não tem tempo a perder. Sua comunicação precisa refletir segurança, autoridade e clareza. Performance consistente não é opcional.",
            icon: <Globe className="h-6 w-6" />,
        },
        {
            title: "Além da Fluência",
            description: "Fluência é precisão sob pressão. Seja para ampliar repertório, desenvolver clareza no discurso ou refinar a pronúncia, a sua jornada começa aqui.",
            icon: <Mic className="h-6 w-6" />,
        },
        {
            title: "What's Next?",
            description: "Você quer ir mais longe. Desafios direcionados e programas estratégicos mantêm seu inglês vivo, relevante e alinhado à sua ambição profissional.",
            icon: <Rocket className="h-6 w-6" />,
        },
    ];

    return (
        <section className="py-20 md:py-32 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-20 space-y-8 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                        Para cada demanda, uma <span className="text-gold">solução</span>.
                    </h2>

                    <p className="text-lg text-muted-foreground leading-relaxed text-left md:text-center max-w-3xl mx-auto">
                        A trajetória de um líder não é linear. Ela é feita de transições, expansões, reposicionamentos e consolidação.
                        Em cada etapa, a comunicação precisa acompanhar o nível de responsabilidade, influência e impacto que você assume.
                        Por isso, nossas soluções evoluem com você. Em qualquer momento da sua jornada profissional, nós estamos aqui.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
