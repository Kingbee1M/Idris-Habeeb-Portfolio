
"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";

import { services } from "../data/portfolio";

const ease = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: index * 0.12,
      ease,
    },
  }),
};

function ServiceArtwork({ slug }: { slug: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  const artwork: Record<string, React.ReactNode> = {
    "web-development": (
      <>
        <rect x="12" y="15" width="64" height="50" rx="6" />
        <path d="M12 28h64" />
        <circle cx="21" cy="22" r="1" />
        <circle cx="28" cy="22" r="1" />
        <circle cx="35" cy="22" r="1" />
        <path d="m31 39-8 6 8 6m20-12 8 6-8 6m-6-15-5 19" />
      </>
    ),

    "mobile-app-development": (
      <>
        <rect x="27" y="7" width="34" height="66" rx="7" />
        <path d="M39 15h10M39 63h10" />
        <rect x="33" y="23" width="22" height="34" rx="2" />
        <path d="M38 31h12m-12 7h12m-12 7h8" />
      </>
    ),

    "seo-optimization": (
      <>
        <circle cx="37" cy="34" r="21" />
        <path d="m53 50 19 19" />
        <path d="M25 43v-9h8v9m5 0V23h8v20m5 0v-14h7v14" />
        <path d="m26 27 9-7 9 3 9-9" />
      </>
    ),

    "server-side-rendering": (
      <>
        <rect x="13" y="12" width="62" height="19" rx="4" />
        <rect x="13" y="35" width="62" height="19" rx="4" />
        <rect x="13" y="58" width="62" height="13" rx="4" />
        <circle cx="22" cy="21.5" r="1.5" />
        <circle cx="22" cy="44.5" r="1.5" />
        <circle cx="22" cy="64.5" r="1.5" />
        <path d="M31 21h32m-32 23h32m-32 20h32" />
      </>
    ),

    "crm-ats-dashboards": (
      <>
        <rect x="11" y="12" width="66" height="55" rx="5" />
        <path d="M11 25h66M21 19h1m6 0h1m6 0h1" />
        <circle cx="30" cy="39" r="7" />
        <path d="M18 57c1-7 6-10 12-10s11 3 12 10" />
        <path d="M48 36h19m-19 8h19m-19 8h13" />
      </>
    ),

    "cookie-integration": (
      <>
        <path d="M43 12c-1 6 4 10 10 10 1 12 8 16 16 15 2 18-11 30-27 32C23 67 12 55 13 39 14 24 25 14 43 12Z" />
        <circle cx="32" cy="31" r="2" />
        <circle cx="49" cy="38" r="2" />
        <circle cx="31" cy="49" r="2" />
        <circle cx="43" cy="57" r="1.5" />
        <path d="m49 10 5 5 9-10" />
      </>
    ),
  };

  return (
    <motion.div
      className="service-art"
      variants={{
        rest: { scale: 1, rotate: 0 },
        hover: {
          scale: 1.09,
          rotate: -3,
          transition: { duration: 0.35, ease },
        },
      }}
    >
      <svg viewBox="0 0 88 80" {...common}>
        {artwork[slug] ?? artwork["web-development"]}
      </svg>
    </motion.div>
  );
}

export default function SkillsAndTechnologies() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.12,
  });

  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = prefersReducedMotion === true;

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 25,
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

  return (
    <section
      ref={sectionRef}
      className="skills-section"
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className="skills-inner">
        {/* Section heading */}
        <motion.div
          className="section-kicker"
          variants={reveal}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <i />
          <span>SKILLS &amp; TECHNOLOGIES</span>
        </motion.div>

        <motion.div
          className="skills-heading"
          variants={reveal}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div>
            <p className="about-overline">
              WHAT I BRING TO THE BUILD
            </p>

            <h2 id="skills-title">
              A considered stack.
              <br />
              <span>Useful work.</span>
            </h2>
          </div>

          <p>
            From the first sketch to a shipped product, I work across
            the details that make digital experiences useful, clear,
            and dependable.
          </p>
        </motion.div>

        {/* Services heading */}
        <motion.div
          className="skills-subheading"
          variants={reveal}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div>
            <span>01</span>
            <h3>Services</h3>
          </div>

          <p>Capabilities shaped around real product needs.</p>
        </motion.div>

        {/* Service cards */}
        <div className="service-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              custom={index}
              variants={
                reduceMotion
                  ? {
                      hidden: { opacity: 1, y: 0 },
                      visible: { opacity: 1, y: 0 },
                    }
                  : cardVariants
              }
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.div
                className="service-card"
                variants={{
                  rest: {},
                  hover: {},
                }}
                initial="rest"
                whileHover={reduceMotion ? "rest" : "hover"}
                whileTap={reduceMotion ? "rest" : { scale: 0.99 }}
                transition={{ duration: 0.3, ease }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="service-card-link"
                >
                  <div className="service-content">
                    <span className="service-number">
                      {service.mark} / SERVICE
                    </span>

                    <h4>{service.name}</h4>

                    <p>{service.description}</p>

                    <span className="service-link">
                      EXPLORE SERVICE <b>↗</b>
                    </span>
                  </div>

                  <ServiceArtwork slug={service.slug} />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
