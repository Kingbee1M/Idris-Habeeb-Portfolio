import CodingNumbers from "./CodingNumbers";
import Link from "next/link";
import { technologies } from "../data/portfolio";

const details = [
  { label: "FROM", value: "Lagos, Nigeria" },
  { label: "BASED IN", value: "Lagos, Nigeria" },
  { label: "AGE", value: "23" },
  { label: "GENDER", value: "Male" },
];

export default function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-inner">
        <div className="section-kicker"><span>02</span><i /><span>ABOUT ME</span></div>
        <div className="about-grid">
          <div className="about-copy">
            <p className="about-overline">A LITTLE INTRODUCTION</p>
            <h2 id="about-title">I’m Idris <span>Habeeb.</span></h2>
            <h3>WEBSITE &amp; MOBILE APP FRONTEND DEVELOPER</h3>
            <p className="about-description">I’m a Microsoft-certified full-stack web and mobile app developer. I build dynamic, responsive applications with Next.js, Vue.js, and Tailwind CSS, and work across state management, API integration, and ATS, CRM, and HRM platforms. I also build mobile app frontends with Expo (React Native), alongside backend services with NestJS, PostgreSQL, and MySQL.</p>

            <dl className="about-details">
              {details.map((detail) => (
                <div className="detail-item" key={detail.label}>
                  <dt>{detail.label}</dt>
                  <dd>{detail.value}</dd>
                </div>
              ))}
            </dl>

            <div className="skill-list" aria-label="Technologies">
              <p className="skill-label">CORE STACK</p>
              <div className="skill-tags">
                {technologies.map((technology) => <Link href={`/technology/${technology.slug}`} key={technology.slug}>{technology.name}</Link>)}
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="code-window">
              <div className="code-window-bar">
                <div className="window-lights" aria-hidden="true"><i /><i /><i /></div>
                <span className="code-file">habeeb.tsx</span>
                <span className="code-status"><i /> LIVE</span>
              </div>
              <div className="code-window-screen"><CodingNumbers /></div>
              <div className="code-window-footer"><span>GENERATIVE CODE FIELD</span><span>BUILD / 001</span></div>
            </div>
            <p className="code-caption">Small details. Solid systems. Thoughtful interfaces.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

