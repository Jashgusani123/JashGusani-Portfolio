import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    year: "2024",
    title: "MERN Stack Internship",
    desc: "Contributed to educational platforms with multilingual resource management, Redux-based state systems, smooth chapter navigation, and responsive admin dashboards.",
  },

  {
    year: "2025",
    title: "Frontend Developer — Educational Platforms",
    desc: "Built modern frontend experiences for Sitara Akka platforms focused on accessibility, bilingual content support, responsive UI systems, and smooth user interaction flows.",
    link: "https://sitara-akka-resource-sharing-tool-f.vercel.app/",
    linkText: "Visit Platform",
  },

  {
    year: "2024 — Present",
    title: "Full-Stack Developer — College ERP",
    desc: "Developing a scalable College ERP with secure JWT authentication, admission workflows, CRM systems, finance modules, dashboards, and role-based architecture.",
    link: "https://techno.sprintup.in/",
    linkText: "View ERP",
  },

  {
    year: "2025 — Present",
    title: "Open Source Contributor",
    desc: "Created GitPusher, an AI-powered Git automation tool with 1.2k+ npm downloads, secure dashboard access, automated commits, and developer workflow enhancements.",
    link: "https://gitpusher-dashboard.vercel.app/",
    linkText: "Open Project",
  },

  {
    year: "2025 — Present",
    title: "AI & Agentic Systems Learning",
    desc: "Exploring LLMs, AI agents, retrieval workflows, prompt orchestration, and intelligent developer tooling through modern AI-powered applications like Snippetix.",
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Journey"
      title="My Experience"
      subtitle="A timeline of my growth as a developer, open-source contributor, and AI enthusiast."
    >
      <div className="relative max-w-3xl mx-auto">
        {/* Timeline Line */}
        <div
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2"
          style={{
            background:
              "linear-gradient(to bottom, #D53E0F, #EED9B9, #D53E0F)",
          }}
        />

        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative pl-12 md:pl-0 mb-10 md:grid md:grid-cols-2 md:gap-8 ${
              i % 2 === 0 ? "" : "md:[direction:rtl]"
            }`}
          >
            {/* Card */}
            <div
              className={`md:[direction:ltr] ${
                i % 2 === 0
                  ? "md:text-right md:pr-12"
                  : "md:pl-12"
              }`}
            >
              <motion.div
                whileHover={{
                  y: -5,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
                className="
                  rounded-2xl
                  p-[1px]
                  inline-block
                  shadow-[0_10px_40px_rgba(213,62,15,0.12)]
                "
                style={{
                  background:
                    "linear-gradient(135deg, #D53E0F, #EED9B9, #F3F4F4)",
                }}
              >
                <div
                  className="
                    rounded-2xl
                    p-6
                    backdrop-blur-xl
                    bg-[#F3F4F4]/90
                    text-left
                  "
                >
                  {/* Year */}
                  <div
                    className="
                      text-xs
                      font-semibold
                      tracking-widest
                      uppercase
                      mb-2
                    "
                    style={{ color: "#D53E0F" }}
                  >
                    {it.year}
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      text-lg
                      font-bold
                      mb-2
                      text-[#2C2C2C]
                    "
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {it.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-[#2C2C2C]/70">
                    {it.desc}
                  </p>

                  {/* Conditional Button */}
                  {it.link && (
                    <a
                      href={it.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        mt-5
                        px-4
                        py-2
                        rounded-full
                        bg-[#D53E0F]
                        text-white
                        text-sm
                        font-medium
                        hover:scale-105
                        hover:shadow-[0_0_25px_rgba(213,62,15,0.35)]
                        transition-all
                        duration-300
                      "
                    >
                      {it.linkText}
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Timeline Dot */}
            <div
              className="
                absolute
                left-4
                md:left-1/2
                top-6
                w-4
                h-4
                -translate-x-1/2
                rounded-full
                ring-4
              "
              style={{
                background: "#D53E0F",
                boxShadow: "0 0 20px rgba(213,62,15,0.35)",
              }}
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}