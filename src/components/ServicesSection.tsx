import { Briefcase, Presentation, School } from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
    const services = [
        {
            title: "Coaching Executivo 1:1",
            description: "Coaching personalizado para refinar seu sotaque, vocabulário e capacidade de articular estratégias complexas.",
            icon: <Briefcase className="h-6 w-6" />,
        },
        {
            title: "Treinamento para Apresentações e Pitch",
            description: "Prepare-se com precisão para apresentações decisivas, pitches para investidores e discursos principais.",
            icon: <Presentation className="h-6 w-6" />,
        },
        {
            title: "Workshops Corporativos",
            description: "Treinamento em grupo para equipes melhorarem a comunicação intercultural e o alinhamento do inglês para negócios.",
            icon: <School className="h-6 w-6" />,
        },
    ];

    return (
        <section className="py-20 md:py-32 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Como Posso Ajudar</h2>
                    <p className="max-w-[700px] mx-auto text-muted-foreground text-lg">
                        Programas personalizados projetados para atender às demandas específicas da alta liderança.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
