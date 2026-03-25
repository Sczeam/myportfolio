import { Container } from "@/components/ui/container";

type MoethuzarFinalFrameProps = {
  label: string;
  title: string;
  body: string;
};

export function MoethuzarFinalFrame({
  label,
  title,
  body,
}: MoethuzarFinalFrameProps) {
  const lines = [
    "Considered on the",
    "surface. Dependable",
    "underneath.",
  ];

  return (
    <section
      data-moethuzar-final-frame
      aria-labelledby="moethuzar-final-frame-title"
      className="relative overflow-hidden bg-[#0E0F11] pb-28 pt-24 sm:pb-32 sm:pt-28 lg:pb-[20rem] lg:pt-[18rem]"
    >
      <Container width="wide" className="relative lg:px-[8.5rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div
            className="lg:col-start-4 lg:col-end-10"
            data-moethuzar-final-frame-phase="phase1"
          >
            <p className="text-center text-[0.75rem] uppercase leading-[1.2] tracking-[0.22em] text-[#74706A] lg:text-left">
              {label}
            </p>
          </div>

          <div
            className="mt-8 lg:col-start-2 lg:col-end-12 lg:mt-10"
            data-moethuzar-final-frame-phase="phase2"
          >
            <h2
              id="moethuzar-final-frame-title"
              className="font-display text-[clamp(3.7rem,12vw,6rem)] italic leading-[0.9] tracking-[-0.07em] text-[#F3F0EA] lg:text-center"
            >
              <span className="sr-only">{title}</span>
              {lines.map((line, index) => (
                <span
                  key={`${index}-${line}`}
                  className="block overflow-hidden pb-[24px]"
                  data-moethuzar-final-frame-line-mask
                >
                  <span
                    className="block"
                    data-moethuzar-final-frame-line
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h2>
          </div>

          <div
            className="mt-16 lg:col-start-4 lg:col-end-10 lg:mt-[7rem]"
            data-moethuzar-final-frame-phase="phase3"
          >
            <div className="mx-auto h-px w-full max-w-[14.5rem] bg-[#20242B]" />
            <p className="mt-8 text-center text-[0.78rem] uppercase leading-[1.2] tracking-[0.12em] text-[#74706A]">
              {body}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
