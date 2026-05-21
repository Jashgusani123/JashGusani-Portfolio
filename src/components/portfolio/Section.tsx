import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Section({ id, eyebrow, title, subtitle, children }: { id?: string; eyebrow?: string; title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section id={id} className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          {eyebrow && (
            <div className="inline-block glass px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 text-foreground/70">
              {eyebrow}
            </div>
          )}
          <h2 className="text-4xl md:text-5xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {title.split(" ").map((w, i) => (
              <span key={i} className={i % 2 === 1 ? "text-gradient" : ""}>{w} </span>
            ))}
          </h2>
          {subtitle && <p className="text-foreground/60 max-w-2xl mx-auto">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}