import { Container } from "@/components/ui/container";

type MoethuzarOverviewProps = {
  label: string;
  title: string;
  body: string;
};

export function MoethuzarOverview({
  label,
  title,
  body,
}: MoethuzarOverviewProps) {
  const paragraphs = body.split("\n\n");

  return (
    <section
      data-moethuzar-overview
      aria-labelledby="moethuzar-overview-heading"
      className="relative bg-[#0E0F11] pb-20 pt-24 sm:pb-24 sm:pt-28 lg:pb-[8rem] lg:pt-[12rem]"
    >
      <Container width="wide" className="relative lg:px-[8.5rem]">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-start-4 lg:col-end-10">
            <p
              className="mb-8 text-[0.75rem] uppercase leading-[1.2] tracking-[0.1em] text-[#7C8A9A] lg:mb-10"
              data-moethuzar-overview-heading
            >
              {label}
            </p>

            <h2
              id="moethuzar-overview-heading"
              className="max-w-[29rem] font-display text-[clamp(3rem,6vw,4rem)] leading-[0.98] tracking-[-0.05em] text-[#F3F0EA]"
              data-moethuzar-overview-heading
            >
              {title}
            </h2>

            <div
              className="mt-10 max-w-[36rem] space-y-8 text-[clamp(1.125rem,1.02rem+0.35vw,1.25rem)] leading-[1.55] tracking-[-0.015em] text-[#CFC8BE] lg:mt-[4.25rem]"
              data-moethuzar-overview-body
            >
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
