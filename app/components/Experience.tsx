
"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";

import { experience } from "../data/experience";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Experience() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.15,
  });

  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = prefersReducedMotion === true;

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

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: reduceMotion ? 0 : 35,
    },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.65,
        delay: reduceMotion ? 0 : index * 0.15,
        ease,
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="experience-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="experience-inner">

        {/* Section heading */}
        <motion.div
          className="section-kicker"
          variants={reveal}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <i />
          <span>EXPERIENCE</span>
        </motion.div>

        {/* Introduction */}
        <motion.div
          className="experience-heading"
          variants={reveal}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div>
            <p className="about-overline">
              SELECTED ROLES &amp; COLLABORATIONS
            </p>

            <h2 id="experience-title">
              Work that
              <br />
              <span>moves things forward.</span>
            </h2>
          </div>

          <p>
            A record of the teams, products, and interfaces I’ve
            helped bring to life.
          </p>
        </motion.div>

        {/* Experience timeline */}
        <div className="experience-list">
          {experience.map((item, index) => (
            <motion.div
              key={item.slug}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="experience-entry"
            >
              <Link
                className="experience-item"
                href={`/experience/${item.slug}`}
                aria-label={`${item.role} at ${item.company}. View experience details`}
              >
                {/* Timeline marker */}
                <motion.div
                  className="experience-marker"
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, scale: 0.7 }
                  }
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : reduceMotion
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.7 }
                  }
                  transition={{
                    duration: reduceMotion ? 0 : 0.4,
                    delay: reduceMotion ? 0 : index * 0.15,
                    ease,
                  }}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <i />
                </motion.div>

                {/* Experience card */}
                <motion.article
                  className="experience-card"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -4,
                          transition: { duration: 0.25 },
                        }
                  }
                >
                  <div className="experience-card-heading">
                    <div>
                      <p className="experience-company">
                        {item.company}
                      </p>

                      <h3>{item.role}</h3>
                    </div>

                    <span className="experience-arrangement">
                      {item.arrangement}
                    </span>
                  </div>

                  <div className="experience-meta">
                    <span>{item.dates ?? "Dates not listed"}</span>
                    <span className="experience-meta-divider">/</span>
                    <span>
                      {item.website
                        ? "COMPANY PROFILE"
                        : "WEBSITE: N/A"}
                    </span>
                  </div>

                  <p className="experience-description">
                    {item.contributions[0]}
                  </p>

                  <span className="experience-open">
                    VIEW ROLE DETAILS <b>↗</b>
                  </span>
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          className="experience-footnote"
          variants={reveal}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
            delay: reduceMotion ? 0 : experience.length * 0.15 + 0.2,
            ease,
          }}
        >
          <span className="status-dot" />
          BUILDING WITH PURPOSE, ONE RELEASE AT A TIME.
        </motion.div>
      </div>
    </section>
  );
}
