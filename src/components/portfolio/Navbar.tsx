import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-3 py-2 shadow-soft hidden md:flex items-center gap-1"
    >
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-white rounded-full hover:bg-primary/80 transition-colors"
        >
          {l.label}
        </a>
      ))}
     
    </motion.nav>
  );
}