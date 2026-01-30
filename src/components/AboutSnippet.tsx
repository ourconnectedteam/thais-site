import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutSnippet() {
    return (
        <section className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                    Eleve sua comunicação.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Olá, sou Thais Lapolla. Ajudo executivos internacionais a superar a barreira entre fluência e influência.
                    Meu coaching vai além da gramática — trata-se de dominar a sala, articular ideias complexas com precisão
                    e liderar com confiança autêntica em qualquer ambiente de língua inglesa.
                </p>
                <Button asChild variant="link" className="text-lg text-primary underline-offset-4 hover:text-primary/80 dark:text-blue-400 dark:hover:text-blue-300">
                    <Link href="/about">Leia mais sobre minha abordagem &rarr;</Link>
                </Button>
            </div>
        </section>
    );
}
