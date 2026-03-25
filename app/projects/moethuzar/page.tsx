import pcs from "@/docs/pcs.json";
import { MoethuzarOpeningFrame } from "@/components/projects/moethuzar-opening-frame";
import { MoethuzarOpeningFrameMotion } from "@/components/projects/moethuzar-opening-frame-motion";
import { MoethuzarOverview } from "@/components/projects/moethuzar-overview";
import { MoethuzarOverviewMotion } from "@/components/projects/moethuzar-overview-motion";
import { MoethuzarVisualStory } from "@/components/projects/moethuzar-visual-story";
import { MoethuzarVisualStoryMotion } from "@/components/projects/moethuzar-visual-story-motion";
import { MoethuzarArchitecture } from "@/components/projects/moethuzar-architecture";
import { MoethuzarArchitectureMotion } from "@/components/projects/moethuzar-architecture-motion";
import { MoethuzarCheckoutOrder } from "@/components/projects/moethuzar-checkout-order";
import { MoethuzarCheckoutOrderMotion } from "@/components/projects/moethuzar-checkout-order-motion";
import { MoethuzarWishlistArchitecture } from "@/components/projects/moethuzar-wishlist-architecture";
import { MoethuzarWishlistArchitectureMotion } from "@/components/projects/moethuzar-wishlist-architecture-motion";
import { MoethuzarWhatIBuilt } from "@/components/projects/moethuzar-what-i-built";
import { MoethuzarWhatIBuiltMotion } from "@/components/projects/moethuzar-what-i-built-motion";
import { MoethuzarAdminTools } from "@/components/projects/moethuzar-admin-tools";
import { MoethuzarAdminToolsMotion } from "@/components/projects/moethuzar-admin-tools-motion";
import { MoethuzarCommerceDomainModel } from "@/components/projects/moethuzar-commerce-domain-model";
import { MoethuzarCommerceDomainModelMotion } from "@/components/projects/moethuzar-commerce-domain-model-motion";
import { MoethuzarChallengesSolutions } from "@/components/projects/moethuzar-challenges-solutions";
import { MoethuzarChallengesSolutionsMotion } from "@/components/projects/moethuzar-challenges-solutions-motion";
import { MoethuzarReliabilitySecurity } from "@/components/projects/moethuzar-reliability-security";
import { MoethuzarReliabilitySecurityMotion } from "@/components/projects/moethuzar-reliability-security-motion";
import { MoethuzarEngineeringPrinciples } from "@/components/projects/moethuzar-engineering-principles";
import { MoethuzarEngineeringPrinciplesMotion } from "@/components/projects/moethuzar-engineering-principles-motion";
import { MoethuzarDeliveryMethodology } from "@/components/projects/moethuzar-delivery-methodology";
import { MoethuzarDeliveryMethodologyMotion } from "@/components/projects/moethuzar-delivery-methodology-motion";

const { project_case_study } = pcs;

export default function MoethuzarPage() {
  return (
    <main className="flex-1 bg-[#0E0F11]">
      <MoethuzarOpeningFrameMotion />
      <MoethuzarOverviewMotion />
      <MoethuzarVisualStoryMotion />
      <MoethuzarWhatIBuiltMotion />
      <MoethuzarArchitectureMotion />
      <MoethuzarCheckoutOrderMotion />
      <MoethuzarWishlistArchitectureMotion />
      <MoethuzarAdminToolsMotion />
      <MoethuzarCommerceDomainModelMotion />
      <MoethuzarChallengesSolutionsMotion />
      <MoethuzarReliabilitySecurityMotion />
      <MoethuzarEngineeringPrinciplesMotion />
      <MoethuzarDeliveryMethodologyMotion />
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
      <MoethuzarVisualStory
        label={project_case_study.visual_story.label}
        title={project_case_study.visual_story.title}
        images={project_case_study.visual_story.images}
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
      />
      <MoethuzarWishlistArchitecture
        label={project_case_study.deep_dives[1].label}
        title={project_case_study.deep_dives[1].title}
        body={project_case_study.deep_dives[1].body}
        logicPoints={project_case_study.deep_dives[1].logic_points}
      />
      <MoethuzarAdminTools
        label={project_case_study.deep_dives[2].label}
        title={project_case_study.deep_dives[2].title}
        body={project_case_study.deep_dives[2].body}
        logicPoints={project_case_study.deep_dives[2].logic_points}
      />
      <MoethuzarCommerceDomainModel
        label={project_case_study.commerce_domain_model.label}
        title={project_case_study.commerce_domain_model.title}
        body={project_case_study.commerce_domain_model.body}
        subchapterTitle={
          project_case_study.commerce_domain_model.subchapter_title
        }
        subchapterPoints={
          project_case_study.commerce_domain_model.subchapter_points
        }
      />
      <MoethuzarReliabilitySecurity
        label={project_case_study.reliability_security.label}
        title={project_case_study.reliability_security.title}
        body={project_case_study.reliability_security.body}
        securityPoints={project_case_study.reliability_security.security_points}
        reliabilityPoints={
          project_case_study.reliability_security.reliability_points
        }
        closing={project_case_study.reliability_security.closing}
      />
      <MoethuzarEngineeringPrinciples
        label={project_case_study.engineering_principles.label}
        title={project_case_study.engineering_principles.title}
        body={project_case_study.engineering_principles.body}
        items={project_case_study.engineering_principles.items}
      />
      <MoethuzarDeliveryMethodology
        label={project_case_study.delivery_methodology.label}
        title={project_case_study.delivery_methodology.title}
        body={project_case_study.delivery_methodology.body}
        items={project_case_study.delivery_methodology.items}
      />
      <MoethuzarChallengesSolutions
        label={project_case_study.challenges_and_solutions.label}
        title={project_case_study.challenges_and_solutions.title}
        body={project_case_study.challenges_and_solutions.body}
        items={project_case_study.challenges_and_solutions.items}
      />
    </main>
  );
}
