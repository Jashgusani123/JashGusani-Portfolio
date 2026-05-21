import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { IntroAnimation } from "@/components/portfolio/IntroAnimation";
import { Navbar } from "@/components/portfolio/Navbar";
import { BackgroundFX, CursorGlow, ScrollProgress, BackToTop } from "@/components/portfolio/BackgroundFX";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [intro, setIntro] = useState(true);
  return (
    <>
      {intro && <IntroAnimation onDone={() => setIntro(false)} />}
      <BackgroundFX />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
}
