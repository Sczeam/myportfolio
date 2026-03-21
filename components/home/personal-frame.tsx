import Image from "next/image";

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
            <Image
              src="/images/hero1.jpg"
              alt="Portrait-style studio image for the personal frame"
              fill
              sizes="(max-width: 1024px) 100vw, 28rem"
              className="object-cover brightness-75"
            />
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
