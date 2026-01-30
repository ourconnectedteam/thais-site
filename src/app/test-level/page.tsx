"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function TestLevelPage() {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    // Solid black background to better match the mix-blend-screen
    // Added 'dark' class to force Navbar and children to use Dark Mode thematic tokens (e.g. dark background) 
    // regardless of system preference, since this page is always black.
    return (
        <div className="flex h-screen flex-col overflow-hidden bg-black text-white dark">
            <div className="relative z-50">
                <Navbar />
            </div>

            <main className="relative flex-1 w-full h-full">

                {/* Container for content - Using absolute positioning for extreme corners */}
                <div className="relative z-10 w-full h-full p-6 md:p-12 lg:p-16">

                    {/* Top Left: Title */}
                    <div className="absolute top-6 left-6 md:top-10 md:left-12 lg:top-12 lg:left-16 max-w-sm text-left animate-in fade-in slide-in-from-left-6 duration-700 z-20">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-xl leading-[1.0]">
                            Teste Seu <br /> Nível de Inglês
                        </h1>
                    </div>

                    {/* Bottom Right: Subtitle + Button - Pushed further down */}
                    <div className="absolute bottom-6 right-6 md:bottom-8 md:right-12 lg:bottom-10 lg:right-16 max-w-xs md:max-w-sm text-right flex flex-col items-end gap-6 animate-in fade-in slide-in-from-right-6 duration-700 delay-200 z-20">
                        <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed">
                            Descubra seu nível atual de inglês em apenas alguns minutos e encontre o melhor caminho para sua jornada de aprendizado.
                        </p>
                        <div className="pt-2">
                            <Button
                                asChild
                                className="rounded-full px-8 py-6 text-base font-semibold shadow-2xl shadow-primary/20 hover:scale-105 transition-transform duration-300"
                            >
                                <Link
                                    href="https://forms.gle/miUKWGrDNPhUN4Ys8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Iniciar o Teste
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* 3D Object - Centered and Smaller */}
                    {/* Added mask-[radial-gradient] to ensure edges fade out perfectly if colors mismatch slightly */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[80vw] md:w-[45vw] max-w-[650px] aspect-square flex items-center justify-center opacity-100 pointer-events-none mix-blend-screen [mask-image:radial-gradient(closest-side,black_60%,transparent_100%)]">
                        {/* Reverted to original Float Animation */}
                        <div className="relative w-full h-full animate-float-slow">
                            <Image
                                src="/3d-book.png"
                                alt="English Level Test"
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>

                </div>

            </main>

            {/* Reverted Float Animation */}
            <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
}
