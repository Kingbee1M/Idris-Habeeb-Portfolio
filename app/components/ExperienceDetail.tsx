import Link from "next/link";
import type { ExperienceRole } from "../data/experience";

export default function ExperienceDetail({ role }: { role: ExperienceRole }) {
  const initials = role.company.split(/\s+/).map((word) => word[0]).join("").slice(0, 2).toUpperCase();

  return (
    <main className="detail-page experience-detail-page">
      <div className="detail-grain" aria-hidden="true" />
      <div className="detail-shell">
        <Link className="detail-back" href="/#experience"><span aria-hidden="true">←</span> BACK TO EXPERIENCE</Link>
        <div className="detail-hero">
          <div className="detail-copy">
            <p className="detail-kicker"><span>EXPERIENCE</span><i /> ROLE / {role.arrangement.toUpperCase()}</p>
            <h1>{role.company}<span>.</span></h1>
            <p className="detail-short">{role.role}</p>
            <p className="detail-description">{role.summary}</p>
            <div className="company-detail-meta"><span>{role.arrangement}</span><i /> <span>{role.dates ?? "Dates not listed"}</span></div>
          </div>
          <div className="detail-mark" aria-hidden="true"><span>{initials}</span><i>WORK / {role.slug.toUpperCase()}</i></div>
        </div>
        <div className="company-detail-content">
          <section className="company-overview">
            <p className="detail-label">THE COMPANY</p>
            <h2>Context for<br />the collaboration.</h2>
            <p>{role.overview}</p>
          </section>
          <section className="company-contributions">
            <p className="detail-label">MY CONTRIBUTION</p>
            <h2>What I worked on.</h2>
            <ul>{role.contributions.map((contribution) => <li key={contribution}><span aria-hidden="true">↗</span>{contribution}</li>)}</ul>
          </section>
        </div>
        <div className="company-website-panel">
          <div><p className="detail-label">COMPANY WEBSITE</p><h2>{role.website ? "Explore the official site." : "No website link provided."}</h2><p>{role.website ? "Open the company site in a new tab." : "N/A"}</p></div>
          {role.website ? <a className="company-website-link" href={role.website} target="_blank" rel="noreferrer">{role.websiteLabel ?? "OFFICIAL WEBSITE"}<span>↗</span></a> : <span className="company-website-na">N/A</span>}
        </div>
        <footer className="detail-footer"><span>HABEEB / EXPERIENCE</span><Link href="/#experience">RETURN TO EXPERIENCE <b>↗</b></Link></footer>
      </div>
    </main>
  );
}
