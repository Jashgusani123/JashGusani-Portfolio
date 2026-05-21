import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Full-Stack Developer",
  "AI Integration Enthusiast",
  "Creative Editor with AI",
  "Real-Time App Builder",
];

export function IntroAnimation({ onDone }: { onDone: () => void }) {
  const [roleIdx, setRoleIdx] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const i = setInterval(() => setRoleIdx((r) => (r + 1) % roles.length), 700);
    const t = setTimeout(() => setExit(true), 3400);
    const t2 = setTimeout(onDone, 4200);
    return () => {
      clearInterval(i);
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, [onDone]);

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-hero overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* particles */}
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                boxShadow: "0 0 12px rgba(255,255,255,0.9)",
              }}
              animate={{ y: [0, -40, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 3 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
            />
          ))}
          {/* light streaks */}
          <motion.div
            className="absolute h-[2px] w-[200%] bg-gradient-to-r from-transparent via-white to-transparent"
            style={{ top: "30%" }}
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute h-[2px] w-[200%] bg-gradient-to-r from-transparent via-purple-accent to-transparent"
            style={{ top: "70%" }}
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          />

          {/* glow blob */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-accent/40 blur-3xl animate-glow-pulse" />

          <div className="relative z-10 text-center px-6">
            <motion.h1
              initial={{ opacity: 0, y: 30, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "-0.02em" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-bold text-gradient mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Jash Gusani
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="h-8 text-lg md:text-2xl text-foreground/70 font-medium"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIdx}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="inline-block"
                >
                  {roles[roleIdx]}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}