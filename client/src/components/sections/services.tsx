import { motion } from "framer-motion";
import { Layout, Smartphone, Globe, Code, Zap, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "Wir gestalten intuitive und visuell überzeugende Designs, die Nutzer begeistern und die Conversion fördern."
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Leistungsstarke, skalierbare Websites, die mit modernster Technologie zuverlässig funktionieren."
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Perfekte Darstellung und Leistung auf allen Endgeräten, egal ob Smartphone, Tablet oder Desktop."
  },
  {
    icon: Globe,
    title: "E-Commerce",
    description: "Reibungslose E-Commerce-Lösungen, die Kundenerlebnisse verbessern und den Umsatz steigern."
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Ihre Website wird suchmaschinenfreundlich gestaltet, damit Sie mehr organische Besucher anziehen."
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Maximale Geschwindigkeit und kurze Ladezeiten für die beste User Experience."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Unsere Leistungen</h2>
          <p className="text-muted-foreground text-lg">
            Websites und Web-Apps, perfekt abgestimmt auf Ihre Anforderungen. Von der Idee bis zum fertigen Produkt begleiten wir Sie durch jeden Schritt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/30 backdrop-blur-sm border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="text-xl font-display">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground/80 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}