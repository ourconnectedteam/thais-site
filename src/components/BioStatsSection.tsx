import TestimonialsSection from "@/components/TestimonialsSection";
import Link from "next/link";

export default function BioStatsSection() {
    return (
        <section className="pt-36 pb-12 md:pt-48 md:pb-16 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">

                <div className="max-w-3xl mx-auto text-center space-y-12 mb-16">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-[1.1]">
                        Fluência abre portas. <br />
                        <span className="text-gold pb-2 inline-block">
                            Influência constrói legado.
                        </span>
                    </h2>

                    <div className="text-lg md:text-[1.35rem] text-[#444444] leading-relaxed max-w-2xl mx-auto space-y-8 font-normal">
                        <p>
                            Sou Thais Lapolla. Especialista em <span className="font-medium text-[#222222]">comunicação estratégica</span> em inglês para
                            <span className="font-medium text-[#222222]"> líderes e executivos</span> que atuam em ambientes globais de alta complexidade e desejam fortalecer sua presença, consolidar autoridade e sustentar decisões relevantes em esferas internacionais.
                        </p>

                        <p>
                            Minha abordagem integra <span className="font-medium text-[#222222]">precisão, intenção e posicionamento</span> para fortalecer sua presença, consolidar autoridade e sustentar decisões relevantes em esferas internacionais.
                        </p>
                    </div>

                    <div className="pt-8">
                        <Link
                            href="/about"
                            className="group inline-flex items-center px-8 py-4 text-lg font-medium text-[#111111] bg-transparent border border-[#111111]/20 rounded-xl hover:border-[#C6A84A] transition-all duration-300"
                        >
                            Descubra por que minha abordagem vai além da fluência
                            <span className="ml-3 transition-transform duration-200 group-hover:translate-x-1">→</span>
                        </Link>
                    </div>
                </div>

                {/* Testimonials */}
                <TestimonialsSection />

            </div>
        </section>
    );
}
