import Link from "next/link";
import type { PortfolioEntry } from "../data/portfolio";

export default function PortfolioDetail({ entry, category, backHref }: { entry: PortfolioEntry; category: string; backHref: string }) {
  return (
    <main className="detail-page">
      <div className="detail-grain" aria-hidden="true" />
      <div className="detail-shell">
        <Link className="detail-back" href={backHref}><span aria-hidden="true">←</span> BACK TO PORTFOLIO</Link>
        <div className="detail-hero">
          <div className="detail-copy">
            <p className="detail-kicker"><span>{category}</span><i /> PROFILE / {entry.mark}</p>
            <h1>{entry.name}<span>.</span></h1>
            <p className="detail-short">{entry.short}</p>
            <p className="detail-description">{entry.description}</p>
          </div>
          <div className="detail-mark" aria-hidden="true"><span>{entry.mark}</span><i>{category === "TECHNOLOGY" ? "TECH STACK / PROFILE" : `SERVICE / ${entry.mark}`}</i></div>
        </div>
        <div className="detail-lower">
          <section className="detail-use"><p className="detail-label">IN PRACTICE</p><h2>How it fits<br/>into the work.</h2><p>{entry.use}</p></section>
          <section className="detail-metrics" aria-labelledby="metrics-title">
            <div className="metrics-heading"><div><p className="detail-label">PERSONAL METRICS</p><h2 id="metrics-title">My experience</h2></div><span className="placeholder-note">EDITABLE PLACEHOLDERS</span></div>
            <p className="metrics-intro">These bars are starter placeholders. Update the values and labels in <code>app/data/portfolio.ts</code> when your figures are ready.</p>
            {entry.metrics.map((metric) => <div className="metric-row" key={metric.label}><div className="metric-meta"><span>{metric.label}</span><span>{metric.display}</span></div><div className="metric-track"><i style={{ width: `${metric.value}%` }} /></div></div>)}
          </section>
        </div>
        <footer className="detail-footer"><span>HABEEB / DIGITAL PRACTICE</span><Link href={backHref}>RETURN TO THE PORTFOLIO <b>↗</b></Link></footer>
      </div>
    </main>
  );
}
