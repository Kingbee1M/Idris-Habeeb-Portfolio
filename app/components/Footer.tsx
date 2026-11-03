"use client";

import { useEffect, useState } from "react";
import TruncatedOctahedron from "./TruncatedOctahedron";
import { contact } from "../data/contact";

type DayPhase = "sunrise" | "midday" | "sunset" | "night";
type LagosClock = { time: string; phase: DayPhase; label: string };

function readLagosClock(): LagosClock {
  const now = new Date();
  const timeParts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Lagos",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);
  const hour = Number(timeParts.find((part) => part.type === "hour")?.value ?? 0);
  const minute = Number(timeParts.find((part) => part.type === "minute")?.value ?? 0);
  const time = new Intl.DateTimeFormat("en-NG", {
    timeZone: "Africa/Lagos",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(now);

  if (hour >= 5 && hour < 8) return { time, phase: "sunrise", label: "SUNRISE" };
  if (hour >= 8 && hour < 17) return { time, phase: "midday", label: "MIDDAY" };
  if (hour >= 17 && hour < 19) return { time, phase: "sunset", label: "SUNSET" };
  return { time, phase: "night", label: "NIGHT" };
}

const contactItems = [
  { label: "PHONE", value: contact.phone, href: contact.phoneHref, icon: "↗" },
  { label: "EMAIL", value: contact.email, href: contact.emailHref, icon: "↗" },
  { label: "LINKEDIN", value: contact.linkedin, href: contact.linkedinHref, icon: "↗" },
  { label: "GITHUB", value: contact.github, href: contact.githubHref, icon: "↗" },
];

export default function Footer() {
  const [lagosClock, setLagosClock] = useState<LagosClock>({ time: "--:--", phase: "night", label: "LOCAL TIME" });

  useEffect(() => {
    const updateTime = () => setLagosClock(readLagosClock());
    updateTime();
    const interval = window.setInterval(updateTime, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <footer className={`portfolio-footer footer-time-${lagosClock.phase}`} id="contact">
      <section className="footer-scene">
        <div className="footer-background" aria-hidden="true" />
        <div className="footer-shade" aria-hidden="true" />
        <div className="footer-scene-inner">
        <div className="footer-heading">
          <p className="about-overline">GOOD WORK STARTS WITH A CONVERSATION</p>
          <div className="footer-world-clock" aria-live="polite">
            <span className="footer-clock-indicator" />
            <span>
              <b>{lagosClock.time}</b>
              <small>{lagosClock.label} / LAGOS, NIGERIA · WAT</small>
            </span>
          </div>
          <h2>Let’s build<br /><span>something thoughtful.</span></h2>
          <p className="footer-intro">Have a project in mind? I’d be glad to hear what you’re working on.</p>
        </div>
        </div>
      </section>
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-object-panel">
            <span className="footer-object-label">INTERACTIVE STUDY / 001</span>
            <TruncatedOctahedron />
            <span className="footer-object-caption">DRAG TO ROTATE <i /> SCROLL TO ZOOM</span>
          </div>
          <div className="footer-contact-panel">
            <p className="footer-contact-kicker"><span>GET IN TOUCH</span><i /></p>
            <h3>Find me here.</h3>
            <div className="footer-contact-list">
              {contactItems.map((item) => (
                <div className="footer-contact-item" key={item.label}>
                  <span className="footer-contact-label">{item.label}</span>
                  {item.href ? <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>{item.value}<b>{item.icon}</b></a> : <span className="footer-contact-placeholder">{item.value}<b>ADD DETAIL</b></span>}
                </div>
              ))}
            </div>
            <p className="footer-contact-note">Contact links are ready to personalize in <code>app/data/contact.ts</code>.</p>
          </div>
        </div>
        <div className="footer-bottom"><a href="#home" className="footer-wordmark">H<span>.</span></a><span>INDEPENDENT DEVELOPER / LAGOS, NIGERIA</span><span>© HABEEB 2026</span></div>
      </div>
    </footer>
  );
}
