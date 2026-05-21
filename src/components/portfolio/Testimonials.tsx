import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Section } from "./Section";
import { Quote } from "lucide-react";

const items = [
  { name: "Aarav Mehta", role: "Tech Lead, Bytecraft", text: "Jash ships beautiful, real-time products fast. His grasp of full-stack architecture is impressive for his age." },
  { name: "Priya Shah", role: "Product Designer", text: "Working with Jash felt effortless — he translates designs into pixel-perfect, performant UI with subtle delight." },
  { name: "Rahul Verma", role: "Open Source Maintainer", text: "GitPusher is genuinely useful. Clean code, thoughtful CLI UX, and an active maintainer." },
  { name: "Sneha Iyer", role: "Backend Engineer", text: "Strong fundamentals in Node and real-time systems. A reliable collaborator on every sprint." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % items.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <Section id="testimonials" eyebrow="Testimonials" title="Kind Words">
      <div className="relative max-w-3xl mx-auto h-72">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 glass rounded-3xl p-8 md:p-10 shadow-elegant flex flex-col justify-center"
          >
            <Quote className="text-purple-accent mb-4" size={32} />
            <p className="text-lg md:text-xl text-foreground/80 mb-6 leading-relaxed">"{items[i].text}"</p>
            <div>
              <div className="font-semibold">{items[i].name}</div>
              <div className="text-sm text-foreground/60">{items[i].role}</div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-gradient-primary" : "w-2 bg-foreground/20"}`}
            aria-label={`Testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </Section>
  );
}