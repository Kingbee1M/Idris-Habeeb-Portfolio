import Link from "next/link";
import { projects } from "../data/projects";
import ProjectArtwork from "./ProjectArtwork";

export default function Projects() {
  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="projects-inner">
        <div className="section-kicker"><span>05</span><i /><span>SELECTED PROJECTS</span></div>
        <div className="projects-heading">
          <div><p className="about-overline">A FEW THINGS IN THE WORKS</p><h2 id="projects-title">Ideas into<br /><span>digital things.</span></h2></div>
          <p>A visual collection of interface concepts and product work. Select a card to see the thinking behind it.</p>
        </div>
        <div className="projects-toolbar"><span><i /> MOCK PROJECTS / 0{projects.length}</span><span>SELECT A CARD TO EXPLORE <b>↘</b></span></div>
        <div className="project-masonry">
          {projects.map((project, index) => (
            <Link className="project-card" href={`/projects/${project.slug}`} key={project.slug}>
              <div className={`project-card-art project-card-art-${index % 4}`}><ProjectArtwork variant={project.variant} /><span className="project-card-open" aria-hidden="true">↗</span><span className="project-card-concept">CONCEPT</span></div>
              <div className="project-card-copy"><div className="project-card-meta"><span>{project.category}</span><span>0{index + 1}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-card-tags">{project.stack.slice(0, 3).map((technology) => <span key={technology}>{technology}</span>)}</div></div>
            </Link>
          ))}
        </div>
        <p className="projects-placeholder-note">THESE ARE PLACEHOLDER CONCEPTS — PROJECT DATA AND LINKS CAN BE UPDATED IN THE PROJECT ARRAY.</p>
      </div>
    </section>
  );
}
