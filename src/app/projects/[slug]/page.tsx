import { notFound } from "next/navigation";
import {
  customProjectRegistry,
  defaultProjectPageByType,
  ProjectDetailLayout,
} from "@/components/projects";
import { getProjectBySlug, getProjects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const CustomPage = project.customComponent
    ? customProjectRegistry[project.customComponent]
    : null;

  if (CustomPage) {
    return (
      <ProjectDetailLayout>
        <CustomPage project={project} />
      </ProjectDetailLayout>
    );
  }

  const DefaultPage = defaultProjectPageByType[project.type];
  return <DefaultPage project={project} />;
}
