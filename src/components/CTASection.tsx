import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTASection() {
    return (
        <section className="py-24 bg-[#1e2532] text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto space-y-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gold leading-tight inline-block pb-1">
                        Falar e comunicar não são sinônimos.
                    </h2>

                    <div className="space-y-6 text-xl md:text-2xl font-light text-gray-300 leading-relaxed">
                        <p>
                            Você quer um programa desenvolvido exclusivamente para você?
                        </p>
                        <Button
                            asChild
                            variant="link"
                            className="p-0 h-auto text-xl md:text-2xl font-normal text-white underline decoration-[#C6A84A] decoration-2 underline-offset-8 hover:text-[#C6A84A] transition-colors"
                        >
                            <Link href="/contact">“Fale comigo”</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
