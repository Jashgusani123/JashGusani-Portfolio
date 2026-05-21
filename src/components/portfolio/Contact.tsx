import { motion } from "framer-motion";
import { useState } from "react";
import { Section } from "./Section";
import { Github, Linkedin, Mail, Instagram, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section id="contact" eyebrow="Contact" title="Let's Build Together" subtitle="Have a project, idea, or collaboration in mind? Drop a message.">
      <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 glass rounded-3xl p-8 shadow-soft"
        >
          <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Get in touch</h3>
          <p className="text-foreground/80 mb-6 text-sm">I'm available for freelance work, collaboration, and full-time opportunities.</p>
          <div className="space-y-3">
            {[
              { Icon: Mail, label: "Mail" , value: "gusanijash1@gmail.com" },
              { Icon: Github, label: "GitHub" , value: "https://github.com/Jashgusani123" },
              { Icon: Linkedin, label: "LinkedIn" , value: "https://www.linkedin.com/in/gusanijash91/" },
            ].map((it, i) => (
              <a key={i} href={it.value} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/40 transition-colors" aria-label={it.Icon === Github ? "GitHub Profile" : it.Icon === Linkedin ? "LinkedIn Profile" : "Email"}>
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white">
                  <it.Icon size={16} />
                </div>
                <span className="text-sm font-medium">{it.label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); }}
          className="md:col-span-3 glass rounded-3xl p-8 shadow-soft space-y-4"
        >
          <Field label="Your Name" id="name" />
          <Field label="Email" id="email" type="email" />
          <Field label="Message" id="message" textarea />
          <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-white font-medium shadow-glow hover:scale-105 transition-transform">
            {sent ? "Sent!" : (<>Send Message <Send size={16} /></>)}
          </button>
        </motion.form>
      </div>
      <footer className="text-center text-sm text-foreground/50 mt-16">
        © {new Date().getFullYear()} Jash Gusani. Crafted with care.
      </footer>
    </Section>
  );
}

function Field({ label, id, type = "text", textarea }: { label: string; id: string; type?: string; textarea?: boolean }) {
  const cls = "peer w-full bg-white/50 border border-white/80 rounded-xl px-4 pt-6 pb-2 text-sm outline-none focus:border-purple-accent focus:bg-white/80 transition-all";
  return (
    <div className="relative">
      {textarea ? (
        <textarea id={id} rows={4} placeholder=" " className={cls} required />
      ) : (
        <input id={id} type={type} placeholder=" " className={cls} required />
      )}
      <label htmlFor={id} className="absolute left-4 top-2 text-xs font-medium text-foreground/80 pointer-events-none">
        {label}
      </label>
    </div>
  );
}