import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTASection() {
    return (
        <section className="py-20 md:py-24 bg-primary dark:bg-black text-primary-foreground dark:text-foreground text-center transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">
                    <span className="text-gold">Pronto para liderar com clareza?</span>
                </h2>
                <p className="max-w-[600px] mx-auto text-primary-foreground/80 dark:text-foreground/80 text-lg mb-8">
                    Agende uma consulta para discutir seus objetivos e como podemos alcançá-los juntos.
                </p>
                <Button asChild size="lg" className="px-8 py-6 rounded-full text-lg shadow-xl font-semibold bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#b8860b] text-white hover:brightness-110 transition-all border-none">
                    <Link href="/contact">Agendar Chamada</Link>
                </Button>
            </div>
        </section>
    );
}
