import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, Mail, FolderGit2, Github, Linkedin, Instagram } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";
import resumePdf from "@/assets/resume.pdf";
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
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 px-6"
      style={{ overflow: "hidden" }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 text-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for opportunities
          </div>

          {/* TITLE */}
          <h1 className="leading-[1.1] mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <span className="block text-4xl md:text-5xl font-semibold text-foreground/90 tracking-wide mb-1">
              Hi, I'm
            </span>
            <span
              className="block text-6xl md:text-8xl font-black text-gradient tracking-tight"
              style={{ letterSpacing: "-2px" }}
            >
              Jash Gusani
              <span
                className="inline-block text-3xl md:text-4xl align-middle ml-2"
                style={{
                  background: "linear-gradient(135deg, #D53E0F, #ff8c5a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 900,
                }}
              >
                ✦
              </span>
            </span>
          </h1>

          {/* Role */}
          <div className="h-10 mb-6 text-xl md:text-2xl font-semibold border-l-4 border-[#D53E0F] pl-4">
            <AnimatePresence mode="wait">
              <motion.span
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="inline-block"
                style={{
                  background: "linear-gradient(135deg, #D53E0F, #ff8c5a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {roles[idx]}
              </motion.span>
            </AnimatePresence>
          </div>

          <p className="text-lg text-foreground/70 mb-4 max-w-xl">
            Building Real-Time Experiences, AI-Powered Solutions & Modern Web Applications.
          </p>
          <p className="text-base text-foreground/80 mb-8 max-w-xl">
            I'm a Full-Stack Developer specializing in the MERN Stack and modern scalable
            applications. Passionate about real-time systems, AI integrations, and developer-focused
            tools.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <MagneticButton href={resumePdf} download primary>
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
            {[
              { Icon: Github, value: "https://github.com/Jashgusani123" },
              { Icon: Linkedin, value: "https://www.linkedin.com/in/gusanijash91/" },
              { Icon: Mail, value: "mailto:gusanijash1@gmail.com" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.value}
                target="_blank"
                rel="noopener noreferrer"
                className="glass w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-glow transition-all"
                aria-label={item.Icon === Github ? "GitHub Profile" : item.Icon === Linkedin ? "LinkedIn Profile" : "Email"}
              >
                <item.Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center px-12"
        >
          {/* Glow */}
          <div className="absolute w-[420px] h-[420px] bg-[#D53E0F]/10 blur-3xl rounded-full" />

          {/* Tilted Card */}
          <div
            className="relative p-[4px] rounded-[36px] shadow-[0_20px_80px_rgba(213,62,15,0.25)]"
            style={{
              background: "linear-gradient(135deg, #D53E0F, #EED9B9, #F3F4F4)",
            }}
          >
            <div className="bg-[#F3F4F4] p-3 rounded-[32px]">
              <img
                src={profileImg}
                alt="Jash Gusani"
                className="w-[260px] h-[360px] md:w-[300px] md:h-[420px] object-cover rounded-[26px]"
                style={{ objectPosition: "50% 10%" }}
              />
            </div>
          </div>

          {/* Floating Chips */}
          <FloatingChip text="React" className="top-4 left-0" delay={0} />
          <FloatingChip text="Node.js" className="bottom-8 left-0" delay={1.5} />
          <FloatingChip text="AI" className="top-8 right-0" delay={0.8} />
          <FloatingChip text="MongoDB" className="bottom-6 right-0" delay={2.2} />
        </motion.div>
      </div>
    </section>
  );
}

function FloatingChip({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
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
  download,
}: {
  children: React.ReactNode;
  href: string;
  primary?: boolean;
  download?: boolean;
}) {
  return (
    <motion.a
      href={href}
      download={download}
      target={download ? "_self" : "_blank"}
      rel="noopener noreferrer"
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
