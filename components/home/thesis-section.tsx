import { Container } from "@/components/ui/container";

export function ThesisSection() {
  return (
    <section
      data-opening-thesis
      className="relative overflow-clip pb-20 pt-24 sm:pb-24 sm:pt-28 lg:pb-[7rem] lg:pt-[10.5rem]"
      aria-labelledby="thesis-heading"
    >
      <Container width="wide" className="relative lg:px-[8.5rem]">
        <div
          className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-end lg:gap-16"
          data-opening-thesis-content
        >
          <div data-opening-thesis-statement className="max-w-[41rem]">
            <h2
              id="thesis-heading"
              className="overflow-visible font-display text-[clamp(2.45rem,4.8vw,4.5rem)] leading-[1.08] tracking-[-0.035em] text-text-primary"
            >
              <span className="block overflow-hidden pb-[0.08em]">
                <span className="block overflow-visible" data-thesis-line-inner>
                  I believe interfaces should behave
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.08em]">
                <span className="block overflow-visible" data-thesis-line-inner>
                  like quiet architecture, guiding
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.08em]">
                <span className="block overflow-visible" data-thesis-line-inner>
                  the inhabitant without the need
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.08em]">
                <span className="block overflow-visible" data-thesis-line-inner>
                  for noise.
                </span>
              </span>
            </h2>
          </div>

          <div className="lg:self-end">
            <div
              data-opening-thesis-note
              className="max-w-[19rem] border-l border-border-soft pl-6 lg:ml-auto"
            >
              <p className="type-body-lg text-text-secondary">
                The &quot;Silent Curator&quot; approach rejects the
                hyper-stimulated SaaS aesthetic. Instead, we embrace rhythmic
                tension, negative space, and typographic authority to build
                products that feel composed, not just assembled.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
