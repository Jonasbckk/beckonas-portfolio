import { motion } from "framer-motion";
import { Layout, Smartphone, Globe, Code, Zap, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "Crafting intuitive and visually stunning interfaces that engage users and drive conversions."
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Building robust, scalable, and high-performance websites using the latest technologies."
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Ensuring your website looks and performs perfectly on all devices, from mobile to desktop."
  },
  {
    icon: Globe,
    title: "E-Commerce",
    description: "Creating seamless online shopping experiences that help your business grow."
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Improving your website's visibility on search engines to attract more organic traffic."
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing website speed and loading times for the best possible user experience."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive digital solutions tailored to your unique needs. We handle everything from concept to deployment.
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