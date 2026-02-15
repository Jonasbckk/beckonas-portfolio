import { motion } from "framer-motion";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const skillsData = [
  { subject: 'Figma', A: 99, fullMark: 100 },
  { subject: 'Webflow', A: 99, fullMark: 100 },
  { subject: 'CSS3', A: 95, fullMark: 100 },
  { subject: 'Node.js', A: 90, fullMark: 100 },
  { subject: 'React', A: 85, fullMark: 100 },
  { subject: 'Docker', A: 80, fullMark: 100 },
];

const backendData = [
  { name: 'Node.js', level: 90 },
  { name: 'Docker', level: 80 },
  { name: 'Java', level: 75 },
  { name: 'PostgreSQL', level: 75 },
];

const designData = [
  { name: 'Figma', level: 99 },
  { name: 'Webflow', level: 99 },
  { name: 'CSS3', level: 95 },
  { name: 'React', level: 85 },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 skew-y-3 z-0 transform origin-top-left" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Tech-Stack & Skills</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Wir setzen auf modernste Technologien, um schnelle, skalierbare und interaktive Websites und Web-Apps zu entwickeln. 
                Unser Tech-Stack wird ständig erweitert, um Ihnen stets innovative Lösungen zu liefern.
              </p>

              <Tabs defaultValue="frontend" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8 bg-black/20">
                  <TabsTrigger value="frontend">Development</TabsTrigger>
                  <TabsTrigger value="design">Design & Tools</TabsTrigger>
                </TabsList>
                <TabsContent value="frontend">
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={backendData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" horizontal={false} />
                        <XAxis type="number" hide domain={[0, 100]} />
                        <YAxis dataKey="name" type="category" stroke="rgba(255,255,255,0.5)" width={80} tick={{fill: 'rgba(255,255,255,0.7)', fontSize: 12}} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                          cursor={{fill: 'rgba(255,255,255,0.05)'}}
                        />
                        <Bar dataKey="level" fill="hsl(265 89% 66%)" radius={[0, 4, 4, 0]} barSize={20} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </TabsContent>
                <TabsContent value="design">
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={designData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" horizontal={false} />
                        <XAxis type="number" hide domain={[0, 100]} />
                        <YAxis dataKey="name" type="category" stroke="rgba(255,255,255,0.5)" width={80} tick={{fill: 'rgba(255,255,255,0.7)', fontSize: 12}} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                          cursor={{fill: 'rgba(255,255,255,0.05)'}}
                        />
                        <Bar dataKey="level" fill="hsl(190 90% 50%)" radius={[0, 4, 4, 0]} barSize={20} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full max-w-[500px] aspect-square relative"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full z-0" />
              <div className="relative z-10 w-full h-full glass-card rounded-2xl p-4 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillsData}>
                    <PolarGrid stroke="rgba(255,255,255,0.1)" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar
                      name="Skills"
                      dataKey="A"
                      stroke="hsl(265 89% 66%)"
                      strokeWidth={3}
                      fill="hsl(265 89% 66%)"
                      fillOpacity={0.3}
                    />
                    <Tooltip 
                       contentStyle={{ backgroundColor: 'rgba(0,0,0,0.9)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}
                       itemStyle={{ color: '#fff' }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}