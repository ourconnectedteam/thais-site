import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WhatsNextSection() {
    return (
        <section className="py-20 bg-background text-foreground text-center">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">What's Next?</h2>

                <p className="text-xl md:text-2xl font-light mb-8">
                    Líderes evoluem continuamente.
                </p>

                <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
                    Nossos desafios e programas mantêm sua comunicação estratégica em movimento.
                    <br /><br />
                    Faça parte da comunidade e acompanhe os próximos passos dessa jornada.
                </p>

                <Button asChild size="lg" className="rounded-full px-10 py-8 text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                    <Link href="/contact">Quero fazer parte</Link>
                </Button>
            </div>
        </section>
    );
}
