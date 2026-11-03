"use client";

import { useState } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import SkillsAndTechnologies from "./components/SkillsAndTechnologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import FloatingTools from "./components/FloatingTools";

export default function Home() {
  const [dark, setDark] = useState(true);

  return (
    <main className={`portfolio ${dark ? "theme-dark" : "theme-light"}`}>
      <div className="page-grain" aria-hidden="true" />
      <Hero dark={dark} onThemeToggle={() => setDark((current) => !current)} />
      <About />
      <SkillsAndTechnologies />
      <Experience />
      <Projects />
      <Footer />
      <FloatingTools dark={dark} />
    </main>
  );
}
