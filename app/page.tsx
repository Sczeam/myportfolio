import { Hero } from "@/components/home/hero";
import { OpeningSequenceMotion } from "@/components/home/opening-sequence-motion";
import { SelectedWorkIntro } from "@/components/home/selected-work-intro";
import { SelectedWorkIntroMotion } from "@/components/home/selected-work-intro-motion";
import { ThesisSection } from "@/components/home/thesis-section";

export default function Home() {
  return (
    <main className="flex-1">
      <OpeningSequenceMotion />
      <SelectedWorkIntroMotion />
      <Hero />
      <ThesisSection />
      <SelectedWorkIntro />
    </main>
  );
}
