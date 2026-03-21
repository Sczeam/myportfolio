import { Container } from "@/components/ui/container";

export function SelectedWorkIntro() {
  return (
    <section
      id="selected-work"
      data-selected-work-intro
      className="relative overflow-clip pt-[3.25rem] pb-9 sm:pt-[3.75rem] sm:pb-11 lg:pt-[4.5rem] lg:pb-[3.25rem] xl:pt-[5rem] xl:pb-[3.75rem]"
      aria-labelledby="selected-work-heading"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,15,17,0)_0%,rgba(20,22,26,0.08)_58%,rgba(14,15,17,0.02)_100%)]" />
      </div>

      <Container width="wide" className="relative">
        <div className="editorial-grid items-end">
          <div className="col-span-12 md:col-span-7 md:col-start-2 xl:col-span-5 xl:col-start-3">
            <div
              data-selected-work-title
              className="max-w-[15rem] sm:max-w-[18rem] md:max-w-[20rem] xl:max-w-[21rem]"
            >
              <h2
                id="selected-work-heading"
                className="type-display-section text-[clamp(2.05rem,2.8vw,3.3rem)] leading-[0.94] tracking-[-0.04em] text-text-primary"
              >
                Selected work
              </h2>
            </div>
          </div>

          <div className="col-span-12 mt-5 md:col-span-4 md:col-start-9 md:mt-0 xl:col-span-3 xl:col-start-8">
            <div
              data-selected-work-note
              className="max-w-[18.75rem] pl-[1.4rem] sm:max-w-[20.5rem] sm:pl-[1.8rem] md:ml-auto md:max-w-[18.5rem] md:pl-0 lg:max-w-[19rem] xl:max-w-[19.5rem]"
            >
              <p className="type-body text-text-secondary/92">
                A small number of projects shaped through design sensitivity and
                frontend precision.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
