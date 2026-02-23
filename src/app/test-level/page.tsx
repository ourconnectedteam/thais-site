"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    weight: ["700", "800", "900"],
    style: ["normal", "italic"],
});

export default function TestLevelPage() {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className={`${playfair.variable} flex h-screen flex-col overflow-hidden bg-white`}>

            {/* Navbar */}
            <div className="relative z-50 flex-shrink-0">
                <Navbar />
            </div>

            {/* Split layout */}
            <main className="flex flex-1 overflow-hidden">

                {/* ── LEFT PANEL ── */}
                <div className="relative flex w-full flex-col justify-center overflow-y-auto px-8 py-10 md:w-[46%] lg:px-14 xl:px-20">

                    {/* Gold top accent line */}
                    <div
                        className="absolute left-0 right-0 top-0 h-[2px]"
                        style={{
                            background:
                                "linear-gradient(90deg, #6b4e16 0%, #d4af37 35%, #f5e6a8 58%, #d4af37 78%, transparent 100%)",
                        }}
                    />

                    {/* Animated content block */}
                    <div className="tl-reveal">

                        {/* Eyebrow label */}
                        <div className="mb-7 flex items-center gap-3">
                            <div className="h-px w-8 flex-shrink-0" style={{ background: "#d4af37" }} />
                            <p
                                className="text-[10px] font-semibold uppercase tracking-[0.28em]"
                                style={{ color: "#b8860b" }}
                            >
                                Diagnóstico Gratuito
                            </p>
                        </div>

                        {/* Heading */}
                        <h1
                            className="mb-5 tracking-tight text-[#1F253C]"
                            style={{
                                fontFamily: "var(--font-playfair)",
                                fontSize: "clamp(2.8rem, 4.5vw, 5.2rem)",
                                fontWeight: 900,
                                lineHeight: 1.02,
                            }}
                        >
                            Teste Seu
                            <br />
                            <em
                                style={{
                                    fontStyle: "italic",
                                    display: "inline-block",
                                    paddingLeft: "0.15em",
                                    marginLeft: "-0.15em",
                                    paddingRight: "0.4em",
                                    background:
                                        "linear-gradient(100deg, #B8860B 0%, #d4af37 30%, #f5e6a8 55%, #d4af37 78%, #B8860B 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                Nível
                            </em>
                            <br />
                            de Inglês
                        </h1>

                        {/* Gold rule */}
                        <div
                            className="mb-6 h-px w-12"
                            style={{
                                background:
                                    "linear-gradient(to right, #d4af37, transparent)",
                            }}
                        />

                        {/* Body text */}
                        <p
                            className="mb-9 max-w-[320px] text-[15px] font-light leading-relaxed"
                            style={{ color: "#1F253C", opacity: 0.6 }}
                        >
                            Descubra seu nível atual de inglês em apenas alguns
                            minutos e encontre o melhor caminho para sua jornada de
                            aprendizado.
                        </p>

                        {/* CTA */}
                        <Link
                            href="https://forms.gle/miUKWGrDNPhUN4Ys8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tl-cta"
                        >
                            <span>Iniciar o Teste</span>
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                aria-hidden="true"
                                className="tl-arrow"
                            >
                                <path
                                    d="M3.5 9H14.5M14.5 9L9 3.5M14.5 9L9 14.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Link>
                    </div>

                    {/* Watermark */}
                    <p
                        className="absolute bottom-6 left-8 text-[9px] font-medium uppercase tracking-[0.22em] lg:left-14 xl:left-20"
                        style={{ color: "#1F253C", opacity: 0.18 }}
                    >
                        Thais Lapolla · Executive English Coach
                    </p>
                </div>

                {/* ── RIGHT PANEL ── Photo */}
                <div className="relative hidden overflow-hidden md:block md:w-[54%]">
                    {/* Soft left-edge fade to blend with white panel */}
                    <div
                        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
                        style={{
                            background:
                                "linear-gradient(to right, #ffffff 0%, transparent 100%)",
                        }}
                    />
                    <Image
                        src="/Teste seu ingles.jpg"
                        alt="Thais Lapolla — Teste Seu Nível de Inglês"
                        fill
                        className="object-cover"
                        style={{ objectPosition: "50% 22%" }}
                        priority
                    />
                </div>

            </main>

            <style jsx global>{`
                @keyframes tl-reveal {
                    from {
                        opacity: 0;
                        transform: translateY(24px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .tl-reveal {
                    animation: tl-reveal 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.12s both;
                }

                .tl-cta {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 14px 28px;
                    background: #1f253c;
                    color: #fff;
                    font-size: 12px;
                    font-weight: 700;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    text-decoration: none;
                    border-radius: 2px;
                    border: 1px solid #1f253c;
                    transition: background 0.26s ease, color 0.26s ease,
                        box-shadow 0.26s ease;
                }

                .tl-cta:hover {
                    background: #d4af37;
                    color: #1f253c;
                    border-color: #d4af37;
                    box-shadow: 0 8px 30px rgba(212, 175, 55, 0.32);
                }

                .tl-arrow {
                    transition: transform 0.26s ease;
                }

                .tl-cta:hover .tl-arrow {
                    transform: translateX(4px);
                }
            `}</style>
        </div>
    );
}
