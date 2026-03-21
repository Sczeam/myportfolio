import {
  FeaturedProject,
} from "@/components/home/featured-project";
import { FeaturedProjectMotion } from "@/components/home/featured-project-motion";
import { Hero } from "@/components/home/hero";
import { OpeningSequenceMotion } from "@/components/home/opening-sequence-motion";
import { PersonalFrame } from "@/components/home/personal-frame";
import { PersonalFrameMotion } from "@/components/home/personal-frame-motion";
import { ProcessLens } from "@/components/home/process-lens";
import { ProcessLensMotion } from "@/components/home/process-lens-motion";
import { SelectedWorkIntro } from "@/components/home/selected-work-intro";
import { SelectedWorkIntroMotion } from "@/components/home/selected-work-intro-motion";
import { ThesisSection } from "@/components/home/thesis-section";
import { ThesisSectionMotion } from "@/components/home/thesis-section-motion";
import { featuredProjects } from "@/data/projects";

export default function Home() {
  return (
    <main className="flex-1">
      <OpeningSequenceMotion />
      <ThesisSectionMotion />
      <SelectedWorkIntroMotion />
      <FeaturedProjectMotion />
      <ProcessLensMotion />
      <PersonalFrameMotion />
      <Hero />
      <ThesisSection />
      <SelectedWorkIntro />
      {featuredProjects.map((project, index) => (
        <FeaturedProject key={project.slug} project={project} index={index} />
      ))}
      <ProcessLens />
      <PersonalFrame />
    </main>
  );
}
