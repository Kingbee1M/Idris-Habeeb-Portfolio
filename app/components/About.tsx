
"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";

import CodingNumbers from "./CodingNumbers";
import { technologies } from "../data/portfolio";

const details = [
  { label: "BASED IN", value: "Lagos, Nigeria" },
  { label: "AGE", value: "24" },
  { label: "GENDER", value: "Male" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });

  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.7,
        ease,
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.12,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="about-section"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="about-inner">
        {/* Section heading */}
        <motion.div
          className="section-kicker"
          variants={reveal}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <i />
          <span>ABOUT ME</span>
        </motion.div>

        <div className="about-grid">
          {/* About content */}
          <motion.div
            className="about-copy"
            variants={stagger}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.p
              className="about-overline"
              variants={reveal}
            >
              A LITTLE INTRODUCTION
            </motion.p>

            <motion.h2
              id="about-title"
              variants={reveal}
            >
              I’m Idris <span>Habeeb.</span>
            </motion.h2>

            <motion.h3 variants={reveal}>
              WEBSITE &amp; MOBILE APP FRONTEND DEVELOPER
            </motion.h3>

            <motion.p
              className="about-description"
              variants={reveal}
            >
              I’m a Microsoft-certified full-stack web and mobile app
              developer. I build dynamic, responsive applications with
              Next.js, Vue.js, and Tailwind CSS, and work across state
              management, API integration, and ATS, CRM, and HRM platforms.
              I also build mobile app frontends with Expo (React Native),
              alongside backend services with NestJS, PostgreSQL, and MySQL.
            </motion.p>

            {/* Personal details */}
            <motion.dl
              className="about-details"
              variants={stagger}
            >
              {details.map((detail) => (
                <motion.div
                  className="detail-item"
                  key={detail.label}
                  variants={reveal}
                >
                  <dt>{detail.label}</dt>
                  <dd>{detail.value}</dd>
                </motion.div>
              ))}
            </motion.dl>

            {/* Technologies */}
            <motion.div
              className="skill-list"
              aria-label="Technologies"
              variants={reveal}
            >
              <p className="skill-label">CORE STACK</p>

              <div className="skill-tags">
                {technologies.map((technology, index) => (
                  <motion.div
                    key={technology.slug}
                    initial={{
                      opacity: 0,
                      y: reduceMotion ? 0 : 12,
                    }}
                    animate={
                      isInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: reduceMotion ? 0 : 12 }
                    }
                    transition={{
                      duration: reduceMotion ? 0 : 0.4,
                      delay: reduceMotion ? 0 : 0.65 + index * 0.06,
                      ease,
                    }}
                  >
                    <Link href={`/technology/${technology.slug}`}>
                      {technology.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Code visual */}
          <motion.div
            className="about-visual"
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : 35,
            }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: reduceMotion ? 0 : 35 }
            }
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              delay: reduceMotion ? 0 : 0.25,
              ease,
            }}
          >
            <div className="code-window">
              <div className="code-window-bar">
                <div className="window-lights" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>

                <span className="code-file">habeeb.tsx</span>

                <span className="code-status">
                  <i /> LIVE
                </span>
              </div>

              <div className="code-window-screen">
                <CodingNumbers />
              </div>

              <div className="code-window-footer">
                <span>GENERATIVE CODE FIELD</span>
                <span>BUILD / 001</span>
              </div>
            </div>

            <motion.p
              className="code-caption"
              variants={reveal}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
                delay: reduceMotion ? 0 : 0.8,
                ease,
              }}
            >
              Small details. Solid systems. Thoughtful interfaces.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
