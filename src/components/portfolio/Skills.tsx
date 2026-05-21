import { motion } from "framer-motion";
import { Section } from "./Section";

const groups = [
  { title: "Languages", items: ["JavaScript", "TypeScript", "Java", "Python", "MongoDB", "SQL"] },
  { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Redux", "Framer Motion", "MUI"] },
  { title: "Backend", items: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "Authentication"] },
  { title: "Tools & More", items: ["Git", "GitHub", "Firebase", "Socket.IO", "AI Tools", "npm Publishing"] },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="My Tech Toolkit" subtitle="The tools and frameworks I use to build delightful, scalable products.">
      <div className="grid md:grid-cols-2 gap-6">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: gi * 0.1 }}
            className="glass rounded-2xl p-6 shadow-soft"
          >
            <h3 className="text-xl font-bold mb-4 text-gradient" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {g.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: gi * 0.1 + i * 0.04 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-white/60 border border-white/80 hover:bg-gradient-primary hover:text-white hover:border-transparent hover:shadow-glow transition-all cursor-default"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}