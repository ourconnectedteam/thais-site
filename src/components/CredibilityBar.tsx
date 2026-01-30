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
            <div className="container mx-auto px-4 py-8 md:px-6">
                <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">
                    Expertise Confiada por Profissionais em
                </p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70 grayscale">
                    {badges.map((badge, i) => (
                        <div key={i} className="flex items-center space-x-2">
                            <span className="text-lg font-medium text-foreground/80">{badge}</span>
                            {i < badges.length - 1 && (
                                <span className="hidden md:inline-block text-muted-foreground/30">•</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
