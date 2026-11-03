import Link from "next/link";
import { services, technologies } from "../data/portfolio";

function ServiceArtwork({ index }: { index: number }) {
  const motifs = [
    <><rect x="13" y="17" width="62" height="44" rx="5"/><path d="M13 28h62M22 23h1m6 0h1m6 0h1M23 39h40M23 46h27M23 53h33"/></>,
    <><rect x="12" y="15" width="64" height="48" rx="4"/><path d="M12 27h64M21 22h1m6 0h1m6 0h1M23 38h17v16H23zM48 38h18M48 44h18M48 50h13"/></>,
    <><rect x="16" y="12" width="56" height="54" rx="4"/><path d="M16 25h56M24 20h1m6 0h1m6 0h1M25 36h38M25 43h24M25 53h30"/></>,
    <><rect x="28" y="9" width="36" height="62" rx="8"/><path d="M39 17h14M37 28h18M37 35h18M37 42h12M41 62h10"/></>,
    <><circle cx="40" cy="37" r="20"/><path d="m55 52 16 15M31 40l6-7 7 4 8-11M31 47h20"/></>,
    <><path d="M15 61h58M20 55V38h14v17M39 55V27h14v28M58 55V17h11v38"/><circle cx="64" cy="15" r="3"/></>,
    <><rect x="12" y="16" width="64" height="46" rx="4"/><path d="M12 28h64M20 23h1m6 0h1m6 0h1M21 39h15v14H21zM44 38h23M44 45h23M44 52h15"/></>,
  ];
  return <svg viewBox="0 0 88 80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{motifs[index]}</svg>;
}

export default function SkillsAndTechnologies() {
  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-title">
      <div className="skills-inner">
        <div className="section-kicker"><span>03</span><i /><span>SKILLS &amp; TECHNOLOGIES</span></div>
        <div className="skills-heading">
          <div><p className="about-overline">WHAT I BRING TO THE BUILD</p><h2 id="skills-title">A considered stack.<br/><span>Useful work.</span></h2></div>
          <p>From the first sketch to a shipped product, I work across the details that make digital experiences useful, clear, and dependable.</p>
        </div>

        <div className="skills-subheading"><div><span>01</span><h3>Services</h3></div><p>Capabilities shaped around real product needs.</p></div>
        <div className="service-grid">
          {services.map((service, index) => (
            <Link className="service-card" href={`/services/${service.slug}`} key={service.slug}>
              <div className="service-art"><ServiceArtwork index={index} /></div>
              <div className="service-content"><span className="service-number">{service.mark} / SERVICE</span><h4>{service.name}</h4><p>{service.description}</p><span className="service-link">EXPLORE SERVICE <b>↗</b></span></div>
            </Link>
          ))}
        </div>

        {/* <div className="skills-subheading technology-subheading"><div><span>02</span><h3>Technologies</h3></div><p>Tools I use to design, build, and ship.</p></div>
        <div className="technology-grid">
          {technologies.map((technology, index) => (
            <Link className="technology-card" href={`/technology/${technology.slug}`} key={technology.slug}>
              <span className={`technology-mark technology-mark-${index % 6}`}>{technology.mark}</span><span className="technology-name">{technology.name}</span><span className="technology-arrow">↗</span>
            </Link>
          ))}
        </div> */}
      </div>
    </section>
  );
}
