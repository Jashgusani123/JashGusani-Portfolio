import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function BackgroundFX() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] rounded-full bg-purple-accent/40 blur-3xl animate-blob" />
      <div className="absolute top-[40%] right-[-150px] w-[600px] h-[600px] rounded-full bg-cyan-accent/40 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
      <div className="absolute bottom-[-200px] left-[30%] w-[550px] h-[550px] rounded-full bg-blue-accent/30 blur-3xl animate-blob" style={{ animationDelay: "8s" }} />
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, oklch(0.5 0.15 280 / 0.07) 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />
    </div>
  );
}

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [hover, setHover] = useState(false);
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const el = e.target as HTMLElement | null;
      setHover(!!el?.closest("a,button,[role='button'],input,textarea,label"));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <>
      {/* Trail halo */}
      <motion.div
        className="fixed pointer-events-none z-[60] rounded-full hidden md:block"
        animate={{
          width: hover ? 56 : 36,
          height: hover ? 56 : 36,
          x: pos.x - (hover ? 28 : 18),
          y: pos.y - (hover ? 28 : 18),
        }}
        transition={{ type: "spring", mass: 0.4, stiffness: 180, damping: 18 }}
        style={{
          background: "radial-gradient(circle, rgba(213,62,15,0.35), rgba(213,62,15,0.15) 60%, transparent 75%)",
          filter: "blur(2px)",
        }}
      />
      {/* Core dot */}
      <motion.div
        className="fixed pointer-events-none z-[61] rounded-full hidden md:block"
        animate={{
          width: hover ? 14 : 10,
          height: hover ? 14 : 10,
          x: pos.x - (hover ? 7 : 5),
          y: pos.y - (hover ? 7 : 5),
        }}
        transition={{ type: "spring", mass: 0.2, stiffness: 600, damping: 30 }}
        style={{
          backgroundColor: "#D53E0F",
          boxShadow: "0 0 18px rgba(213,62,15,0.7)",
        }}
      />
    </>
  );
}

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setP(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[70]">
      <div className="h-full bg-gradient-primary transition-all" style={{ width: `${p}%` }} />
    </div>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-primary text-white shadow-glow flex items-center justify-center hover:scale-110 transition-transform"
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}