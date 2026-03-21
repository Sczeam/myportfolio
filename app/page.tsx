import { Hero } from "@/components/home/hero";
import { OpeningSequenceMotion } from "@/components/home/opening-sequence-motion";
import { SelectedWorkIntro } from "@/components/home/selected-work-intro";
import { SelectedWorkIntroMotion } from "@/components/home/selected-work-intro-motion";
import { ThesisSection } from "@/components/home/thesis-section";
import { ThesisSectionMotion } from "@/components/home/thesis-section-motion";

export default function Home() {
  return (
    <main className="flex-1">
      <OpeningSequenceMotion />
      <ThesisSectionMotion />
      <SelectedWorkIntroMotion />
      <Hero />
      <ThesisSection />
      <SelectedWorkIntro />
    </main>
  );
}
