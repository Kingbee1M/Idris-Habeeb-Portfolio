import Link from "next/link";
import Image from "next/image";
import type { Project } from "../data/projects";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <main className="detail-page project-detail-page">
      <div className="detail-grain" aria-hidden="true" />
      <div className="detail-shell project-detail-shell">
        <Link className="detail-back" href="/#projects"><span aria-hidden="true">←</span> BACK TO PROJECTS</Link>
        <div className="project-detail-hero">
          <div className="detail-copy">
            <p className="detail-kicker"><span>{project.category}</span><i /> SELECTED PROJECT</p>
            <h1>{project.title}<span>.</span></h1>
            <p className="detail-short">{project.description}</p>
          </div>
          <div className="project-detail-art"><Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 760px) 100vw, 55vw" className="project-detail-image" /></div>
        </div>
        <div className="project-detail-content">
          <section className="project-detail-block"><p className="detail-label">OVERVIEW</p><h2>About the project.</h2><p>{project.brief}</p></section>
          <section className="project-detail-block"><p className="detail-label">EXPERIENCE</p><h2>Built around the product.</h2><p>{project.approach}</p>{project.stack.length > 0 && <div className="project-detail-stack">{project.stack.map((technology) => <span key={technology}>{technology}</span>)}</div>}</section>
        </div>
        <div className="project-link-panel"><div><p className="detail-label">PROJECT LINK</p><h2>{project.link ? "Visit the project." : "Project link unavailable."}</h2><p>{project.link ? "Open the live project in a new tab." : "A public project link is not available."}</p></div>{project.link ? <a className="project-live-link" href={project.link} target="_blank" rel="noreferrer">VISIT PROJECT <span>↗</span></a> : <span className="project-link-na">URL / N/A</span>}</div>
        <footer className="detail-footer"><span>HABEEB / PROJECTS</span><Link href="/#projects">RETURN TO PROJECTS <b>↗</b></Link></footer>
      </div>
    </main>
  );
}
