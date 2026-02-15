import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import avatarPlaceholder from "@/assets/avatar-placeholder.png";

export function About() {
  return (
    <section id="about" className="py-24 bg-black/40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full md:w-1/2 relative">
             <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative aspect-square max-w-md mx-auto"
            >
              {/* Decorative elements */}
              <div className="absolute -inset-4 border border-primary/30 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute -inset-8 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/10 relative z-10 bg-card">
                 <img 
                   src={avatarPlaceholder} 
                   alt="Profile" 
                   className="w-full h-full object-cover"
                 />
              </div>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">About Beckonas</h2>
              <p className="text-xl text-primary font-medium mb-6">
                Creating digital experiences that matter.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Ich bin ein leidenschaftlicher Webentwickler und Designer mit einem Auge für Details. 
                Mit Beckonas habe ich es mir zur Aufgabe gemacht, Unternehmen und Visionären dabei zu helfen, 
                ihre digitale Präsenz auf das nächste Level zu heben. Ich glaube an Design, das nicht nur gut aussieht, 
                sondern funktioniert.
              </p>

              <div className="space-y-4">
                {[
                  "Maßgeschneiderte Lösungen für jedes Budget",
                  "Modernste Technologien & Frameworks",
                  "Fokus auf Performance & SEO",
                  "Persönliche Beratung & Support"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}