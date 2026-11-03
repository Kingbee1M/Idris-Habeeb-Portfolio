
'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import type { PortfolioEntry } from "../data/portfolio";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function PortfolioDetail({
  entry,
  category,
  backHref,
}: {
  entry: PortfolioEntry;
  category: string;
  backHref: string;
}) {
  return (
    <main className="detail-page">
      <div className="detail-grain" aria-hidden="true" />

      <motion.div
        className="detail-shell"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Back navigation */}
        <motion.div variants={fadeUp}>
          <Link className="detail-back" href={backHref}>
            <span aria-hidden="true">←</span> BACK TO PORTFOLIO
          </Link>
        </motion.div>

        {/* Hero section */}
        <div className="detail-hero">
          <motion.div
            className="detail-copy"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p className="detail-kicker" variants={fadeUp}>
              <span>{category}</span>
              <i />
              PROFILE / {entry.mark}
            </motion.p>

            <motion.h1 variants={fadeUp}>
              {entry.name}<span>.</span>
            </motion.h1>

            <motion.p className="detail-short" variants={fadeUp}>
              {entry.short}
            </motion.p>

            <motion.p className="detail-description" variants={fadeUp}>
              {entry.description}
            </motion.p>
          </motion.div>

          {/* Animated mark */}
          <motion.div
            className="detail-mark"
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.75, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.span
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {entry.mark}
            </motion.span>

            <i>
              {category === "TECHNOLOGY"
                ? "TECH STACK / PROFILE"
                : `SERVICE / ${entry.mark}`}
            </i>
          </motion.div>
        </div>

        {/* Lower content */}
        <motion.div
          className="detail-lower"
          variants={containerVariants}
        >
          {/* In practice */}
          <motion.section
            className="detail-use"
            variants={fadeUp}
          >
            <p className="detail-label">IN PRACTICE</p>

            <h2>
              How it fits<br />
              into the work.
            </h2>

            <p>{entry.use}</p>
          </motion.section>

          {/* Metrics */}
          <motion.section
            className="detail-metrics"
            aria-labelledby="metrics-title"
            variants={fadeUp}
          >
            <div className="metrics-heading">
              <div>
                <p className="detail-label">PERSONAL METRICS</p>
                <h2 id="metrics-title">My experience</h2>
              </div>

              <span className="placeholder-note">
                EDITABLE PLACEHOLDERS
              </span>
            </div>

            <p className="metrics-intro">
              These bars represent my experience and familiarity
              with this technology. Values are indicative.
            </p>

            <div className="metric-list">
              {entry.metrics.map((metric, index) => (
                <motion.div
                  className="metric-row"
                  key={metric.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                >
                  <div className="metric-meta">
                    <span>{metric.label}</span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.4 + index * 0.12,
                      }}
                    >
                      {metric.display}
                    </motion.span>
                  </div>

                  <div className="metric-track">
                    <motion.i
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${Math.min(100, Math.max(0, metric.value))}%`,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.1,
                        delay: 0.2 + index * 0.15,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="detail-footer"
          variants={fadeUp}
        >
          <span>HABEEB / DIGITAL PRACTICE</span>

          <Link href={backHref}>
            RETURN TO THE PORTFOLIO <b>↗</b>
          </Link>
        </motion.footer>
      </motion.div>
    </main>
  );
}
