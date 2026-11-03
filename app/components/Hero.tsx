"use client";

import Image from "next/image";
import portrait from "../../public/jpeg/habeeb-hero.jpg";

type HeroProps = { dark: boolean; onThemeToggle: () => void };

export default function Hero({ dark, onThemeToggle }: HeroProps) {
  return (
    <section className="hero-section" id="home" aria-labelledby="intro-title">
      <div className="hero-layout">
        <div className="portrait-column" aria-label="Portrait of Habeeb">
          <div className="portrait-shape" aria-hidden="true" />
          <div className="portrait-frame">
            <Image src={portrait} alt="Portrait of Habeeb" className="portrait-artwork" fill priority sizes="(max-width: 700px) 75vw, (max-width: 960px) 35vw, 470px" />
            <div className="portrait-caption"><span>INDEPENDENT DEVELOPER</span><span>AVAILABLE FOR WORK</span></div>
          </div>
          <span className="portrait-index">01 <i /> 04</span>
        </div>

        <div className="intro">
          <div className="eyebrow"><span className="eyebrow-line" /><span>HELLO, I’M</span><span className="eyebrow-dot" /></div>
          <h1 id="intro-title"><span className="name">HABEEB</span><span className="role">DESIGNER <em>&amp;</em><br className="mobile-break" /> DEVELOPER</span></h1>
          <p className="intro-copy">I shape thoughtful digital experiences with a focus on clean design, useful details, and code that feels as good as it looks.</p>
          <div className="intro-meta"><span><i className="status-dot" /> OPEN TO SELECT PROJECTS</span><span>DIGITAL PRACTICE <b>↗</b></span></div>
          <a className="about-link" href="mailto:"><span>LET’S WORK TOGETHER</span><span className="arrow-circle" aria-hidden="true">↗</span></a>
          <div className="hero-footnote"><span>DESIGN WITH INTENTION.</span><span>BUILD WITH CARE.</span></div>
        </div>
      </div>

      <header className="topbar">
        <a href="#home" className="wordmark" aria-label="Habeeb home">H<span>.</span></a>
        <div className="topbar-right"><span className="topbar-label">PORTFOLIO / 2026</span><button className="theme-toggle" type="button" onClick={onThemeToggle} aria-label={`Switch to ${dark ? "light" : "dark"} mode`} aria-pressed={dark}><span className="theme-icon" aria-hidden="true">{dark ? "☾" : "☼"}</span><span>{dark ? "DARK" : "LIGHT"}</span><span className="toggle-track"><i /></span></button></div>
      </header>

      <div className="scroll-note"><span className="scroll-line" /> SCROLL TO EXPLORE</div>
      <div className="edge-note">HABEEB © 2026</div>
    </section>
  );
}
