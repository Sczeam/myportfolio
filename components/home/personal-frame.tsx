import { Container } from "@/components/ui/container";

export function PersonalFrame() {
  return (
    <section
      id="stack"
      data-personal-frame
      className="relative overflow-clip pb-20 pt-6 sm:pb-24 lg:pb-[8rem] lg:pt-[2rem]"
      aria-labelledby="personal-frame-heading"
    >
      <Container width="wide" className="relative lg:px-80">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,28rem)_minmax(0,32rem)] lg:gap-52">
          <div
            className="relative aspect-[0.78] overflow-hidden rounded-[4px] border border-[rgba(68,71,76,0.28)] bg-[#d7d4ce]"
            data-personal-frame-media
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(255,255,255,0.72)_0%,rgba(231,228,222,0.88)_32%,rgba(187,184,179,0.94)_72%,rgba(161,158,154,1)_100%)]" />
            <div className="absolute inset-0 opacity-[0.16] mix-blend-multiply bg-[radial-gradient(rgba(120,116,110,0.32)_0.8px,transparent_0.8px)] [bg-size:10px_10px]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.32)_0%,rgba(255,255,255,0)_18%,rgba(0,0,0,0.05)_100%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-[10px] border border-black/10 text-[3.2rem] text-black/16">
                <span aria-hidden="true">⊞</span>
              </div>
            </div>
          </div>

          <div className="max-w-[30rem]" data-personal-frame-copy>
            <h2
              id="personal-frame-heading"
              className="font-display text-[clamp(2.5rem,3.5vw,3.7rem)] leading-[0.96] tracking-[-0.04em] text-text-primary"
            >
              Refining the Stack
            </h2>

            <p className="type-subheadline mt-8 max-w-[29rem] text-text-primary">
              My practice is rooted in a deep respect for both classical design
              principles and modern engineering structuralism. I view a codebase
              as a blueprint, a living structure where the logic must be as
              precise as the line-work.
            </p>

            <p className="type-body mt-10 max-w-[24rem] text-text-secondary">
              Currently focused on engineering high-end digital environments
              that demand uncompromising security and bespoke, performant
              interfaces.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
