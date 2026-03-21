import {
  FeaturedProject,
  type FeaturedProjectData,
} from "@/components/home/featured-project";
import { FeaturedProjectMotion } from "@/components/home/featured-project-motion";
import { Hero } from "@/components/home/hero";
import { OpeningSequenceMotion } from "@/components/home/opening-sequence-motion";
import { SelectedWorkIntro } from "@/components/home/selected-work-intro";
import { SelectedWorkIntroMotion } from "@/components/home/selected-work-intro-motion";
import { ThesisSection } from "@/components/home/thesis-section";
import { ThesisSectionMotion } from "@/components/home/thesis-section-motion";

const featuredProjects: FeaturedProjectData[] = [
  {
    slug: "project-lumen",
    category: "Architectural Visualization",
    title: "Project\nLumen",
    href: "#",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <OpeningSequenceMotion />
      <ThesisSectionMotion />
      <SelectedWorkIntroMotion />
      <FeaturedProjectMotion />
      <Hero />
      <ThesisSection />
      <SelectedWorkIntro />
      {featuredProjects.map((project, index) => (
        <FeaturedProject key={project.slug} project={project} index={index} />
      ))}
    </main>
  );
}
