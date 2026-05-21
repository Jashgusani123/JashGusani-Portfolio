import { motion } from "framer-motion";
import { Section } from "./Section";

const items = [
  { year: "2024 — Present", title: "MERN Stack Development", desc: "Building scalable real-time apps and refining product engineering practices." },
  { year: "2024", title: "Internship Experience", desc: "Shipped production features across full-stack tickets, code review, and CI." },
  { year: "2023 — Present", title: "Open Source Contributions", desc: "Authored GitPusher and contributed PRs to community packages." },
  { year: "2024 — Present", title: "AI Learning Journey", desc: "Exploring AI agents, prompt orchestration, and LLM-powered tooling." },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Journey" title="My Experience" subtitle="A timeline of how I've grown as a developer.">
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-accent via-cyan-accent to-blue-accent md:-translate-x-1/2" />
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative pl-12 md:pl-0 mb-10 md:grid md:grid-cols-2 md:gap-8 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}
          >
            <div className={`md:[direction:ltr] ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
              <div className="glass rounded-2xl p-6 shadow-soft hover:shadow-glow transition-shadow inline-block text-left">
                <div className="text-xs font-semibold text-purple-accent tracking-widest uppercase mb-1">{it.year}</div>
                <h3 className="text-lg font-bold mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{it.title}</h3>
                <p className="text-sm text-foreground/60">{it.desc}</p>
              </div>
            </div>
            <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}