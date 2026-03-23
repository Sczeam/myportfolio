import pcs from "@/docs/pcs.json";
import { MoethuzarOpeningFrame } from "@/components/projects/moethuzar-opening-frame";
import { MoethuzarOpeningFrameMotion } from "@/components/projects/moethuzar-opening-frame-motion";
import { MoethuzarOverview } from "@/components/projects/moethuzar-overview";
import { MoethuzarOverviewMotion } from "@/components/projects/moethuzar-overview-motion";
import { MoethuzarArchitecture } from "@/components/projects/moethuzar-architecture";
import { MoethuzarArchitectureMotion } from "@/components/projects/moethuzar-architecture-motion";
import { MoethuzarCheckoutOrder } from "@/components/projects/moethuzar-checkout-order";
import { MoethuzarCheckoutOrderMotion } from "@/components/projects/moethuzar-checkout-order-motion";
import { MoethuzarWhatIBuilt } from "@/components/projects/moethuzar-what-i-built";
import { MoethuzarWhatIBuiltMotion } from "@/components/projects/moethuzar-what-i-built-motion";

const { project_case_study } = pcs;

export default function MoethuzarPage() {
  return (
    <main className="flex-1 bg-[#0E0F11]">
      <MoethuzarOpeningFrameMotion />
      <MoethuzarOverviewMotion />
      <MoethuzarWhatIBuiltMotion />
      <MoethuzarArchitectureMotion />
      <MoethuzarCheckoutOrderMotion />
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
      <MoethuzarWhatIBuilt
        label={project_case_study.what_i_built.label}
        title={project_case_study.what_i_built.title}
        pillars={project_case_study.what_i_built.pillars}
      />
      <MoethuzarArchitecture
        label={project_case_study.architecture.label}
        title={project_case_study.architecture.title}
        body={project_case_study.architecture.body}
        principles={project_case_study.architecture.principles}
        layers={project_case_study.architecture.layers}
      />
      <MoethuzarCheckoutOrder
        label={project_case_study.deep_dives[0].label}
        title={project_case_study.deep_dives[0].title}
        body={project_case_study.deep_dives[0].body}
        logicPoints={project_case_study.deep_dives[0].logic_points}
        whyItMatters={project_case_study.deep_dives[0].why_it_matters}
      />
    </main>
  );
}
