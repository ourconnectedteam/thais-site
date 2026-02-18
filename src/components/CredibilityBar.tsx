import { MessageSquare, Award, Briefcase, TrendingUp, LineChart, Target } from "lucide-react";

export default function CredibilityBar() {
    const badges = [
        "Coaching Executivo",
        "Inglês para Negócios",
        "Habilidades de Apresentação",
        "Comunicação Intercultural",
        "Presença de Liderança"
    ];

    return (
        <div className="w-full border-y bg-muted/20">
            <div className="container mx-auto px-4 py-12 md:px-6">
                <p className="text-center text-base md:text-lg font-semibold uppercase tracking-widest text-muted-foreground mb-8">
                    Há mais de três décadas apoiando líderes e executivos em:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8 max-w-5xl mx-auto justify-items-center">
                    {[
                        { label: "Comunicação Estratégica", icon: MessageSquare },
                        { label: "Liderança com Autoridade", icon: Award },
                        { label: "Posicionamento Executivo", icon: Briefcase },
                        { label: "Expansão de Negócios", icon: TrendingUp },
                        { label: "Crescimento Profissional", icon: LineChart },
                        { label: "Impacto e Resultados", icon: Target }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center space-x-3 group w-[260px]">
                            <div className="p-2 rounded-full bg-muted/50 group-hover:bg-[#d4af37]/10 transition-colors">
                                <item.icon className="w-5 h-5 text-[#d4af37]" />
                            </div>
                            <span className="text-lg text-muted-foreground group-hover:text-foreground transition-colors">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
