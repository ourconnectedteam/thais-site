import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-background pt-8 md:pt-14 lg:pt-20 pb-24 md:pb-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <div className="flex flex-col justify-center space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
                        <div className="space-y-4">
                            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-7xl/none text-foreground">
                                Fale com clareza. <br />
                                <span className="text-primary dark:text-blue-400">Lidere com confiança.</span>
                            </h1>
                            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl leading-relaxed">
                                Coaching de Inglês Executivo Premium para profissionais que buscam comunicação persuasiva e natural em ambientes decisivos.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:scale-[1.02] transition-all bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-blue-500 dark:hover:bg-blue-600 border-none">
                                <Link href="/contact">Agendar Chamada</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full border-2 hover:bg-muted">
                                <Link href="/services">Ver Serviços</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative mx-auto lg:ml-auto w-full max-w-[500px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
                        {/* Placeholder for Portrait */}
                        <div className="absolute inset-0 bg-muted/20 flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
                            <span className="text-muted-foreground font-medium">Espaço para Retrato</span>
                        </div>
                        {/* If user provides image later, replace the above div with:
                 <Image src="/path.jpg" alt="Thais Lapolla" fill className="object-cover" />
             */}
                    </div>
                </div>
            </div>
        </section>
    );
}
