import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Section } from "./Section";
import { Code2, Cpu, Database, Rocket, Sparkles, GitBranch } from "lucide-react";

const cards = [
  { icon: Code2, title: "MERN Stack Developer", desc: "MongoDB, Express, React, Node.js — end-to-end ownership." },
  { icon: Rocket, title: "React / Next.js", desc: "Modern UIs with SSR, RSC and performance-first thinking." },
  { icon: Database, title: "Java Spring Boot", desc: "Building robust backend services and REST APIs." },
  { icon: Sparkles, title: "AI Agent Learning", desc: "Exploring AI agents, LLM tooling, and integrations." },
  { icon: Cpu, title: "Real-Time Applications", desc: "Socket.IO, low-latency systems and live collaboration." },
  { icon: GitBranch, title: "Open Source Contributor", desc: "Author of npm packages used by developers worldwide." },
];

const stats = [
  { value: 20, label: "Projects Built", suffix: "+" },
  { value: 700, label: "npm Downloads", suffix: "+" },
  { value: 25, label: "Technologies Used", suffix: "+" },
  { value: 150, label: "Contributions", suffix: "+" },
];

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const dur = 1500;
    const tick = () => {
      const p = Math.min((Date.now() - start) / dur, 1);
      setN(Math.floor(p * value));
      if (p < 1) requestAnimationFrame(tick);
    };
    tick();
  }, [inView, value]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Crafting Modern Experiences" subtitle="A developer blending real-time systems, AI, and beautiful interfaces into one cohesive craft.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            whileHover={{ y: -6 }}
            className="glass rounded-2xl p-6 shadow-soft hover:shadow-glow transition-shadow group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
              <c.icon size={22} />
            </div>
            <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
            <p className="text-sm text-foreground/60">{c.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="glass rounded-3xl p-8 md:p-10 shadow-elegant">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-sm text-foreground/60">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}