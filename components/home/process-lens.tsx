import { Container } from "@/components/ui/container";

const processPrinciples = [
  {
    index: "01",
    title: "Infrastructure",
    description:
      "Architecting robust, scalable servers that remain invisible to the user while powering flawless interaction.",
  },
  {
    index: "02",
    title: "Security",
    description:
      "Prioritizing data integrity and encryption as foundational elements, not afterthoughts of the design process.",
  },
  {
    index: "03",
    title: "Performance",
    description:
      "Rhythmic optimization where every millisecond is accounted for, ensuring the digital environment remains fluid.",
  },
  {
    index: "04",
    title: "Continuity",
    description:
      "End-to-end implementation where the frontend nuance is perfectly mirrored by backend reliability.",
  },
] as const;

export function ProcessLens() {
  return (
    <section
      id="process"
      data-process-lens
      className="relative overflow-clip pb-20 pt-[6.5rem] sm:pb-24 sm:pt-[7.5rem] lg:pb-[8rem] lg:pt-[10rem]"
      aria-labelledby="process-lens-heading"
    >
      <Container width="wide" className="relative lg:px-[8.5rem]">
        <div
          className="max-w-[18rem] sm:max-w-[22rem] lg:max-w-[19rem]"
          data-process-lens-header
        >
          <p className="type-label text-accent" data-process-lens-kicker>
            Development Values
          </p>
          <h2
            id="process-lens-heading"
            className="mt-3 font-display text-[clamp(2.7rem,4.4vw,4rem)] leading-[0.94] tracking-[-0.04em] text-text-primary"
            data-process-lens-title
          >
            The Logic
          </h2>
        </div>

        <div
          className="mt-14 h-px w-full bg-[rgba(68,71,76,0.32)] lg:mt-[5.75rem]"
          data-process-lens-rule
        />

        <div
          className="mt-8 grid gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-10 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0"
          data-process-lens-grid
        >
          {processPrinciples.map((principle) => (
            <article
              key={principle.index}
              className="max-w-[16.5rem]"
              data-process-lens-item
            >
              <h3 className="font-display text-[clamp(1.65rem,2vw,2rem)] italic leading-none tracking-[-0.03em] text-text-primary">
                <span className="text-accent">{principle.index}.</span>{" "}
                {principle.title}
              </h3>
              <p className="type-body mt-6 max-w-[15.5rem] text-text-secondary">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
