
"use client";

import Image from "next/image";
import portrait from "../../public/jpeg/habeeb-hero.jpg";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type HeroIconName = "home" | "about" | "work" | "projects" | "message";

function HeroIcon({ name }: { name: HeroIconName }) {
  const paths: Record<HeroIconName, ReactNode> = {
    home: (
      <>
        <path d="m3 10 9-7 9 7" />
        <path d="M5 9v11h14V9M9 20v-7h6v7" />
      </>
    ),
    about: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
      </>
    ),
    work: (
      <>
        <rect x="3" y="7" width="18" height="14" rx="2" />
        <path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2" />
      </>
    ),
    projects: (
      <>
        <rect x="3" y="4" width="8" height="7" rx="1" />
        <rect x="13" y="4" width="8" height="7" rx="1" />
        <rect x="3" y="13" width="8" height="7" rx="1" />
        <rect x="13" y="13" width="8" height="7" rx="1" />
      </>
    ),
    message: (
      <>
        <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
        <path d="M8 12h.01M12 12h.01M16 12h.01" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

type HeroProps = {
  dark: boolean;
  onThemeToggle: () => void;
};

// Animation variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.2,
    },
  },
};

export default function Hero({ dark, onThemeToggle }: HeroProps) {
  // Detect the visitor's reduced-motion preference
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = prefersReducedMotion === true;

  // Accessible animation variants
  const accessibleFadeUp: Variants = reduceMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0 },
        },
      }
    : fadeUp;

  const accessibleFadeLeft: Variants = reduceMotion
    ? {
        hidden: { opacity: 1, x: 0 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0 },
        },
      }
    : fadeLeft;

  const accessibleStagger: Variants = reduceMotion
    ? {
        hidden: {},
        visible: {
          transition: { duration: 0 },
        },
      }
    : staggerContainer;

  // Pre-filled email
  const emailSubject = encodeURIComponent("Let's Work Together");

  const emailBody = encodeURIComponent(
    `Good day Habeeb,

I came across your portfolio and I'm impressed by your work and experience in designing and developing digital solutions.

I would love to discuss a potential opportunity to work with you. I have a project or collaboration in mind that I believe could benefit from your skills and expertise.

I'd appreciate the opportunity to share more details about what I have in mind, understand your availability, and explore how we could work together.

I look forward to hearing from you.

Best regards,`
  );

  const emailHref = `mailto:idris.b.habeeb@gmail.com?subject=${emailSubject}&body=${emailBody}`;

  return (
    <section
      className="hero-section"
      id="home"
      aria-labelledby="intro-title"
    >
      <div className="hero-layout">
        {/* Portrait */}
        <motion.div
          className="portrait-column"
          aria-label="Portrait of Habeeb"
          initial={
            reduceMotion
              ? false
              : { opacity: 0, scale: 0.92, y: 30 }
          }
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="portrait-shape" aria-hidden="true" />

          <motion.div
            className="portrait-frame"
            whileHover={reduceMotion ? undefined : { scale: 1.015 }}
            transition={{ duration: reduceMotion ? 0 : 0.4 }}
          >
            <Image
              src={portrait}
              alt="Portrait of Habeeb"
              className="portrait-artwork"
              fill
              priority
              sizes="(max-width: 700px) 75vw, (max-width: 960px) 35vw, 470px"
            />

            <div className="portrait-caption">
              <span>INDEPENDENT DEVELOPER</span>
              <span>AVAILABLE FOR WORK</span>
            </div>
          </motion.div>

          <motion.span
            className="portrait-index"
            variants={accessibleFadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduceMotion ? 0 : 0.8 }}
          >
            01 <i /> 04
          </motion.span>
        </motion.div>

        {/* Introduction */}
        <motion.div
          className="intro"
          variants={accessibleStagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="eyebrow"
            variants={accessibleFadeLeft}
          >
            <span className="eyebrow-line" />
            <span>HELLO, I&apos;M</span>
            <span className="eyebrow-dot" />
          </motion.div>

          <motion.h1
            id="intro-title"
            variants={accessibleFadeUp}
          >
            <span className="name">HABEEB</span>
            <span className="role">
              DESIGNER <em>&amp;</em>
              <br className="mobile-break" /> DEVELOPER
            </span>
          </motion.h1>

          <motion.p
            className="intro-copy"
            variants={accessibleFadeUp}
          >
            I shape thoughtful digital experiences with a focus on
            clean design, useful details, and code that feels as good
            as it looks.
          </motion.p>

          <motion.div
            className="intro-meta"
            variants={accessibleFadeUp}
          >
            <span>
              <i className="status-dot" /> OPEN TO SELECT PROJECTS
            </span>
            <span>
              DIGITAL PRACTICE <b>↗</b>
            </span>
          </motion.div>

          <motion.a
            className="about-link"
            href={emailHref}
            variants={accessibleFadeUp}
            whileHover={reduceMotion ? undefined : { x: 6 }}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
          >
            <span>LET&apos;S WORK TOGETHER</span>
            <span className="arrow-circle" aria-hidden="true">
              ↗
            </span>
          </motion.a>

          <motion.div
            className="hero-footnote"
            variants={accessibleFadeUp}
          >
            <span>DESIGN WITH INTENTION.</span>
            <span>BUILD WITH CARE.</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Top navigation */}
      <motion.header
        className="topbar"
        initial={
          reduceMotion ? false : { opacity: 0, y: -25 }
        }
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0 : 0.7,
          delay: reduceMotion ? 0 : 0.2,
        }}
      >
        <a
          href="#home"
          className="wordmark"
          aria-label="Habeeb home"
        >
          H<span>.</span>
        </a>

        <div className="topbar-right">
          <span className="topbar-label">PORTFOLIO / 2026</span>

          <button
            className="theme-toggle"
            type="button"
            onClick={onThemeToggle}
            aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
            aria-pressed={dark}
          >
            <span className="theme-icon" aria-hidden="true">
              {dark ? "☾" : "☼"}
            </span>
            <span>{dark ? "DARK" : "LIGHT"}</span>
            <span className="toggle-track">
              <i />
            </span>
          </button>
        </div>
      </motion.header>

      {/* Side navigation */}
      <motion.aside
        className="side-rail"
        aria-label="Hero navigation"
        variants={accessibleStagger}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          className="rail-caption"
          variants={accessibleFadeLeft}
        >
          FIND YOUR WAY
        </motion.span>

        {([
          ["home", "#home", "Home"],
          ["about", "#about", "About me"],
          ["work", "#experience", "Experience"],
          ["projects", "#projects", "Projects"],
          ["message", "#contact", "Contact"],
        ] as const).map(([name, href, label], index) => (
          <motion.a
            key={name}
            className={`rail-link ${index === 0 ? "active" : ""}`}
            href={href}
            aria-label={label}
            variants={accessibleFadeLeft}
            whileHover={
              reduceMotion ? undefined : { x: 5, scale: 1.1 }
            }
            whileTap={
              reduceMotion ? undefined : { scale: 0.9 }
            }
          >
            <HeroIcon name={name} />
          </motion.a>
        ))}

        <motion.span
          className="rail-line"
          variants={accessibleFadeUp}
        />
      </motion.aside>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-note"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: reduceMotion ? 0 : 1.5,
          duration: reduceMotion ? 0 : 0.8,
        }}
      >
        <motion.span
          className="scroll-line"
          animate={
            reduceMotion
              ? { scaleY: 1 }
              : { scaleY: [1, 0.5, 1] }
          }
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          style={{ transformOrigin: "top" }}
        />
        SCROLL TO EXPLORE
      </motion.div>

      {/* Edge note */}
      <motion.div
        className="edge-note"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: reduceMotion ? 0 : 1.6,
          duration: reduceMotion ? 0 : 0.8,
        }}
      >
        HABEEB © 2026
      </motion.div>
    </section>
  );
}
