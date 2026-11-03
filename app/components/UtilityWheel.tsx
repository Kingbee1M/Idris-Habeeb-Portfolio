"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const destinations = [
  { id: "about", target: "about", label: "ABOUT", detail: "A LITTLE INTRODUCTION", glyph: "01" },
  { id: "skills", target: "skills", label: "SKILLS", detail: "WHAT I BRING", glyph: "02" },
  { id: "experience", target: "experience", label: "EXPERIENCE", detail: "SELECTED ROLES", glyph: "03" },
  { id: "projects", target: "projects", label: "PROJECTS", detail: "SELECTED WORK", glyph: "04" },
  { id: "contact", target: "contact", label: "CONTACT", detail: "START A CONVERSATION", glyph: "05" },
  { id: "home", target: "home", label: "HOME", detail: "BACK TO THE TOP", glyph: "06" },
] as const;

type SoundName = "shatter" | "hover" | "select";
let sharedAudioContext: AudioContext | null = null;

function getAudioContext() {
  if (typeof window === "undefined" || !("AudioContext" in window)) return null;
  sharedAudioContext ??= new window.AudioContext();
  if (sharedAudioContext.state === "suspended") void sharedAudioContext.resume();
  return sharedAudioContext;
}

function playSound(name: SoundName, variation = 0) {
  const context = getAudioContext();
  if (!context) return;

  const now = context.currentTime;
  if (name === "shatter") {
    const duration = 0.34;
    const buffer = context.createBuffer(1, Math.floor(context.sampleRate * duration), context.sampleRate);
    const channel = buffer.getChannelData(0);
    for (let i = 0; i < channel.length; i += 1) {
      const progress = i / channel.length;
      channel[i] = (Math.random() * 2 - 1) * (1 - progress) ** 3;
    }
    const crack = context.createBufferSource();
    const filter = context.createBiquadFilter();
    const crackGain = context.createGain();
    crack.buffer = buffer;
    filter.type = "highpass";
    filter.frequency.setValueAtTime(1250, now);
    crackGain.gain.setValueAtTime(0.16, now);
    crackGain.gain.exponentialRampToValueAtTime(0.001, now + duration);
    crack.connect(filter).connect(crackGain).connect(context.destination);
    crack.start(now);
    crack.stop(now + duration);

    [1580, 2260, 3120, 4050].forEach((frequency, index) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      const start = now + index * 0.027;
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(frequency + Math.random() * 140, start);
      oscillator.frequency.exponentialRampToValueAtTime(frequency * 0.72, start + 0.19);
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.055 / (index + 1), start + 0.009);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.25);
      oscillator.connect(gain).connect(context.destination);
      oscillator.start(start);
      oscillator.stop(start + 0.26);
    });
    return;
  }

  const frequencies = name === "hover"
    ? [520 + variation * 24]
    : [420 + variation * 18, 660 + variation * 22, 880 + variation * 28];
  frequencies.forEach((frequency, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const start = now + (name === "select" ? index * 0.045 : 0);
    oscillator.type = name === "hover" ? "sine" : "triangle";
    oscillator.frequency.setValueAtTime(frequency, start);
    if (name === "select") oscillator.frequency.exponentialRampToValueAtTime(frequency * 1.18, start + 0.17);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(name === "hover" ? 0.025 : 0.045, start + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + (name === "hover" ? 0.11 : 0.24));
    oscillator.connect(gain).connect(context.destination);
    oscillator.start(start);
    oscillator.stop(start + (name === "hover" ? 0.12 : 0.25));
  });
}

function sectorClip(index: number) {
  const centerAngle = -90 + index * 60;
  const points = ["50% 50%"];
  for (let step = 0; step <= 10; step += 1) {
    const angle = ((centerAngle - 30 + step * 6) * Math.PI) / 180;
    const x = 50 + Math.cos(angle) * 49;
    const y = 50 + Math.sin(angle) * 49;
    points.push(`${x.toFixed(2)}% ${y.toFixed(2)}%`);
  }
  return `polygon(${points.join(", ")})`;
}

function sectorPosition(index: number) {
  const angle = ((-90 + index * 60) * Math.PI) / 180;
  return {
    left: `${50 + Math.cos(angle) * 30}%`,
    top: `${50 + Math.sin(angle) * 30}%`,
  };
}

function particlePosition(index: number) {
  const angle = ((-90 + index * 60) * Math.PI) / 180;
  return {
    left: `${50 + Math.cos(angle) * 34}%`,
    top: `${50 + Math.sin(angle) * 34}%`,
  };
}

type UtilityWheelProps = { dark: boolean };

export default function UtilityWheel({ dark }: UtilityWheelProps) {
  const [open, setOpen] = useState(false);
  const [activeSector, setActiveSector] = useState<string | null>(null);
  const [spinning, setSpinning] = useState(false);
  const hoverTimer = useRef<number | undefined>(undefined);
  const actionTimer = useRef<number | undefined>(undefined);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const lastHovered = useRef<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab") return;
      const focusable = document.querySelectorAll<HTMLElement>(
        ".utility-dialog button, .utility-dialog a[href]",
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      trigger?.focus();
    };
  }, [open]);

  useEffect(() => () => {
    window.clearTimeout(hoverTimer.current);
    window.clearTimeout(actionTimer.current);
  }, []);

  const openWheel = () => {
    window.clearTimeout(hoverTimer.current);
    if (open) return;
    setActiveSector(null);
    setSpinning(false);
    setOpen(true);
    playSound("shatter");
  };

  const beginHoverOpen = () => {
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(openWheel, 2000);
  };

  const closeWheel = () => {
    window.clearTimeout(hoverTimer.current);
    setOpen(false);
  };

  const navigateTo = (target: string, index: number) => {
    if (spinning) return;
    const destination = document.getElementById(target);
    playSound("select", index);
    setActiveSector(target);
    setSpinning(true);
    actionTimer.current = window.setTimeout(() => {
      setOpen(false);
      setSpinning(false);
      window.requestAnimationFrame(() => destination?.scrollIntoView({ behavior: "smooth", block: "start" }));
    }, 760);
  };

  return (
    <>
      <div className="utility-launcher">
        <button
          ref={triggerRef}
          type="button"
          className="utility-trigger"
          aria-label="Open the navigation wheel"
          aria-haspopup="dialog"
          aria-expanded={open}
          onClick={() => (open ? closeWheel() : openWheel())}
          onPointerEnter={beginHoverOpen}
          onPointerLeave={() => window.clearTimeout(hoverTimer.current)}
        >
          <span className="utility-trigger-orbit" aria-hidden="true"><i /><i /><i /><i /></span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8m0-12.8L5.6 18.4" />
            <circle cx="12" cy="12" r="3.1" />
          </svg>
        </button>
        <span className="utility-trigger-label">NAV WHEEL</span>
      </div>

      {open
        ? createPortal(
            <div
              className={`utility-overlay ${dark ? "theme-dark" : "theme-light"}`}
              data-theme={dark ? "dark" : "light"}
              onMouseDown={(event) => {
                if (event.target === event.currentTarget && !spinning) closeWheel();
              }}
            >
              <section
                className="utility-dialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby="utility-title"
                aria-describedby="utility-help"
              >
                <div className="utility-dialog-head">
                  <div>
                    <p className="utility-kicker"><i /> PORTFOLIO INTERFACE / 01</p>
                    <h2 id="utility-title">Choose a destination</h2>
                  </div>
                  <button ref={closeButtonRef} className="utility-close" type="button" aria-label="Close navigation wheel" onClick={closeWheel}>
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
                  </button>
                </div>

                <div className={`utility-wheel ${spinning ? "is-spinning" : ""}`}>
                  <div className="utility-wheel-disc" aria-hidden="true" />
                  {destinations.map((item, index) => (
                    <button
                      className={`utility-sector ${activeSector === item.id ? "is-active" : ""}`}
                      key={item.id}
                      type="button"
                      aria-label={`Go to ${item.label.toLowerCase()}`}
                      style={{ clipPath: sectorClip(index) }}
                      onPointerEnter={() => {
                        setActiveSector(item.id);
                        if (lastHovered.current !== item.id) playSound("hover", index);
                        lastHovered.current = item.id;
                      }}
                      onFocus={() => {
                        setActiveSector(item.id);
                        if (lastHovered.current !== item.id) playSound("hover", index);
                        lastHovered.current = item.id;
                      }}
                      onClick={() => navigateTo(item.target, index)}
                    >
                      {activeSector === item.id && (
                        <span className="utility-particles" aria-hidden="true">
                          {Array.from({ length: 6 }, (_, particle) => (
                            <i
                              key={particle}
                              style={{
                                ...particlePosition(index),
                                animationDelay: `${particle * -0.22}s`,
                                "--particle-drift": `${(particle % 2 ? 1 : -1) * (5 + particle * 2)}px`,
                              } as React.CSSProperties}
                            />
                          ))}
                        </span>
                      )}
                      <span className="utility-sector-copy" style={sectorPosition(index)}>
                        <b>{item.glyph}</b>
                        <span>{item.label}</span>
                      </span>
                    </button>
                  ))}
                  <svg className="utility-wheel-lines" viewBox="0 0 400 400" aria-hidden="true">
                    <circle cx="200" cy="200" r="191" />
                    <circle cx="200" cy="200" r="133" />
                    <circle cx="200" cy="200" r="71" />
                    <path d="M200 9v120m0 142v120M34.7 104.5l104 60m122.6 71 104 60M34.7 295.5l104-60m122.6-71 104-60" />
                  </svg>
                  <div className="utility-hub" aria-live="polite">
                    <span className="utility-hub-mark">H<span>.</span></span>
                    <b>{destinations.find((item) => item.id === activeSector)?.label ?? "NAVIGATE"}</b>
                    <small>{destinations.find((item) => item.id === activeSector)?.detail ?? "CHOOSE A SECTOR"}</small>
                  </div>
                </div>
                <p className="utility-help" id="utility-help">HOVER A SECTOR TO PREVIEW <i /> SELECT TO MOVE</p>
              </section>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
