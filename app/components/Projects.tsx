import Link from "next/link";
import Image from "next/image";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="projects-inner">
        <div className="section-kicker"><i /><span>SELECTED PROJECTS</span></div>
        <div className="projects-heading">
          <div><p className="about-overline">SELECTED PROJECTS</p><h2 id="projects-title">Ideas into<br /><span>digital things.</span></h2></div>
          <p>A collection of websites and product experiences. Select a card to learn more about each project.</p>
        </div>
        <div className="projects-toolbar"><span><i /> PROJECTS / {String(projects.length).padStart(2, "0")}</span><span>SELECT A CARD TO EXPLORE <b>↘</b></span></div>
        <div className="project-masonry">
          {projects.map((project, index) => (
            <Link className="project-card" href={`/projects/${project.slug}`} key={project.slug}>
              <div className={`project-card-art project-card-art-${index % 4}`}><Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 30vw" className="project-card-image" /><span className="project-card-open" aria-hidden="true">↗</span><span className="project-card-concept">PROJECT</span></div>
              <div className="project-card-copy"><div className="project-card-meta"><span>{project.category}</span><span>0{index + 1}</span></div><h3>{project.title}</h3><p>{project.description}</p>{project.stack.length > 0 && <div className="project-card-tags">{project.stack.slice(0, 3).map((technology) => <span key={technology}>{technology}</span>)}</div>}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
