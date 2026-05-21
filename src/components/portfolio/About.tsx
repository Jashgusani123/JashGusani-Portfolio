import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Section } from "./Section";
import {
  GraduationCap,
  Code2,
  BrainCircuit,
  Sparkles,
  Rocket,
  BookOpen,
} from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    title: "Computer Engineering Student",
    desc: "Currently pursuing Diploma in Computer Engineering at Government Polytechnic Junagadh with a strong academic focus and practical development experience.",
  },

  {
    icon: Code2,
    title: "Full-Stack Developer",
    desc: "Passionate about building scalable web applications, real-time systems, modern dashboards, and seamless user experiences.",
  },

  {
    icon: BrainCircuit,
    title: "AI & Agentic Exploration",
    desc: "Learning LLMs, AI agents, prompt orchestration, and intelligent workflows to create smarter developer-focused applications.",
  },

  {
    icon: Rocket,
    title: "Real-World Product Building",
    desc: "Working on educational platforms, ERP systems, automation tools, and developer products used by real users and teams.",
  },

  {
    icon: Sparkles,
    title: "Creative & Visual Editing",
    desc: "Interested in creative editing, AI character visuals, short-form content creation, and modern digital storytelling.",
  },

  {
  icon: BookOpen,
  title: "Certifications & Learning",
  desc: "Earned C++ and Python certifications from IIT Bombay, strengthening programming fundamentals.",
},
];

const stats = [
  { value: 9.45, label: "Current CGPA", suffix: "/10" },
  { value: 20, label: "Projects Built", suffix: "+" },
  { value: 1200, label: "npm Downloads", suffix: "+" },
];

function Counter({
  value,
  suffix,
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const start = Date.now();
    const dur = 1500;

    const tick = () => {
      const p = Math.min((Date.now() - start) / dur, 1);

      setN(Number((p * value).toFixed(value % 1 ? 2 : 0)));

      if (p < 1) requestAnimationFrame(tick);
    };

    tick();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="A passionate developer, student, and creator focused on building impactful digital experiences and exploring modern technologies."
    >
      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: i * 0.07,
            }}
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            className="
              rounded-2xl
              p-[1px]
              shadow-[0_10px_40px_rgba(213,62,15,0.10)]
            "
            style={{
              background:
                "linear-gradient(135deg, #D53E0F, #EED9B9, #F3F4F4)",
            }}
          >
            <div
              className="
                h-full
                rounded-2xl
                p-6
                bg-[#F3F4F4]/90
                backdrop-blur-xl
              "
            >
              <div
                className="
                  w-12
                  h-12
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  mb-4
                  text-white
                "
                style={{
                  background:
                    "linear-gradient(135deg, #D53E0F, #b83208)",
                }}
              >
                <c.icon size={22} />
              </div>

              <h3
                className="
                  font-bold
                  text-lg
                  mb-2
                  text-[#2C2C2C]
                "
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {c.title}
              </h3>

              <p className="text-sm leading-relaxed text-[#2C2C2C]/70">
                {c.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div
        className="
          rounded-3xl
          p-[1px]
          shadow-[0_10px_50px_rgba(213,62,15,0.12)]
        "
        style={{
          background:
            "linear-gradient(135deg, #D53E0F, #EED9B9, #F3F4F4)",
        }}
      >
        <div
          className="
            rounded-3xl
            bg-[#F3F4F4]/90
            backdrop-blur-xl
            p-8
            md:p-10
          "
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="
                    text-4xl
                    md:text-5xl
                    font-bold
                    mb-2
                    text-[#D53E0F]
                  "
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  <Counter
                    value={s.value}
                    suffix={s.suffix}
                  />
                </div>

                <div className="text-sm text-[#2C2C2C]/70">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}