import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTASection() {
    return (
        <section className="py-20 md:py-24 bg-primary text-primary-foreground text-center">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                    Pronto para liderar com clareza?
                </h2>
                <p className="max-w-[600px] mx-auto text-primary-foreground/80 text-lg mb-8">
                    Agende uma consulta para discutir seus objetivos e como podemos alcançá-los juntos.
                </p>
                <Button asChild size="lg" variant="secondary" className="px-8 py-6 rounded-full text-lg shadow-lg font-semibold">
                    <Link href="/contact">Agendar Chamada</Link>
                </Button>
            </div>
        </section>
    );
}
