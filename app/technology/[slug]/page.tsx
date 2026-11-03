import { notFound } from "next/navigation";
import PortfolioDetail from "../../components/PortfolioDetail";
import { technologies } from "../../data/portfolio";

export function generateStaticParams() {
  return technologies.map(({ slug }) => ({ slug }));
}

export default async function TechnologyPage({ params }: PageProps<"/technology/[slug]">) {
  const { slug } = await params;
  const entry = technologies.find((technology) => technology.slug === slug);
  if (!entry) notFound();
  return <PortfolioDetail entry={entry} category="TECHNOLOGY" backHref="/#skills" />;
}
