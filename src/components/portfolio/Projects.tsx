import { motion } from "framer-motion";
import { useState } from "react";
import { Section } from "./Section";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "QuickAttend",
    tag: "Web App",
    desc: "Smart attendance management system with real-time analytics and role-based access.",
    stack: ["React", "Node.js", "MongoDB", "Socket.IO"],
    gradient: "from-purple-accent/60 to-cyan-accent/60",
    github: "https://github.com/Jashgusani123/Attendance-System",
    demo: "https://attendance-system-gold-six.vercel.app/",
  },
  {
    name: "Chess Online Multiplayer",
    tag: "Real-time",
    desc: "Real-time multiplayer chess platform built with Socket.IO and React.",
    stack: ["React", "Socket.IO", "Express", "Node.js"],
    gradient: "from-blue-accent/60 to-purple-accent/60",
    github: "https://github.com/Jashgusani123/Chess",
    demo: "https://chess-t0e4.onrender.com/",
  },
  {
    name: "Snippetix",
    tag: "AI",
    desc: "AI-powered developer resource hub with tutorials, explanations, and coding help.",
    stack: ["Next.js", "AI APIs", "Tailwind", "MongoDB"],
    gradient: "from-cyan-accent/60 to-blue-accent/60",
    github: "https://github.com/Jashgusani123/Snippetix-Frontend",
    demo: "https://snippetix-frontend.vercel.app/",
  },
  {
    name: "GitPusher",
    tag: "Open Source",
    desc: "npm package automating GitHub pushes — used 700+ times by developers.",
    stack: ["Node.js", "CLI", "npm", "GitHub API"],
    gradient: "from-purple-accent/60 to-blue-accent/60",
    github: "https://github.com/Jashgusani123/Gitpusher_npm_pkg",
    demo: "https://www.npmjs.com/package/@jashg91/gitpusher",
  },
];

const filters = ["All", "Web App", "Real-time", "AI", "Open Source"];

export function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.tag === active);

  return (
    <Section id="projects" eyebrow="Projects" title="Featured Work" subtitle="A selection of products and tools I've designed, built, and shipped.">
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              active === f ? "bg-gradient-primary text-white shadow-glow" : "glass hover:shadow-soft"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((p, i) => (
          <motion.div
            key={p.name}
            layout
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -8 }}
            className="group relative rounded-3xl p-[1.5px] bg-gradient-primary shadow-soft hover:shadow-glow transition-shadow"
          >
            <div className="rounded-3xl bg-card/90 backdrop-blur-xl overflow-hidden h-full">
              <div className={`relative h-48 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-5xl md:text-6xl font-bold text-white/90 drop-shadow-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {p.name.split(" ")[0]}
                  </div>
                </div>
                <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-xs font-semibold">
                  {p.tag}
                </div>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{p.name}</h3>
                <p className="text-sm text-foreground/80 mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.stack.map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded-full text-xs bg-secondary text-secondary-foreground font-medium">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium glass hover:shadow-glow transition-all"
                  >
                    <Github size={14} /> GitHub
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium bg-gradient-primary text-white hover:shadow-glow transition-all"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
