import { Container } from "@/components/ui/container";

type ChallengeSolutionItem = {
  challenge_label: string;
  challenge: string;
  resolution_label: string;
  resolution: string;
};

type MoethuzarChallengesSolutionsProps = {
  label: string;
  title: string;
  body: string;
  items: ChallengeSolutionItem[];
};

function DirectionArrow() {
  return (
    <svg
      viewBox="0 0 48 24"
      className="h-4 w-8 text-[#3B4048]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
    >
      <path d="M4 12h34" />
      <path d="M30 6l8 6-8 6" />
    </svg>
  );
}

export function MoethuzarChallengesSolutions({
  label,
  title,
  body,
  items,
}: MoethuzarChallengesSolutionsProps) {
  return (
    <section
      data-moethuzar-challenges-solutions
      aria-labelledby="moethuzar-challenges-solutions-title"
      className="relative bg-[#0E0F11] pb-24 pt-24 sm:pb-28 sm:pt-28 lg:pb-[12rem] lg:pt-[12rem]"
    >
      <Container width="wide" className="relative lg:px-[8.5rem]">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-8">
          <div
            className="lg:col-start-1 lg:col-end-9"
            data-moethuzar-challenges-solutions-phase="phase1"
          >
            <p className="text-[0.75rem] uppercase leading-[1.2] tracking-[0.1em] text-[#74706A]">
              {label}
            </p>
            <h2
              id="moethuzar-challenges-solutions-title"
              className="mt-5 max-w-[34rem] font-display text-[clamp(3.4rem,7vw,5.7rem)] leading-[0.9] tracking-[-0.065em] text-[#F3F0EA]"
            >
              {title}
            </h2>
          </div>

          <div
            className="lg:col-start-1 lg:col-end-8 lg:pt-[1rem]"
            data-moethuzar-challenges-solutions-phase="phase2"
          >
            <p className="max-w-[44rem] text-[1.25rem] leading-[1.55] tracking-[-0.025em] text-[#CFC8BE]">
              {body}
            </p>
          </div>

          <div
            className="space-y-12 pt-8 lg:col-start-1 lg:col-end-13 lg:space-y-[4.5rem] lg:pt-[7.5rem]"
            data-moethuzar-challenges-solutions-phase="phase3"
          >
            {items.map((item, index) => (
              <div
                key={`${item.challenge_label}-${index}`}
                className="grid grid-cols-1 gap-y-6 border-t border-[#20242B] pt-8 lg:grid-cols-[minmax(0,1fr)_4rem_minmax(0,0.92fr)] lg:items-start lg:gap-x-8 lg:gap-y-0 lg:pt-10"
                data-moethuzar-challenges-solutions-item
              >
                <div className="max-w-[24rem]">
                  <p className="text-[0.68rem] uppercase leading-[1.2] tracking-[0.08em] text-[#74706A]">
                    {item.challenge_label}
                  </p>
                  <p className="mt-5 max-w-[24rem] font-display text-[clamp(2rem,3.2vw,2.65rem)] italic leading-[1.08] tracking-[-0.045em] text-[#F3F0EA]">
                    {item.challenge}
                  </p>
                </div>

                <div className="hidden justify-center pt-10 lg:flex">
                  <DirectionArrow />
                </div>

                <div className="max-w-[23rem] lg:pt-1">
                  <p className="text-[0.68rem] uppercase leading-[1.2] tracking-[0.08em] text-[#7C8A9A]">
                    {item.resolution_label}
                  </p>
                  <p className="mt-5 text-[1.25rem] leading-[1.55] tracking-[-0.025em] text-[#F3F0EA]">
                    {item.resolution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
