import { Hero } from "@/components/home/hero";
import { ThesisSection } from "@/components/home/thesis-section";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <ThesisSection />
    </main>
  );
}
