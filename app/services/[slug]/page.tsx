import { notFound } from "next/navigation";
import PortfolioDetail from "../../components/PortfolioDetail";
import { services } from "../../data/portfolio";

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const entry = services.find((service) => service.slug === slug);
  if (!entry) notFound();
  return <PortfolioDetail entry={entry} category="SERVICE" backHref="/#skills" />;
}
