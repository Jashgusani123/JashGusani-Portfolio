import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, Mail, FolderGit2, Github, Linkedin, Instagram } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const roles = [
  "Full-Stack Developer",
  "AI Integration Enthusiast",
  "Creative Editor with AI",
  "Real-Time App Builder",
];

export function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setIdx((v) => (v + 1) % roles.length), 2200);
    return () => clearInterval(i);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 text-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Hi, I'm <span className="text-gradient">Jash Gusani</span>
          </h1>
          <div className="h-10 mb-6 text-xl md:text-2xl font-semibold text-foreground/80">
            <AnimatePresence mode="wait">
              <motion.span
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="inline-block bg-gradient-primary bg-clip-text text-transparent"
              >
                {roles[idx]}
              </motion.span>
            </AnimatePresence>
          </div>
          <p className="text-lg text-foreground/70 mb-4 max-w-xl">
            Building Real-Time Experiences, AI-Powered Solutions & Modern Web Applications.
          </p>
          <p className="text-base text-foreground/60 mb-8 max-w-xl">
            I'm a Full-Stack Developer specializing in the MERN Stack and modern scalable applications.
            Passionate about real-time systems, AI integrations, and developer-focused tools.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <MagneticButton href="#" primary>
              <Download size={18} /> Download Resume
            </MagneticButton>
            <MagneticButton href="#contact">
              <Mail size={18} /> Contact Me
            </MagneticButton>
            <MagneticButton href="#projects">
              <FolderGit2 size={18} /> View Projects
            </MagneticButton>
          </div>
          <div className="flex gap-3">
            {[Github, Linkedin, Mail, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="glass w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-glow transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute w-[420px] h-[420px] rounded-full bg-purple-accent/40 blur-3xl animate-glow-pulse" />
          <div className="absolute w-[380px] h-[380px] rounded-full bg-cyan-accent/30 blur-2xl animate-glow-pulse" style={{ animationDelay: "1s" }} />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="relative p-1.5 rounded-full"
            style={{ background: "conic-gradient(from 0deg, oklch(0.7 0.2 295), oklch(0.78 0.15 210), oklch(0.7 0.18 250), oklch(0.7 0.2 295))" }}
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="bg-background rounded-full p-2"
            >
              <img
                src={profileImg}
                alt="Jash Gusani"
                width={360}
                height={360}
                className="w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full object-cover"
              />
            </motion.div>
          </motion.div>
          {/* floating chips */}
          <FloatingChip text="React" className="top-6 -left-2" delay={0} />
          <FloatingChip text="Node.js" className="bottom-10 -left-4" delay={1.5} />
          <FloatingChip text="AI" className="top-12 -right-4" delay={0.8} />
          <FloatingChip text="MongoDB" className="bottom-4 right-2" delay={2.2} />
        </motion.div>
      </div>
    </section>
  );
}

function FloatingChip({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 4, repeat: Infinity, delay, ease: "easeInOut" }}
      className={`absolute glass px-4 py-2 rounded-full text-sm font-semibold shadow-soft ${className}`}
    >
      {text}
    </motion.div>
  );
}

export function MagneticButton({
  children,
  href,
  primary,
}: {
  children: React.ReactNode;
  href: string;
  primary?: boolean;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all ${
        primary
          ? "bg-gradient-primary text-white shadow-glow"
          : "glass hover:shadow-soft text-foreground"
      }`}
    >
      {children}
    </motion.a>
  );
}