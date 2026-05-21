import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Full-Stack Developer",
  "AI Integration Enthusiast",
  "Creative Editor with AI",
  "Real-Time App Builder",
];

const FULL_NAME = "Jash Gusani";

export function IntroAnimation({ onDone }: { onDone: () => void }) {
  const [roleIdx, setRoleIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [exit, setExit] = useState(false);

  useEffect(() => {
    let n = 0;
    const typer = setInterval(() => {
      n += 1;
      setTyped(FULL_NAME.slice(0, n));
      if (n >= FULL_NAME.length) clearInterval(typer);
    }, 110);
    const i = setInterval(() => setRoleIdx((r) => (r + 1) % roles.length), 800);
    const t = setTimeout(() => setExit(true), 3800);
    const t2 = setTimeout(onDone, 4600);
    return () => {
      clearInterval(typer);
      clearInterval(i);
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, [onDone]);

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#EED9B9" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.08, filter: "blur(16px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* subtle grain texture */}
          <div
            className="absolute inset-0 opacity-[0.18] mix-blend-multiply pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
            }}
          />
          {/* soft orange glow pulse */}
          <motion.div
            className="absolute w-[520px] h-[520px] rounded-full blur-3xl"
            style={{ backgroundColor: "rgba(213,62,15,0.18)" }}
            animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 text-center px-6">
            <motion.h1
              initial={{ opacity: 0, filter: "blur(14px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#D53E0F" }}
            >
              {typed}
              <motion.span
                aria-hidden
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.9, repeat: Infinity }}
                className="inline-block ml-1 w-[0.08em] h-[0.9em] align-middle"
                style={{ backgroundColor: "#D53E0F" }}
              />
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="h-8 text-lg md:text-2xl font-medium"
              style={{ color: "#2C2C2C" }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIdx}
                  initial={{ y: 14, opacity: 0, filter: "blur(6px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -14, opacity: 0, filter: "blur(6px)" }}
                  transition={{ duration: 0.45 }}
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