import { Hero } from "@/components/home/hero";
import { OpeningSequenceMotion } from "@/components/home/opening-sequence-motion";
import { ThesisSection } from "@/components/home/thesis-section";

export default function Home() {
  return (
    <main className="flex-1">
      <OpeningSequenceMotion />
      <Hero />
      <ThesisSection />
    </main>
  );
}
