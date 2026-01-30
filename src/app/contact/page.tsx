import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, CheckCircle2 } from "lucide-react";

export const metadata = {
    title: "Contact | Thais Lapolla",
    description: "Get in touch for executive coaching inquiries.",
};

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 bg-background text-foreground min-h-[90vh] flex items-center justify-center relative overflow-hidden transition-colors duration-300">
                {/* Background Glow Effects */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-900/10 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />

                <div className="container mx-auto px-4 md:px-8 py-12 lg:py-20 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Side: Content */}
                        <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
                            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-muted/50 text-xs font-medium uppercase tracking-wider backdrop-blur-sm border border-border">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span>Aceitando Novos Clientes</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-foreground">
                                Estamos aqui <br /> para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">ajudar.</span>
                            </h1>

                            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                                Pronto para elevar sua comunicação? Arctic reduziu atrasos em projetos em 30% e transformou o alinhamento da equipe global. Vamos discutir seus objetivos.
                            </p>

                            <div className="space-y-4 pt-4">
                                <div className="flex items-center space-x-3 text-foreground/80">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                    <span>Estratégia de Coaching Executivo</span>
                                </div>
                                <div className="flex items-center space-x-3 text-foreground/80">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                    <span>Auditorias de Comunicação Corporativa</span>
                                </div>
                                <div className="flex items-center space-x-3 text-foreground/80">
                                    <Mail className="w-5 h-5 text-emerald-500" />
                                    <span>contact@thaislapolla.com</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Form Card */}
                        <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-100">
                            <div className="bg-card/50 backdrop-blur-md border border-border p-8 rounded-3xl shadow-2xl">
                                <ContactForm />
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-tr from-blue-500 to-emerald-500 rounded-full blur-2xl opacity-40 -z-10" />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
