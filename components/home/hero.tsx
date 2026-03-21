import { Container } from "@/components/ui/container";

const baseLineClassName =
  "block text-[clamp(3.75rem,9.2vw,6.5rem)] leading-[0.95] tracking-[-0.04em]";
const desktopTypographyClassName =
  "lg:leading-[0.95] lg:tracking-[-0.04em] lg:text-[5.25rem] xl:text-[7rem]";
const desktopLineClassName = `lg:absolute ${desktopTypographyClassName}`;

export function Hero() {
  return (
    <section
      data-opening-hero
      data-node-id="1:3"
      aria-labelledby="hero-heading"
      className="relative overflow-clip"
    >
      <div className="absolute inset-0" data-opening-hero-atmosphere>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,22,26,0.06)_0%,rgba(14,15,17,0)_28%,rgba(14,15,17,0.94)_100%)]" />
        <div
          className="absolute right-[-6rem] top-1/2 h-[56rem] w-[56rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(243,240,234,0.16)_0%,rgba(214,220,230,0.12)_20%,rgba(170,178,190,0.08)_38%,rgba(120,128,140,0.035)_56%,rgba(14,15,17,0)_76%)] blur-[34px]"
          data-opening-hero-glow
        />
      </div>

      <Container width="wide" className="relative lg:px-[8.5rem]">
        <div
          className="flex min-h-[100svh] flex-col justify-end pb-10 pt-28 sm:pb-12 sm:pt-32 lg:pb-28 lg:pt-28"
          data-opening-hero-content
        >
          <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_17.5rem] lg:gap-14">
            <div
              className="lg:relative lg:min-h-[23rem] lg:max-w-[42rem]"
              data-node-id="1:5"
            >
              <h1
                id="hero-heading"
                className="font-display text-text-primary [text-shadow:0_0_30px_rgba(243,240,234,0.1)]"
                data-opening-hero-heading
              >
                <span
                  className={`${baseLineClassName} lg:mt-0 ${desktopTypographyClassName}`}
                  data-opening-hero-line
                >
                  Curating
                </span>
                <span
                  className={`mt-[-0.05em] ${baseLineClassName} italic lg:left-[21.25%] lg:top-[33.33%] ${desktopLineClassName}`}
                  data-opening-hero-line
                >
                  Atmospheric
                </span>
                <span
                  className={`mt-[-0.05em] ${baseLineClassName} lg:left-0 lg:top-[66.66%] ${desktopLineClassName}`}
                  data-opening-hero-line
                >
                  Digital Space.
                </span>
              </h1>
            </div>

            <div
              className="max-w-[20rem] lg:mb-0 lg:w-[17.5rem] lg:self-end"
              data-node-id="1:12"
              data-opening-hero-copy
            >
              <p className="type-label !text-accent" data-node-id="1:13">
                Based in Manchester / Remote
              </p>

              <div
                className="mt-6 h-px w-full bg-[linear-gradient(90deg,var(--color-border-faint)_0%,rgba(32,36,43,0)_100%)]"
                data-node-id="1:15"
              />

              <p
                className="type-body-lg mt-6 max-w-[17.5rem] text-text-secondary"
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
