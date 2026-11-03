
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { ExperienceRole } from "../data/experience";

import primeorb from "@/public/experience/primeorb.svg";
import outcess from "@/public/experience/outcess-logo.fab9f9cc1acdf0cd3077.png";
import hng from "@/public/experience/logo.svg";
import emp from "@/public/experience/full-logo.3aeb9d5a.svg";

const companyLogos = {
  "primeorb-solutions": primeorb,
  "outcess-solutions": outcess,
  "hng-internship": hng,
  "leen-konnect": emp,
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const logoVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    y: 15,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ExperienceDetail({
  role,
}: {
  role: ExperienceRole;
}) {
  const shouldReduceMotion = useReducedMotion();

  const initials = role.company
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const companyLogo =
    companyLogos[role.slug as keyof typeof companyLogos];

  // Disable movement and stagger when reduced motion is enabled.
  const reveal = shouldReduceMotion
    ? {
        hidden: { opacity: 1, x: 0, y: 0, scale: 1 },
        visible: { opacity: 1, x: 0, y: 0, scale: 1 },
      }
    : undefined;

  return (
    <main className="detail-page experience-detail-page">
      <div className="detail-grain" aria-hidden="true" />

      <div className="detail-shell">
        {/* Back link */}
        <motion.div
          variants={reveal}
          initial="hidden"
          animate="visible"
          {...(!shouldReduceMotion && {
            initial: { opacity: 0, y: -12 },
            animate: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          })}
        >
          <Link className="detail-back" href="/#experience">
            <span aria-hidden="true">←</span> BACK TO EXPERIENCE
          </Link>
        </motion.div>

        {/* Hero */}
        <div className="detail-hero">
          <motion.div
            className="detail-copy"
            variants={fadeLeftVariants}
            initial="hidden"
            animate="visible"
            {...(shouldReduceMotion && {
              initial: false,
              animate: "visible",
            })}
          >
            <p className="detail-kicker">
              <span>EXPERIENCE</span>
              <i />
              ROLE / {role.arrangement.toUpperCase()}
            </p>

            <h1>
              {role.company}<span>.</span>
            </h1>

            <p className="detail-short">{role.role}</p>

            <p className="detail-description">{role.summary}</p>

            <div className="company-detail-meta">
              <span>{role.arrangement}</span>
              <i />
              <span>{role.dates ?? "Dates not listed"}</span>
            </div>
          </motion.div>

          {/* Company logo */}
          <motion.div
            className="detail-mark"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            {...(shouldReduceMotion && {
              initial: false,
              animate: "visible",
            })}
          >
            {companyLogo ? (
              <Image
                src={companyLogo}
                alt={`${role.company} logo`}
                width={220}
                height={120}
                className="detail-company-logo"
                priority
              />
            ) : (
              <span>{initials}</span>
            )}

            <i>WORK / {role.slug.toUpperCase()}</i>
          </motion.div>
        </div>

        {/* Overview and contributions */}
        <motion.div
          className="company-detail-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.section
            className="company-overview"
            variants={fadeUpVariants}
            {...(shouldReduceMotion && {
              initial: false,
              animate: "visible",
            })}
          >
            <p className="detail-label">THE COMPANY</p>

            <h2>
              Context for<br />the collaboration.
            </h2>

            <p>{role.overview}</p>
          </motion.section>

          <motion.section
            className="company-contributions"
            variants={fadeUpVariants}
            {...(shouldReduceMotion && {
              initial: false,
              animate: "visible",
            })}
          >
            <p className="detail-label">MY CONTRIBUTION</p>

            <h2>What I worked on.</h2>

            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {role.contributions.map((contribution) => (
                <motion.li
                  key={contribution}
                  variants={fadeUpVariants}
                  {...(shouldReduceMotion && {
                    initial: false,
                    animate: "visible",
                  })}
                >
                  <span aria-hidden="true">↗</span>
                  {contribution}
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>
        </motion.div>

        {/* Company website */}
        <motion.div
          className="company-website-panel"
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          transition={{
            delay: shouldReduceMotion ? 0 : 0.45,
          }}
          {...(shouldReduceMotion && {
            initial: false,
            animate: "visible",
          })}
        >
          <div>
            <p className="detail-label">COMPANY WEBSITE</p>

            <h2>
              {role.website
                ? "Explore the official site."
                : "No website link provided."}
            </h2>

            <p>
              {role.website
                ? "Open the company site in a new tab."
                : "N/A"}
            </p>
          </div>

          {role.website ? (
            <a
              className="company-website-link"
              href={role.website}
              target="_blank"
              rel="noreferrer"
            >
              {role.websiteLabel ?? "OFFICIAL WEBSITE"}
              <span>↗</span>
            </a>
          ) : (
            <span className="company-website-na">N/A</span>
          )}
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="detail-footer"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: shouldReduceMotion ? 0 : 0.6 }}
        >
          <span>HABEEB / EXPERIENCE</span>

          <Link href="/#experience">
            RETURN TO EXPERIENCE <b>↗</b>
          </Link>
        </motion.footer>
      </div>
    </main>
  );
}
