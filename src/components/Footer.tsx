import Link from "next/link";
import { Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t bg-muted/30">
            <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
                <div className="grid gap-8 md:grid-cols-3">
                    <div>
                        <h3 className="text-lg font-semibold text-gold mb-4">Thais Lapolla</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                            Coaching de Inglês Executivo para líderes que buscam clareza, confiança e impacto em ambientes de alta pressão.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-muted-foreground">Links Rápidos</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-sm text-foreground/80 hover:text-[#d4af37] transition-colors">
                                    Sobre Mim
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-sm text-foreground/80 hover:text-[#d4af37] transition-colors">
                                    Soluções
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-foreground/80 hover:text-[#d4af37] transition-colors">
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-muted-foreground">Let&apos;s Get Connected</h3>
                        <div className="flex space-x-4 mb-4">
                            <a
                                href="https://www.linkedin.com/in/thaislapolla/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-[#d4af37] transition-colors"
                            >
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a
                                href="https://www.instagram.com/teacherthaislapolla/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-[#d4af37] transition-colors"
                            >
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </a>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            <a href="mailto:contato@thaislapolla.com" className="hover:text-[#d4af37] transition-colors">
                                contato@thaislapolla.com
                            </a>
                        </p>
                    </div>
                </div>
                <div className="mt-12 border-t pt-8 text-center text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Thais Lapolla. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
