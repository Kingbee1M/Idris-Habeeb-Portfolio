import Link from "next/link";
import type { Project } from "../data/projects";
import ProjectArtwork from "./ProjectArtwork";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <main className="detail-page project-detail-page">
      <div className="detail-grain" aria-hidden="true" />
      <div className="detail-shell project-detail-shell">
        <Link className="detail-back" href="/#projects"><span aria-hidden="true">←</span> BACK TO PROJECTS</Link>
        <div className="project-detail-hero">
          <div className="detail-copy">
            <p className="detail-kicker"><span>{project.category}</span><i /> CONCEPT / PLACEHOLDER</p>
            <h1>{project.title}<span>.</span></h1>
            <p className="detail-short">{project.description}</p>
            <p className="detail-description">This is sample portfolio content to establish the project detail layout. Replace it with the real project story when you update the project data.</p>
          </div>
          <div className="project-detail-art"><ProjectArtwork variant={project.variant} /></div>
        </div>
        <div className="project-detail-content">
          <section className="project-detail-block"><p className="detail-label">THE BRIEF</p><h2>What this concept explores.</h2><p>{project.brief}</p></section>
          <section className="project-detail-block"><p className="detail-label">DESIGN &amp; BUILD</p><h2>How it comes together.</h2><p>{project.approach}</p><div className="project-detail-stack">{project.stack.map((technology) => <span key={technology}>{technology}</span>)}</div></section>
        </div>
        <div className="project-link-panel"><div><p className="detail-label">PROJECT LINK</p><h2>{project.link ? "See the live project." : "Project link will be added."}</h2><p>{project.link ? "This sample URL can be replaced in the project data." : "Add the live URL to the link field in app/data/projects.ts when you replace this mock project."}</p></div>{project.link ? <a className="project-live-link" href={project.link} target="_blank" rel="noreferrer">VISIT PROJECT <span>↗</span></a> : <span className="project-link-na">URL / N/A</span>}</div>
        <footer className="detail-footer"><span>HABEEB / PROJECTS</span><Link href="/#projects">RETURN TO PROJECTS <b>↗</b></Link></footer>
      </div>
    </main>
  );
}
