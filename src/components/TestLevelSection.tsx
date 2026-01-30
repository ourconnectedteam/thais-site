"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function TestLevelSection() {
    return (
        <section className="relative w-full py-32 lg:py-40 overflow-hidden bg-[#050510] text-white">
            {/* Background Gradients/Glows to match Liquid Brokers style */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-40" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none opacity-30" />

            <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">

                {/* Text Content */}
                <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-xl">
                        Test Your English Level
                    </h2>
                    <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
                        Find out your current English level in just a few minutes and discover the best path for your learning journey.
                    </p>

                    <div className="pt-4">
                        <Button
                            asChild
                            size="lg"
                            className="rounded-full px-8 py-6 text-lg font-semibold shadow-2xl shadow-primary/20 hover:scale-105 transition-transform duration-300"
                        >
                            <Link
                                href="https://forms.gle/miUKWGrDNPhUN4Ys8"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Start the Test
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* 3D Object - Positioned behind/below text */}
                {/* Using pointer-events-none to prevent blocking interactions if it overlaps, but z-index handles it */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 md:-translate-y-1/4 z-[-1] w-[120%] max-w-[1000px] aspect-square flex items-center justify-center opacity-90 pointer-events-none">
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

            {/* CSS Animation for Float - Inline since it's specific */}
            <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
      `}</style>
        </section>
    );
}
