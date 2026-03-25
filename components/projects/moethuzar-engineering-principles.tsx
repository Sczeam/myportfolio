import { Container } from "@/components/ui/container";

type MoethuzarEngineeringPrinciplesProps = {
  label: string;
  title: string;
  body: string;
  items: string[];
};

export function MoethuzarEngineeringPrinciples({
  label,
  title,
  body,
  items,
}: MoethuzarEngineeringPrinciplesProps) {
  return (
    <section
      data-moethuzar-engineering-principles
      aria-labelledby="moethuzar-engineering-principles-title"
      className="relative bg-[#0E0F11] pb-24 pt-24 sm:pb-28 sm:pt-28 lg:pb-[10rem] lg:pt-[12rem]"
    >
      <Container width="wide" className="relative lg:px-[8.5rem]">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
          <div
            className="lg:col-start-1 lg:col-end-9"
            data-moethuzar-engineering-principles-phase="phase1"
          >
            <p className="text-[0.75rem] uppercase leading-[1.2] tracking-[0.1em] text-[#74706A]">
              {label}
            </p>
            <h2
              id="moethuzar-engineering-principles-title"
              className="mt-6 max-w-[32rem] font-display text-[clamp(3rem,6vw,5rem)] leading-[0.9] tracking-[-0.06em] text-[#F3F0EA]"
            >
              {title}
            </h2>
          </div>

          <div
            className="lg:col-start-1 lg:col-end-7 lg:pt-[4rem]"
            data-moethuzar-engineering-principles-phase="phase2"
          >
            <p className="max-w-[38rem] text-[1.25rem] leading-[1.6] tracking-[-0.02em] text-[#CFC8BE]">
              {body}
            </p>
          </div>

          <div
            className="lg:col-start-1 lg:col-end-9 lg:pt-[6rem]"
            data-moethuzar-engineering-principles-phase="phase3"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((item, index) => (
                <div key={`${index}-${item}`} data-moethuzar-engineering-principle-item>
                  <p className="text-[0.7rem] uppercase leading-[1.2] tracking-[0.08em] text-[#74706A]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 max-w-[12rem] font-sans text-[1.05rem] font-medium leading-[1.35] tracking-[-0.02em] text-[#F3F0EA]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
