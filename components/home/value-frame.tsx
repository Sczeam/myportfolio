import { Container } from "@/components/ui/container";

const capabilities = [
  "Bespoke Digital Design",
  "Secure Backend Architecture",
  "Design-Aware Full-stack Engineering",
] as const;

export function ValueFrame() {
  return (
    <section
      data-value-frame
      className="relative overflow-clip pb-20 pt-8 sm:pb-24 lg:pb-[8rem] lg:pt-[2.5rem]"
      aria-labelledby="value-frame-heading"
    >
      <Container width="wide" className="relative lg:px-[8.5rem]">
        <div
          className="rounded-[6px] border border-[rgba(68,71,76,0.28)] bg-[rgba(27,28,30,0.74)] px-6 py-8 sm:px-8 sm:py-10 lg:px-[4.5rem] lg:py-[4.25rem]"
          data-value-frame-surface
        >
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,23rem)] lg:gap-[4.5rem]">
            <div data-value-frame-copy>
              <p className="type-label text-accent">Service Capabilities</p>

              <div
                className="mt-7 flex flex-col gap-5 lg:mt-8"
                data-value-frame-list
              >
                {capabilities.map((capability, index) => (
                  <h2
                    key={capability}
                    id={index === 0 ? "value-frame-heading" : undefined}
                    className="font-display text-[clamp(2rem,2.5vw,2.75rem)] leading-[0.98] tracking-[-0.04em] text-text-primary"
                  >
                    {capability}
                  </h2>
                ))}
              </div>
            </div>

            <div className="max-w-[23rem] lg:pt-[3.25rem]" data-value-frame-quote>
              <blockquote className="font-sans text-[clamp(1.35rem,1.55vw,1.75rem)] italic leading-[1.5] tracking-[-0.015em] text-text-primary">
                “His work doesn&apos;t just display information; it constructs a
                world. The balance between backend security and frontend pacing
                is unlike anything in the typical SaaS landscape.”
              </blockquote>

              <p className="type-label mt-8 text-text-subtle">
                — Technical Partner
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
