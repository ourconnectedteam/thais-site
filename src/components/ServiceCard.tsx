import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
    return (
        <Card className="group relative overflow-hidden bg-card border-border/50 hover:border-primary/50 shadow-sm hover:shadow-lg transition-all duration-500">
            <CardHeader>
                <div className="mb-4 inline-block rounded-lg bg-[#C6A84A]/10 p-3 text-[#C6A84A] dark:bg-[#C6A84A]/20 dark:text-[#C6A84A]">
                    {icon}
                </div>
                <CardTitle className="text-xl font-bold">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-6">{description}</p>
                <Link href="/services" className="inline-flex items-center text-sm font-medium text-primary hover:underline underline-offset-4">
                    Saiba mais <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </CardContent>
        </Card>
    );
}
