import { Container } from "@/components/ui/container";

const desktopLineClassName =
  "lg:absolute lg:text-[9rem] lg:leading-none lg:tracking-[-0.05em]";

export function Hero() {
  return (
    <section
      data-opening-hero
      data-node-id="1:3"
      aria-labelledby="hero-heading"
      className="relative overflow-clip"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,22,26,0.06)_0%,rgba(14,15,17,0)_28%,rgba(14,15,17,0.94)_100%)]" />
        <div className="absolute right-[-14rem] top-[16%] h-[37.5rem] w-[37.5rem] rounded-full bg-accent/14 blur-[60px] opacity-30" />
        <div className="absolute inset-0 opacity-[0.02] [background-image:radial-gradient(rgba(243,240,234,0.8)_0.7px,transparent_0.7px)] [background-position:0_0] [background-size:14px_14px]" />
      </div>

      <Container width="wide" className="relative">
        <div className="flex min-h-[100svh] flex-col justify-end pb-10 pt-28 sm:pb-12 sm:pt-32 lg:pb-32 lg:pt-24">
          <div className="grid items-end gap-10 lg:grid-cols-[56.5rem_17.5rem] lg:justify-center lg:gap-4">
            <div
              className="lg:relative lg:h-[27rem] lg:w-[56.5rem]"
              data-node-id="1:5"
            >
              <h1
                id="hero-heading"
                className="font-display text-text-primary [text-shadow:0_0_30px_rgba(243,240,234,0.1)]"
              >
                <span className="block text-[clamp(3.75rem,9.2vw,6.5rem)] leading-[0.94] tracking-[-0.05em] lg:mt-0 lg:leading-none lg:text-[9rem] lg:tracking-[-0.05em]">
                  Curating
                </span>
                <span
                  className={`mt-[-0.08em] block text-[clamp(3.75rem,9.2vw,6.5rem)] leading-[0.94] tracking-[-0.05em] italic lg:left-[12rem] lg:top-[9rem] ${desktopLineClassName}`}
                >
                  Atmospheric
                </span>
                <span
                  className={`mt-[-0.08em] block text-[clamp(3.75rem,9.2vw,6.5rem)] leading-[0.94] tracking-[-0.05em] lg:left-0 lg:top-[18rem] ${desktopLineClassName}`}
                >
                  Digital Space.
                </span>
              </h1>
            </div>

            <div
              className="max-w-[20rem] lg:mb-0 lg:w-[17.5rem] lg:self-end"
              data-node-id="1:12"
            >
              <p className="type-label text-accent/95" data-node-id="1:13">
                Based in Yangon / Remote
              </p>

              <div
                className="mt-6 h-px w-full bg-[linear-gradient(90deg,var(--color-border-faint)_0%,rgba(32,36,43,0)_100%)]"
                data-node-id="1:15"
              />

              <p
                className="mt-6 max-w-[17.5rem] text-[1.125rem] leading-[1.45] font-normal tracking-[-0.015em] text-[#c4c6cc]"
                data-node-id="1:16"
              >
                Multidisciplinary designer weaving architectural intent into the
                fabric of the modern web.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
