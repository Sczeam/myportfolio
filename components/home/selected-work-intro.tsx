import { Container } from "@/components/ui/container";

export function SelectedWorkIntro() {
  return (
    <section
      id="selected-work"
      data-selected-work-intro
      className="relative overflow-clip pb-9 pt-[6.25rem] sm:pb-11 sm:pt-[7rem] lg:pb-[4rem] lg:pt-[8.5rem]"
      aria-labelledby="selected-work-heading"
    >
      <Container width="wide" className="relative lg:px-[8.5rem]">
        <div className="flex items-center gap-4 sm:gap-6">
          <span className="type-label text-accent" data-selected-work-index>
            01
          </span>
          <div
            className="flex min-w-0 flex-1 items-center gap-4 sm:gap-6"
            data-selected-work-title
          >
            <h2
              id="selected-work-heading"
              className="font-display text-[clamp(1.9rem,2.4vw,2.35rem)] italic leading-none tracking-[-0.03em] text-text-primary"
            >
              Selected Work
            </h2>
            <div className="h-px flex-1 bg-[rgba(68,71,76,0.32)]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
