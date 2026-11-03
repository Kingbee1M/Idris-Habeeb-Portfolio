"use client";

import { useEffect, useState } from "react";
import ResumeDownload from "./ResumeDownload";
import UtilityWheel from "./UtilityWheel";

type FloatingToolsProps = { dark: boolean };

export default function FloatingTools({ dark }: FloatingToolsProps) {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;

    const observer = new IntersectionObserver(([entry]) => {
      setPastHero(!entry.isIntersecting);
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`floating-tools ${pastHero ? "is-visible" : ""}`} data-theme={dark ? "dark" : "light"} aria-hidden={!pastHero} inert={!pastHero}>
      <UtilityWheel dark={dark} />
      <ResumeDownload dark={dark} />
    </div>
  );
}
