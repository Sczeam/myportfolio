import { Container } from "@/components/ui/container";

export function ThesisSection() {
  return (
    <section
      className="relative overflow-clip py-20 sm:py-24 lg:py-26 xl:py-30"
      aria-labelledby="thesis-heading"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,15,17,0)_0%,rgba(20,22,26,0.14)_24%,rgba(14,15,17,0.03)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(14,15,17,0)_0%,rgba(14,15,17,0.44)_100%)]" />
      </div>

      <Container width="wide" className="relative">
        <div className="editorial-grid">
          <div className="col-span-12 lg:col-span-8 lg:col-start-2 xl:col-span-7 xl:col-start-3">
            <div className="relative max-w-[48rem]">
              <p className="type-label mb-7 inline-flex items-center gap-3 text-text-muted/90 sm:mb-9 lg:absolute lg:left-[2%] lg:top-[0.35rem] lg:mb-0">
                <span>Point of view</span>
                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-border-strong/70"
                />
              </p>

              <div className="lg:pl-[11.5rem]">
                <div className="max-w-[34rem] lg:max-w-[38rem] xl:max-w-[40rem]">
                  <h2
                    id="thesis-heading"
                    className="type-display-section text-[clamp(2rem,2.2vw,3.15rem)] leading-[0.97] tracking-[-0.035em] text-text-primary"
                  >
                    Digital work
                    <br />
                    should feel considered
                    <br />
                    at every level.
                  </h2>
                </div>

                <div className="mt-9 max-w-[23.5rem] sm:mt-11 sm:max-w-[26rem] lg:mt-13 lg:ml-[8.75rem] lg:max-w-[25rem] xl:ml-[9.5rem] xl:max-w-[25.5rem]">
                  <p className="type-body-lg text-text-secondary">
                    I care about the decisions that shape how a product feels
                    in use, from hierarchy and spacing to motion and
                    implementation detail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
