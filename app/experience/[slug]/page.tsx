import { notFound } from "next/navigation";
import ExperienceDetail from "../../components/ExperienceDetail";
import { experience } from "../../data/experience";

export function generateStaticParams() {
  return experience.map(({ slug }) => ({ slug }));
}

export default async function ExperiencePage({ params }: PageProps<"/experience/[slug]">) {
  const { slug } = await params;
  const role = experience.find((item) => item.slug === slug);
  if (!role) notFound();
  return <ExperienceDetail role={role} />;
}
