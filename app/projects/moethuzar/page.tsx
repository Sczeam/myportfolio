import pcs from "@/docs/pcs.json";
import { MoethuzarOpeningFrame } from "@/components/projects/moethuzar-opening-frame";
import { MoethuzarOpeningFrameMotion } from "@/components/projects/moethuzar-opening-frame-motion";
import { MoethuzarOverview } from "@/components/projects/moethuzar-overview";
import { MoethuzarOverviewMotion } from "@/components/projects/moethuzar-overview-motion";

const { project_case_study } = pcs;

export default function MoethuzarPage() {
  return (
    <main className="flex-1 bg-[#0E0F11]">
      <MoethuzarOpeningFrameMotion />
      <MoethuzarOverviewMotion />
      <MoethuzarOpeningFrame
        title={project_case_study.hero.title}
        summary={project_case_study.hero.summary}
        metadata={project_case_study.hero.metadata}
      />
      <MoethuzarOverview
        label={project_case_study.overview.label}
        title={project_case_study.overview.title}
        body={project_case_study.overview.body}
      />
    </main>
  );
}
