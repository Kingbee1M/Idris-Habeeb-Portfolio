import Link from "next/link";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section className="experience-section" id="experience" aria-labelledby="experience-title">
      <div className="experience-inner">
        <div className="section-kicker"><span>04</span><i /><span>EXPERIENCE</span></div>
        <div className="experience-heading">
          <div><p className="about-overline">SELECTED ROLES &amp; COLLABORATIONS</p><h2 id="experience-title">Work that<br /><span>moves things forward.</span></h2></div>
          <p>A record of the teams, products, and interfaces I’ve helped bring to life.</p>
        </div>

        <div className="experience-list">
          {experience.map((item, index) => (
            <Link className="experience-item" href={`/experience/${item.slug}`} key={item.slug} aria-label={`${item.role} at ${item.company}. View experience details`}>
              <div className="experience-marker"><span>{String(index + 1).padStart(2, "0")}</span><i /></div>
              <article className="experience-card">
                <div className="experience-card-heading">
                  <div><p className="experience-company">{item.company}</p><h3>{item.role}</h3></div>
                  <span className="experience-arrangement">{item.arrangement}</span>
                </div>
                <div className="experience-meta"><span>{item.dates ?? "Dates not listed"}</span><span className="experience-meta-divider">/</span><span>{item.website ? "COMPANY PROFILE" : "WEBSITE: N/A"}</span></div>
                <p className="experience-description">{item.contributions[0]}</p>
                <span className="experience-open">VIEW ROLE DETAILS <b>↗</b></span>
              </article>
            </Link>
          ))}
        </div>
        <div className="experience-footnote"><span className="status-dot" /> BUILDING WITH PURPOSE, ONE RELEASE AT A TIME.</div>
      </div>
    </section>
  );
}
