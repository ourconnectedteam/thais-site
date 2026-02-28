import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutVisual() {
    return (
        <section className="relative w-full overflow-hidden bg-background">
            {/* Visual Header Block - Full Width */}
            <div className="relative w-full aspect-[21/9] lg:aspect-[2.5/1] min-h-[600px]">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image src="/About me (2).png" fill className="object-cover object-bottom scale-[1.18] origin-bottom" alt="Thais Lapolla" priority />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10" />
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0">
                    <div className="container mx-auto px-4 md:px-6 h-full flex flex-col justify-between py-12 md:py-16">
                        <div className="max-w-xs">
                            <p className="text-xl md:text-2xl uppercase tracking-widest text-white/80 font-medium leading-relaxed">
                                <span className="text-gold whitespace-nowrap">Empoderando líderes</span> <br />
                                para transformar <br />
                                fluência em <br />
                                <span className="whitespace-nowrap"><span className="text-gold">influência</span>.</span>
                            </p>
                        </div>

                        <div>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-tighter text-white">
                                Sobre Mim
                            </h1>
                        </div>
                    </div>

                    {/* Floating Card - Adjusted positioning or kept as is? User didn't explicitly say to remove, but "don't stretch...". 
                        I'll keep it but ensure it fits in the new layout. 
                        If it's full width, the 'right-8' positioning still works relative to the viewport. 
                    */}
                    <div className="absolute top-12 right-4 md:right-12 lg:right-24 bg-white/80 dark:bg-black/50 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-[280px] hidden md:block">
                        <p className="text-sm font-medium text-muted-foreground mb-4 leading-relaxed">
                            Faça parte da nossa comunidade de líderes influentes.
                        </p>
                        <Button size="sm" className="w-full text-xs rounded-full bg-primary text-white hover:bg-primary/80 dark:bg-white dark:text-primary">
                            Começar minha jornada
                        </Button>
                    </div>
                </div>
            </div>

        </section>
    );
}
